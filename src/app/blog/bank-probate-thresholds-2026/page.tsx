import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TableOfContents } from '@/components/TableOfContents';
import { RelatedGuides } from '@/components/RelatedGuides';
import { BlogPrintButton } from '@/components/BlogPrintButton';
import { SupportCta } from '@/components/SupportCta';
import { FreeChecklistBanner } from '@/components/FreeChecklistBanner';
import { ThresholdEmailCapture } from '@/components/ThresholdEmailCapture';

export const metadata: Metadata = {
  title: 'Bank Probate Thresholds 2026: Complete Comparison',
  description: 'Every major UK bank and building society probate threshold in 2026. Find out how much each bank will release without a grant of probate, what documents you need, and how to access funds quickly.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/bank-probate-thresholds-2026' },
  openGraph: {
    title: 'Bank Probate Thresholds 2026: Complete Comparison',
    description: 'Compare probate thresholds for every major UK bank and building society. Find out which banks release funds without probate and how to access the money.',
    url: 'https://helpafterloss.co.uk/blog/bank-probate-thresholds-2026',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank Probate Thresholds 2026: Complete Comparison',
    description: 'How much will each UK bank release without probate? Full 2026 comparison table with thresholds, documents needed, and step-by-step process.',
  },
};

const BANKS = [
  { name: 'Barclays', slug: 'barclays', threshold: '£50,000', type: 'Bank' },
  { name: 'HSBC', slug: 'hsbc', threshold: '£50,000', type: 'Bank' },
  { name: 'Lloyds Bank', slug: 'lloyds-bank', threshold: '£50,000', type: 'Bank' },
  { name: 'Halifax', slug: 'halifax', threshold: '£50,000', type: 'Bank (Lloyds Group)' },
  { name: 'NatWest', slug: 'natwest', threshold: '£50,000', type: 'Bank' },
  { name: 'Santander', slug: 'santander', threshold: '£50,000', type: 'Bank' },
  { name: 'Nationwide', slug: 'nationwide', threshold: '£50,000', type: 'Building Society' },
  { name: 'Yorkshire BS', slug: 'yorkshire-building-society', threshold: '£30,000', type: 'Building Society' },
  { name: 'Skipton BS', slug: 'skipton-building-society', threshold: '£30,000', type: 'Building Society' },
  { name: 'Coventry BS', slug: 'coventry-building-society', threshold: '£25,000', type: 'Building Society' },
  { name: 'Leeds BS', slug: 'leeds-building-society', threshold: '£25,000', type: 'Building Society' },
  { name: 'Principality BS', slug: 'principality-building-society', threshold: '£15,000', type: 'Building Society' },
];

const DOCUMENTS = [
  { document: 'Original death certificate', note: 'Most banks need an original, not a photocopy. Some will accept a certified copy.' },
  { document: 'Proof of your identity', note: 'Passport or driving licence. Some banks also ask for proof of address.' },
  { document: 'Proof of your relationship to the deceased', note: 'The will, or if there is no will, evidence of your entitlement under intestacy rules (birth or marriage certificate).' },
  { document: 'The original will (if there is one)', note: 'Or a certified copy. If there is no will, the bank may ask you to sign an indemnity form instead.' },
  { document: 'Account details', note: 'Account numbers, sort codes, or any recent statements you can find. The bank can usually trace accounts by name and address if you do not have these.' },
  { document: 'Your own bank account details', note: 'So the bank can transfer any released funds to you.' },
];

const STEPS = [
  {
    step: 1,
    title: 'Contact the bank\'s bereavement team',
    detail: 'Every major bank has a dedicated bereavement team. Call them or visit a branch. They will freeze the account to prevent fraud and tell you exactly what they need from you. Use the links in the table above to find the right number for each bank.',
  },
  {
    step: 2,
    title: 'Gather your documents',
    detail: 'Collect the death certificate, your ID, the will (if there is one), and any account details you can find. Order at least five copies of the death certificate when you register the death, as each bank will need its own original.',
  },
  {
    step: 3,
    title: 'Submit your claim',
    detail: 'Send or take the documents to the bank. Most banks let you do this by post, in branch, or through an online bereavement form. The bank will verify the documents and check the account balance against their probate threshold.',
  },
  {
    step: 4,
    title: 'Wait for the funds to be released',
    detail: 'If the account balance is below the bank\'s threshold, they will typically release the funds within 5 to 15 working days. Some banks are faster. The money is usually paid by bank transfer to the executor or next of kin.',
  },
  {
    step: 5,
    title: 'If the balance is above the threshold',
    detail: 'You will need to apply for a grant of probate (or letters of administration if there is no will) before the bank will release the funds. Most banks will still release money to pay for the funeral directly to the funeral director, even before probate is granted.',
  },
];

