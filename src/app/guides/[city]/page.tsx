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
  const title = `What to Do When Someone Dies in ${displayName} - Registrar, Costs, Probate (2026)`;
  const description = `Step-by-step guide for ${displayName}. ${city.registrarName} details, ${city.councilName} contacts, funeral costs, ${city.probateTerm.toLowerCase()} process, and local support services. Free, updated for 2026.`;

  return {
    title,
    description,
    alternates: { canonical: `https://helpafterloss.co.uk/guides/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `https://helpafterloss.co.uk/guides/${city.slug}`,
      type: 'article',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `When Someone Dies in ${displayName} - Local Guide`,
      description: `Local registrar, council contacts, funeral options, and ${city.probateTerm.toLowerCase()} guidance for ${displayName}. Free 2026 guide.`,
    },
  };
}

function getDeathInvestigatorText(city: CityData): string {
  if (city.nation === 'Scotland') {
    return 'In Scotland, unexpected or unexplained deaths are investigated by the Procurator Fiscal rather than a coroner. The Procurator Fiscal may order a post-mortem examination before the death can be registered.';
  }
  return `If the death was sudden, unexplained, or occurred during surgery, it may be referred to the coroner. The coroner will investigate and may order a post-mortem before the death can be registered.`;
}

function getRegistrationCost(city: CityData): string {
  if (city.nation === 'Scotland') return '£15';
  if (city.nation === 'Wales') return '£11';
  return '£12.50';
}

function getCityFAQ(city: CityData, displayName: string) {
  const faq = [
    {
      q: `Where do I register a death in ${displayName}?`,
      a: `Register the death at the ${city.registrarName}, located at ${city.registrarAddress}. Call ${city.registrarPhone} to book an appointment. You must register within ${city.registrationDeadlineDays} days of the death.`,
    },
    {
      q: `How much do death certificates cost in ${displayName}?`,
      a: `Certified copies cost ${getRegistrationCost(city)} each when ordered at the time of registration. Order at least 5 copies, as each bank, insurer, pension provider, and solicitor will need an original. Ordering extra copies later costs more.`,
    },
    {
      q: `How do I find a funeral director in ${displayName}?`,
      a: `Get at least 3 quotes from funeral directors in ${displayName}. Ask for itemised price lists so you can compare like for like. You can also ask the registrar or hospital for local recommendations. In ${displayName}, a cremation with a service typically costs around £3,500-£4,500 and a direct cremation from around £1,000-£1,500.`,
    },
  ];

  if (city.hasTellUsOnce) {
    faq.push({
      q: `Can I use Tell Us Once in ${displayName}?`,
      a: `Yes. When you register the death at the ${city.registrarName}, the registrar will give you a Tell Us Once reference number. This free service notifies the DWP, HMRC, DVLA, Passport Office, and ${city.councilName} in one step. You have 28 days to use it online at gov.uk/tell-us-once or by phone on 0800 085 7308.`,
    });
  } else {
    faq.push({
      q: `Is Tell Us Once available in ${displayName}?`,
      a: `No. Tell Us Once is not available in Northern Ireland. You need to contact each government department individually after registering the death. This includes the DWP for benefits, HMRC for tax, DVLA for driving licences, and the Passport Office. The registrar at the ${city.registrarName} can advise you on who to contact.`,
    });
  }

  faq.push(
    {
      q: `Do I need ${city.probateTerm.toLowerCase()} for an estate in ${displayName}?`,
      a: city.nation === 'Scotland'
        ? `You usually need Confirmation (the Scottish equivalent of probate) if the person owned property, had savings above bank thresholds, or had investments. Apply through your local Sheriff Court. For small estates under £36,000, you can use a simplified process through the Sheriff Clerk's office without a solicitor.`
        : city.nation === 'Northern Ireland'
        ? `You usually need probate if the person owned property, had savings above bank thresholds, or had investments. In Northern Ireland, apply through the Probate Office at the Royal Courts of Justice in Belfast or the District Probate Registry. The court fee is £300 for estates over £5,000.`
        : `You usually need probate if the person owned property in their sole name, had savings above bank thresholds (typically £5,000-£50,000, varies by bank), or had investments. Apply online at gov.uk/applying-for-probate. The court fee is £300 for estates over £5,000. Many straightforward estates can be handled without a solicitor.`,
    },
    {
      q: `What bereavement support is available in ${displayName}?`,
      a: `Samaritans (116 123, free, 24 hours) and Cruse Bereavement Support (0808 808 1677) are available nationwide. ${city.nation === 'Scotland' ? 'Cruse Scotland can also be reached on 0845 100 0066.' : city.nation === 'Northern Ireland' ? 'Cruse Northern Ireland can be reached on 028 9023 2695.' : ''} At a Loss (ataloss.org) has a directory of local bereavement services. Your GP in ${displayName} can also refer you to counselling.`,
    },
    {
      q: `How do I get council tax exemption in ${displayName}?`,
      a: `Contact ${city.councilName} on ${city.councilPhone} to apply for council tax exemption. An empty property is exempt from council tax from the date of death until ${city.probateTerm.toLowerCase()} is granted, and for 6 months after that. You will need a copy of the death certificate.`,
    },
  );

  return faq;
}

