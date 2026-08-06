'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadDetails, hasAnyDetails, detailsProgress } from '@/lib/details';

/**
 * Sits at the top of the scripts, letters and directory pages. Tells someone
 * who has not saved their details that they can stop re-typing them, and
 * reassures someone who has that the text below is already filled in.
 */
export function DetailsPrompt() {
  const [state, setState] = useState<{ ready: boolean; has: boolean; filled: number; total: number }>({
    ready: false,
    has: false,
    filled: 0,
    total: 0,
  });

  useEffect(() => {
    const details = loadDetails();
    const { filled, total } = detailsProgress(details);
    setState({ ready: true, has: hasAnyDetails(details), filled, total });
  }, []);

  // Render nothing until mounted, so the server and client agree.
  if (!state.ready) return null;

  if (state.has) {
    return (
      <div className="bg-success-light border border-success/30 rounded-xl p-4 mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-foreground">
          Your saved details ({state.filled} of {state.total}) have been filled in below, so you do not need to type them again.
        </p>
        <Link href="/your-details" className="text-sm font-medium text-primary hover:underline shrink-0">
          Update them
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-primary-light rounded-xl p-5 mb-8">
      <h2 className="font-semibold text-primary-dark mb-1">Tired of typing the same things?</h2>
      <p className="text-sm text-primary-dark/90 leading-relaxed mb-3">
        Every script and letter below asks for the same handful of details. Enter them once and we will fill them in
        for you from now on. They stay on your device, and we never see them.
      </p>
      <Link
        href="/your-details"
        className="inline-block px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
      >
        Enter your details once
      </Link>
    </div>
  );
}
