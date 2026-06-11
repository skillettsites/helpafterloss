import { NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

// The shared Supabase project does not carry user-level RLS policies for
// user_progress, so direct browser queries are rejected. This route
// authenticates the caller by their access token, then runs every query with
// the service role client scoped strictly to that user's id. The user id is
// never taken from the request body.

function cleanEnv(value: string | undefined): string {
  return (value || '').replace(/\\n$/, '').trim();
}

function getAdminClient(): SupabaseClient | null {
  const url = cleanEnv(process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL);
  const key = cleanEnv(process.env.SUPABASE_SERVICE_ROLE_KEY);
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

async function getAuthedUserId(request: Request, admin: SupabaseClient): Promise<string | null> {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token) return null;
  try {
    const { data, error } = await admin.auth.getUser(token);
    if (error || !data?.user) return null;
    return data.user.id;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const admin = getAdminClient();
  if (!admin) {
    return NextResponse.json({ error: 'Progress sync is not configured' }, { status: 503 });
  }

  const userId = await getAuthedUserId(request, admin);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await admin
    .from('user_progress')
    .select('answers, completed_task_ids, notes, snoozed_tasks, skipped_tasks, updated_at')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ progress: data });
}

export async function POST(request: Request) {
  const admin = getAdminClient();
  if (!admin) {
    return NextResponse.json({ error: 'Progress sync is not configured' }, { status: 503 });
  }

  const userId = await getAuthedUserId(request, admin);
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const row: Record<string, unknown> = {
    user_id: userId,
    updated_at: new Date().toISOString(),
  };
  if (body.answers !== undefined) row.answers = body.answers;
  if (body.completedTaskIds !== undefined) row.completed_task_ids = body.completedTaskIds;
  if (body.notes !== undefined) row.notes = body.notes;
  if (body.snoozedTasks !== undefined) row.snoozed_tasks = body.snoozedTasks;
  if (body.skippedTasks !== undefined) row.skipped_tasks = body.skippedTasks;

  const { error } = await admin
    .from('user_progress')
    .upsert(row, { onConflict: 'user_id' });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, updatedAt: row.updated_at });
}
