import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Help After Loss. We do not collect, store, or share any personal information.',
  alternates: { canonical: 'https://helpafterloss.co.uk/privacy' },
  openGraph: {
    title: 'Privacy Policy - Help After Loss',
    description: 'We do not collect, store, or share any personal information. Your data stays on your device.',
    url: 'https://helpafterloss.co.uk/privacy',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - Help After Loss',
    description: 'We do not collect, store, or share any personal information.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

      <div className="prose prose-sm max-w-none space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Summary</h2>
          <p>
            Help After Loss does not collect, store, or share any of your personal information. Your questionnaire answers and checklist progress are saved only on your own device using your browser's local storage. We have no database, no user accounts, and no way to access what you enter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">What data we collect</h2>
          <p><strong className="text-foreground">None.</strong> We do not collect any personal data. All information you enter into the questionnaire and checklist is stored locally in your web browser and never sent to our servers.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Local storage</h2>
          <p>
            We use your browser's localStorage to save your questionnaire answers and checklist progress so you can return to the site and continue where you left off. This data never leaves your device. You can clear it at any time by clicking "Start Over" on the results page, or by clearing your browser data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
          <p>
            We do not use cookies for tracking or advertising. Essential cookies may be set by our hosting provider (Vercel) for basic site functionality such as load balancing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Third-party services</h2>
          <p>
            Our website is hosted on Vercel. We do not use advertising networks, social media tracking pixels, or analytics services that collect personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">External links</h2>
          <p>
            Our site contains links to external websites (government services, charities, support organisations). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Children's privacy</h2>
          <p>
            Our service is available to users of all ages, including those under 18 who may be dealing with bereavement. We do not knowingly collect personal data from anyone of any age.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at contact@helpafterloss.co.uk.
          </p>
        </section>
      </div>
    </div>
  );
}
