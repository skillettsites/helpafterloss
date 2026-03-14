import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'The First Year After Loss: A Month-by-Month Guide',
  description: 'A practical month-by-month guide to the first year after someone dies. What needs to happen, key deadlines, and how to look after yourself through grief and administration.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/first-year-after-loss' },
  openGraph: {
    title: 'The First Year After Loss: A Month-by-Month Guide',
    description: 'Month-by-month guidance on what to do in the first year after bereavement, covering both practical tasks and emotional milestones.',
    url: 'https://helpafterloss.co.uk/guides/first-year-after-loss',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The First Year After Loss: A Month-by-Month Guide',
    description: 'Practical and emotional guidance for every month of the first year after someone dies.',
  },
};

const MONTHS = [
  {
    period: 'Month 1',
    title: 'The first weeks',
    emotional: 'The first few weeks are often a blur. You may feel numb, overwhelmed, or strangely calm. All of these reactions are normal. Many people find they are running on autopilot, getting through practical tasks without fully processing what has happened. Let others help where they can.',
    tasks: [
      { text: 'Register the death within 5 days (8 days in Scotland)', link: '/guide', urgent: true },
      { text: 'Arrange the funeral or cremation', link: '/guides/funeral-options', urgent: false },
      { text: 'Use Tell Us Once to notify government departments in one go', link: '/tell-us-once', urgent: false },
      { text: 'Notify banks and building societies to freeze sole accounts', link: '/guides/bank-accounts-after-death', urgent: false },
      { text: 'Check whether any life insurance or death-in-service benefits are payable', link: null, urgent: false },
      { text: 'Apply for Bereavement Support Payment if you were married or in a civil partnership', link: '/guides/bereavement-benefits', urgent: false },
      { text: 'Secure the property if it is now empty and notify the home insurer', link: '/guides/property-after-death', urgent: false },
    ],
  },
  {
    period: 'Month 2',
    title: 'Getting organised',
    emotional: 'The funeral is behind you, and the reality of the loss may start to hit harder. Friends and family who gathered around in the first weeks often return to their own lives. This can feel isolating. Reach out to a bereavement helpline or support group if you need someone to talk to.',
    tasks: [
      { text: 'Apply for probate if the estate requires it (most do if property is involved)', link: '/probate', urgent: false },
      { text: 'Start notifying all organisations: utilities, subscriptions, insurance, council tax', link: '/notify', urgent: false },
      { text: 'Set up a Royal Mail redirect from the deceased person\'s address', link: null, urgent: false },
      { text: 'Gather all financial documents and start valuing the estate', link: '/guides/document-checklist', urgent: false },
      { text: 'Cancel or transfer vehicle insurance (it is void immediately after death)', link: '/guides/driving-after-death', urgent: false },
      { text: 'Place a statutory notice in The London Gazette to protect against unknown creditors', link: null, urgent: false },
    ],
  },
  {
    period: 'Month 3',
    title: 'Chasing and dealing with admin',
    emotional: 'By now, the constant administrative work can feel exhausting and relentless. It is common to feel angry that you are spending so much time on paperwork rather than grieving. Take breaks when you need them. The admin will still be there tomorrow.',
    tasks: [
      { text: 'Chase the probate application if you have not heard back (current processing times are 12-16 weeks)', link: '/probate', urgent: false },
      { text: 'Deal with the mortgage: notify the lender, check life cover, decide whether to sell or keep the property', link: '/guides/property-after-death', urgent: false },
      { text: 'Cancel remaining subscriptions and direct debits', link: '/guides/subscriptions-after-death', urgent: false },
      { text: 'Contact pension providers about any death benefits or dependant\'s pension', link: '/guides/pensions-after-death', urgent: false },
      { text: 'Apply for council tax exemption if the property is now empty', link: '/guides/council-tax-after-death', urgent: false },
      { text: 'Deal with digital accounts: social media, email, online shopping', link: '/digital-legacy', urgent: false },
    ],
  },
  {
    period: 'Months 4-6',
    title: 'Probate and estate administration',
    emotional: 'Grief often comes in waves. You might have a few good days and then be floored by something unexpected: a song, a photograph, walking past their favourite shop. The first birthday without them, or the first holiday, can be particularly difficult. Let yourself feel whatever comes up.',
    tasks: [
      { text: 'Grant of Probate typically arrives around this time', link: '/probate', urgent: false },
      { text: 'Use the Grant to close bank accounts and collect assets', link: '/guides/bank-accounts-after-death', urgent: false },
      { text: 'File the deceased person\'s final Self Assessment tax return with HMRC (April to date of death)', link: null, urgent: false },
      { text: 'Deal with any outstanding debts from estate funds (not from your own money)', link: '/guides/debts-after-death', urgent: false },
      { text: 'Begin distributing specific legacies if the will names them', link: '/guides/executor-duties', urgent: false },
      { text: 'Sell the property if that is the plan, or transfer ownership', link: '/guides/property-after-death', urgent: false },
    ],
  },
  {
    period: 'Months 7-9',
    title: 'Tax, inheritance, and continued administration',
    emotional: 'Around this time, people sometimes feel pressure from others to "move on" or "get back to normal." There is no timeline for grief. You are still adjusting to a completely different life, and it is perfectly reasonable that this takes time. If you are struggling, counselling or a bereavement support group can help.',
    tasks: [
      { text: 'Pay any inheritance tax due (the deadline is 6 months after the end of the month in which the person died)', link: '/guides/inheritance-tax', urgent: true },
      { text: 'Continue collecting in estate assets and paying outstanding liabilities', link: '/guides/executor-duties', urgent: false },
      { text: 'Chase any organisations that have been slow to respond', link: null, urgent: false },
      { text: 'Start preparing the estate accounts showing all money in and out', link: null, urgent: false },
      { text: 'Be alert to scams targeting bereaved families, especially if probate details are now public', link: '/guides/scams-after-bereavement', urgent: false },
    ],
  },
  {
    period: 'Months 10-12',
    title: 'Closing the estate and the first anniversary',
    emotional: 'The first anniversary of the death can bring a fresh wave of grief, even if you have been coping well. Some people find it helpful to mark the day: visiting a place that was special, gathering with family, or simply taking the day off. There is no right or wrong way to acknowledge it. The second year is often harder than people expect, because the shock has worn off and the reality is permanent.',
    tasks: [
      { text: 'Finalise estate accounts and get approval from all residuary beneficiaries', link: '/guides/executor-duties', urgent: false },
      { text: 'Distribute remaining estate assets to beneficiaries', link: null, urgent: false },
      { text: 'Be aware of the 12-month deadline for Inheritance Act claims (dependants can challenge the will within this period)', link: null, urgent: true },
      { text: 'Keep all estate paperwork for at least 12 years after distribution', link: null, urgent: false },
      { text: 'Consider whether you need to update your own will now that circumstances have changed', link: null, urgent: false },
    ],
  },
];

