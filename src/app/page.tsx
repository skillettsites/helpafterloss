import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Help After Loss - Free Bereavement Guidance for the UK',
  description: 'When someone you love passes away, there is a great deal to sort out. We give you a free, personalised step-by-step guide, from registering the death through to probate and finances. Gentle, plain English, no sign-up.',
  alternates: { canonical: 'https://helpafterloss.co.uk' },
  openGraph: {
    title: 'Help After Loss - Free Bereavement Guidance for the UK',
    description: 'Free, personalised step-by-step guidance after someone passes away. From registering the death through to probate and finances.',
    url: 'https://helpafterloss.co.uk',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help After Loss - Free Bereavement Guidance',
    description: 'Free, personalised step-by-step guidance for UK families after someone passes away.',
  },
};

const STEPS = [
  {
    number: '1',
    title: 'Tell us a little about your situation',
    description: 'A few gentle questions about the person you have lost and where things stand. Skip anything you would rather not answer. It takes about three minutes.',
  },
  {
    number: '2',
    title: 'We put your guide together',
    description: 'A calm list of what needs doing, shaped around your answers, with the dates that matter, the links you will need, and a rough idea of any costs.',
  },
  {
    number: '3',
    title: 'Take it at whatever pace suits you',
    description: 'Tick things off as you manage them. Your progress is kept safe on your own device, so you can close the page and come back whenever you feel able.',
  },
];

const STATS = [
  { number: '5 days', label: 'is all you usually have to register a death in England, Wales and Northern Ireland. We will work out your date for you.' },
  { number: '47', label: 'banks, utilities, insurers and government offices in our directory, with their bereavement phone numbers' },
  { number: 'Free', label: 'from start to finish, with no sign-up and nothing saved about you' },
];