const FAQS = [
  {
    question: 'What is a bank probate threshold?',
    answer: 'A probate threshold is the maximum amount a bank will release from a deceased person\'s account without requiring a grant of probate. If the balance held at that bank is below the threshold, the bank will release the funds on production of the death certificate, identification, and other supporting documents. Each bank sets its own threshold, and these can change at any time.',
  },
  {
    question: 'Can I get money released from a bank account without probate?',
    answer: 'Yes, if the total balance held at that particular bank is below their probate threshold. Most major UK banks set this at £50,000 as of 2026. Building societies tend to have lower thresholds, ranging from £15,000 to £50,000. The threshold applies per banking group, not per account, so if the deceased had a current account and a savings account with the same bank, the balances are combined.',
  },
  {
    question: 'How long does it take for a bank to release funds after death?',
    answer: 'Once all the required documents have been submitted, most banks release funds within 5 to 15 working days. Some are faster. If probate is required, the process takes longer because you first need to obtain the grant of probate, which typically takes 8 to 16 weeks from application.',
  },
  {
    question: 'Will a bank release money to pay for a funeral before probate?',
    answer: 'Most banks will pay a funeral director\'s invoice directly from the deceased\'s account, even if the balance is above the probate threshold and probate has not yet been granted. You will need to provide the funeral director\'s itemised invoice along with the death certificate. Contact the bank\'s bereavement team to arrange this.',
  },
  {
    question: 'What happens if someone has accounts at multiple banks?',
    answer: 'Each bank applies its threshold independently. If the deceased had £40,000 at Barclays and £30,000 at HSBC, both banks would release the funds without probate because each balance is below £50,000. However, if the total estate value (including property, investments, and all bank accounts) exceeds the inheritance tax threshold, you may still need to apply for probate for tax purposes.',
  },
  {
    question: 'Do joint bank accounts need probate?',
    answer: 'No. Joint bank accounts automatically pass to the surviving account holder by right of survivorship. The bank simply removes the deceased person\'s name from the account. You will need to provide the death certificate, but probate is not required for joint accounts regardless of the balance.',
  },
];

