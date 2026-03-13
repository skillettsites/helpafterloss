-- Run this in the Supabase SQL Editor to create the user_progress table

create table if not exists public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null unique,
  answers jsonb default '{}'::jsonb not null,
  completed_task_ids text[] default '{}'::text[] not null,
  updated_at timestamptz default now() not null,
  created_at timestamptz default now() not null
);

-- Enable Row Level Security
alter table public.user_progress enable row level security;

-- Policy: users can only read their own data
create policy "Users can read own progress"
  on public.user_progress
  for select
  using (auth.uid() = user_id);

-- Policy: users can insert their own data
create policy "Users can insert own progress"
  on public.user_progress
  for insert
  with check (auth.uid() = user_id);

-- Policy: users can update their own data
create policy "Users can update own progress"
  on public.user_progress
  for update
  using (auth.uid() = user_id);

-- Policy: users can delete their own data
create policy "Users can delete own progress"
  on public.user_progress
  for delete
  using (auth.uid() = user_id);

-- Index for fast lookups by user_id
create index if not exists idx_user_progress_user_id on public.user_progress(user_id);
