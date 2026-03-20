import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, getCitiesByRegion, type CityData } from '@/lib/cities';
import { counties } from '@/lib/counties';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map(city => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const displayName = city.name === 'Derry/Londonderry' ? 'Derry' : city.name;
  const title = `What to Do When Someone Dies in ${displayName} - Practical Guide`;
  const description = `A practical guide to what you need to do when someone dies in ${displayName}. Find your local registrar, council contacts, and step-by-step guidance for ${city.region}.`;

  return {
    title,
    description,
    alternates: { canonical: `https://helpafterloss.co.uk/guides/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `https://helpafterloss.co.uk/guides/${city.slug}`,
      type: 'article',
    },
  };
}

function getDeathInvestigatorText(city: CityData): string {
  if (city.nation === 'Scotland') {
    return 'In Scotland, unexpected or unexplained deaths are investigated by the Procurator Fiscal rather than a coroner. The Procurator Fiscal may order a post-mortem examination before the death can be registered.';
  }
  return `If the death was sudden, unexplained, or occurred during surgery, it may be referred to the ${city.nation === 'Northern Ireland' ? 'coroner' : 'coroner'}. The coroner will investigate and may order a post-mortem before the death can be registered.`;
}

function getTellUsOnceSection(city: CityData): React.ReactNode {
  if (!city.hasTellUsOnce) {
    return (
      <div className="bg-warm rounded-xl border border-warm-border p-6">
        <h3 className="font-semibold text-foreground mb-2">Tell Us Once is not available in Northern Ireland</h3>
        <p className="text-sm text-muted leading-relaxed">
          Unlike the rest of the UK, the Tell Us Once service does not operate in Northern Ireland. This means you
          will need to contact each government department and local council service individually to notify them of
          the death. This includes the DWP for benefits, HMRC for tax, DVLA for driving licences, and the Passport
          Office. Your registrar can advise you on who to contact.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-success-light rounded-xl border border-success/20 p-6">
      <h3 className="font-semibold text-foreground mb-2">Tell Us Once</h3>
      <p className="text-sm text-muted leading-relaxed">
        When you register the death in {city.name}, the registrar will give you a Tell Us Once reference number.
        This free service lets you notify most government departments in a single step, including the DWP, HMRC,
        DVLA, Passport Office, and {city.councilName}. You have 28 days to use it. It saves a significant amount
        of time and paperwork.
      </p>
      <p className="text-sm text-muted leading-relaxed mt-2">
        <Link href="/tell-us-once" className="text-primary hover:underline">Read our full Tell Us Once guide</Link> for
        details on exactly what it covers and what you still need to do yourself.
      </p>
    </div>
  );
}

export default async function CityGuidePage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const displayName = city.name === 'Derry/Londonderry' ? 'Derry/Londonderry' : city.name;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `What to Do When Someone Dies in ${displayName}`,
    description: `Practical guide covering registrar details, council contacts, and step-by-step guidance for bereavement in ${displayName}.`,
    datePublished: '2026-03-13',
    dateModified: '2026-03-14',
    author: { '@type': 'Organization', name: 'Help After Loss' },
    publisher: {
      '@type': 'Organization',
      name: 'Help After Loss',
      url: 'https://helpafterloss.co.uk',
    },
    mainEntityOfPage: `https://helpafterloss.co.uk/guides/${city.slug}`,
    areaServed: {
      '@type': 'City',
      name: displayName,
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
      { '@type': 'ListItem', position: 2, name: 'Local Guides', item: 'https://helpafterloss.co.uk/guides' },
      { '@type': 'ListItem', position: 3, name: displayName, item: `https://helpafterloss.co.uk/guides/${city.slug}` },
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
            <Link href="/guides" className="hover:text-primary">Local Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{displayName}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            What to Do When Someone Dies in {displayName}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            A practical guide with local registrar details, council contacts, and step-by-step guidance
            for {city.region}. Everything you need to know, with no jargon.
          </p>
        </div>
      </section>

      {/* Quick contacts */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Register Office
              </h2>
              <p className="text-sm font-medium text-foreground">{city.registrarName}</p>
              <p className="text-sm text-muted mt-1">{city.registrarAddress}</p>
              <p className="text-sm text-muted mt-2">
                Phone: <a href={`tel:${city.registrarPhone.replace(/\s/g, '')}`} className="text-primary hover:underline">{city.registrarPhone}</a>
              </p>
              <a
                href={city.registrarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-primary hover:underline"
              >
                Visit website &rarr;
              </a>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Local Council
              </h2>
              <p className="text-sm font-medium text-foreground">{city.councilName}</p>
              <p className="text-sm text-muted mt-2">
                Phone: <a href={`tel:${city.councilPhone.replace(/\s/g, '')}`} className="text-primary hover:underline">{city.councilPhone}</a>
              </p>
              <a
                href={city.councilUrl}
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
        </div>
      </section>

      {/* Step by step */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Step 1 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
              <h2 className="text-xl font-semibold text-foreground">Get the death certified</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                When someone dies, a doctor must confirm the death and issue a Medical Certificate of Cause of Death (MCCD).
                If the person died at home in {displayName}, call their GP surgery. If they died in hospital, the hospital
                will arrange this.
              </p>
              <p>{getDeathInvestigatorText(city)}</p>
              {city.localNotes && (
                <p className="bg-primary-light rounded-lg p-4 text-foreground">
                  <strong>Local note:</strong> {city.localNotes}
                </p>
              )}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
              <h2 className="text-xl font-semibold text-foreground">Register the death</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                You must register the death within <strong>{city.registrationDeadlineDays} days</strong> at
                the register office in the area where the person died. In {displayName}, this
                is the <strong>{city.registrarName}</strong>.
              </p>
              <p>
                Book an appointment by calling <a href={`tel:${city.registrarPhone.replace(/\s/g, '')}`} className="text-primary hover:underline">{city.registrarPhone}</a>.
                You will need to bring:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>The Medical Certificate of Cause of Death (MCCD)</li>
                <li>The person&apos;s birth certificate (if available)</li>
                <li>Their marriage or civil partnership certificate (if applicable)</li>
                <li>Their NHS medical card or NHS number</li>
                <li>Their full name, date and place of birth, last address, and occupation</li>
                {city.nation === 'Scotland' && (
                  <li>Details of any children (names and dates of birth), as required in Scotland</li>
                )}
              </ul>
              <p>
                Order at least <strong>5 certified copies</strong> of the death certificate at the time of
                registration. They cost £12.50 each in England (£11 in Wales) and are needed by banks, insurers, pension providers,
                and solicitors. Ordering extra copies later costs more.
              </p>
            </div>
          </div>

          {/* Tell Us Once */}
          <div>
            {getTellUsOnceSection(city)}
          </div>

          {/* Step 3 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
              <h2 className="text-xl font-semibold text-foreground">Arrange the funeral</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                You can start arranging the funeral before registering the death, but the burial or cremation cannot
                go ahead until registration is complete (unless a coroner{city.nation === 'Scotland' ? ' or Procurator Fiscal' : ''} has
                issued the relevant paperwork).
              </p>
              <p>
                Get at least three quotes from funeral directors in {displayName}. You are legally entitled to see an
                itemised price list. The average funeral in the UK costs around £4,000 for a cremation or £5,000 for
                a burial, but costs vary widely. Ask about:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Their basic funeral package and what it includes</li>
                <li>Whether you can provide your own coffin</li>
                <li>Direct cremation as a lower-cost option (from around £1,500)</li>
                <li>Payment plans or funeral loans if cost is a concern</li>
              </ul>
              <p>
                If you are on a low income, you may be eligible for a Funeral Expenses Payment from the DWP, which
                covers basic costs. Apply within 6 months of the funeral.
              </p>
              <p>
                <Link href="/costs" className="text-primary hover:underline">See our detailed costs breakdown</Link> for
                typical prices and money-saving tips.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</div>
              <h2 className="text-xl font-semibold text-foreground">Deal with the estate</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                If the person left a will, the named executor is responsible for handling the estate. If there was no
                will, the next of kin can apply to administer the estate under the rules of intestacy.
              </p>
              <p>
                {city.probateTerm === 'Confirmation' ? (
                  <>
                    In Scotland, you will need to apply for <strong>Confirmation</strong> (the Scottish equivalent of
                    probate) through the local Sheriff Court. This gives you the legal authority to deal with the
                    person&apos;s assets. For small estates (under £36,000), you can use a simplified process through
                    the Sheriff Clerk&apos;s office without needing a solicitor.
                  </>
                ) : (
                  <>
                    You may need to apply for <strong>{city.probateTerm}</strong> through the{' '}
                    {city.nation === 'Northern Ireland' ? 'Probate Office at the Royal Courts of Justice in Belfast' : 'Probate Registry'}.
                    This gives you the legal authority to deal with the person&apos;s bank accounts, property, and
                    other assets. You can apply online or by post.
                  </>
                )}
              </p>
              <p>
                <Link href="/probate" className="text-primary hover:underline">Read our {city.probateTerm.toLowerCase()} guide</Link> for
                a full walkthrough of the process, or learn about{' '}
                <Link href="/intestacy" className="text-primary hover:underline">what happens when someone dies without a will</Link>.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</div>
              <h2 className="text-xl font-semibold text-foreground">Notify organisations</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Beyond {city.hasTellUsOnce ? 'what Tell Us Once covers' : 'government departments'}, you will need to contact a number of
                other organisations directly. This includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Banks and building societies (to freeze or close accounts)</li>
                <li>Insurance companies (life insurance, home, car)</li>
                <li>Pension providers (workplace and private pensions)</li>
                <li>Utility companies (gas, electric, water, broadband)</li>
                <li>Mortgage lender or landlord</li>
                <li>Phone and TV providers</li>
                <li>Subscriptions and memberships</li>
                <li>Social media and online accounts</li>
              </ul>
              <p>
                Each organisation will usually need a certified copy of the death certificate. Some will accept
                a scanned copy, but many require an original.
              </p>
              <p>
                <Link href="/digital-legacy" className="text-primary hover:underline">See our guide to handling digital accounts</Link> for
                help with social media, email, and online subscriptions.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</div>
              <h2 className="text-xl font-semibold text-foreground">Look after yourself</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Grief affects everyone differently. There is no right or wrong way to feel, and there is no timeline
                for recovery. It is completely normal to feel overwhelmed by the amount of admin involved. Do not
                try to do everything at once.
              </p>
              <p>
                If you need someone to talk to, the following services are available in {city.region}:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Samaritans:</strong> Call <a href="tel:116123" className="text-primary hover:underline">116 123</a> (free, 24 hours)</li>
                <li><strong>Cruse Bereavement Support:</strong> Call <a href="tel:08088081677" className="text-primary hover:underline">0808 808 1677</a></li>
                {city.nation === 'Scotland' && (
                  <li><strong>Cruse Scotland:</strong> Call <a href="tel:08451000066" className="text-primary hover:underline">0845 100 0066</a></li>
                )}
                {city.nation === 'Northern Ireland' && (
                  <li><strong>Cruse Northern Ireland:</strong> Call <a href="tel:02890232695" className="text-primary hover:underline">028 9023 2695</a></li>
                )}
                <li><strong>At a Loss:</strong> <a href="https://www.ataloss.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ataloss.org</a> (directory of bereavement services)</li>
              </ul>
              <p>
                <Link href="/support" className="text-primary hover:underline">See our full list of support services and helplines.</Link>
              </p>
            </div>
          </div>
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

      {/* Nearby city guides */}
      {(() => {
        const nearbyCities = getCitiesByRegion(city.region)
          .filter(c => c.slug !== city.slug)
          .slice(0, 5);
        const matchingCounty = counties.find(c =>
          c.majorTowns.some(t => t.toLowerCase() === city.name.toLowerCase()) ||
          c.name.toLowerCase() === city.region.toLowerCase()
        );
        return (nearbyCities.length > 0 || matchingCounty) ? (
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Other guides in {city.region}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {nearbyCities.map(c => (
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
                {matchingCounty && (
                  <Link
                    href={`/counties/${matchingCounty.slug}`}
                    className="bg-primary-light rounded-lg border border-primary/20 p-4 hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {matchingCounty.name} County Guide
                    </p>
                    <p className="text-xs text-muted mt-1">All registrar offices in {matchingCounty.name}</p>
                  </Link>
                )}
              </div>
              <p className="text-sm text-muted mt-4">
                <Link href="/guides" className="text-primary hover:underline">View all city guides</Link>
                {' · '}
                <Link href="/counties" className="text-primary hover:underline">View county guides</Link>
              </p>
            </div>
          </section>
        ) : null;
      })()}

      {/* Related guides */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide" className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Step-by-Step Guide</p>
              <p className="text-sm text-muted mt-1">The complete guide to everything you need to do</p>
            </Link>
            <Link href="/probate" className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors">
              <p className="font-medium text-foreground">{city.probateTerm} Guide</p>
              <p className="text-sm text-muted mt-1">How to apply for {city.probateTerm.toLowerCase()} and what it costs</p>
            </Link>
            <Link href="/notify" className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Who to Notify</p>
              <p className="text-sm text-muted mt-1">Banks, utilities, and insurers you need to contact</p>
            </Link>
            <Link href="/checklist" className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Master Checklist</p>
              <p className="text-sm text-muted mt-1">Everything you need to do in one list</p>
            </Link>
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
