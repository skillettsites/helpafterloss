import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Document Checklist: Everything You Need to Gather After a Death',
  description: 'A complete document checklist for dealing with a death in the UK. Organised by category: registration, funeral, banks, property, pensions, legal, insurance, and government. Know what you need and where to find it.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/document-checklist' },
  openGraph: {
    title: 'Document Checklist: Everything You Need to Gather After a Death',
    description: 'Every document you need after a bereavement, organised by category, with guidance on where to find them and who needs them.',
    url: 'https://helpafterloss.co.uk/guides/document-checklist',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document Checklist: Everything You Need to Gather After a Death',
    description: 'A complete, categorised document checklist for dealing with a death in the UK.',
  },
};

const CATEGORIES = [
  {
    title: 'Needed immediately',
    subtitle: 'Within the first 24-48 hours',
    urgent: true,
    items: [
      { doc: 'Medical Certificate of Cause of Death (MCCD)', detail: 'Issued by the doctor or hospital. This is the document you take to the Register Office to register the death. Without it, you cannot register and the funeral cannot proceed.' },
      { doc: 'Photo ID of the deceased', detail: 'Passport or driving licence. Useful for the registrar and for closing accounts. Not always required but keep it to hand.' },
      { doc: 'Photo ID of the person registering the death', detail: 'Your own passport, driving licence, or other government-issued ID. The registrar will want to see it.' },
      { doc: 'NHS number of the deceased', detail: 'Found on any NHS letter, prescription, or medical card. Needed to cancel NHS registration and return prescriptions.' },
      { doc: 'Details of the deceased\'s GP', detail: 'Name, address, and phone number of the GP surgery. The registrar or coroner\'s office may need this.' },
    ],
  },
  {
    title: 'For registering the death',
    subtitle: 'Needed at the Register Office appointment',
    urgent: false,
    items: [
      { doc: 'Medical Certificate of Cause of Death (MCCD)', detail: 'The key document. Without this, registration cannot take place.' },
      { doc: 'Birth certificate of the deceased', detail: 'If available. Not always required but helps the registrar record details accurately.' },
      { doc: 'Marriage or civil partnership certificate', detail: 'If the person was married or in a civil partnership. Confirms marital status for the death record.' },
      { doc: 'Decree absolute (if divorced)', detail: 'If the person was divorced, the registrar may need this to record the correct marital status.' },
      { doc: 'National Insurance number', detail: 'Found on any HMRC letter, payslip, or NI card. The registrar uses this for the Tell Us Once service.' },
      { doc: 'Passport or driving licence', detail: 'The registrar will use these to confirm identity details.' },
      { doc: 'Details of their occupation', detail: 'Last known job title and employer. The registrar records this on the death certificate.' },
      { doc: 'Details of any public sector pension', detail: 'If the person received a pension from a government body, NHS, teaching, or other public sector employer, tell the registrar so it can be noted.' },
    ],
  },
  {
    title: 'For the funeral',
    subtitle: 'Needed by the funeral director and at the service',
    urgent: false,
    items: [
      { doc: 'Death certificate (certified copies)', detail: 'Order at least 5 certified copies when you register (£12.50 each in England, £11 in Wales, £15 in Scotland). You will need one for each bank, insurer, pension provider, and other institution. Ordering extras later costs more and takes longer.' },
      { doc: 'Green certificate (Certificate for Burial or Cremation)', detail: 'Issued by the registrar at the same time as the death certificate. The funeral director must have this before the funeral can take place.' },
      { doc: 'Pre-paid funeral plan documents', detail: 'If the person had a pre-paid plan, find the paperwork immediately. The plan number and provider details determine what costs are already covered.' },
      { doc: 'Any written funeral wishes', detail: 'A letter, note, or document where the person expressed their preferences. Check the will, any personal files, and conversations with close family.' },
      { doc: 'Military discharge papers', detail: 'If the person served in the armed forces, these may be relevant for a military-style funeral or burial in a war graves plot.' },
      { doc: 'Faith community contact details', detail: 'If the person belonged to a church, mosque, synagogue, temple, or other place of worship, the funeral director may need to liaise with them.' },
    ],
  },
  {
    title: 'For banks and financial institutions',
    subtitle: 'Needed to close accounts, access funds, and claim assets',
    urgent: false,
    items: [
      { doc: 'Death certificate (certified copies)', detail: 'Every bank requires an original certified copy. Do not send photocopies of the death certificate unless the bank specifically confirms this is acceptable.' },
      { doc: 'Grant of Probate or Letters of Administration', detail: 'Required to close accounts above the bank\'s threshold (usually £5,000-£50,000, varies by bank). You cannot obtain this until probate is granted, which takes 12-16 weeks.' },
      { doc: 'Bank statements', detail: 'Showing the balance at the date of death. Most banks will provide these once notified. You will need these to value the estate.' },
      { doc: 'Savings books and passbooks', detail: 'For building society and National Savings accounts. NS&I (Premium Bonds) will need to be notified separately.' },
      { doc: 'Share certificates', detail: 'Paper certificates for any shareholdings. The share registrar will need to see the death certificate and grant of probate.' },
      { doc: 'Premium Bonds documentation', detail: 'Account number or ERNIE reference. Contact NS&I directly on 08085 007 007. Bonds can be held for 12 months after death and still be eligible for prizes.' },
      { doc: 'ISA statements', detail: 'ISAs do not pass automatically to a spouse on death but may have an "Additional Permitted Subscription" allowance. Contact the ISA provider.' },
      { doc: 'Details of any outstanding loans or credit cards', detail: 'You will need these to calculate the estate value and to notify creditors. Check credit reference agencies if you are unsure of what existed.' },
    ],
  },
  {
    title: 'For property',
    subtitle: 'For dealing with the house, flat, or other property',
    urgent: false,
    items: [
      { doc: 'Title deeds or Land Registry documents', detail: 'Confirms ownership and whether the property is held as joint tenants (passes automatically to co-owner) or tenants in common (goes into the estate). Check at HM Land Registry: search the register at gov.uk for £3.' },
      { doc: 'Mortgage documents', detail: 'Contact the mortgage lender immediately after the death. They need to be notified. If there was life insurance linked to the mortgage, this may clear the balance.' },
      { doc: 'Tenancy agreement', detail: 'If the person rented, the landlord must be notified. Check the tenancy agreement for notice periods and the process for ending the tenancy.' },
      { doc: 'Home insurance policy', detail: 'Notify the insurer immediately. An empty property may not be covered under a standard home insurance policy after 30-60 days.' },
      { doc: 'Buildings and contents insurance', detail: 'Separate policies may cover buildings and contents. Both need to be updated or cancelled.' },
      { doc: 'Utility bills', detail: 'Gas, electricity, water, broadband, and telephone. Each provider needs to be notified to close or transfer accounts.' },
      { doc: 'Council tax bill', detail: 'Notify the council. An empty property may be exempt from council tax during probate and for 6 months after.' },
      { doc: 'Leasehold documents', detail: 'If the property is leasehold, the freeholder or management company needs to be notified of the change of ownership.' },
    ],
  },
  {
    title: 'For pensions and retirement income',
    subtitle: 'To stop or transfer pension payments',
    urgent: false,
    items: [
      { doc: 'State Pension letters', detail: 'The most recent letter from DWP or HMRC showing State Pension entitlement. State Pension payments must stop immediately after death; overpayments will need to be returned.' },
      { doc: 'Workplace pension details', detail: 'Contact each employer\'s pension scheme. There may be a dependant\'s pension payable to a surviving spouse or civil partner, or a lump-sum death benefit.' },
      { doc: 'Private or personal pension documents', detail: 'Any SIPP (Self-Invested Personal Pension), annuity, or personal pension. Check for death benefits, which may pass outside the estate (and potentially free of inheritance tax).' },
      { doc: 'Life insurance policies', detail: 'Policies may pay out a lump sum to named beneficiaries. Contact each insurer with a copy of the death certificate. Policies written in trust pass outside the estate and do not require probate.' },
      { doc: 'Annuity documents', detail: 'If the person had an annuity, check whether it included a guarantee period or dependant\'s pension. Payments may continue or cease depending on the terms.' },
      { doc: 'Expression of Wishes form', detail: 'Many pension schemes hold an "Expression of Wishes" or "Nomination of Beneficiary" form that directs where the pension death benefit should go. The trustees consider this form but are not legally bound by it.' },
    ],
  },
  {
    title: 'Legal documents',
    subtitle: 'For probate, estate administration, and tax',
    urgent: false,
    items: [
      { doc: 'The will', detail: 'The original will. If you cannot find it, check with any solicitor the person used, their bank (some hold wills), and the National Will Register (certainty.co.uk or smee-and-ford.co.uk).' },
      { doc: 'Any codicils', detail: 'A codicil is a document that amends or adds to a will. It must be found and read alongside the will.' },
      { doc: 'Lasting Power of Attorney documents', detail: 'These cease to be valid on death, but you may need them to prove authority for actions taken before death.' },
      { doc: 'Solicitor contact details', detail: 'If the person used a solicitor for conveyancing, will drafting, or other legal matters, the solicitor may hold important documents or information.' },
      { doc: 'Previous tax returns', detail: 'The most recent Self Assessment tax return and any HMRC correspondence. You will need to file a final tax return for the year of death.' },
      { doc: 'Business documents', detail: 'If the person was self-employed or owned a business: accounts, Companies House documents, partnership agreements, business insurance, and VAT records.' },
      { doc: 'Trust documents', detail: 'If the person was a trustee or beneficiary of a trust, the trust documents will be needed by the solicitor administering the trust.' },
    ],
  },
  {
    title: 'Government and personal identity documents',
    subtitle: 'To cancel, return, or transfer',
    urgent: false,
    items: [
      { doc: 'Passport', detail: 'Cancel the passport by sending it to HM Passport Office (no fee to cancel). If you use Tell Us Once, the Passport Office is notified automatically.' },
      { doc: 'Driving licence', detail: 'Return to DVLA or notify via Tell Us Once. Vehicle tax may also need to be cancelled if the person owned a car.' },
      { doc: 'Blue Badge', detail: 'Must be returned to the issuing local authority. Blue Badges cannot be used by anyone else after the holder\'s death.' },
      { doc: 'Bus pass or travel card', detail: 'Local bus passes and Freedom Passes should be returned to the issuing council.' },
      { doc: 'Library card', detail: 'Return to the local library. Check for any books or items on loan.' },
      { doc: 'Council tax bill', detail: 'Needed to notify the council and claim any applicable exemptions.' },
      { doc: 'Electoral roll', detail: 'Notify the local Electoral Registration Office to remove the person from the register.' },
      { doc: 'Jury summons', detail: 'If one arrives after the death, write to the court explaining the person has died. Include a copy of the death certificate.' },
    ],
  },
  {
    title: 'Insurance policies',
    subtitle: 'To cancel, claim, or transfer',
    urgent: false,
    items: [
      { doc: 'Life insurance policy documents', detail: 'Contact the insurer to make a claim. Some policies are written in trust and pay directly to named beneficiaries without going through the estate.' },
      { doc: 'Car insurance', detail: 'Cancel the policy and obtain a refund of unused premium. If someone else will drive the car, transfer cover. The car may need to be registered in a new name.' },
      { doc: 'Pet insurance', detail: 'Cancel or transfer to whoever is taking on the pets.' },
      { doc: 'Travel insurance', detail: 'Cancel any existing policies. If the person died abroad, travel insurance may cover repatriation costs.' },
      { doc: 'Private medical insurance', detail: 'Cancel the policy and claim any refund on unused premium.' },
      { doc: 'Income protection or critical illness insurance', detail: 'These policies typically end at death, but check whether there is a death benefit or outstanding claim.' },
      { doc: 'Over-50s or funeral plan insurance', detail: 'Many people have over-50s life insurance policies designed to pay funeral costs. Check for these among the person\'s paperwork and bank statements.' },
    ],
  },
];

