import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PrintButton } from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'Printable Checklist: What to Do When Someone Dies',
  description: 'A clean, comprehensive printable checklist covering everything you need to do after a death in the UK, grouped by time period from the first 24 hours through to the first year.',
  alternates: { canonical: 'https://helpafterloss.co.uk/print-checklist' },
  openGraph: {
    title: 'Printable Checklist: What to Do When Someone Dies',
    description: 'A print-friendly bereavement checklist covering every task from the first 24 hours through to estate distribution.',
    url: 'https://helpafterloss.co.uk/print-checklist',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printable Bereavement Checklist - UK',
    description: 'Print this checklist and tick off each task as you go. Covers every step from the first 24 hours to the final distribution of the estate.',
  },
};

type ChecklistItem = {
  task: string;
  note?: string;
};

type ChecklistSection = {
  title: string;
  subtitle: string;
  items: ChecklistItem[];
};

const SECTIONS: ChecklistSection[] = [
  {
    title: 'First 24 hours',
    subtitle: 'The most urgent steps immediately after a death',
    items: [
      {
        task: 'Get the Medical Certificate of Cause of Death (MCCD)',
        note: 'A doctor must issue this before you can register the death. If the death was sudden or unexplained, the coroner will be involved and will issue the certificate instead.',
      },
      {
        task: 'Secure the person\'s home if they lived alone',
        note: 'Check windows and doors, collect any post, and let a trusted neighbour know.',
      },
      {
        task: 'Find the will',
        note: 'Check at home, with their solicitor, at their bank (some banks hold wills), and on the National Will Register (certainty.co.uk).',
      },
      {
        task: 'Tell close family and friends',
        note: 'There is no right order. Do what feels manageable.',
      },
      {
        task: 'Contact a funeral director',
        note: 'You do not need to commit to anything yet. They can collect the body and hold it while you make decisions. Ask for an itemised quote.',
      },
      {
        task: 'If the person was Muslim or Jewish, contact the mosque or synagogue',
        note: 'Both faiths require burial as soon as possible, often within 24 hours.',
      },
    ],
  },
  {
    title: 'First week',
    subtitle: 'Legal registration and immediate practical steps',
    items: [
      {
        task: 'Register the death at the local register office',
        note: 'Must be done within 5 days in England, Wales, and Northern Ireland, and within 8 days in Scotland. Bring the MCCD, and the person\'s NHS card, passport, or driving licence if available.',
      },
      {
        task: 'Order at least 5 certified copies of the death certificate',
        note: 'Each one costs £12.50 in England (£11 in Wales, £15 in Scotland). Banks, insurers, pension providers, and solicitors will each need an original. Order more than you think you need.',
      },
      {
        task: 'Use the Tell Us Once service',
        note: 'Available in England, Wales, and Scotland. The registrar will give you a reference number. Use it at gov.uk/tell-us-once within 28 days to notify DWP, HMRC, DVLA, the Passport Office, and your local council in one go.',
      },
      {
        task: 'Arrange the funeral',
        note: 'Confirm dates and arrangements with the funeral director. If the person had a pre-paid funeral plan, contact that provider directly. If you are on benefits, apply for a Funeral Expenses Payment from the DWP.',
      },
      {
        task: 'Notify the person\'s employer',
        note: 'Ask about any final pay, death-in-service benefits, and pension entitlements. Get this in writing.',
      },
      {
        task: 'Check home insurance on an empty property',
        note: 'Many policies become void if the property is unoccupied for more than 30 days. Notify the insurer straight away.',
      },
    ],
  },
  {
    title: 'First month',
    subtitle: 'Financial and government notifications',
    items: [
      {
        task: 'Notify banks and building societies',
        note: 'You can use the Death Notification Service (deathnotificationservice.co.uk) to notify most major UK banks at once, or contact each one individually. Accounts will be frozen until probate is granted.',
      },
      {
        task: 'Check for life insurance policies',
        note: 'Search through paperwork, bank statements, and employer records. Contact insurers with a death certificate to make a claim.',
      },
      {
        task: 'Notify all pension providers',
        note: 'This includes State Pension (notify DWP, or use Tell Us Once), workplace pensions, and private pensions. Some pensions pay a lump sum or dependant\'s pension to a spouse or children.',
      },
      {
        task: 'Apply for Bereavement Support Payment',
        note: 'If your spouse or civil partner died and you were under State Pension age, you may be entitled to a lump sum and up to 18 monthly payments. Apply at gov.uk within 3 months for the full amount. Claims can be backdated up to 21 months.',
      },
      {
        task: 'Apply for council tax exemption or single person discount',
        note: 'An empty property may be exempt for up to 6 months. If you now live alone, you are entitled to a 25% single person discount.',
      },
      {
        task: 'Apply for council tax exemption on the deceased\'s property',
        note: 'If the property is now empty, contact the local council. Most councils grant a full exemption while probate is underway.',
      },
      {
        task: 'Set up Royal Mail post redirection',
        note: 'Redirect the person\'s post to the executor\'s address to avoid missing important correspondence. Available at royalmail.com, costs from £33.99 for 3 months.',
      },
      {
        task: 'Cancel subscriptions and direct debits',
        note: 'Check recent bank statements for recurring payments: streaming services, gym memberships, magazines, insurance, clubs. Cancel each one directly.',
      },
      {
        task: 'Notify utility companies',
        note: 'Contact gas, electricity, water, broadband, and phone providers. Transfer bills to the estate or the new account holder while the property is being dealt with.',
      },
      {
        task: 'Deal with the vehicle',
        note: 'Notify the DVLA that the registered keeper has died. Update or cancel car insurance. If you are transferring ownership, use the V5C logbook.',
      },
    ],
  },
  {
    title: 'Within 3 months',
    subtitle: 'Legal and estate administration',
    items: [
      {
        task: 'Apply for probate',
        note: 'Apply for a Grant of Probate (if there is a will) or Letters of Administration (if there is no will) at gov.uk/applying-for-probate. The fee is £300 for estates over £5,000. In Scotland, apply for Confirmation at the Sheriff Court.',
      },
      {
        task: 'Complete the inheritance tax forms',
        note: 'If the estate is below the IHT threshold (£325,000, or up to £500,000 with the residence nil-rate band), report the estate values on the probate application itself. If above, complete form IHT400. You must complete this before probate is granted.',
      },
      {
        task: 'Value the estate',
        note: 'Get a formal property valuation from an estate agent or RICS surveyor. List all bank accounts, investments, pensions, and possessions. Subtract all debts and liabilities.',
      },
      {
        task: 'Place statutory notices in The Gazette',
        note: 'This protects the executor against claims from unknown creditors. Place a notice at thegazette.co.uk. You must wait at least 2 months after placing the notice before distributing the estate.',
      },
      {
        task: 'Notify the mortgage lender',
        note: 'If the property had a mortgage, the lender must be informed. Some mortgages include life insurance that pays off the balance. Do not make mortgage payments from the estate without advice.',
      },
      {
        task: 'Check for any outstanding debts',
        note: 'Credit cards, personal loans, hire purchase agreements. Debts are paid from the estate before anything is distributed to beneficiaries.',
      },
    ],
  },
  {
    title: 'Within 6 months',
    subtitle: 'Inheritance tax and property',
    items: [
      {
        task: 'Pay any inheritance tax due',
        note: 'Inheritance tax must be paid within 6 months of the end of the month in which the person died. Interest is charged after that. IHT on property can be paid in instalments over 10 years.',
      },
      {
        task: 'Claim the Funeral Expenses Payment',
        note: 'If you are on qualifying benefits, you can claim this from the DWP. Claims must be made within 6 months of the funeral.',
      },
      {
        task: 'Deal with property',
        note: 'Transfer ownership via the Land Registry, sell, or deal with a rental tenancy. You will need the Grant of Probate before you can sell or transfer a property.',
      },
      {
        task: 'Update driving licence and car insurance records',
        note: 'If you have inherited a vehicle, update the V5C and arrange insurance in your name before driving it.',
      },
      {
        task: 'Collect all assets into the estate',
        note: 'With the Grant of Probate, contact banks, investment platforms, and other institutions to transfer or close accounts and collect the proceeds.',
      },
    ],
  },
  {
    title: 'Ongoing',
    subtitle: 'Final steps and estate closure',
    items: [
      {
        task: 'Distribute the estate to beneficiaries',
        note: 'Once the statutory notice period has passed (at least 2 months after placing The Gazette notice) and all debts and taxes are paid, distribute what remains according to the will or intestacy rules.',
      },
      {
        task: 'File the final income tax return',
        note: 'If the person was on Self Assessment, file a return for the tax year in which they died. The deadline is 31 January following the end of that tax year. HMRC will confirm any tax owed or refund due.',
      },
      {
        task: 'Order a headstone or memorial',
        note: 'Churchyards and cemeteries have rules about size and materials. Allow at least 6 months after a burial before placing a headstone, as the ground needs to settle.',
      },
      {
        task: 'Reach out for emotional support',
        note: 'Cruse Bereavement Support (0808 808 1677), Grief Encounter, and the Samaritans (116 123) are all free. There is no time limit on grief. Support is available whenever you need it.',
      },
    ],
  },
];

