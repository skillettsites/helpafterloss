import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Bereavement Leave in the UK: Your Rights in 2026',
  description: "What bereavement leave are you legally entitled to in the UK? This guide covers parental bereavement leave, time off for dependants, what employers typically offer, what to do if your employer refuses, and best practice for HR teams.",
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/bereavement-leave-rights-uk' },
  openGraph: {
    title: 'Bereavement Leave in the UK: Your Rights in 2026',
    description: "Your legal rights to bereavement leave, what most employers actually offer, and what to do if you are refused time off.",
    url: 'https://helpafterloss.co.uk/blog/bereavement-leave-rights-uk',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bereavement Leave UK: Your Rights in 2026',
    description: 'A plain-English guide to what bereavement leave you are entitled to, with a comparison table and sample email for your employer.',
  },
};

const COMPARISON_TABLE = [
  {
    relationship: 'Child under 18 (or stillborn after 24 weeks)',
    legal: '2 weeks paid Parental Bereavement Leave (from day one)',
    typical: '2 weeks, often enhanced beyond the statutory minimum',
  },
  {
    relationship: 'Spouse or civil partner',
    legal: 'No statutory entitlement to paid leave',
    typical: '3-5 days paid compassionate leave in most organisations',
  },
  {
    relationship: 'Parent',
    legal: 'No statutory entitlement to paid leave',
    typical: '3-5 days paid compassionate leave in most organisations',
  },
  {
    relationship: 'Sibling',
    legal: 'No statutory entitlement to paid leave',
    typical: '1-3 days paid in most organisations',
  },
  {
    relationship: 'Grandparent',
    legal: 'No statutory entitlement to paid leave',
    typical: '1-2 days paid in most organisations',
  },
  {
    relationship: 'Close friend',
    legal: 'No statutory entitlement whatsoever',
    typical: 'Varies; many employers offer 1 day for the funeral',
  },
  {
    relationship: 'Miscarriage before 24 weeks',
    legal: 'No statutory paid bereavement leave',
    typical: 'Varies; some employers treat as sick leave or compassionate leave',
  },
  {
    relationship: 'Any dependant (emergency)',
    legal: "Reasonable unpaid time off under the Employment Rights Act 1996",
    typical: 'Usually absorbed into compassionate leave allowance',
  },
];

