'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { AuthModal } from './AuthModal';

export function AccountMenu() {
  const { user, loading, signOut, syncing, configured } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  if (!configured || loading) return null;

  if (!user) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="px-3 py-2 text-sm text-primary hover:bg-primary-light rounded-lg transition-colors font-medium"
        >
          Sign in
        </button>
        <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-gray-100 rounded-lg transition-colors"
      >
        <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
          {user.email?.[0]?.toUpperCase() || '?'}
        </div>
        {syncing && (
          <span className="text-xs text-muted">Syncing...</span>
        )}
      </button>

      {showDropdown && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl border border-border shadow-lg z-50 py-2">
            <div className="px-4 py-2 border-b border-border">
              <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
              <p className="text-xs text-muted mt-0.5">Your progress is saved to your account</p>
            </div>
            <button
              onClick={async () => {
                await signOut();
                setShowDropdown(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-gray-50 transition-colors"
            >
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
