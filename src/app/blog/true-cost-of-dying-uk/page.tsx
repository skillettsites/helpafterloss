import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TableOfContents } from '@/components/TableOfContents';
import { RelatedGuides } from '@/components/RelatedGuides';
import { BlogPrintButton } from '@/components/BlogPrintButton';
import { SupportCta } from '@/components/SupportCta';

export const metadata: Metadata = {
  title: 'The True Cost of Dying in the UK in 2026',
  description: 'How much does it really cost when someone dies in the UK? Full breakdown of funeral costs, death certificates, probate fees, solicitors, inheritance tax, headstones, and all the hidden costs people forget. With real figures for 2026.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/true-cost-of-dying-uk' },
  openGraph: {
    title: 'The True Cost of Dying in the UK in 2026',
    description: 'A definitive cost breakdown: funerals, certificates, probate, solicitors, inheritance tax, headstones, and the hidden expenses nobody warns you about.',
    url: 'https://helpafterloss.co.uk/blog/true-cost-of-dying-uk',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The True Cost of Dying in the UK in 2026',
    description: 'Every cost you may face when someone dies, with real 2026 figures and practical ways to reduce them.',
  },
};

const COST_SUMMARY = [
  { item: 'Death certificates', low: '£62.50', high: '£125+', note: '£12.50 each in England and Wales (usually £10 to £15 in Scotland); order at least 5' },
  { item: 'Direct cremation', low: '£1,095', high: '£2,500', note: 'No service; most affordable. UK average £1,628 (SunLife 2026)' },
  { item: 'Cremation with service', low: '£3,000', high: '£6,500', note: 'UK average £4,200 (SunLife 2026)' },
  { item: 'Burial with service', low: '£4,000', high: '£8,000+', note: 'UK average £5,440 (SunLife 2026)' },
  { item: 'Grave plot', low: '£500', high: '£5,000+', note: 'London plots can exceed £10,000' },
  { item: 'Headstone', low: '£800', high: '£3,000', note: 'Plus churchyard approval fees' },
  { item: 'Flowers', low: '£150', high: '£500', note: 'Family tributes and coffin spray' },
  { item: 'Wake / reception', low: '£300', high: '£2,000+', note: 'Venue, catering, drinks' },
  { item: 'Obituary notice', low: '£100', high: '£500', note: 'Local newspaper listing' },
  { item: 'Probate court fee', low: '£0', high: '£526', note: 'Free if estate under £5,000' },
  { item: 'Solicitor fees (probate)', low: '£2,000', high: '£15,000+', note: '1-5% of estate value' },
  { item: 'Statutory notice (London Gazette)', low: '£96.55', high: 'About £116', note: '£96.55 plus VAT; recommended to protect the executor' },
  { item: 'Post redirection', low: '£45', high: '£95', note: '3-12 months, Royal Mail, for one person' },
  { item: 'Inheritance tax', low: '£0', high: 'Unlimited', note: '40% above £325,000 nil-rate band' },
];

const HIDDEN_COSTS = [
  {
    title: 'Time off work',
    detail: 'Most employers offer 3-5 days paid leave. For many people, the practical administration of an estate takes weeks or months of time, including unpaid leave or using annual holiday. There is no statutory right to paid bereavement leave for most bereavements.',
  },
  {
    title: 'Travel costs',
    detail: 'If the person died far from where family members live, travel to register the death, attend the funeral, and sort the property can add hundreds of pounds. Fuel, trains, hotels, and parking all accumulate.',
  },
  {
    title: 'Clearing the property',
    detail: 'Clearing and cleaning a home before it is sold or the tenancy ends costs an average of £400-£1,500 for a house clearance company. If the person was a renter, you may face double rent while the estate is administered.',
  },
  {
    title: 'Storage',
    detail: 'Furniture, vehicles, and possessions that cannot be dealt with immediately may need to go into storage. Typical self-storage costs £100-£300 per month.',
  },
  {
    title: 'Property costs during probate',
    detail: 'An empty property still incurs buildings insurance (standard home insurance may not cover an empty property), utility standing charges, and potentially ground rent or service charges if it is leasehold.',
  },
  {
    title: 'Ongoing grave maintenance',
    detail: 'Cemetery fees sometimes include maintenance, but many families spend £100-£300 per year on flowers, cleaning, and upkeep of a grave.',
  },
  {
    title: 'Debt you did not know about',
    detail: 'The estate is liable for any debts the person left behind before beneficiaries inherit anything. Placing a statutory notice in the London Gazette (£96.55 plus VAT, so about £116) protects the executor from unknown creditors making claims later.',
  },
  {
    title: 'Accountant fees for tax',
    detail: 'A final self-assessment tax return is needed for the year of death. If the estate earns income during administration (rent, dividends), further returns may be required. Accountant fees: £200-£800+.',
  },
];

