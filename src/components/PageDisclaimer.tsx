import Link from 'next/link';

interface PageDisclaimerProps {
  lastReviewed?: string;
  jurisdiction?: 'england-wales' | 'scotland' | 'northern-ireland' | 'all-uk';
}

export function PageDisclaimer({ lastReviewed = 'March 2026', jurisdiction }: PageDisclaimerProps) {
  const jurisdictionNote = jurisdiction === 'scotland'
    ? ' This guide covers Scotland specifically.'
    : jurisdiction === 'northern-ireland'
      ? ' This guide covers Northern Ireland specifically.'
      : jurisdiction === 'england-wales'
        ? ' This guide covers England and Wales. Scotland and Northern Ireland have different rules.'
        : '';

  return (
    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 my-8 text-sm text-amber-800 dark:text-amber-200">
      <p className="font-medium mb-1">Important</p>
      <p>
        This information is for general guidance only. It is not legal, financial, or
        tax advice. Laws and regulations change. Always verify current details with the
        relevant authority.{jurisdictionNote} Last reviewed: {lastReviewed}.
        If you spot an error, please{' '}
        <Link href="/about" className="underline hover:no-underline">
          contact us
        </Link>
        . See our{' '}
        <Link href="/editorial-policy" className="underline hover:no-underline">
          editorial policy
        </Link>
        .
      </p>
    </div>
  );
}
