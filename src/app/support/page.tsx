import type { Metadata } from 'next';
import { SUPPORT_ORGANISATIONS } from '@/lib/support';

export const metadata: Metadata = {
  title: 'Support and Helplines After Bereavement',
  description: 'Free bereavement support helplines and organisations in the UK. Samaritans, Cruse, Citizens Advice, Age UK, child bereavement support, and more.',
  alternates: { canonical: 'https://helpafterloss.co.uk/support' },
  openGraph: {
    title: 'Support and Helplines After Bereavement',
    description: 'Free bereavement support helplines and organisations in the UK, including Samaritans, Cruse, and Citizens Advice.',
    url: 'https://helpafterloss.co.uk/support',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Bereavement Support and Helplines',
    description: 'Free, confidential support for anyone affected by bereavement.',
  },
};

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Support and Helplines
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        You do not have to go through this alone. These organisations offer free, confidential support for anyone affected by bereavement. Whether you need someone to talk to, practical advice, or financial guidance.
      </p>

      {/* Emergency banner */}
      <div className="bg-primary rounded-xl p-6 mb-10 text-white">
        <h2 className="text-xl font-bold mb-2">Need someone to talk to right now?</h2>
        <p className="text-white/90 mb-4">Samaritans are available 24 hours a day, 365 days a year. Free to call.</p>
        <a
          href="tel:116123"
          className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Call 116 123
        </a>
      </div>

      {/* All organisations */}
      <div className="space-y-4">
        {SUPPORT_ORGANISATIONS.map((org, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-1">{org.name}</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">{org.description}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {org.phone && (
                <a
                  href={`tel:${org.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-light text-primary rounded-lg hover:bg-sky-100 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {org.phone}
                </a>
              )}
              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-primary hover:underline"
              >
                Visit website &rarr;
              </a>
            </div>
            {org.hours && (
              <p className="text-xs text-muted mt-2">{org.hours}</p>
            )}
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Bereavement Support and Helplines',
            description: 'Free bereavement support helplines and organisations in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            isPartOf: {
              '@type': 'WebSite',
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
              { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://helpafterloss.co.uk/support' },
            ],
          }),
        }}
      />
    </div>
  );
}