const DEADLINES = [
  { deadline: '5 days', description: 'Register the death (8 days in Scotland)' },
  { deadline: '6 months', description: 'Inheritance tax payment deadline (from end of month of death)' },
  { deadline: '12 months', description: 'Deadline for Inheritance (Provision for Family and Dependants) Act 1975 claims' },
  { deadline: '2 years', description: 'Capital gains tax reporting for estate property sales' },
];

const FAQ = [
  {
    q: 'Do I have to do everything in this order?',
    a: 'Not rigidly, no. Some tasks depend on others (you cannot distribute the estate without probate), but many can happen in parallel. The month-by-month structure is a guide to what typically happens and when, not a strict schedule. Focus on the urgent items first and work through the rest at your own pace.',
  },
  {
    q: 'What if I cannot face dealing with the admin right now?',
    a: 'The only truly time-sensitive task in the first week is registering the death (within 5 days in England and Wales). Everything else can wait a little. If you are struggling, ask a trusted friend, family member, or solicitor to help. Many organisations have dedicated bereavement teams who are used to dealing with grieving families and will be patient.',
  },
  {
    q: 'Do I need a solicitor to handle the estate?',
    a: 'Not always. Many straightforward estates (one property, a few bank accounts, no disputes) can be handled without a solicitor. If the estate is complex, involves business assets, overseas property, or family disputes, professional help is worth the cost. Solicitor fees come from the estate, not your own pocket. Get quotes from at least two firms.',
  },
  {
    q: 'What happens if I miss the inheritance tax deadline?',
    a: 'HMRC charges interest on late payments from the due date (6 months after the end of the month of death). If you are significantly late, penalties may also apply. If you know you will struggle to pay on time, contact HMRC early to discuss payment options. You can pay IHT on property in annual instalments over 10 years.',
  },
  {
    q: 'How do I cope with the emotional side while dealing with all this admin?',
    a: 'Many people find it helpful to set aside specific times for estate administration rather than letting it consume every day. Take breaks, accept help from others, and do not feel guilty about having good days. Free bereavement counselling is available through Cruse (0808 808 1677), and your GP can refer you for NHS counselling if needed.',
  },
  {
    q: 'Is the second year really harder than the first?',
    a: 'For many people, yes. The first year often involves a degree of shock and numbness that can be oddly protective. By the second year, the finality of the loss has fully sunk in, and the support network that rallied in year one has largely moved on. This is very common and does not mean you are going backwards. Seek support if you need it.',
  },
];

