import { Question, UserAnswers } from './types';

type Answers = Partial<UserAnswers>;

export const QUESTIONS: Question[] = [
  // ─── SECTION: About the deceased ───
  {
    id: 'dateOfDeath',
    type: 'date',
    title: 'When did they pass away?',
    subtitle: 'We only use this to work out your dates for you. If you are not sure of the exact day, your best guess is absolutely fine.',
    required: true,
    section: 'about_deceased',
  },
  {
    id: 'deceasedAge',
    type: 'single',
    title: 'How old were they?',
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
    title: 'Where in the UK did this happen?',
    subtitle: 'The rules differ a little across the four nations, so this helps us give you the right guidance.',
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
    title: 'Who were they to you?',
    subtitle: 'This shapes which tasks fall to you, and what support you may be entitled to.',
    options: [
      { value: 'spouse', label: 'They were my husband or wife' },
      { value: 'civilPartner', label: 'They were my civil partner' },
      { value: 'unmarriedPartner', label: 'They were my partner, and we lived together', warning: 'Worth knowing: unmarried partners do not automatically inherit when there is no will. It is worth getting legal advice early.' },
      { value: 'child', label: 'They were my mum or dad' },
      { value: 'parent', label: 'They were my son or daughter' },
      { value: 'sibling', label: 'They were my brother or sister' },
      { value: 'grandchild', label: 'They were my grandparent' },
      { value: 'friend', label: 'They were my friend or neighbour' },
      { value: 'other', label: 'Someone else close to me' },
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
    title: 'Are you the one dealing with most of this?',
    subtitle: 'Usually that falls to the closest living relative. If you are a friend stepping in to help, some of these tasks may not be yours to do, and we will say so.',
    showIf: (a: Answers) => a.relationship === 'friend' || a.relationship === 'other',
    required: true,
    section: 'about_you',
  },

  // ─── SECTION: Circumstances ───
  {
    id: 'deathCircumstance',
    type: 'single',
    title: 'Was this expected?',
    subtitle: 'We are sorry to ask. It changes the first few steps, and whether a coroner is likely to be involved.',
    options: [
      { value: 'expected', label: 'Yes, we were expecting it' },
      { value: 'unexpected', label: 'No, it was sudden' },
      { value: 'accident', label: 'It was an accident or injury' },
      { value: 'workplace', label: 'It happened at work, or was work-related' },
    ],
    required: true,
    section: 'circumstances',
  },
  {
    id: 'deathLocation',
    type: 'single',
    title: 'Where were they when they passed away?',
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
    title: 'Has a coroner become involved?',
    subtitle: 'This happens routinely when a death is sudden or unexplained, and it is not a sign that anything is wrong. The hospital, police or GP would have told you if so.',
    showIf: (a: Answers) => a.deathCircumstance !== 'expected',
    required: true,
    section: 'circumstances',
  },

  // ─── SECTION: Cultural/faith ───
  {
    id: 'faithRequirements',
    type: 'single',
    title: 'Are there faith or cultural traditions to honour?',
    subtitle: 'Some faiths ask for the funeral to happen quickly, or in a particular way. Tell us and we will fit the timings around that.',
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
    title: 'Did they leave a will?',
    subtitle: 'If you are not sure, it is worth asking their solicitor or bank, or looking through their paperwork. The National Will Register can also be searched.',
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
    title: 'Roughly, what did they own altogether?',
    subtitle: 'Their home, savings, investments and belongings, less anything they owed. A rough figure is all we need, and you can change it later.',
    options: [
      { value: 'under5k', label: 'Under £5,000', description: 'Probate is usually not needed' },
      { value: '5kTo325k', label: '£5,000 to £325,000' },
      { value: '325kTo500k', label: '£325,000 to £500,000', description: 'May be close to the inheritance tax threshold' },
      { value: '500kTo1m', label: '£500,000 to £1 million', description: 'The residence nil-rate band may apply' },
      { value: 'over1m', label: 'Over £1 million', description: 'Inheritance tax is likely to apply' },
      { value: 'unknown', label: 'I really do not know yet', description: 'That is completely normal at this stage. We will still build your guide.' },
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
    title: 'Did they own or rent their home?',
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
    title: 'Was there a mortgage on their home?',
    subtitle: 'It is well worth checking for mortgage protection or life cover. Many policies pay the mortgage off entirely, which can lift a real worry.',
    showIf: (a: Answers) => a.propertyStatus === 'ownedSole' || a.propertyStatus === 'ownedJoint',
    required: true,
    section: 'property',
  },

  // ─── SECTION: Financial ───
  // Skip employment if deceased was under 18
  {
    id: 'employmentStatus',
    type: 'single',
    title: 'Were they working at the time?',
    options: [
      { value: 'employed', label: 'Yes, employed by a company', description: 'Their employer may owe a death-in-service payment or workplace pension' },
      { value: 'selfEmployed', label: 'Yes, self-employed', description: 'The business will need closing and a final tax return filing' },
      { value: 'retired', label: 'They had retired' },
      { value: 'unemployed', label: 'They were not working' },
      { value: 'unknown', label: 'I am not sure' },
    ],
    required: true,
    section: 'financial',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
  },
  {
    id: 'hasJointBankAccounts',
    type: 'boolean',
    title: 'Did you share a bank account with them?',
    subtitle: 'If so, that is usually one of the simpler parts. Joint accounts normally pass straight to the surviving holder with no need for probate.',
    showIf: (a: Answers) => a.deceasedAge !== 'under18' && (a.relationship === 'spouse' || a.relationship === 'civilPartner' || a.relationship === 'unmarriedPartner'),
    required: true,
    section: 'financial',
  },
  {
    id: 'deceasedHadPension',
    type: 'boolean',
    title: 'Did they have any pensions, state, workplace or private?',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasLifeInsurance',
    type: 'boolean',
    title: 'Did they have life insurance?',
    subtitle: 'Their paperwork, emails or bank may hold the answer. Plenty of mortgage and workplace policies quietly include life cover that families never claim.',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasVehicle',
    type: 'boolean',
    title: 'Did they own a car or other vehicle?',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasDependentsUnder18',
    type: 'boolean',
    title: 'Did they have children or dependants under 18?',
    subtitle: 'There is extra support available where children are involved, including Child Benefit and guardianship arrangements.',
    showIf: (a: Answers) => a.deceasedAge !== 'under18',
    required: true,
    section: 'financial',
  },
  {
    id: 'hasDigitalAccounts',
    type: 'boolean',
    title: 'Did they use email, social media or online accounts?',
    subtitle: 'Things like Facebook, Google, Apple, Amazon, Netflix or online banking. These can wait, but they are easy to forget.',
    required: true,
    section: 'financial',
  },

  // ─── SECTION: Funeral ───
  {
    id: 'hasFuneralPlan',
    type: 'boolean',
    title: 'Did they have a pre-paid funeral plan?',
    subtitle: 'Worth checking their paperwork or asking their bank. A plan can cover some or all of the funeral, which takes real pressure off.',
    required: true,
    section: 'funeral',
  },
  {
    id: 'funeralPreference',
    type: 'single',
    title: 'Have you thought about the kind of funeral?',
    subtitle: 'Their will or plan may already say. If not, there is no need to decide today, and nothing here is binding.',
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
    title: 'Are you receiving any means-tested benefits?',
    subtitle: 'Universal Credit, Pension Credit, Income Support, income-based JSA or ESA, Housing Benefit, or the support element of Working Tax Credit. If you are, there is likely to be help available towards the funeral.',
    required: true,
    section: 'funeral',
  },
  {
    id: 'userUnderStatePensionAge',
    type: 'boolean',
    title: 'Are you under State Pension age?',
    subtitle: 'If you are, you may well be entitled to Bereavement Support Payment: a lump sum followed by monthly payments. Many people never claim it.',
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
