import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Inheritance Tax After a Death: UK Thresholds and Exemptions (2026/27)',
  description: 'A clear guide to inheritance tax after a death in the UK. Current thresholds, rates, exemptions, the residence nil-rate band, transferable allowances, and how to pay. Updated for the 2026/27 tax year.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/inheritance-tax-guide-after-death' },
  openGraph: {
    title: 'Inheritance Tax After a Death: UK Thresholds and Exemptions (2026/27)',
    description: 'UK inheritance tax thresholds, exemptions, and how to calculate and pay IHT after someone dies. Plain English, real figures.',
    url: 'https://helpafterloss.co.uk/blog/inheritance-tax-guide-after-death',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Inheritance Tax After a Death (2026/27)',
    description: 'Thresholds, exemptions, and how to pay inheritance tax after a death.',
  },
};

export default function InheritanceTaxGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'Inheritance Tax After a Death' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 22 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>13 min read</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Inheritance Tax After a Death: UK Thresholds and Exemptions (2026/27)
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Inheritance tax is one of the most stressful parts of dealing with an estate after someone dies. The rules are complicated, the forms are long, and the tax must be paid before probate is granted. This guide explains the current thresholds, the main exemptions, and how the whole process works in plain English.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key figures for 2026/27</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Nil-rate band:</strong> £325,000 (frozen until April 2028)</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Residence nil-rate band:</strong> £175,000 (if a home is left to direct descendants)</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Combined threshold for a couple:</strong> Up to £1,000,000</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>IHT rate:</strong> 40% on the amount above the threshold</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Reduced rate:</strong> 36% if 10% or more of the estate is left to charity</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'who-pays', label: 'Who pays inheritance tax?' },
        { id: 'nil-rate-band', label: 'The nil-rate band (£325,000)' },
        { id: 'residence-nil-rate', label: 'The residence nil-rate band (£175,000)' },
        { id: 'transferable', label: 'Transferable allowances between spouses' },
        { id: 'exemptions', label: 'Main exemptions' },
        { id: 'gifts', label: 'Gifts made before death' },
        { id: 'calculating', label: 'How to calculate the tax' },
        { id: 'paying', label: 'How and when to pay' },
        { id: 'forms', label: 'Which forms to complete' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* Who pays */}
      <h2 id="who-pays" className="text-2xl font-bold text-foreground mb-6">Who pays inheritance tax?</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Inheritance tax (IHT) is paid on the estate of someone who has died, not by the people who inherit. The executor (or administrator, if there is no will) is responsible for calculating and paying the tax from the estate before distributing assets to beneficiaries. In practice, most estates do not pay any inheritance tax at all. HMRC data shows that only around 4% to 5% of UK deaths result in an IHT liability, though that percentage is rising as property values increase while the threshold stays frozen.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Even if no tax is due, you may still need to complete inheritance tax forms as part of the probate application. Whether you need to fill in the full IHT400 form or just the shorter form within the probate application depends on the size and complexity of the estate.
        </p>
      </div>

      {/* Nil-rate band */}
      <h2 id="nil-rate-band" className="text-2xl font-bold text-foreground mb-6">The nil-rate band (£325,000)</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Every individual has a nil-rate band of £325,000. This means the first £325,000 of their estate is tax-free. Anything above that threshold is taxed at 40%. The nil-rate band has been frozen at £325,000 since 2009 and the government has confirmed it will remain frozen until at least April 2028. Because property values and savings have risen significantly since 2009, more and more estates are crossing this threshold each year.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          The estate includes everything the person owned at the date of death: property, savings, investments, personal possessions, and the value of any gifts made within the 7 years before death. It also includes any assets held in certain types of trust and the payout from life insurance policies that are not written in trust.
        </p>
      </div>

      {/* Residence nil-rate band */}
      <h2 id="residence-nil-rate" className="text-2xl font-bold text-foreground mb-6">The residence nil-rate band (£175,000)</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The residence nil-rate band (RNRB) provides an additional £175,000 tax-free allowance on top of the standard nil-rate band. It applies when a property (or a share of a property) that the person lived in as their home is left to their direct descendants: children, grandchildren, stepchildren, adopted children, or foster children.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          This means a single person leaving their home to their children could have a total IHT-free allowance of £500,000 (£325,000 + £175,000). A married couple could have up to £1,000,000 between them if both allowances are transferable (see below).
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          There is an important restriction: the RNRB is tapered for estates worth more than £2,000,000. It reduces by £1 for every £2 the estate exceeds £2,000,000. This means the RNRB is completely lost when the estate is worth £2,350,000 or more.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          If the person had downsized or sold their home after 8 July 2015, a "downsizing" provision may still allow the estate to claim the RNRB, provided the smaller property (or other assets of equivalent value) is left to direct descendants.
        </p>
      </div>

      {/* Transferable */}
      <h2 id="transferable" className="text-2xl font-bold text-foreground mb-6">Transferable allowances between spouses</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          When the first spouse or civil partner dies, they often leave everything to the surviving partner. Because transfers between spouses are completely exempt from IHT (see below), the deceased spouse's nil-rate band is not used. The unused portion can then be transferred to the surviving spouse's estate when they die.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          This works on a percentage basis, not a fixed amount. If the first spouse used none of their nil-rate band, 100% transfers. If they used 50%, then 50% transfers. The transferred percentage is applied to the nil-rate band at the time of the second death, not the first. For example, if the first spouse died in 2005 when the nil-rate band was £275,000 and used none of it, 100% transfers. If the second spouse dies in 2026 when the band is £325,000, the transferred amount is 100% of £325,000 = £325,000.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          The same principle applies to the residence nil-rate band. If the first spouse did not use their RNRB, the unused portion transfers to the survivor's estate. This is how a couple can reach the combined £1,000,000 threshold.
        </p>
      </div>

      {/* Exemptions */}
      <h2 id="exemptions" className="text-2xl font-bold text-foreground mb-6">Main exemptions</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Spouse or civil partner exemption</h3>
          <p className="text-sm text-muted leading-relaxed">
            Everything left to a spouse or civil partner who is domiciled in the UK is completely exempt from IHT, regardless of the amount. This is the most important exemption and the reason most married couples pay no IHT on the first death. Note: this does not apply to unmarried partners, no matter how long they have lived together. See our guide on <Link href="/guides/cohabiting-partners" className="text-primary hover:underline">unmarried partners' rights</Link>.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Charity exemption</h3>
          <p className="text-sm text-muted leading-relaxed">
            Gifts to UK-registered charities are completely exempt from IHT. If the person leaves 10% or more of their net estate to charity, the rate of IHT on the rest drops from 40% to 36%. This can make a significant difference on large estates and sometimes means leaving more to charity actually results in beneficiaries receiving more overall.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Business Property Relief (BPR)</h3>
          <p className="text-sm text-muted leading-relaxed">
            Certain business assets can qualify for 50% or 100% relief from IHT. This includes shares in unlisted companies, business assets used in a partnership, and agricultural land and buildings. The person must have owned the assets for at least 2 years. Note: from April 2026, the government has announced changes to agricultural and business property relief. The first £1 million of combined agricultural and business property will continue to attract 100% relief, but amounts above that will be taxed at an effective rate of 20% (50% relief at the 40% IHT rate). This is a significant change for farming families.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Normal expenditure out of income</h3>
          <p className="text-sm text-muted leading-relaxed">
            Regular gifts made from income (not capital) that do not affect the giver's standard of living are exempt from IHT. This is a powerful but often overlooked exemption. For example, a parent who pays £500 a month toward a grandchild's school fees from their pension income, without reducing their own standard of living, can do so without it counting as a gift for IHT purposes.
          </p>
        </div>
      </div>

      {/* Gifts */}
      <h2 id="gifts" className="text-2xl font-bold text-foreground mb-6">Gifts made before death</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Gifts made during someone's lifetime can be brought back into the estate for IHT purposes if the person dies within 7 years of making them. These are called "potentially exempt transfers" (PETs). If the person survives 7 years, the gift is completely exempt.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If the person dies within 7 years, taper relief may reduce the tax:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Years before death</th>
                <th className="text-left py-2 pl-4 font-semibold text-foreground">Tax rate on the gift</th>
              </tr>
            </thead>
            <tbody>
              {[
                { years: '0 to 3', rate: '40%' },
                { years: '3 to 4', rate: '32%' },
                { years: '4 to 5', rate: '24%' },
                { years: '5 to 6', rate: '16%' },
                { years: '6 to 7', rate: '8%' },
                { years: '7+', rate: '0%' },
              ].map((row, i) => (
                <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card/50' : ''}`}>
                  <td className="py-2 pr-4 text-muted">{row.years}</td>
                  <td className="py-2 pl-4 text-muted">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Certain small gifts are always exempt, regardless of the 7-year rule:
        </p>
        <ul className="space-y-1.5 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Up to £3,000 per year in total (the annual exemption; can carry forward one unused year)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Small gifts of up to £250 per person per year (to different recipients from the annual exemption)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Wedding gifts: £5,000 from a parent, £2,500 from a grandparent, £1,000 from anyone else</li>
        </ul>
      </div>

      {/* Calculating */}
      <h2 id="calculating" className="text-2xl font-bold text-foreground mb-6">How to calculate the tax</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The basic calculation is:
        </p>
        <ol className="space-y-2 text-sm text-muted list-decimal list-inside mb-4">
          <li>Add up the total value of the estate (property, savings, investments, possessions, life insurance not in trust)</li>
          <li>Add back any gifts made within the last 7 years</li>
          <li>Subtract any debts (mortgage, loans, credit cards, funeral costs)</li>
          <li>Subtract any exempt assets (spouse transfers, charity gifts)</li>
          <li>This gives you the net estate</li>
          <li>Subtract the nil-rate band (£325,000) and the residence nil-rate band (£175,000 if applicable)</li>
          <li>Multiply the remaining amount by 40% (or 36% if the charity condition is met)</li>
        </ol>
        <p className="text-sm text-muted leading-relaxed">
          HMRC provides an online calculator at <a href="https://www.gov.uk/guidance/inheritance-tax-calculator" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK</a> to help with the calculation. For complex estates, getting professional advice is strongly recommended.
        </p>
      </div>

      {/* Paying */}
      <h2 id="paying" className="text-2xl font-bold text-foreground mb-6">How and when to pay</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The deadline</h3>
          <p className="text-sm text-muted leading-relaxed">
            IHT is due by the end of the sixth month after the month of death. For example, if someone dies on 15 March 2026, the tax is due by 30 September 2026. Interest is charged on late payments. You must pay at least some of the tax before applying for probate, because HMRC needs to issue a receipt (the IHT421) before the Probate Registry will process your application.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Where the money comes from</h3>
          <p className="text-sm text-muted leading-relaxed">
            This creates a difficult chicken-and-egg situation: you need to pay IHT before getting probate, but you often need probate to access the money to pay IHT. Solutions include: using the Direct Payment Scheme (banks can pay IHT directly to HMRC from the deceased's account), using joint accounts or your own savings (to be reimbursed from the estate later), or borrowing from a specialist estate administration lender.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Paying in instalments</h3>
          <p className="text-sm text-muted leading-relaxed">
            IHT on certain assets (mainly property, land, and shares in private companies) can be paid in 10 equal annual instalments. This is useful when the estate is asset-rich but cash-poor, for example when a family home needs to be sold. Interest is charged on the outstanding balance, but this can be more manageable than finding a lump sum upfront.
          </p>
        </div>
      </div>

      {/* Forms */}
      <h2 id="forms" className="text-2xl font-bold text-foreground mb-6">Which forms to complete</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The form you need depends on the size of the estate:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Excepted estates</strong> (gross value under £325,000, or under £650,000 with a transferable nil-rate band, and other conditions met): You report the estate value within the online probate application. No separate IHT form is needed.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>All other estates:</strong> Complete the full IHT400 form and any relevant supplementary pages. This is a substantial form (over 16 pages) and requires detailed valuations of every asset and liability. Submit it to HMRC with any tax payment due.</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-4">
          Full guidance is available at <a href="https://www.gov.uk/government/publications/inheritance-tax-inheritance-tax-account-iht400" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK: IHT400</a>.
        </p>
      </div>

      {/* FAQs */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {[
          { q: 'Do I need to pay inheritance tax on money I inherit?', a: 'No. IHT is paid by the estate before the money is distributed to beneficiaries. Once you receive your inheritance, you do not pay income tax or capital gains tax on it (though you may pay CGT if you later sell an inherited asset for more than its probate value).' },
          { q: 'Is life insurance subject to inheritance tax?', a: 'If the life insurance policy is written in trust, the payout goes directly to the beneficiaries and is not part of the estate. If it is not in trust, the payout forms part of the estate and may be subject to IHT. This is one of the most commonly missed planning points.' },
          { q: 'What about jointly owned property?', a: 'If the property was held as joint tenants, the deceased person\'s share passes automatically to the surviving owner and is valued for IHT purposes at the date of death. If held as tenants in common, the deceased person\'s share forms part of their estate and is distributed according to their will (or intestacy rules).' },
          { q: 'Can I reduce the IHT bill after someone has died?', a: 'Options are limited after death, but a deed of variation allows beneficiaries to redirect their inheritance within 2 years of the death. For example, a beneficiary could redirect their share to a charity or to the next generation, potentially reducing the IHT liability. All affected beneficiaries must agree.' },
        ].map((faq, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary-light rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-foreground mb-3">Need support?</h3>
        <ul className="space-y-1 text-sm text-muted">
          <li><strong>HMRC inheritance tax helpline:</strong> 0300 123 1072 (Mon-Fri 9am-5pm)</li>
          <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677 (free)</li>
          <li><strong>Samaritans:</strong> 116 123 (free, 24 hours)</li>
        </ul>
      </div>

      {/* Cross-links */}
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Other costs to expect:</strong> See our <Link href="/costs" className="text-primary hover:underline">full cost breakdown</Link> covering funeral fees, death certificates, probate, and solicitors. If you need to notify banks and financial institutions, use our <Link href="/notify" className="text-primary hover:underline">notification guide</Link> with direct bereavement phone numbers.
        </p>
      </div>

      <RelatedGuides
        currentPath="/blog/inheritance-tax-guide-after-death"
        guides={['/guides/inheritance-tax', '/costs', '/blog/how-long-does-probate-take-uk', '/notify']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need a personalised plan?</h2>
        <p className="text-muted mb-6">Our free tool creates a step-by-step checklist tailored to your situation, with deadlines calculated from the date of death.</p>
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
            headline: 'Inheritance Tax After a Death: UK Thresholds and Exemptions (2026/27)',
            description: 'A clear guide to inheritance tax after a death in the UK, covering thresholds, exemptions, and how to pay.',
            datePublished: '2026-03-22',
            dateModified: '2026-03-22',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://helpafterloss.co.uk/blog/inheritance-tax-guide-after-death',
            },
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
              { '@type': 'ListItem', position: 3, name: 'Inheritance Tax After a Death', item: 'https://helpafterloss.co.uk/blog/inheritance-tax-guide-after-death' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do I need to pay inheritance tax on money I inherit?', acceptedAnswer: { '@type': 'Answer', text: 'No. IHT is paid by the estate before distribution. Once you receive your inheritance, you do not pay income tax or capital gains tax on it.' } },
              { '@type': 'Question', name: 'Is life insurance subject to inheritance tax?', acceptedAnswer: { '@type': 'Answer', text: 'If the policy is written in trust, the payout is not part of the estate. If not in trust, it forms part of the estate and may be subject to IHT.' } },
              { '@type': 'Question', name: 'Can I reduce the IHT bill after someone has died?', acceptedAnswer: { '@type': 'Answer', text: 'A deed of variation allows beneficiaries to redirect their inheritance within 2 years of death, potentially reducing IHT. All affected beneficiaries must agree.' } },
            ],
          }),
        }}
      />
    </div>
  );
}
