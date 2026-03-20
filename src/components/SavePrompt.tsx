'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { getCompletedTaskIds, loadAnswers, getTaskNotes, getSnoozedTasks, getSkippedTasks } from '@/lib/storage';
import { useRouter } from 'next/navigation';

export function SavePrompt() {
  const { user, configured, signInWithMagicLink, saveExtendedToCloud } = useAuth();
  const router = useRouter();
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Show the prompt after user completes 2+ tasks
  useEffect(() => {
    if (!configured || user || dismissed) return;
    const checkInterval = setInterval(() => {
      const completed = getCompletedTaskIds();
      if (completed.length >= 2) {
        setShowPrompt(true);
        clearInterval(checkInterval);
      }
    }, 3000);
    return () => clearInterval(checkInterval);
  }, [configured, user, dismissed]);

  // After sign in, transfer local data to cloud and redirect
  useEffect(() => {
    if (!user || !showPrompt) return;
    async function transferAndRedirect() {
      const answers = loadAnswers() || {};
      const completedTaskIds = getCompletedTaskIds();
      const notes = getTaskNotes();
      const snoozedTasks = getSnoozedTasks();
      const skippedTasks = getSkippedTasks();
      await saveExtendedToCloud({ answers, completedTaskIds, notes, snoozedTasks, skippedTasks });
      router.push('/dashboard');
    }
    transferAndRedirect();
  }, [user, showPrompt, saveExtendedToCloud, router]);

  if (!configured || user || dismissed || !showPrompt) return null;

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const { error } = await signInWithMagicLink(email);
      if (error) {
        setError(error);
      } else {
        setSent(true);
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-warm border border-warm-border rounded-xl p-5 mb-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {sent ? (
            <>
              <h3 className="font-semibold text-amber-900 mb-1">Check your email</h3>
              <p className="text-sm text-amber-800 mb-2">
                We have sent a sign-in link to <span className="font-medium">{email}</span>. Click it to save your progress and access your personal dashboard anytime.
              </p>
              <p className="text-xs text-amber-700">
                Did not receive it? Check your spam folder, or{' '}
                <button onClick={() => setSent(false)} className="underline">try again</button>.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-amber-900 mb-1">Save your progress so you can come back anytime</h3>
              <p className="text-sm text-amber-800 mb-3">
                Enter your email and we will send you a link. No password needed. Your data is private and encrypted.
              </p>
              {error && (
                <p className="text-sm text-urgent mb-2">{error}</p>
              )}
              <form onSubmit={handleSendLink} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-amber-300 bg-white text-foreground text-sm focus:border-primary focus:ring-0 outline-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {sending ? 'Sending...' : 'Send me a link'}
                </button>
              </form>
            </>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-600/50 hover:text-amber-800 flex-shrink-0 p-1"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
