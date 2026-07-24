'use client';

import { useState } from 'react';

export function OrderForm() {
  const [deceasedName, setDeceasedName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [deathDate, setDeathDate] = useState('');
  const [location, setLocation] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/will-search/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deceasedName,
          otherNames,
          deathDate,
          location,
          customerName,
          customerEmail,
          notes,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError('Something went wrong. Please check your connection and try again.');
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary';
  const labelClass = 'block text-sm font-medium text-foreground mb-1';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="order-form">
      <div>
        <label htmlFor="ws-deceased" className={labelClass}>
          Full name of the person who died <span className="text-primary">*</span>
        </label>
        <input
          id="ws-deceased"
          type="text"
          required
          value={deceasedName}
          onChange={(e) => setDeceasedName(e.target.value)}
          placeholder="e.g. Margaret Anne Wilson"
          className={inputClass}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="ws-other" className={labelClass}>
          Any other names they were known by <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="ws-other"
          type="text"
          value={otherNames}
          onChange={(e) => setOtherNames(e.target.value)}
          placeholder="Maiden name, previous married name, or a different first name they used"
          className={inputClass}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ws-death" className={labelClass}>
            Date of death <span className="text-primary">*</span>
          </label>
          <input
            id="ws-death"
            type="text"
            required
            value={deathDate}
            onChange={(e) => setDeathDate(e.target.value)}
            placeholder="Exact date if known, or just the year"
            className={inputClass}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="ws-location" className={labelClass}>
            Town or county of their last address <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            id="ws-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Norwich, Norfolk"
            className={inputClass}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ws-name" className={labelClass}>
            Your name <span className="text-primary">*</span>
          </label>
          <input
            id="ws-name"
            type="text"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="So we know who to write to"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="ws-email" className={labelClass}>
            Your email <span className="text-primary">*</span>
          </label>
          <input
            id="ws-email"
            type="email"
            required
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="Where we send the documents"
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ws-notes" className={labelClass}>
          Anything else that might help <span className="text-muted font-normal">(optional)</span>
        </label>
        <textarea
          id="ws-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="For example: you are the executor, you have already searched and found nothing, or there is a family situation we should handle sensitively"
          rows={3}
          className={inputClass}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Taking you to secure payment...' : 'Start my search, £29 all-in'}
      </button>
      <p className="text-xs text-muted">
        Secure card payment via Stripe. The £29 includes every government fee. We start within 1 working day.
      </p>
    </form>
  );
}
