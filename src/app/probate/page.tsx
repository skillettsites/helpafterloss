import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Probate Guide UK 2026 - How to Apply, Costs, Timelines, DIY vs Solicitor',
  description: 'Complete UK probate guide for 2026. Learn when you need probate, how to apply (online or by post), court fees (£300), solicitor costs, DIY probate steps, and how long it takes. Covers England, Wales, Scotland, and Northern Ireland.',
  alternates: { canonical: 'https://helpafterloss.co.uk/probate' },
  openGraph: {
    title: 'Probate Guide UK 2026 - How to Apply, Costs, Timelines, DIY vs Solicitor',
    description: 'Everything you need to know about probate in the UK. When you need it, how to apply, costs, DIY vs solicitor, and how long it takes.',
    url: 'https://helpafterloss.co.uk/probate',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Probate Guide 2026 - Costs, Timelines, and How to Apply',
    description: 'A plain-English guide to probate for England, Wales, Scotland, and Northern Ireland. Updated for 2026.',
  },
};

const FAQ = [
  {
    q: 'What is probate?',
    a: 'Probate is the legal process of proving that a will is valid and giving the executor the authority to deal with the estate. If there is no will, the equivalent process gives "Letters of Administration" to the closest relative (called the administrator). In Scotland, the process is called "Confirmation". The term "probate" is often used loosely to cover all of these.',
  },
  {
    q: 'Do I need probate?',
    a: 'You usually need probate if the person owned property in their sole name, had savings above the bank\'s threshold (typically £5,000 to £50,000, varies by bank), or had investments. You usually do not need probate if all assets were jointly owned (they pass automatically to the surviving owner), or if the estate is small and below bank thresholds. If in doubt, contact the relevant banks and they will tell you whether they require a grant.',
  },
  {
    q: 'How do I apply for probate myself?',
    a: 'First, value the estate by listing all assets and debts. Then complete the inheritance tax form (or report values on the application for simpler estates). Submit form PA1P (with a will) or PA1A (without a will) to the Probate Registry, along with the original will (if applicable), the death certificate, and the £300 court fee. You can apply online at gov.uk/applying-for-probate. The Probate Registry will process it and post you the grant.',
  },
  {
    q: 'How long does probate take in 2026?',
    a: 'The Probate Registry currently takes around 12 to 16 weeks to process applications, though complex cases or those requiring extra checks can take longer. The entire estate administration, from death to final distribution, typically takes 6 to 18 months depending on complexity, whether property needs to be sold, and whether there are any disputes.',
  },
  {
    q: 'How much does probate cost in 2026?',
    a: 'The court fee is £300 for estates over £5,000 (free if under). If you use a solicitor, expect to pay 1% to 5% of the estate value, or hourly rates of £150 to £400 or more. For a £300,000 estate, solicitor fees might range from £3,000 to £15,000. Many straightforward estates can be handled with DIY probate, saving thousands.',
  },
  {
    q: 'Can I do probate myself without a solicitor?',
    a: 'Yes. For straightforward estates with one property, known beneficiaries, no disputes, and no business interests, DIY probate is perfectly manageable. The government website and helpline (0300 303 0648) guide you through each step. Consider a solicitor if the estate is complex, there are disputes, the person owned a business, there are assets abroad, or there is inheritance tax to pay.',
  },
  {
    q: 'What is the difference between Grant of Probate and Letters of Administration?',
    a: 'Grant of Probate is issued when there is a valid will. The executor named in the will applies for it. Letters of Administration is issued when there is no will (or the named executors cannot or will not act). The closest living relative, usually the spouse then children, applies for it. Both give legal authority to deal with the estate.',
  },
  {
    q: 'What happens if there is no will?',
    a: 'If someone dies without a will (intestate), the estate is distributed according to the rules of intestacy. In England and Wales, the spouse receives the first £322,000 plus personal possessions, with the remainder split between the spouse and children. If there is no spouse, the children inherit everything. Unmarried partners receive nothing under intestacy rules regardless of how long they lived together.',
  },
  {
    q: 'What happens in Scotland?',
    a: 'In Scotland, probate is called "Confirmation". You apply to the Sheriff Court rather than the Probate Registry. The process is similar but uses different forms. Estates under £36,000 can use a simplified "small estate" process through the Sheriff Clerk\'s office without a solicitor. Scotland also has "Legal Rights" which give the spouse and children a fixed share of moveable property, even if the will says otherwise.',
  },
  {
    q: 'Do I need to pay inheritance tax before probate?',
    a: 'If the estate is above the inheritance tax threshold (£325,000, or up to £500,000 with the residence nil-rate band), you may need to pay at least some inheritance tax before probate is granted. You can sometimes arrange to pay from the deceased\'s bank account using form IHT423, or borrow from a bank to make the payment. Tax on property can be paid in 10 annual instalments.',
  },
];

