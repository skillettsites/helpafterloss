// The same handful of facts get asked for over and over: on every phone call,
// in every letter, on every form. Rather than make a grieving person re-type
// them dozens of times, they enter them once here and we fill them in
// everywhere. Nothing leaves the device, exactly like the questionnaire answers.

const DETAILS_KEY = 'helpafterloss_details';

export interface PersonalDetails {
  // About the person who has passed away
  deceasedName: string;
  deceasedDateOfBirth: string;
  deceasedDateOfDeath: string;
  deceasedAddress: string;
  deceasedNiNumber: string;
  // About the person doing the admin
  yourName: string;
  yourRelationship: string;
  yourAddress: string;
  yourPostcode: string;
  yourPhone: string;
  yourEmail: string;
}

export const EMPTY_DETAILS: PersonalDetails = {
  deceasedName: '',
  deceasedDateOfBirth: '',
  deceasedDateOfDeath: '',
  deceasedAddress: '',
  deceasedNiNumber: '',
  yourName: '',
  yourRelationship: '',
  yourAddress: '',
  yourPostcode: '',
  yourPhone: '',
  yourEmail: '',
};

export function saveDetails(details: PersonalDetails): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(DETAILS_KEY, JSON.stringify(details));
  } catch {
    // localStorage full or unavailable, nothing we can usefully do
  }
}

export function loadDetails(): PersonalDetails {
  if (typeof window === 'undefined') return EMPTY_DETAILS;
  try {
    const raw = localStorage.getItem(DETAILS_KEY);
    if (!raw) return EMPTY_DETAILS;
    return { ...EMPTY_DETAILS, ...(JSON.parse(raw) as Partial<PersonalDetails>) };
  } catch {
    return EMPTY_DETAILS;
  }
}

export function clearDetails(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(DETAILS_KEY);
  } catch {
    // ignore
  }
}

export function hasAnyDetails(details: PersonalDetails): boolean {
  return Object.values(details).some(v => v.trim() !== '');
}

/** Turn 2026-08-06 into 6 August 2026. Leaves anything unparseable alone. */
export function formatUkDate(value: string): string {
  if (!value) return '';
  const parsed = new Date(value);
  if (isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Every bracketed placeholder used across the call scripts, template letters and
// phone directory, mapped to the detail that fills it. Lower case, because we
// match case-insensitively.
const PLACEHOLDER_MAP: Record<string, keyof PersonalDetails> = {
  'name': 'deceasedName',
  'full name': 'deceasedName',
  'their full name': 'deceasedName',
  'full name of the deceased': 'deceasedName',
  'deceased name': 'deceasedName',
  'name of the deceased': 'deceasedName',
  'date': 'deceasedDateOfDeath',
  'date of death': 'deceasedDateOfDeath',
  'dob': 'deceasedDateOfBirth',
  'date of birth': 'deceasedDateOfBirth',
  'address': 'deceasedAddress',
  'full address': 'deceasedAddress',
  'their address': 'deceasedAddress',
  'ni number': 'deceasedNiNumber',
  'national insurance number': 'deceasedNiNumber',
  'your full name': 'yourName',
  'your name': 'yourName',
  'relationship': 'yourRelationship',
  'your relationship': 'yourRelationship',
  'your address': 'yourAddress',
  'your address line 1': 'yourAddress',
  'your postcode': 'yourPostcode',
  'your phone number': 'yourPhone',
  'your email address': 'yourEmail',
  'your email': 'yourEmail',
};

// Dates need reformatting for display; everything else is used verbatim.
const DATE_FIELDS: ReadonlySet<keyof PersonalDetails> = new Set([
  'deceasedDateOfBirth',
  'deceasedDateOfDeath',
]);

export interface FilledText {
  text: string;
  /** Placeholders we could not fill, so the page can tell the user what is left. */
  remaining: string[];
}

/**
 * Replace [placeholders] in a script or letter with the user's saved details.
 * Anything we have no value for is left exactly as it was, so the text still
 * makes sense and the user can see what they still need to add.
 */
export function fillPlaceholders(text: string, details: PersonalDetails): FilledText {
  const remaining = new Set<string>();

  const filled = text.replace(/\[([^\]\n]{1,60})\]/g, (match, rawKey: string) => {
    const key = rawKey.toLowerCase().trim();
    const field = PLACEHOLDER_MAP[key];
    if (!field) {
      // Not something we can ever fill (an account number, a choice like
      // "executor/next of kin"). Leave it for the user to complete.
      remaining.add(rawKey);
      return match;
    }
    const value = details[field];
    if (!value || !value.trim()) {
      remaining.add(rawKey);
      return match;
    }
    return DATE_FIELDS.has(field) ? formatUkDate(value) : value.trim();
  });

  return { text: filled, remaining: [...remaining] };
}

/** How many of the fields we can fill have actually been provided. */
export function detailsProgress(details: PersonalDetails): { filled: number; total: number } {
  const values = Object.values(details);
  return { filled: values.filter(v => v.trim() !== '').length, total: values.length };
}
