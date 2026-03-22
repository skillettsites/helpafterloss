import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Tell Us Once Service: How It Works and How to Register (2026)',
  description: 'A complete guide to the Tell Us Once service in the UK. How it works, who it notifies, how to use it, what it does not cover, and what to do in Scotland and Northern Ireland.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/tell-us-once-service-guide' },
  openGraph: {
    title: 'Tell Us Once Service: How It Works and How to Register (2026)',
    description: 'Everything you need to know about the Tell Us Once service: who it notifies, how to register, and what you still need to do yourself.',
    url: 'https://helpafterloss.co.uk/blog/tell-us-once-service-guide',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tell Us Once: Complete Guide (2026)',
    description: 'How the Tell Us Once service works and who it notifies when someone dies.',
  },
};

export default function TellUsOnceGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'Tell Us Once Service Guide' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 22 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>11 min read</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Tell Us Once Service: How It Works and How to Register (2026)
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Tell Us Once is a free government service that saves you from having to contact multiple government departments individually after someone dies. One report notifies DWP, HMRC, the Passport Office, DVLA, the local council, and more. It is not perfect, and it does not cover everything, but it is one of the most useful things available to you in those overwhelming first days. This guide explains exactly how it works.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key facts</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> Tell Us Once is free to use</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Available in England and Wales (Scotland has a similar service; not available in Northern Ireland)</li>
          <li className="flex gap-2"><span className="font-bold">+</span> You need the unique reference number given to you by the registrar</li>
          <li className="flex gap-2"><span className="font-bold">+</span> You can complete it online, by phone, or at the register office</li>
          <li className="flex gap-2"><span className="font-bold">+</span> It does not notify banks, utilities, insurers, or private companies</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'what-is-it', label: 'What is Tell Us Once?' },
        { id: 'who-it-notifies', label: 'Who it notifies' },
        { id: 'how-to-use', label: 'How to use the service' },
        { id: 'what-you-need', label: 'What information you need' },
        { id: 'online-vs-phone', label: 'Online vs phone vs in person' },
        { id: 'what-it-doesnt-cover', label: 'What Tell Us Once does not cover' },
        { id: 'after-tell-us-once', label: 'What to do after Tell Us Once' },
        { id: 'scotland', label: 'Scotland' },
        { id: 'northern-ireland', label: 'Northern Ireland' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* What is it */}
      <h2 id="what-is-it" className="text-2xl font-bold text-foreground mb-6">What is Tell Us Once?</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Tell Us Once is a service run by the Department for Work and Pensions (DWP) that allows you to report a death to most central government departments and your local council in a single step. Without it, you would need to contact each department individually: DWP to stop benefits, HMRC to update tax records, the Passport Office to cancel the passport, DVLA to update driving records, and the council for council tax and electoral register changes.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          The service was introduced in 2012 and has since become available in most areas of England and Wales. It is one of the most genuinely helpful government services for bereaved people, though its name is slightly misleading because it does not cover everything. You will still need to contact many organisations yourself. More on that below.
        </p>
      </div>

      {/* Who it notifies */}
      <h2 id="who-it-notifies" className="text-2xl font-bold text-foreground mb-6">Who it notifies</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Tell Us Once will notify the following on your behalf:
        </p>
        <ul className="space-y-2 text-sm text-muted mb-4">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Department for Work and Pensions (DWP):</strong> Stops benefits and pensions (State Pension, Pension Credit, Universal Credit, ESA, JSA, Attendance Allowance, DLA, PIP, Carer's Allowance)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>HM Revenue and Customs (HMRC):</strong> Updates tax records, stops tax credits, deals with the deceased's Self Assessment if applicable</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>HM Passport Office:</strong> Cancels the passport</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Driver and Vehicle Licensing Agency (DVLA):</strong> Cancels the driving licence</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Identity and Passport Service:</strong> Cancels identity documents</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Local council:</strong> Updates council tax records, removes from the electoral register, cancels any blue badge, notifies housing benefit and council tax reduction teams</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Veterans UK:</strong> If the person received an Armed Forces pension or compensation</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>National Savings and Investments (NS&I):</strong> If the person held Premium Bonds or other NS&I products</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed">
          Each department will act on the notification independently. DWP will stop benefits (usually within a few days), HMRC will update tax records, and the council will adjust council tax. You do not need to follow up with each department unless there is a specific issue.
        </p>
      </div>

      {/* How to use */}
      <h2 id="how-to-use" className="text-2xl font-bold text-foreground mb-6">How to use the service</h2>
      <div className="space-y-4 mb-12">
        {[
          {
            step: '1',
            title: 'Register the death',
            desc: 'You must register the death at a register office before you can use Tell Us Once. At the end of the registration appointment, the registrar will give you a unique Tell Us Once reference number. Keep this safe.',
          },
          {
            step: '2',
            title: 'Choose how to complete it',
            desc: 'You can use Tell Us Once online, by phone (0800 085 7308), or at the register office itself (if the office offers this). Online is usually the quickest and allows you to do it in your own time.',
          },
          {
            step: '3',
            title: 'Enter the reference number',
            desc: 'Go to the Tell Us Once website (the registrar will give you the link) and enter your unique reference number. This links your report to the death registration.',
          },
          {
            step: '4',
            title: 'Provide the required information',
            desc: 'The system will ask you for details about the person who died and about any benefits, pensions, or government services they used. It takes about 15 to 20 minutes to complete. See below for the full list of information you need.',
          },
          {
            step: '5',
            title: 'Receive confirmation',
            desc: 'Once completed, you will receive a confirmation that your report has been submitted. Each department will process the notification and contact you separately if they need anything further.',
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

      {/* What you need */}
      <h2 id="what-you-need" className="text-2xl font-bold text-foreground mb-6">What information you need</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Have the following ready before you start:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The Tell Us Once reference number (from the registrar)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The deceased's National Insurance number</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Their date of birth and date of death</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Their full address</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Driving licence number (if they had one)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Passport number (if they had one)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Details of any benefits or pensions they were receiving</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Details of any council tax account</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The name and address of the next of kin or person dealing with the estate</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Details of any NS&I accounts (Premium Bonds, savings certificates)</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-4">
          Do not worry if you do not have all of these details. You can still complete the service and provide missing information later if needed. The system will not reject your report if some fields are left blank.
        </p>
      </div>

      {/* Online vs phone */}
      <h2 id="online-vs-phone" className="text-2xl font-bold text-foreground mb-6">Online vs phone vs in person</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Online</h3>
          <p className="text-sm text-muted leading-relaxed">
            The quickest option. You can complete it at any time (not limited to office hours), in your own home, and at your own pace. You can start, save your progress, and come back to it later. The website is accessible and works on phones and tablets.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">By phone</h3>
          <p className="text-sm text-muted leading-relaxed">
            Call 0800 085 7308 (Monday to Friday, 8am to 8pm). A trained operator will guide you through the process. This is a good option if you are not comfortable online or if you would prefer someone to talk you through it. The call usually takes 15 to 20 minutes.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">At the register office</h3>
          <p className="text-sm text-muted leading-relaxed">
            Some register offices offer to complete Tell Us Once with you at the end of the registration appointment. This saves a separate step, but be aware that you may not have all the information you need with you at that point (for example, the National Insurance number or passport number). If you prefer, ask the registrar for the reference number and complete it later at home.
          </p>
        </div>
      </div>

      {/* What it doesn't cover */}
      <h2 id="what-it-doesnt-cover" className="text-2xl font-bold text-foreground mb-6">What Tell Us Once does not cover</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-4">
        <p className="text-sm text-muted leading-relaxed mb-4">
          This is the part that catches most people out. Tell Us Once only covers government departments and local council services. You still need to contact the following yourself:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Banks and building societies</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Credit card companies</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Mortgage lenders</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Insurance companies (home, car, life, health, pet, travel)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Utility companies (gas, electricity, water)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Phone, broadband, and TV providers</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Subscription services (streaming, gym, magazines)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Social media companies</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The person's employer</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Private pension providers</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Landlords or letting agents</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Solicitors and accountants</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Royal Mail (to redirect post)</li>
        </ul>
      </div>
      <p className="text-sm text-muted mb-12">
        For a detailed breakdown and phone numbers, see our article: <Link href="/blog/what-tell-us-once-doesnt-cover" className="text-primary hover:underline">What Tell Us Once does not cover: the full list</Link>. Our <Link href="/notify" className="text-primary hover:underline">notification tool</Link> has step-by-step instructions for each organisation.
      </p>

      {/* After Tell Us Once */}
      <h2 id="after-tell-us-once" className="text-2xl font-bold text-foreground mb-6">What to do after Tell Us Once</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Once you have completed Tell Us Once, the government side is largely handled. Your next priorities are:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Contact the bank to notify them and ask about releasing funds (see <Link href="/blog/bank-probate-thresholds-2026" className="text-primary hover:underline">bank probate thresholds</Link>)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Contact home and car insurance companies (car insurance is void immediately upon death)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Arrange the funeral</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Begin gathering documents for probate</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Notify utility companies and update names on accounts</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-4">
          Our <Link href="/blog/what-to-do-when-someone-dies-uk" className="text-primary hover:underline">complete step-by-step checklist</Link> covers every task in order.
        </p>
      </div>

      {/* Scotland */}
      <h2 id="scotland" className="text-2xl font-bold text-foreground mb-6">Scotland</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed">
          Scotland has its own version of Tell Us Once, which works in a very similar way. The registrar will provide you with the reference number when you register the death. You can complete it online or by phone. The service notifies the same government departments. For more details on the Scottish process, see our <Link href="/guide/scotland" className="text-primary hover:underline">Scotland guide</Link>.
        </p>
      </div>

      {/* Northern Ireland */}
      <h2 id="northern-ireland" className="text-2xl font-bold text-foreground mb-6">Northern Ireland</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed">
          Tell Us Once is <strong>not available in Northern Ireland</strong>. You will need to contact each government department separately. This includes notifying the NI Social Security Agency, HMRC, the Passport Office, and the DVA (the Northern Ireland equivalent of DVLA). For more details, see our <Link href="/guide/northern-ireland" className="text-primary hover:underline">Northern Ireland guide</Link>.
        </p>
      </div>

      {/* FAQs */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {[
          { q: 'Is Tell Us Once compulsory?', a: 'No, it is optional. But it is free and saves you from making multiple separate phone calls, so there is no reason not to use it.' },
          { q: 'How long does it take to complete?', a: 'About 15 to 20 minutes online or by phone. At the register office, it may take longer depending on how busy they are.' },
          { q: 'Can someone else complete it on my behalf?', a: 'Yes, as long as they have the reference number and the required information. A family member, friend, or funeral director can do it for you.' },
          { q: 'What if I lose the reference number?', a: 'Contact the register office where the death was registered. They can provide the reference number again.' },
          { q: 'Does Tell Us Once stop the State Pension?', a: 'Yes. DWP will stop the State Pension and any other benefits. If you are a surviving spouse, DWP will also contact you about whether you are entitled to Bereavement Support Payment or any other benefits in your own right.' },
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
          <li><strong>Tell Us Once helpline:</strong> 0800 085 7308 (Mon-Fri 8am-8pm)</li>
          <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677 (free)</li>
          <li><strong>Samaritans:</strong> 116 123 (free, 24 hours)</li>
        </ul>
      </div>

      <RelatedGuides
        currentPath="/blog/tell-us-once-service-guide"
        guides={['/tell-us-once', '/blog/what-tell-us-once-doesnt-cover', '/notify', '/blog/registering-a-death-uk']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need a personalised checklist?</h2>
        <p className="text-muted mb-6">Our free tool creates a step-by-step plan based on your specific situation, with deadlines calculated from the date of death.</p>
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
            headline: 'Tell Us Once Service: How It Works and How to Register (2026)',
            description: 'A complete guide to the Tell Us Once service, covering who it notifies, how to use it, and what it does not cover.',
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
              '@id': 'https://helpafterloss.co.uk/blog/tell-us-once-service-guide',
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
              { '@type': 'ListItem', position: 3, name: 'Tell Us Once Service Guide', item: 'https://helpafterloss.co.uk/blog/tell-us-once-service-guide' },
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
              { '@type': 'Question', name: 'Is Tell Us Once compulsory?', acceptedAnswer: { '@type': 'Answer', text: 'No, it is optional. But it is free and saves you from making multiple separate phone calls.' } },
              { '@type': 'Question', name: 'Can someone else complete Tell Us Once on my behalf?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, as long as they have the reference number and the required information.' } },
              { '@type': 'Question', name: 'Does Tell Us Once stop the State Pension?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. DWP will stop the State Pension and any other benefits.' } },
            ],
          }),
        }}
      />
    </div>
  );
}
