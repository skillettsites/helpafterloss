import { TimelineEntry, UserAnswers, Task } from './types';
import { getFilteredTasks } from './tasks';

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function isPast(date: Date): boolean {
  return date < new Date();
}

interface TimelinePeriod {
  daysFromDeath: number;
  label: string;
  description: string;
  isUrgent: boolean;
}

export function buildTimeline(answers: Partial<UserAnswers>): TimelineEntry[] {
  if (!answers.dateOfDeath) return [];

  const dod = new Date(answers.dateOfDeath);
  const tasks = getFilteredTasks(answers);
  const today = new Date();

  const regDays = answers.location === 'scotland' ? 8 : 5;
  const hasUrgentFaith = answers.faithRequirements === 'muslim' || answers.faithRequirements === 'jewish';

  const periods: TimelinePeriod[] = [
    { daysFromDeath: 0, label: 'Immediate', description: 'First 24-48 hours', isUrgent: true },
  ];

  if (hasUrgentFaith) {
    periods.push({
      daysFromDeath: 1,
      label: 'Funeral (urgent)',
      description: 'Your faith tradition prioritises burial within 24-48 hours',
      isUrgent: true,
    });
  }

  periods.push(
    { daysFromDeath: regDays, label: 'Register the death', description: `Must be done within ${regDays} days`, isUrgent: true },
    { daysFromDeath: 14, label: 'First two weeks', description: 'Funeral, Tell Us Once, and urgent notifications', isUrgent: false },
    { daysFromDeath: 30, label: 'First month', description: 'Financial notifications and insurance checks', isUrgent: false },
    { daysFromDeath: 90, label: 'First three months', description: 'Probate application, estate valuation', isUrgent: false },
    { daysFromDeath: 180, label: 'Six months', description: 'Inheritance tax deadline, funeral payment claim', isUrgent: false },
    { daysFromDeath: 365, label: 'First year', description: 'Estate distribution, ongoing matters', isUrgent: false },
  );

  if (answers.relationship === 'spouse' || answers.relationship === 'civilPartner') {
    periods.push({
      daysFromDeath: 630,
      label: 'Bereavement Support Payment deadline',
      description: 'Final deadline to claim (21 months)',
      isUrgent: false,
    });
  }

  const entries: TimelineEntry[] = periods.map(period => {
    const date = addDays(dod, period.daysFromDeath);
    const periodTasks = tasks.filter(t => {
      if (t.deadlineDaysFromDeath !== undefined) {
        return t.deadlineDaysFromDeath <= period.daysFromDeath &&
          (period.daysFromDeath === 0 || t.deadlineDaysFromDeath > (periods[periods.indexOf(period) - 1]?.daysFromDeath ?? -1));
      }
      // Assign tasks without deadlines to appropriate periods based on category
      if (period.daysFromDeath === 0) return t.category === 'immediate';
      if (period.daysFromDeath <= regDays) return t.category === 'registration';
      if (period.daysFromDeath <= 14) return t.category === 'funeral';
      if (period.daysFromDeath <= 30) return t.category === 'financial' && t.priority === 'important';
      if (period.daysFromDeath <= 90) return t.category === 'legal' || (t.category === 'financial' && t.priority === 'normal');
      if (period.daysFromDeath <= 180) return t.category === 'property' || t.category === 'government';
      return t.category === 'digital' || t.category === 'ongoing';
    });

    return {
      date,
      label: `${period.label} ${period.daysFromDeath > 0 ? `- by ${formatDate(date)}` : ''}`,
      description: period.description,
      tasks: periodTasks,
      isPast: isPast(date),
      isUrgent: period.isUrgent && !isPast(date),
    };
  });

  return entries.filter(e => e.tasks.length > 0 || e.isUrgent);
}

export function getNextDeadline(answers: Partial<UserAnswers>): { label: string; date: Date; daysLeft: number } | null {
  if (!answers.dateOfDeath) return null;
  const dod = new Date(answers.dateOfDeath);
  const today = new Date();
  const tasks = getFilteredTasks(answers);

  const deadlines = tasks
    .filter(t => t.deadlineDaysFromDeath !== undefined)
    .map(t => ({
      label: t.deadlineLabel || t.title,
      date: addDays(dod, t.deadlineDaysFromDeath!),
      daysLeft: Math.ceil((addDays(dod, t.deadlineDaysFromDeath!).getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
    }))
    .filter(d => d.daysLeft >= 0)
    .sort((a, b) => a.daysLeft - b.daysLeft);

  return deadlines[0] || null;
}
