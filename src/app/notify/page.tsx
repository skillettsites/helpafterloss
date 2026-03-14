import type { Metadata } from 'next';
import Link from 'next/link';
import { bereavementContacts, categoryLabels, categoryOrder } from '@/lib/bereavement-contacts';
import type { BereavementContact } from '@/lib/bereavement-contacts';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Who to Notify When Someone Dies - Complete UK Guide',
  description: 'Contact details, phone numbers, and step-by-step processes for notifying every bank, utility, insurer, and government department after a death in the UK.',
  alternates: { canonical: 'https://helpafterloss.co.uk/notify' },
  openGraph: {
    title: 'Who to Notify When Someone Dies - Complete UK Guide',
    description: 'Contact details, phone numbers, and step-by-step processes for notifying every bank, utility, insurer, and government department after a death in the UK.',
    url: 'https://helpafterloss.co.uk/notify',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who to Notify When Someone Dies - Complete UK Guide',
    description: 'Contact details, phone numbers, and step-by-step processes for notifying every bank, utility, insurer, and government department after a death in the UK.',
  },
};

const categorySingularLabels: Record<BereavementContact['category'], string> = {
  bank: 'Bank',
  'building-society': 'Building Society',
  energy: 'Energy Provider',
  telecoms: 'Telecoms',
  water: 'Water Company',
  insurance: 'Insurance & Pensions',
  government: 'Government',
};

const faqs = [
  {
    question: 'Who do I need to notify when someone dies?',
    answer: 'You need to notify banks, building societies, energy suppliers, water companies, telecoms providers, insurers, pension providers, and government departments. Tell Us Once covers most government notifications, but you will need to contact every other organisation individually.',
  },
  {
    question: 'What does Tell Us Once not cover?',
    answer: 'Tell Us Once only notifies government departments such as HMRC, DWP, DVLA, the Passport Office, and local councils. It does not cover banks, building societies, utility companies, insurers, telecoms providers, or any private-sector organisations. You must contact each of these separately.',
  },
  {
    question: 'Do I need to notify every bank individually?',
    answer: 'Yes, you generally need to contact each bank separately. However, the Death Notification Service (operated by UK Finance) allows you to notify multiple banks through a single contact point. Not all banks participate, so check with each institution.',
  },
  {
    question: 'What documents do I need to notify organisations?',
    answer: 'Most organisations require a certified copy of the death certificate. Banks and financial institutions may also ask for the grant of probate or letters of administration, your photo ID, and proof of your authority to deal with the estate. Order at least 5 certified copies of the death certificate.',
  },
  {
    question: 'Can I notify organisations online?',
    answer: 'Many organisations now accept online bereavement notifications, including most major banks (Barclays, HSBC, Lloyds, NatWest) and energy companies. Some still require a phone call or written notification. We list the available options for each organisation on their dedicated page.',
  },
  {
    question: 'How long does it take to close accounts?',
    answer: 'Processing times vary by organisation. Most banks take 4 to 8 weeks once all documents have been received. Energy companies typically process changes within 2 to 4 weeks. Government departments are usually faster, especially if you use the Tell Us Once service. Complex estates involving probate will take longer.',
  },
];

function groupByCategory(contacts: BereavementContact[]) {
  const grouped: Record<string, BereavementContact[]> = {};
  for (const contact of contacts) {
    if (!grouped[contact.category]) {
      grouped[contact.category] = [];
    }
    grouped[contact.category].push(contact);
  }
  return grouped;
}

export default function NotifyHubPage() {
  const grouped = groupByCategory(bereavementContacts);
  const totalOrgs = bereavementContacts.length;
  const totalCategories = Object.keys(grouped).length;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-background py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-muted mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Who to Notify</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Who to Notify When Someone Dies
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            The Tell Us Once service covers government departments, but it does not notify banks,
            utility companies, insurers, or telecoms providers. You need to contact each of those
            organisations yourself. This guide gives you every phone number, online form, and
            step-by-step process you need.
          </p>
        </div>
      </section>

      {/* Stat cards */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <p className="text-3xl font-bold text-primary">{totalOrgs}+</p>
              <p className="text-sm text-muted mt-1">Organisations covered</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <p className="text-3xl font-bold text-primary">{totalCategories}</p>
              <p className="text-sm text-muted mt-1">Categories</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <p className="text-3xl font-bold text-primary">
                <svg className="w-8 h-8 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </p>
              <p className="text-sm text-muted mt-1">Direct phone numbers and online forms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-sm text-muted leading-relaxed">
            <p>
              After registering a death and using the Tell Us Once service, there is still a long list
              of organisations to contact. Each one has its own process, phone number, and document
              requirements.
            </p>
            <p>
              We have researched and documented the bereavement process for every major UK bank,
              building society, energy company, telecoms provider, water company, insurer, and
              government department. Click on any organisation below to see their full notification
              guide, including what to say when you call.
            </p>
          </div>
        </div>
      </section>

      {/* Organisation sections by category */}
      {categoryOrder.map(cat => {
        const contacts = grouped[cat];
        if (!contacts || contacts.length === 0) return null;

        return (
          <section key={cat} className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                {categoryLabels[cat]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {contacts.map(contact => (
                  <Link
                    key={contact.slug}
                    href={`/notify/${contact.slug}`}
                    className="bg-card rounded-lg border border-border p-4 hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {contact.name}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      {contact.bereavementPhone && (
                        <span className="text-xs text-muted">
                          {contact.bereavementPhone}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {categorySingularLabels[contact.category]}
                      </span>
                      {contact.onlineFormUrl && (
                        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium rounded-full">
                          Online form
                        </span>
                      )}
                    </div>
                    {contact.probateThreshold && (
                      <p className="text-xs text-muted mt-2">
                        Probate threshold: {contact.probateThreshold}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* FAQ section */}
      <section className="py-12 px-4">
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

      {/* Related guides */}
      <section className="py-8 px-4 mb-8">
        <div className="max-w-3xl mx-auto">
          <RelatedGuides
            currentPath="/notify"
            guides={['/tell-us-once', '/template-letters', '/phone-directory', '/checklist']}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary-light rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Need a personalised checklist?
            </h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Answer a few simple questions and we will create a step-by-step guide tailored to your
              exact circumstances, with real deadlines calculated from the date of death.
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

      {/* Schema.org: CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Who to Notify When Someone Dies - Complete UK Guide',
            description: 'Contact details, phone numbers, and step-by-step processes for notifying every bank, utility, insurer, and government department after a death in the UK.',
            url: 'https://helpafterloss.co.uk/notify',
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

      {/* Schema.org: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* Schema.org: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Who to Notify', item: 'https://helpafterloss.co.uk/notify' },
            ],
          }),
        }}
      />
    </div>
  );
}
