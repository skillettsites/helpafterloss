import { CostEstimate, UserAnswers } from './types';

type A = Partial<UserAnswers>;

export const COST_ESTIMATES: CostEstimate[] = [
  {
    item: 'Death certificates',
    low: 37,
    mid: 62,
    high: 125,
    notes: '£12.50 each in England and Wales, £15 in Scotland. It is worth ordering at least 5 copies, as banks, solicitors, and insurers each need to see an original.',
    savingTip: 'Order all the copies you need when you register the death. Extras cost more later.',
    showIf: () => true,
  },
  {
    item: 'Traditional burial with service',
    low: 4000,
    mid: 5440,
    high: 8000,
    notes: 'Average UK cost for a traditional burial funeral with service, hearse, and burial plot.',
    savingTip: 'It is worth getting at least 3 quotes and asking for an itemised breakdown. Prices vary a great deal between funeral directors.',
    showIf: (a: A) => a.funeralPreference === 'burial' && !a.hasFuneralPlan,
  },
  {
    item: 'Cremation with service',
    low: 3000,
    mid: 4200,
    high: 6500,
    notes: 'Average UK cost for a cremation funeral with service.',
    savingTip: 'It is worth getting at least 3 quotes. Some crematoria are considerably cheaper than others.',
    showIf: (a: A) => a.funeralPreference === 'cremation' && !a.hasFuneralPlan,
  },
  {
    item: 'Direct cremation (no service)',
    low: 1000,
    mid: 1628,
    high: 2500,
    notes: 'No service, and no mourners present. The most affordable option. Many families hold a separate memorial later, in their own time.',
    savingTip: 'It is worth comparing prices online. Some providers specialise in direct cremation at lower cost.',
    showIf: (a: A) => a.funeralPreference === 'directCremation' && !a.hasFuneralPlan,
  },
  {
    item: 'Green / natural burial',
    low: 1500,
    mid: 3000,
    high: 5000,
    notes: 'Burial in a natural setting with a biodegradable coffin or shroud. Prices vary by site.',
    showIf: (a: A) => a.funeralPreference === 'greenBurial' && !a.hasFuneralPlan,
  },
  {
    item: 'Direct burial (no service)',
    low: 1500,
    mid: 2500,
    high: 4000,
    notes: 'No service, and no mourners present. Costs vary by area, mainly driven by the burial plot fee.',
    showIf: (a: A) => a.funeralPreference === 'directBurial' && !a.hasFuneralPlan,
  },
  {
    item: 'Funeral (estimated, type not yet decided)',
    low: 1600,
    mid: 4000,
    high: 8000,
    notes: 'Costs depend on the type of funeral. Direct cremation starts from around £1,600; traditional funerals average £4,000-5,500.',
    showIf: (a: A) => a.funeralPreference === 'undecided' && !a.hasFuneralPlan,
  },
  {
    item: 'Probate court fee',
    low: 526,
    mid: 526,
    high: 526,
    notes: '£526 for estates over £5,000. Free for estates of £5,000 or less.',
    showIf: (a: A) => a.estimatedEstateValue !== 'under5k' && a.deceasedAge !== 'under18',
  },
  {
    item: 'Solicitor fees (if using one for probate)',
    low: 2000,
    mid: 4000,
    high: 15000,
    notes: 'Solicitors typically charge 1-5% of the estate value, or hourly rates of £150-400+. For a straightforward estate, many people manage probate themselves.',
    savingTip: 'If the estate is straightforward, doing probate yourself is very manageable. The government website walks you through it step by step.',
    showIf: (a: A) => a.estimatedEstateValue !== 'under5k' && a.deceasedAge !== 'under18',
  },
  {
    item: 'Statutory notice (The Gazette)',
    low: 80,
    mid: 100,
    high: 150,
    notes: 'Placing a notice in The London Gazette protects you from liability for unknown debts.',
    showIf: (a: A) => a.estimatedEstateValue !== 'under5k' && a.deceasedAge !== 'under18',
  },
  {
    item: 'Post redirection',
    low: 45,
    mid: 66.5,
    high: 95,
    notes: 'Royal Mail redirection for one person: £45 for 3 months, £66.50 for 6 months, £95 for 12 months. If you receive Universal Credit or Pension Credit, ask about the discounted concession rate when you apply.',
    showIf: (a: A) => a.deceasedAge !== 'under18',
  },
];

export interface CostSummary {
  items: { item: string; low: number; mid: number; high: number; notes: string; savingTip?: string }[];
  totalLow: number;
  totalMid: number;
  totalHigh: number;
  savings: { description: string; amount: number }[];
}

export function calculateCosts(answers: Partial<UserAnswers>): CostSummary {
  const items = COST_ESTIMATES.filter(c => c.showIf(answers)).map(({ showIf, ...rest }) => rest);
  const totalLow = items.reduce((sum, i) => sum + i.low, 0);
  const totalMid = items.reduce((sum, i) => sum + i.mid, 0);
  const totalHigh = items.reduce((sum, i) => sum + i.high, 0);

  const savings: { description: string; amount: number }[] = [];

  if (answers.receivingBenefits) {
    savings.push({
      description: 'Funeral Expenses Payment (if eligible): up to £1,000 plus burial/cremation fees',
      amount: 1000,
    });
  }

  if (answers.deceasedAge === 'under18') {
    savings.push({
      description: 'Children\'s Funeral Fund covers burial/cremation fees and a coffin',
      amount: 3000,
    });
  }

  if (answers.hasFuneralPlan) {
    savings.push({
      description: 'Pre-paid funeral plan covers some or all funeral costs',
      amount: 4000,
    });
  }

  return { items, totalLow, totalMid, totalHigh, savings };
}
