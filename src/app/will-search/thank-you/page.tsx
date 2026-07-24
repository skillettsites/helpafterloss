import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You: Your Will Search Has Started',
  robots: { index: false, follow: false },
};

export default function WillSearchThankYouPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-16 text-center">
      <div className="text-5xl mb-6" aria-hidden="true">✓</div>
      <h1 className="text-3xl font-bold text-foreground mb-4">Thank you. Your search has started.</h1>
      <p className="text-muted leading-relaxed mb-8">
        A confirmation email is on its way to you now. Within 1 working day we will run your
        search across the England &amp; Wales probate records and place the official order,
        or lodge a standing search if probate has not been granted yet. Everything arrives
        by email, with a plain-English explanation of what the documents mean.
      </p>
      <div className="bg-card rounded-xl border border-border p-5 text-left mb-8">
        <h2 className="font-semibold text-foreground mb-3">What happens next</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li>1. We search name variations and multiple index years, today or the next working day.</li>
          <li>2. We place the official order with the Probate Registry, all fees already covered.</li>
          <li>3. HMCTS supplies the documents, typically within a few weeks, and we send them straight to you.</li>
          <li>4. If no grant exists yet, your 6-month standing search means a late grant still reaches you automatically.</li>
        </ul>
      </div>
      <p className="text-sm text-muted mb-8">
        No email within an hour? Check spam, then write to us by replying to any of our messages.
      </p>
      <Link href="/guide" className="text-primary hover:underline font-medium">
        While you wait: our step-by-step bereavement guide
      </Link>
    </div>
  );
}
