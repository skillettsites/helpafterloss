import { Question, UserAnswers } from './types';

type Answers = Partial<UserAnswers>;

export const QUESTIONS: Question[] = [
  // ─── SECTION: About the deceased ───
  {
    id: 'dateOfDeath',
    type: 'date',
    title: 'When did the person die?',
    subtitle: 'This helps us calculate your deadlines. If you are not sure of the exact date, give your best estimate.',
    required: true,
    section: 'about_deceased',
  },
  {
    id: 'deceasedAge',
    type: 'single',
    title: 'How old was the person who died?',
    options: [
      { value: 'under18', label: 'Under 18', description: 'Different rules apply, including the Children\'s Funeral Fund' },
      { value: '18to65', label: '18 to 65' },
      { value: 'over65', label: 'Over 65' },
    ],
    required: true,
    section: 'about_deceased',
  },
  {
    id: 'location',
    type: 'single',
    title: 'Where in the UK did the death occur?',
    subtitle: 'The process differs across the UK nations.',
    options: [
      { value: 'england', label: 'England' },
      { value: 'wales', label: 'Wales' },
      { value: 'scotland', label: 'Scotland', description: 'Uses "Confirmation" instead of Probate, and you have 8 days to register' },
      { value: 'northernIreland', label: 'Northern Ireland', description: 'Tell Us Once is not available in Northern Ireland' },
    ],
    required: true,
    section: 'about_deceased',
  },

  // ─── SECTION: About you ───
  {
    id: 'relationship',
    type: 'single',
    title: 'What was your relationship to the person?',
    subtitle: 'This determines what you are entitled to and what tasks apply to you.',
    options: [
      { value: 'spouse', label: 'Spouse (husband or wife)' },
      { value: 'civilPartner', label: 'Civil partner' },
      { value: 'unmarriedPartner', label: 'Unmarried partner (living together)', warning: 'Important: unmarried partners do not automatically inherit if there is no will. You may need legal advice.' },
      { value: 'child', label: 'Son or daughter' },
      { value: 'parent', label: 'Parent' },
      { value: 'sibling', label: 'Brother or sister' },
      { value: 'grandchild', label: 'Grandchild' },
      { value: 'friend', label: 'Friend or neighbour' },
      { value: 'other', label: 'Other relative or person' },
    ],
    required: true,
    section: 'about_you',
  },
  {
    id: 'userAge',
    type: 'single',
    title: 'Are you over 18?',
    subtitle: 'Some tasks can only be done by someone over 18.',
    showIf: (a: Answers) => a.relationship === 'child' || a.relationship === 'grandchild' || a.relationship === 'sibling',
    options: [
      { value: '18plus', label: 'Yes, I am 18 or over' },
      { value: 'under18', label: 'No, I am under 18', description: 'We will simplify the guidance and suggest you ask a trusted adult for help' },
    ],
    required: true,
    section: 'about_you',
  },
  {
    id: 'isNextOfKin',
    type: 'boolean',
    title: 'Are you the next of kin or main person dealing with things?',
    subtitle: 'The next of kin is usually the closest living relative. If you are a friend helping out, some tasks may not apply to you directly.',
    showIf: (a: Answers) => a.relationship === 'friend' || a.relationship === 'other',
    required: true,
    section: 'about_you',
  },

  // ─── SECTION: Circumstances ───
  {
    id: 'deathCircumstance',
    type: 'single',
    title: 'Were you expecting the death?',
    subtitle: 'This affects the immediate steps and whether a coroner may be involved.',
    options: [
      { value: 'expected', label: 'Yes, it was expected (terminal illness, old age)' },
      { value: 'unexpected', label: 'No, it was sudden or unexpected' },
      { value: 'accident', label: 'It was an accident or injury' },
      { value: 'workplace', label: 'It happened at work or was work-related' },
    ],
    required: true,
    section: 'circumstances',
  },
  {
    id: 'deathLocation',
    type: 'single',
    title: 'Where did the death happen?',
    options: [
      { value: 'home', label: 'At home' },
      { value: 'hospital', label: 'In hospital' },
      { value: 'careHome', label: 'In a care or nursing home' },
      { value: 'abroad', label: 'Outside the UK' },
    ],
    required: true,
    section: 'circumstances',
  },
  {
    id: 'coronerInvolved',
    type: 'boolean',
    title: 'Has the death been referred to a coroner?',
    subtitle: 'If the death was sudden, unexplained, or unnatural, it is usually referred to a coroner. The hospital, police, or GP will have told you if this is the case.',
    showIf: (a: Answers) => a.deathCircumstance !== 'expected',
    required: true,
    section: 'circumstances',
  },

  // ─── SECTION: Cultural/faith ───
  {
    id: 'faithRequirements',
    type: 'single',
    title: 'Are there any religious or cultural requirements?',
    subtitle: 'Some faiths have specific timelines or practices for funerals. This helps us adjust your guidance.',
    options: [
      { value: 'none', label: 'No specific requirements' },
      { value: 'muslim', label: 'Muslim', description: 'Burial within 24 hours is preferred where possible' },
      { value: 'jewish', label: 'Jewish', description: 'Burial within 24-48 hours is preferred' },
      { value: 'hindu', label: 'Hindu', description: 'Cremation is the traditional practice' },
      { value: 'sikh', label: 'Sikh', description: 'Cremation is the traditional practice' },
      { value: 'buddhist', label: 'Buddhist' },
      { value: 'christian', label: 'Christian' },
      { value: 'other', label: 'Other' },
    ],
    required: false,
    section: 'cultural',
  },

  // ─── SECTION: Will and estate ───
  // Skip entire section if deceased was under 18
  {
    id: 'hasWill',
    type: 'single',
    title: 'Did the person leave a will?',
    subtitle: 'If you are not sure, check with their solicitor, bank, or among their paperwork. You can also search the National Will Register.',
    options: [
      { value: 'yes', label: 'Yes, there is a will' },
      { value: 'no', label: 'No, there is no will', description: 'Intestacy rules will determine who inherits' },
      { value: 'unknown', label: 'I do not know yet' },
    ],
    required: true,
    section: 'legal',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
  },
  {
    id: 'isExecutor',
    type: 'boolean',
    title: 'Are you named as an executor in the will?',
    subtitle: 'The executor is the person responsible for carrying out the wishes in the will and administering the estate.',
    showIf: (a: Answers) => a.deceasedAge !== 'under18' && a.hasWill === 'yes',
    required: true,
    section: 'legal',
  },
  {
    id: 'estimatedEstateValue',
    type: 'single',
    title: 'Roughly, what is the total value of everything the person owned?',
    subtitle: 'Include property, savings, investments, and possessions, minus any debts. A rough estimate is fine for now.',
    options: [
      { value: 'under5k', label: 'Under £5,000', description: 'Probate is usually not needed' },
      { value: '5kTo325k', label: '£5,000 to £325,000' },
      { value: '325kTo500k', label: '£325,000 to £500,000', description: 'May be close to the inheritance tax threshold' },
      { value: '500kTo1m', label: '£500,000 to £1 million', description: 'The residence nil-rate band may apply' },
      { value: 'over1m', label: 'Over £1 million', description: 'Inheritance tax is likely to apply' },
      { value: 'unknown', label: 'I have no idea yet' },
    ],
    required: true,
    section: 'legal',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
  },

  // ─── SECTION: Property ───
  // Skip if deceased was under 18
  {
    id: 'propertyStatus',
    type: 'single',
    title: 'Did the person own or rent their home?',
    options: [
      { value: 'ownedSole', label: 'Owned in their name only' },
      { value: 'ownedJoint', label: 'Owned jointly with someone else' },
      { value: 'renting', label: 'Renting from a private landlord' },
      { value: 'councilHousing', label: 'Council or housing association tenant' },
      { value: 'noProperty', label: 'No property (lived with family or in care)' },
    ],
    required: true,
    section: 'property',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
  },
  {
    id: 'hasMortgage',
    type: 'boolean',
    title: 'Was there a mortgage on the property?',
    subtitle: 'Check if there was a life insurance policy or mortgage protection insurance that pays off the mortgage on death.',
    showIf: (a: Answers) => a.propertyStatus === 'ownedSole' || a.propertyStatus === 'ownedJoint',
    required: true,
    section: 'property',
  },

  // ─── SECTION: Financial ───
  // Skip employment if deceased was under 18
  {
    id: 'employmentStatus',
    type: 'single',
    title: 'Was the person working at the time of death?',
    options: [
      { value: 'employed', label: 'Yes, employed by a company', description: 'There may be a death-in-service benefit or workplace pension' },
      { value: 'selfEmployed', label: 'Yes, self-employed', description: 'The business may need to be closed and a final tax return filed' },
      { value: 'retired', label: 'Retired' },
      { value: 'unemployed', label: 'Not working' },
      { value: 'unknown', label: 'I am not sure' },
    ],
    required: true,
    section: 'financial',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
  },
  {
    id: 'hasJointBankAccounts',
    type: 'boolean',
    title: 'Did you share any joint bank accounts with the person?',
    subtitle: 'Joint accounts are usually transferred to the surviving account holder without needing probate.',
    showIf: (a: Answers) => a.deceasedAge !== 'under18' && (a.relationship === 'spouse' || a.relationship === 'civilPartner' || a.relationship === 'unmarriedPartner'),
    required: true,
    section: 'financial',
  },
  {
    id: 'deceasedHadPension',
    type: 'boolean',
    title: 'Did the person have any pensions (state, workplace, or private)?',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasLifeInsurance',
    type: 'boolean',
    title: 'Did the person have life insurance?',
    subtitle: 'Check their paperwork, emails, or ask their bank. Some mortgage and workplace policies include life cover.',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasVehicle',
    type: 'boolean',
    title: 'Did the person own a car or other vehicle?',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasDependentsUnder18',
    type: 'boolean',
    title: 'Did the person have any children or dependants under 18?',
    subtitle: 'This affects Child Benefit, guardianship arrangements, and other support.',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasDigitalAccounts',
    type: 'boolean',
    title: 'Did the person use email, social media, or have online accounts?',
    subtitle: 'Facebook, Google, Apple, Amazon, Netflix, online banking, and similar.',
    required: true,
    section: 'financial',
  },

  // ─── SECTION: Funeral ───
  {
    id: 'hasFuneralPlan',
    type: 'boolean',
    title: 'Did the person have a pre-paid funeral plan?',
    subtitle: 'Check their paperwork or contact their bank. Pre-paid plans cover some or all funeral costs.',
    required: true,
    section: 'funeral',
  },
  {
    id: 'funeralPreference',
    type: 'single',
    title: 'What type of funeral are you considering?',
    subtitle: 'The will or pre-paid plan may already specify this. You can change your mind later.',
    options: [
      { value: 'burial', label: 'Traditional burial with service', description: 'Average cost around £5,400' },
      { value: 'cremation', label: 'Cremation with service', description: 'Average cost around £4,200' },
      { value: 'directCremation', label: 'Direct cremation (no service)', description: 'From around £1,600, the most affordable option' },
      { value: 'directBurial', label: 'Direct burial (no service)' },
      { value: 'greenBurial', label: 'Green or natural burial' },
      { value: 'undecided', label: 'Not sure yet' },
    ],
    required: true,
    section: 'funeral',
    showIf: (a: Answers) => !a.hasFuneralPlan,
  },
  {
    id: 'receivingBenefits',
    type: 'boolean',
    title: 'Are you currently receiving any means-tested benefits?',
    subtitle: 'This includes Universal Credit, Pension Credit, Income Support, income-based JSA or ESA, Housing Benefit, or the support component of Working Tax Credit. If yes, you may be eligible for help with funeral costs.',
    required: true,
    section: 'funeral',
  },
  {
    id: 'userUnderStatePensionAge',
    type: 'boolean',
    title: 'Are you under State Pension age?',
    subtitle: 'You may be eligible for Bereavement Support Payment, which provides a lump sum and monthly payments for 18 months.',
    showIf: (a: Answers) => a.relationship === 'spouse' || a.relationship === 'civilPartner',
    required: true,
    section: 'financial',
  },
];

export function getVisibleQuestions(answers: Partial<UserAnswers>): Question[] {
  return QUESTIONS.filter(q => !q.showIf || q.showIf(answers));
}

export function getSectionProgress(answers: Partial<UserAnswers>): { section: string; answered: number; total: number }[] {
  const visible = getVisibleQuestions(answers);
  const sections = [...new Set(visible.map(q => q.section))];
  return sections.map(section => {
    const sectionQuestions = visible.filter(q => q.section === section);
    const answered = sectionQuestions.filter(q => answers[q.id] !== undefined).length;
    return { section, answered, total: sectionQuestions.length };
  });
}
