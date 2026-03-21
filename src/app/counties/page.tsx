import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCounties, getCountiesByNation } from '@/lib/counties';

export const metadata: Metadata = {
  title: 'County Guides - Register a Death by County | Help After Loss',
  description: 'Find registrar offices and registration guidance by county across England and Wales. Contact details, addresses, and step-by-step help for registering a death.',
  alternates: { canonical: 'https://helpafterloss.co.uk/counties' },
  openGraph: {
    title: 'County Guides - Register a Death by County',
    description: 'Find registrar offices and registration guidance by county across England and Wales.',
    url: 'https://helpafterloss.co.uk/counties',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'County Guides - Register a Death by County',
    description: 'Find registrar offices and registration guidance by county across England and Wales.',
  },
};

export default function CountiesIndexPage() {
  const englandCounties = getCountiesByNation('England').sort((a, b) => a.name.localeCompare(b.name));
  const walesCounties = getCountiesByNation('Wales').sort((a, b) => a.name.localeCompare(b.name));
  const allCounties = getAllCounties();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            County Guides
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Find registrar offices and step-by-step guidance for registering a death by county.
            We cover {allCounties.length} counties across England and Wales, with contact details
            for every registrar office.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-sm text-muted leading-relaxed">
            <p>
              When someone dies in England or Wales, the death must be registered within 5 days at the
              register office in the district where the person died. Each county has one or more registrar
              offices, and most operate by appointment only.
            </p>
            <p>
              Our county guides list every registrar office with phone numbers, addresses, and website links.
              Each guide also includes step-by-step instructions for the registration process and a list of
              the documents you will need to bring.
            </p>
            <p>
              If you need guidance that goes beyond registration, try our{' '}
              <Link href="/start" className="text-primary hover:underline font-medium">personalised guide</Link>.
              It asks a few questions about your circumstances and creates a tailored checklist with deadlines
              calculated from the date of death.
            </p>
          </div>
        </div>
      </section>

      {/* England */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
              England
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {englandCounties.map(county => (
                <Link
                  key={county.slug}
                  href={`/counties/${county.slug}`}
                  className="bg-card rounded-lg border border-border p-4 hover:border-primary hover:shadow-sm transition-all"
                >
                  <p className="font-medium text-foreground">{county.name}</p>
                  <p className="text-xs text-muted mt-1">
                    {county.registrarOffices.length} registrar {county.registrarOffices.length === 1 ? 'office' : 'offices'}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
              Wales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {walesCounties.map(county => (
                <Link
                  key={county.slug}
                  href={`/counties/${county.slug}`}
                  className="bg-card rounded-lg border border-border p-4 hover:border-primary hover:shadow-sm transition-all"
                >
                  <p className="font-medium text-foreground">{county.name}</p>
                  <p className="text-xs text-muted mt-1">
                    {county.registrarOffices.length} registrar {county.registrarOffices.length === 1 ? 'office' : 'offices'}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary-light rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Not sure where to start?
            </h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Our personalised guide asks a few simple questions about your situation and creates a
              step-by-step checklist with real deadlines. It covers everything, not just registration.
            </p>
            <Link
              href="/start"
              className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Get Your Personalised Guide
            </Link>
            <p className="text-sm text-muted mt-3">Free. No sign-up. Takes about 3 minutes.</p>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'County Guides - Register a Death by County',
            description: 'County-specific guides for registering a death across England and Wales.',
            url: 'https://helpafterloss.co.uk/counties',
            datePublished: '2026-03-14',
            dateModified: '2026-03-14',
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
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'County Guides', item: 'https://helpafterloss.co.uk/counties' },
            ],
          }),
        }}
      />
    </div>
  );
}
