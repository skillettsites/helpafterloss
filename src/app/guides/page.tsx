import type { Metadata } from 'next';
import Link from 'next/link';
import { cities, getAllRegions, getCitiesByRegion } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Local Bereavement Guides by City - What to Do When Someone Dies',
  description: 'Find your local guide for what to do when someone dies. Registrar details, council contacts, and step-by-step guidance for cities across England, Scotland, Wales, and Northern Ireland.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides' },
  openGraph: {
    title: 'Local Bereavement Guides by City',
    description: 'Find your local guide with registrar details, council contacts, and step-by-step bereavement guidance.',
    url: 'https://helpafterloss.co.uk/guides',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Bereavement Guides - UK Cities',
    description: 'Find local registrar details and council contacts for your area.',
  },
};

const NATION_ORDER = ['London', 'North West England', 'North East England', 'Yorkshire and the Humber', 'West Midlands', 'East Midlands', 'South West England', 'South East England', 'East of England', 'Scotland', 'Wales', 'Northern Ireland'];

export default function GuidesIndexPage() {
  const regions = getAllRegions().sort((a, b) => {
    const aIdx = NATION_ORDER.indexOf(a);
    const bIdx = NATION_ORDER.indexOf(b);
    if (aIdx === -1 && bIdx === -1) return a.localeCompare(b);
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Local Bereavement Guides
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Find your local guide for what to do when someone dies. Each guide includes registrar details,
            council contacts, and step-by-step guidance specific to your area. We cover {cities.length} cities
            and boroughs across England, Scotland, Wales, and Northern Ireland.
          </p>
        </div>
      </section>

      {/* Introductory content */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-sm text-muted leading-relaxed">
            <p>
              When someone dies, one of the first steps is registering the death at your local register office. The rules vary depending on where in the UK you are. In England and Wales, you must register within 5 days. In Scotland, the deadline is 8 days. In Northern Ireland, it is also 5 days, but the Tell Us Once service is not available.
            </p>
            <p>
              Each of our local guides includes the contact details for your nearest register office, your local council, and information about what services are available in your area. We also cover the differences between probate in England and Wales, Confirmation in Scotland, and the process in Northern Ireland, so you get guidance that applies to your specific location.
            </p>
            <p>
              If you are not sure which guide to use, or if your situation is more complex, try our <Link href="/start" className="text-primary hover:underline font-medium">personalised guide</Link> instead. It asks a few questions about your circumstances and creates a tailored checklist with deadlines calculated from the date of death.
            </p>
          </div>
        </div>
      </section>

      {/* City listing by region */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {regions.map(region => {
            const regionCities = getCitiesByRegion(region).sort((a, b) => a.name.localeCompare(b.name));
            return (
              <div key={region}>
                <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                  {region}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {regionCities.map(city => (
                    <Link
                      key={city.slug}
                      href={`/guides/${city.slug}`}
                      className="bg-card rounded-lg border border-border p-4 hover:border-primary hover:shadow-sm transition-all"
                    >
                      <p className="font-medium text-foreground">{city.name}</p>
                      <p className="text-xs text-muted mt-1">
                        {city.nation === 'Scotland' ? 'Register within 8 days' : 'Register within 5 days'}
                        {!city.hasTellUsOnce && ' · No Tell Us Once'}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
            name: 'Local Bereavement Guides',
            description: 'City-specific guides for what to do when someone dies in the UK.',
            url: 'https://helpafterloss.co.uk/guides',
            datePublished: '2026-03-13',
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
              { '@type': 'ListItem', position: 2, name: 'Local Guides', item: 'https://helpafterloss.co.uk/guides' },
            ],
          }),
        }}
      />
    </div>
  );
}