const SAVINGS_TIPS = [
  {
    title: 'Get at least three quotes for the funeral',
    detail: 'Funeral director prices vary by thousands of pounds within the same area. The Natural Death Centre and National Association of Funeral Directors both publish guidance on getting itemised quotes. You are not obliged to use the first funeral director you contact.',
  },
  {
    title: 'Consider direct cremation',
    detail: 'At a UK average of £1,628, direct cremation saves around £2,600 compared with a traditional attended cremation and around £3,800 compared with a traditional attended burial. You can still hold a meaningful memorial service at a later date, at a venue of your choice, at little or no cost.',
  },
  {
    title: 'Do probate yourself',
    detail: 'For straightforward estates (a property, bank accounts, known beneficiaries, no disputes), DIY probate is perfectly manageable. The government\'s online service guides you through every step. You pay only the £526 court fee, potentially saving thousands in solicitor fees.',
  },
  {
    title: 'Order enough death certificates upfront',
    detail: 'Each bank, insurer, pension provider, and institution needs an original copy. Order at least 5 when you register the death. Ordering them later through the General Register Office costs more and takes longer.',
  },
  {
    title: 'Use the Death Notification Service',
    detail: 'The free Death Notification Service (deathnotificationservice.co.uk) allows you to notify multiple banks and financial institutions at the same time, saving hours of phone calls and potentially reducing delays in accessing funds.',
  },
  {
    title: 'Claim a council tax exemption',
    detail: 'An empty property is exempt from council tax while probate is ongoing and for 6 months after probate is granted. Contact the local council to apply as soon as the property becomes empty.',
  },
  {
    title: 'Check if you qualify for Funeral Expenses Payment',
    detail: 'If you are on Universal Credit, income-related ESA, Pension Credit or Housing Benefit, you may be entitled to help from the DWP: the burial or cremation fee in full, with no cap, plus up to £1,000 for other costs (£120 if they had a pre-paid funeral plan). Call 0800 151 2012 or apply online within 6 months of the funeral, not the death.',
  },
];

const FAQ = [
  {
    q: 'How much does a funeral cost in the UK in 2026?',
    a: 'According to the SunLife Cost of Dying Report 2026, a traditional attended cremation averages £4,200 and a traditional attended burial £5,440. A simple attended funeral averages £3,828 and a traditional attended funeral £4,510. These averages hide huge variation. A direct cremation with no service starts from around £1,095, while a traditional funeral with all the extras can exceed £10,000.',
  },
  {
    q: 'What is the cheapest type of funeral in the UK?',
    a: 'A direct cremation is the cheapest option, starting from around £1,095 with the national providers, with a UK average of £1,628 (SunLife Cost of Dying Report 2026). There is no service, no mourners present, and no hearse. The person is collected, cremated, and the ashes returned to you. You can then hold a memorial service separately, on your own terms, at little or no cost.',
  },
  {
    q: 'Can I get help paying for a funeral?',
    a: 'Yes. In England and Wales, if you are on Universal Credit, income-related Employment and Support Allowance, Pension Credit or Housing Benefit, you may qualify for a DWP Funeral Expenses Payment. It covers the cremation or burial fee in full, with no cap, plus up to £1,000 for other costs (£120 if they had a pre-paid funeral plan). Apply on form SF200 within 6 months of the funeral, not the death. Scotland has its own Funeral Support Payment with a wider list of qualifying benefits. The Children\'s Funeral Fund covers burial and cremation fees for anyone under 18 in England, plus up to £300 towards a coffin.',
  },
  {
    q: 'What other costs are there when someone dies besides the funeral?',
    a: 'Beyond the funeral, costs include death certificates (£12.50 each in England and Wales, and most families need 5 or more), the probate application (£526 if the estate is worth more than £5,000, and nothing if it is not), solicitor fees if you use one, property clearance, headstone or memorial (£800 to £3,000), a statutory notice in the London Gazette (£96.55 plus VAT), post redirection (£45 to £95), ongoing grave maintenance, and potential inheritance tax. The total can be significantly more than the funeral itself.',
  },
];

