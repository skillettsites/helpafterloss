import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Tell Us Once Service UK 2026 - What It Covers, How to Use It, What You Still Need to Do',
  description: 'Tell Us Once lets you report a death to DWP, HMRC, DVLA, Passport Office, and your council in one step. Free service, 28-day deadline. See exactly what it covers and what it does not.',
  alternates: { canonical: 'https://helpafterloss.co.uk/tell-us-once' },
  openGraph: {
    title: 'Tell Us Once Service UK 2026 - What It Covers, How to Use It',
    description: 'Report a death to most government departments in one step. Free, available online or by phone. See what it covers and what you still need to do separately.',
    url: 'https://helpafterloss.co.uk/tell-us-once',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tell Us Once - Report a Death to UK Government in One Go',
    description: 'Notify DWP, HMRC, DVLA, Passport Office, and your local council in one step. Free service with a 28-day deadline.',
  },
};

const FAQ = [
  {
    q: 'What is Tell Us Once?',
    a: 'Tell Us Once is a free government service that lets you report a death to most national and local government organisations in a single notification. It saves you contacting each department individually. It is available in England, Wales, and Scotland, but not in Northern Ireland.',
  },
  {
    q: 'How do I get a Tell Us Once reference number?',
    a: 'The registrar gives you a Tell Us Once reference number when you register the death. You cannot use the service without this number. If you forget to ask, contact the register office afterwards and they can provide it.',
  },
  {
    q: 'Can I use Tell Us Once online?',
    a: 'Yes. You can use it online at gov.uk/tell-us-once or by calling 0800 085 7308. The online service is available 24 hours a day. The phone line is open Monday to Friday, 8am to 8pm, and Saturday 9am to 4pm.',
  },
  {
    q: 'What happens if I miss the 28-day deadline?',
    a: 'If you miss the 28-day deadline, you will need to contact each government department individually. The registrar may be able to issue a new reference number in some cases, but this is not guaranteed. It is worth contacting the register office to ask.',
  },
  {
    q: 'Does Tell Us Once notify banks?',
    a: 'No. Tell Us Once only covers government departments and public sector pension schemes. It does not notify banks, building societies, private pension providers, insurers, utility companies, or any private organisations. You need to contact all of these yourself.',
  },
  {
    q: 'Is Tell Us Once available in Northern Ireland?',
    a: 'No. Tell Us Once is not available in Northern Ireland. If the death occurred in Northern Ireland, you need to contact each government department and council service individually. The registrar can advise you on who to contact.',
  },
  {
    q: 'What information do I need to use Tell Us Once?',
    a: 'You need the Tell Us Once reference number from the registrar, the deceased person\'s National Insurance number (if known), details of any benefits or tax credits they received, their driving licence number, their passport number, and details of any local council services they used (council tax, Blue Badge, library cards, etc.).',
  },
  {
    q: 'Does Tell Us Once stop benefit payments automatically?',
    a: 'Yes. Tell Us Once notifies the DWP, which will stop benefits paid to the deceased person. If you are a surviving spouse or partner, your own benefits will not be affected, but you may need to contact the DWP separately about changes to your household income or claiming Bereavement Support Payment.',
  },
];