export default function PrintChecklistPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      {/* Print-only header */}
      <div className="hidden print:block mb-8 pb-4 border-b-2 border-gray-300">
        <p className="text-lg font-bold text-gray-800">Help After Loss</p>
        <p className="text-sm text-gray-500">helpafterloss.co.uk</p>
      </div>

      {/* Screen header */}
      <div className="no-print">
        <Breadcrumbs items={[
          { label: 'Printable Checklist' }
        ]} />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Printable Checklist: What to Do When Someone Dies
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-6">
          A comprehensive checklist covering every task after a death in the UK, grouped by time period. Print it out and tick each item off as you go.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <PrintButton />
          <Link
            href="/start"
            className="px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:border-primary transition-colors text-sm"
          >
            Get a Personalised Checklist Instead
          </Link>
        </div>
      </div>

      {/* Print-only title */}
      <div className="hidden print:block mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Printable Checklist: What to Do When Someone Dies
        </h1>
        <p className="text-sm text-gray-500">
          Tick each item off as you complete it. Not every item will apply to your situation.
        </p>
      </div>

      {/* Checklist sections */}
      <div className="space-y-10">
        {SECTIONS.map((section, si) => (
          <section key={si}>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              <p className="text-sm text-muted mt-1">{section.subtitle}</p>
            </div>
            <div className="bg-card rounded-xl border border-border divide-y divide-border print:rounded-none print:border-gray-300 print:divide-gray-200">
              {section.items.map((item, ii) => (
                <div key={ii} className="flex items-start gap-4 px-5 py-4 print:px-0 print:py-3">
                  <div className="w-5 h-5 border-2 border-gray-400 rounded flex-shrink-0 mt-0.5 print:border-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-foreground leading-snug">{item.task}</p>
                    {item.note && (
                      <p className="text-xs text-muted mt-1 leading-relaxed">{item.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Notes section */}
      <div className="mt-14 space-y-10">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Important contacts</h2>
          <div className="bg-card rounded-xl border border-border p-6 print:rounded-none print:border-gray-300">
            <p className="text-sm text-muted mb-5">Write down the key numbers you need during the coming weeks:</p>
            <div className="space-y-4">
              {[
                'Funeral director',
                'Solicitor or probate specialist',
                'Pension provider',
                'Life insurer',
                'Executor or main contact',
                'Cruse Bereavement Support: 0808 808 1677',
              ].map((label, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm text-muted w-56 flex-shrink-0">{label}</span>
                  <div className="flex-1 border-b border-gray-300 print:border-gray-400" style={{ minWidth: 0, height: '1.5rem' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Notes</h2>
          <div className="bg-card rounded-xl border border-border p-6 print:rounded-none print:border-gray-300">
            <div className="space-y-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border-b border-gray-200 print:border-gray-300" style={{ minHeight: '1.75rem' }} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Screen CTA and related guides */}
      <div className="no-print">
        <RelatedGuides
          currentPath="/print-checklist"
          guides={['/checklist', '/deadline-tracker', '/guide', '/template-letters']}
        />

        <div className="bg-primary-light rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Want a checklist tailored to your situation?</h2>
          <p className="text-muted mb-6">
            Answer a few questions and we will build a personalised guide that only includes what is relevant to you, with real deadlines and helpful links.
          </p>
          <Link
            href="/start"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Get Your Personalised Guide
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Printable Checklist: What to Do When Someone Dies',
            description: 'A comprehensive printable bereavement checklist covering every task from the first 24 hours through to the distribution of the estate.',
            datePublished: '2026-03-14',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
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
              { '@type': 'ListItem', position: 2, name: 'Printable Checklist', item: 'https://helpafterloss.co.uk/print-checklist' },
            ],
          }),
        }}
      />
    </div>
  );
}