function getTellUsOnceSection(city: CityData): React.ReactNode {
  if (!city.hasTellUsOnce) {
    return (
      <div className="bg-warm rounded-xl border border-warm-border p-5 md:p-6">
        <h3 className="font-semibold text-foreground mb-2">Tell Us Once is not available in Northern Ireland</h3>
        <p className="text-sm text-muted leading-relaxed mb-3">
          Unlike the rest of the UK, the Tell Us Once service does not operate in Northern Ireland. This means you
          will need to contact each government department and local council service individually to notify them of
          the death. This includes:
        </p>
        <ul className="text-sm text-muted space-y-1 ml-4 list-disc">
          <li>DWP for benefits and State Pension (0800 731 0469)</li>
          <li>HMRC for tax (0300 200 3300)</li>
          <li>DVLA for driving licence (0300 790 6801)</li>
          <li>HM Passport Office (0300 222 0000)</li>
          <li>{city.councilName} for council tax and local services ({city.councilPhone})</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-3">
          Our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> and <Link href="/phone-directory" className="text-primary hover:underline">phone directory</Link> can help you work through this list efficiently.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-success-light rounded-xl border border-success/20 p-5 md:p-6">
      <h3 className="font-semibold text-foreground mb-2">Tell Us Once</h3>
      <p className="text-sm text-muted leading-relaxed">
        When you register the death in {city.name}, the registrar will give you a Tell Us Once reference number.
        This free service lets you notify most government departments in a single step, including the DWP, HMRC,
        DVLA, Passport Office, and {city.councilName}. You have 28 days to use it online at
        {' '}<a href="https://www.gov.uk/tell-us-once" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gov.uk/tell-us-once</a> or
        by calling <a href="tel:08000857308" className="text-primary hover:underline">0800 085 7308</a>.
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
  const faq = getCityFAQ(city, displayName);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `What to Do When Someone Dies in ${displayName}`,
    description: `Practical guide covering registrar details, council contacts, funeral costs, and step-by-step guidance for bereavement in ${displayName}.`,
    datePublished: '2026-03-13',
    dateModified: '2026-03-20',
    author: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background py-10 md:py-14 px-4">
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
            A practical, step-by-step guide with local registrar details, {city.councilName} contacts, funeral options, and {city.probateTerm.toLowerCase()} guidance for {city.region}. Everything you need to know, with no jargon. Updated for 2026.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        {/* Key facts at a glance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-8">
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <p className="text-xl font-bold text-primary">{city.registrationDeadlineDays} days</p>
            <p className="text-xs text-muted mt-1">To register the death</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <p className="text-xl font-bold text-primary">{getRegistrationCost(city)}</p>
            <p className="text-xs text-muted mt-1">Per death certificate</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <p className="text-xl font-bold text-primary">£300</p>
            <p className="text-xs text-muted mt-1">{city.probateTerm} court fee</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <p className="text-xl font-bold text-primary">{city.hasTellUsOnce ? '28 days' : 'N/A'}</p>
            <p className="text-xs text-muted mt-1">Tell Us Once{city.hasTellUsOnce ? ' deadline' : ' (not in NI)'}</p>
          </div>
        </div>

        {/* Table of contents */}
        <nav className="bg-card rounded-xl border border-border p-5 md:p-6 mb-8" aria-label="Page sections">
          <h2 className="font-semibold text-foreground mb-3">In this guide</h2>
          <ul className="space-y-2.5">
            <li><a href="#contacts" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Local contacts (registrar and council)</a></li>
            <li><a href="#step-1" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">1. Get the death certified</a></li>
            <li><a href="#step-2" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">2. Register the death</a></li>
            <li><a href="#tell-us-once" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">{city.hasTellUsOnce ? 'Tell Us Once' : 'Notify government departments'}</a></li>
            <li><a href="#step-3" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">3. Arrange the funeral</a></li>
            <li><a href="#step-4" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">4. Deal with the estate</a></li>
            <li><a href="#step-5" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">5. Notify organisations</a></li>
            <li><a href="#step-6" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">6. Look after yourself</a></li>
            <li><a href="#faq" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Common questions</a></li>
          </ul>
        </nav>
      </div>

      {/* Quick contacts */}
      <section id="contacts" className="py-8 px-4 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Local contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5 md:p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Register Office
              </h3>
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

            <div className="bg-card rounded-xl border border-border p-5 md:p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Local Council
              </h3>
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
                Contact the council about council tax exemption, housing, social services, and local bereavement support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Step 1 */}
          <div id="step-1" className="bg-card rounded-xl border border-border p-5 md:p-6 scroll-mt-20">
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
                <div className="bg-primary-light rounded-lg p-4 text-foreground">
                  <p className="text-sm"><strong>Local note:</strong> {city.localNotes}</p>
                </div>
              )}
              <p>
                You do not need to choose a funeral director at this stage. If the person died at home and you would like them to
                be moved, most funeral directors will provide an initial collection service, even if you have not yet decided on
                arrangements.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div id="step-2" className="bg-card rounded-xl border border-border p-5 md:p-6 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
              <h2 className="text-xl font-semibold text-foreground">Register the death</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                You must register the death within <strong>{city.registrationDeadlineDays} days</strong> at
                the register office in the area where the person died. In {displayName}, this
                is the <strong>{city.registrarName}</strong> at {city.registrarAddress}.
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
                registration. They cost {getRegistrationCost(city)} each and are needed by banks, insurers, pension providers,
                and solicitors. If the person had many accounts and policies, order 8 to 10. Ordering extra copies later costs more.
              </p>
            </div>
          </div>

          {/* Tell Us Once */}
          <div id="tell-us-once" className="scroll-mt-20">
            {getTellUsOnceSection(city)}
          </div>

          {/* Step 3 */}
          <div id="step-3" className="bg-card rounded-xl border border-border p-5 md:p-6 scroll-mt-20">
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
                itemised price list. Typical costs in {city.region}:
              </p>
              <div className="bg-primary-light rounded-lg p-4">
                <ul className="space-y-1.5">
                  <li><strong>Direct cremation:</strong> from around £1,000 to £1,500 (no service)</li>
                  <li><strong>Cremation with service:</strong> around £3,500 to £4,500</li>
                  <li><strong>Traditional burial:</strong> around £4,500 to £6,500</li>
                </ul>
              </div>
              <p>
                If you are on a low income, you may be eligible for a Funeral Expenses Payment from the DWP, which
                covers basic costs plus up to £1,000 for extras. Apply within 6 months of the funeral by calling
                {' '}<a href="tel:08007310469" className="text-primary hover:underline">0800 731 0469</a>.
              </p>
              <p>
                <Link href="/costs" className="text-primary hover:underline">See our detailed costs breakdown</Link> or
                compare <Link href="/guides/funeral-options" className="text-primary hover:underline">all funeral types</Link> (burial, cremation, direct, green, woodland).
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div id="step-4" className="bg-card rounded-xl border border-border p-5 md:p-6 scroll-mt-20">
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
                    other assets. The court fee is £300 for estates over £5,000. You can apply online or by post.
                  </>
                )}
              </p>
              <p>
                <Link href="/probate" className="text-primary hover:underline">Read our full {city.probateTerm.toLowerCase()} guide</Link> for
                a step-by-step walkthrough, costs, and DIY vs solicitor advice.
                {' '}Or learn about{' '}
                <Link href="/intestacy" className="text-primary hover:underline">what happens when someone dies without a will</Link>.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div id="step-5" className="bg-card rounded-xl border border-border p-5 md:p-6 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</div>
              <h2 className="text-xl font-semibold text-foreground">Notify organisations</h2>
            </div>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                Beyond {city.hasTellUsOnce ? 'what Tell Us Once covers' : 'government departments'}, you will need to contact a number of
                other organisations directly:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Banks and building societies (use the free <a href="https://www.deathnotificationservice.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Death Notification Service</a> to notify multiple banks at once)</li>
                <li>Insurance companies (life, home, car, travel)</li>
                <li>Pension providers (check for death-in-service benefits through the employer)</li>
                <li>Utility companies (gas, electricity, water, broadband)</li>
                <li>Mortgage lender or landlord</li>
                <li>Phone and TV providers</li>
                <li>Subscriptions and memberships</li>
                <li>Royal Mail (set up post redirection from £37 to catch correspondence)</li>
              </ul>
              <p>
                Each organisation will usually need a certified copy of the death certificate.
              </p>
              <p>
                Use our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> to save time, see the <Link href="/notify" className="text-primary hover:underline">full notification list</Link>, or
                browse the <Link href="/phone-directory" className="text-primary hover:underline">phone directory</Link> for contact numbers.
                For social media and email accounts, see our <Link href="/digital-legacy" className="text-primary hover:underline">digital accounts guide</Link>.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div id="step-6" className="bg-card rounded-xl border border-border p-5 md:p-6 scroll-mt-20">
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
                If you need someone to talk to, these services are available:
              </p>
              <div className="bg-primary-light rounded-lg p-4 space-y-2">
                <p><strong>Samaritans:</strong> <a href="tel:116123" className="text-primary hover:underline">116 123</a> (free, 24 hours, every day)</p>
                <p><strong>Cruse Bereavement Support:</strong> <a href="tel:08088081677" className="text-primary hover:underline">0808 808 1677</a> (free helpline)</p>
                {city.nation === 'Scotland' && (
                  <p><strong>Cruse Scotland:</strong> <a href="tel:08451000066" className="text-primary hover:underline">0845 100 0066</a></p>
                )}
                {city.nation === 'Northern Ireland' && (
                  <p><strong>Cruse Northern Ireland:</strong> <a href="tel:02890232695" className="text-primary hover:underline">028 9023 2695</a></p>
                )}
                <p><strong>At a Loss:</strong> <a href="https://www.ataloss.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ataloss.org</a> (directory of bereavement services near you)</p>
              </div>
              <p>
                Your GP in {displayName} can also refer you to local counselling services. See our <Link href="/support" className="text-primary hover:underline">full list of support services and helplines</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 px-4 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about bereavement in {displayName}</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="bg-card rounded-xl border border-border group">
                <summary className="p-5 md:p-6 font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-4 hover:text-primary transition-colors">
                  <span>{item.q}</span>
                  <svg className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary-light rounded-xl p-6 md:p-8 text-center">
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
          .slice(0, 6);
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
              <p className="text-sm text-muted mt-1">How to apply, costs, DIY vs solicitor</p>
            </Link>
            <Link href="/costs" className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Cost Breakdown</p>
              <p className="text-sm text-muted mt-1">Full breakdown of costs and ways to save</p>
            </Link>
            <Link href="/notify" className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Who to Notify</p>
              <p className="text-sm text-muted mt-1">Banks, utilities, and insurers you need to contact</p>
            </Link>
            <Link href="/template-letters" className="bg-card rounded-xl border border-border p-4 hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Template Letters</p>
              <p className="text-sm text-muted mt-1">Ready-to-use letters for banks, utilities, and more</p>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
