import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies - Complete Checklist',
  description: 'The complete checklist of everything you need to do when someone dies in the UK. Covering registration, funeral, finances, probate, government notifications, property, and digital accounts.',
  alternates: { canonical: 'https://helpafterloss.co.uk/checklist' },
  openGraph: {
    title: 'What to Do When Someone Dies - Complete Checklist',
    description: 'The complete checklist of everything you need to do when someone dies in the UK.',
    url: 'https://helpafterloss.co.uk/checklist',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Bereavement Checklist - UK',
    description: 'Everything you need to do when someone dies, from registration to probate.',
  },
};

const CATEGORIES = [
  {
    title: 'Immediate (first 24-48 hours)',
    items: [
      'Get the Medical Certificate of Cause of Death from a doctor',
      'If unexpected death, the coroner may be involved',
      'Secure the person\'s home if they lived alone',
      'Find the will (check home, solicitor, bank, National Will Register)',
      'Inform close family and friends',
      'If Muslim or Jewish, contact mosque/synagogue for urgent burial arrangements',
      'If death was abroad, contact the Foreign Office on 020 7008 5000',
    ],
  },
  {
    title: 'Registration (within 5 days, 8 in Scotland)',
    items: [
      'Register the death at the local register office',
      'Order at least 5 certified copies of the death certificate (£11 each)',
      'Use the Tell Us Once service (not available in Northern Ireland)',
    ],
  },
  {
    title: 'Funeral (first 2 weeks)',
    items: [
      'Contact a funeral director and get itemised quotes (at least 3)',
      'Or contact the pre-paid funeral plan provider if there is one',
      'Apply for Funeral Expenses Payment if on benefits (0800 731 0469)',
      'Apply to Children\'s Funeral Fund if the person was under 18',
    ],
  },
  {
    title: 'Financial (first month)',
    items: [
      'Notify banks and building societies (or use Death Notification Service)',
      'Transfer joint bank accounts to your name',
      'Claim on life insurance policies',
      'Notify pension providers (state, workplace, private)',
      'Contact employer for death-in-service benefits and final pay',
      'Apply for Bereavement Support Payment if spouse/civil partner died',
      'Update council tax (exemption or single person discount)',
      'Cancel subscriptions and direct debits',
      'Notify utility companies (gas, electric, water)',
      'Deal with the vehicle (DVLA, insurance, V5C)',
      'Transfer or claim Child Benefit if there are children',
      'Check guardianship arrangements for any children',
    ],
  },
  {
    title: 'Legal and probate (within 3 months)',
    items: [
      'Apply for probate (Grant of Probate or Letters of Administration)',
      'In Scotland, apply for Confirmation at the Sheriff Court',
      'Understand intestacy rules if there is no will',
      'Get legal advice if you are an unmarried partner with no will',
      'Check if inheritance tax applies (estate above £325,000)',
      'Place statutory notices in The Gazette to protect against unknown debts',
      'File the final Self Assessment tax return if self-employed',
    ],
  },
  {
    title: 'Property',
    items: [
      'Check and update home insurance (may void after 30 days empty)',
      'Notify the mortgage lender',
      'Apply for council tax exemption on empty property',
      'Notify the landlord or housing association',
      'Update the Land Registry',
      'Set up Royal Mail post redirection',
    ],
  },
  {
    title: 'Digital accounts',
    items: [
      'Memorialise or delete Facebook/Instagram',
      'Request access or deletion of Google account',
      'Deal with Apple account (may need Legacy Contact or court order)',
      'Close Microsoft, PayPal, Amazon, and other accounts',
      'Cancel streaming services (Netflix, Spotify, etc.)',
      'Cancel all other paid subscriptions',
    ],
  },
  {
    title: 'Ongoing (months 3-12)',
    items: [
      'Distribute the estate to beneficiaries (after probate and debts paid)',
      'Close remaining accounts',
      'Finalise estate tax affairs',
      'Prepare for difficult dates (birthdays, anniversaries)',
    ],
  },
];

export default function ChecklistPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Complete Bereavement Checklist
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        A comprehensive checklist of everything you may need to do when someone dies in the UK. Not everything will apply to your situation.
      </p>
      <div className="flex flex-wrap gap-3 mb-10">
        <Link
          href="/start"
          className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          Get a Personalised Checklist
        </Link>
        <span className="px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg text-sm">
          Use Ctrl+P to print
        </span>
      </div>

      <div className="space-y-8">
        {CATEGORIES.map((cat, i) => (
          <section key={i}>
            <h2 className="text-xl font-bold text-foreground mb-4">{cat.title}</h2>
            <div className="bg-card rounded-xl border border-border divide-y divide-border">
              {cat.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3 px-5 py-3">
                  <div className="w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="bg-primary-light rounded-xl p-5 mt-10">
        <p className="text-sm text-foreground leading-relaxed">
          Need help writing to organisations? Our <Link href="/template-letters" className="text-primary font-medium hover:underline">template letters</Link> cover banks, utility companies, HMRC, employers, insurers, and more. Just fill in the details and send.
        </p>
      </div>

      <div className="bg-warm border border-warm-border rounded-xl p-5 mt-4">
        <p className="text-sm text-amber-800 leading-relaxed">
          This is a general checklist. Your situation is unique. For a personalised list that only includes what applies to you, with real deadlines and helpful links, <Link href="/start" className="font-medium underline">use our free tool</Link>.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Complete Bereavement Checklist: What to Do When Someone Dies in the UK',
            description: 'A comprehensive checklist covering everything from the first 24 hours through to the first year after a death in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            step: CATEGORIES.flatMap(cat => cat.items.map(item => ({
              '@type': 'HowToStep',
              name: item,
            }))),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Complete Checklist', item: 'https://helpafterloss.co.uk/checklist' },
            ],
          }),
        }}
      />
    </div>
  );
}
