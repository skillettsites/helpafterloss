import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'How Much Does It Cost When Someone Dies UK 2026 - Full Breakdown',
  description: 'Full breakdown of costs when someone dies in the UK. Funerals average £4,141, death certificates cost £12.50 each, probate fee is £300. See every cost and 8 ways to reduce them.',
  alternates: { canonical: 'https://helpafterloss.co.uk/costs' },
  openGraph: {
    title: 'How Much Does It Cost When Someone Dies in the UK? Full 2026 Breakdown',
    description: 'Every cost you can expect: funeral, certificates, probate, solicitors, and practical ways to reduce them. Updated for 2026.',
    url: 'https://helpafterloss.co.uk/costs',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cost of Death in the UK 2026 - Full Breakdown',
    description: 'Full cost breakdown: funerals from £995, certificates £12.50, probate £300, plus 8 ways to save money.',
  },
};

const COSTS = [
  { item: 'Death certificates', cost: '£12.50 each (England)', detail: 'Order at least 5 copies when you register. Each bank, insurer, and institution needs an original. Ordering extras later costs more. Wales: £11, Scotland: £15 (NRS extract).' },
  { item: 'Traditional burial with service', cost: '£4,000 - £8,000', detail: 'Includes funeral director fees, coffin, hearse, burial plot, grave digging, and service. UK average is around £5,400. Prices vary hugely by region and provider.' },
  { item: 'Cremation with service', cost: '£3,000 - £6,500', detail: 'Includes funeral director fees, coffin, hearse, cremation fee, and service. UK average is around £4,200.' },
  { item: 'Direct cremation', cost: '£1,000 - £2,500', detail: 'No service, no mourners present. The most affordable option. UK average is around £1,600. You can hold a separate memorial at any time.' },
  { item: 'Probate court fee', cost: '£300', detail: 'For estates valued over £5,000. Free for estates under £5,000. This is the same whether you do it yourself or use a solicitor.' },
  { item: 'Solicitor fees (probate)', cost: '£2,000 - £15,000+', detail: 'Typically 1-5% of the estate value, or hourly rates of £150-£400+. Not always needed; many people do probate themselves for straightforward estates.' },
  { item: 'Statutory notice (The Gazette)', cost: '£80 - £150', detail: 'Placing a legal notice to protect the executor from unknown debts. Optional but strongly recommended.' },
  { item: 'Post redirection', cost: '£37 - £73', detail: 'Royal Mail redirection for 3, 6, or 12 months. Helps catch correspondence and accounts you may not know about.' },
  { item: 'Inheritance tax', cost: '40% above threshold', detail: 'Only applies to estates above £325,000 (or £500,000 if a home is left to children). Spouses can combine allowances for up to £1 million.' },
];

const SAVINGS = [
  { title: 'Funeral Expenses Payment', detail: 'If you receive means-tested benefits (Universal Credit, Pension Credit, etc.), the DWP can help with funeral costs: burial/cremation fees plus up to £1,000 for other costs. Claim within 6 months. Call 0800 731 0469.' },
  { title: 'Children\'s Funeral Fund', detail: 'Covers burial/cremation fees and a coffin for anyone under 18 (or stillborn after 24 weeks) in England. The funeral director can apply for you.' },
  { title: 'Bereavement Support Payment', detail: 'For spouses/civil partners under State Pension age. Higher rate (with children): £3,500 lump sum + £350/month for 18 months. Standard rate: £2,500 + £100/month. Claim within 3 months for full backdating.' },
  { title: 'DIY probate', detail: 'Saves £2,000-£15,000+ in solicitor fees. The government website guides you through each step. Suitable for estates with straightforward assets and known beneficiaries.' },
  { title: 'Compare funeral directors', detail: 'Get at least 3 quotes. Prices can vary by thousands of pounds in the same area. Ask for an itemised breakdown so you can compare like for like.' },
  { title: 'Consider direct cremation', detail: 'At around £1,600, direct cremation saves £2,500-£3,800 compared to a traditional funeral. You can hold a meaningful memorial service separately at little or no cost.' },
  { title: 'Council tax exemption', detail: 'An empty property is exempt from council tax during probate and for 6 months after. Contact the council to apply.' },
  { title: 'Death Notification Service', detail: 'Free service to notify multiple banks at once, saving hours of phone calls. Visit deathnotificationservice.co.uk.' },
];

