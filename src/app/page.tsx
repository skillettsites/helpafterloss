import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Help After Loss - Free Bereavement Guidance for the UK',
  description: 'When someone dies, there is so much to do. We give you a free, personalised step-by-step guide covering everything from registering the death to probate, finances, and beyond. Trusted UK bereavement support.',
  alternates: { canonical: 'https://helpafterloss.co.uk' },
};

const STEPS = [
  {
    number: '1',
    title: 'Answer a few questions',
    description: 'Tell us about your situation. We will ask about the person who died, your relationship, and the circumstances. It takes about 3 minutes.',
  },
  {
    number: '2',
    title: 'Get your personalised guide',
    description: 'We create a checklist of everything you need to do, tailored to your exact situation, with real deadlines, helpful links, and estimated costs.',
  },
  {
    number: '3',
    title: 'Work through it at your own pace',
    description: 'Tick things off as you go. Your progress is saved. Come back whenever you need to. There is no rush.',
  },
];

const STATS = [
  { number: '680,000+', label: 'people struggle with bereavement admin in the UK each year' },
  { number: '21', label: 'organisations you may need to contact after a death' },
  { number: '100%', label: 'free, with no sign-up required' },
];

const FEATURES = [
  {
    title: 'Personalised to your situation',
    description: 'Not a generic list. Our guide adapts based on your answers, so you only see what applies to you. Whether there is a will or not, property or not, in England, Wales, Scotland, or Northern Ireland.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Actual deadlines from the date of death',
    description: 'We calculate your real deadlines. Register within 5 days. Apply for probate within 3 months. Inheritance tax within 6 months. So you never miss anything important.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Estimated costs so nothing is a surprise',
    description: 'From death certificates to funeral costs, probate fees to solicitor charges. We estimate the total cost based on your situation, with tips on how to save money.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Covers all four UK nations',
    description: 'Different rules for England, Wales, Scotland, and Northern Ireland. We adjust everything automatically. Probate becomes Confirmation in Scotland. Tell Us Once is not available in NI.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Respects cultural and religious needs',
    description: 'Muslim, Jewish, Hindu, Sikh, Buddhist, and Christian traditions are all supported. We adjust timelines and guidance to respect your faith requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    title: 'Your data stays on your device',
    description: 'We do not collect, store, or share any of your personal information. Everything is saved locally on your phone or computer. No sign-up, no tracking, no selling data.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            When someone dies, we help you know what to do
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            A free, personalised step-by-step guide covering everything from registering the death to probate, finances, and beyond. Tailored to your situation, with real deadlines and no jargon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start"
              className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Get Your Personalised Guide
            </Link>
            <Link
              href="/guide"
              className="px-8 py-4 text-primary text-lg font-medium rounded-xl hover:bg-primary-light transition-colors"
            >
              Read the General Guide
            </Link>
          </div>
          <p className="text-sm text-muted mt-4">Free. No sign-up. Takes about 3 minutes.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4" aria-label="Key statistics">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-white" aria-labelledby="how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 id="how-it-works" className="text-3xl font-bold text-foreground text-center mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map(step => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4" aria-labelledby="features">
        <div className="max-w-4xl mx-auto">
          <h2 id="features" className="text-3xl font-bold text-foreground text-center mb-4">
            Why people trust Help After Loss
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Built by people who have been through it. We know how overwhelming bereavement admin can be. That is why we made this free, simple, and personal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6">
                <div className="text-primary mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="py-16 px-4 bg-white" aria-labelledby="covers">
        <div className="max-w-4xl mx-auto">
          <h2 id="covers" className="text-3xl font-bold text-foreground text-center mb-12">
            Everything you need to know, in one place
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Registering the death',
              'Tell Us Once',
              'Funeral planning',
              'Death certificates',
              'Probate guide',
              'Inheritance tax',
              'Intestacy rules',
              'Bank notifications',
              'Pension claims',
              'Life insurance',
              'Property & mortgage',
              'Council tax',
              'Digital accounts',
              'Benefits & support',
              'Cultural guidance',
              'Cost estimates',
            ].map((topic, i) => (
              <div key={i} className="bg-background rounded-lg p-3 text-center">
                <p className="text-sm font-medium text-foreground">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary-light" aria-label="Get started">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to get your personalised guide?
          </h2>
          <p className="text-muted mb-8">
            Answer a few simple questions and we will tell you exactly what you need to do, when to do it, and how.
          </p>
          <Link
            href="/start"
            className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Help After Loss',
            url: 'https://helpafterloss.co.uk',
            description: 'Free, personalised bereavement guidance for the UK. Step-by-step help when someone dies.',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Help After Loss',
            url: 'https://helpafterloss.co.uk',
            description: 'Free bereavement guidance and support for the UK.',
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
          }),
        }}
      />
    </div>
  );
}
