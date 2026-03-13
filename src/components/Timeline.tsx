'use client';

import { TimelineEntry } from '@/lib/types';

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  if (entries.length === 0) return null;

  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">Your Timeline</h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border" />

        <div className="space-y-6">
          {entries.map((entry, index) => (
            <div key={index} className="relative flex gap-4">
              {/* Dot */}
              <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                entry.isUrgent
                  ? 'bg-urgent text-white'
                  : entry.isPast
                    ? 'bg-success text-white'
                    : 'bg-primary-light text-primary border-2 border-primary'
              }`}>
                {entry.isPast ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <h4 className={`font-semibold ${entry.isUrgent ? 'text-urgent' : 'text-foreground'}`}>
                  {entry.label}
                </h4>
                <p className="text-sm text-muted mt-0.5">{entry.description}</p>
                {entry.tasks.length > 0 && (
                  <p className="text-xs text-muted mt-1">
                    {entry.tasks.length} task{entry.tasks.length !== 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
