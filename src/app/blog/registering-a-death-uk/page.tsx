import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Registering a Death in the UK: What to Bring, Where to Go (2026)',
  description: 'Everything you need to know about registering a death in the UK. What documents to bring, where to register, who can register, what happens at the appointment, and what you receive afterwards.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/registering-a-death-uk' },
  openGraph: {
    title: 'Registering a Death in the UK: What to Bring, Where to Go (2026)',
    description: 'A step-by-step guide to registering a death in the UK, including what to bring, where to go, and what to expect at the appointment.',
    url: 'https://helpafterloss.co.uk/blog/registering-a-death-uk',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Registering a Death in the UK (2026)',
    description: 'What to bring, where to go, and what happens at the registration appointment.',
  },
};

export default function RegisteringADeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'Registering a Death in the UK' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 22 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>11 min read</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Registering a Death in the UK: What to Bring, Where to Go (2026)
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Registering a death is one of the first things you need to do, and it can feel daunting when you are already overwhelmed. This guide covers everything in plain English: the deadline, who can register, where to go, what documents to bring, what the registrar will ask you, and what you will receive at the end.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key facts</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Deadline:</strong> Within 5 days in England and Wales (8 days in Scotland)</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Cost:</strong> Registration is free. Death certificates cost £11 each.</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Appointment:</strong> Most register offices require a booked appointment</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Duration:</strong> About 30 minutes</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Where:</strong> Any register office in England and Wales (ideally the district where the death occurred)</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'when', label: 'When to register' },
        { id: 'who-can-register', label: 'Who can register the death' },
        { id: 'where', label: 'Where to register' },
        { id: 'what-to-bring', label: 'What to bring' },
        { id: 'at-the-appointment', label: 'What happens at the appointment' },
        { id: 'what-you-receive', label: 'What you receive' },
        { id: 'death-certificates', label: 'Death certificates: how many and cost' },
        { id: 'coroner', label: 'If the coroner is involved' },
        { id: 'medical-examiner', label: 'The medical examiner process' },
        { id: 'scotland-ni', label: 'Scotland and Northern Ireland' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* When */}
      <h2 id="when" className="text-2xl font-bold text-foreground mb-6">When to register</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          In England and Wales, a death must be registered within 5 days. In Scotland, the deadline is 8 days. In Northern Ireland, it is 5 days. The clock starts from the date of death, not the date you received the medical certificate.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If the coroner is involved (for example, because the cause of death is unknown or the death was sudden), the registration may be delayed. The coroner's office will advise you on when registration can proceed. In some cases, the coroner will register the death themselves, and you will not need to attend the register office.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          If you cannot register within the 5-day deadline (for example, because you are waiting for the medical examiner or because no appointment is available), contact the register office to let them know. They will usually extend the period. You will not be penalised for a short delay caused by circumstances beyond your control.
        </p>
      </div>

      {/* Who can register */}
      <h2 id="who-can-register" className="text-2xl font-bold text-foreground mb-6">Who can register the death</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The following people can register a death:
        </p>
        <ul className="space-y-2 text-sm text-muted mb-4">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> A relative of the deceased (this is the most common)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Someone who was present at the death</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> An official from the hospital or care home where the death occurred</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The person arranging the funeral (if none of the above are available)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> A person who found the body (if the death was at home and no relative is available)</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed">
          You do not need to be the next of kin to register a death. If you are not a relative but were present at the death or are arranging the funeral, you can register. The registrar may ask about your relationship to the deceased and your reason for registering.
        </p>
      </div>

      {/* Where */}
      <h2 id="where" className="text-2xl font-bold text-foreground mb-6">Where to register</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          You should register the death at the register office for the area where the death occurred. You can find your nearest register office at <a href="https://www.gov.uk/register-offices" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK</a> or by calling your local council.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If it is more convenient, you can register at a different register office. However, this means the paperwork has to be forwarded to the correct district, which adds a few working days. The funeral cannot proceed until the correct district has processed the registration and issued the burial or cremation certificate.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Most register offices require you to book an appointment. Call the office or visit the council website to book. Same-day appointments are sometimes available, but in busy areas you may need to wait a day or two. If the 5-day deadline is approaching and you cannot get an appointment, call the office and explain the situation.
        </p>
      </div>

      {/* What to bring */}
      <h2 id="what-to-bring" className="text-2xl font-bold text-foreground mb-6">What to bring</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          You must bring the medical certificate of cause of death (MCCD). This is the green form issued by the doctor or hospital. Without it, the registrar cannot proceed.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          You should also bring (if available):
        </p>
        <ul className="space-y-2 text-sm text-muted mb-4">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The deceased's birth certificate</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Their marriage or civil partnership certificate</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Their NHS medical card or number</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Their passport or driving licence (as proof of identity)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Their National Insurance number</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Details of their occupation and employer (current or most recent)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Details of any pension or benefits they were receiving from the DWP</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed">
          Do not worry if you do not have all of these. The only essential document is the MCCD. The registrar can work with whatever information you have. If you are missing something, they will tell you whether it is needed and how to provide it later.
        </p>
      </div>

      {/* At the appointment */}
      <h2 id="at-the-appointment" className="text-2xl font-bold text-foreground mb-6">What happens at the appointment</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The appointment typically takes about 30 minutes. The registrar will be sympathetic and will guide you through the process. They will ask you the following information about the person who has died:
        </p>
        <ul className="space-y-2 text-sm text-muted mb-4">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Full name (and maiden name if applicable)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Date and place of birth</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Last address</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Occupation (current or most recent)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Marital status</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> If married: the date of birth and occupation of the surviving spouse</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Whether they were receiving a state pension or any benefits</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Their NHS number (if known)</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The registrar will check the information with you and enter it into the register. You will be asked to verify that the details are correct. Once registered, the death cannot be un-registered, so take a moment to check everything.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          At the end of the appointment, the registrar will explain the Tell Us Once service and give you a unique reference number. You can complete Tell Us Once at the register office, online, or by phone. See our <Link href="/blog/tell-us-once-service-guide" className="text-primary hover:underline">Tell Us Once guide</Link> for the full details.
        </p>
      </div>

      {/* What you receive */}
      <h2 id="what-you-receive" className="text-2xl font-bold text-foreground mb-6">What you receive</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Certificate for Burial or Cremation (the green form)</h3>
          <p className="text-sm text-muted leading-relaxed">
            This is the legal document that allows the funeral to proceed. Give it to your funeral director. Without it, the burial or cremation cannot take place. It is free.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Certified copies of the death certificate</h3>
          <p className="text-sm text-muted leading-relaxed">
            These are the official documents that banks, solicitors, insurance companies, and other organisations require as proof of death. They cost £11 each and you can order as many as you need. It is cheaper and quicker to order them at registration than to request them later from the General Register Office.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Tell Us Once reference number</h3>
          <p className="text-sm text-muted leading-relaxed">
            A unique number that lets you report the death to multiple government departments in one step. Keep this safe. You will need it to complete the Tell Us Once process.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">BD8 form (Certificate of Registration of Death)</h3>
          <p className="text-sm text-muted leading-relaxed">
            This form was previously needed for social security purposes. Since Tell Us Once, it is less commonly required, but the registrar may still give you one.
          </p>
        </div>
      </div>

      {/* Death certificates */}
      <h2 id="death-certificates" className="text-2xl font-bold text-foreground mb-6">Death certificates: how many and cost</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-4">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Death certificates cost £11 each when ordered at registration. If you order them later from the General Register Office (GRO), they cost £11 online or £11 by post (though processing takes longer). We recommend ordering at least 3 to 5 copies at registration. You will need them for:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Each bank and building society (most require an original, though some accept a certified copy)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The probate application</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Insurance companies</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Pension providers</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The mortgage lender</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> HMRC (if they request one)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The Land Registry (for property transfer)</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-4">
          Having multiple copies means you can contact several organisations in parallel instead of sending one copy to one organisation, waiting for it to be returned, and then sending it to the next. This can save weeks. For a detailed breakdown, see our article on <Link href="/blog/death-certificate-how-many-copies" className="text-primary hover:underline">how many death certificates you need</Link>.
        </p>
      </div>

      {/* Coroner */}
      <h2 id="coroner" className="text-2xl font-bold text-foreground mb-6">If the coroner is involved</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The coroner is involved when the cause of death is unclear, the death was sudden or unnatural, or the person was not seen by a doctor recently. If a post-mortem is ordered, registration is delayed until the coroner releases the paperwork. In most cases, this takes a few days to a couple of weeks. If an inquest is opened, registration may be delayed for longer, but the coroner can issue an interim certificate that allows the funeral to proceed.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          If the coroner determines the cause of death, they will either issue a Form 100A (which allows you to register the death in the normal way) or register the death themselves if an inquest has been held. The coroner's office will keep you informed throughout the process.
        </p>
      </div>

      {/* Medical examiner */}
      <h2 id="medical-examiner" className="text-2xl font-bold text-foreground mb-6">The medical examiner process</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Since September 2024, all deaths in England and Wales (that are not referred to the coroner) must be reviewed by a medical examiner before the MCCD is issued. The medical examiner is an independent, senior doctor who reviews the cause of death and may contact the bereaved family or the attending doctor with questions.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          This process is free and usually takes 1 to 2 working days. It was introduced to improve the accuracy of death registration and to give bereaved families an opportunity to raise concerns about the care the person received. If the medical examiner contacts you, it does not mean anything is wrong. It is a routine part of the process.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Once the medical examiner has approved the cause of death, the MCCD can be issued and you can proceed to register the death.
        </p>
      </div>

      {/* Scotland and NI */}
      <h2 id="scotland-ni" className="text-2xl font-bold text-foreground mb-6">Scotland and Northern Ireland</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Scotland</h3>
          <p className="text-sm text-muted leading-relaxed">
            In Scotland, the death must be registered within 8 days at the registrar for the area where the death occurred. The process is very similar to England and Wales. Death certificates cost £12 each. The medical examiner system was introduced earlier in Scotland. See our <Link href="/guide/scotland" className="text-primary hover:underline">Scotland guide</Link> for details.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Northern Ireland</h3>
          <p className="text-sm text-muted leading-relaxed">
            In Northern Ireland, the death must be registered within 5 days at the district registrar. The death can only be registered in the district where it occurred. Death certificates cost £15 each. Tell Us Once is not available; you will need to contact government departments separately. See our <Link href="/guide/northern-ireland" className="text-primary hover:underline">Northern Ireland guide</Link> for details.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {[
          { q: 'Can I register a death online?', a: 'No, death registration must be done in person at a register office (or by phone in exceptional circumstances, such as during the COVID-19 pandemic). You need to attend an appointment.' },
          { q: 'Can I register a death in a different area from where the person died?', a: 'Yes, you can register at any register office in England and Wales. However, the registration will need to be forwarded to the correct district, which adds a few working days. The funeral cannot proceed until the correct district has processed it.' },
          { q: 'What if I cannot attend within 5 days?', a: 'Contact the register office and explain the situation. They can extend the deadline. Common reasons include waiting for the coroner or the medical examiner, or being unable to get an appointment.' },
          { q: 'Can a funeral director register the death?', a: 'A funeral director cannot register the death themselves. Only a relative, a person present at the death, or the person arranging the funeral can register. However, a funeral director can advise you on the process and may help you book the appointment.' },
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
          <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677 (free)</li>
          <li><strong>Samaritans:</strong> 116 123 (free, 24 hours)</li>
          <li><strong>Find your register office:</strong> <a href="https://www.gov.uk/register-offices" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK register offices</a></li>
        </ul>
      </div>

      <RelatedGuides
        currentPath="/blog/registering-a-death-uk"
        guides={['/blog/what-to-do-when-someone-dies-uk', '/blog/tell-us-once-service-guide', '/blog/death-certificate-how-many-copies', '/guide']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need a personalised checklist?</h2>
        <p className="text-muted mb-6">Our free tool creates a step-by-step plan for everything you need to do after a death, with deadlines calculated from the date of death.</p>
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
            headline: 'Registering a Death in the UK: What to Bring, Where to Go (2026)',
            description: 'Everything you need to know about registering a death in the UK, including what documents to bring, where to register, and what to expect.',
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
              '@id': 'https://helpafterloss.co.uk/blog/registering-a-death-uk',
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
              { '@type': 'ListItem', position: 3, name: 'Registering a Death in the UK', item: 'https://helpafterloss.co.uk/blog/registering-a-death-uk' },
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
              { '@type': 'Question', name: 'Can I register a death online?', acceptedAnswer: { '@type': 'Answer', text: 'No, death registration must be done in person at a register office.' } },
              { '@type': 'Question', name: 'Can I register a death in a different area?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can register at any register office in England and Wales, but the paperwork must be forwarded to the correct district, adding a few working days.' } },
              { '@type': 'Question', name: 'Can a funeral director register the death?', acceptedAnswer: { '@type': 'Answer', text: 'No. Only a relative, a person present at the death, or the person arranging the funeral can register.' } },
            ],
          }),
        }}
      />
    </div>
  );
}
