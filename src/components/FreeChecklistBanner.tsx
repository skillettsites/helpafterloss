'use client';

import Link from 'next/link';

interface FreeChecklistBannerProps {
  variant?: 'inline' | 'bottom';
}

export function FreeChecklistBanner({ variant = 'inline' }: FreeChecklistBannerProps) {
  const trackDownload = () => {
    try {
      const data = JSON.stringify({ path: '/__checklist-download', referrer: window.location.pathname });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track-pageview', new Blob([data], { type: 'application/json' }));
      } else {
        fetch('/api/track-pageview', { method: 'POST', body: data, keepalive: true, headers: { 'Content-Type': 'application/json' } });
      }
    } catch {}
  };

  return (
    <div className="bg-warm border border-warm-border rounded-xl p-6 my-10 no-print">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-amber-900 mb-2">
            {variant === 'bottom'
              ? 'Before you go, we have something that might help'
              : 'We know this is an incredibly difficult time'}
          </h3>
          <p className="text-sm text-amber-800 leading-relaxed mb-4">
            There is so much to think about, and it can feel overwhelming. We have put together a
            free checklist of everything that needs to be done, step by step, so you do not have
            to worry about forgetting anything. Take it at your own pace.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/print-checklist"
              onClick={trackDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Free Checklist
            </Link>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-amber-900 bg-amber-100 border border-amber-300 rounded-xl hover:bg-amber-200 transition-colors"
            >
              Or get a personalised one
            </Link>
          </div>
          <p className="text-xs text-amber-700 mt-3">
            Completely free. No sign-up required. You can print it or save it as a PDF.
          </p>
        </div>
      </div>
    </div>
  );
}
