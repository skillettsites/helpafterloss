export interface UserAnswers {
  dateOfDeath: string;
  deceasedAge: 'under18' | '18to65' | 'over65';
  location: 'england' | 'wales' | 'scotland' | 'northernIreland';
  relationship: 'spouse' | 'civilPartner' | 'unmarriedPartner' | 'child' | 'parent' | 'sibling' | 'grandchild' | 'friend' | 'other';
  userAge: 'under18' | '18plus';
  isNextOfKin: boolean;
  deathCircumstance: 'expected' | 'unexpected' | 'accident' | 'workplace';
  deathLocation: 'home' | 'hospital' | 'careHome' | 'abroad';
  coronerInvolved: boolean;
  faithRequirements: 'none' | 'muslim' | 'jewish' | 'hindu' | 'sikh' | 'buddhist' | 'christian' | 'other';
  hasWill: 'yes' | 'no' | 'unknown';
  isExecutor: boolean;
  estimatedEstateValue: 'under5k' | '5kTo325k' | '325kTo500k' | '500kTo1m' | 'over1m' | 'unknown';
  propertyStatus: 'ownedSole' | 'ownedJoint' | 'renting' | 'councilHousing' | 'noProperty';
  hasMortgage: boolean;
  employmentStatus: 'employed' | 'selfEmployed' | 'retired' | 'unemployed' | 'unknown';
  hasDependentsUnder18: boolean;
  hasDigitalAccounts: boolean;
  funeralPreference: 'burial' | 'cremation' | 'directCremation' | 'directBurial' | 'greenBurial' | 'undecided';
  hasFuneralPlan: boolean;
  receivingBenefits: boolean;
  userUnderStatePensionAge: boolean;
  hasJointBankAccounts: boolean;
  deceasedHadPension: boolean;
  hasLifeInsurance: boolean;
  hasVehicle: boolean;
}

export type QuestionType = 'single' | 'date' | 'boolean';

export interface QuestionOption {
  value: string;
  label: string;
  description?: string;
  warning?: string;
}

export interface Question {
  id: keyof UserAnswers;
  type: QuestionType;
  title: string;
  subtitle?: string;
  options?: QuestionOption[];
  required: boolean;
  showIf?: (answers: Partial<UserAnswers>) => boolean;
  section: QuestionSection;
}

export type QuestionSection =
  | 'about_deceased'
  | 'about_you'
  | 'circumstances'
  | 'cultural'
  | 'legal'
  | 'property'
  | 'financial'
  | 'funeral';

export const SECTION_LABELS: Record<QuestionSection, string> = {
  about_deceased: 'About the person who died',
  about_you: 'About you',
  circumstances: 'The circumstances',
  cultural: 'Cultural or religious needs',
  legal: 'Will and estate',
  property: 'Property',
  financial: 'Financial situation',
  funeral: 'Funeral arrangements',
};

export type TaskCategory =
  | 'immediate'
  | 'registration'
  | 'funeral'
  | 'financial'
  | 'legal'
  | 'government'
  | 'property'
  | 'digital'
  | 'ongoing';

export const CATEGORY_LABELS: Record<TaskCategory, string> = {
  immediate: 'Immediate Steps',
  registration: 'Registering the Death',
  funeral: 'Funeral Arrangements',
  financial: 'Financial Tasks',
  legal: 'Legal & Probate',
  government: 'Government Notifications',
  property: 'Property',
  digital: 'Digital Accounts',
  ongoing: 'Ongoing Tasks',
};

export const CATEGORY_DESCRIPTIONS: Record<TaskCategory, string> = {
  immediate: 'Things to do in the first 24-48 hours',
  registration: 'Formally registering the death and getting certificates',
  funeral: 'Planning and arranging the funeral',
  financial: 'Banks, pensions, insurance, and other financial matters',
  legal: 'Probate, wills, and estate administration',
  government: 'Notifying government departments and services',
  property: 'Dealing with the home and property',
  digital: 'Email, social media, and online accounts',
  ongoing: 'Things to deal with over the coming months',
};

export type TaskPriority = 'urgent' | 'important' | 'normal';

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  priority: TaskPriority;
  estimatedMinutes: number;
  deadlineDaysFromDeath?: number;
  deadlineLabel?: string;
  phoneNumber?: string;
  url?: string;
  templateId?: string;
  showIf: (answers: Partial<UserAnswers>) => boolean;
  supportMessage?: string;
}

export interface TimelineEntry {
  date: Date;
  label: string;
  description: string;
  tasks: Task[];
  isPast: boolean;
  isUrgent: boolean;
}

export interface CostEstimate {
  item: string;
  low: number;
  mid: number;
  high: number;
  notes: string;
  savingTip?: string;
  showIf: (answers: Partial<UserAnswers>) => boolean;
}

export interface SavedProgress {
  answers: Partial<UserAnswers>;
  completedTaskIds: string[];
  lastUpdated: string;
  version: number;
}

export interface SupportOrganisation {
  name: string;
  phone?: string;
  hours?: string;
  url: string;
  description: string;
  forSituations?: string[];
}
