'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserAnswers } from '@/lib/types';
import { loadAnswers, clearProgress } from '@/lib/storage';
import { getTasksByCategory } from '@/lib/tasks';
import { buildTimeline, getNextDeadline } from '@/lib/timeline';
import { calculateCosts } from '@/lib/costs';
import { Checklist } from '@/components/Checklist';
import { Timeline } from '@/components/Timeline';
import { CostCalculator } from '@/components/CostCalculator';
import Link from 'next/link';

export default function ResultsPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Partial<UserAnswers> | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = loadAnswers();
    if (!saved || Object.keys(saved).length === 0) {
      router.push('/start');
      return;
    }
    setAnswers(saved);
    setLoaded(true);
  }, [router]);

  if (!loaded || !answers) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-muted">Loading your guide...</div>
      </div>
    );
  }

  const tasksByCategory = getTasksByCategory(answers);
  const timeline = buildTimeline(answers);
  const costs = calculateCosts(answers);
  const nextDeadline = getNextDeadline(answers);
  const totalTasks = Object.values(tasksByCategory).flat().length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Your Personalised Guide
        </h1>
        <p className="text-muted leading-relaxed">
          We are sorry for your loss. Based on your answers, we have put together {totalTasks} tasks for you to work through at your own pace. There is no rush. Do what you can, when you can.
        </p>
        {nextDeadline && nextDeadline.daysLeft >= 0 && (
          <div className="mt-4 bg-white/70 rounded-lg p-3">
            <p className="text-sm font-medium text-foreground">
              Your next deadline: <span className="text-primary">{nextDeadline.label}</span>
            </p>
            <p className="text-xs text-muted mt-0.5">
              {nextDeadline.daysLeft === 0
                ? 'This is due today'
                : `${nextDeadline.daysLeft} day${nextDeadline.daysLeft !== 1 ? 's' : ''} from now (${nextDeadline.date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })})`
              }
            </p>
          </div>
        )}
      </div>

      {/* Actions bar */}
      <div className="flex flex-wrap gap-3 mb-8 no-print">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 text-sm bg-card border border-border rounded-lg text-foreground hover:bg-gray-50 transition-colors"
        >
          Print / Save as PDF
        </button>
        <Link
          href="/start"
          className="px-4 py-2 text-sm bg-card border border-border rounded-lg text-foreground hover:bg-gray-50 transition-colors"
        >
          Update Your Answers
        </Link>
        <button
          onClick={() => {
            if (confirm('This will clear all your saved progress and answers. Are you sure?')) {
              clearProgress();
              router.push('/start');
            }
          }}
          className="px-4 py-2 text-sm text-muted hover:text-urgent transition-colors"
        >
          Start Over
        </button>
      </div>

      {/* Timeline */}
      <Timeline entries={timeline} />

      {/* Checklist */}
      <Checklist tasksByCategory={tasksByCategory} />

      {/* Cost Calculator */}
      <CostCalculator summary={costs} />

      {/* Support section */}
      <div className="bg-primary-light rounded-xl p-6 mt-8">
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
          <div className="bg-white/70 rounded-lg p-3">
            <p className="font-medium text-sm text-foreground">Citizens Advice</p>
            <p className="text-sm text-primary"><a href="tel:08001448848">0800 144 8848</a></p>
          </div>
          <div className="bg-white/70 rounded-lg p-3">
            <p className="font-medium text-sm text-foreground">MoneyHelper</p>
            <p className="text-sm text-primary"><a href="tel:08001387777">0800 138 7777</a></p>
          </div>
        </div>
        <Link href="/support" className="inline-block mt-4 text-sm text-primary font-medium hover:underline">
          See all support organisations &rarr;
        </Link>
      </div>
    </div>
  );
}
