import { SavedProgress, UserAnswers } from './types';

const STORAGE_KEY = 'helpafterloss_progress';
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
  } catch {
    // ignore
  }
}
