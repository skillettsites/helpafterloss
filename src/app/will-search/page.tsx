import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PageDisclaimer } from '@/components/PageDisclaimer';
import { OrderForm } from './OrderForm';

export const metadata: Metadata = {
  title: 'Find a Will or Probate Record UK: £16 Yourself or £29 Done For You',
  description:
    'How to find a will or grant of probate in England and Wales: order it yourself from GOV.UK for £16 (we show you how), or we handle the whole search for £29 all-in. Will-search firms charge £65 or more for the same records.',
  alternates: { canonical: 'https://helpafterloss.co.uk/will-search' },
  openGraph: {
    title: 'Find a Will or Probate Record UK: £16 Yourself or £29 Done For You',
    description:
      'Order probate records yourself from GOV.UK for £16, or we handle the search, ordering and monitoring for £29 all-in. Half the price of will-search firms.',
    url: 'https://helpafterloss.co.uk/will-search',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find a Will or Probate Record UK: £16 Yourself or £29 Done For You',
    description:
      'Order probate records yourself from GOV.UK for £16, or we handle everything for £29 all-in.',
  },
};

const FAQ = [
  {
    q: 'How do I find out if someone left a will?',
    a: 'If probate has been granted in England or Wales, the will becomes a public document. You can search the government probate records at gov.uk/search-will-probate and order a copy of the grant and the will for £16. If probate has not been granted yet, no public record exists: you can lodge a £4 standing search, which sends you the documents automatically if probate is granted in the next 6 months. If probate is never needed (common for small estates or jointly-owned assets), the will may never become public, and the executor or the solicitor who drafted it holds it.',
  },
  {
    q: 'How much does it cost to get a copy of a will in the UK?',
    a: 'The official fee is £16 per probate record ordered from GOV.UK, and that includes the will where one was proved. Commercial will-search firms charge from £65 to over £300 for search services. Our managed service costs £29 all-in, which includes the government fee, name-variation searching, ordering, monitoring, and a plain-English explanation of the documents.',
  },
  {
    q: 'Why did my search on GOV.UK find nothing?',
    a: 'Four common reasons: 1) Probate has not been granted yet. Applications currently take 12 to 16 weeks, and new records appear online around 14 days after the grant is issued, so recent deaths often show nothing for months. 2) Records are filed under the year the grant was issued, not the year of death, so searching only the death year misses grants issued the following year. 3) The name on the record differs from the one you searched: middle names, maiden names, or spelling variations. 4) Probate was never needed for the estate, which is common when assets were jointly owned or below bank thresholds.',
  },
  {
    q: 'What is a standing search?',
    a: 'A standing search is an official request lodged with the Probate Registry for £4. If a grant of probate is issued for the person within the next 6 months, copies of the documents are sent to you automatically. It can be extended after 6 months. It is the correct tool when someone has died recently and probate has not yet been granted. Most people have never heard of it, and will-search firms rarely mention it.',
  },
  {
    q: 'Does this cover Scotland and Northern Ireland?',
    a: 'The GOV.UK probate record service covers England and Wales only. In Scotland, the equivalent process is called Confirmation: records are held by the Scottish Courts and searchable via ScotlandsPeople. In Northern Ireland, probate records are held by the Probate Office of the Northern Ireland Courts and Tribunals Service. Our £29 managed service covers England and Wales searches.',
  },
  {
    q: 'Can I see a will before probate is granted?',
    a: 'Generally no. Before probate, a will is a private document held by the executor or the solicitor who stored it. Only after a grant of probate is issued does the will become a public record anyone can order. If you believe you are a beneficiary, you can ask the executor directly, and a solicitor holding the will can confirm to genuine potential beneficiaries whether they are named, at their discretion.',
  },
  {
    q: 'What if the person died decades ago?',
    a: 'England and Wales probate records go back to 1858, and all of them can be searched and ordered. Older records are exactly the same £16 fee. Family historians use this service to obtain ancestors’ wills. Our managed service covers historic searches too, and they are often the trickiest to get right because names, spellings and index years drift.',
  },
  {
    q: 'What do I receive and how long does it take?',
    a: 'You receive the grant of probate (or letters of administration) and the will, where one was proved. We run the search and place the official order within 1 working day of your payment. HMCTS then supplies the documents: new records typically become available around 14 days after the grant is issued, and postal responses arrive within 4 weeks. We send everything to your email with a plain-English note explaining what the documents mean and sensible next steps.',
  },
];

