import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Help After Loss',
  description: 'Help After Loss is a free service that provides personalised bereavement guidance for the UK. Learn about our mission, how we work, and why we built this.',
  alternates: { canonical: 'https://helpafterloss.co.uk/about' },
  openGraph: {
    title: 'About Help After Loss',
    description: 'A free service providing personalised bereavement guidance for the UK. Learn about our mission and how we work.',
    url: 'https://helpafterloss.co.uk/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Help After Loss',
    description: 'Free, personalised bereavement guidance for the UK.',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        About Help After Loss
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone dies, the last thing you need is to spend hours working out what to do. We built Help After Loss to give you clear, personalised guidance so you can focus on what matters most.
      </p>

      <div className="space-y-8 mb-12">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Why we built this</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-muted leading-relaxed">
            <p>
              Every year, over 680,000 people in the UK struggle with bereavement admin. Research by Marie Curie found that the average person needs to contact 21 different organisations after a death. 100,000 people still have not closed all accounts 12 months later.
            </p>
            <p>
              The information exists, but it is scattered across dozens of government websites, charity pages, and forums. None of it is personalised. A 25-year-old whose parent dies suddenly needs completely different guidance to a 70-year-old whose spouse dies after a long illness.
            </p>
            <p>
              We built Help After Loss to solve this. Answer a few questions, get a personalised checklist with real deadlines, estimated costs, and links to the right places. Free, forever.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">How it works</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-muted leading-relaxed">
            <p>
              Our tool asks you simple questions about your situation: who died, your relationship to them, whether there is a will, whether there is property, and so on. Based on your answers, we generate a personalised checklist of everything you need to do, in the right order, with deadlines calculated from the date of death.
            </p>
            <p>
              The questionnaire adapts as you answer. If the person was under 18, we skip pension and probate questions and include the Children's Funeral Fund. If you are in Scotland, we show Confirmation instead of Probate and extend the registration deadline to 8 days. If you are Muslim or Jewish, we prioritise funeral arrangements for burial within 24-48 hours.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Your privacy</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-muted leading-relaxed">
            <p>
              We do not collect, store, or share any of your personal information. Your answers and progress are saved only on your own device using your browser's local storage. We have no database, no user accounts, and no way to see what you enter.
            </p>
            <p>
              We do not use advertising trackers, sell data, or share information with third parties.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Important disclaimer</h2>
          <div className="bg-warm border border-warm-border rounded-xl p-6 text-sm text-amber-800 leading-relaxed space-y-3">
            <p>
              Help After Loss provides general guidance only. It does not constitute legal, financial, or tax advice. Every situation is different, and we strongly recommend seeking professional advice for complex estates, inheritance tax queries, or disputes.
            </p>
            <p>
              While we make every effort to keep information accurate and up to date, laws and regulations change. Always check the latest information on GOV.UK for the most current guidance.
            </p>
          </div>
        </section>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">40+</p>
          <p className="text-sm text-muted mt-1">Tasks covered across all categories</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">4</p>
          <p className="text-sm text-muted mt-1">UK nations supported</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-sm text-muted mt-1">Free, no sign-up needed</p>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get your personalised guide</h2>
        <p className="text-muted mb-6">Tailored to your exact situation, with real deadlines and practical steps.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Started
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'About Help After Loss',
            description: 'Help After Loss is a free service providing personalised bereavement guidance for the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            about: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
              description: 'Free bereavement guidance and support for the UK.',
              logo: 'https://helpafterloss.co.uk/opengraph-image',
              email: 'contact@helpafterloss.co.uk',
              areaServed: { '@type': 'Country', name: 'United Kingdom' },
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
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://helpafterloss.co.uk/about' },
            ],
          }),
        }}
      />
    </div>
  );
}
