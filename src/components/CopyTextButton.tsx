'use client';

import { useState } from 'react';

interface CopyTextButtonProps {
  text: string;
  /** Button label before copying. Defaults to "Copy". */
  label?: string;
  /** Extra classes, so this works both floating in a corner and inline. */
  className?: string;
}

/**
 * Copy-to-clipboard with a visible confirmation. Grieving people are often
 * reading a script while on hold, so the feedback needs to be obvious and the
 * tap target needs to be big enough to hit without looking.
 */
export function CopyTextButton({ text, label = 'Copy', className = '' }: CopyTextButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers, and any context where the clipboard API is blocked.
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } catch {
        // Nothing more we can do; the text is still on screen to read from.
      }
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-md border transition-colors ${
        copied
          ? 'text-green-700 bg-green-50 border-green-200'
          : 'text-muted bg-gray-50 border-border hover:bg-gray-100 hover:text-foreground'
      } ${className}`}
      aria-live="polite"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Copied</span>
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
