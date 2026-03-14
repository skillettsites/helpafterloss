import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Pensions After Death: State, Workplace & Private Pensions',
  description: 'What happens to pensions when someone dies in the UK. State pension inheritance, workplace death benefits, private pensions, the Pension Tracing Service, and tax on inherited pensions.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/pensions-after-death' },
  openGraph: {
    title: 'Pensions After Death: State, Workplace & Private Pensions',
    description: 'How to claim pension death benefits, inherit state pension, and trace lost pensions. Covers workplace, private, and public sector pensions.',
    url: 'https://helpafterloss.co.uk/guides/pensions-after-death',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pensions After Death: State, Workplace & Private Pensions',
    description: 'How to claim pension death benefits and inherit state pension in the UK.',
  },
};

const SECTIONS = [
  {
    title: 'State pension inheritance',
    content: 'You may be able to inherit extra state pension from your late spouse or civil partner. This applies to the additional state pension (SERPS or State Second Pension/S2P) built up before April 2016. The average inherited amount is around £3,377 per year. Over 17,000 people boosted their state pension by more than £10,000 in a single year through inherited state pension. Contact the DWP Bereavement Service on 0800 731 0469 to check what you may be entitled to. If the deceased reached state pension age before 6 April 2016, different (often more generous) rules apply.',
  },
  {
    title: 'Bereavement Support Payment',
    content: 'If your spouse or civil partner paid National Insurance contributions, you may be eligible for Bereavement Support Payment. This is a tax-free lump sum of £2,500 or £3,500 (higher rate if you have dependent children), followed by up to 18 monthly payments of £100 or £350. You must claim within 21 months of the death. See our full guide for eligibility details and how to apply.',
  },
  {
    title: 'Workplace pension death benefits',
    content: 'Most workplace pensions pay a death benefit, which could be a lump sum (typically 2 to 4 times the deceased\'s annual salary), a dependant\'s pension paid to a surviving spouse or partner, or both. Contact the deceased\'s employer\'s HR department or the pension scheme administrator. They will send you a claim form and explain what benefits are available. These payments are often made at the pension trustees\' discretion, so they are usually paid outside the estate and are free from inheritance tax.',
  },
  {
    title: 'Death in service benefit',
    content: 'Death in service is a separate benefit from the pension, provided by the employer as part of the employee benefits package. It pays a lump sum (often 2 to 4 times salary, sometimes more) to the deceased\'s nominated beneficiary or next of kin. Check the employee handbook, benefits portal, or contact HR directly. This benefit only applies if the person died while still employed by the company. If they had left the job, the death in service benefit no longer applies, though pension death benefits may still be available.',
  },
  {
    title: 'Private and personal pensions',
    content: 'What happens to a private pension depends on the type of scheme. For defined contribution pensions (where the deceased had a pot of money), the pension provider pays the pot to the nominated beneficiary or, if no nomination was made, to whoever they consider appropriate. For defined benefit pensions (salary-related, final salary), the scheme may pay a dependant\'s pension to a surviving spouse, civil partner, or qualifying partner. Check with the pension provider for the specific scheme rules.',
  },
  {
    title: 'The Pension Tracing Service',
    content: 'People often lose track of pensions from previous employers, particularly if they changed jobs frequently. The Pension Tracing Service is a free government tool that helps you search for lost or forgotten pensions. Visit gov.uk/find-pension-contact-details or call 0800 731 0193. You will need the name of the deceased\'s former employer or pension provider. The service gives you contact details for the scheme so you can enquire about any benefits.',
  },
  {
    title: 'NHS pension death benefits',
    content: 'NHS pensions are administered by NHS Business Services Authority (NHSBSA). Death benefits depend on when the member joined and their scheme (1995, 2008, or 2015 sections). Benefits typically include a lump sum (usually 2 times pensionable pay for active members), a surviving partner\'s pension, and children\'s pensions. Contact NHSBSA directly on 0300 330 1346 or visit nhsbsa.nhs.uk/member-hub/bereavement. Processing can take 8 to 12 weeks.',
  },
  {
    title: 'Teachers\' and civil service pensions',
    content: 'The Teachers\' Pension Scheme (teacherspensions.co.uk) and Civil Service Pension Scheme (civilservicepensionscheme.org.uk) both provide death benefits. These typically include a lump sum and a dependant\'s pension. Contact the relevant scheme administrator as soon as possible after the death. You will need the deceased\'s pension reference number, which should be on any pension correspondence.',
  },
  {
    title: 'Tax on inherited pensions',
    content: 'The tax treatment depends on the deceased\'s age at death. If the deceased was under 75, pension benefits (lump sum or drawdown) are normally paid tax-free to the beneficiary. If the deceased was 75 or over, any pension benefits are taxed as income at the beneficiary\'s marginal rate. These rules apply to defined contribution pensions. Defined benefit dependant\'s pensions are always taxed as income regardless of the deceased\'s age at death. Pension death benefits paid at the trustees\' discretion are normally outside the estate for inheritance tax.',
  },
];

