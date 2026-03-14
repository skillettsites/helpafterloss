import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Probate Guide - Do You Need Probate and How to Apply',
  description: 'Everything you need to know about probate in the UK. When you need it, how to apply, costs, DIY vs solicitor, and how long it takes. Covers England, Wales, Scotland (Confirmation), and Northern Ireland.',
  alternates: { canonical: 'https://helpafterloss.co.uk/probate' },
  openGraph: {
    title: 'Probate Guide - Do You Need Probate and How to Apply',
    description: 'Everything you need to know about probate in the UK, including costs, timelines, and how to do it yourself.',
    url: 'https://helpafterloss.co.uk/probate',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Probate Guide - Costs, Timelines, and How to Apply',
    description: 'A plain-English guide to probate for England, Wales, Scotland, and Northern Ireland.',
  },
};

const FAQ = [
  {
    q: 'What is probate?',
    a: 'Probate is the legal process of proving that a will is valid and giving the executor the authority to deal with the estate. If there is no will, the equivalent process gives "Letters of Administration" to the closest relative (called the administrator). In Scotland, the process is called "Confirmation".',
  },
  {
    q: 'Do I need probate?',
    a: 'You usually need probate if the person owned property, had savings above the bank\'s threshold (typically £5,000-£50,000, varies by bank), or had investments. You usually do not need probate if all assets were jointly owned (they pass automatically to the surviving owner), or if the estate is small and below bank thresholds.',
  },
  {
    q: 'How do I apply for probate?',
    a: 'Value the estate (property, savings, investments, possessions, minus debts). For estates below the IHT threshold, report the estate values on the probate application itself. If the estate is above the threshold, complete form IHT400. Submit the probate application (PA1P with a will, PA1A without) to the Probate Registry. Pay the court fee of £300 (free for estates under £5,000). You can apply online at gov.uk.',
  },
  {
    q: 'How long does probate take?',
    a: 'The Probate Registry currently takes around 12-16 weeks to process applications, though complex cases can take longer. The entire estate administration (from death to final distribution) typically takes 6-18 months depending on complexity.',
  },
  {
    q: 'How much does probate cost?',
    a: 'The court fee is £300 for estates over £5,000 (free if under). If you use a solicitor, expect to pay 1-5% of the estate value or hourly rates of £150-400+. For a £300,000 estate, solicitor fees might be £3,000-15,000. Many straightforward estates can be handled with DIY probate.',
  },
  {
    q: 'Can I do probate myself?',
    a: 'Yes. For straightforward estates (one property, known beneficiaries, no disputes), DIY probate is perfectly manageable. The government website guides you through each step. Consider using a solicitor if: the estate is complex, there are disputes between beneficiaries, the person owned a business, or there are assets abroad.',
  },
  {
    q: 'What is the difference between probate and Letters of Administration?',
    a: 'Grant of Probate is issued when there is a valid will. The executor named in the will applies for it. Letters of Administration is issued when there is no will. The closest living relative (usually spouse, then children) applies. Both give legal authority to deal with the estate.',
  },
  {
    q: 'What happens in Scotland?',
    a: 'In Scotland, probate is called "Confirmation". You apply to the Sheriff Court rather than the Probate Registry. The process is similar but uses different forms. Estates under £36,000 can use a simplified "small estate" process. Scotland also has different inheritance rules called "Legal Rights" which give spouses and children a fixed share of moveable property.',
  },
];

