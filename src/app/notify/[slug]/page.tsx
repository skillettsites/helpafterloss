import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  bereavementContacts,
  getContactBySlug,
  getAllContactSlugs,
  getContactsByCategory,
  categoryLabels,
} from '@/lib/bereavement-contacts';
import type { BereavementContact } from '@/lib/bereavement-contacts';
import { RelatedGuides } from '@/components/RelatedGuides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categorySingularLabels: Record<BereavementContact['category'], string> = {
  bank: 'Bank',
  'building-society': 'Building Society',
  energy: 'Energy Provider',
  telecoms: 'Telecoms',
  water: 'Water Company',
  insurance: 'Insurance & Pensions',
  government: 'Government',
};

const categoryGuideLinks: Partial<Record<BereavementContact['category'], string[]>> = {
  bank: ['/template-letters', '/probate', '/checklist'],
  'building-society': ['/template-letters', '/probate', '/checklist'],
  energy: ['/template-letters', '/checklist', '/tell-us-once'],
  telecoms: ['/template-letters', '/checklist', '/digital-legacy'],
  water: ['/template-letters', '/checklist', '/tell-us-once'],
  insurance: ['/template-letters', '/probate', '/costs'],
  government: ['/tell-us-once', '/checklist', '/probate'],
};

export async function generateStaticParams() {
  return getAllContactSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const contact = getContactBySlug(slug);
  if (!contact) return {};

  const title = `${contact.name} Bereavement: How to Notify, Documents Needed & Timeline`;
  const description = `Step-by-step guide to notifying ${contact.name} after a death. Bereavement phone number, online form, documents required, and how long it takes.`;

  return {
    title,
    description,
    alternates: { canonical: `https://helpafterloss.co.uk/notify/${contact.slug}` },
    openGraph: {
      title,
      description,
      url: `https://helpafterloss.co.uk/notify/${contact.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function generateFaqs(contact: BereavementContact) {
  const faqs: { question: string; answer: string }[] = [
    {
      question: `How do I notify ${contact.name} of a death?`,
      answer: contact.bereavementPhone
        ? `You can notify ${contact.name} by calling their bereavement team on ${contact.bereavementPhone}${contact.onlineFormUrl ? ', or by completing their online bereavement form' : ''}. ${contact.postalAddress ? `You can also write to them at ${contact.postalAddress}.` : ''} Have the death certificate and your identification ready before you make contact.`
        : `You can notify ${contact.name} through their bereavement process${contact.onlineFormUrl ? ', including their online form' : ''}. Visit their bereavement page for full details and have the death certificate ready.`,
    },
    {
      question: `What documents does ${contact.name} need for bereavement?`,
      answer: `${contact.name} typically requires: ${contact.documentsRequired.join(', ')}. It is a good idea to have certified copies of the death certificate ready, as originals may be retained temporarily.`,
    },
    {
      question: `How long does ${contact.name} take to process a bereavement?`,
      answer: contact.typicalTimeline
        ? contact.typicalTimeline
        : `Processing times at ${contact.name} vary depending on the complexity of the estate and whether probate is required. Contact their bereavement team for a specific estimate once you have submitted all documents.`,
    },
  ];

  if (contact.category === 'bank' || contact.category === 'building-society') {
    faqs.push({
      question: `Can I access a ${contact.name} account without probate?`,
      answer: contact.probateThreshold
        ? `${contact.name} may release funds without probate if the balance is below their threshold of ${contact.probateThreshold}. Above this amount, a grant of probate or letters of administration is usually required. Contact their bereavement team to discuss your specific situation.`
        : `Whether you can access a ${contact.name} account without probate depends on the balance and account type. Contact their bereavement team to discuss your specific circumstances, as they may be able to release small balances without a grant.`,
    });
    faqs.push({
      question: `What happens to a joint ${contact.name} account when someone dies?`,
      answer: contact.jointAccountProcess
        ? contact.jointAccountProcess
        : `Joint accounts at ${contact.name} are typically transferred to the surviving account holder. The account remains accessible, though some restrictions may apply temporarily. Contact ${contact.name} to confirm the process for your situation.`,
    });
  }

  return faqs;
}

export default async function NotifyOrganisationPage({ params }: PageProps) {
  const { slug } = await params;
  const contact = getContactBySlug(slug);

  if (!contact) {
    notFound();
  }

  const faqs = generateFaqs(contact);
  const isBankOrBS = contact.category === 'bank' || contact.category === 'building-society';

  // Get related orgs in same category (excluding current)
  const relatedOrgs = getContactsByCategory(contact.category)
    .filter(c => c.slug !== contact.slug)
    .slice(0, 4);

  const guideLinks = categoryGuideLinks[contact.category] || ['/checklist', '/template-letters', '/tell-us-once'];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${contact.name} Bereavement: How to Notify, Documents Needed & Timeline`,
    description: `Step-by-step guide to notifying ${contact.name} after a death.`,
    datePublished: '2026-03-14',
    dateModified: '2026-03-14',
    author: { '@type': 'Organization', name: 'Help After Loss' },
    publisher: {
      '@type': 'Organization',
      name: 'Help After Loss',
      url: 'https://helpafterloss.co.uk',
    },
    mainEntityOfPage: `https://helpafterloss.co.uk/notify/${contact.slug}`,
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Who to Notify', item: 'https://helpafterloss.co.uk/notify' },
      { '@type': 'ListItem', position: 3, name: contact.name, item: `https://helpafterloss.co.uk/notify/${contact.slug}` },
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
            <Link href="/notify" className="hover:text-primary">Who to Notify</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{contact.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {categorySingularLabels[contact.category]}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Notifying {contact.name} of a Death
          </h1>
          {contact.bereavementPhone && (
            <a
              href={`tel:${contact.bereavementPhone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:underline"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {contact.bereavementPhone}
            </a>
          )}
          <p className="text-lg text-muted leading-relaxed mt-4">
            Everything you need to notify {contact.name} after a bereavement, including the
            dedicated phone number, required documents, and how long the process takes.
          </p>
        </div>
      </section>

      {/* Quick info cards */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            {contact.bereavementPhone && (
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h2 className="font-semibold text-foreground text-sm">Bereavement Phone</h2>
                </div>
                <a
                  href={`tel:${contact.bereavementPhone.replace(/\s/g, '')}`}
                  className="text-lg font-bold text-primary hover:underline"
                >
                  {contact.bereavementPhone}
                </a>
                {contact.bereavementPhoneHours && (
                  <p className="text-xs text-muted mt-1">{contact.bereavementPhoneHours}</p>
                )}
                {contact.internationalPhone && (
                  <p className="text-xs text-muted mt-1">International: {contact.internationalPhone}</p>
                )}
              </div>
            )}

            {/* Online form */}
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="font-semibold text-foreground text-sm">Online Form</h2>
              </div>
              {contact.onlineFormUrl ? (
                <a
                  href={contact.onlineFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Complete online form
                </a>
              ) : (
                <p className="text-sm text-muted mt-1">No online form available. Use the phone number or post instead.</p>
              )}
            </div>

            {/* Postal address */}
            {contact.postalAddress && (
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h2 className="font-semibold text-foreground text-sm">Postal Address</h2>
                </div>
                <p className="text-sm text-muted">{contact.postalAddress}</p>
              </div>
            )}

            {/* Timeline */}
            {contact.typicalTimeline && (
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="font-semibold text-foreground text-sm">Typical Timeline</h2>
                </div>
                <p className="text-sm text-muted">{contact.typicalTimeline}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How to notify */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">How to notify {contact.name}</h2>
          <div className="space-y-4">
            {contact.howToNotify.map((step, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-muted leading-relaxed pt-1">{step}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bereavement page link */}
          <div className="mt-4">
            <a
              href={contact.bereavementUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Visit {contact.name} bereavement page
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Documents required */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Documents you will need</h2>
          <div className="bg-card rounded-xl border border-border p-6">
            <ul className="space-y-3">
              {contact.documentsRequired.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-sm text-muted leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Joint vs Sole accounts (banks/building societies only) */}
      {isBankOrBS && (contact.jointAccountProcess || contact.soleAccountProcess) && (
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Joint vs sole accounts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contact.jointAccountProcess && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Joint accounts
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{contact.jointAccountProcess}</p>
                </div>
              )}
              {contact.soleAccountProcess && (
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Sole accounts
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{contact.soleAccountProcess}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Probate threshold */}
      {contact.probateThreshold && (
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Probate threshold</h2>
            <div className="bg-warm rounded-xl border border-warm-border p-6">
              <p className="text-sm text-muted leading-relaxed">
                {contact.name} has a probate threshold of <strong>{contact.probateThreshold}</strong>.
                If the total balance held with {contact.name} is below this amount, they may release
                funds without requiring a grant of probate or letters of administration. If the
                balance exceeds this threshold, you will typically need to obtain probate before
                {contact.name} can release the funds.
              </p>
              <p className="text-sm text-muted leading-relaxed mt-3">
                <Link href="/probate" className="text-primary hover:underline font-medium">
                  Read our probate guide
                </Link>{' '}
                to understand the process and whether you need to apply.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Call script */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">What to say when you call</h2>
          <div className="bg-accent/50 rounded-xl border border-border p-6">
            <p className="text-sm text-muted leading-relaxed italic mb-4">
              You do not need to prepare a detailed explanation. A brief, straightforward call is
              all that is needed. Here is a simple script you can follow:
            </p>
            <div className="bg-card rounded-lg border border-border p-5 space-y-3">
              <p className="text-sm text-foreground leading-relaxed">
                &quot;Hello, I am calling to notify you of a death. The account holder was
                <span className="text-primary font-medium"> [full name]</span>, and the date of
                death was <span className="text-primary font-medium">[date]</span>.&quot;
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                &quot;I am their <span className="text-primary font-medium">[relationship, e.g. son/daughter/executor]</span>.
                My reference number from the death registration is <span className="text-primary font-medium">[Tell Us Once reference number, if you have one]</span>.&quot;
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                &quot;Could you let me know what documents you need and what the next steps are?&quot;
              </p>
            </div>
            <p className="text-xs text-muted mt-4">
              The bereavement team will guide you through the rest of the call. Have the death
              certificate, your photo ID, and any account details to hand before calling.
            </p>
          </div>
        </div>
      </section>

      {/* Additional notes */}
      {contact.additionalNotes && contact.additionalNotes.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Additional information</h2>
            <div className="bg-card rounded-xl border border-border p-6">
              <ul className="space-y-3">
                {contact.additionalNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-muted leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Template letters */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary-light rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-3">
              Need to write to {contact.name}?
            </h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Use our ready-made template letters to notify banks, utilities, and other organisations.
              Just fill in the details and send.
            </p>
            <Link
              href="/template-letters"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              View Template Letters
            </Link>
          </div>
        </div>
      </section>

      {/* Related orgs in same category */}
      {relatedOrgs.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Other {categoryLabels[contact.category].toLowerCase()} to notify
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedOrgs.map(org => (
                <Link
                  key={org.slug}
                  href={`/notify/${org.slug}`}
                  className="bg-card rounded-lg border border-border p-4 hover:border-primary hover:shadow-sm transition-all group"
                >
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {org.name}
                  </p>
                  {org.bereavementPhone && (
                    <p className="text-xs text-muted mt-1">{org.bereavementPhone}</p>
                  )}
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted mt-4">
              <Link href="/notify" className="text-primary hover:underline">
                View all organisations to notify
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Related guides */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-3xl mx-auto">
          <RelatedGuides currentPath={`/notify/${contact.slug}`} guides={guideLinks} />
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </div>
  );
}
