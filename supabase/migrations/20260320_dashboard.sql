-- Add notes column to user_progress if not exists
ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS notes jsonb DEFAULT '{}';
-- notes format: { "task-id": "spoke to John at HMRC ref 12345", ... }

-- Add snoozed_tasks column
ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS snoozed_tasks jsonb DEFAULT '{}';
-- snoozed format: { "task-id": "2026-04-01", ... }

-- Add skipped_tasks column
ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS skipped_tasks text[] DEFAULT '{}';
