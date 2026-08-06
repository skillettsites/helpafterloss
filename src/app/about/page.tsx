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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
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
        When you lose someone, the last thing you need is to spend hours working out what has to be done. We built Help After Loss to give you clear, personal guidance in plain English, so you can spend your energy on the people who matter instead of on paperwork.
      </p>

      <div className="space-y-8 mb-12">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Why we built this</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-muted leading-relaxed">
            <p>
              Every year in the UK, hundreds of thousands of families are left to work through the paperwork that follows a death. The Office for National Statistics recorded 568,613 deaths registered in England and Wales in 2024 alone, and behind each one is someone facing a long list of banks, insurers, pension providers, utilities and government departments to contact.
            </p>
            <p>
              The information is out there, but it is scattered across dozens of government websites, charity pages, and forums, and none of it speaks to your situation. Someone in their twenties who has lost a parent suddenly needs very different guidance from someone in their seventies whose husband or wife has passed away after a long illness.
            </p>
            <p>
              That is why we built Help After Loss. Answer a few questions and you get a checklist made for you, with the dates that matter, honest costs, and links straight to the right places. Free, and always will be.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">How it works</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-muted leading-relaxed">
            <p>
              Our tool asks a few gentle questions about your situation: who has passed away, how you were related to them, whether there is a will, whether there is property, and so on. From your answers we put together a checklist of what needs doing, in a sensible order, with the deadlines worked out from the date of death.
            </p>
            <p>
              The questions adapt as you go, so you are never asked anything that does not apply. If your loved one was under 18, we leave out the pension and probate questions and include the Children's Funeral Fund. If you are in Scotland, we show Confirmation rather than Probate and extend the registration deadline to 8 days. If your family is Muslim or Jewish, we put the funeral arrangements first, for burial within 24 to 48 hours.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Your privacy</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-muted leading-relaxed">
            <p>
              We do not collect, store, or share any of your personal information. Your answers and your progress stay on your own device, in your browser. There is no database, no account to create, and no way for us to see anything you type. What you write here is yours alone.
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
              Help After Loss offers general guidance only. It is not legal, financial, or tax advice. Every situation is different, and we would always encourage you to speak to a professional about complicated estates, inheritance tax questions, or any disagreement within the family.
            </p>
            <p>
              While we make every effort to keep information accurate and up to date, laws and regulations change. Our guidance was last checked against GOV.UK and other primary sources in August 2026, and we would always encourage you to confirm anything important on GOV.UK before you act on it.
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
        <p className="text-muted mb-6">Built around your own situation, with the dates that matter and clear, practical steps.</p>
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
            dateModified: '2026-08-06',
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
