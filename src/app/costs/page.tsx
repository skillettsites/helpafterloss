import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Costs When Someone Dies - Full Breakdown',
  description: 'How much does it cost when someone dies in the UK? Full breakdown of funeral costs, death certificates, probate fees, solicitor charges, and ways to reduce costs.',
  alternates: { canonical: 'https://helpafterloss.co.uk/costs' },
  openGraph: {
    title: 'Costs When Someone Dies - Full Breakdown',
    description: 'Full breakdown of funeral costs, death certificates, probate fees, solicitor charges, and ways to save money.',
    url: 'https://helpafterloss.co.uk/costs',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does It Cost When Someone Dies in the UK?',
    description: 'Full cost breakdown: funerals, certificates, probate fees, and practical ways to reduce costs.',
  },
};

const COSTS = [
  { item: 'Death certificates', cost: '£11 each', detail: 'Order at least 5 copies when you register. Each bank, insurer, and institution needs an original. Ordering extras later costs more.' },
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
  { title: 'Bereavement Support Payment', detail: 'For spouses/civil partners under State Pension age. Higher rate (with children): £3,500 lump sum + £350/month for 18 months. Standard rate: £2,500 + £100/month.' },
  { title: 'DIY probate', detail: 'Saves £2,000-£15,000+ in solicitor fees. The government website guides you through each step. Suitable for estates with straightforward assets and known beneficiaries.' },
  { title: 'Compare funeral directors', detail: 'Get at least 3 quotes. Prices can vary by thousands of pounds in the same area. Ask for an itemised breakdown so you can compare like for like.' },
  { title: 'Consider direct cremation', detail: 'At around £1,600, direct cremation saves £2,500-£3,800 compared to a traditional funeral. You can hold a meaningful memorial service separately at little or no cost.' },
  { title: 'Council tax exemption', detail: 'An empty property is exempt from council tax during probate and for 6 months after. Contact the council to apply.' },
  { title: 'Death Notification Service', detail: 'Free service to notify multiple banks at once, saving hours of phone calls. Visit deathnotificationservice.co.uk.' },
];

export default function CostsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        How Much Does It Cost When Someone Dies?
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        The costs can be significant and often come as a surprise. Here is a full breakdown of what you might need to pay, and practical ways to reduce costs.
      </p>

      {/* Cost breakdown */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Cost breakdown</h2>
      <div className="space-y-4 mb-12">
        {COSTS.map((c, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground">{c.item}</h3>
              <span className="text-primary font-bold ml-4 flex-shrink-0">{c.cost}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">{c.detail}</p>
          </div>
        ))}
      </div>

      {/* Ways to save */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Ways to reduce costs</h2>
      <div className="space-y-4 mb-12">
        {SAVINGS.map((s, i) => (
          <div key={i} className="bg-success-light rounded-xl p-6">
            <h3 className="font-semibold text-green-800 mb-2">{s.title}</h3>
            <p className="text-sm text-green-800/80 leading-relaxed">{s.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a cost estimate for your situation</h2>
        <p className="text-muted mb-6">Our personalised guide includes a cost calculator based on your exact circumstances.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/costs" guides={['/guides/funeral-options', '/guides/bereavement-benefits', '/probate', '/blog/true-cost-of-dying-uk']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: COSTS.map(c => ({
              '@type': 'Question',
              name: `How much does ${c.item.toLowerCase()} cost when someone dies?`,
              acceptedAnswer: { '@type': 'Answer', text: `${c.cost}. ${c.detail}` },
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
              { '@type': 'ListItem', position: 2, name: 'Costs', item: 'https://helpafterloss.co.uk/costs' },
            ],
          }),
        }}
      />
    </div>
  );
}
