import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';
import { MidPageCta } from '@/components/MidPageCta';

export const metadata: Metadata = {
  title: 'Bereavement Benefits: Every Payment You Can Claim',
  description: 'A complete guide to every bereavement benefit available in the UK. Bereavement Support Payment, Funeral Expenses Payment, Guardian\'s Allowance, Pension Credit, Universal Credit, and more. Find out what you are entitled to and how to claim.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/bereavement-benefits' },
  openGraph: {
    title: 'Bereavement Benefits: Every Payment You Can Claim',
    description: 'Every benefit available after bereavement in the UK, who qualifies, and how to claim. Don\'t miss out on payments you are entitled to.',
    url: 'https://helpafterloss.co.uk/guides/bereavement-benefits',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bereavement Benefits: Every Payment You Can Claim',
    description: 'Every UK bereavement benefit explained, with eligibility criteria and how to claim.',
  },
};

const QUICK_CHECKS = [
  {
    title: 'Did your spouse or civil partner die?',
    benefit: 'Bereavement Support Payment',
    amount: 'Up to £3,500 + £350/month',
    href: '#bsp',
    eligible: 'Spouse/civil partner under State Pension age',
  },
  {
    title: 'Are you on means-tested benefits?',
    benefit: 'Funeral Expenses Payment',
    amount: 'Up to £1,000 + burial/cremation fees',
    href: '#funeral-expenses',
    eligible: 'Universal Credit, Pension Credit, and others',
  },
  {
    title: 'Did a child under 18 die?',
    benefit: "Children's Funeral Fund",
    amount: 'Burial/cremation fees covered',
    href: '#childrens-fund',
    eligible: 'No means test. England only.',
  },
  {
    title: 'Are you now caring for orphaned children?',
    benefit: "Guardian's Allowance",
    amount: '£21.75 per week, per child',
    href: '#guardians',
    eligible: 'Both parents must have died',
  },
  {
    title: 'Has your income dropped significantly?',
    benefit: 'Pension Credit or Universal Credit',
    amount: 'Varies by income and circumstances',
    href: '#income-benefits',
    eligible: 'Depends on age and income',
  },
  {
    title: 'Did someone die serving in the armed forces?',
    benefit: 'War Pension / AFCS',
    amount: 'Lump sum and ongoing pension',
    href: '#armed-forces',
    eligible: 'Widows, widowers, dependants',
  },
];

const FAQ = [
  {
    q: 'Do I have to claim bereavement benefits? Will they be paid automatically?',
    a: 'No. Almost all bereavement benefits require you to make a claim. They are not paid automatically, even if DWP is already aware of the death. This is one of the most important things to know: you must actively claim what you are entitled to. Many people miss out simply because they did not know the benefit existed or ran out of time.',
  },
  {
    q: 'Is there a time limit for claiming Bereavement Support Payment?',
    a: 'Yes, and it is strict. You must claim within 21 months of your partner\'s death. If you claim within 3 months, you receive the full 18 monthly payments. Claim later and you receive fewer payments. Do not delay.',
  },
  {
    q: 'Will claiming benefits affect my other income or savings?',
    a: 'Bereavement Support Payment is not means-tested and does not affect most other benefits. It is also disregarded in Universal Credit calculations for 12 months. Funeral Expenses Payment, Pension Credit, and Universal Credit are all means-tested, so your income and savings will be taken into account.',
  },
  {
    q: 'What if I was not married but we lived together?',
    a: 'Bereavement Support Payment is only available to married couples and civil partners. Cohabiting partners who were not legally married or in a civil partnership cannot claim it, regardless of how long they lived together. This is one of the few areas where the law still draws a sharp distinction.',
  },
  {
    q: 'Can I claim benefits if I am working?',
    a: 'Yes. Bereavement Support Payment can be claimed even if you are working full time. The payment is not affected by your employment status or earnings. Some income-related benefits like Universal Credit and Pension Credit will take your earnings into account.',
  },
  {
    q: 'Will I need to pay tax on bereavement benefits?',
    a: 'Bereavement Support Payment is not taxable and does not count as income. Funeral Expenses Payment is also not taxable. If you receive a widowed parent\'s pension or war pension, those are generally taxable income. Check with HMRC if you are unsure.',
  },
];

