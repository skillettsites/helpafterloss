'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth, CloudProgressData } from '@/lib/auth-context';
import { UserAnswers, Task, TaskPriority } from '@/lib/types';
import { getFilteredTasks } from '@/lib/tasks';
import {
  loadAnswers,
  getCompletedTaskIds,
  markTaskComplete,
  markTaskIncomplete,
  saveTaskNote,
  getTaskNotes,
  snoozeTask,
  unsnoozeTask,
  getSnoozedTasks,
  isTaskSnoozed,
  skipTask,
  unskipTask,
  getSkippedTasks,
} from '@/lib/storage';

// Phase definitions
const PHASES = [
  { id: 'phase-1', name: 'Right Now', range: '0 to 5 days', minDays: 0, maxDays: 5 },
  { id: 'phase-2', name: 'This Week', range: '1 to 3 weeks', minDays: 5, maxDays: 21 },
  { id: 'phase-3', name: 'This Month', range: '3 to 6 weeks', minDays: 21, maxDays: 42 },
  { id: 'phase-4', name: 'Coming Months', range: '2 to 6 months', minDays: 42, maxDays: 180 },
  { id: 'phase-5', name: 'Wrapping Up', range: '6+ months', minDays: 180, maxDays: Infinity },
];

function getTaskPhase(task: Task): number {
  if (task.category === 'immediate') return 0;
  if (task.category === 'registration') return 0;
  if (task.category === 'funeral') return 1;
  if (task.deadlineDaysFromDeath !== undefined) {
    if (task.deadlineDaysFromDeath <= 5) return 0;
    if (task.deadlineDaysFromDeath <= 21) return 1;
    if (task.deadlineDaysFromDeath <= 42) return 2;
    if (task.deadlineDaysFromDeath <= 180) return 3;
    return 4;
  }
  if (task.category === 'financial' && task.priority === 'important') return 1;
  if (task.category === 'financial') return 2;
  if (task.category === 'legal') return 2;
  if (task.category === 'government') return 2;
  if (task.category === 'property') return 3;
  if (task.category === 'digital') return 3;
  if (task.category === 'ongoing') return 4;
  return 2;
}

function getCurrentPhase(dateOfDeath: string): number {
  const dod = new Date(dateOfDeath);
  const now = new Date();
  const daysSinceDeath = Math.floor((now.getTime() - dod.getTime()) / (1000 * 60 * 60 * 24));
  if (daysSinceDeath <= 5) return 0;
  if (daysSinceDeath <= 21) return 1;
  if (daysSinceDeath <= 42) return 2;
  if (daysSinceDeath <= 180) return 3;
  return 4;
}

function getDeadlineCountdown(task: Task, dateOfDeath: string): string | null {
  if (!task.deadlineDaysFromDeath || !dateOfDeath) return null;
  const dod = new Date(dateOfDeath);
  const deadline = new Date(dod);
  deadline.setDate(deadline.getDate() + task.deadlineDaysFromDeath);
  const now = new Date();
  const daysLeft = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (daysLeft < 0) return 'Overdue';
  if (daysLeft === 0) return 'Due today';
  if (daysLeft === 1) return '1 day left';
  return `${daysLeft} days left`;
}

function PriorityBadge({ priority }: { priority: TaskPriority }) {
  if (priority === 'urgent') {
    return <span className="text-xs px-2 py-0.5 rounded-full bg-urgent-light text-urgent font-medium">Urgent</span>;
  }
  if (priority === 'important') {
    return <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">Important</span>;
  }
  return <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-muted font-medium">Normal</span>;
}

