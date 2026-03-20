import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { counties, getCountyBySlug } from '@/lib/counties';
import { cities } from '@/lib/cities';
import { RelatedGuides } from '@/components/RelatedGuides';

interface PageProps {
  params: Promise<{ county: string }>;
}

export async function generateStaticParams() {
  return counties.map(county => ({ county: county.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { county: slug } = await params;
  const county = getCountyBySlug(slug);
  if (!county) return {};

  const title = `Register a Death in ${county.name} - Registrar Offices & Guidance`;
  const description = `Find registrar offices in ${county.name}, ${county.nation}. Contact details, addresses, and step-by-step guidance for registering a death in ${county.name}.`;

  return {
    title,
    description,
    alternates: { canonical: `https://helpafterloss.co.uk/counties/${county.slug}` },
    openGraph: {
      title,
      description,
      url: `https://helpafterloss.co.uk/counties/${county.slug}`,
      type: 'article',
    },
  };
}

export default async function CountyGuidePage({ params }: PageProps) {
  const { county: slug } = await params;
  const county = getCountyBySlug(slug);

  if (!county) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Register a Death in ${county.name}`,
    description: `Registrar offices, contact details, and step-by-step guidance for registering a death in ${county.name}, ${county.nation}.`,
    datePublished: '2026-03-14',
    dateModified: '2026-03-14',
    author: { '@type': 'Organization', name: 'Help After Loss' },
    publisher: {
      '@type': 'Organization',
      name: 'Help After Loss',
      url: 'https://helpafterloss.co.uk',
    },
    mainEntityOfPage: `https://helpafterloss.co.uk/counties/${county.slug}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: county.name,
      containedInPlace: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'County Guides', item: 'https://helpafterloss.co.uk/counties' },
      { '@type': 'ListItem', position: 3, name: county.name, item: `https://helpafterloss.co.uk/counties/${county.slug}` },
    ],
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/counties" className="hover:text-primary">County Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{county.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Register a Death in {county.name}
            </h1>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {county.nation}
            </span>
            <span className="text-sm text-muted">
              Register within {county.registrationDeadlineDays} days
            </span>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Find your nearest registrar office in {county.name}, with contact details, addresses, and
            step-by-step guidance for registering a death.
          </p>
        </div>
      </section>

      {/* Registrar offices */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Registrar offices in {county.name}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {county.registrarOffices.map((office, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {office.name}
                </h3>
                <p className="text-sm text-muted">{office.address}</p>
                <p className="text-sm text-muted mt-2">
                  Phone: <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">{office.phone}</a>
                </p>
                <a
                  href={office.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-primary hover:underline"
                >
                  Visit website &rarr;
                </a>
              </div>
            ))}
          </div>

          {/* Council contact */}
          <div className="bg-card rounded-xl border border-border p-6 mt-4">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {county.councilName}
            </h3>
            <p className="text-sm text-muted mt-2">
              Phone: <a href={`tel:${county.councilPhone.replace(/\s/g, '')}`} className="text-primary hover:underline">{county.councilPhone}</a>
            </p>
            <a
              href={county.councilUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-primary hover:underline"
            >
              Visit website &rarr;
            </a>
            <p className="text-xs text-muted mt-3">
              Contact the council about council tax, housing, social services, and local support.
            </p>
          </div>
        </div>
      </section>

      {/* How to register */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-foreground">How to register a death in {county.name}</h2>

          {/* Step 1 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
              <h3 className="text-xl font-semibold text-foreground">Get the medical certificate</h3>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                A doctor must confirm the death and issue a Medical Certificate of Cause of Death (MCCD).
                If the person died at home in {county.name}, contact their GP surgery. If they died in
                hospital, the hospital will arrange this.
              </p>
              <p>
                If the death was sudden, unexplained, or occurred during surgery, it may be referred to the
                coroner. The coroner will investigate and may order a post-mortem before the death can be registered.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
              <h3 className="text-xl font-semibold text-foreground">Book an appointment</h3>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Contact one of the registrar offices listed above to book an appointment. You must register the
                death within <strong>{county.registrationDeadlineDays} days</strong> in the district where
                the person died. If you cannot attend in person within the deadline, you can make a
                declaration at a different register office, which will then be forwarded.
              </p>
              <p>
                Most register offices in {county.name} operate by appointment only, so call ahead to
                arrange a time.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
              <h3 className="text-xl font-semibold text-foreground">Attend the appointment</h3>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                The appointment typically takes around 30 minutes. The registrar will ask you for details
                about the person who died, and will issue you with the documents you need to arrange the
                funeral.
              </p>
              <p>
                At the appointment, the registrar will offer you the <strong>Tell Us Once</strong> service.
                This free service notifies most government departments of the death in a single step,
                saving you a significant amount of time.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</div>
              <h3 className="text-xl font-semibold text-foreground">Order death certificates</h3>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Order at least <strong>5 certified copies</strong> of the death certificate at the time
                of registration. They cost £12.50 each in England (£11 in Wales). Banks, insurers, pension providers, and
                solicitors will each need a copy. Ordering copies later costs more and takes longer.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</div>
              <h3 className="text-xl font-semibold text-foreground">Arrange the funeral</h3>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                You can start arranging the funeral before registering the death, but the burial or
                cremation cannot go ahead until registration is complete (unless the coroner has
                issued the relevant paperwork). Get at least three quotes from funeral directors
                in {county.name}.
              </p>
              <p>
                <Link href="/costs" className="text-primary hover:underline">See our detailed costs breakdown</Link> for
                typical prices and money-saving tips.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</div>
              <h3 className="text-xl font-semibold text-foreground">Notify organisations</h3>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Beyond what Tell Us Once covers, you will need to contact banks, insurers, pension
                providers, utility companies, and other organisations directly. Each will usually
                need a certified copy of the death certificate.
              </p>
              <p>
                <Link href="/template-letters" className="text-primary hover:underline">Use our template letters</Link> to
                save time, or see our <Link href="/phone-directory" className="text-primary hover:underline">phone directory</Link> for
                the right numbers to call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll need */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">What you will need to bring</h2>
            <ul className="space-y-2 text-sm text-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                The Medical Certificate of Cause of Death (MCCD)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                The person&apos;s birth certificate (if available)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                Their marriage or civil partnership certificate (if applicable)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                Their NHS medical card or NHS number
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                Their full name, date and place of birth, last address, and occupation
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                Your own name, address, and relationship to the person who died
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Major towns */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Towns and cities covered</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">
              The registrar offices above serve the following areas and surrounding towns in {county.name}:
            </p>
            <div className="flex flex-wrap gap-2">
              {county.majorTowns.map(town => (
                <span key={town} className="px-3 py-1 bg-primary-light text-foreground text-sm rounded-full">
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local notes */}
      {county.localNotes && (
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-warm rounded-xl border border-warm-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">Local information</h2>
              <p className="text-sm text-muted leading-relaxed">{county.localNotes}</p>
            </div>
          </div>
        </section>
      )}

      {/* City guides in this county */}
      {(() => {
        const citiesInCounty = cities.filter(c =>
          county.majorTowns.some(t => t.toLowerCase() === c.name.toLowerCase())
        );
        return citiesInCounty.length > 0 ? (
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-4">City guides in {county.name}</h2>
              <p className="text-sm text-muted mb-4">
                Detailed local guides with registrar details, council contacts, and step-by-step bereavement guidance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {citiesInCounty.map(c => (
                  <Link
                    key={c.slug}
                    href={`/guides/${c.slug}`}
                    className="bg-card rounded-lg border border-border p-4 hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {c.name}
                    </p>
                    <p className="text-xs text-muted mt-1">Registrar and council details for {c.name}</p>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted mt-4">
                <Link href="/guides" className="text-primary hover:underline">View all city guides</Link>
              </p>
            </div>
          </section>
        ) : null;
      })()}

      {/* Nearby counties */}
      {(() => {
        const nearbyCounties = counties
          .filter(c => c.slug !== county.slug && c.nation === county.nation)
          .slice(0, 4);
        return nearbyCounties.length > 0 ? (
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-4">Other county guides</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {nearbyCounties.map(c => (
                  <Link
                    key={c.slug}
                    href={`/counties/${c.slug}`}
                    className="bg-card rounded-lg border border-border p-3 text-center hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {c.name}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted mt-4">
                <Link href="/counties" className="text-primary hover:underline">View all county guides</Link>
              </p>
            </div>
          </section>
        ) : null;
      })()}

      {/* Related guides */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-3xl mx-auto">
          <RelatedGuides currentPath={`/counties/${county.slug}`} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary-light rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Get a personalised checklist for your situation
            </h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Answer a few simple questions and we will create a step-by-step guide tailored to your exact
              circumstances, with real deadlines calculated from the date of death.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </div>
  );
}
