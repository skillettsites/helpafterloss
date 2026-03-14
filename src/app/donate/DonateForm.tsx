'use client';

import { useState } from 'react';

const PRESETS = [
  { label: '£3', amount: 300 },
  { label: '£5', amount: 500 },
  { label: '£10', amount: 1000 },
  { label: '£20', amount: 2000 },
  { label: '£50', amount: 5000 },
];

export function DonateForm() {
  const [selected, setSelected] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function selectPreset(amount: number) {
    setSelected(amount);
    setIsCustom(false);
    setCustomAmount('');
  }

  function enableCustom() {
    setSelected(null);
    setIsCustom(true);
  }

  async function handleDonate() {
    setLoading(true);
    setError('');

    try {
      const body = isCustom
        ? { customAmount: customAmount }
        : { amount: selected };

      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError('Could not connect. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  const canDonate = isCustom
    ? customAmount && Number(customAmount) >= 1 && Number(customAmount) <= 1000
    : selected !== null;

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h2 className="text-lg font-bold text-foreground mb-4">Choose an amount</h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
        {PRESETS.map(preset => (
          <button
            key={preset.amount}
            onClick={() => selectPreset(preset.amount)}
            className={`py-3 px-2 rounded-lg border text-center font-semibold transition-colors ${
              selected === preset.amount && !isCustom
                ? 'bg-primary text-white border-primary'
                : 'bg-background text-foreground border-border hover:border-primary'
            }`}
          >
            {preset.label}
          </button>
        ))}
        <button
          onClick={enableCustom}
          className={`py-3 px-2 rounded-lg border text-center font-semibold transition-colors ${
            isCustom
              ? 'bg-primary text-white border-primary'
              : 'bg-background text-foreground border-border hover:border-primary'
          }`}
        >
          Other
        </button>
      </div>

      {isCustom && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-1">
            Enter amount (£1 to £1,000)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted font-medium">£</span>
            <input
              type="number"
              min="1"
              max="1000"
              step="0.01"
              value={customAmount}
              onChange={e => setCustomAmount(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="5.00"
              autoFocus
            />
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      <button
        onClick={handleDonate}
        disabled={!canDonate || loading}
        className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {loading ? 'Redirecting to Stripe...' : `Donate ${
          isCustom && customAmount ? `£${Number(customAmount).toFixed(2)}` :
          selected ? `£${(selected / 100).toFixed(0)}` : ''
        }`}
      </button>

      <p className="text-xs text-muted text-center mt-3">
        One-off donation. You will not be charged again.
      </p>
    </div>
  );
}