export default function TellUsOncePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs items={[
        { label: 'Tell Us Once' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Tell Us Once: Report a Death to Government in One Step
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        Tell Us Once is a free government service that lets you report a death to most national and local government organisations with a single notification. It saves hours of phone calls and paperwork during an already difficult time.
      </p>

      {/* Key facts at a glance */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">Free</p>
          <p className="text-xs text-muted mt-1">No cost to use</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">28 days</p>
          <p className="text-xs text-muted mt-1">Deadline to use it</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">8+</p>
          <p className="text-xs text-muted mt-1">Departments notified</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">Online</p>
          <p className="text-xs text-muted mt-1">Or by phone</p>
        </div>
      </div>

      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-8">
        <p className="text-sm text-amber-800 font-medium">
          Tell Us Once is available in England, Wales, and Scotland. It is <strong>not available in Northern Ireland</strong>, where you need to contact each department separately. See our <Link href="/guide/northern-ireland" className="text-amber-900 underline hover:no-underline">Northern Ireland guide</Link> for what to do instead.
        </p>
      </div>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-5 md:p-6 mb-10" aria-label="Page sections">
        <h2 className="font-semibold text-foreground mb-3">In this guide</h2>
        <ul className="space-y-2.5">
          <li><a href="#how-to-use" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">How to use Tell Us Once</a></li>
          <li><a href="#what-you-need" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">What information you need</a></li>
          <li><a href="#what-it-covers" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">What Tell Us Once covers</a></li>
          <li><a href="#what-it-doesnt" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">What you still need to do yourself</a></li>
          <li><a href="#faq" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Common questions</a></li>
        </ul>
      </nav>

      {/* Featured snippet targets */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">What does Tell Us Once do?</h2>
        <p className="text-muted leading-relaxed">
          Tell Us Once notifies the DWP (state pension and benefits), HMRC (tax and National Insurance), DVLA (driving licence), HM Passport Office, your local council (council tax, electoral roll, Blue Badge, library cards, housing benefit), and public sector pension schemes (NHS, Teachers, Civil Service, Armed Forces, Police, Fire). It does not cover banks, building societies, utility companies, insurance providers, or private pensions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">How do I use Tell Us Once?</h2>
        <p className="text-muted leading-relaxed">
          The registrar gives you a unique reference number when you register the death. Use this number at <a href="https://www.gov.uk/tell-us-once" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gov.uk/tell-us-once</a> or call <a href="tel:08000857308" className="text-primary hover:underline">0800 085 7308</a> within 28 days. You will need the person's National Insurance number, benefit details, and driving licence or passport numbers if available.
        </p>
      </section>

      {/* Step by step */}
      <section id="how-to-use" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">How to use Tell Us Once: step by step</h2>
        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Register the death', desc: 'Book an appointment at the register office in the area where the person died. In England and Wales, you have 5 days; in Scotland, 8 days. The registrar will explain Tell Us Once and give you a reference number at the appointment.' },
            { step: '2', title: 'Gather the information you need', desc: 'Before using Tell Us Once, collect the person\'s National Insurance number, details of any benefits or tax credits they received, their driving licence number, their passport number, and details of any council services they used. You do not need all of these, but having them speeds up the process.' },
            { step: '3', title: 'Use it online or by phone', desc: 'Go to gov.uk/tell-us-once (available 24 hours) or call 0800 085 7308 (Monday to Friday 8am-8pm, Saturday 9am-4pm). Enter your reference number and follow the prompts. The online process takes around 15 minutes.' },
            { step: '4', title: 'Complete within 28 days', desc: 'You must use the service within 28 days of getting the reference number. If you miss this deadline, you will need to contact each government department individually, which takes considerably longer.' },
          ].map(s => (
            <div key={s.step} className="bg-card rounded-xl border border-border p-5 md:p-6 flex gap-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What information you need */}
      <section id="what-you-need" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">What information you need</h2>
        <div className="bg-card rounded-xl border border-border p-5 md:p-6">
          <p className="text-sm text-muted leading-relaxed mb-4">Gather as much of the following as you can before starting. You do not need every item, but it helps:</p>
          <ul className="space-y-2 text-sm text-muted">
            {[
              'Your Tell Us Once reference number (from the registrar)',
              'The deceased person\'s National Insurance number',
              'Details of any benefits or tax credits they received',
              'Their driving licence number',
              'Their passport number',
              'Council tax account number',
              'Blue Badge details (if they had one)',
              'Details of any public sector pension (NHS, Teachers, Civil Service, Armed Forces)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What it covers */}
      <section id="what-it-covers" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">What Tell Us Once covers</h2>
        <div className="bg-card rounded-xl border border-border p-5 md:p-6">
          <ul className="space-y-2.5 text-sm text-muted">
            {[
              { org: 'DWP', detail: 'All benefits: State Pension, Universal Credit, PIP, Attendance Allowance, ESA, Carer\'s Allowance, and more' },
              { org: 'HMRC', detail: 'Income tax, National Insurance, tax credits' },
              { org: 'DVLA', detail: 'Driving licence cancellation' },
              { org: 'HM Passport Office', detail: 'Passport cancellation' },
              { org: 'Local council', detail: 'Council tax, electoral register, Blue Badge, library cards, housing benefit' },
              { org: 'Public sector pensions', detail: 'NHS, Teachers, Civil Service, Armed Forces, Police, Fire' },
              { org: 'Veterans UK', detail: 'Armed Forces compensation and pension schemes' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-foreground">{item.org}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What it does NOT cover */}
      <section id="what-it-doesnt" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">What you still need to do yourself</h2>
        <div className="bg-primary-light rounded-lg p-4 mb-4">
          <p className="text-sm text-foreground">
            <strong>Important:</strong> Tell Us Once handles government departments only. There is a long list of private organisations you need to contact yourself. Our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> can save you time, or use the <Link href="/notify" className="text-primary hover:underline">complete notification list</Link> with contact details for each one.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 md:p-6">
          <ul className="space-y-2.5 text-sm text-muted">
            {[
              { org: 'Banks and building societies', tip: 'Use the free Death Notification Service at deathnotificationservice.co.uk to notify multiple banks at once' },
              { org: 'Private and workplace pensions', tip: 'Check for death-in-service benefits through the employer too' },
              { org: 'Insurance companies', tip: 'Life, home, car, travel, and pet insurance' },
              { org: 'Mortgage lender', tip: 'Check whether the mortgage had life insurance attached' },
              { org: 'Utility companies', tip: 'Gas, electricity, water. Transfer to surviving occupant or close the account' },
              { org: 'Phone and broadband providers', tip: 'Cancel or transfer contracts. You may be entitled to exit without penalty' },
              { org: 'TV Licensing', tip: 'Cancel or transfer. Refunds are available for unused months' },
              { org: 'GP surgery and NHS dentist', tip: 'Notify so records can be updated' },
              { org: 'Employer', tip: 'Ask about outstanding salary, holiday pay, and death-in-service benefits' },
              { org: 'Landlord or housing association', tip: 'Give appropriate notice. Check tenancy terms for your rights' },
              { org: 'Subscriptions', tip: 'Streaming, gym, magazines, charities, breakdown cover' },
              { org: 'Royal Mail', tip: 'Set up post redirection (from £37 for 3 months). This catches mail from organisations you may not know about' },
              { org: 'Social media and email', tip: 'Facebook and Instagram can be memorialised or deleted. Google has an Inactive Account Manager' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-urgent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong className="text-foreground">{item.org}:</strong> {item.tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cross-links */}
      <div className="bg-primary-light rounded-lg p-4 mb-10">
        <p className="text-sm text-foreground">
          <strong>Related:</strong> See our <Link href="/guide" className="text-primary hover:underline">step-by-step guide</Link> for the full process after a death. Use <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> to notify banks and utility companies. Browse our <Link href="/phone-directory" className="text-primary hover:underline">phone directory</Link> for contact numbers, or check <Link href="/guides/bereavement-benefits" className="text-primary hover:underline">what benefits you may be entitled to</Link>.
        </p>
      </div>

      {/* FAQ */}
      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about Tell Us Once</h2>
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

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a complete list of who to contact</h2>
        <p className="text-muted mb-6">Our personalised guide covers Tell Us Once and everything else you need to do, tailored to your situation.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
        <p className="text-sm text-muted mt-3">Free. No sign-up required. Takes about 3 minutes.</p>
      </div>

      <RelatedGuides currentPath="/tell-us-once" guides={['/guide', '/template-letters', '/phone-directory', '/deadline-tracker']} />

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
            '@type': 'HowTo',
            name: 'How to Use Tell Us Once to Report a Death',
            description: 'Step-by-step guide to using the Tell Us Once service to notify government departments after a death in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-20',
            author: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            step: [
              { '@type': 'HowToStep', name: 'Register the death', text: 'Book an appointment at the register office. The registrar will give you a Tell Us Once reference number.' },
              { '@type': 'HowToStep', name: 'Gather the information you need', text: 'Collect the person\'s National Insurance number, benefit details, driving licence number, passport number, and council service details.' },
              { '@type': 'HowToStep', name: 'Use it online or by phone', text: 'Go to gov.uk/tell-us-once or call 0800 085 7308. Enter your reference number and follow the prompts.' },
              { '@type': 'HowToStep', name: 'Complete within 28 days', text: 'You must use the service within 28 days of getting the reference number.' },
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
            headline: 'Tell Us Once Service UK 2026',
            description: 'How to use the Tell Us Once service to report a death to government departments in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-20',
            author: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            publisher: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            mainEntityOfPage: 'https://helpafterloss.co.uk/tell-us-once',
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
              { '@type': 'ListItem', position: 2, name: 'Tell Us Once', item: 'https://helpafterloss.co.uk/tell-us-once' },
            ],
          }),
        }}
      />
    </div>
  );
}
