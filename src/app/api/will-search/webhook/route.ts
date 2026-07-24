import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import StripeSdk from 'stripe';
import { Resend } from 'resend';
import { cleanEnv, GOVUK_ONLINE_AVAILABILITY } from '@/lib/will-search';

export const runtime = 'nodejs';
export const maxDuration = 60;

// v1 fulfilment is deliberately manual: the paid order is recorded in Stripe,
// the customer gets a confirmation email, and we get a fulfilment alert
// (email + Telegram) prompting the GOV.UK order within 1 working day.
// No database dependency; Stripe is the order record at this volume.

function getStripe() {
  const key = cleanEnv(process.env.STRIPE_SECRET_KEY);
  if (!key) throw new Error('STRIPE_SECRET_KEY is not configured');
  return new StripeSdk(key);
}

const FULFILMENT_EMAIL = 'skillettsites@gmail.com';
const FROM_ADDRESS = 'Help After Loss <notifications@helpafterloss.co.uk>';

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const sig = req.headers.get('stripe-signature');
  if (!sig) return NextResponse.json({ error: 'missing_signature' }, { status: 400 });

  const body = await req.text();
  const secret = cleanEnv(process.env.STRIPE_WEBHOOK_SECRET_WILL_SEARCH || process.env.STRIPE_WEBHOOK_SECRET);
  if (!secret) {
    console.error('will-search webhook: no webhook secret configured');
    return NextResponse.json({ error: 'webhook_not_configured' }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch {
    return NextResponse.json({ error: 'bad_signature' }, { status: 400 });
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ ok: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  if (session.metadata?.product !== 'will_search') {
    return NextResponse.json({ ok: true });
  }

  const m = session.metadata ?? {};
  const customerEmail = session.customer_details?.email ?? session.customer_email ?? '';
  const amount = ((session.amount_total ?? 0) / 100).toFixed(2);

  let customerOk = false;
  let alertOk = false;

  const resendKey = cleanEnv(process.env.RESEND_API_KEY);
  if (resendKey) {
    const resend = new Resend(resendKey);

    if (customerEmail) {
      try {
        await resend.emails.send({
          from: FROM_ADDRESS,
          to: customerEmail,
          subject: 'Your will search has started, Help After Loss',
          text: [
            `Hello ${m.customer_name || ''},`.trim(),
            '',
            `Thank you. We have received your order (£${amount}) and your search for the probate records of ${m.deceased_name} has started.`,
            '',
            'What happens next:',
            '1. Within 1 working day we run the search across the official England & Wales probate records, including name variations and nearby years (records are filed under the year the grant was issued, which is often later than the year of death, a common reason DIY searches come back empty).',
            '2. If a record exists, we place the official order for the grant of probate and the will (where one was proved). HMCTS makes new records available ' + GOVUK_ONLINE_AVAILABILITY + ', and most document copies arrive within a few weeks. We send everything to this email address with a plain-English explanation of what it means.',
            '3. If no record exists yet, we set up an official 6-month standing search in your name instead, so the documents are sent automatically if probate is granted in that period, and we explain what that usually means for the estate.',
            '',
            'You do not need to do anything else. If you have any questions, just reply to this email.',
            '',
            'With sympathy and best wishes,',
            'Help After Loss',
            'helpafterloss.co.uk',
          ].join('\n'),
        });
        customerOk = true;
      } catch (err) {
        console.error('will-search customer email failed', err);
      }
    }

    try {
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: FULFILMENT_EMAIL,
        subject: `ACTION: will search order £${amount}, ${m.deceased_name}`,
        text: [
          'New managed will search order. Place the GOV.UK order within 1 working day.',
          '',
          `Deceased: ${m.deceased_name}`,
          `Other names: ${m.other_names || 'none given'}`,
          `Date of death: ${m.death_date}`,
          `Location: ${m.location || 'not given'}`,
          `Notes: ${m.notes || 'none'}`,
          '',
          `Customer: ${m.customer_name} <${customerEmail}>`,
          `Paid: £${amount}`,
          `Stripe session: ${session.id}`,
          '',
          'Fulfilment: https://www.gov.uk/search-will-probate (£16 copy, or £4 standing search if no grant found).',
          'Remember: search grant years AFTER the death year too, records file under the grant year.',
          `Customer confirmation email sent: ${customerOk ? 'yes' : 'NO, follow up manually'}`,
        ].join('\n'),
      });
      alertOk = true;
    } catch (err) {
      console.error('will-search fulfilment alert email failed', err);
    }
  } else {
    console.error('will-search webhook: RESEND_API_KEY not configured');
  }

  // Telegram nudge (best-effort, mirrors the PRSCheck sale alert pattern).
  const botToken = cleanEnv(process.env.TELEGRAM_BOT_TOKEN);
  const chatId = cleanEnv(process.env.TELEGRAM_CHAT_ID);
  if (botToken && chatId) {
    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: [
            `💰 HAL sale, £${amount} Will Search`,
            '',
            `Deceased: ${m.deceased_name} (${m.death_date})`,
            `Buyer: ${m.customer_name} <${customerEmail}>`,
            'ACTION: place GOV.UK order within 1 working day.',
          ].join('\n'),
          disable_web_page_preview: true,
        }),
      });
    } catch (err) {
      console.error('will-search telegram alert failed', err);
    }
  }

  // If we could not notify anyone at all, ask Stripe to retry the webhook.
  if (!customerOk && !alertOk) {
    return NextResponse.json({ error: 'notifications_failed' }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