export default function ProbatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs items={[
        { label: 'Probate: Everything You Need to Know' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Probate: Everything You Need to Know
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        Probate can seem daunting, but for many estates it is a straightforward process you can handle yourself. This guide explains when you need it, how to apply, what it costs, and when to get professional help. Updated for 2026.
      </p>

      {/* Key at a glance */}
      <div className="bg-card rounded-xl border border-border p-5 md:p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-3">Probate at a glance</h2>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[100px] flex-shrink-0">Court fee:</span>
            <span>£300 (free for estates under £5,000)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[100px] flex-shrink-0">Processing:</span>
            <span>12 to 16 weeks from the Probate Registry</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[100px] flex-shrink-0">Total time:</span>
            <span>6 to 18 months from death to final distribution</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[100px] flex-shrink-0">DIY:</span>
            <span>Suitable for straightforward estates; saves thousands in solicitor fees</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[100px] flex-shrink-0">Apply:</span>
            <span>Online at gov.uk/applying-for-probate or by post</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-[100px] flex-shrink-0">Helpline:</span>
            <span><a href="tel:03003030648" className="text-primary hover:underline">0300 303 0648</a> (Probate Registry, Mon-Fri 9am-1pm)</span>
          </li>
        </ul>
      </div>

      {/* Quick summary stats */}
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

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-5 md:p-6 mb-10" aria-label="Page sections">
        <h2 className="font-semibold text-foreground mb-3">In this guide</h2>
        <ul className="space-y-2.5">
          <li><a href="#do-i-need-probate" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Do I need probate?</a></li>
          <li><a href="#how-much" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">How much does probate cost?</a></li>
          <li><a href="#how-long" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">How long does probate take?</a></li>
          <li><a href="#steps" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Step-by-step process</a></li>
          <li><a href="#diy-vs-solicitor" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">DIY vs solicitor</a></li>
          <li><a href="#nations" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Scotland and Northern Ireland</a></li>
          <li><a href="#faq" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Common questions</a></li>
        </ul>
      </nav>

      {/* Do I need probate */}
      <section id="do-i-need-probate" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">Do I need probate?</h2>
        <p className="text-muted leading-relaxed mb-4">
          Not every estate needs probate. Here is a quick way to work out whether you need it:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-success-light rounded-xl p-5">
            <h3 className="font-semibold text-green-800 mb-2">You probably do NOT need probate if:</h3>
            <ul className="space-y-2 text-sm text-green-800/80">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                All assets were jointly owned (they pass automatically)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Total savings are below each bank's threshold
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Life insurance was written in trust
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                The estate is very small (under £5,000)
              </li>
            </ul>
          </div>
          <div className="bg-urgent-light rounded-xl p-5">
            <h3 className="font-semibold text-rose-800 mb-2">You probably DO need probate if:</h3>
            <ul className="space-y-2 text-sm text-rose-800/80">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-urgent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                The person owned property in their sole name
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-urgent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                Savings in sole accounts exceed bank thresholds
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-urgent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                The person had stocks, shares, or investments
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-urgent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                The Land Registry needs to transfer a property
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted leading-relaxed">
          If you are unsure, contact each bank and financial institution holding the person's assets. They will tell you whether they need a grant of probate before releasing funds. Each bank sets its own threshold, typically between £5,000 and £50,000.
        </p>
      </section>

      {/* Featured snippet targets */}
      <section id="how-much" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-3">How much does probate cost?</h2>
        <p className="text-muted leading-relaxed mb-4">
          Probate costs £300 as a court fee, or nothing if the estate is valued under £5,000. If you use a solicitor, expect to pay £2,000 to £5,000 for a typical estate, though complex estates can cost significantly more. DIY probate is free apart from the court fee.
        </p>
        <div className="bg-card rounded-xl border border-border overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-light">
                <th className="text-left p-4 font-semibold text-foreground">Cost</th>
                <th className="text-right p-4 font-semibold text-foreground">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-4 text-muted">Court fee (estate over £5,000)</td><td className="p-4 text-right font-medium text-foreground">£300</td></tr>
              <tr><td className="p-4 text-muted">Court fee (estate under £5,000)</td><td className="p-4 text-right font-medium text-success">Free</td></tr>
              <tr><td className="p-4 text-muted">Extra copies of the grant</td><td className="p-4 text-right font-medium text-foreground">£1.50 each</td></tr>
              <tr><td className="p-4 text-muted">Solicitor (simple estate)</td><td className="p-4 text-right font-medium text-foreground">£2,000 - £5,000</td></tr>
              <tr><td className="p-4 text-muted">Solicitor (complex estate)</td><td className="p-4 text-right font-medium text-foreground">£5,000 - £15,000+</td></tr>
              <tr><td className="p-4 text-muted">Statutory notice (The Gazette)</td><td className="p-4 text-right font-medium text-foreground">£80 - £150</td></tr>
              <tr className="bg-primary-light"><td className="p-4 font-semibold text-foreground">DIY probate total</td><td className="p-4 text-right font-bold text-primary">£300 - £450</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted">
          Solicitor costs vary based on estate complexity. Some charge a percentage (1-5%), others charge hourly rates (£150-£400+). Always ask for a fixed-fee quote.
        </p>
      </section>

      <section id="how-long" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-3">How long does probate take?</h2>
        <p className="text-muted leading-relaxed mb-4">
          Probate typically takes 6 to 12 months from application to final distribution of the estate. The application itself takes 12 to 16 weeks to process by the Probate Registry. Simple estates with straightforward assets can be resolved faster, while complex estates involving property sales or inheritance tax often take longer.
        </p>
        <div className="bg-card rounded-xl border border-border p-5 md:p-6 mb-4">
          <h3 className="font-semibold text-foreground mb-3">Typical timeline</h3>
          <div className="space-y-3 text-sm text-muted">
            <div className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[120px] flex-shrink-0">Week 1-4:</span>
              <span>Value the estate, gather documents, complete IHT forms</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[120px] flex-shrink-0">Week 4-6:</span>
              <span>Submit the probate application</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[120px] flex-shrink-0">Week 6-22:</span>
              <span>Probate Registry processes the application (12-16 weeks)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[120px] flex-shrink-0">Week 22-30:</span>
              <span>Collect assets, pay debts, place statutory notices</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-semibold text-primary min-w-[120px] flex-shrink-0">Week 30+:</span>
              <span>Distribute estate to beneficiaries, prepare estate accounts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section id="steps" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-step probate process</h2>
        <div className="bg-primary-light rounded-lg p-4 mb-6">
          <p className="text-sm text-foreground">
            <strong>New to this?</strong> If you have been named as executor in the will, read our guide on <Link href="/guides/executor-duties" className="text-primary hover:underline">executor duties and responsibilities</Link> before you begin. It covers what you are legally required to do and where your liability sits.
          </p>
        </div>
        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Check if probate is needed', desc: 'Contact each bank and financial institution. If the total in sole-name accounts is below their threshold (varies by bank, usually £5,000-50,000), they may release funds without probate. If the person owned property in their sole name, probate is almost always needed.' },
            { step: '2', title: 'Value the estate', desc: 'List everything the person owned and owed. Get a property valuation (estate agents can provide free ones). Check all bank statements, investments, pensions, and personal possessions. Subtract debts, mortgages, and loans. You need an accurate total for the inheritance tax form.' },
            { step: '3', title: 'Complete the inheritance tax form', desc: 'If the estate is below the IHT threshold (£325,000, or up to £500,000 with the residence nil-rate band), report the estate values as part of the probate application itself. If above, complete form IHT400 (the detailed form) and send it to HMRC. Pay any IHT due within 6 months of death. You can arrange to pay tax on property in 10 annual instalments.' },
            { step: '4', title: 'Apply for probate', desc: 'Complete form PA1P (with a will) or PA1A (without a will). You can apply online at gov.uk/applying-for-probate or download paper forms. You will need the original will, the death certificate, and the completed IHT information. Pay the £300 court fee. Order extra sealed copies of the grant (£1.50 each) as banks and the Land Registry need them.' },
            { step: '5', title: 'Place statutory notices', desc: 'Once you have submitted the application, place a notice in The London Gazette (around £80) and a local newspaper to protect yourself from unknown creditors. This gives creditors 2 months to come forward. This step is strongly recommended.' },
            { step: '6', title: 'Wait for the grant', desc: 'The Probate Registry processes the application. Current processing time is 12-16 weeks. You may be asked to attend an interview or provide additional information. If there are any issues, the Registry will write to you.' },
            { step: '7', title: 'Administer the estate', desc: 'Once you receive the grant, send certified copies to banks, the Land Registry, and other institutions. Collect in all assets, pay all debts and any outstanding tax, and distribute to beneficiaries according to the will (or intestacy rules). Keep detailed records of every transaction for the estate accounts.' },
          ].map(s => (
            <div key={s.step} className="bg-card rounded-xl border border-border p-5 md:p-6 flex gap-4">
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
      </section>

      {/* DIY vs Solicitor */}
      <section id="diy-vs-solicitor" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">DIY probate vs using a solicitor</h2>
        <p className="text-muted leading-relaxed mb-4">
          Many people assume they need a solicitor for probate, but for straightforward estates, DIY probate is perfectly manageable and can save thousands of pounds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-3">DIY probate works well when:</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>The estate has straightforward assets (house, savings, pension)</li>
              <li>All beneficiaries are known and in agreement</li>
              <li>There are no disputes about the will</li>
              <li>There is no inheritance tax to pay</li>
              <li>There are no business assets or assets abroad</li>
              <li>You have time to handle paperwork and phone calls</li>
            </ul>
            <p className="text-sm font-medium text-success mt-3">Cost: approximately £300 to £450</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-3">Consider a solicitor when:</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>The estate is complex or high-value</li>
              <li>There are disputes between beneficiaries</li>
              <li>The person owned a business</li>
              <li>There are assets in multiple countries</li>
              <li>There is inheritance tax to calculate and pay</li>
              <li>The will is contested or unclear</li>
              <li>You do not have time to manage the process</li>
            </ul>
            <p className="text-sm font-medium text-foreground mt-3">Cost: typically £2,000 to £15,000+</p>
          </div>
        </div>
        <div className="bg-warm border border-warm-border rounded-xl p-5">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Tip:</strong> If you choose a solicitor, always get a fixed-fee quote in writing before you agree to anything. Some solicitors charge a percentage of the estate value, which can be very expensive. For a £400,000 estate at 2%, that is £8,000. A fixed fee for the same work might be £3,000 to £4,000. You can also use a solicitor for just part of the process, such as completing the IHT forms, and handle the rest yourself.
          </p>
        </div>
      </section>

      {/* Nation-specific guides */}
      <section id="nations" className="mb-10 scroll-mt-20">
        <div className="bg-card rounded-xl border border-border p-5 md:p-6">
          <h2 className="font-semibold text-foreground mb-3">Probate in Scotland or Northern Ireland?</h2>
          <p className="text-sm text-muted leading-relaxed mb-3">
            The process above covers England and Wales. Scotland and Northern Ireland have different systems:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/guide/scotland" className="flex-1 bg-primary-light rounded-lg p-4 hover:bg-primary/10 transition-colors group">
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Scotland</p>
              <p className="text-xs text-muted mt-1">Confirmation via Sheriff Court, small estates under £36,000, legal rights</p>
            </Link>
            <Link href="/guide/northern-ireland" className="flex-1 bg-primary-light rounded-lg p-4 hover:bg-primary/10 transition-colors group">
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Northern Ireland</p>
              <p className="text-xs text-muted mt-1">Belfast Probate Office, sliding scale fees, no online applications</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about probate</h2>
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

      <div className="bg-primary-light rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need to know if probate applies to you?</h2>
        <p className="text-muted mb-6">Our personalised guide will tell you exactly what legal steps you need to take based on your specific situation.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
        <p className="text-sm text-muted mt-3">Free. No sign-up required. Takes about 3 minutes.</p>
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
            '@type': 'Article',
            headline: 'Probate Guide UK 2026 - How to Apply, Costs, Timelines',
            description: 'Complete UK probate guide for 2026. Learn when you need probate, how to apply, court fees, solicitor costs, and DIY probate steps.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-20',
            author: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            publisher: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            mainEntityOfPage: 'https://helpafterloss.co.uk/probate',
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
