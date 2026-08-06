'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { EMPTY_DETAILS, PersonalDetails, loadDetails, fillPlaceholders, hasAnyDetails } from '@/lib/details';
import { CopyTextButton } from './CopyTextButton';

/**
 * A template letter with the user's saved details already filled in, so they
 * can copy it straight into an email or print it without editing anything they
 * have already told us once.
 */
export function PersonalisedLetter({ letter }: { letter: string }) {
  const [details, setDetails] = useState<PersonalDetails>(EMPTY_DETAILS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDetails(loadDetails());
    setMounted(true);
  }, []);

  const { text: filled, remaining } = fillPlaceholders(letter, mounted ? details : EMPTY_DETAILS);
  const personalised = mounted && hasAnyDetails(details);

  return (
    <div>
      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <CopyTextButton text={filled} label="Copy letter" />
        </div>
        <pre className="bg-white border border-border rounded-lg p-6 pt-14 text-sm text-foreground leading-relaxed whitespace-pre-wrap font-sans overflow-x-auto">
          {filled}
        </pre>
      </div>

      {personalised ? (
        remaining.length > 0 && (
          <p className="text-xs text-muted mt-2">
            Your details are filled in. Still to add yourself: {remaining.map(r => `[${r}]`).join(', ')}
          </p>
        )
      ) : (
        <p className="text-xs text-muted mt-2">
          <Link href="/your-details" className="text-primary hover:underline">Save your details once</Link>
          {' '}and we will fill this letter in for you.
        </p>
      )}
    </div>
  );
}