function ProgressRing({ completed, total }: { completed: number; total: number }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-44 h-44">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="10"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#10b981"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-foreground">{percent}%</span>
          <span className="text-sm text-muted">{completed} of {total}</span>
        </div>
      </div>
      <p className="text-sm text-muted mt-2">tasks complete</p>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, loadExtendedFromCloud, saveExtendedToCloud, configured } = useAuth();
  const [answers, setAnswers] = useState<Partial<UserAnswers> | null>(null);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [snoozed, setSnoozed] = useState<Record<string, string>>({});
  const [skipped, setSkipped] = useState<string[]>([]);
  const [expandedTask, setExpandedTask] = useState<string | null>(null);
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set());
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const noteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load data
  useEffect(() => {
    if (loading) return;
    if (!configured || !user) {
      router.push('/start');
      return;
    }

    async function loadData() {
      const cloudData = await loadExtendedFromCloud();
      if (cloudData && Object.keys(cloudData.answers).length > 0) {
        setAnswers(cloudData.answers);
        setCompletedIds(new Set(cloudData.completedTaskIds || []));
        setNotes(cloudData.notes || {});
        setSnoozed(cloudData.snoozedTasks || {});
        setSkipped(cloudData.skippedTasks || []);
        setLastSaved(cloudData.lastUpdated || null);
        setAllTasks(getFilteredTasks(cloudData.answers));
        // Expand current phase by default
        if (cloudData.answers.dateOfDeath) {
          setExpandedPhases(new Set([getCurrentPhase(cloudData.answers.dateOfDeath)]));
        }
        setLoaded(true);
        return;
      }

      // Fallback to localStorage
      const localAnswers = loadAnswers();
      if (!localAnswers || Object.keys(localAnswers).length === 0) {
        router.push('/start');
        return;
      }
      setAnswers(localAnswers);
      setCompletedIds(new Set(getCompletedTaskIds()));
      setNotes(getTaskNotes());
      setSnoozed(getSnoozedTasks());
      setSkipped(getSkippedTasks());
      setAllTasks(getFilteredTasks(localAnswers));
      if (localAnswers.dateOfDeath) {
        setExpandedPhases(new Set([getCurrentPhase(localAnswers.dateOfDeath)]));
      }
      setLoaded(true);
    }
    loadData();
  }, [user, loading, configured, router, loadExtendedFromCloud]);

  // Sync to cloud
  const syncToCloud = useCallback(async (
    updatedCompleted?: Set<string>,
    updatedNotes?: Record<string, string>,
    updatedSnoozed?: Record<string, string>,
    updatedSkipped?: string[],
  ) => {
    if (!user || !answers) return;
    const data: Partial<CloudProgressData> = {
      answers,
      completedTaskIds: [...(updatedCompleted || completedIds)],
      notes: updatedNotes || notes,
      snoozedTasks: updatedSnoozed || snoozed,
      skippedTasks: updatedSkipped || skipped,
    };
    await saveExtendedToCloud(data);
    setLastSaved(new Date().toISOString());
  }, [user, answers, completedIds, notes, snoozed, skipped, saveExtendedToCloud]);

  const handleToggleTask = useCallback((taskId: string) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
        markTaskIncomplete(taskId);
      } else {
        next.add(taskId);
        markTaskComplete(taskId);
      }
      syncToCloud(next);
      return next;
    });
  }, [syncToCloud]);

  const handleNoteChange = useCallback((taskId: string, value: string) => {
    setNotes(prev => {
      const next = { ...prev, [taskId]: value };
      saveTaskNote(taskId, value);
      // Debounce cloud sync for notes
      if (noteTimerRef.current) clearTimeout(noteTimerRef.current);
      noteTimerRef.current = setTimeout(() => syncToCloud(undefined, next), 1500);
      return next;
    });
  }, [syncToCloud]);

  const handleSnooze = useCallback((taskId: string) => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const dateStr = nextWeek.toISOString().split('T')[0];
    snoozeTask(taskId, dateStr);
    const next = { ...snoozed, [taskId]: dateStr };
    setSnoozed(next);
    syncToCloud(undefined, undefined, next);
  }, [snoozed, syncToCloud]);

  const handleUnsnooze = useCallback((taskId: string) => {
    unsnoozeTask(taskId);
    const next = { ...snoozed };
    delete next[taskId];
    setSnoozed(next);
    syncToCloud(undefined, undefined, next);
  }, [snoozed, syncToCloud]);

  const handleSkip = useCallback((taskId: string) => {
    skipTask(taskId);
    const next = [...skipped, taskId];
    setSkipped(next);
    syncToCloud(undefined, undefined, undefined, next);
  }, [skipped, syncToCloud]);

  const handleUnskip = useCallback((taskId: string) => {
    unskipTask(taskId);
    const next = skipped.filter(id => id !== taskId);
    setSkipped(next);
    syncToCloud(undefined, undefined, undefined, next);
  }, [skipped, syncToCloud]);

  const togglePhase = useCallback((phaseIndex: number) => {
    setExpandedPhases(prev => {
      const next = new Set(prev);
      if (next.has(phaseIndex)) {
        next.delete(phaseIndex);
      } else {
        next.add(phaseIndex);
      }
      return next;
    });
  }, []);

  if (!loaded || !answers) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-muted">Loading your dashboard...</div>
      </div>
    );
  }

  // Group tasks by phase
  const tasksByPhase: Task[][] = PHASES.map(() => []);
  for (const task of allTasks) {
    const phase = getTaskPhase(task);
    tasksByPhase[phase].push(task);
  }

  // Active tasks (not skipped)
  const activeTasks = allTasks.filter(t => !skipped.includes(t.id));
  const activeCompleted = activeTasks.filter(t => completedIds.has(t.id)).length;
  const currentPhase = answers.dateOfDeath ? getCurrentPhase(answers.dateOfDeath) : 0;

  // Focus tasks: 3 most urgent incomplete tasks, not snoozed, not skipped
  const focusTasks = activeTasks
    .filter(t => !completedIds.has(t.id) && !isTaskSnoozed(t.id) && !skipped.includes(t.id))
    .sort((a, b) => {
      const priorityOrder: Record<TaskPriority, number> = { urgent: 0, important: 1, normal: 2 };
      const phaseDiff = getTaskPhase(a) - getTaskPhase(b);
      if (phaseDiff !== 0) return phaseDiff;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    })
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-1">Your Guide</h1>
        <p className="text-muted">
          Welcome back. Take things at your own pace. There is no rush.
        </p>
      </div>

      {/* Progress ring + Phase overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Progress ring */}
        <div className="bg-card rounded-xl border border-border p-6 flex items-center justify-center">
          <ProgressRing completed={activeCompleted} total={activeTasks.length} />
        </div>

        {/* Phase overview */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PHASES.map((phase, i) => {
            const phaseTasks = tasksByPhase[i].filter(t => !skipped.includes(t.id));
            const phaseCompleted = phaseTasks.filter(t => completedIds.has(t.id)).length;
            const phasePercent = phaseTasks.length > 0 ? Math.round((phaseCompleted / phaseTasks.length) * 100) : 0;
            const isCurrent = i === currentPhase;

            return (
              <button
                key={phase.id}
                onClick={() => togglePhase(i)}
                className={`bg-card rounded-xl border p-4 text-left transition-all hover:shadow-sm ${
                  isCurrent ? 'border-primary ring-1 ring-primary/20' : 'border-border'
                }`}
              >
                <p className={`text-xs font-medium mb-1 ${isCurrent ? 'text-primary' : 'text-muted'}`}>
                  {isCurrent ? 'Current' : `Phase ${i + 1}`}
                </p>
                <p className="text-sm font-semibold text-foreground mb-1 leading-tight">{phase.name}</p>
                <p className="text-xs text-muted mb-2">{phaseCompleted}/{phaseTasks.length} done</p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-success rounded-full transition-all duration-500"
                    style={{ width: `${phasePercent}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Focus section */}
      {focusTasks.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-1">What to do next</h2>
          <p className="text-sm text-muted mb-4">These are the most pressing tasks right now. It is okay to take your time.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {focusTasks.map(task => {
              const countdown = answers.dateOfDeath ? getDeadlineCountdown(task, answers.dateOfDeath) : null;
              return (
                <div key={task.id} className={`bg-card rounded-xl border p-5 ${
                  task.priority === 'urgent' ? 'border-l-4 border-l-urgent border-border' : 'border-border'
                }`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <PriorityBadge priority={task.priority} />
                    {countdown && (
                      <span className={`text-xs font-medium ${
                        countdown === 'Overdue' || countdown === 'Due today' ? 'text-urgent' : 'text-amber-600'
                      }`}>
                        {countdown}
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-foreground text-sm leading-snug mb-2">{task.title}</h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-3">{task.description}</p>
                  <button
                    onClick={() => handleToggleTask(task.id)}
                    className="text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Mark as done
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Encouragement */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-8">
        <p className="text-sm text-amber-800 leading-relaxed">
          You are doing well. Remember, there is no set order. If something feels too much right now, come back to it later. Your wellbeing matters more than any checklist.
        </p>
      </div>

      {/* Full task list by phase */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">All tasks</h2>
        {PHASES.map((phase, phaseIndex) => {
          const phaseTasks = tasksByPhase[phaseIndex];
          if (phaseTasks.length === 0) return null;

          const activePhase = phaseTasks.filter(t => !skipped.includes(t.id));
          const phaseCompleted = activePhase.filter(t => completedIds.has(t.id)).length;
          const phaseSkipped = phaseTasks.filter(t => skipped.includes(t.id)).length;
          const isExpanded = expandedPhases.has(phaseIndex);
          const allDone = activePhase.length > 0 && phaseCompleted === activePhase.length;

          return (
            <div key={phase.id} className="mb-4">
              <button
                onClick={() => togglePhase(phaseIndex)}
                className={`w-full flex items-center justify-between bg-card rounded-xl border p-4 transition-all hover:shadow-sm ${
                  phaseIndex === currentPhase ? 'border-primary' : 'border-border'
                } ${isExpanded ? 'rounded-b-none' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground text-left">{phase.name}</h3>
                    <p className="text-xs text-muted text-left">{phase.range}</p>
                  </div>
                  {allDone && (
                    <span className="text-xs bg-success-light text-success px-2 py-0.5 rounded-full font-medium">
                      Complete
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted">
                    {phaseCompleted}/{activePhase.length} done
                    {phaseSkipped > 0 ? `, ${phaseSkipped} skipped` : ''}
                  </span>
                  <svg className={`w-5 h-5 text-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="border border-t-0 border-border rounded-b-xl bg-card/50 divide-y divide-border/50">
                  {phaseTasks.map(task => {
                    const isCompleted = completedIds.has(task.id);
                    const isSkipped = skipped.includes(task.id);
                    const isSnoozed = snoozed[task.id] && new Date(snoozed[task.id]) > new Date();
                    const isTaskExpanded = expandedTask === task.id;
                    const countdown = answers.dateOfDeath ? getDeadlineCountdown(task, answers.dateOfDeath) : null;

                    if (isSkipped) {
                      return (
                        <div key={task.id} className="px-4 py-3 flex items-center justify-between opacity-50">
                          <span className="text-sm text-muted line-through">{task.title}</span>
                          <button
                            onClick={() => handleUnskip(task.id)}
                            className="text-xs text-primary hover:underline"
                          >
                            Restore
                          </button>
                        </div>
                      );
                    }

                    return (
                      <div key={task.id} className={`${isSnoozed ? 'opacity-60' : ''}`}>
                        <div className="flex items-start gap-3 px-4 py-3">
                          {/* Checkbox */}
                          <button
                            onClick={() => handleToggleTask(task.id)}
                            className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                              isCompleted
                                ? 'bg-success border-success text-white'
                                : 'border-gray-300 hover:border-primary'
                            }`}
                            aria-label={isCompleted ? `Mark "${task.title}" as not done` : `Mark "${task.title}" as done`}
                          >
                            {isCompleted && (
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>

                          {/* Task content */}
                          <div className="flex-1 min-w-0">
                            <button
                              onClick={() => setExpandedTask(isTaskExpanded ? null : task.id)}
                              className="w-full text-left"
                            >
                              <div className="flex items-center flex-wrap gap-2">
                                <span className={`font-medium text-sm ${isCompleted ? 'line-through text-muted' : 'text-foreground'}`}>
                                  {task.title}
                                </span>
                                <PriorityBadge priority={task.priority} />
                                {countdown && !isCompleted && (
                                  <span className={`text-xs font-medium ${
                                    countdown === 'Overdue' || countdown === 'Due today' ? 'text-urgent' : 'text-amber-600'
                                  }`}>
                                    {countdown}
                                  </span>
                                )}
                                {isSnoozed && (
                                  <span className="text-xs text-muted bg-gray-100 px-2 py-0.5 rounded-full">
                                    Snoozed until {new Date(snoozed[task.id]).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                  </span>
                                )}
                              </div>
                            </button>

                            {/* Expanded content */}
                            {isTaskExpanded && (
                              <div className="mt-3 space-y-3">
                                <p className="text-sm text-muted leading-relaxed">{task.description}</p>

                                {task.phoneNumber && (
                                  <p className="text-sm">
                                    Phone: <a href={`tel:${task.phoneNumber.replace(/\s/g, '')}`} className="text-primary font-medium hover:underline">{task.phoneNumber}</a>
                                  </p>
                                )}

                                {task.url && (
                                  <p className="text-sm">
                                    <a href={task.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                      More information
                                    </a>
                                  </p>
                                )}

                                {task.supportMessage && (
                                  <div className="bg-warm border border-warm-border rounded-lg p-3">
                                    <p className="text-sm text-amber-800 italic">{task.supportMessage}</p>
                                  </div>
                                )}

                                {/* Notes textarea */}
                                <div>
                                  <label className="block text-xs font-medium text-muted mb-1">
                                    Your notes (reference numbers, who you spoke to, etc.)
                                  </label>
                                  <textarea
                                    value={notes[task.id] || ''}
                                    onChange={e => handleNoteChange(task.id, e.target.value)}
                                    placeholder="Add your notes here..."
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-white text-foreground focus:border-primary focus:ring-0 outline-none resize-y min-h-[60px]"
                                    rows={2}
                                  />
                                </div>

                                {/* Action buttons */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                  {!isCompleted && !isSnoozed && (
                                    <button
                                      onClick={() => handleSnooze(task.id)}
                                      className="text-xs text-muted hover:text-foreground bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                      Remind me later
                                    </button>
                                  )}
                                  {isSnoozed && (
                                    <button
                                      onClick={() => handleUnsnooze(task.id)}
                                      className="text-xs text-primary hover:text-primary-dark bg-primary-light px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                      Unsnooze
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleSkip(task.id)}
                                    className="text-xs text-muted hover:text-foreground bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
                                  >
                                    Does not apply to me
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Expand arrow */}
                          <button
                            onClick={() => setExpandedTask(isTaskExpanded ? null : task.id)}
                            className="flex-shrink-0 p-1 text-muted hover:text-foreground transition-colors"
                            aria-label={isTaskExpanded ? 'Collapse details' : 'Expand details'}
                          >
                            <svg className={`w-5 h-5 transition-transform ${isTaskExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick links */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Helpful resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/phone-directory"
            className="bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-all text-center"
          >
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Phone Directory</p>
          </Link>
          <Link
            href="/call-scripts"
            className="bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-all text-center"
          >
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Call Scripts</p>
          </Link>
          <Link
            href="/template-letters"
            className="bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-all text-center"
          >
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Template Letters</p>
          </Link>
          <Link
            href="/document-vault"
            className="bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-all text-center"
          >
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground">Document Vault</p>
          </Link>
        </div>
      </div>

      {/* Support section */}
      <div className="bg-primary-light rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-primary-dark mb-2">Need support?</h3>
        <p className="text-sm text-primary-dark/80 mb-4">
          You do not have to do this alone. These organisations offer free help and support:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/70 rounded-lg p-3">
            <p className="font-medium text-sm text-foreground">Samaritans</p>
            <p className="text-sm text-primary"><a href="tel:116123">116 123</a> (free, 24/7)</p>
          </div>
          <div className="bg-white/70 rounded-lg p-3">
            <p className="font-medium text-sm text-foreground">Cruse Bereavement Support</p>
            <p className="text-sm text-primary"><a href="tel:08088081677">0808 808 1677</a></p>
          </div>
        </div>
        <Link href="/support" className="inline-block mt-4 text-sm text-primary font-medium hover:underline">
          See all support organisations
        </Link>
      </div>

      {/* Last saved */}
      {lastSaved && (
        <p className="text-xs text-muted text-center">
          Progress last saved: {new Date(lastSaved).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      )}
    </div>
  );
}
