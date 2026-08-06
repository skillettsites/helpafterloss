'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { EMPTY_DETAILS, PersonalDetails, loadDetails, fillPlaceholders, hasAnyDetails } from '@/lib/details';
import { CopyTextButton } from './CopyTextButton';

interface PersonalisedTextProps {
  /** The script or letter text, containing [placeholders]. */
  text: string;
  /** Show a copy button. */
  copyable?: boolean;
  copyLabel?: string;
  className?: string;
  /** Wrap the text in quote marks, as the call scripts do. */
  quoted?: boolean;
}

/**
 * Renders a script or letter with the user's saved details filled in.
 *
 * Server-rendered output deliberately keeps the raw [placeholders], which is
 * both the correct canonical content for search engines and the right thing to
 * show someone who has not saved any details. Filling happens after mount.
 */
export function PersonalisedText({
  text,
  copyable = false,
  copyLabel = 'Copy',
  className = '',
  quoted = false,
}: PersonalisedTextProps) {
  const [details, setDetails] = useState<PersonalDetails>(EMPTY_DETAILS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDetails(loadDetails());
    setMounted(true);
  }, []);

  const { text: filled, remaining } = fillPlaceholders(text, mounted ? details : EMPTY_DETAILS);
  const personalised = mounted && hasAnyDetails(details);

  return (
    <div className={className}>
      <p className="text-sm text-foreground leading-relaxed italic">
        {quoted ? `“${filled}”` : filled}
      </p>

      {(copyable || (personalised && remaining.length > 0)) && (
        <div className="flex flex-wrap items-center gap-2 mt-3">
          {copyable && <CopyTextButton text={filled} label={copyLabel} />}
          {personalised && remaining.length > 0 && (
            <span className="text-xs text-muted">
              Still to fill in yourself: {remaining.map(r => `[${r}]`).join(', ')}
            </span>
          )}
          {!personalised && copyable && (
            <Link href="/your-details" className="text-xs text-primary hover:underline">
              Fill these in automatically
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