export default function BankProbateThresholdsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'Bank Probate Thresholds 2026' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 17 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>9 min read</span>
      </div>
      <BlogPrintButton />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Bank Probate Thresholds 2026: Complete Comparison
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone dies, their bank accounts are frozen. But you do not always need a grant of probate to access the money. Every bank sets a threshold below which they will release funds with just a death certificate and some identification. This guide compares the probate threshold for every major UK bank and building society in 2026, explains what documents you will need, and walks you through the process step by step.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key takeaways</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> All six major high street banks share a £50,000 probate threshold</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Building society thresholds range from £15,000 to £50,000</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Joint accounts pass automatically to the surviving holder with no probate needed</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Most banks will pay a funeral invoice directly, even above the threshold</li>
          <li className="flex gap-2"><span className="font-bold">+</span> The free Death Notification Service lets you notify multiple banks at once</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'what-is-threshold', label: 'What is a probate threshold?' },
        { id: 'comparison', label: '2026 probate thresholds: full comparison' },
        { id: 'how-to-release', label: 'How to release money without probate' },
        { id: 'documents', label: 'Documents banks typically need' },
        { id: 'tips', label: 'Practical tips' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* What is a probate threshold */}
      <h2 id="what-is-threshold" className="text-2xl font-bold text-foreground mb-4">What is a probate threshold?</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <p className="text-sm text-muted leading-relaxed mb-4">
          A <strong className="text-foreground">probate threshold</strong> is the maximum balance a bank or building society will release from a deceased person&apos;s account without requiring a grant of probate or letters of administration. If the total amount held at that institution falls below their threshold, they will release the funds to the executor or next of kin on production of the death certificate and supporting documents.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The threshold applies to the total held across all accounts at that bank or banking group. For example, Lloyds, Halifax, and Scottish Widows are all part of Lloyds Banking Group. If the deceased had accounts across these brands, the balances are combined when assessing against the threshold.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          These thresholds are set by each institution individually and can change without notice. The figures below are correct as of March 2026. If you are dealing with a large balance, always confirm the current threshold directly with the bank&apos;s bereavement team.
        </p>
      </div>

      {/* Comparison table */}
      <h2 id="comparison" className="text-2xl font-bold text-foreground mb-4">2026 probate thresholds: full comparison</h2>
      <p className="text-sm text-muted mb-6">
        Click any bank name to see their full bereavement contact details, phone numbers, and what to expect when you notify them.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">Bank / Building Society</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
              <th className="text-right py-3 pl-4 font-semibold text-foreground">Probate Threshold</th>
            </tr>
          </thead>
          <tbody>
            {BANKS.map((bank, i) => (
              <tr key={bank.slug} className={`border-b border-border ${i % 2 === 0 ? 'bg-card/50' : ''}`}>
                <td className="py-3 pr-4">
                  <Link href={`/notify/${bank.slug}`} className="text-primary hover:underline font-medium">
                    {bank.name}
                  </Link>
                </td>
                <td className="py-3 px-4 text-muted">{bank.type}</td>
                <td className="py-3 pl-4 text-right font-semibold text-foreground">{bank.threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ThresholdEmailCapture />

      {/* Key observations */}
      <div className="bg-primary-light rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-foreground mb-3">Key observations</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2">
            <span className="text-primary font-bold">1.</span>
            <span>All six major high street banks (Barclays, HSBC, Lloyds, NatWest, Santander, Nationwide) now share the same £50,000 threshold.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">2.</span>
            <span>Building society thresholds are generally lower, ranging from £15,000 (Principality) to £50,000 (Nationwide).</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">3.</span>
            <span>Halifax shares the Lloyds Banking Group threshold. If the deceased held accounts at both Lloyds and Halifax, the balances are combined.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">4.</span>
            <span>These thresholds apply to the balance at the date of death. Interest accrued after death does not affect whether you meet the threshold.</span>
          </li>
        </ul>
      </div>

      {/* Steps to release money */}
      <h2 id="how-to-release" className="text-2xl font-bold text-foreground mb-6">How to release money from a bank account without probate</h2>
      <div className="space-y-4 mb-12">
        {STEPS.map((s) => (
          <div key={s.step} className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Documents needed */}
      <h2 id="documents" className="text-2xl font-bold text-foreground mb-4">Documents banks typically need</h2>
      <p className="text-sm text-muted mb-6">
        Requirements vary between banks, but most will ask for the following. Check with the specific bank&apos;s bereavement team, as some have additional requirements.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">Document</th>
              <th className="text-left py-3 pl-4 font-semibold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {DOCUMENTS.map((doc, i) => (
              <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card/50' : ''}`}>
                <td className="py-3 pr-4 font-medium text-foreground">{doc.document}</td>
                <td className="py-3 pl-4 text-muted">{doc.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <h2 id="tips" className="text-2xl font-bold text-foreground mb-4">Practical tips</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Use the Death Notification Service</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            The free <a href="https://www.deathnotificationservice.co.uk" target="_blank" rel="noopener noreferrer" className="underline">Death Notification Service</a> lets you notify multiple banks and building societies at the same time. One form covers Barclays, HSBC, Lloyds, Halifax, NatWest, Santander, Nationwide, and many others. It saves hours of phone calls.
          </p>
        </div>
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Order enough death certificates</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            Each bank typically needs an original death certificate. If the deceased had accounts at three different banks, you will need at least three certificates. Order them when you register the death (£12.50 each in England and Wales (£15 in Scotland)). Ordering extras later costs more and takes longer.
          </p>
        </div>
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Ask about funeral payments</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            Even if the account balance is above the probate threshold, most banks will pay a funeral director&apos;s invoice directly from the account before probate is granted. Ask the bereavement team about this when you first contact them. It can relieve significant financial pressure during a difficult time.
          </p>
        </div>
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Keep records of everything</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            Note the date and time of every call, the name of the person you spoke to, and any reference numbers. If you send documents by post, use recorded delivery. Banks process thousands of bereavement cases and paperwork occasionally goes missing. Having a clear record protects you.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
            <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <FreeChecklistBanner />

      {/* Cross-links */}
      <SupportCta />
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Contacting banks:</strong> Our <Link href="/notify" className="text-primary hover:underline">notification guide</Link> has direct bereavement phone numbers for every major UK bank. Use our <Link href="/call-scripts" className="text-primary hover:underline">call scripts</Link> for what to say, and our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> for written notifications. See our <Link href="/costs" className="text-primary hover:underline">cost breakdown</Link> for all the other expenses to expect.
        </p>
      </div>

      <RelatedGuides
        currentPath="/blog/bank-probate-thresholds-2026"
        guides={['/probate', '/notify', '/costs', '/blog/true-cost-of-dying-uk']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Not sure what to do next?</h2>
        <p className="text-muted mb-6">Our free personalised guide asks about your specific situation and creates a step-by-step checklist, including which banks to contact and what documents you will need.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Bank Probate Thresholds 2026: Complete Comparison',
            description: 'Every major UK bank and building society probate threshold compared. How much each bank will release without a grant of probate in 2026.',
            datePublished: '2026-03-14',
            dateModified: '2026-03-17',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://helpafterloss.co.uk/blog/bank-probate-thresholds-2026',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
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
              { '@type': 'ListItem', position: 2, name: 'Guides & Articles', item: 'https://helpafterloss.co.uk/blog' },
              { '@type': 'ListItem', position: 3, name: 'Bank Probate Thresholds 2026', item: 'https://helpafterloss.co.uk/blog/bank-probate-thresholds-2026' },
            ],
          }),
        }}
      />
    </div>
  );
}