const FAQ = [
  {
    q: 'How much does a funeral cost in the UK in 2026?',
    a: 'The average UK funeral costs around £4,141 in 2026. A cremation with a service averages £4,200 and a burial around £5,400. Direct cremation, the cheapest option, starts from around £995 with no service. Prices vary significantly by region, with London and the South East being the most expensive.',
  },
  {
    q: 'Do I have to pay for the funeral upfront?',
    a: 'Most funeral directors will wait for payment until after the funeral. Some offer payment plans. Banks will often release money from the deceased person\'s account specifically for funeral costs, even before probate is granted. If you are on means-tested benefits, you can apply for a Funeral Expenses Payment to help cover costs.',
  },
  {
    q: 'How much does probate cost in 2026?',
    a: 'The court fee for probate is £300 for estates over £5,000, and free for estates below that. If you use a solicitor, expect to pay £2,000 to £5,000 for a straightforward estate, or £5,000 to £15,000+ for complex estates. DIY probate is perfectly manageable for many estates and costs only the £300 court fee.',
  },
  {
    q: 'What is the cheapest type of funeral in the UK?',
    a: 'Direct cremation is the cheapest option, starting from around £995. There is no service or mourners present. You can hold a separate memorial event at any time, at a venue of your choosing, often at little or no cost. A council public health funeral (sometimes called a "pauper\'s funeral") is free but only available when nobody can arrange or afford a funeral.',
  },
  {
    q: 'Can I get help with funeral costs?',
    a: 'Yes. If you receive means-tested benefits (Universal Credit, Pension Credit, income-based JSA or ESA), you can apply for a Funeral Expenses Payment from the DWP, which covers basic costs plus up to £1,000 for extras. The Children\'s Funeral Fund covers costs for children under 18 in England. Some trade unions, employers, and charities also help with funeral costs.',
  },
  {
    q: 'How many death certificates do I need and how much do they cost?',
    a: 'Order at least 5 certified copies at registration. They cost £12.50 each in England, £11 in Wales, and £15 in Scotland. Each bank, insurer, pension provider, and solicitor typically needs an original. If the person had many accounts and policies, you may need 8 to 10 copies. Ordering extras later is more expensive.',
  },
  {
    q: 'What is inheritance tax and when does it apply?',
    a: 'Inheritance tax is charged at 40% on the value of the estate above the nil-rate band of £325,000. There is an additional £175,000 residence nil-rate band if the home passes to children or grandchildren. Spouses can transfer unused allowances, giving a combined threshold of up to £1 million. Most estates do not pay inheritance tax.',
  },
  {
    q: 'Is there financial help available after a death?',
    a: 'Yes. Bereavement Support Payment gives a lump sum of £2,500 to £3,500 plus monthly payments of £100 to £350 for 18 months (for spouses/civil partners under State Pension age). Funeral Expenses Payment helps with funeral costs if you receive qualifying benefits. Council tax exemption applies to empty properties during probate. You may also be entitled to life insurance payouts, death-in-service benefits, and pension lump sums.',
  },
];

