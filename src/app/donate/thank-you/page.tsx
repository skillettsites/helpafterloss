import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Thank You for Your Donation',
  description: 'Thank you for supporting Help After Loss. Your donation helps keep this resource free for everyone.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumbs items={[
        { label: 'Donate', href: '/donate' },
        { label: 'Thank You' },
      ]} />

      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Thank you for your generosity
        </h1>

        <p className="text-lg text-muted mb-6 max-w-xl mx-auto leading-relaxed">
          Your donation helps keep Help After Loss free for everyone who needs it.
          Any funds remaining after running costs are donated to verified UK bereavement charities.
        </p>

        <p className="text-muted mb-8">
          A receipt has been sent to your email address by Stripe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/guides/helping-someone-grieve"
            className="px-6 py-3 bg-card border border-border text-foreground rounded-xl font-semibold hover:border-primary transition-colors"
          >
            How to help someone who is grieving
          </Link>
        </div>
      </div>
    </main>
  );
}