export default function DocumentChecklistPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Document Checklist: Everything You Need to Gather' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Document Checklist: Everything You Need to Gather
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Dealing with paperwork after a bereavement feels overwhelming. This checklist organises every document you will need, by category, so you can work through it at your own pace and know exactly where you stand.
      </p>

      {/* Top tip */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <h3 className="font-semibold text-amber-800 mb-2">Practical tip before you start</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          Keep everything in one folder or box. Make photocopies of the Death Certificate rather than sending originals wherever possible, but be aware that banks and solicitors will need to see original certified copies (not photocopies). Order at least 5 certified copies when you register the death: it is cheaper than ordering extras later and saves weeks of delay.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-8 mb-12">
        {CATEGORIES.map((cat, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
              {cat.urgent && (
                <span className="text-xs font-semibold bg-urgent-light text-urgent rounded-full px-3 py-1">Urgent</span>
              )}
            </div>
            <p className="text-sm text-muted mb-4">{cat.subtitle}</p>
            <div className="space-y-3">
              {cat.items.map((item, j) => (
                <div key={j} className="bg-card rounded-xl border border-border p-5 flex gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 border-2 border-border rounded flex items-center justify-center">
                      <div className="w-2 h-2 rounded-sm bg-transparent" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.doc}</p>
                    <p className="text-xs text-muted leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Digital documents section */}
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <h2 className="text-xl font-bold text-foreground mb-3">Don't forget digital documents</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Many important documents now exist only in digital form. Check these places for anything that may not have a paper equivalent.
        </p>
        <div className="space-y-3">
          {[
            { title: 'Email inbox', detail: 'Search for terms like "policy", "account", "statement", "insurance", "pension", and "mortgage". Many policies and accounts communicate only by email.' },
            { title: 'Cloud storage', detail: 'Google Drive, iCloud, Dropbox, and OneDrive may contain scanned documents, PDFs of policies, and important correspondence.' },
            { title: 'Online banking', detail: 'Log into any online banking apps you have access to (with appropriate authority). Check for accounts, standing orders, and direct debits that reveal subscriptions and memberships to cancel.' },
            { title: 'Password manager', detail: 'If the person used a password manager (1Password, LastPass, Bitwarden), it may contain logins for accounts you were unaware of. You may need technical help to access it.' },
            { title: 'Phone contacts and apps', detail: 'A smartphone can reveal financial apps, loyalty programmes, subscriptions, and club memberships. Look at the apps installed and any relevant text messages.' },
            { title: 'Loyalty and membership accounts', detail: 'Airline miles, supermarket loyalty points, and gym memberships all need to be cancelled or transferred. Check emails for membership confirmation messages.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-foreground text-sm">{item.title}</p>
                <p className="text-xs text-muted leading-relaxed mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where to find missing documents */}
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <h2 className="text-xl font-bold text-foreground mb-3">What to do if documents are missing</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <div>
            <p className="font-semibold text-foreground">Can't find the will?</p>
            <p>Search the National Will Register at certainty.co.uk or smee-and-ford.co.uk. Contact any solicitor the person used. Check their bank (some hold wills for safe keeping). Ask close family if they were told where it was.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Can't find birth or marriage certificates?</p>
            <p>You can order replacement certificates from the General Register Office (GRO) at gov.uk/order-copy-birth-death-marriage-certificate. Costs £12.50 per certificate in England (£11 in Wales).</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Can't find insurance or pension documents?</p>
            <p>Check bank statements for regular payments to insurance companies or pension providers. Contact the employer's HR department for workplace pension details. The Pension Tracing Service (gov.uk/find-pension-contact-details) can help trace lost pensions.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Can't find share certificates?</p>
            <p>Shares may be held electronically. Contact the company's share registrar (usually Equiniti, Computershare, or Link Asset Services). Banks and investment platforms will also hold records.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Unknown creditors or accounts?</p>
            <p>You can check the deceased's credit file through Experian, Equifax, or TransUnion by writing to them and providing evidence of your authority to act. This reveals credit cards, loans, and accounts you may not have known about.</p>
          </div>
        </div>
      </div>

      <RelatedGuides currentPath="/guides/document-checklist" guides={['/template-letters', '/guide', '/probate', '/phone-directory']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised document checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist showing exactly which documents you need for your specific situation.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'Document Checklist', item: 'https://helpafterloss.co.uk/guides/document-checklist' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Document Checklist: Everything You Need to Gather After a Death',
            description: 'A complete document checklist for dealing with a death in the UK, organised by category.',
            url: 'https://helpafterloss.co.uk/guides/document-checklist',
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
          }),
        }}
      />
    </div>
  );
}