export default function TrueCostPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'The True Cost of Dying in the UK' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 17 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>12 min read</span>
      </div>
      <BlogPrintButton />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        The True Cost of Dying in the UK in 2026
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone passes away, the financial reality can come as a shock. The SunLife Cost of Dying Report 2026 puts the average simple attended funeral at £3,828 and a traditional attended funeral at £4,510, and once the send-off is included the average total funeral spend is £5,140. The funeral is only the start, though. By the time you include probate, solicitors, certificates, and all the smaller costs nobody warns you about, the total often lands somewhere between £7,000 and £15,000. This article sets out every cost you are likely to face, with real 2026 figures, so you can plan and avoid surprises.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key takeaways</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> The average UK funeral costs £3,828 simple or £4,510 traditional, but total costs including probate and legal fees often reach £7,000-£15,000</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Direct cremation (from around £1,095, UK average £1,628) saves thousands compared to a traditional funeral</li>
          <li className="flex gap-2"><span className="font-bold">+</span> DIY probate can save £2,000-£15,000 in solicitor fees for straightforward estates</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Hidden costs like property maintenance, storage, and time off work are often overlooked</li>
          <li className="flex gap-2"><span className="font-bold">+</span> If you are on means-tested benefits, the DWP Funeral Expenses Payment can cover most costs</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'at-a-glance', label: 'At a glance: typical total costs' },
        { id: 'full-breakdown', label: 'Full cost breakdown' },
        { id: 'funeral-costs', label: 'Funeral costs in detail' },
        { id: 'hidden-costs', label: 'Hidden costs people forget' },
        { id: 'reduce-costs', label: 'How to reduce costs' },
        { id: 'financial-help', label: 'Financial help that may be available' },
        { id: 'faqs', label: 'Common questions about costs' },
      ]} />

      {/* At a glance summary */}
      <h2 id="at-a-glance" className="text-2xl font-bold text-foreground mb-4">At a glance: typical total costs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£1,700+</p>
          <p className="text-sm text-muted mt-1">Absolute minimum (direct cremation, DIY everything)</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£7,000-£10,000</p>
          <p className="text-sm text-muted mt-1">Typical cremation with service, DIY probate</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£15,000+</p>
          <p className="text-sm text-muted mt-1">Full traditional burial plus solicitor for probate</p>
        </div>
      </div>

      {/* Full cost table */}
      <h2 id="full-breakdown" className="text-2xl font-bold text-foreground mb-2">Full cost breakdown</h2>
      <p className="text-sm text-muted mb-6">
        Funeral cost averages are from the SunLife Cost of Dying Report 2026. Other figures reflect typical UK market rates as of mid-2026.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">Item</th>
              <th className="text-right py-3 px-4 font-semibold text-foreground whitespace-nowrap">Low estimate</th>
              <th className="text-right py-3 px-4 font-semibold text-foreground whitespace-nowrap">High estimate</th>
              <th className="text-left py-3 pl-4 font-semibold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {COST_SUMMARY.map((row, i) => (
              <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card/50' : ''}`}>
                <td className="py-3 pr-4 font-medium text-foreground">{row.item}</td>
                <td className="py-3 px-4 text-right text-muted">{row.low}</td>
                <td className="py-3 px-4 text-right text-primary font-medium">{row.high}</td>
                <td className="py-3 pl-4 text-muted">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed breakdown sections */}
      <h2 id="funeral-costs" className="text-2xl font-bold text-foreground mb-6">Funeral costs in detail</h2>

      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Direct cremation: £1,095-£2,500</h3>
          <p className="text-sm text-muted leading-relaxed">
            The UK average for a direct cremation is £1,628 in the SunLife Cost of Dying Report 2026, and the national providers publish prices from around £1,095. With a direct cremation, there is no service at the crematorium. The person is collected, cremated, and their ashes returned to you. It is a dignified option, and there is nothing to stop you holding a separate memorial service at a later date, in a garden, a church hall, or anywhere that meant something to them.{' '}See our <Link href="/blog/free-funeral-options-uk" className="text-primary hover:underline">guide to free and low-cost funeral options</Link> for more ways to reduce costs.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Cremation with a service: £3,000-£6,500</h3>
          <p className="text-sm text-muted leading-relaxed">
            The UK average for a traditional attended cremation is £4,200. This typically includes the funeral director's fees, use of the chapel of rest, a coffin, a hearse, and the cremation fee. It may or may not include flowers, an order of service, a celebrant or minister, and refreshments after. Always ask for a fully itemised quote so you know exactly what is included.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Burial with a service: £4,000-£8,000+</h3>
          <p className="text-sm text-muted leading-relaxed">
            The UK average for a traditional attended burial is £5,440. Burial is more expensive than cremation because of grave plot fees, grave digging, and ongoing memorial costs. Plot prices vary enormously: a new grave in a municipal cemetery might cost £500-£1,500 in a rural area. In inner London, the same plot can cost £5,000-£10,000 or more. Some local authorities have waiting lists for new burials.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Death certificates: £12.50 each (England and Wales)</h3>
          <p className="text-sm text-muted leading-relaxed">
            In England and Wales, each certified copy of a death certificate costs £12.50. In Scotland the fee for an extract is set by the council and is usually £10 to £15. Most families need at least five: one each for the main bank account, any additional savings or investment accounts, the pension provider, the mortgage lender or insurer, and one spare. Ordering them all at registration is cheaper and faster than ordering them individually later through the General Register Office.{' '}Our <Link href="/blog/death-certificate-how-many-copies" className="text-primary hover:underline">death certificate guide</Link> explains how many copies you need and why.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Headstone and memorial: £800-£3,000</h3>
          <p className="text-sm text-muted leading-relaxed">
            A simple kerbed headstone in granite typically starts at £800-£1,200. More elaborate stones, or those with portraits, carvings, or premium materials, can reach £2,500-£3,000. Most churchyards have regulations about the size, material, and design of memorials. Allow 3-6 months for a headstone to be installed after burial, as the ground needs time to settle.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Probate and legal costs</h3>
          <p className="text-sm text-muted leading-relaxed">
            The probate court fee is £526 for any estate valued over £5,000. If the estate is below £5,000, there is no fee. If you use a solicitor to handle probate, they typically charge 1-5% of the estate value, or hourly rates of £150-£400. For a £300,000 estate, that means £3,000-£15,000 in solicitor fees. Most straightforward estates can be handled without a solicitor using the government's online probate service.{' '}See our <Link href="/blog/bank-probate-thresholds-2026" className="text-primary hover:underline">bank probate thresholds guide</Link> for how much each bank will release without probate.
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Inheritance tax</h3>
          <p className="text-sm text-muted leading-relaxed">
            Inheritance tax is charged at 40% on the portion of an estate above the nil-rate band. The standard nil-rate band is £325,000. If the person owned a home and left it to direct descendants, an additional residence nil-rate band of up to £175,000 applies, bringing the potential threshold to £500,000. Married couples and civil partners can combine their allowances, potentially shielding up to £1 million. Gifts made more than 7 years before death are generally exempt.
          </p>
        </div>
      </div>

      {/* Hidden costs */}
      <h2 id="hidden-costs" className="text-2xl font-bold text-foreground mb-4">Hidden costs people forget</h2>
      <p className="text-sm text-muted mb-6">
        These are the costs that rarely appear in any guide but can add significantly to the total.
      </p>
      <div className="space-y-4 mb-12">
        {HIDDEN_COSTS.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Ways to reduce costs */}
      <h2 id="reduce-costs" className="text-2xl font-bold text-foreground mb-4">How to reduce costs</h2>
      <div className="space-y-4 mb-12">
        {SAVINGS_TIPS.map((tip, i) => (
          <div key={i} className="bg-success-light rounded-xl p-6">
            <h3 className="font-semibold text-green-800 mb-2">{tip.title}</h3>
            <p className="text-sm text-green-800/80 leading-relaxed">{tip.detail}</p>
          </div>
        ))}
      </div>

      {/* Financial help */}
      <h2 id="financial-help" className="text-2xl font-bold text-foreground mb-4">Financial help that may be available</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">DWP Funeral Expenses Payment</h3>
          <p className="text-sm text-muted leading-relaxed">
            In England and Wales, you may qualify if you are on Universal Credit, income-related Employment and Support Allowance, Pension Credit or Housing Benefit, or if you have a Support for Mortgage Interest loan. The payment covers the cremation or burial fee in full, with no cap on that part, plus up to £1,000 for other costs such as the funeral director's fee, the coffin and flowers. If they had a pre-paid funeral plan, that £1,000 drops to £120. Apply on form SF200 within 6 months of the funeral, not the death. Call 0800 151 2012 or apply at gov.uk. The qualifying list has been narrowed in recent years, so if you are on an older benefit such as Income Support it is still worth ringing to check. Scotland has its own Funeral Support Payment, with a wider list that includes Income Support and income-based Jobseeker's Allowance, and a flat rate of £1,327.75 (£162.05 if there was a pre-paid plan).
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Children's Funeral Fund</h3>
          <p className="text-sm text-muted leading-relaxed">
            In England, the Children's Funeral Fund covers burial or cremation fees for anyone under 18, or for a baby born after 24 weeks of pregnancy, plus up to £300 towards a coffin, shroud or casket. There is no means test. The funeral director applies directly on your behalf. Wales waives the burial and cremation fees and adds a £500 contribution towards other costs. In Scotland, councils do not charge burial or cremation fees for under-18s and there is nothing to apply for. Northern Ireland pays a lump sum of £3,441 towards the funeral.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Bereavement Support Payment</h3>
          <p className="text-sm text-muted leading-relaxed">
            For spouses and civil partners who were under State Pension age when their partner died. The higher rate (where you have dependent children) is £3,500 as a lump sum plus £350 per month for 18 months. The standard rate is £2,500 plus £100 per month. See our{' '}
            <Link href="/guides/bereavement-benefits" className="text-primary hover:underline font-medium">bereavement benefits guide</Link>
            {' '}for a full list of what you may be entitled to.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Funeral costs as a priority debt</h3>
          <p className="text-sm text-muted leading-relaxed">
            It is worth knowing that reasonable funeral costs are treated as a priority debt of the estate. This means they can be paid from the person's bank accounts before the estate is formally distributed. Most banks will release funds directly to the funeral director on production of the invoice and a death certificate, even before probate is granted. Ask the funeral director and bank about this arrangement.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Common questions about costs</h2>
      <div className="space-y-4 mb-12">
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

      {/* Cross-links */}
      <SupportCta />
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Save time on the admin:</strong> Our <Link href="/notify" className="text-primary hover:underline">notification guide</Link> lists every organisation you need to contact with direct phone numbers. Use our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> and <Link href="/call-scripts" className="text-primary hover:underline">call scripts</Link> to avoid repeating yourself. If you are in <Link href="/guide/scotland" className="text-primary hover:underline">Scotland</Link> or <Link href="/guide/northern-ireland" className="text-primary hover:underline">Northern Ireland</Link>, costs and processes differ.
        </p>
      </div>

      <RelatedGuides
        currentPath="/blog/true-cost-of-dying-uk"
        guides={['/costs', '/notify', '/template-letters', '/blog/free-funeral-options-uk']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised cost estimate</h2>
        <p className="text-muted mb-6">Our free guide asks about your specific situation and tells you exactly which costs apply to you, with links to every resource you need.</p>
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
            image: 'https://helpafterloss.co.uk/opengraph-image',
            headline: 'The True Cost of Dying in the UK in 2026',
            description: 'A definitive breakdown of every cost you may face when someone dies in the UK, with real 2026 figures and practical ways to reduce costs.',
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
              '@id': 'https://helpafterloss.co.uk/blog/true-cost-of-dying-uk',
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
              { '@type': 'ListItem', position: 2, name: 'Guides & Articles', item: 'https://helpafterloss.co.uk/blog' },
              { '@type': 'ListItem', position: 3, name: 'The True Cost of Dying in the UK in 2026', item: 'https://helpafterloss.co.uk/blog/true-cost-of-dying-uk' },
            ],
          }),
        }}
      />
    </div>
  );
}
