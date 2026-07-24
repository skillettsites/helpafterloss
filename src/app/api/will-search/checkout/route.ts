import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import {
  WILL_SEARCH_PRICE_PENCE,
  WILL_SEARCH_NAME,
  cleanEnv,
} from '@/lib/will-search';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getStripe() {
  const key = cleanEnv(process.env.STRIPE_SECRET_KEY);
  if (!key) throw new Error('STRIPE_SECRET_KEY is not configured');
  return new Stripe(key);
}

// Stripe metadata values are capped at 500 chars; keep a margin.
function meta(value: unknown): string {
  return String(value ?? '').trim().slice(0, 450);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const origin = request.headers.get('origin') || 'https://helpafterloss.co.uk';

    const deceasedName = meta(body.deceasedName);
    const otherNames = meta(body.otherNames);
    const deathDate = meta(body.deathDate);
    const location = meta(body.location);
    const customerName = meta(body.customerName);
    const customerEmail = meta(body.customerEmail).toLowerCase();
    const notes = meta(body.notes);

    if (!deceasedName || deceasedName.length < 3) {
      return NextResponse.json({ error: 'Please enter the full name of the person who died.' }, { status: 400 });
    }
    if (!deathDate) {
      return NextResponse.json({ error: 'Please enter the date of death, an approximate year is fine.' }, { status: 400 });
    }
    if (!customerName) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address so we can send your documents.' }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: customerEmail,
      allow_promotion_codes: true,
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            unit_amount: WILL_SEARCH_PRICE_PENCE,
            product_data: {
              name: WILL_SEARCH_NAME,
              description: `Search for ${deceasedName}. All government fees included.`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        product: 'will_search',
        deceased_name: deceasedName,
        other_names: otherNames,
        death_date: deathDate,
        location,
        customer_name: customerName,
        notes,
      },
      success_url: `${origin}/will-search/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/will-search?checkout=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('will-search checkout error', err);
    return NextResponse.json(
      { error: 'Something went wrong starting the payment. Please try again.' },
      { status: 500 }
    );
  }
}
