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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
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
    title: 'Right now',
    subtitle: 'Almost nothing has to happen straight away. These are the only things that may need attention today.',
    items: [
      {
        task: 'If they died at home, call the GP surgery or 111',
        note: 'They will gently talk you through what happens next. If your loved one was under hospice care, call the hospice number instead. There is no need to call 999 unless the death was sudden and unexpected.',
      },
      {
        task: 'If your family is Muslim or Jewish, contact the mosque or synagogue',
        note: 'Both faiths ask for burial as soon as possible, often within 24 hours. The community will help you arrange this quickly, and you will not be doing it alone.',
      },
      {
        task: 'If they died abroad, call the Foreign Office on 020 7008 5000',
        note: 'They can help with repatriation and local legal requirements.',
      },
    ],
  },
  {
    title: 'When you are ready (first few days)',
    subtitle: 'There is no rush with any of these. Do them when you feel able.',
    items: [
      {
        task: 'Tell the people closest to you',
        note: 'There is no right order. You do not have to tell everyone yourself. Ask someone you trust to help spread the word if that feels easier.',
      },
      {
        task: 'Collect the Medical Certificate of Cause of Death (MCCD)',
        note: 'The doctor or hospital will give you this. You need it before you can register the death. If a coroner is involved, they will issue it once their enquiries are finished.',
      },
      {
        task: 'Register the death at the local register office',
        note: 'Legally required within 5 days in England, Wales, and Northern Ireland, or 8 days in Scotland. Take the MCCD with you, along with their NHS card, passport, or driving licence if you have them to hand.',
      },
      {
        task: 'Order at least 5 certified copies of the death certificate',
        note: 'You can order these while you are registering. Each costs £12.50 in England and Wales (£15 in Scotland). Banks, insurers, and solicitors each need an original, so order a few more than you think you will need.',
      },
      {
        task: 'Use the Tell Us Once service',
        note: 'The registrar will offer this to you. It notifies DWP, HMRC, DVLA, Passport Office, and your local council in one go. Use it within 28 days. Not available in Northern Ireland.',
      },
    ],
  },
  {
    title: 'First 2 weeks',
    subtitle: 'These can wait until after the first few days. Take your time.',
    items: [
      {
        task: 'Contact a funeral director when you feel ready',
        note: 'Your loved one will be cared for at the hospital or mortuary until you are ready. There really is no rush. When you feel able, ask at least 3 funeral directors for itemised quotes so you can compare them fairly.',
      },
      {
        task: 'If there was a pre-paid funeral plan, contact that provider',
        note: 'The plan documents should have a phone number. The funeral director can also help you check.',
      },
      {
        task: 'Apply for Funeral Expenses Payment if you are on benefits',
        note: 'Call the DWP Bereavement Service on 0800 151 2012. They can help with funeral costs if you receive Universal Credit, Pension Credit, or other qualifying benefits.',
      },
      {
        task: 'Find the will',
        note: 'Have a look at home, and ask their solicitor and their bank (some banks hold wills). You can also search the National Will Register (certainty.co.uk). There is no legal deadline for this one.',
      },
      {
        task: 'Make their home secure if they lived on their own',
        note: 'Check the windows and doors, collect any post, and let a trusted neighbour know. Do check the home insurance too, as some policies become void if a property is unoccupied for more than 30 days.',
      },
    ],
  },
  {
    title: 'First month',
    subtitle: 'Work through these once you have the death certificates and are starting to feel a little steadier.',
    items: [
      {
        task: 'Notify banks and building societies',
        note: 'You can use the Death Notification Service (deathnotificationservice.co.uk) to notify most major UK banks at once, or contact each one individually.',
      },
      {
        task: 'Check for and claim on any life insurance policies',
        note: 'Search through paperwork, bank statements, and employer records. Contact insurers with a death certificate.',
      },
      {
        task: 'Notify all pension providers',
        note: 'State Pension (DWP or Tell Us Once), workplace pensions, and private pensions. Some pay a lump sum or dependant\'s pension to a spouse or children.',
      },
      {
        task: 'Contact their employer',
        note: 'Ask about final pay, unused holiday, death-in-service benefits, and workplace pension entitlements. It helps to ask for the details in writing.',
      },
      {
        task: 'Apply for Bereavement Support Payment',
        note: 'If your husband, wife, or civil partner has passed away and you were under State Pension age. Apply at gov.uk within 3 months for the full amount (a lump sum plus up to 18 monthly payments). It can be backdated up to 21 months.',
      },
      {
        task: 'Update council tax',
        note: 'If the property is now empty, contact the council for an exemption (most grant a full exemption during probate). If you now live alone, apply for the 25% single person discount.',
      },
      {
        task: 'Notify utility companies',
        note: 'Gas, electricity, water, broadband, and phone providers. Transfer bills to the estate or the new account holder.',
      },
      {
        task: 'Cancel subscriptions and direct debits',
        note: 'Check recent bank statements for recurring payments. Cancel streaming, gym memberships, magazines, clubs.',
      },
      {
        task: 'Deal with the vehicle',
        note: 'Notify the DVLA that the registered keeper has died. Update or cancel car insurance. Use the V5C logbook to transfer ownership.',
      },
      {
        task: 'Set up Royal Mail post redirection',
        note: 'Redirect post to the executor\'s address. Available at royalmail.com, costs from £36 for 3 months.',
      },
    ],
  },
  {
    title: 'Within 3 months',
    subtitle: 'The legal side and sorting out the estate. There is no shame in asking a professional to help with some of these.',
    items: [
      {
        task: 'Apply for probate',
        note: 'Grant of Probate (if there is a will) or Letters of Administration (if no will) at gov.uk/applying-for-probate. Fee: £526 for estates over £5,000. In Scotland, apply for Confirmation at the Sheriff Court.',
      },
      {
        task: 'Complete inheritance tax forms',
        note: 'If the estate is below £325,000 (or up to £500,000 with the residence nil-rate band), report estate values on the probate application. If above, complete form IHT400.',
      },
      {
        task: 'Value the estate',
        note: 'Ask an estate agent or a RICS surveyor for a property valuation. List all the bank accounts, investments, pensions, and possessions, then take off any debts.',
      },
      {
        task: 'Place statutory notices in The Gazette',
        note: 'Protects the executor against claims from unknown creditors. Place at thegazette.co.uk. Wait at least 2 months before distributing.',
      },
      {
        task: 'Notify the mortgage lender',
        note: 'Some mortgages include life insurance that pays off the balance. Do not make mortgage payments from the estate without advice.',
      },
      {
        task: 'Check for any outstanding debts',
        note: 'Credit cards, personal loans, hire purchase. Debts are paid out of the estate before anything goes to the beneficiaries. You are not personally responsible for them.',
      },
      {
        task: 'File the final Self Assessment tax return if self-employed',
        note: 'HMRC will confirm any tax owed or refund due.',
      },
    ],
  },
  {
    title: 'Within 6 months',
    subtitle: 'These have legal deadlines, but there is no need to rush them any sooner.',
    items: [
      {
        task: 'Pay any inheritance tax due',
        note: 'Due within 6 months of the end of the month of death. Interest is charged after that. IHT on property can be paid in instalments over 10 years.',
      },
      {
        task: 'Deal with property',
        note: 'Transfer ownership via the Land Registry, sell, or end the tenancy. You need the Grant of Probate before you can sell or transfer.',
      },
      {
        task: 'Collect all assets into the estate',
        note: 'With the Grant of Probate, contact banks, investment platforms, and other institutions to close accounts and collect the proceeds.',
      },
      {
        task: 'Claim Funeral Expenses Payment',
        note: 'If you are on qualifying benefits, claims must be made within 6 months of the funeral.',
      },
    ],
  },
  {
    title: 'When you are ready',
    subtitle: 'There is no deadline for any of these. Do them in your own time.',
    items: [
      {
        task: 'Distribute the estate to beneficiaries',
        note: 'After the statutory notice period (at least 2 months after The Gazette notice) and all debts and taxes are paid.',
      },
      {
        task: 'File the final income tax return',
        note: 'If the person was on Self Assessment, file for the tax year in which they died. Deadline: 31 January following the end of that tax year.',
      },
      {
        task: 'Close any remaining accounts and digital profiles',
        note: 'Social media, email, and online accounts can be memorialised or closed, whichever feels right to you. Cancel any digital subscriptions still running.',
      },
      {
        task: 'Register with the Bereavement Register',
        note: 'Registering at thebereavementregister.org.uk stops junk mail arriving in their name, which can be painful to keep receiving. It is free and takes a few weeks to take effect.',
      },
      {
        task: 'Order a headstone or memorial',
        note: 'Churchyards and cemeteries have rules about size and materials. Allow at least 6 months after burial for the ground to settle.',
      },
      {
        task: 'Reach out for support whenever you need it',
        note: 'Cruse Bereavement Support (0808 808 1677), Grief Encounter, and the Samaritans (116 123) are all free. There is no time limit on grief.',
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
        <p className="text-lg text-muted leading-relaxed mb-4">
          Everything that may need doing after someone passes away in the UK, grouped by when it needs to happen. Print it out and tick things off as you go, at whatever pace suits you.
        </p>
        <div className="bg-warm border border-warm-border rounded-xl p-4 mb-6">
          <p className="text-sm text-amber-800 leading-relaxed">
            We know this is an incredibly difficult time. Please take things at your own pace. This checklist will be here whenever you need it, and plenty of it will not apply to you.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          <PrintButton />
          <Link
            href="/start"
            className="px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:border-primary transition-colors text-sm"
          >
            Get a Personalised Checklist Instead
          </Link>
        </div>
        <p className="text-xs text-muted mb-8">To save as a PDF, click &quot;Print&quot; above and choose &quot;Save as PDF&quot; as the destination.</p>
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
