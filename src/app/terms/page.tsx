import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Help After Loss. This site provides general guidance only and does not constitute legal, financial, or tax advice.',
  alternates: { canonical: 'https://helpafterloss.co.uk/terms' },
  openGraph: {
    title: 'Terms of Use - Help After Loss',
    description: 'Terms of use for Help After Loss. General guidance only, not legal or financial advice.',
    url: 'https://helpafterloss.co.uk/terms',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Use - Help After Loss',
    description: 'Terms of use for Help After Loss.',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground mb-4">Terms of Use</h1>
      <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

      <div className="prose prose-sm max-w-none space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">About this site</h2>
          <p>
            Help After Loss is a free information website that provides general guidance for people dealing with bereavement in the United Kingdom. The site is provided as a public resource at no cost to users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Not professional advice</h2>
          <p>
            The information on this site is for general guidance only. It does not constitute legal, financial, tax, or medical advice. Every situation is different, and you should always seek professional advice for your specific circumstances. While we take care to keep information accurate and up to date, we cannot guarantee that every detail is correct at the time you read it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Accuracy and updates</h2>
          <p>
            We do our best to ensure that the information on this site is accurate and reflects current UK law, regulations, and best practice. However, rules and thresholds change regularly. If you notice something that appears to be out of date, please let us know at contact@helpafterloss.co.uk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Your use of the site</h2>
          <p>
            By using this website, you accept these terms. You may use the site for personal, non-commercial purposes. You may share links to any page. You may not reproduce substantial portions of the content without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Local storage</h2>
          <p>
            Some features of this site (such as the personalised checklist and questionnaire) save data to your browser's local storage so that you can return and continue where you left off. This data is stored on your device only and is never sent to our servers. You can clear it at any time through your browser settings or by using the "Start Over" option.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">External links</h2>
          <p>
            This site contains links to external websites, including government services, charities, and other organisations. We provide these links for convenience and do not control or endorse the content of external sites. We are not responsible for the availability, accuracy, or content of any linked site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of liability</h2>
          <p>
            Help After Loss is provided on an "as is" basis. To the fullest extent permitted by law, we exclude all liability for any loss or damage arising from your use of this site or reliance on its content, whether direct, indirect, or consequential.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Any changes will be reflected on this page with an updated date. Continued use of the site after changes are posted constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            If you have any questions about these terms, please contact us at contact@helpafterloss.co.uk.
          </p>
        </section>
      </div>
    </div>
  );
}
