import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY is not configured');
  return new Stripe(key);
}

export async function POST(request: NextRequest) {
  try {
    const { amount, customAmount } = await request.json();

    // Use custom amount if provided, otherwise use preset
    const donationAmount = customAmount ? Math.round(Number(customAmount) * 100) : Number(amount);

    if (!donationAmount || donationAmount < 100 || donationAmount > 100000) {
      return NextResponse.json(
        { error: 'Please enter a donation between £1 and £1,000' },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const origin = request.headers.get('origin') || 'https://helpafterloss.co.uk';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Donation to Help After Loss',
              description: 'Supporting free bereavement guidance for families across the UK',
            },
            unit_amount: donationAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/donate/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate`,
      submit_type: 'donate',
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
