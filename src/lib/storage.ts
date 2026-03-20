import { SavedProgress, UserAnswers } from './types';

const STORAGE_KEY = 'helpafterloss_progress';
const NOTES_KEY = 'helpafterloss_notes';
const SNOOZED_KEY = 'helpafterloss_snoozed';
const SKIPPED_KEY = 'helpafterloss_skipped';
const STORAGE_VERSION = 1;

export function saveProgress(progress: SavedProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage full or unavailable
  }
}

export function loadProgress(): SavedProgress | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedProgress;
    if (parsed.version !== STORAGE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveAnswers(answers: Partial<UserAnswers>): void {
  const existing = loadProgress();
  saveProgress({
    answers,
    completedTaskIds: existing?.completedTaskIds ?? [],
    lastUpdated: new Date().toISOString(),
    version: STORAGE_VERSION,
  });
}

export function loadAnswers(): Partial<UserAnswers> | null {
  const progress = loadProgress();
  return progress?.answers ?? null;
}

export function markTaskComplete(taskId: string): void {
  const existing = loadProgress();
  if (!existing) return;
  const ids = new Set(existing.completedTaskIds);
  ids.add(taskId);
  saveProgress({
    ...existing,
    completedTaskIds: [...ids],
    lastUpdated: new Date().toISOString(),
  });
}

export function markTaskIncomplete(taskId: string): void {
  const existing = loadProgress();
  if (!existing) return;
  saveProgress({
    ...existing,
    completedTaskIds: existing.completedTaskIds.filter(id => id !== taskId),
    lastUpdated: new Date().toISOString(),
  });
}

export function getCompletedTaskIds(): string[] {
  const progress = loadProgress();
  return progress?.completedTaskIds ?? [];
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(NOTES_KEY);
    localStorage.removeItem(SNOOZED_KEY);
    localStorage.removeItem(SKIPPED_KEY);
  } catch {
    // ignore
  }
}

// Task notes (reference numbers, who you spoke to, etc.)
export function saveTaskNote(taskId: string, note: string): void {
  if (typeof window === 'undefined') return;
  try {
    const notes = getTaskNotes();
    if (note.trim()) {
      notes[taskId] = note;
    } else {
      delete notes[taskId];
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch {
    // ignore
  }
}

export function getTaskNotes(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

// Snoozed tasks (remind me later)
export function snoozeTask(taskId: string, untilDate: string): void {
  if (typeof window === 'undefined') return;
  try {
    const snoozed = getSnoozedTasks();
    snoozed[taskId] = untilDate;
    localStorage.setItem(SNOOZED_KEY, JSON.stringify(snoozed));
  } catch {
    // ignore
  }
}

export function unsnoozeTask(taskId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const snoozed = getSnoozedTasks();
    delete snoozed[taskId];
    localStorage.setItem(SNOOZED_KEY, JSON.stringify(snoozed));
  } catch {
    // ignore
  }
}

export function getSnoozedTasks(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(SNOOZED_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

export function isTaskSnoozed(taskId: string): boolean {
  const snoozed = getSnoozedTasks();
  const untilDate = snoozed[taskId];
  if (!untilDate) return false;
  return new Date(untilDate) > new Date();
}

// Skipped tasks (doesn't apply)
export function skipTask(taskId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const skipped = getSkippedTasks();
    if (!skipped.includes(taskId)) {
      skipped.push(taskId);
    }
    localStorage.setItem(SKIPPED_KEY, JSON.stringify(skipped));
  } catch {
    // ignore
  }
}

export function unskipTask(taskId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const skipped = getSkippedTasks().filter(id => id !== taskId);
    localStorage.setItem(SKIPPED_KEY, JSON.stringify(skipped));
  } catch {
    // ignore
  }
}

export function getSkippedTasks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SKIPPED_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}
