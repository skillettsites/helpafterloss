import Link from 'next/link';

interface Guide {
  href: string;
  title: string;
  description: string;
}

const ALL_GUIDES: Guide[] = [
  { href: '/guide', title: 'Step-by-Step Guide', description: 'Everything you need to do, in order, from the first 24 hours onwards' },
  { href: '/checklist', title: 'Master Checklist', description: 'A complete list of tasks to work through at your own pace' },
  { href: '/probate', title: 'Probate Guide', description: 'When you need probate, how to apply, and whether to DIY or use a solicitor' },
  { href: '/intestacy', title: 'Dying Without a Will', description: 'Who inherits when there is no will, and what the rules are across the UK' },
  { href: '/costs', title: 'Costs Breakdown', description: 'What everything costs and practical ways to reduce expenses' },
  { href: '/tell-us-once', title: 'Tell Us Once', description: 'One call to notify multiple government departments at the same time' },
  { href: '/template-letters', title: 'Template Letters', description: 'Ready-to-use letters for banks, utilities, HMRC, employers, and more' },
  { href: '/phone-directory', title: 'Phone Directory', description: 'Every number you might need, organised by who you need to contact' },
  { href: '/call-scripts', title: 'Call Scripts', description: 'Word-for-word scripts for difficult phone calls' },
  { href: '/digital-legacy', title: 'Digital Accounts', description: 'How to handle social media, email, and online accounts' },
  { href: '/cultural-guide', title: 'Cultural & Religious Guide', description: 'Faith-specific funeral practices and requirements in the UK' },
  { href: '/guides/executor-duties', title: 'Executor Duties', description: 'What an executor must do, step by step, with timelines and legal obligations' },
  { href: '/guides/bereavement-benefits', title: 'Bereavement Benefits', description: 'Every benefit you can claim, who qualifies, and how to apply' },
  { href: '/guides/funeral-options', title: 'Funeral Options', description: 'Every type of funeral explained, from traditional to direct cremation' },
  { href: '/guides/document-checklist', title: 'Document Checklist', description: 'Every document you need to gather, where to find them, and who needs them' },
  { href: '/guides/deaths-abroad', title: 'Deaths Abroad', description: 'What to do when someone dies overseas, FCDO support, repatriation, and costs' },
  { href: '/guides/lost-a-parent', title: 'When a Parent Dies', description: 'Specific guidance for adult children dealing with a parent\'s death' },
  { href: '/guides/lost-a-spouse', title: 'When a Spouse Dies', description: 'Financial, legal, and practical steps when you lose your husband or wife' },
  { href: '/guides/lost-a-child', title: 'When a Child Dies', description: 'Support and guidance for the most devastating loss a family can face' },
  { href: '/guides/lost-a-sibling', title: 'When a Sibling Dies', description: 'Your grief as a bereaved brother or sister is real and deserves support' },
  { href: '/guides/lost-a-friend', title: 'When a Friend Dies', description: 'Friend grief is real but often unrecognised. Guidance and support for bereaved friends' },
  { href: '/support', title: 'Support & Helplines', description: 'Free helplines, counselling services, and bereavement organisations' },
  { href: '/guides', title: 'Local Guides', description: 'City-specific guidance with local registrar and council contact details' },
  { href: '/counties', title: 'County Guides', description: 'Find registrar offices and registration guidance by county across England and Wales' },
  { href: '/notify', title: 'Who to Notify', description: 'Phone numbers, online forms, and step-by-step processes for every bank, utility, and insurer' },
  { href: '/notify-for-me', title: 'Notify For Me', description: 'We email banks, energy providers, and insurers on your behalf so you do not have to' },
  { href: '/deadline-tracker', title: 'Deadline Tracker', description: 'Enter the date of death and see every key deadline calculated for you' },
  { href: '/document-vault', title: 'Document Vault Checklist', description: 'Track which important documents you have found and which you still need, with tips on where to look' },
  { href: '/print-checklist', title: 'Printable Checklist', description: 'A clean, print-friendly checklist you can tick off on paper' },
  { href: '/blog', title: 'Guides & Articles', description: 'In-depth articles on funeral costs, bereavement leave rights, and free funeral options' },
  { href: '/blog/true-cost-of-dying-uk', title: 'The True Cost of Dying in the UK', description: 'Every cost you may face when someone dies, with real 2026 figures and ways to reduce them' },
  { href: '/blog/bereavement-leave-rights-uk', title: 'Bereavement Leave: Your Rights', description: 'What you are legally entitled to, what employers typically offer, and what to do if refused' },
  { href: '/blog/free-funeral-options-uk', title: 'Free and Low-Cost Funeral Options', description: 'Council funerals, DWP help, direct cremation, DIY funerals, and charitable assistance' },
  { href: '/guides/bank-accounts-after-death', title: 'Bank Accounts After Death', description: 'What happens to bank accounts, how to close them, and when you can release money without probate' },
  { href: '/guides/debts-after-death', title: 'Debts After Death', description: 'What happens to debts when someone dies. You are not responsible for their personal debts.' },
  { href: '/guides/property-after-death', title: 'Property After Death', description: 'Mortgages, selling the home, council tax exemptions, and joint ownership explained' },
  { href: '/guides/pensions-after-death', title: 'Pensions After Death', description: 'State pension inheritance, workplace death benefits, and how to trace lost pensions' },
  { href: '/guides/inheritance-tax', title: 'Inheritance Tax', description: 'Current thresholds, rates, exemptions, and practical ways to reduce the tax bill' },
  { href: '/guides/council-tax-after-death', title: 'Council Tax After Death', description: 'Exemptions for empty properties, single person discount, and what executors need to know' },
  { href: '/guides/subscriptions-after-death', title: 'Subscriptions & Direct Debits', description: 'How to find and cancel all subscriptions, direct debits, and standing orders' },
  { href: '/guides/driving-after-death', title: 'Cars & DVLA', description: 'DVLA notification, car insurance (void immediately), V5C transfer, and selling the vehicle' },
  { href: '/guides/scams-after-bereavement', title: 'Bereavement Scams', description: 'Common scams targeting bereaved families and how to protect yourself and the estate' },
  { href: '/guides/cohabiting-partners', title: 'Unmarried Partners', description: 'Your rights when an unmarried partner dies, the cohabitation trap, and how to protect yourself' },
  { href: '/guides/finding-accounts-after-death', title: 'Finding Their Accounts', description: 'How to discover all bank accounts, pensions, and policies the person held' },
  { href: '/guides/first-year-after-loss', title: 'First Year After Loss', description: 'A month-by-month guide to the practical and emotional journey of the first year' },
  { href: '/guides/helping-someone-grieve', title: 'Helping Someone Grieve', description: 'What to say, what to do, and how to support someone through bereavement' },
  { href: '/blog/what-tell-us-once-doesnt-cover', title: "What Tell Us Once Doesn't Cover", description: 'The full list of organisations you must contact manually after Tell Us Once' },
  { href: '/blog/bank-probate-thresholds-2026', title: 'Bank Probate Thresholds 2026', description: 'How much each bank will release without a grant of probate' },
  { href: '/blog/death-certificate-how-many-copies', title: 'Death Certificates: How Many?', description: 'How many certified copies to order and who needs one' },
  { href: '/guide/scotland', title: 'Scotland Guide', description: 'Registration, Procurator Fiscal, Confirmation, and Scottish intestacy rules' },
  { href: '/guide/northern-ireland', title: 'Northern Ireland Guide', description: 'NISRA registration, Belfast probate, no Tell Us Once, and NI intestacy rules' },
];

interface RelatedGuidesProps {
  currentPath: string;
  guides?: string[];
}

export function RelatedGuides({ currentPath, guides }: RelatedGuidesProps) {
  let selected: Guide[];

  if (guides) {
    selected = guides
      .map(href => ALL_GUIDES.find(g => g.href === href))
      .filter((g): g is Guide => g !== undefined);
  } else {
    selected = ALL_GUIDES
      .filter(g => g.href !== currentPath)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }

  if (selected.length === 0) return null;

  return (
    <section className="mt-12 mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selected.map(guide => (
          <Link
            key={guide.href}
            href={guide.href}
            className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {guide.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
