'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

type Priority = 'urgent' | 'important' | 'normal';

type DeadlineDefinition = {
  id: string;
  label: string;
  description: string;
  priority: Priority;
  calculateDate: (dod: Date) => Date;
  note?: string;
};

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function addWeeks(date: Date, weeks: number): Date {
  return addDays(date, weeks * 7);
}

function nextJan31After(dod: Date): Date {
  // Returns 31 January of the year AFTER the tax year of death
  // UK tax year ends 5 April. If dod is before 6 April, the tax year is the previous calendar year.
  const dodYear = dod.getFullYear();
  const dodMonth = dod.getMonth(); // 0-indexed
  const dodDay = dod.getDate();
  // If death is 6 April or later, the tax year is dodYear/dodYear+1, so file by 31 Jan of dodYear+2
  // If death is before 6 April (or on 5 April), the tax year is dodYear-1/dodYear, so file by 31 Jan of dodYear+1
  let filingYear: number;
  if (dodMonth > 3 || (dodMonth === 3 && dodDay >= 6)) {
    filingYear = dodYear + 2;
  } else {
    filingYear = dodYear + 1;
  }
  return new Date(filingYear, 0, 31); // January is month 0
}

const DEADLINES: DeadlineDefinition[] = [
  {
    id: 'register-death',
    label: 'Register the death',
    description: 'Register at your local register office. In England, Wales, and Northern Ireland you have 5 days; in Scotland you have 8 days.',
    priority: 'urgent',
    calculateDate: (dod) => addDays(dod, 5),
    note: 'If the coroner is involved, you cannot register until they have completed their investigation.',
  },
  {
    id: 'home-insurance',
    label: 'Notify the home insurer',
    description: 'Many home insurance policies become void if a property is unoccupied for more than 30 days. Notify the insurer now to avoid any gap in cover.',
    priority: 'urgent',
    calculateDate: (dod) => addDays(dod, 30),
    note: 'Ask the insurer what their unoccupied property policy is and whether you need separate cover.',
  },
  {
    id: 'tell-us-once',
    label: 'Use Tell Us Once',
    description: 'Notify DWP, HMRC, DVLA, the Passport Office, and your local council in one step. The registrar will give you a reference number when you register the death.',
    priority: 'urgent',
    calculateDate: (dod) => addDays(dod, 28 + 5), // 28 days from registration, plus ~5 days to register
    note: 'Available in England, Wales, and Scotland only. Use within 28 days of receiving the reference number from the registrar.',
  },
  {
    id: 'funeral',
    label: 'Hold the funeral',
    description: 'There is no legal deadline, but most funerals are held within 2 to 3 weeks of the death. Some faiths require much sooner.',
    priority: 'urgent',
    calculateDate: (dod) => addWeeks(dod, 2),
    note: 'If the coroner is involved, they must release the body first. Contact a funeral director as soon as possible.',
  },
  {
    id: 'bereavement-support-payment',
    label: 'Claim Bereavement Support Payment',
    description: 'If your spouse or civil partner died and you were under State Pension age, you may be entitled to a lump sum and 18 monthly payments. Claim within 3 months for the full amount.',
    priority: 'important',
    calculateDate: (dod) => addMonths(dod, 3),
    note: 'Claims can be backdated up to 21 months, but claiming within 3 months ensures you receive the maximum amount. Apply at gov.uk or call 0800 731 0469.',
  },
  {
    id: 'funeral-expenses-payment',
    label: 'Claim Funeral Expenses Payment',
    description: 'If you are on qualifying benefits (Universal Credit, Income Support, etc.) you can claim a contribution towards funeral costs from the DWP.',
    priority: 'important',
    calculateDate: (dod) => addMonths(dod, 6),
    note: 'The deadline is 6 months from the date of the funeral, not the date of death. Apply at gov.uk or call 0800 731 0469.',
  },
  {
    id: 'probate',
    label: 'Apply for probate (recommended)',
    description: 'There is no legal deadline, but applying within 3 months means banks, pension providers, and insurers can release funds sooner.',
    priority: 'important',
    calculateDate: (dod) => addMonths(dod, 3),
    note: 'In Scotland this is called Confirmation and is applied for at the Sheriff Court. Without probate, most financial institutions cannot release funds.',
  },
  {
    id: 'iht-payment',
    label: 'Pay inheritance tax',
    description: 'Inheritance tax must be paid within 6 months of the end of the month in which the death occurred. Interest is charged after this date.',
    priority: 'important',
    calculateDate: (dod) => {
      // 6 months after the end of the month of death
      const endOfMonth = new Date(dod.getFullYear(), dod.getMonth() + 1, 0);
      return addMonths(endOfMonth, 6);
    },
    note: 'The current rate is 40% on the value above £325,000 (or up to £500,000 with the residence nil-rate band). IHT on property can be paid in instalments over 10 years.',
  },
  {
    id: 'statutory-notices',
    label: 'Place statutory notices in The Gazette',
    description: 'Publishing a notice in The Gazette protects you as executor against claims from unknown creditors. You must then wait at least 2 months before distributing the estate.',
    priority: 'important',
    calculateDate: (dod) => addMonths(dod, 3),
    note: 'Place the notice at thegazette.co.uk. The 2-month waiting period starts from the date the notice is published, not from the date of death.',
  },
  {
    id: 'distribute-estate',
    label: 'Distribute the estate',
    description: 'After probate is granted, all debts are paid, and the statutory notice period has passed (at least 2 months after placing The Gazette notice), you can distribute the estate to beneficiaries.',
    priority: 'normal',
    calculateDate: (dod) => addMonths(dod, 6),
    note: 'In practice, most estates take 6 to 12 months to fully administer. Complex estates (property, business interests, disputes) can take considerably longer.',
  },
  {
    id: 'parental-bereavement-leave',
    label: 'Take Parental Bereavement Leave (if applicable)',
    description: 'If a child under 18 died, or a baby was stillborn after 24 weeks, parents are entitled to 2 weeks of paid leave. This can be taken in one or two separate blocks.',
    priority: 'normal',
    calculateDate: (dod) => addWeeks(dod, 56),
    note: 'Must be taken within 56 weeks of the date of death. Statutory Parental Bereavement Pay is paid at £184.03 per week (or 90% of earnings if lower).',
  },
  {
    id: 'final-tax-return',
    label: 'File the final Self Assessment tax return',
    description: 'If the person was registered for Self Assessment, a final tax return is required for the tax year in which they died.',
    priority: 'normal',
    calculateDate: (dod) => nextJan31After(dod),
    note: 'The deadline is 31 January following the end of the relevant tax year. HMRC will confirm any tax owed or refund due to the estate.',
  },
];

