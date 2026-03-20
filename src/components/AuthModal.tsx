'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'magic' | 'signin' | 'signup';
  onSuccess?: () => void;
}

export function AuthModal({ isOpen, onClose, initialMode = 'magic', onSuccess }: AuthModalProps) {
  const { signIn, signUp, signInWithMagicLink } = useAuth();
  const [mode, setMode] = useState<'magic' | 'signin' | 'signup' | 'check-email'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const { error } = await signInWithMagicLink(email);
      if (error) {
        setError(error);
      } else {
        setMode('check-email');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);

    try {
      if (mode === 'signup') {
        const { error } = await signUp(email, password);
        if (error) {
          setError(error);
        } else {
          setSuccess('Check your email for a confirmation link. You can then sign in.');
          setMode('signin');
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error);
        } else {
          onSuccess?.();
          onClose();
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setMode(initialMode);
    setError(null);
    setSuccess(null);
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={handleClose}>
      <div
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            {mode === 'check-email'
              ? 'Check your email'
              : mode === 'signup'
                ? 'Create an account'
                : mode === 'signin'
                  ? 'Sign in with password'
                  : 'Save your progress'
            }
          </h2>
          <button
            onClick={handleClose}
            className="p-1 text-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Check email confirmation screen */}
        {mode === 'check-email' && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-foreground mb-2">
              We have sent a sign-in link to:
            </p>
            <p className="font-medium text-primary mb-4">{email}</p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Click the link in your email to sign in. No password needed. The link will expire in 1 hour.
            </p>
            <p className="text-xs text-muted">
              Did not receive it? Check your spam folder, or{' '}
              <button
                onClick={() => { setMode('magic'); setError(null); }}
                className="text-primary font-medium hover:underline"
              >
                try again
              </button>
              .
            </p>
          </div>
        )}

        {/* Magic link form (primary method) */}
        {mode === 'magic' && (
          <>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Enter your email and we will send you a sign-in link. No password to remember.
            </p>

            {error && (
              <div className="bg-urgent-light text-urgent text-sm rounded-lg p-3 mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleMagicLink} className="space-y-4">
              <div>
                <label htmlFor="magic-email" className="block text-sm font-medium text-foreground mb-1">
                  Email address
                </label>
                <input
                  id="magic-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoFocus
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-white text-foreground text-lg focus:border-primary focus:ring-0 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 text-lg"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : 'Send me a link'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => { setMode('signin'); setError(null); }}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Or sign in with password
              </button>
            </div>
          </>
        )}

        {/* Password login/signup form (secondary method) */}
        {(mode === 'signin' || mode === 'signup') && (
          <>
            <p className="text-sm text-muted mb-6">
              {mode === 'signin'
                ? 'Sign in with your email and password.'
                : 'Create a free account to save your progress and access it from any device.'
              }
            </p>

            {error && (
              <div className="bg-urgent-light text-urgent text-sm rounded-lg p-3 mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-success-light text-green-800 text-sm rounded-lg p-3 mb-4">
                {success}
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:border-primary focus:ring-0 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:border-primary focus:ring-0 outline-none"
                  placeholder="At least 6 characters"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {submitting ? 'Please wait...' : mode === 'signin' ? 'Sign in' : 'Create account'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-muted space-y-2">
              {mode === 'signin' ? (
                <p>
                  No account yet?{' '}
                  <button onClick={() => { setMode('signup'); setError(null); }} className="text-primary font-medium hover:underline">
                    Create one free
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button onClick={() => { setMode('signin'); setError(null); }} className="text-primary font-medium hover:underline">
                    Sign in
                  </button>
                </p>
              )}
              <p>
                <button
                  onClick={() => { setMode('magic'); setError(null); }}
                  className="text-primary font-medium hover:underline"
                >
                  Use magic link instead
                </button>
              </p>
            </div>
          </>
        )}

        <p className="mt-6 text-xs text-muted text-center">
          Your data is encrypted and private. We will never share your information.
        </p>
      </div>
    </div>
  );
}
