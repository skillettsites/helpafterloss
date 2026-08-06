import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PageDisclaimer } from '@/components/PageDisclaimer';

export const metadata: Metadata = {
  title: 'Tell Us Once Service UK 2026 - What It Covers, How to Use It, What You Still Need to Do',
  description: 'Tell Us Once lets you report a death to DWP, HMRC, DVLA, Passport Office, and your council in one step. Free service, 28-day deadline. See exactly what it covers and what it does not.',
  alternates: { canonical: 'https://helpafterloss.co.uk/tell-us-once' },
  openGraph: {
    title: 'Tell Us Once Service UK 2026 - What It Covers, How to Use It',
    description: 'Report a death to most government departments in one step. Free, available online or by phone. See what it covers and what you still need to do separately.',
    url: 'https://helpafterloss.co.uk/tell-us-once',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
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
    a: 'The registrar gives you a unique Tell Us Once reference number when you register the death. You cannot use the service without this number, and you have 28 days from the day it is issued to use it. If you forget to ask, contact the register office afterwards and they can provide it.',
  },
  {
    q: 'Can I use Tell Us Once online?',
    a: 'Yes. You can use it online at gov.uk/tell-us-once at any time, or by phone. The registrar will give you the number to call along with your reference number, and the line most people are given is 0800 085 7308.',
  },
  {
    q: 'What happens if I miss the 28-day deadline?',
    a: 'The 28 days run from the day you are given your unique reference number, not from the registration itself. If that time passes, you would need to contact each government department yourself. It is not the end of the world, and it is always worth ringing the register office to ask before you assume the worst.',
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
    a: 'You need the Tell Us Once reference number from the registrar, their National Insurance number if you know it, details of any benefits or tax credits they received, their driving licence number, their passport number, and details of any local council services they used (council tax, Blue Badge, library cards, and so on).',
  },
  {
    q: 'Does Tell Us Once stop benefit payments automatically?',
    a: 'Yes. Tell Us Once notifies the DWP, which will stop the benefits that were being paid to them. If you are their surviving husband, wife, or partner, your own benefits will not be affected, though you may need to speak to the DWP separately about changes to your household income or about claiming Bereavement Support Payment.',
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
        Tell Us Once is a free government service that lets you report a death to most national and local government organisations in one go. It is one of the genuinely kind parts of this process, saving you hours of phone calls and paperwork at a time when you have quite enough to carry.
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
          Tell Us Once notifies the DWP (state pension and benefits), HMRC (tax and National Insurance), DVLA (driving licence, and removal as registered keeper of up to 5 vehicles), HM Passport Office, your local council (council tax, electoral roll, Blue Badge, library cards, housing benefit), Social Security Scotland, and public sector pension schemes (NHS, Civil Service, Armed Forces, local government). It does not cover banks, building societies, utility companies, insurance providers, or private pensions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">How do I use Tell Us Once?</h2>
        <p className="text-muted leading-relaxed">
          The registrar gives you a unique reference number when you register the death. Use it at <a href="https://www.gov.uk/tell-us-once" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gov.uk/tell-us-once</a> or call <a href="tel:08000857308" className="text-primary hover:underline">0800 085 7308</a> within 28 days of that number being issued. Have their National Insurance number, benefit details, and driving licence or passport numbers to hand if you can find them.
        </p>
      </section>

      {/* Step by step */}
      <section id="how-to-use" className="mb-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">How to use Tell Us Once: step by step</h2>

        <div className="bg-warm border border-warm-border rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-amber-900 mb-2">One thing to do first, if they had a Motability car</h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            Please ring Motability on <a href="tel:03004564566" className="font-semibold underline">0300 456 4566</a> before you use Tell Us Once. Motability are clear that once Tell Us Once has gone through, the vehicle can no longer be driven. If you speak to them first, the family can usually keep using the car for up to two weeks while you make other arrangements. It is a small thing that is very easily missed, and it can leave you without transport at the worst possible moment.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Register the death', desc: 'Book an appointment at the register office for the area where they died. In England and Wales you have 5 days; in Scotland, 8 days. The registrar will explain Tell Us Once and hand you a reference number while you are there.' },
            { step: '2', title: 'Gather what you can', desc: 'Before you start, gather their National Insurance number, details of any benefits or tax credits they received, their driving licence and passport numbers, and details of any council services they used. You do not need every single one, but having them to hand makes it quicker.' },
            { step: '3', title: 'Use it online or by phone', desc: 'Go to gov.uk/tell-us-once, or call the number the registrar gives you (usually 0800 085 7308). Enter your reference number and follow the prompts. Online it takes around 15 minutes.' },
            { step: '4', title: 'Use it within 28 days', desc: 'The service must be used within 28 days of getting your unique reference number, so the clock starts when the registrar hands it to you rather than at the registration itself. If that date passes, you would need to contact each government department yourself, which takes considerably longer, so it is worth setting a reminder.' },
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
          <p className="text-sm text-muted leading-relaxed mb-4">Gather as much of this as you can before you start. You do not need every item, but each one helps things go smoothly:</p>
          <ul className="space-y-2 text-sm text-muted">
            {[
              'Your Tell Us Once reference number (from the registrar)',
              'Their National Insurance number',
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
              { org: 'DVLA', detail: 'Cancels the driving licence, removes the person as registered keeper of up to 5 vehicles, and ends the vehicle tax. You must still tell DVLA separately if you sell a vehicle, keep one, or want to keep a personalised registration number' },
              { org: 'HM Passport Office', detail: 'Cancels the passport. There is no option here to ask for the passport back, so if you would like it as a keepsake, use form D1 instead' },
              { org: 'Local council', detail: 'Council tax, electoral register, Blue Badge, library cards, housing benefit' },
              { org: 'Public sector pensions', detail: 'NHS, Civil Service, Armed Forces, local government, and the Scottish Public Pension Agency schemes' },
              { org: 'Veterans UK', detail: 'Armed Forces compensation and pension schemes' },
              { org: 'Social Security Scotland', detail: 'Devolved Scottish benefits' },
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
            <strong>Worth knowing:</strong> Tell Us Once covers government departments only, so there is still a list of private organisations to contact yourself. Our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> will save you time writing them, and the <Link href="/notify" className="text-primary hover:underline">complete notification list</Link> has contact details for each one.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 md:p-6">
          <ul className="space-y-2.5 text-sm text-muted">
            {[
              { org: 'Banks and building societies', tip: 'Use the free Death Notification Service at deathnotificationservice.co.uk to notify multiple banks at once' },
              { org: 'Private and workplace pensions', tip: 'Check for death-in-service benefits through the employer too' },
              { org: 'Insurance companies', tip: 'Life, home, car, travel, and pet insurance. Check with the motor insurer before anyone drives the car, since cover is not guaranteed to continue, and arrange cover before anyone drives the car' },
              { org: 'Mortgage lender', tip: 'Check whether the mortgage had life insurance attached' },
              { org: 'Utility companies', tip: 'Gas, electricity, water. Transfer to surviving occupant or close the account' },
              { org: 'Phone and broadband providers', tip: 'Cancel or transfer contracts. You may be entitled to exit without penalty' },
              { org: 'TV Licensing', tip: 'Cancel or transfer. Refunds are available for unused months' },
              { org: 'GP surgery and NHS dentist', tip: 'Notify so records can be updated' },
              { org: 'Employer', tip: 'Ask about outstanding salary, holiday pay, and death-in-service benefits' },
              { org: 'Landlord or housing association', tip: 'Give appropriate notice. Check tenancy terms for your rights' },
              { org: 'Subscriptions', tip: 'Streaming, gym, magazines, charities, breakdown cover' },
              { org: 'Royal Mail', tip: 'Set up post redirection through their special circumstances service. There is a charge, and current prices are on royalmail.com. It catches mail from organisations you may not know about' },
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

      <PageDisclaimer lastReviewed="August 2026" jurisdiction="england-wales" />

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
            dateModified: '2026-08-06',
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
            image: 'https://helpafterloss.co.uk/opengraph-image',
            headline: 'Tell Us Once Service UK 2026',
            description: 'How to use the Tell Us Once service to report a death to government departments in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-08-06',
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