export default function BereavementBenefitsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Bereavement Benefits: Every Payment You Can Claim' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Bereavement Benefits: Every Payment You Can Claim
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-6">
        When someone dies, a range of financial support is available from the government and other organisations. Many people never claim what they are fully entitled to, either because they do not know it exists or because the paperwork feels too much to deal with at a difficult time. This guide covers every benefit, who qualifies, and how to claim.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
        alt="Person reviewing important paperwork at a desk"
        credit="Scott Graham"
        creditUrl="https://unsplash.com/@homajob"
      />

      {/* Empathy callout */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>A note before you begin:</strong> You have earned these benefits through National Insurance contributions made over a working lifetime. There is no shame in claiming what you are entitled to. These payments exist precisely for moments like this, and claiming them is the sensible thing to do.
        </p>
      </div>

      {/* Quick eligibility check */}
      <h2 className="text-2xl font-bold text-foreground mb-4">Quick eligibility check</h2>
      <p className="text-muted mb-6 text-sm leading-relaxed">Find your situation below to jump to the right benefit.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {QUICK_CHECKS.map((c, i) => (
          <a key={i} href={c.href} className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group block">
            <p className="text-xs text-muted uppercase tracking-wide mb-1">{c.title}</p>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{c.benefit}</h3>
            <p className="text-primary font-bold text-sm mb-1">{c.amount}</p>
            <p className="text-xs text-muted">{c.eligible}</p>
          </a>
        ))}
      </div>

      {/* Bereavement Support Payment */}
      <div id="bsp" className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-xl font-bold text-foreground">Bereavement Support Payment</h2>
          <span className="text-primary font-bold ml-4 flex-shrink-0 text-sm">Key benefit</span>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">
          This is the main financial support for people who have lost a spouse or civil partner. It replaced the old Widowed Parent's Allowance and Bereavement Allowance in 2017.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="font-semibold text-foreground text-sm mb-1">Higher rate (with children)</p>
            <p className="text-primary font-bold">£3,500 lump sum</p>
            <p className="text-primary font-bold">+ £350/month for 18 months</p>
          </div>
          <div className="bg-background rounded-lg p-4 border border-border">
            <p className="font-semibold text-foreground text-sm mb-1">Standard rate (no children)</p>
            <p className="text-primary font-bold">£2,500 lump sum</p>
            <p className="text-primary font-bold">+ £100/month for 18 months</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted leading-relaxed">
          <p><strong className="text-foreground">Who qualifies:</strong> You must have been married to or in a civil partnership with the person who died. You must be under State Pension age. Your partner must have paid National Insurance contributions for at least 25 weeks, or died as a result of a work-related accident or disease.</p>
          <p><strong className="text-foreground">Time limit:</strong> You must claim within 21 months of the death. Claim within 3 months to receive the full 18 monthly payments.</p>
          <p><strong className="text-foreground">How to claim:</strong> Call 0800 731 0469 or apply online at gov.uk/bereavement-support-payment. You will need the death certificate and your National Insurance number.</p>
          <p><strong className="text-foreground">Tax status:</strong> Not taxable. Not counted as income for Universal Credit for the first 12 months.</p>
        </div>
      </div>

      {/* Funeral Expenses Payment */}
      <div id="funeral-expenses" className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-3">Funeral Expenses Payment</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If you are on certain means-tested benefits, the government can help with funeral costs. This does not cover the full cost of a funeral, but it covers the most significant expenses.
        </p>
        <div className="bg-background rounded-lg p-4 border border-border mb-4">
          <p className="font-semibold text-foreground text-sm mb-1">What is covered</p>
          <ul className="text-sm text-muted leading-relaxed space-y-1 mt-2">
            <li>Burial or cremation fees in full</li>
            <li>Up to £1,000 towards other funeral expenses (funeral director fees, coffin, etc.)</li>
            <li>Travel costs to arrange or attend the funeral</li>
            <li>Death certificates</li>
          </ul>
        </div>
        <div className="space-y-2 text-sm text-muted leading-relaxed">
          <p><strong className="text-foreground">Who qualifies:</strong> You must be receiving Universal Credit, Pension Credit, Housing Benefit, Income Support, income-based Jobseeker's Allowance, income-related Employment and Support Allowance, or Child Tax Credit. You must be responsible for paying for the funeral (as partner, close relative, or close friend with no closer relative).</p>
          <p><strong className="text-foreground">Time limit:</strong> You must apply within 6 months of the funeral on form SF200. Apply as soon as possible.</p>
          <p><strong className="text-foreground">How to claim:</strong> Call 0800 731 0469 or get form SF200 from a Jobcentre Plus.</p>
          <p><strong className="text-foreground">Important note:</strong> If the deceased had money in their estate, DWP will recover the payment from it. This does not affect your entitlement to claim.</p>
        </div>
      </div>

      {/* Children's Funeral Fund */}
      <div id="childrens-fund" className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-3">Children's Funeral Fund</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If a child under 18 dies (or a baby is stillborn after 24 weeks of pregnancy), the Children's Funeral Fund covers the burial or cremation costs in England. There is no means test: any family qualifies regardless of income or savings.
        </p>
        <div className="space-y-2 text-sm text-muted leading-relaxed">
          <p><strong className="text-foreground">What is covered:</strong> Burial or cremation fees, the coffin or casket, and in some cases the funeral director's basic disbursements.</p>
          <p><strong className="text-foreground">How it works:</strong> The funeral director claims directly from the government on your behalf. You do not need to apply or pay upfront for these costs.</p>
          <p><strong className="text-foreground">Scotland and Wales:</strong> Scotland has a similar scheme. Wales is expected to introduce one. Check with your local council.</p>
          <p><strong className="text-foreground">Important:</strong> Tell the funeral director at the first meeting that you want to use the Children's Funeral Fund. They will handle the paperwork.</p>
        </div>
      </div>

      {/* Guardian's Allowance */}
      <div id="guardians" className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-3">Guardian's Allowance</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If you are raising a child whose parents have both died, you may be entitled to Guardian's Allowance on top of Child Benefit.
        </p>
        <div className="bg-background rounded-lg p-4 border border-border mb-4">
          <p className="text-primary font-bold">£21.75 per week per child</p>
          <p className="text-sm text-muted mt-1">(2024-25 rate, paid on top of Child Benefit)</p>
        </div>
        <div className="space-y-2 text-sm text-muted leading-relaxed">
          <p><strong className="text-foreground">Who qualifies:</strong> Both parents must have died, or one parent has died and the other is untraceable or in prison for at least 2 years.</p>
          <p><strong className="text-foreground">How to claim:</strong> Complete form BG1, available from gov.uk or your local HMRC office.</p>
          <p><strong className="text-foreground">Tax status:</strong> Not taxable and does not affect other benefits.</p>
        </div>
      </div>

      <MidPageCta
        heading="Find out exactly which benefits apply to you"
        text="Answer a few questions about your situation and we will show you which benefits you can claim and how to apply for each one."
      />

      {/* Armed Forces */}
      <div id="armed-forces" className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-3">War Pension and Armed Forces Compensation</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If someone died as a result of service in the armed forces, or if an ex-serviceperson has died, there are specific schemes providing ongoing financial support for dependants.
        </p>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <div>
            <p className="font-semibold text-foreground">War Widow's or Widower's Pension</p>
            <p>For spouses and civil partners of service personnel who died due to service before 6 April 2005. A weekly pension based on rank and circumstances. Contact Veterans UK on 0808 1914 218.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Armed Forces Compensation Scheme (AFCS)</p>
            <p>For deaths and injuries from service on or after 6 April 2005. A lump-sum Survivor's Guaranteed Income Payment (SGIP) and bereavement grant may be available. Contact Veterans UK.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Service Attributed Death</p>
            <p>If death is wholly or partly caused by service, dependants may receive a higher rate pension. The Royal British Legion can provide free advice and help with claims: 0808 802 8080.</p>
          </div>
        </div>
      </div>

      {/* Income-related benefits */}
      <div id="income-benefits" className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-3">Changes to income-related benefits</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          When a partner or spouse dies, your household income often changes significantly. You may become newly eligible for income-related benefits, or you may lose entitlements that depended on joint income. It is worth checking all of the following.
        </p>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <div>
            <p className="font-semibold text-foreground">Pension Credit</p>
            <p>If you are State Pension age and your income is below £218.15 per week (single person, 2024-25), you may qualify for Pension Credit. Losing a partner's pension or State Pension often brings people below this threshold. Claim by calling 0800 731 0469. Pension Credit also unlocks other help: free dental treatment, Housing Benefit, and Cold Weather Payments.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Universal Credit</p>
            <p>If you are working age and your income drops after bereavement, you may qualify for Universal Credit or receive a higher payment if you already claim. As a single person, your maximum Universal Credit will change. Report the change of circumstances to DWP within one month.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Housing Benefit</p>
            <p>If you receive Housing Benefit and were a couple, your entitlement will change. You may receive a reduced amount or your claim may end. Contact your local council to report the change immediately.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Council Tax single person discount</p>
            <p>If you now live alone, you are entitled to a 25% reduction on your council tax bill. Contact your local council to apply. This does not require any means test.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">NHS Low Income Scheme (HC1/HC2)</p>
            <p>If your income is low, you may qualify for free or reduced cost NHS prescriptions, dental treatment, eye tests, glasses, and hospital travel costs. Apply using form HC1, available from Jobcentre Plus or pharmacies.</p>
          </div>
        </div>
      </div>

      {/* Widowed Parent's Allowance */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-3">Widowed Parent's Allowance (legacy benefit)</h2>
        <p className="text-sm text-muted leading-relaxed">
          Widowed Parent's Allowance was replaced by Bereavement Support Payment in 2017. However, people who were already receiving it before that date continue to receive it. If you were receiving Widowed Parent's Allowance and your circumstances change (for example, you remarry or start living with a new partner), your payments will stop. Contact DWP on 0800 731 0469 if you have questions about an existing claim.
        </p>
      </div>

      {/* Charitable grants */}
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <h2 className="text-xl font-bold text-foreground mb-3">Charitable grants and emergency funds</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Beyond government benefits, there are charities and benevolent funds that can provide one-off grants to people facing financial hardship after a bereavement.
        </p>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <div>
            <p className="font-semibold text-foreground">Turn2us</p>
            <p>A national charity with a benefits calculator and grants search tool. Visit turn2us.org.uk or call 0808 802 2000. They can identify grants from thousands of charitable funds based on your occupation, location, or personal circumstances.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Royal British Legion</p>
            <p>Financial grants for veterans, serving personnel, and their families. Call 0808 802 8080.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Trade union and occupational benevolent funds</p>
            <p>Many industries have benevolent funds for workers and their families. Examples include the Electrical Industries Charity, Hospitality Action, and the Police Dependants' Trust. Search for the industry the deceased worked in plus "benevolent fund".</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Local councils and emergency hardship funds</p>
            <p>Many councils have discretionary hardship funds for residents facing acute financial difficulty. Contact your local council's welfare team.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/bereavement-benefits" guides={['/guide', '/costs', '/template-letters', '/support']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised benefits checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will show you exactly which benefits apply to your situation and how to claim each one.</p>
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
              { '@type': 'ListItem', position: 3, name: 'Bereavement Benefits', item: 'https://helpafterloss.co.uk/guides/bereavement-benefits' },
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
            headline: 'Bereavement Benefits: Every Payment You Can Claim',
            description: 'A complete guide to every bereavement benefit available in the UK, who qualifies, and how to claim.',
            url: 'https://helpafterloss.co.uk/guides/bereavement-benefits',
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