export default function BereavementLeavePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'Bereavement Leave: Your Rights' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 17 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>10 min read</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Bereavement Leave in the UK: Your Rights in 2026
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        The UK has surprisingly limited statutory bereavement leave rights. For most deaths, there is no legal right to any paid time off at all. This guide sets out exactly what the law says, what most employers actually offer, and what you can do if your employer refuses to give you time to grieve.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key takeaways</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> Only parents who lose a child under 18 have a statutory right to paid leave (2 weeks under Jack's Law)</li>
          <li className="flex gap-2"><span className="font-bold">+</span> For all other bereavements, there is no legal right to paid time off</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Most employers voluntarily offer 3-5 days paid compassionate leave</li>
          <li className="flex gap-2"><span className="font-bold">+</span> All employees have a day-one right to reasonable unpaid time off for dependant emergencies</li>
          <li className="flex gap-2"><span className="font-bold">+</span> If your employer refuses, contact ACAS on 0300 123 1100 for free advice</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'jacks-law', label: "Parental Bereavement Leave (Jack's Law)" },
        { id: 'time-off-dependants', label: 'Time off for dependants' },
        { id: 'comparison', label: 'What are you entitled to? A comparison' },
        { id: 'what-employers-offer', label: 'What most employers actually offer' },
        { id: 'employer-refuses', label: 'What to do if your employer refuses' },
        { id: 'what-to-say', label: 'What to say to your employer' },
        { id: 'returning-to-work', label: 'Returning to work after bereavement' },
        { id: 'for-employers', label: 'If you are an employer: best practice' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* Key summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground mb-1">For parents who lose a child</p>
          <p className="text-2xl font-bold text-primary mb-1">2 weeks</p>
          <p className="text-sm text-muted">Statutory paid Parental Bereavement Leave. A day-one right for all employees.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground mb-1">For all other deaths</p>
          <p className="text-2xl font-bold text-primary mb-1">No statutory right</p>
          <p className="text-sm text-muted">Most employers voluntarily offer 3-5 days paid compassionate leave.</p>
        </div>
      </div>

      {/* Parental Bereavement Leave */}
      <h2 id="jacks-law" className="text-2xl font-bold text-foreground mb-6">Parental Bereavement Leave (Jack's Law)</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Who it covers</h3>
          <p className="text-sm text-muted leading-relaxed">
            Parental Bereavement Leave was introduced in April 2020 under Jack's Law, named after Jack Herd whose mother Lucy campaigned for the right after losing her son. It applies to parents (including adoptive parents, foster parents, and those with parental responsibility) who lose a child under the age of 18, or who suffer a stillbirth after 24 weeks of pregnancy.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What you are entitled to</h3>
          <p className="text-sm text-muted leading-relaxed">
            Two weeks of paid leave per child lost. This is a day-one right, meaning there is no qualifying period of employment. The leave can be taken as one block of two weeks, or as two separate blocks of one week each, at any time within 56 weeks of the date of death. This flexibility allows parents to, for example, take one week immediately after the death and then a second week on the anniversary.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The pay rate</h3>
          <p className="text-sm text-muted leading-relaxed">
            Statutory Parental Bereavement Pay is paid at the lower of £184.03 per week (the 2026 statutory rate) or 90% of average weekly earnings. To receive the statutory pay, employees must have at least 26 weeks of continuous service and meet the minimum earnings threshold. If you do not qualify for statutory pay, you still have the right to take the leave unpaid. Many employers pay full salary during the leave regardless.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to notify your employer</h3>
          <p className="text-sm text-muted leading-relaxed">
            You do not need to give any minimum notice period if you want to take leave immediately after the death. For leave taken later (in a subsequent block), you need to give at least one week's notice. You do not have to provide proof of the child's death to take the leave, though your employer may request evidence at a later stage.
          </p>
        </div>
      </div>

      {/* Time off for dependants */}
      <h2 id="time-off-dependants" className="text-2xl font-bold text-foreground mb-6">Time off for dependants</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Under the Employment Rights Act 1996, all employees (from day one) have the right to take a reasonable amount of unpaid time off to deal with an emergency involving a dependant. A dependant is defined as a spouse, civil partner, child, parent, or someone who relies on you for care (for example, an elderly neighbour who depends on you).
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          This right does not apply to friends, in-laws, aunts, uncles, cousins, or other non-dependants, unless they rely on you personally for care.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The time off is intended for immediate emergencies: to make funeral arrangements, deal with a bereavement that directly affects a dependant, or handle an unexpected situation. It is not intended for extended leave. What counts as "reasonable" depends on the circumstances and has not been defined in statute; in practice, a few days is typically accepted.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          This leave is unpaid in law. Your employer may choose to pay you during this time, and many do.
        </p>
      </div>

      {/* Comparison table */}
      <h2 id="comparison" className="text-2xl font-bold text-foreground mb-4">What are you entitled to? A comparison</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">Relationship</th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">Legal entitlement</th>
              <th className="text-left py-3 pl-4 font-semibold text-foreground">Typical employer policy</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_TABLE.map((row, i) => (
              <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card/50' : ''}`}>
                <td className="py-3 pr-4 font-medium text-foreground">{row.relationship}</td>
                <td className="py-3 px-4 text-muted">{row.legal}</td>
                <td className="py-3 pl-4 text-muted">{row.typical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* What employers offer */}
      <h2 id="what-employers-offer" className="text-2xl font-bold text-foreground mb-6">What most employers actually offer</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Compassionate leave (unpaid in law, usually paid in practice)</h3>
          <p className="text-sm text-muted leading-relaxed">
            According to CIPD data, most UK employers offer between 3 and 5 days of paid compassionate leave for the death of an immediate family member (spouse, parent, child, sibling). This is entirely at the employer's discretion and is not required by law. Some organisations offer more for closer relationships and less for extended family. Check your employment contract or staff handbook.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Enhanced leave in the public sector</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many public sector employers (NHS, schools, local councils, civil service) have more generous policies, sometimes offering up to 10 days for the death of a close family member. Some have introduced enhanced policies following changes in understanding of grief and bereavement.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Miscarriage before 24 weeks</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is currently no statutory bereavement leave for pregnancy loss before 24 weeks. Many campaigners and employers are calling for change. Some progressive employers have introduced their own policies. If your employer has no policy, you can request sick leave (pregnancy-related sick leave should not be counted toward absence triggers), annual leave, or unpaid leave.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Self-employed people</h3>
          <p className="text-sm text-muted leading-relaxed">
            Self-employed people have no entitlement to paid leave of any kind. If you are self-employed and your income is affected by a bereavement, you may be able to claim New Style ESA or Universal Credit depending on your circumstances. If you paid National Insurance and meet the qualifying conditions for Bereavement Support Payment (following the death of a spouse or civil partner), you can still claim this.
          </p>
        </div>
      </div>

      {/* What to do if refused */}
      <h2 id="employer-refuses" className="text-2xl font-bold text-foreground mb-6">What to do if your employer refuses time off</h2>
      <div className="space-y-4 mb-12">
        {[
          {
            step: '1',
            title: 'Check your contract and staff handbook',
            desc: 'Look for any compassionate leave, bereavement leave, or special leave policy. If the policy exists and your employer is not following it, they are in breach of your contract.',
          },
          {
            step: '2',
            title: 'Make a written request',
            desc: 'Email your manager or HR department to formally request the time off. Explain the relationship to the deceased and the dates you need. Having a written record is important if you need to escalate.',
          },
          {
            step: '3',
            title: 'Request unpaid leave or annual leave',
            desc: 'If your employer refuses paid compassionate leave, ask for the time as unpaid leave or annual leave. Most employers will grant this.',
          },
          {
            step: '4',
            title: 'Contact ACAS',
            desc: 'If your employer refuses all time off, contact ACAS on 0300 123 1100. ACAS provides free, confidential advice and can help you understand whether your employer is acting unlawfully. If you were refused Parental Bereavement Leave, this is a statutory right and your employer has no legal basis to refuse.',
          },
          {
            step: '5',
            title: 'Raise a formal grievance',
            desc: 'If the issue is not resolved informally, you have the right to raise a formal grievance. Your employer must follow a fair procedure. If you are dismissed or treated detrimentally for requesting Parental Bereavement Leave, this is automatically unfair dismissal.',
          },
        ].map((s) => (
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

      {/* Sample email */}
      <h2 id="what-to-say" className="text-2xl font-bold text-foreground mb-4">What to say to your employer</h2>
      <p className="text-sm text-muted mb-4">
        You do not need to go into detail. A simple, factual email is fine. Here is an example:
      </p>
      <div className="bg-card rounded-xl border border-border p-6 mb-12 font-mono text-sm">
        <p className="text-foreground mb-3">Subject: Bereavement leave request</p>
        <p className="text-muted leading-relaxed">
          Dear [Name],
        </p>
        <p className="text-muted leading-relaxed mt-3">
          I am writing to let you know that my [relationship, e.g. father] passed away on [date]. I would like to request compassionate leave from [start date] to [end date] (X days) to attend to funeral arrangements and support my family.
        </p>
        <p className="text-muted leading-relaxed mt-3">
          Please let me know if you need any further information.
        </p>
        <p className="text-muted leading-relaxed mt-3">
          Kind regards,<br />
          [Your name]
        </p>
      </div>

      {/* Phased return and flexible working */}
      <h2 id="returning-to-work" className="text-2xl font-bold text-foreground mb-6">Returning to work after bereavement</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Phased return to work</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you are struggling to return to full-time work after a bereavement, you can request a phased return. This is not a legal right in the same way as flexible working, but most reasonable employers will accommodate it. A phased return might mean starting with reduced hours and gradually building back to your normal pattern. If your GP signs you off with stress or depression related to your bereavement, the period of sick leave can help create a more structured return.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Flexible working requests</h3>
          <p className="text-sm text-muted leading-relaxed">
            From April 2024, all employees have the right to request flexible working from day one of employment. This could include reduced hours, different start and finish times, or working from home. You can make two flexible working requests in any 12-month period. Your employer does not have to agree but must consider the request seriously and respond within two months.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Bereavement counselling through work</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many employers offer access to an Employee Assistance Programme (EAP) which typically includes free, confidential counselling sessions. If your employer has one, it will be in your benefits documentation or staff handbook. You can access this without telling your manager why.
          </p>
        </div>
      </div>

      {/* For employers */}
      <h2 id="for-employers" className="text-2xl font-bold text-foreground mb-6">If you are an employer: best practice guidance</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          A clear, compassionate bereavement policy benefits both employees and the organisation. The CIPD recommends that employers:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Offer a minimum of 5 days paid leave for the death of an immediate family member, beyond any statutory minimum</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Extend the definition of "family" to include close friends, chosen family, and cohabiting partners</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Include pregnancy loss before 24 weeks in the bereavement policy</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Allow flexible use of the leave (not necessarily in one consecutive block)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Offer a phased return to work with no questions asked</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Train line managers to have sensitive conversations about bereavement</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Signpost EAP counselling and bereavement support organisations</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Review the policy annually and make sure it is easy to find in staff handbooks</li>
        </ul>
      </div>

      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {[
          { q: 'How long is bereavement leave in the UK?', a: "There is no standard length. The only statutory right is 2 weeks of Parental Bereavement Leave for the loss of a child under 18. For all other bereavements, it depends entirely on your employer's policy. Most offer 3-5 days for immediate family members." },
          { q: 'Is bereavement leave paid in the UK?', a: "Parental Bereavement Leave is paid at £184.03 per week (or 90% of average earnings if lower). For all other bereavements, there is no legal right to paid leave. However, most employers choose to pay compassionate leave as a matter of policy." },
          { q: 'Can my employer refuse bereavement leave?', a: "Your employer cannot refuse Parental Bereavement Leave as it is a statutory right. For other bereavements, your employer can technically refuse paid leave, but they cannot refuse reasonable unpaid time off to deal with a dependant emergency under the Employment Rights Act 1996." },
          { q: 'Do I get bereavement leave for a grandparent?', a: "There is no statutory bereavement leave for grandparents. Most employers offer 1-2 days paid compassionate leave, but this is entirely at their discretion. Check your employment contract or staff handbook." },
        ].map((faq, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides
        currentPath="/blog/bereavement-leave-rights-uk"
        guides={['/template-letters', '/support', '/guide', '/guides/bereavement-benefits']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need help with what to do next?</h2>
        <p className="text-muted mb-6">Our personalised guide covers every practical step after a bereavement, including letters, phone calls, legal requirements, and financial claims.</p>
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
            headline: 'Bereavement Leave in the UK: Your Rights in 2026',
            description: "A plain-English guide to bereavement leave rights in the UK, covering Parental Bereavement Leave, time off for dependants, and what to do if your employer refuses.",
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
              '@id': 'https://helpafterloss.co.uk/blog/bereavement-leave-rights-uk',
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
              { '@type': 'ListItem', position: 3, name: 'Bereavement Leave: Your Rights in 2026', item: 'https://helpafterloss.co.uk/blog/bereavement-leave-rights-uk' },
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
              { '@type': 'Question', name: 'How long is bereavement leave in the UK?', acceptedAnswer: { '@type': 'Answer', text: 'There is no standard length. The only statutory right is 2 weeks of Parental Bereavement Leave for the loss of a child under 18. For all other bereavements, it depends entirely on your employer\'s policy. Most offer 3-5 days for immediate family members.' } },
              { '@type': 'Question', name: 'Is bereavement leave paid in the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Parental Bereavement Leave is paid at £184.03 per week (or 90% of average earnings if lower). For all other bereavements, there is no legal right to paid leave. However, most employers choose to pay compassionate leave as a matter of policy.' } },
              { '@type': 'Question', name: 'Can my employer refuse bereavement leave?', acceptedAnswer: { '@type': 'Answer', text: 'Your employer cannot refuse Parental Bereavement Leave as it is a statutory right. For other bereavements, your employer can technically refuse paid leave, but they cannot refuse reasonable unpaid time off to deal with a dependant emergency under the Employment Rights Act 1996.' } },
              { '@type': 'Question', name: 'Do I get bereavement leave for a grandparent?', acceptedAnswer: { '@type': 'Answer', text: 'There is no statutory bereavement leave for grandparents. Most employers offer 1-2 days paid compassionate leave, but this is entirely at their discretion. Check your employment contract or staff handbook.' } },
            ],
          }),
        }}
      />
    </div>
  );
}
