'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { AuthModal } from './AuthModal';

export function SavePrompt() {
  const { user, configured } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (!configured || user || dismissed) return null;

  return (
    <>
      <div className="bg-primary-light border border-sky-200 rounded-xl p-5 mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-primary-dark mb-1">
              Save your progress
            </h3>
            <p className="text-sm text-primary-dark/80">
              Create a free account to save your checklist progress and access it from any device. Your data is private and encrypted.
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-primary-dark/50 hover:text-primary-dark flex-shrink-0 p-1"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-3 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          Create free account
        </button>
      </div>

      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        initialMode="signup"
      />
    </>
  );
}