export default function ProbatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Probate: Everything You Need to Know' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Probate: Everything You Need to Know
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Probate can seem daunting, but for many estates it is a straightforward process you can handle yourself. This guide explains when you need it, how to apply, what it costs, and when to get professional help.
      </p>

      {/* Quick summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£300</p>
          <p className="text-sm text-muted mt-1">Court fee (free if estate under £5,000)</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">12-16 weeks</p>
          <p className="text-sm text-muted mt-1">Current processing time</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">DIY friendly</p>
          <p className="text-sm text-muted mt-1">For straightforward estates</p>
        </div>
      </div>

      {/* Featured snippet targets */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">How much does probate cost?</h2>
        <p className="text-muted leading-relaxed">
          Probate costs £300 as a court fee, or nothing if the estate is valued under £5,000. If you use a solicitor, expect to pay £2,000 to £5,000 for a typical estate. DIY probate is free apart from the court fee. Solicitor costs vary based on estate complexity, with some charging a percentage of the estate value rather than a fixed fee.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">How long does probate take?</h2>
        <p className="text-muted leading-relaxed">
          Probate typically takes 6 to 12 months from application to final distribution of the estate. The application itself takes 12 to 16 weeks to process by the Probate Registry. Simple estates with straightforward assets can be resolved faster, while complex estates involving property sales or inheritance tax often take longer.
        </p>
      </section>

      {/* Step by step */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-step probate process</h2>
      <div className="bg-primary-light rounded-lg p-4 mb-6">
        <p className="text-sm text-foreground">
          <strong>New to this?</strong> If you have been named as executor in the will, read our guide on <Link href="/guides/executor-duties" className="text-primary hover:underline">executor duties and responsibilities</Link> before you begin. It covers what you are legally required to do and where your liability sits.
        </p>
      </div>
      <div className="space-y-4 mb-12">
        {[
          { step: '1', title: 'Check if probate is needed', desc: 'Contact each bank and financial institution. If the total in sole-name accounts is below their threshold (varies by bank, usually £5,000-50,000), they may release funds without probate. If the person owned property, probate is almost always needed.' },
          { step: '2', title: 'Value the estate', desc: 'List everything the person owned and owed. Get a property valuation (estate agents can provide free ones). Check all bank statements, investments, pensions, and personal possessions. Subtract debts, mortgages, and loans.' },
          { step: '3', title: 'Complete the inheritance tax form', desc: 'If the estate is below the IHT threshold (£325,000, or up to £500,000 with the residence nil-rate band), report the estate values as part of the probate application itself (no separate IHT form is needed). If above, complete form IHT400 (long form). Pay any IHT due within 6 months of death.' },
          { step: '4', title: 'Apply for probate', desc: 'Complete form PA1P (with a will) or PA1A (without a will). You can apply online at gov.uk/applying-for-probate. You will need the original will, the death certificate, and the completed IHT form. Pay the £300 court fee.' },
          { step: '5', title: 'Wait for the grant', desc: 'The Probate Registry processes the application. Current processing time is 12-16 weeks. You may be asked to attend an interview or provide additional information.' },
          { step: '6', title: 'Administer the estate', desc: 'Once you receive the grant, send copies to banks, the Land Registry, and other institutions. Collect in all assets, pay all debts, and distribute to beneficiaries according to the will (or intestacy rules).' },
        ].map(s => (
          <div key={s.step} className="bg-card rounded-xl border border-border p-6 flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {s.step}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary-light rounded-lg p-4 mb-6">
        <p className="text-sm text-foreground">
          <strong>Related:</strong> See our <Link href="/guides/inheritance-tax" className="text-primary hover:underline">inheritance tax guide</Link> for thresholds, exemptions, and how to calculate what is owed. Once you have the grant, you will need to <Link href="/guides/bank-accounts-after-death" className="text-primary hover:underline">close bank accounts</Link> and deal with <Link href="/guides/property-after-death" className="text-primary hover:underline">any property</Link>. For a full breakdown of probate and other costs, see our <Link href="/costs" className="text-primary hover:underline">costs page</Link>.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about probate</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need to know if probate applies to you?</h2>
        <p className="text-muted mb-6">Our personalised guide will tell you exactly what legal steps you need to take based on your specific situation.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/probate" guides={['/guides/executor-duties', '/intestacy', '/costs', '/template-letters']} />

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
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Probate Guide', item: 'https://helpafterloss.co.uk/probate' },
            ],
          }),
        }}
      />
    </div>
  );
}
