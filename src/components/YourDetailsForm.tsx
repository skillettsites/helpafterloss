'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  PersonalDetails,
  EMPTY_DETAILS,
  loadDetails,
  saveDetails,
  clearDetails,
  detailsProgress,
} from '@/lib/details';
import { loadAnswers } from '@/lib/storage';

interface Field {
  key: keyof PersonalDetails;
  label: string;
  hint?: string;
  type?: 'text' | 'date' | 'tel' | 'email';
  wide?: boolean;
}

const ABOUT_THEM: Field[] = [
  { key: 'deceasedName', label: 'Their full name', hint: 'As it appears on official paperwork', wide: true },
  { key: 'deceasedDateOfBirth', label: 'Their date of birth', type: 'date' },
  { key: 'deceasedDateOfDeath', label: 'The date they passed away', type: 'date' },
  { key: 'deceasedAddress', label: 'Their last address', hint: 'Including postcode', wide: true },
  { key: 'deceasedNiNumber', label: 'Their National Insurance number', hint: 'On payslips, pension or HMRC letters. Leave blank if you cannot find it' },
];

const ABOUT_YOU: Field[] = [
  { key: 'yourName', label: 'Your full name' },
  { key: 'yourRelationship', label: 'Your relationship to them', hint: 'For example: son, wife, executor' },
  { key: 'yourAddress', label: 'Your address', wide: true },
  { key: 'yourPostcode', label: 'Your postcode' },
  { key: 'yourPhone', label: 'Your phone number', type: 'tel' },
  { key: 'yourEmail', label: 'Your email address', type: 'email' },
];

export function YourDetailsForm() {
  // Starts empty so the server-rendered form matches the first client render,
  // then fills from storage after mount. No loading flash, and the form is real
  // content rather than a spinner.
  const [details, setDetails] = useState<PersonalDetails>(EMPTY_DETAILS);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    const stored = loadDetails();
    // If they have already told us the date of death in the questionnaire,
    // there is no reason to ask for it a second time.
    const answers = loadAnswers();
    if (!stored.deceasedDateOfDeath && answers?.dateOfDeath) {
      stored.deceasedDateOfDeath = answers.dateOfDeath;
    }
    setDetails(stored);
  }, []);

  const update = useCallback((key: keyof PersonalDetails, value: string) => {
    setDetails(prev => {
      const next = { ...prev, [key]: value };
      saveDetails(next);
      return next;
    });
    setSavedAt(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const handleClear = () => {
    if (confirm('This will erase the details saved on this device. Are you sure?')) {
      clearDetails();
      setDetails(EMPTY_DETAILS);
      setSavedAt(null);
    }
  };

  const { filled, total } = detailsProgress(details);

  const renderField = (field: Field) => (
    <div key={field.key} className={field.wide ? 'sm:col-span-2' : ''}>
      <label htmlFor={field.key} className="block text-sm font-medium text-foreground mb-1">
        {field.label}
      </label>
      {field.hint && <p className="text-xs text-muted mb-1.5">{field.hint}</p>}
      <input
        id={field.key}
        type={field.type ?? 'text'}
        value={details[field.key]}
        onChange={e => update(field.key, e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card text-foreground focus:border-primary focus:ring-0 outline-none"
      />
    </div>
  );

  return (
    <div>
      <div className="bg-primary-light rounded-xl p-5 mb-8">
        <p className="text-sm text-primary-dark leading-relaxed">
          Fill in whatever you know. You do not have to do it all at once, and you can leave anything blank.
          Everything saves as you type, and it stays on this device: we never see it and it is never sent anywhere.
        </p>
        <p className="text-sm text-primary-dark mt-2">
          <strong>{filled} of {total} filled in.</strong>{' '}
          {savedAt && <span className="text-primary-dark/70">Saved at {savedAt}.</span>}
        </p>
      </div>

      <h2 className="text-xl font-semibold text-foreground mb-1">About the person who has passed away</h2>
      <p className="text-sm text-muted mb-5">These are the details you will be asked for on almost every call.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {ABOUT_THEM.map(renderField)}
      </div>

      <h2 className="text-xl font-semibold text-foreground mb-1">About you</h2>
      <p className="text-sm text-muted mb-5">So letters and forms can be addressed back to you.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {ABOUT_YOU.map(renderField)}
      </div>

      <div className="bg-card rounded-xl border border-border p-5 mb-6">
        <h3 className="font-semibold text-foreground mb-2">What happens now</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Anywhere we give you something to say or send, these details are filled in for you automatically.
          You will not need to type them again.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/call-scripts" className="px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">
            Phone call scripts
          </Link>
          <Link href="/template-letters" className="px-4 py-2.5 bg-card border border-border text-sm font-medium text-foreground rounded-lg hover:bg-gray-50 transition-colors">
            Template letters
          </Link>
          <Link href="/phone-directory" className="px-4 py-2.5 bg-card border border-border text-sm font-medium text-foreground rounded-lg hover:bg-gray-50 transition-colors">
            Phone directory
          </Link>
        </div>
      </div>

      <button
        onClick={handleClear}
        className="text-sm text-muted hover:text-urgent transition-colors underline"
      >
        Erase these details from this device
      </button>
    </div>
  );
}