const FAQ = [
  {
    q: 'What happens to a pension when someone dies?',
    a: 'It depends on the type of pension. Defined contribution pensions (money purchase) are usually paid to the nominated beneficiary as a lump sum or drawdown. Defined benefit pensions (final salary) may provide a dependant\'s pension to a surviving spouse or partner. State pension entitlement may be partially inherited. In all cases, contact the pension provider or scheme administrator to find out what specific benefits are available.',
  },
  {
    q: 'Can I inherit my spouse\'s state pension?',
    a: 'You may be able to inherit some of their additional state pension (SERPS or State Second Pension) if it was built up before April 2016. You cannot inherit the new state pension (post-2016), but if your own state pension is low, you may be able to use your late spouse\'s National Insurance record to boost it. Contact the DWP Bereavement Service on 0800 731 0469 to check your specific entitlement.',
  },
  {
    q: 'What is death in service benefit?',
    a: 'Death in service is an employer benefit that pays a lump sum to the family of an employee who dies while employed by the company. The amount is usually 2 to 4 times the employee\'s annual salary, though some employers offer more. It is paid to the person nominated by the employee (or their next of kin if no nomination was made). It is separate from the workplace pension and only applies if the person was still employed at the time of death.',
  },
  {
    q: 'How do I trace a lost pension?',
    a: 'Use the free government Pension Tracing Service at gov.uk/find-pension-contact-details or call 0800 731 0193. You will need the name of the former employer or pension provider. The service searches a database of over 200,000 pension schemes and gives you the contact details so you can enquire about benefits. Also check for old pension statements in the deceased\'s paperwork, as these will have scheme names and reference numbers.',
  },
  {
    q: 'Are inherited pensions taxable?',
    a: 'If the deceased was under 75 at death, defined contribution pension benefits (lump sum or drawdown) are normally paid tax-free. If the deceased was 75 or over, benefits are taxed as income at the beneficiary\'s marginal tax rate. Defined benefit dependant\'s pensions are always taxed as income regardless of age. Most pension death benefits are outside the estate for inheritance tax purposes because they are paid at the trustees\' discretion.',
  },
  {
    q: 'How do I claim workplace pension death benefits?',
    a: 'Contact the deceased\'s employer\'s HR department or the pension scheme administrator. They will confirm what benefits are available and send the necessary claim forms. You will typically need to provide a death certificate, proof of your identity, and proof of your relationship to the deceased. Processing times vary, but most schemes aim to pay within 4 to 8 weeks of receiving a completed claim.',
  },
];

export default function PensionsAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Pensions After Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Pensions After Death: State, Workplace & Private Pensions
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Pensions are one of the most commonly overlooked assets after a death, yet they can be worth a significant amount. Between state pension inheritance, workplace death benefits, and private pension pots, there may be more available than you expect. This guide explains what to check and how to claim.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£3,377/yr</p>
          <p className="text-sm text-muted mt-1">Average inherited state pension amount</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">2-4x salary</p>
          <p className="text-sm text-muted mt-1">Typical workplace death in service benefit</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">200,000+</p>
          <p className="text-sm text-muted mt-1">Pension schemes searchable via Pension Tracing Service</p>
        </div>
      </div>

      {/* Important note */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Do not assume there is nothing to claim.</strong> Many people have pensions from previous employers they have forgotten about. Over 17,000 people inherited more than £10,000 in extra state pension in a single year. Always check with the DWP, the employer, and use the Pension Tracing Service.
        </p>
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

      {/* Bereavement Support Payment link */}
      <div className="bg-accent/50 rounded-xl p-6 mb-12">
        <h2 className="font-semibold text-foreground mb-2">Bereavement Support Payment: full guide</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          If your spouse or civil partner has died, you may be eligible for up to £9,800 in Bereavement Support Payment. Read our full guide for eligibility details, how to claim, and what to do if you miss the initial deadline.
        </p>
        <Link href="/guides/bereavement-benefits" className="inline-block text-sm font-semibold text-primary hover:underline">
          Read the Bereavement Benefits guide
        </Link>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about pensions after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/pensions-after-death" guides={['/guides/bereavement-benefits', '/guides/inheritance-tax', '/guides/bank-accounts-after-death', '/notify']} />

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
              { '@type': 'ListItem', position: 3, name: 'Pensions After Death', item: 'https://helpafterloss.co.uk/guides/pensions-after-death' },
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
            headline: 'Pensions After Death: State, Workplace & Private Pensions',
            description: 'What happens to pensions when someone dies in the UK. State pension inheritance, workplace death benefits, and how to trace lost pensions.',
            url: 'https://helpafterloss.co.uk/guides/pensions-after-death',
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