export default function CostsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs items={[
        { label: 'How Much Does It Cost When Someone Dies?' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        How Much Does It Cost When Someone Dies?
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        The costs can be significant and often come as a surprise. Here is a full breakdown of what you might need to pay, and practical ways to reduce costs. All figures are for 2026.
      </p>

      {/* Key costs at a glance */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">£4,141</p>
          <p className="text-xs text-muted mt-1">Average funeral</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">£12.50</p>
          <p className="text-xs text-muted mt-1">Per death certificate</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">£300</p>
          <p className="text-xs text-muted mt-1">Probate court fee</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-success">From £995</p>
          <p className="text-xs text-muted mt-1">Direct cremation</p>
        </div>
      </div>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-5 md:p-6 mb-10" aria-label="Page sections">
        <h2 className="font-semibold text-foreground mb-3">In this guide</h2>
        <ul className="space-y-2.5">
          <li><a href="#funeral-costs" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Funeral costs</a></li>
          <li><a href="#other-costs" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Other costs (certificates, probate, solicitors)</a></li>
          <li><a href="#total" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Total cost estimates</a></li>
          <li><a href="#save-money" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">8 ways to reduce costs</a></li>
          <li><a href="#faq" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Common questions</a></li>
        </ul>
      </nav>

      {/* Featured snippet targets */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">How much does a funeral cost in the UK?</h2>
        <p className="text-muted leading-relaxed">
          The average UK funeral costs £4,141 in 2026. A cremation with a service averages around £4,200 and a burial around £5,400. Direct cremation, where there is no service, starts from around £995. These figures exclude optional extras like flowers, catering, order of service booklets, and headstones, which can add hundreds or thousands more.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">What is the cheapest type of funeral?</h2>
        <p className="text-muted leading-relaxed">
          Direct cremation is the cheapest option, starting from around £995 with no service or mourners present. A council public health funeral is free but is only available when nobody can arrange or afford a funeral. The DWP Funeral Expenses Payment can cover up to £1,000 towards funeral costs for those receiving qualifying means-tested benefits.
        </p>
      </section>

      {/* Funeral cost breakdown */}
      <section id="funeral-costs" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">Funeral costs</h2>
        <div className="bg-primary-light rounded-lg p-4 mb-4">
          <p className="text-sm text-foreground">
            <strong>Related:</strong> Compare <Link href="/guides/funeral-options" className="text-primary hover:underline">all funeral types in detail</Link> (burial, cremation, direct cremation, green, woodland, humanist). If money is tight, read our guide on <Link href="/blog/free-funeral-options-uk" className="text-primary hover:underline">free funeral options in the UK</Link>.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-light">
                <th className="text-left p-4 font-semibold text-foreground">Funeral type</th>
                <th className="text-right p-4 font-semibold text-foreground">Typical cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-4 text-muted">Direct cremation (no service)</td><td className="p-4 text-right font-medium text-success">£995 - £2,500</td></tr>
              <tr><td className="p-4 text-muted">Cremation with service</td><td className="p-4 text-right font-medium text-foreground">£3,000 - £6,500</td></tr>
              <tr><td className="p-4 text-muted">Traditional burial with service</td><td className="p-4 text-right font-medium text-foreground">£4,000 - £8,000</td></tr>
              <tr><td className="p-4 text-muted">Green/woodland burial</td><td className="p-4 text-right font-medium text-foreground">£2,000 - £5,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted leading-relaxed">
          Prices vary significantly by region and provider. London is typically the most expensive area. Always get at least 3 itemised quotes before choosing a funeral director.
        </p>
      </section>

      {/* Other costs */}
      <section id="other-costs" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">Other costs to expect</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-light">
                <th className="text-left p-4 font-semibold text-foreground">Item</th>
                <th className="text-right p-4 font-semibold text-foreground">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-4 text-muted">Death certificates (order 5+)</td><td className="p-4 text-right font-medium text-foreground">£12.50 each</td></tr>
              <tr><td className="p-4 text-muted">Probate court fee</td><td className="p-4 text-right font-medium text-foreground">£300</td></tr>
              <tr><td className="p-4 text-muted">Extra copies of the grant</td><td className="p-4 text-right font-medium text-foreground">£1.50 each</td></tr>
              <tr><td className="p-4 text-muted">Statutory notice (The Gazette)</td><td className="p-4 text-right font-medium text-foreground">£80 - £150</td></tr>
              <tr><td className="p-4 text-muted">Post redirection (3-12 months)</td><td className="p-4 text-right font-medium text-foreground">£37 - £73</td></tr>
              <tr><td className="p-4 text-muted">Solicitor (simple estate)</td><td className="p-4 text-right font-medium text-foreground">£2,000 - £5,000</td></tr>
              <tr><td className="p-4 text-muted">Solicitor (complex estate)</td><td className="p-4 text-right font-medium text-foreground">£5,000 - £15,000+</td></tr>
              <tr><td className="p-4 text-muted">Inheritance tax (if applicable)</td><td className="p-4 text-right font-medium text-foreground">40% above threshold</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-primary-light rounded-lg p-4 mb-4">
          <p className="text-sm text-foreground">
            <strong>Related:</strong> See our <Link href="/probate" className="text-primary hover:underline">probate guide</Link> for full details on costs and the DIY vs solicitor decision. For inheritance tax thresholds and exemptions, see our <Link href="/guides/inheritance-tax" className="text-primary hover:underline">inheritance tax guide</Link>.
          </p>
        </div>
      </section>

      {/* Total estimates */}
      <section id="total" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">Total cost estimates</h2>
        <p className="text-muted leading-relaxed mb-4">
          Here is what the total might look like for different scenarios, so you can get a realistic picture:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-success-light rounded-xl p-5">
            <h3 className="font-semibold text-green-800 mb-2">Low cost</h3>
            <p className="text-2xl font-bold text-green-800 mb-2">£1,400 - £2,000</p>
            <ul className="text-xs text-green-800/80 space-y-1">
              <li>Direct cremation (~£1,000)</li>
              <li>5 death certificates (~£63)</li>
              <li>Post redirection (~£37)</li>
              <li>DIY probate (~£300)</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-2">Mid-range</h3>
            <p className="text-2xl font-bold text-primary mb-2">£5,000 - £7,000</p>
            <ul className="text-xs text-muted space-y-1">
              <li>Cremation with service (~£4,200)</li>
              <li>5 death certificates (~£63)</li>
              <li>Post redirection (~£52)</li>
              <li>DIY probate (~£300)</li>
              <li>Gazette notice (~£100)</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-2">Higher cost</h3>
            <p className="text-2xl font-bold text-foreground mb-2">£10,000 - £25,000+</p>
            <ul className="text-xs text-muted space-y-1">
              <li>Traditional burial (~£5,400)</li>
              <li>10 death certificates (~£125)</li>
              <li>Post redirection (~£73)</li>
              <li>Solicitor probate (~£5,000+)</li>
              <li>Gazette notice (~£100)</li>
              <li>IHT (if applicable)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ways to save */}
      <section id="save-money" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">8 ways to reduce costs</h2>
        <div className="space-y-4">
          {SAVINGS.map((s, i) => (
            <div key={i} className="bg-success-light rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-green-800 mb-2">{i + 1}. {s.title}</h3>
              <p className="text-sm text-green-800/80 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <div className="bg-primary-light rounded-lg p-4 mb-10">
        <p className="text-sm text-foreground">
          <strong>Related:</strong> See our <Link href="/guide" className="text-primary hover:underline">step-by-step guide</Link> for the full process after a death. Use <Link href="/tell-us-once" className="text-primary hover:underline">Tell Us Once</Link> to notify government departments for free. Check what <Link href="/guides/bereavement-benefits" className="text-primary hover:underline">benefits you may be entitled to</Link>, or read about <Link href="/guides/executor-duties" className="text-primary hover:underline">executor duties</Link> if you are managing the estate.
        </p>
      </div>

      {/* FAQ */}
      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about costs</h2>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <details key={i} className="bg-card rounded-xl border border-border group">
              <summary className="p-5 md:p-6 font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-4 hover:text-primary transition-colors">
                <span>{item.q}</span>
                <svg className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Gentle reassurance */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          If the costs feel overwhelming, please know that there are options at every price point, and financial help is available. You do not need to decide everything at once. If you need someone to talk to, call Cruse Bereavement Support on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a> (free, Monday to Friday).
        </p>
      </div>

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a cost estimate for your situation</h2>
        <p className="text-muted mb-6">Our personalised guide includes estimated costs based on your exact circumstances, plus ways to save.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
        <p className="text-sm text-muted mt-3">Free. No sign-up required. Takes about 3 minutes.</p>
      </div>

      <RelatedGuides currentPath="/costs" guides={['/guides/funeral-options', '/guides/bereavement-benefits', '/probate', '/blog/true-cost-of-dying-uk']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How Much Does It Cost When Someone Dies in the UK (2026)',
            description: 'Full breakdown of funeral costs, death certificates, probate fees, solicitor charges, and ways to reduce costs when someone dies in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-20',
            author: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            publisher: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            mainEntityOfPage: 'https://helpafterloss.co.uk/costs',
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
              { '@type': 'ListItem', position: 2, name: 'Costs', item: 'https://helpafterloss.co.uk/costs' },
            ],
          }),
        }}
      />
    </div>
  );
}
