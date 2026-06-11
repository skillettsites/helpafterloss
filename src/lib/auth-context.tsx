'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from './supabase';
import { SavedProgress, UserAnswers } from './types';

interface CloudProgressData {
  answers: Partial<UserAnswers>;
  completedTaskIds: string[];
  notes: Record<string, string>;
  snoozedTasks: Record<string, string>;
  skippedTasks: string[];
  lastUpdated: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signInWithMagicLink: (email: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  saveToCloud: (answers: Partial<UserAnswers>, completedTaskIds: string[]) => Promise<{ error: string | null }>;
  saveExtendedToCloud: (data: Partial<CloudProgressData>) => Promise<{ error: string | null }>;
  loadFromCloud: () => Promise<SavedProgress | null>;
  loadExtendedFromCloud: () => Promise<CloudProgressData | null>;
  syncing: boolean;
  syncError: string | null;
  configured: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    if (!isSupabaseConfigured) return { error: 'Account system is not yet configured.' };
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    return { error: null };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    if (!isSupabaseConfigured) return { error: 'Account system is not yet configured.' };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return { error: null };
  }, []);

  const signInWithMagicLink = useCallback(async (email: string) => {
    if (!isSupabaseConfigured) return { error: 'Account system is not yet configured.' };
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) return { error: error.message };
    return { error: null };
  }, []);

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured) return;
    await supabase.auth.signOut();
  }, []);

  // Progress is saved and loaded through /api/progress rather than direct
  // Supabase table queries. The shared Supabase project has no user-level
  // RLS policies on user_progress, so browser queries are rejected; the API
  // route verifies the access token and performs the query server-side.
  const getAccessToken = useCallback(async (): Promise<string | null> => {
    if (!isSupabaseConfigured) return null;
    const { data: { session } } = await supabase.auth.getSession();
    return session?.access_token ?? null;
  }, []);

  const postProgress = useCallback(async (payload: Record<string, unknown>): Promise<{ error: string | null }> => {
    setSyncing(true);
    try {
      const token = await getAccessToken();
      if (!token) {
        const msg = 'Your session has expired. Please sign in again to save your progress.';
        setSyncError(msg);
        return { error: msg };
      }
      const res = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        let msg = `Save failed (${res.status})`;
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch { /* keep default message */ }
        console.error('Failed to save to cloud:', msg);
        setSyncError(msg);
        return { error: msg };
      }
      setSyncError(null);
      return { error: null };
    } catch {
      const msg = 'Could not reach the server. Your progress is still saved on this device.';
      setSyncError(msg);
      return { error: msg };
    } finally {
      setSyncing(false);
    }
  }, [getAccessToken]);

  const fetchProgress = useCallback(async (): Promise<Record<string, unknown> | null> => {
    const token = await getAccessToken();
    if (!token) return null;
    try {
      const res = await fetch('/api/progress', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) return null;
      const data = await res.json();
      return (data?.progress as Record<string, unknown>) || null;
    } catch {
      return null;
    }
  }, [getAccessToken]);

  const saveToCloud = useCallback(async (answers: Partial<UserAnswers>, completedTaskIds: string[]) => {
    if (!isSupabaseConfigured || !user) return { error: null };
    return postProgress({ answers, completedTaskIds });
  }, [user, postProgress]);

  const saveExtendedToCloud = useCallback(async (data: Partial<CloudProgressData>) => {
    if (!isSupabaseConfigured || !user) return { error: null };
    const payload: Record<string, unknown> = {};
    if (data.answers !== undefined) payload.answers = data.answers;
    if (data.completedTaskIds !== undefined) payload.completedTaskIds = data.completedTaskIds;
    if (data.notes !== undefined) payload.notes = data.notes;
    if (data.snoozedTasks !== undefined) payload.snoozedTasks = data.snoozedTasks;
    if (data.skippedTasks !== undefined) payload.skippedTasks = data.skippedTasks;
    return postProgress(payload);
  }, [user, postProgress]);

  const loadFromCloud = useCallback(async (): Promise<SavedProgress | null> => {
    if (!isSupabaseConfigured || !user) return null;
    setSyncing(true);
    try {
      const data = await fetchProgress();
      if (!data) return null;

      return {
        answers: data.answers as Partial<UserAnswers>,
        completedTaskIds: data.completed_task_ids as string[],
        lastUpdated: data.updated_at as string,
        version: 1,
      };
    } finally {
      setSyncing(false);
    }
  }, [user, fetchProgress]);

  const loadExtendedFromCloud = useCallback(async (): Promise<CloudProgressData | null> => {
    if (!isSupabaseConfigured || !user) return null;
    setSyncing(true);
    try {
      const data = await fetchProgress();
      if (!data) return null;

      return {
        answers: (data.answers as Partial<UserAnswers>) || {},
        completedTaskIds: (data.completed_task_ids as string[]) || [],
        notes: (data.notes as Record<string, string>) || {},
        snoozedTasks: (data.snoozed_tasks as Record<string, string>) || {},
        skippedTasks: (data.skipped_tasks as string[]) || [],
        lastUpdated: data.updated_at as string,
      };
    } finally {
      setSyncing(false);
    }
  }, [user, fetchProgress]);

  return (
    <AuthContext.Provider value={{
      user, session, loading,
      signUp, signIn, signInWithMagicLink, signOut,
      saveToCloud, saveExtendedToCloud, loadFromCloud, loadExtendedFromCloud, syncing, syncError,
      configured: isSupabaseConfigured,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export type { CloudProgressData };