export default function FirstYearAfterLossPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'The First Year After Loss' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        The First Year After Loss: A Month-by-Month Guide
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        The year after someone dies is one of the most difficult periods you will ever face. There is grief to navigate and, at the same time, a mountain of practical tasks that will not wait. This guide breaks the year down month by month, covering both the administrative steps and the emotional milestones, so you know roughly what to expect and when.
      </p>

      {/* Key deadlines summary */}
      <div className="bg-white rounded-xl border border-border p-6 mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Key deadlines at a glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DEADLINES.map((d, i) => (
            <div key={i} className="flex items-start gap-3 bg-red-50 rounded-lg p-3">
              <span className="text-sm font-bold text-red-700 whitespace-nowrap">{d.deadline}</span>
              <span className="text-sm text-muted">{d.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Important note */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Everyone&apos;s situation is different.</strong> This guide covers the most common tasks, but your circumstances may vary. If the person died without a will, see our <Link href="/intestacy" className="underline font-medium">intestacy guide</Link>. If you are the executor, our <Link href="/guides/executor-duties" className="underline font-medium">executor duties guide</Link> covers your legal responsibilities in detail.
        </p>
      </div>

      {/* Month by month sections */}
      <div className="space-y-8 mb-12">
        {MONTHS.map((month, i) => (
          <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-lg font-bold text-white">{month.period}: {month.title}</h2>
            </div>
            <div className="p-6">
              {/* Emotional context */}
              <div className="bg-primary-light rounded-lg p-4 mb-5">
                <p className="text-sm text-muted leading-relaxed italic">{month.emotional}</p>
              </div>

              {/* Tasks */}
              <h3 className="font-semibold text-foreground mb-3">What needs to happen</h3>
              <ul className="space-y-2">
                {month.tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${task.urgent ? 'bg-red-500' : 'bg-primary'}`} />
                    <span className="text-sm text-muted leading-relaxed">
                      {task.link ? (
                        <Link href={task.link} className="underline text-primary hover:text-primary-dark">
                          {task.text}
                        </Link>
                      ) : (
                        task.text
                      )}
                      {task.urgent && (
                        <span className="ml-2 text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">Deadline</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Emotional milestones section */}
      <h2 className="text-2xl font-bold text-foreground mb-4">Emotional milestones in the first year</h2>
      <p className="text-muted leading-relaxed mb-4">
        Alongside the practical tasks, the first year is marked by a series of emotional milestones. These "firsts" can catch you off guard even when you think you are prepared.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold text-foreground mb-2">First birthday without them</h3>
          <p className="text-sm text-muted leading-relaxed">Whether it is your birthday or theirs, the day will feel different. Some people find it helps to do something that honours their memory. Others prefer to treat it as a normal day. Neither approach is wrong.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold text-foreground mb-2">First Christmas or holiday season</h3>
          <p className="text-sm text-muted leading-relaxed">Family gatherings highlight the absence. It can help to decide in advance how you want to handle the day: keep traditions, change them completely, or acknowledge the person in a specific way.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold text-foreground mb-2">Their wedding anniversary</h3>
          <p className="text-sm text-muted leading-relaxed">If you have lost a spouse or partner, this date can be especially painful. Allow yourself to feel whatever comes up without judgement. There is no expectation to "be strong."</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold text-foreground mb-2">The first anniversary of the death</h3>
          <p className="text-sm text-muted leading-relaxed">Some people dread this day for weeks beforehand. Others find that the anticipation is worse than the day itself. Mark it in whatever way feels right for you, whether quietly or with family and friends.</p>
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

      <RelatedGuides currentPath="/guides/first-year-after-loss" guides={['/guides/executor-duties', '/guides/bereavement-benefits', '/guides/inheritance-tax', '/checklist', '/deadline-tracker', '/support']} />

      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist</h2>
        <p className="text-muted mb-6">Answer a few questions about your situation and we will create a tailored list of exactly what you need to do, with deadlines calculated from the date of death.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The First Year After Loss: A Month-by-Month Guide',
            description: 'A practical month-by-month guide to the first year after someone dies, covering administrative tasks, key deadlines, and emotional milestones.',
            url: 'https://helpafterloss.co.uk/guides/first-year-after-loss',
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
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
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'First Year After Loss', item: 'https://helpafterloss.co.uk/guides/first-year-after-loss' },
            ],
          }),
        }}
      />
    </div>
  );
}
