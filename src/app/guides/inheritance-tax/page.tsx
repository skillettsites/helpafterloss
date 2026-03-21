import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Inheritance Tax in the UK: Thresholds, Rates & How to Reduce It',
  description: 'Complete guide to inheritance tax in the UK. Current thresholds (£325,000 nil-rate band, £175,000 residence nil-rate band), rates, exemptions, the 7-year gift rule, and how to reduce your IHT bill.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/inheritance-tax' },
  openGraph: {
    title: 'Inheritance Tax in the UK: Thresholds, Rates & How to Reduce It',
    description: 'UK inheritance tax explained in plain English: thresholds, rates, exemptions, and practical ways to reduce the bill.',
    url: 'https://helpafterloss.co.uk/guides/inheritance-tax',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inheritance Tax in the UK: Thresholds, Rates & How to Reduce It',
    description: 'UK inheritance tax thresholds, rates, exemptions, and how to reduce it.',
  },
};

const SECTIONS = [
  {
    title: 'Current thresholds',
    content: 'The nil-rate band is £325,000. This means the first £325,000 of an estate is tax-free. On top of that, there is the residence nil-rate band of £175,000, which applies if the deceased\'s home is left to direct descendants (children, grandchildren, stepchildren). This gives a total threshold of £500,000 per person. Married couples and civil partners can transfer any unused threshold to the surviving partner, giving a combined threshold of up to £1,000,000. These thresholds have been frozen since 2009 (nil-rate band) and are set to remain at these levels until at least April 2030.',
  },
  {
    title: 'The rate',
    content: 'Inheritance tax is charged at 40% on everything above the threshold. So if someone leaves an estate worth £600,000 and their threshold is £500,000, the IHT bill is 40% of £100,000 = £40,000. There is a reduced rate of 36% if the deceased left 10% or more of their net estate to charity in their will. This is worth calculating, as the 4% reduction can sometimes mean the charity gift costs the estate very little overall.',
  },
  {
    title: 'What counts towards the estate',
    content: 'The estate includes: all property (at market value), bank and savings accounts, investments and shares, personal possessions of value (jewellery, art, vehicles), life insurance policies payable to the estate (not those written in trust), business assets, and any gifts made in the seven years before death. Jointly owned assets are included based on the deceased\'s share. Pension pots are usually outside the estate because they are paid at the trustees\' discretion.',
  },
  {
    title: 'What doesn\'t count (exemptions)',
    content: 'Several important exemptions can reduce or eliminate the IHT bill. Everything left to a spouse or civil partner is completely exempt from IHT, with no upper limit. Everything left to a qualifying charity is exempt. Business Property Relief can reduce the value of qualifying business assets by 50% or 100%. Agricultural Property Relief works similarly for qualifying farmland. Note: from 6 April 2026, 100% BPR and APR relief is capped at the first £1 million of combined qualifying business and agricultural property, with 50% relief on the excess. Assets left to political parties (above a minimum threshold) are also exempt.',
  },
  {
    title: 'The 7-year rule for gifts',
    content: 'Gifts made more than 7 years before death are completely free from inheritance tax. Gifts made within 7 years are potentially chargeable and may reduce the nil-rate band available to the estate. Taper relief reduces the tax on gifts made between 3 and 7 years before death: 0-3 years, 40%; 3-4 years, 32%; 4-5 years, 24%; 5-6 years, 16%; 6-7 years, 8%; 7+ years, 0%. Note that taper relief only applies if the total gifts exceed the nil-rate band. For smaller gifts, it makes no difference.',
  },
  {
    title: 'Annual exemptions and allowances',
    content: 'Several types of gift are immediately exempt from IHT, regardless of the 7-year rule. The annual exemption allows you to give away £3,000 per tax year (you can carry forward one unused year, giving a maximum of £6,000). Small gifts of up to £250 per person per year are exempt (you can give to as many people as you like). Wedding gifts are exempt up to: £5,000 from parents, £2,500 from grandparents, and £1,000 from anyone else. Regular gifts from surplus income are also exempt if they form a regular pattern and come from income, not capital.',
  },
  {
    title: 'The IHT400 form',
    content: 'If the estate is above the IHT threshold, or involves complex assets, you must complete form IHT400 and submit it to HMRC before applying for probate. This is a detailed form (over 20 pages plus supplementary schedules) that requires a full breakdown of everything the deceased owned and owed. Common mistakes include: forgetting to include gifts made in the last 7 years, undervaluing property (HMRC will check), missing joint assets, and not claiming all available exemptions. For simpler estates below the threshold (excepted estates), the estate values are reported as part of the probate application itself, with no separate IHT form needed.',
  },
  {
    title: 'Deadlines and penalties',
    content: 'Inheritance tax must be paid within 6 months of death. After that, interest accrues automatically at the current HMRC rate. The IHT400 form must be filed within 12 months of death. A late filing attracts a £100 penalty initially, escalating to up to £3,000 for continued non-compliance. You can pay IHT on property in 10 equal annual instalments (with interest), which helps if the estate includes a house that takes time to sell. IHT on other assets (cash, shares) must be paid in full before probate is granted.',
  },
  {
    title: 'Paying inheritance tax',
    content: 'IHT must usually be paid before probate is granted, which creates a practical problem: you need probate to access the money, but you need to pay IHT before you get probate. Most banks will release funds directly to HMRC to pay IHT from the deceased\'s accounts using the "Direct Payment Scheme" (IHT423 form). This avoids the need to find the money from other sources. For property, you can elect to pay in 10 annual instalments, though interest is charged on the outstanding balance.',
  },
];

