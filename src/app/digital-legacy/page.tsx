import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Digital Legacy - Dealing With Online Accounts After Death',
  description: 'How to handle email, social media, subscriptions, and other digital accounts when someone dies. Platform-by-platform guide for Google, Apple, Facebook, and more.',
  alternates: { canonical: 'https://helpafterloss.co.uk/digital-legacy' },
  openGraph: {
    title: 'Digital Legacy - Dealing With Online Accounts After Death',
    description: 'How to close or memorialise Google, Facebook, Apple, and other accounts when someone dies.',
    url: 'https://helpafterloss.co.uk/digital-legacy',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Legacy - Handling Online Accounts After a Death',
    description: 'Platform-by-platform guide for Google, Apple, Facebook, Microsoft, and more.',
  },
};

const PLATFORMS = [
  {
    name: 'Google (Gmail, YouTube, Drive, Photos)',
    what: 'Google\'s Inactive Account Manager lets the person set up what happens to their account after inactivity. If they did not set this up, you can request access or deletion.',
    how: 'Submit a request through Google\'s deceased user process. You will need: proof of your identity, the death certificate, and proof of your relationship. Google may provide account content or delete the account.',
    url: 'https://support.google.com/accounts/troubleshooter/6357590',
    note: 'Google will not provide passwords. They may share some content but not all.',
  },
  {
    name: 'Facebook and Instagram (Meta)',
    what: 'Facebook accounts can be memorialised (the word "Remembering" appears next to the name) or permanently deleted. Instagram follows the same process.',
    how: 'Submit a memorialisation or removal request through Facebook\'s Help Centre. You need proof of your relationship and a death certificate. A "legacy contact" set by the person can manage the memorialised account.',
    url: 'https://www.facebook.com/help/1506822589577997',
    note: 'Memorialised accounts cannot be logged into but remain visible to friends.',
  },
  {
    name: 'Apple (iCloud, Apple ID)',
    what: 'Apple\'s Digital Legacy programme lets someone name a Legacy Contact. Without this, accessing the account requires a court order.',
    how: 'If a Legacy Contact was set up, they can request access using their access key and the death certificate. Without one, you need to obtain a court order and submit it to Apple. Apple will then provide access to the account data.',
    url: 'https://support.apple.com/en-gb/HT212360',
    note: 'A court order is the only way without a Legacy Contact. Solicitors can help with this.',
  },
  {
    name: 'Microsoft (Outlook, Hotmail, OneDrive)',
    what: 'Microsoft can provide account data to the next of kin or close a deceased person\'s account.',
    how: 'Contact Microsoft support. Provide a death certificate, proof of your identity, and documentation of your relationship. The process typically takes several weeks.',
    url: 'https://support.microsoft.com/en-gb/account-billing/accessing-a-deceased-person-s-account',
    note: 'Microsoft will not share the person\'s password.',
  },
  {
    name: 'Twitter / X',
    what: 'Accounts of deceased users can be deactivated by a family member or authorised person.',
    how: 'Submit a deactivation request through Twitter\'s Help Centre with proof of death and your relationship.',
    url: 'https://help.twitter.com/en/rules-and-policies/contact-twitter-about-a-deceased-family-members-account',
    note: 'Twitter does not provide account access or data.',
  },
  {
    name: 'LinkedIn',
    what: 'Profiles of deceased members can be removed or memorialised.',
    how: 'Use LinkedIn\'s online form to request removal. You need: the person\'s name, profile URL, your relationship, and a link to an obituary or death notice.',
    url: 'https://www.linkedin.com/help/linkedin/answer/2842',
    note: 'LinkedIn does not require a death certificate for removal requests.',
  },
  {
    name: 'PayPal',
    what: 'PayPal accounts should be closed and any remaining balance returned to the estate.',
    how: 'Contact PayPal\'s bereavement team. Provide the death certificate and proof of your role as executor/administrator. PayPal will close the account and transfer the balance.',
    url: 'https://www.paypal.com/uk/cshelp/contact-us',
    note: 'Do not withdraw money using the person\'s login, as this could cause legal complications.',
  },
  {
    name: 'Amazon',
    what: 'Close the account and cancel any active subscriptions (Prime, Kindle Unlimited, etc.).',
    how: 'Contact Amazon customer service. Provide the death certificate and order number or account details.',
    url: 'https://www.amazon.co.uk/gp/help/customer/contact-us',
    note: 'Digital purchases (Kindle books, music) are licensed and may not be transferable.',
  },
];

export default function DigitalLegacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Digital Legacy' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Digital Legacy: Dealing With Online Accounts
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Most people have dozens of online accounts. After a death, these need to be closed, memorialised, or transferred. Each platform has its own process. Here is what to do for the most common services.
      </p>

      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-amber-800 mb-2">Important notes</h2>
        <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
          <li>Do not log in using the person\'s passwords. This can cause legal complications and may violate terms of service.</li>
          <li>Cancel paid subscriptions as soon as possible to stop ongoing charges to the estate.</li>
          <li>Check email accounts for any unknown financial accounts, subscriptions, or correspondence.</li>
        </ul>
      </div>

      {/* Platform guides */}
      <div className="space-y-6 mb-12">
        {PLATFORMS.map((p, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">{p.name}</h2>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p><strong className="text-foreground">What happens:</strong> {p.what}</p>
              <p><strong className="text-foreground">How to proceed:</strong> {p.how}</p>
              {p.note && (
                <p className="text-xs bg-gray-50 p-3 rounded-lg italic">{p.note}</p>
              )}
              <p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Official help page &rarr;
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subscriptions checklist */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common subscriptions to cancel</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted">
          {[
            'Netflix', 'Spotify', 'Amazon Prime', 'Disney+', 'Apple Music', 'YouTube Premium',
            'Adobe Creative Cloud', 'Microsoft 365', 'Sky/NOW TV', 'BT Sport',
            'Gym membership', 'Magazine subscriptions', 'Newspaper subscriptions',
            'Dating apps', 'Cloud storage', 'VPN services', 'Audible',
            'Deliveroo/Uber Eats', 'Food boxes (HelloFresh, etc.)', 'Charity direct debits',
          ].map((sub, i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              {sub}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-4">
          Check bank statements for direct debits and recurring payments. Many subscriptions continue charging unless actively cancelled.
        </p>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get all tasks in one personalised list</h2>
        <p className="text-muted mb-6">Including digital accounts, financial tasks, and everything else you need to do.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/digital-legacy" guides={['/template-letters', '/guides/document-checklist', '/guide', '/checklist']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Digital Legacy: Dealing With Online Accounts After a Death',
            description: 'How to handle email, social media, subscriptions, and other digital accounts when someone dies in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: { '@type': 'Organization', name: 'Help After Loss' },
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
              { '@type': 'ListItem', position: 2, name: 'Digital Legacy', item: 'https://helpafterloss.co.uk/digital-legacy' },
            ],
          }),
        }}
      />
    </div>
  );
}
