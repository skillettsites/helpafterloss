import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tell Us Once - Report a Death to Government Services',
  description: 'How to use the Tell Us Once service to report a death to most government departments in one go. What it covers, what it does not cover, and what you need to do separately.',
  alternates: { canonical: 'https://helpafterloss.co.uk/tell-us-once' },
  openGraph: {
    title: 'Tell Us Once - Report a Death to Government Services',
    description: 'How to use the Tell Us Once service to notify multiple government departments about a death in one step.',
    url: 'https://helpafterloss.co.uk/tell-us-once',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tell Us Once Service - Report a Death to Government',
    description: 'Notify DWP, HMRC, DVLA, Passport Office, and your local council in one go.',
  },
};

export default function TellUsOncePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Tell Us Once: Report a Death to Government in One Go
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Tell Us Once is a free government service that lets you report a death to most national and local government organisations with a single notification. It saves you having to contact each one separately.
      </p>

      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <p className="text-sm text-amber-800 font-medium">
          Tell Us Once is available in England, Wales, and Scotland. It is not available in Northern Ireland, where you need to contact each department separately.
        </p>
      </div>

      {/* How to use */}
      <h2 className="text-2xl font-bold text-foreground mb-6">How to use Tell Us Once</h2>
      <div className="space-y-4 mb-12">
        {[
          { step: '1', title: 'Get your reference number', desc: 'When you register the death, the registrar will give you a Tell Us Once reference number and explain the service.' },
          { step: '2', title: 'Use it online or by phone', desc: 'Go to gov.uk/tell-us-once or call 0800 085 7308. You will need: the Tell Us Once reference number, the person\'s National Insurance number (if known), details of any benefits they received, their driving licence and passport numbers (if known), and details of any local council services they used.' },
          { step: '3', title: 'Complete within 28 days', desc: 'You must use the service within 28 days of getting the reference number.' },
        ].map(s => (
          <div key={s.step} className="bg-card rounded-xl border border-border p-6 flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What it covers */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What Tell Us Once covers</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <ul className="space-y-2 text-sm text-muted">
          {[
            'DWP (all benefits: State Pension, Universal Credit, PIP, Attendance Allowance, ESA, etc.)',
            'HMRC (tax, National Insurance, tax credits)',
            'DVLA (driving licence cancellation)',
            'HM Passport Office (passport cancellation)',
            'Local council (council tax, electoral register, Blue Badge, library cards)',
            'Public sector pension schemes (NHS, Teachers, Civil Service, Armed Forces, Police, Fire)',
            'Veterans UK',
            'Housing benefit',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* What it does NOT cover */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What you still need to do separately</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted mb-4">Tell Us Once does not notify the following. You need to contact these yourself:</p>
        <ul className="space-y-2 text-sm text-muted">
          {[
            'Banks and building societies (use the Death Notification Service or contact individually)',
            'Private and workplace pension providers',
            'Insurance companies (life, home, car, travel)',
            'Mortgage lender',
            'Utility companies (gas, electricity, water)',
            'Phone and broadband providers',
            'TV Licensing',
            'GP surgery and NHS dentist',
            'Employer of the deceased',
            'Private landlord or housing association',
            'Subscription services (streaming, gym, magazines)',
            'Royal Mail (for post redirection)',
            'Social media and email accounts',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-urgent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a complete list of who to contact</h2>
        <p className="text-muted mb-6">Our personalised guide covers Tell Us Once and everything else, tailored to your situation.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Use Tell Us Once to Report a Death',
            description: 'Step-by-step guide to using the Tell Us Once service to notify government departments after a death in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            step: [
              { '@type': 'HowToStep', name: 'Get your reference number', text: 'When you register the death, the registrar will give you a Tell Us Once reference number and explain the service.' },
              { '@type': 'HowToStep', name: 'Use it online or by phone', text: 'Go to gov.uk/tell-us-once or call 0800 085 7308. You will need the reference number, National Insurance number, benefit details, driving licence and passport numbers, and local council service details.' },
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