const TAPER_RELIEF = [
  { years: '0-3 years before death', rate: '40%', saving: 'No reduction' },
  { years: '3-4 years before death', rate: '32%', saving: '20% reduction' },
  { years: '4-5 years before death', rate: '24%', saving: '40% reduction' },
  { years: '5-6 years before death', rate: '16%', saving: '60% reduction' },
  { years: '6-7 years before death', rate: '8%', saving: '80% reduction' },
  { years: '7+ years before death', rate: '0%', saving: 'Fully exempt' },
];

const FAQ = [
  {
    q: 'How much inheritance tax do I have to pay?',
    a: 'It depends on the size of the estate and the available exemptions. The first £325,000 is tax-free (nil-rate band). If the home is left to direct descendants, the first £500,000 may be tax-free. Married couples can combine their allowances for up to £1,000,000 tax-free. Everything above the threshold is taxed at 40% (or 36% if 10%+ is left to charity). Many estates fall below the threshold and pay no IHT at all.',
  },
  {
    q: 'Do I pay inheritance tax on my parents\' house?',
    a: 'Only if the total estate (including the house) exceeds the available threshold. If you are a direct descendant (child, grandchild, stepchild) and the house is left to you, the residence nil-rate band of £175,000 applies on top of the standard £325,000, giving a threshold of £500,000. If your parent was widowed and their late spouse did not use their allowances, the threshold could be up to £1,000,000. You pay IHT only on the amount above the threshold.',
  },
  {
    q: 'What is the inheritance tax threshold for 2026?',
    a: 'The nil-rate band remains at £325,000, where it has been since 2009. The residence nil-rate band is £175,000. Together, they give an individual threshold of £500,000, or £1,000,000 for a married couple or civil partnership where the first to die did not use their allowances. The government has confirmed these thresholds will remain frozen until at least April 2030.',
  },
  {
    q: 'How do I reduce inheritance tax?',
    a: 'The most effective ways to reduce IHT are: leave everything to your spouse or civil partner (unlimited exemption), leave 10%+ of the net estate to charity (reduces the rate from 40% to 36%), make use of the annual £3,000 gift exemption each year, make regular gifts from surplus income, consider setting up trusts, and ensure your will takes full advantage of both the nil-rate band and residence nil-rate band. For larger estates, take specialist financial and legal advice.',
  },
  {
    q: 'When is the inheritance tax deadline?',
    a: 'IHT must be paid within 6 months of the date of death. Interest is charged automatically on any amount unpaid after that deadline. The IHT400 form must be filed with HMRC within 12 months of death, with penalties starting at £100 for late filing. For property, you can apply to pay IHT in 10 annual instalments, though interest is charged on the outstanding balance.',
  },
  {
    q: 'Do married couples pay inheritance tax?',
    a: 'No IHT is charged on anything left to a spouse or civil partner. This is the spouse exemption, and it is unlimited. When the surviving spouse later dies, their estate can use both nil-rate bands (their own and any unused portion from the first spouse), giving a combined threshold of up to £1,000,000. This means IHT is only an issue when the second spouse dies and the combined estate exceeds the combined threshold.',
  },
];

export default function InheritanceTaxPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Inheritance Tax in the UK' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Inheritance Tax in the UK: Thresholds, Rates & How to Reduce It
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Inheritance tax is one of the most misunderstood taxes in the UK. Many families worry about it when they do not need to, while others pay more than necessary because they did not claim the right exemptions. This guide explains how IHT works, what the thresholds are, and the legitimate ways to reduce the bill.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£325,000</p>
          <p className="text-sm text-muted mt-1">Nil-rate band (tax-free threshold)</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£500,000</p>
          <p className="text-sm text-muted mt-1">With residence nil-rate band for direct descendants</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£1,000,000</p>
          <p className="text-sm text-muted mt-1">Combined threshold for married couples</p>
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-4 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-semibold text-foreground mb-2">{section.title}</h2>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Taper relief table */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Taper relief on gifts</h2>
      <p className="text-sm text-muted leading-relaxed mb-4">
        If the deceased made gifts exceeding the nil-rate band within 7 years of death, taper relief reduces the rate of tax charged on those gifts depending on when they were made.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-accent/50">
              <th className="text-left p-3 font-semibold text-foreground">When the gift was made</th>
              <th className="text-left p-3 font-semibold text-foreground">Tax rate</th>
              <th className="text-left p-3 font-semibold text-foreground">Reduction</th>
            </tr>
          </thead>
          <tbody>
            {TAPER_RELIEF.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-accent/50'}>
                <td className="p-3 text-foreground">{row.years}</td>
                <td className="p-3 text-muted">{row.rate}</td>
                <td className="p-3 text-muted">{row.saving}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Warning */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-12">
        <h3 className="font-semibold text-amber-800 mb-2">Deadlines matter</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          IHT must be paid within 6 months of death, and interest is charged automatically after that. The IHT400 form must be filed within 12 months. Late filing penalties start at £100 and can escalate to £3,000. If the estate includes property, you can apply to pay IHT in 10 annual instalments to avoid having to sell the property quickly.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about inheritance tax</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/inheritance-tax" guides={['/guides/executor-duties', '/guides/property-after-death', '/probate', '/costs']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised estate checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist of exactly what needs to be done for this particular estate.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

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
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'Inheritance Tax', item: 'https://helpafterloss.co.uk/guides/inheritance-tax' },
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
            headline: 'Inheritance Tax in the UK: Thresholds, Rates & How to Reduce It',
            description: 'Complete guide to UK inheritance tax: thresholds, rates, exemptions, the 7-year gift rule, and practical ways to reduce your IHT bill.',
            url: 'https://helpafterloss.co.uk/guides/inheritance-tax',
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