function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Managed Will & Probate Record Search (England & Wales)',
    provider: {
      '@type': 'Organization',
      name: 'Help After Loss',
      url: 'https://helpafterloss.co.uk',
    },
    areaServed: ['England', 'Wales'],
    description:
      'A managed search of the England and Wales probate records: name-variation searching, official document ordering, standing-search monitoring where no grant exists yet, and plain-English explanation of the documents. £29 including all government fees.',
    offers: {
      '@type': 'Offer',
      price: '29.00',
      priceCurrency: 'GBP',
      url: 'https://helpafterloss.co.uk/will-search',
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function WillSearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <FaqJsonLd />
      <ServiceJsonLd />
      <Breadcrumbs items={[{ label: 'Find a Will or Probate Record' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Find a Will or Probate Record in England &amp; Wales
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-6">
        Once probate has been granted, a will becomes a public document that anyone can order.
        You can do it yourself on GOV.UK for £16, and this page shows you exactly how.
        If you would rather hand it to someone at a difficult time, we run the whole search
        for £29 all-in. Will-search firms charge £65 or more for the same public records.
      </p>

      {/* Quick answer, the box search engines and LLMs lift */}
      <div className="bg-card rounded-xl border border-border p-5 md:p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-3">Finding a will: the facts</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[130px] flex-shrink-0">Official cost:</span>
            <span>£16 per probate record from GOV.UK (includes the will, where one was proved)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[130px] flex-shrink-0">No grant yet?</span>
            <span>£4 standing search: documents sent automatically if probate is granted within 6 months</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[130px] flex-shrink-0">Coverage:</span>
            <span>England &amp; Wales, all records back to 1858</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[130px] flex-shrink-0">Timing:</span>
            <span>New records appear online around 14 days after the grant is issued; postal responses within 4 weeks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[130px] flex-shrink-0">The catch:</span>
            <span>Records are filed under the year the grant was issued, not the year of death, and exact-name matching misses maiden names and spelling variants. Empty results are often wrong results.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[130px] flex-shrink-0">Before probate:</span>
            <span>A will is private. It is held by the executor or the drafting solicitor and only becomes public once probate is granted.</span>
          </li>
        </ul>
      </div>

      {/* Price comparison, honest and complete */}
      <h2 className="text-2xl font-bold text-foreground mb-4">Your three options, honestly compared</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-card text-left">
              <th className="p-3 font-semibold text-foreground">Option</th>
              <th className="p-3 font-semibold text-foreground">Cost</th>
              <th className="p-3 font-semibold text-foreground">What you get</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-t border-border">
              <td className="p-3 font-medium text-foreground">Do it yourself on GOV.UK</td>
              <td className="p-3 whitespace-nowrap">£16</td>
              <td className="p-3">
                The official route. You search, interpret the results, and order. Guide below.
                Watch for the grant-year trap and name variations.
              </td>
            </tr>
            <tr className="border-t border-border bg-card/50">
              <td className="p-3 font-medium text-foreground">Our managed search</td>
              <td className="p-3 whitespace-nowrap font-semibold text-primary">£29 all-in</td>
              <td className="p-3">
                We search name variations and multiple index years, place the official order
                within 1 working day, lodge a standing search if no grant exists yet, and send
                the documents with a plain-English explanation. Government fees included.
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-3 font-medium text-foreground">Will-search firms</td>
              <td className="p-3 whitespace-nowrap">£65 to £300+</td>
              <td className="p-3">
                Useful mainly for pre-probate situations: registered-will database searches and
                solicitor-network enquiries to hunt for an unknown will. If probate has been
                granted, the record they retrieve is the same £16 public document.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Order form */}
      <div className="bg-card rounded-xl border-2 border-primary/30 p-5 md:p-6 mb-10" id="order">
        <h2 className="text-xl font-bold text-foreground mb-1">Let us handle it: £29, everything included</h2>
        <p className="text-sm text-muted mb-5">
          Built for executors, family members and anyone who simply does not want another form
          this month. We start within 1 working day and keep you informed by email. If no record
          exists yet, we lodge the official standing search instead and stay on it for 6 months,
          no extra charge.
        </p>
        <OrderForm />
      </div>

      {/* DIY guide, full transparency */}
      <h2 className="text-2xl font-bold text-foreground mb-4">How to do it yourself for £16</h2>
      <ol className="list-decimal list-inside space-y-3 text-muted mb-6">
        <li>
          <span className="font-medium text-foreground">Go to the official service.</span>{' '}
          Search at{' '}
          <a
            href="https://www.gov.uk/search-will-probate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            gov.uk/search-will-probate
          </a>{' '}
          using the surname and year. This is the only official source; ignore lookalike sites.
        </li>
        <li>
          <span className="font-medium text-foreground">Search the grant year, not just the death year.</span>{' '}
          Records are indexed by the year the grant was issued. Probate takes 12 to 16 weeks to
          process, so check the death year and the following year at minimum.
        </li>
        <li>
          <span className="font-medium text-foreground">Try name variations.</span> Maiden names,
          middle names used as first names, and spelling differences all cause false
          &quot;no result&quot; outcomes. The index matches what was on the application, not what
          the family called them.
        </li>
        <li>
          <span className="font-medium text-foreground">Order the record for £16.</span> The copy
          includes the grant and the will where one was proved. New records appear online around
          14 days after the grant is issued.
        </li>
        <li>
          <span className="font-medium text-foreground">Nothing found and the death was recent?</span>{' '}
          Lodge a £4 standing search (form PA1S) so the documents come to you automatically if a
          grant is issued in the next 6 months.
        </li>
        <li>
          <span className="font-medium text-foreground">Nothing found and it has been over a year?</span>{' '}
          Probate may simply never have been needed: jointly-held property and accounts below bank
          thresholds pass without it. Our guide to{' '}
          <Link href="/probate" className="text-primary hover:underline">when probate is required</Link>{' '}
          explains how to tell.
        </li>
      </ol>

      <p className="text-muted mb-10">
        Scotland uses a different system called Confirmation (search via ScotlandsPeople), and
        Northern Ireland records are held by its Probate Office. This page and our managed service
        cover England and Wales.
      </p>

      {/* Why us block */}
      <h2 className="text-2xl font-bold text-foreground mb-4">What the £29 actually buys</h2>
      <ul className="space-y-3 text-muted mb-10">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold flex-shrink-0">1.</span>
          <span>
            <span className="font-medium text-foreground">A search done properly.</span> Name
            variations, maiden names, multiple index years, and the judgement to interpret an
            empty result correctly rather than assume there is no will.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold flex-shrink-0">2.</span>
          <span>
            <span className="font-medium text-foreground">The official order placed for you</span>{' '}
            within 1 working day, with the £16 fee (or £4 standing search) included in the price.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold flex-shrink-0">3.</span>
          <span>
            <span className="font-medium text-foreground">Six months of monitoring</span> when no
            grant exists yet, so a late grant still reaches you without anyone having to remember
            to re-check.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold flex-shrink-0">4.</span>
          <span>
            <span className="font-medium text-foreground">Documents explained in plain English.</span>{' '}
            What the grant means, what the will does and does not tell you, and what usually makes
            sense to do next, drawing on our{' '}
            <Link href="/guide" className="text-primary hover:underline">step-by-step bereavement guide</Link>.
          </span>
        </li>
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-4">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        {FAQ.map((f) => (
          <details key={f.q} className="bg-card rounded-xl border border-border p-4 group">
            <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center gap-3">
              {f.q}
              <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none flex-shrink-0">+</span>
            </summary>
            <p className="text-sm text-muted leading-relaxed mt-3">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border p-5 mb-10 text-center">
        <p className="font-semibold text-foreground mb-2">Ready when you are</p>
        <p className="text-sm text-muted mb-4">
          £29 all-in, started within 1 working day, no account needed.
        </p>
        <a
          href="#order"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Start my will search
        </a>
      </div>

      <RelatedGuides
        currentPath="/will-search"
        guides={['/probate', '/intestacy', '/guides/executor-duties', '/guides/bank-accounts-after-death']}
      />

      <PageDisclaimer lastReviewed="July 2026" jurisdiction="england-wales" />
    </div>
  );
}
