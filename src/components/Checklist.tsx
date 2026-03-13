'use client';

import { useState, useEffect } from 'react';
import { Task, TaskCategory, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from '@/lib/types';
import { getCompletedTaskIds, markTaskComplete, markTaskIncomplete } from '@/lib/storage';
import { SUPPORT_MESSAGES } from '@/lib/support';

interface ChecklistProps {
  tasksByCategory: Record<string, Task[]>;
}

export function Checklist({ tasksByCategory }: ChecklistProps) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  useEffect(() => {
    setCompletedIds(new Set(getCompletedTaskIds()));
  }, []);

  const toggleTask = (taskId: string) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
        markTaskIncomplete(taskId);
      } else {
        next.add(taskId);
        markTaskComplete(taskId);
      }
      return next;
    });
  };

  const categoryOrder: TaskCategory[] = [
    'immediate', 'registration', 'funeral', 'financial', 'legal', 'government', 'property', 'digital', 'ongoing',
  ];

  const totalTasks = Object.values(tasksByCategory).flat().length;
  const completedCount = [...completedIds].filter(id =>
    Object.values(tasksByCategory).flat().some(t => t.id === id)
  ).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  return (
    <div>
      {/* Overall progress */}
      <div className="bg-card rounded-xl border border-border p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">Your Progress</h3>
          <span className="text-sm text-muted">{completedCount} of {totalTasks} tasks done</span>
        </div>
        <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-success transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {completedCount > 0 && completedCount < totalTasks && (
          <p className="text-sm text-muted mt-3 italic">
            {SUPPORT_MESSAGES[completedCount % SUPPORT_MESSAGES.length]}
          </p>
        )}
        {completedCount === totalTasks && totalTasks > 0 && (
          <p className="text-sm text-success mt-3 font-medium">
            You have completed everything on your list. Well done.
          </p>
        )}
      </div>

      {/* Task categories */}
      {categoryOrder.map((category, catIndex) => {
        const tasks = tasksByCategory[category];
        if (!tasks || tasks.length === 0) return null;

        const categoryCompleted = tasks.filter(t => completedIds.has(t.id)).length;
        const allDone = categoryCompleted === tasks.length;

        return (
          <div key={category} className="mb-8">
            {/* Support message between sections */}
            {catIndex === 3 && (
              <div className="bg-warm border border-warm-border rounded-xl p-5 mb-6">
                <p className="text-sm text-amber-800 leading-relaxed">
                  You are doing really well. Remember, there is no rush. If a task feels too much right now, come back to it later. Your wellbeing matters more than any deadline.
                </p>
              </div>
            )}

            <div className="mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {CATEGORY_LABELS[category]}
                </h3>
                {allDone && (
                  <span className="text-xs bg-success-light text-success px-2 py-1 rounded-full font-medium">
                    Complete
                  </span>
                )}
              </div>
              <p className="text-sm text-muted mt-1">{CATEGORY_DESCRIPTIONS[category]}</p>
            </div>

            <div className="space-y-3">
              {tasks.map(task => {
                const isCompleted = completedIds.has(task.id);
                const isExpanded = expandedTask === task.id;

                return (
                  <div
                    key={task.id}
                    className={`bg-card rounded-xl border transition-all ${
                      isCompleted ? 'border-success/30 bg-success-light/30' : 'border-border'
                    } ${task.priority === 'urgent' && !isCompleted ? 'border-l-4 border-l-urgent' : ''}`}
                  >
                    <div className="flex items-start gap-3 p-4">
                      <button
                        onClick={() => toggleTask(task.id)}
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

                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => setExpandedTask(isExpanded ? null : task.id)}
                          className="w-full text-left"
                        >
                          <span className={`font-medium ${isCompleted ? 'line-through text-muted' : 'text-foreground'}`}>
                            {task.title}
                          </span>
                          {task.deadlineLabel && !isCompleted && (
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                              task.priority === 'urgent'
                                ? 'bg-urgent-light text-urgent'
                                : 'bg-amber-50 text-amber-700'
                            }`}>
                              {task.deadlineLabel}
                            </span>
                          )}
                          {task.estimatedMinutes > 0 && !isCompleted && (
                            <span className="block text-xs text-muted mt-1">
                              Estimated time: {task.estimatedMinutes < 60 ? `${task.estimatedMinutes} mins` : `${Math.round(task.estimatedMinutes / 60)} hour${task.estimatedMinutes >= 120 ? 's' : ''}`}
                            </span>
                          )}
                        </button>

                        {isExpanded && (
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
                                  More information &rarr;
                                </a>
                              </p>
                            )}
                            {task.supportMessage && (
                              <div className="bg-warm border border-warm-border rounded-lg p-3">
                                <p className="text-sm text-amber-800 italic">{task.supportMessage}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => setExpandedTask(isExpanded ? null : task.id)}
                        className="flex-shrink-0 p-1 text-muted hover:text-foreground transition-colors"
                        aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                      >
                        <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
