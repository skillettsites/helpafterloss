'use client';

import { useState } from 'react';

export function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-primary-light border-b border-sky-200 no-print" role="complementary" aria-label="Support helpline">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <p className="text-sm text-primary-dark">
          Need someone to talk to? Call{' '}
          <a href="tel:116123" className="font-semibold underline">
            Samaritans free on 116 123
          </a>{' '}
          <span className="hidden sm:inline">, 24 hours a day, 365 days a year</span>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="ml-4 p-1 text-primary-dark hover:text-primary rounded-full"
          aria-label="Dismiss helpline banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