const PRIORITY_STYLES: Record<Priority, { border: string; badge: string; badgeText: string; label: string }> = {
  urgent: {
    border: 'border-l-4 border-l-urgent',
    badge: 'bg-urgent-light text-urgent',
    badgeText: 'Urgent',
    label: 'urgent',
  },
  important: {
    border: 'border-l-4 border-l-amber-400',
    badge: 'bg-amber-50 text-amber-700',
    badgeText: 'Important',
    label: 'important',
  },
  normal: {
    border: 'border-l-4 border-l-primary',
    badge: 'bg-primary-light text-primary',
    badgeText: 'Plan ahead',
    label: 'normal',
  },
};

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatInputDate(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getDaysRemaining(deadline: Date, today: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = deadline.getTime() - today.getTime();
  return Math.ceil(diff / msPerDay);
}

export default function DeadlineTrackerPage() {
  const [dodInput, setDodInput] = useState('');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Max date for input: today
  const maxDate = formatInputDate(today);

  let dod: Date | null = null;
  if (dodInput) {
    const parsed = new Date(dodInput + 'T00:00:00');
    if (!isNaN(parsed.getTime())) {
      dod = parsed;
    }
  }

  type ComputedDeadline = {
    id: string;
    label: string;
    description: string;
    note?: string;
    priority: Priority;
    deadlineDate: Date;
    daysRemaining: number;
  };

  let computed: ComputedDeadline[] = [];
  if (dod) {
    computed = DEADLINES.map((def) => {
      const deadlineDate = def.calculateDate(dod!);
      const daysRemaining = getDaysRemaining(deadlineDate, today);
      return {
        id: def.id,
        label: def.label,
        description: def.description,
        note: def.note,
        priority: def.priority,
        deadlineDate,
        daysRemaining,
      };
    }).sort((a, b) => a.deadlineDate.getTime() - b.deadlineDate.getTime());
  }

  const overdueCount = computed.filter((d) => d.daysRemaining < 0).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Deadline Tracker' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Deadline Tracker: Key Dates After a Death
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-8">
        Enter the date of death and we will calculate every important deadline for you, from the first 5 days right through to the final tax return.
      </p>

      {/* Date input */}
      <div className="bg-card rounded-xl border border-border p-6 mb-8 no-print">
        <label htmlFor="dod" className="block text-sm font-semibold text-foreground mb-2">
          Date of death
        </label>
        <input
          id="dod"
          type="date"
          value={dodInput}
          onChange={(e) => setDodInput(e.target.value)}
          max={maxDate}
          className="block w-full sm:w-64 px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        {dod && (
          <p className="text-sm text-muted mt-2">
            Showing deadlines calculated from{' '}
            <span className="font-medium text-foreground">
              {dod.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </p>
        )}
      </div>

      {/* Print-only date header */}
      {dod && (
        <div className="hidden print:block mb-8 pb-4 border-b border-gray-300">
          <p className="text-sm text-gray-500">Help After Loss - helpafterloss.co.uk</p>
          <p className="text-base font-semibold text-gray-800 mt-1">
            Deadline tracker for date of death:{' '}
            {dod.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Printed on {today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      )}

      {/* Empty state */}
      {!dod && (
        <div className="bg-primary-light rounded-xl p-8 text-center">
          <p className="text-2xl mb-3">📅</p>
          <p className="text-foreground font-medium mb-2">Enter the date of death above to get started</p>
          <p className="text-sm text-muted">
            We will calculate every key deadline and show how many days you have left for each one.
          </p>
        </div>
      )}

      {/* Overdue warning */}
      {dod && overdueCount > 0 && (
        <div className="bg-urgent-light border border-urgent rounded-xl p-5 mb-6 no-print">
          <p className="text-sm font-semibold text-urgent mb-1">
            {overdueCount} {overdueCount === 1 ? 'deadline has' : 'deadlines have'} passed
          </p>
          <p className="text-sm text-urgent">
            Some deadlines may have already passed. You may still be able to act on several of them. Check each one carefully and seek advice if needed.
          </p>
        </div>
      )}

      {/* Deadline cards */}
      {dod && computed.length > 0 && (
        <div className="space-y-4 mb-10">
          {computed.map((item) => {
            const styles = PRIORITY_STYLES[item.priority];
            const isOverdue = item.daysRemaining < 0;
            const isDueSoon = item.daysRemaining >= 0 && item.daysRemaining <= 7;

            return (
              <div
                key={item.id}
                className={`bg-card rounded-xl border border-border ${styles.border} p-5 ${isOverdue ? 'opacity-75' : ''}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-foreground text-sm">{item.label}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles.badge}`}>
                      {styles.badgeText}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {isOverdue ? (
                      <span className="text-xs font-semibold text-urgent bg-urgent-light px-2 py-1 rounded-full">
                        {Math.abs(item.daysRemaining)} days overdue
                      </span>
                    ) : isDueSoon ? (
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-full">
                        {item.daysRemaining === 0 ? 'Due today' : `${item.daysRemaining} days left`}
                      </span>
                    ) : (
                      <span className="text-xs text-muted">
                        {item.daysRemaining} days remaining
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm font-medium text-primary mb-1">
                  By {formatDate(item.deadlineDate)}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-2">{item.description}</p>
                {item.note && (
                  <p className="text-xs text-muted leading-relaxed border-t border-border pt-2 mt-2">
                    {item.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Disclaimer */}
      {dod && (
        <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
          <p className="text-sm text-amber-800 leading-relaxed">
            These are general deadlines based on the most common situations in England and Wales. Deadlines can differ in Scotland and Northern Ireland. Some deadlines depend on when you registered the death or arranged the funeral, not the date of death itself. For personalised advice, use our free guide or speak to a solicitor.
          </p>
        </div>
      )}

      {/* Related guides and CTA */}
      <RelatedGuides
        currentPath="/deadline-tracker"
        guides={['/checklist', '/print-checklist', '/probate', '/tell-us-once']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center no-print">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a guide tailored to your situation</h2>
        <p className="text-muted mb-6">
          Answer a few questions and we will build a personalised step-by-step guide with the deadlines, tasks, and contacts that apply specifically to you.
        </p>
        <Link
          href="/start"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Deadline Tracker', item: 'https://helpafterloss.co.uk/deadline-tracker' },
            ],
          }),
        }}
      />
    </div>
  );
}