const FEATURES = [
  {
    title: 'Shaped around you, not a generic list',
    description: 'Your guide changes with your answers, so you are never handed jobs that do not apply to you. Whether there is a will or not, property or not, in England, Wales, Scotland, or Northern Ireland.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'The dates that genuinely matter',
    description: 'We work the real dates out for you, so nothing important slips by while you have enough on your mind. Registering the death, inheritance tax, probate: you will see what is due and when.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'No unwelcome surprises about money',
    description: 'Certificates, the funeral, probate fees, solicitors if you need one. We give you a realistic idea of the cost up front, along with the ways families most often save.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Right for your part of the UK',
    description: 'The rules differ across England, Wales, Scotland and Northern Ireland, and we adjust for that quietly in the background. Probate is called Confirmation in Scotland, and Tell Us Once is not offered in Northern Ireland.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Mindful of faith and tradition',
    description: 'Muslim, Jewish, Hindu, Sikh, Buddhist and Christian traditions are all accounted for, including where a funeral needs to happen quickly. Your beliefs shape the timings we suggest.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    title: 'What you tell us stays with you',
    description: 'Your answers never leave your own phone or computer. We do not collect them, store them, or pass them to anyone. No sign-up, and nothing sold on.',
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
          <p className="text-sm font-medium text-primary-dark mb-4">We are so sorry for your loss</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            When someone you love passes away, you do not have to work it all out on your own
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-4">
            There is a lot to sort out, and none of it feels easy right now. We will quietly put together a list of what needs doing, when it needs doing, and how, written in plain English and shaped around your situation.
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            You can do a little, then come back later. Nothing here is urgent unless we say so.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start"
              className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Start when you are ready
            </Link>
            <Link
              href="/guide"
              className="px-8 py-4 text-primary text-lg font-medium rounded-xl hover:bg-primary-light transition-colors"
            >
              Or just read the guide
            </Link>
          </div>
          <p className="text-sm text-muted mt-4">Free, and always will be. No sign-up. You can stop at any point.</p>
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
            Why families trust us with this
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            This site was built by people who have sat where you are sitting and found the paperwork bewildering. That is why it is free, plainly written, and entirely yours to use at your own pace.
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
            Everything in one place, whenever you need it
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Registering the death', href: '/guide#registration' },
              { label: 'Tell Us Once', href: '/tell-us-once' },
              { label: 'Funeral planning', href: '/guide#funeral' },
              { label: 'Death certificates', href: '/guide#registration' },
              { label: 'Probate guide', href: '/probate' },
              { label: 'Inheritance tax', href: '/guide#legal' },
              { label: 'Intestacy rules', href: '/intestacy' },
              { label: 'Bank notifications', href: '/template-letters#bank' },
              { label: 'Pension claims', href: '/guide#financial' },
              { label: 'Life insurance', href: '/guide#financial' },
              { label: 'Property & mortgage', href: '/guide#property' },
              { label: 'Council tax', href: '/template-letters#council-tax' },
              { label: 'Document vault', href: '/document-vault' },
              { label: 'Digital accounts', href: '/digital-legacy' },
              { label: 'Benefits & support', href: '/support' },
              { label: 'Cultural guidance', href: '/cultural-guide' },
              { label: 'Cost estimates', href: '/costs' },
            ].map((topic, i) => (
              <Link key={i} href={topic.href} className="bg-background rounded-lg p-3 text-center hover:bg-primary-light transition-colors">
                <p className="text-sm font-medium text-foreground">{topic.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore our resources */}
      <section className="py-16 px-4" aria-labelledby="explore">
        <div className="max-w-4xl mx-auto">
          <h2 id="explore" className="text-3xl font-bold text-foreground text-center mb-4">
            Have a look around when you feel up to it
          </h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            Local guidance, help with telling organisations, and small tools to keep track of things. All of it free, and all of it written to take a little weight off you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guides" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Local City Guides</h3>
              <p className="text-sm text-muted">Find your local registrar, council contacts, and step-by-step guidance for your city.</p>
            </Link>
            <Link href="/counties" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">County Guides</h3>
              <p className="text-sm text-muted">Registrar offices across England and Wales, organised by county.</p>
            </Link>
            <Link href="/notify" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Who to Notify</h3>
              <p className="text-sm text-muted">Bereavement phone numbers, online forms, and step-by-step processes for banks, utilities, and insurers.</p>
            </Link>
            <Link href="/blog" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Guides and Articles</h3>
              <p className="text-sm text-muted">In-depth articles on funeral costs, bereavement leave, bank thresholds, and more.</p>
            </Link>
            <Link href="/deadline-tracker" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Deadline Tracker</h3>
              <p className="text-sm text-muted">Enter the date of death and see every key deadline calculated for you automatically.</p>
            </Link>
            <Link href="/document-vault" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Document Vault</h3>
              <p className="text-sm text-muted">Track which important documents you have found and which you still need.</p>
            </Link>
            <Link href="/phone-directory" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Phone Directory</h3>
              <p className="text-sm text-muted">Every bereavement phone number you might need, all in one place.</p>
            </Link>
            <Link href="/call-scripts" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Call Scripts</h3>
              <p className="text-sm text-muted">Word-for-word scripts for difficult phone calls to banks, utilities, and employers.</p>
            </Link>
            <Link href="/template-letters" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Template Letters</h3>
              <p className="text-sm text-muted">Ready-to-use notification letters for every organisation you need to contact.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary-light" aria-label="Get started">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Whenever you are ready, we are here
          </h2>
          <p className="text-muted mb-8">
            A few simple questions is all it takes, and then you will have a clear list of what to do, in what order, without the jargon. There is no wrong time to start, and no wrong pace to go at.
          </p>
          <Link
            href="/start"
            className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Start when you are ready
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
            description: 'Free, personalised bereavement guidance for the UK. Step-by-step help after someone passes away.',
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
            logo: 'https://helpafterloss.co.uk/opengraph-image',
            email: 'contact@helpafterloss.co.uk',
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
          }),
        }}
      />
    </div>
  );
}
