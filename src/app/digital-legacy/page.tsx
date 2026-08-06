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
    what: 'Google\'s Inactive Account Manager lets people decide in advance what happens to their account. If your loved one did not set this up, you can still ask for access or for the account to be deleted.',
    how: 'Submit a request through Google\'s bereavement process. You will need proof of your own identity, the death certificate, and proof of how you were related. Google may share the account content with you, or close the account.',
    url: 'https://support.google.com/accounts/troubleshooter/6357590',
    note: 'Google will not provide passwords. They may share some content but not all.',
  },
  {
    name: 'Facebook and Instagram (Meta)',
    what: 'A Facebook account can be memorialised, so the word "Remembering" appears beside their name and friends can still visit and leave messages, or it can be closed for good. Instagram works the same way.',
    how: 'Submit a memorialisation or removal request through Facebook\'s Help Centre. You will need proof of how you were related and a death certificate. If they named a "legacy contact", that person can look after the memorialised account.',
    url: 'https://www.facebook.com/help/1506822589577997',
    note: 'Nobody can log in to a memorialised account, but friends can still see it. Many families find that a comfort.',
  },
  {
    name: 'Apple (iCloud, Apple ID)',
    what: 'Apple\'s Digital Legacy programme lets people name a Legacy Contact in advance. Without one, getting into the account needs a court order, which is a shame when there are photographs inside.',
    how: 'If a Legacy Contact was named, they can ask for access using their access key and the death certificate. If not, you will need a court order to send to Apple, and they will then release the account data.',
    url: 'https://support.apple.com/en-gb/HT212360',
    note: 'Without a Legacy Contact, a court order really is the only route. A solicitor can help you with it.',
  },
  {
    name: 'Microsoft (Outlook, Hotmail, OneDrive)',
    what: 'Microsoft can pass account data to the next of kin, or close the account.',
    how: 'Contact Microsoft support with a death certificate, proof of your own identity, and something showing how you were related. It usually takes several weeks, so do not worry if you do not hear back quickly.',
    url: 'https://support.microsoft.com/en-us/account-billing/accessing-outlook-com-onedrive-and-other-microsoft-services-when-someone-has-died-ebbd2860-917e-4b39-9913-212362da6b2f',
    note: 'Microsoft will not share their password with you.',
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
    what: 'A PayPal account should be closed, with any remaining balance returned to the estate.',
    how: 'Contact PayPal\'s bereavement team with the death certificate and proof that you are the executor or administrator. They will close the account and transfer the balance.',
    url: 'https://www.paypal.com/uk/cshelp/contact-us',
    note: 'Please do not withdraw the money using their login, however tempting. It can cause legal complications later.',
  },
  {
    name: 'Amazon',
    what: 'The account can be closed and any live subscriptions cancelled (Prime, Kindle Unlimited, and so on).',
    how: 'Contact Amazon customer service with the death certificate and an order number or the account details.',
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
        Most of us have dozens of online accounts, and after someone passes away those accounts need to be closed, memorialised, or moved into someone else's name. Every platform does it differently, which is why this page exists. There is no rush with any of it, and you may want to keep some accounts open for a while.
      </p>

      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-amber-800 mb-2">A few things worth knowing first</h2>
        <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
          <li>Try not to log in using their passwords. It is understandable, but it can cause legal complications and usually breaks the terms of service.</li>
          <li>Do cancel paid subscriptions when you can, so the estate is not charged month after month.</li>
          <li>Their email account is often the best place to find accounts, subscriptions, and letters nobody knew about.</li>
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
          Bank statements are the quickest way to spot direct debits and recurring payments. Most subscriptions keep taking money until somebody cancels them.
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
            image: 'https://helpafterloss.co.uk/opengraph-image',
            headline: 'Digital Legacy: Dealing With Online Accounts After a Death',
            description: 'How to handle email, social media, subscriptions, and other digital accounts when someone dies in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: { '@type': 'Organization', name: 'Help After Loss', logo: { '@type': 'ImageObject', url: 'https://helpafterloss.co.uk/opengraph-image' } },
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
