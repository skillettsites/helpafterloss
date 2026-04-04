import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies - Complete Checklist',
  description: 'The complete checklist of everything you need to do when someone dies in the UK. Covering registration, funeral, finances, probate, government notifications, property, and digital accounts.',
  alternates: { canonical: 'https://helpafterloss.co.uk/checklist' },
  openGraph: {
    title: 'What to Do When Someone Dies - Complete Checklist',
    description: 'The complete checklist of everything you need to do when someone dies in the UK.',
    url: 'https://helpafterloss.co.uk/checklist',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Bereavement Checklist - UK',
    description: 'Everything you need to do when someone dies, from registration to probate.',
  },
};

const CATEGORIES = [
  {
    title: 'Right now',
    items: [
      'You do not need to do anything immediately. Take the time you need.',
      'If the death happened at home, call the GP surgery or 111. They will tell you what to do next.',
      'If Muslim or Jewish, contact the mosque or synagogue (burial may need to happen within 24 hours)',
      'If the death happened abroad, call the Foreign Office on 020 7008 5000',
    ],
  },
  {
    title: 'When you are ready (first few days)',
    items: [
      'Tell the people closest to you. There is no rush and no right order.',
      'Collect the Medical Certificate of Cause of Death (MCCD) from the doctor or hospital',
      'If the death was sudden or unexplained, the coroner will be involved and will guide you',
      'Register the death at the local register office (legally required within 5 days, or 8 in Scotland)',
      'Order at least 5 certified copies of the death certificate when you register (£12.50 each in England and Wales, £15 in Scotland)',
      'Use the Tell Us Once service at the register office (not available in Northern Ireland)',
    ],
  },
  {
    title: 'First 2 weeks',
    items: [
      'Contact a funeral director when you feel ready. Get itemised quotes from at least 3.',
      'If there was a pre-paid funeral plan, contact that provider instead',
      'Apply for Funeral Expenses Payment if on benefits (0800 731 0469)',
      'Apply to the Children\'s Funeral Fund if the person was under 18',
      'Find the will (check at home, with their solicitor, at their bank, or on the National Will Register)',
      'Secure the person\'s home if they lived alone',
      'Check home insurance on the empty property (some policies void after 30 days unoccupied)',
    ],
  },
  {
    title: 'First month',
    items: [
      'Notify banks and building societies (or use the Death Notification Service)',
      'Check for and claim on any life insurance policies',
      'Notify pension providers (state, workplace, private)',
      'Contact their employer for death-in-service benefits and final pay',
      'Apply for Bereavement Support Payment if your spouse or civil partner died',
      'Update council tax (exemption on empty property, or 25% single person discount)',
      'Notify utility companies (gas, electric, water, broadband)',
      'Cancel subscriptions and direct debits',
      'Deal with the vehicle (DVLA, insurance, V5C logbook)',
      'Set up Royal Mail post redirection',
      'Check guardianship arrangements if there are children',
    ],
  },
  {
    title: 'Within 3 months',
    items: [
      'Apply for probate (Grant of Probate or Letters of Administration)',
      'In Scotland, apply for Confirmation at the Sheriff Court',
      'Understand intestacy rules if there is no will',
      'Get legal advice if you are an unmarried partner with no will',
      'Check if inheritance tax applies (estate above £325,000)',
      'Place statutory notices in The Gazette to protect against unknown debts',
      'Notify the mortgage lender',
      'Apply for council tax exemption on the empty property',
      'File the final Self Assessment tax return if the person was self-employed',
    ],
  },
  {
    title: 'Within 6 months',
    items: [
      'Pay any inheritance tax due (within 6 months of the end of the month of death)',
      'Deal with property (transfer, sell, or end tenancy). Grant of Probate is needed first.',
      'Update the Land Registry',
      'Collect all assets into the estate with the Grant of Probate',
      'Claim Funeral Expenses Payment if on benefits (must claim within 6 months of the funeral)',
    ],
  },
  {
    title: 'When you are ready',
    items: [
      'Distribute the estate to beneficiaries (after probate, debts, and taxes are settled)',
      'Close remaining bank accounts and financial accounts',
      'Memorialise or close social media accounts (Facebook, Instagram, Google)',
      'Cancel remaining digital subscriptions and online accounts',
      'Register with the Bereavement Register (thebereavementregister.org.uk) to stop junk mail',
      'Finalise estate tax affairs',
      'Prepare for difficult dates (birthdays, anniversaries, holidays)',
      'Reach out for support if you need it. Cruse: 0808 808 1677. Samaritans: 116 123. Both free.',
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

            {/* Contextual links per category */}
            {i === 1 && (
              <div className="bg-primary-light rounded-lg p-4 mt-3">
                <p className="text-sm text-foreground">
                  <strong>Learn more:</strong> <Link href="/tell-us-once" className="text-primary hover:underline">How Tell Us Once works</Link> · <Link href="/guides" className="text-primary hover:underline">Find your local register office</Link> · <Link href="/blog/death-certificate-how-many-copies" className="text-primary hover:underline">How many death certificates do you need?</Link>
                </p>
              </div>
            )}
            {i === 2 && (
              <div className="bg-primary-light rounded-lg p-4 mt-3">
                <p className="text-sm text-foreground">
                  <strong>Learn more:</strong> <Link href="/guides/funeral-options" className="text-primary hover:underline">Compare all funeral types</Link> · <Link href="/costs" className="text-primary hover:underline">Full cost breakdown</Link> · <Link href="/blog/free-funeral-options-uk" className="text-primary hover:underline">Free funeral options</Link>
                </p>
              </div>
            )}
            {i === 3 && (
              <div className="bg-primary-light rounded-lg p-4 mt-3">
                <p className="text-sm text-foreground">
                  <strong>Learn more:</strong> <Link href="/guides/bank-accounts-after-death" className="text-primary hover:underline">Dealing with bank accounts</Link> · <Link href="/guides/finding-accounts-after-death" className="text-primary hover:underline">Finding unknown accounts</Link> · <Link href="/guides/bereavement-benefits" className="text-primary hover:underline">Bereavement benefits</Link> · <Link href="/notify" className="text-primary hover:underline">Who to notify</Link>
                </p>
              </div>
            )}
            {i === 4 && (
              <div className="bg-primary-light rounded-lg p-4 mt-3">
                <p className="text-sm text-foreground">
                  <strong>Learn more:</strong> <Link href="/probate" className="text-primary hover:underline">Full probate guide</Link> · <Link href="/guides/executor-duties" className="text-primary hover:underline">Executor duties</Link> · <Link href="/intestacy" className="text-primary hover:underline">Intestacy rules</Link> · <Link href="/guides/inheritance-tax" className="text-primary hover:underline">Inheritance tax</Link>
                </p>
              </div>
            )}
            {i === 5 && (
              <div className="bg-primary-light rounded-lg p-4 mt-3">
                <p className="text-sm text-foreground">
                  <strong>Learn more:</strong> <Link href="/guides/property-after-death" className="text-primary hover:underline">Property after a death</Link> · <Link href="/guides/council-tax-after-death" className="text-primary hover:underline">Council tax exemptions</Link>
                </p>
              </div>
            )}
            {i === 6 && (
              <div className="bg-primary-light rounded-lg p-4 mt-3">
                <p className="text-sm text-foreground">
                  <strong>Learn more:</strong> <Link href="/digital-legacy" className="text-primary hover:underline">Digital legacy guide</Link> · <Link href="/guides/subscriptions-after-death" className="text-primary hover:underline">Cancelling subscriptions</Link>
                </p>
              </div>
            )}
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
      <RelatedGuides currentPath="/checklist" guides={['/print-checklist', '/deadline-tracker', '/guide', '/template-letters']} />

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
