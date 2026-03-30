'use client';

import { useState } from 'react';

export function ThresholdEmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: will connect to newsletter service in future
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-success-light rounded-xl p-6 my-10">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-green-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">Thank you</p>
            <p className="text-sm text-green-700">We will let you know if any bank thresholds change. No spam, ever.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6 my-10">
      <h3 className="font-semibold text-foreground mb-1">Get notified when bank thresholds change</h3>
      <p className="text-sm text-muted leading-relaxed mb-4">
        We check thresholds monthly and notify you of any changes. No spam.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 text-sm border border-border rounded-lg bg-white text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <button
          type="submit"
          className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap"
        >
          Notify me
        </button>
      </form>
    </div>
  );
}
