'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from './supabase';
import { SavedProgress, UserAnswers } from './types';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  saveToCloud: (answers: Partial<UserAnswers>, completedTaskIds: string[]) => Promise<void>;
  loadFromCloud: () => Promise<SavedProgress | null>;
  syncing: boolean;
  configured: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

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

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured) return;
    await supabase.auth.signOut();
  }, []);

  const saveToCloud = useCallback(async (answers: Partial<UserAnswers>, completedTaskIds: string[]) => {
    if (!isSupabaseConfigured || !user) return;
    setSyncing(true);
    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          answers,
          completed_task_ids: completedTaskIds,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id' });
      if (error) console.error('Failed to save to cloud:', error.message);
    } finally {
      setSyncing(false);
    }
  }, [user]);

  const loadFromCloud = useCallback(async (): Promise<SavedProgress | null> => {
    if (!isSupabaseConfigured || !user) return null;
    setSyncing(true);
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('answers, completed_task_ids, updated_at')
        .eq('user_id', user.id)
        .single();

      if (error || !data) return null;

      return {
        answers: data.answers as Partial<UserAnswers>,
        completedTaskIds: data.completed_task_ids as string[],
        lastUpdated: data.updated_at,
        version: 1,
      };
    } finally {
      setSyncing(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user, session, loading,
      signUp, signIn, signOut,
      saveToCloud, loadFromCloud, syncing,
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
