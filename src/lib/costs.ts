import { CostEstimate, UserAnswers } from './types';

type A = Partial<UserAnswers>;

export const COST_ESTIMATES: CostEstimate[] = [
  {
    item: 'Death certificates',
    low: 33,
    mid: 55,
    high: 110,
    notes: '£11 each. We recommend ordering at least 5 copies. Banks, solicitors, and insurers each need an original.',
    savingTip: 'Order all copies when you register the death. It costs more to order extras later.',
    showIf: () => true,
  },
  {
    item: 'Traditional burial with service',
    low: 4000,
    mid: 5440,
    high: 8000,
    notes: 'Average UK cost for a traditional burial funeral with service, hearse, and burial plot.',
    savingTip: 'Get at least 3 quotes. Costs vary hugely between funeral directors. Ask for an itemised breakdown.',
    showIf: (a: A) => a.funeralPreference === 'burial' && !a.hasFuneralPlan,
  },
  {
    item: 'Cremation with service',
    low: 3000,
    mid: 4200,
    high: 6500,
    notes: 'Average UK cost for a cremation funeral with service.',
    savingTip: 'Get at least 3 quotes. Some crematoria are significantly cheaper than others.',
    showIf: (a: A) => a.funeralPreference === 'cremation' && !a.hasFuneralPlan,
  },
  {
    item: 'Direct cremation (no service)',
    low: 1000,
    mid: 1628,
    high: 2500,
    notes: 'No service, no mourners present. The most affordable option. You can hold a separate memorial.',
    savingTip: 'Compare prices online. Some providers specialise in direct cremation at lower costs.',
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
    item: 'Funeral (estimated, type not yet decided)',
    low: 1600,
    mid: 4000,
    high: 8000,
    notes: 'Costs depend on the type of funeral. Direct cremation starts from around £1,600; traditional funerals average £4,000-5,500.',
    showIf: (a: A) => (a.funeralPreference === 'undecided' || a.funeralPreference === 'directBurial') && !a.hasFuneralPlan,
  },
  {
    item: 'Probate court fee',
    low: 300,
    mid: 300,
    high: 300,
    notes: '£300 for estates over £5,000. Free for estates under £5,000.',
    showIf: (a: A) => a.estimatedEstateValue !== 'under5k' && a.deceasedAge !== 'under18',
  },
  {
    item: 'Solicitor fees (if using one for probate)',
    low: 2000,
    mid: 4000,
    high: 15000,
    notes: 'Solicitors typically charge 1-5% of the estate value, or hourly rates of £150-400+. For a straightforward estate you may be able to do probate yourself.',
    savingTip: 'Consider DIY probate for straightforward estates. The government website guides you through the process step by step.',
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
    low: 37,
    mid: 62,
    high: 90,
    notes: 'Royal Mail redirection from £36.99 for 3 months, £52.99 for 6 months, £72.99 for 12 months.',
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
