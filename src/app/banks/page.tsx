import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getContactsByCategory } from '@/lib/bereavement-contacts';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Bank Bereavement Contacts UK: Every Major Bank Compared (2026)',
  description:
    'Compare bereavement processes for every major UK bank. Phone numbers, probate thresholds, online forms, and how long each bank takes. Updated March 2026.',
  alternates: { canonical: 'https://helpafterloss.co.uk/banks' },
  openGraph: {
    title: 'Bank Bereavement Contacts UK: Every Major Bank Compared (2026)',
    description:
      'Compare bereavement processes for every major UK bank. Phone numbers, probate thresholds, online forms, and timelines.',
    url: 'https://helpafterloss.co.uk/banks',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank Bereavement Contacts UK (2026)',
    description:
      'Compare bereavement processes, phone numbers, and probate thresholds for every major UK bank.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I notify a bank when someone dies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call the bank\'s dedicated bereavement phone number or complete their online bereavement form. Most major UK banks have a specialist bereavement team. You will need a certified copy of the death certificate and your photo ID. You can also use the Death Notification Service to notify multiple banks at once.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need probate to access a deceased person\'s bank account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. Each bank has a probate threshold, typically between £5,000 and £50,000. If the account balance is below this threshold, the bank may release funds without a grant of probate. Lloyds, Halifax, NatWest, and RBS have thresholds around £50,000. Nationwide is £50,000. Santander releases up to £10,000 via a simplified email process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to joint bank accounts when someone dies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Joint accounts with right of survivorship automatically pass to the surviving account holder. The bank removes the deceased\'s name and the surviving holder keeps full access. You still need to notify the bank and provide a death certificate. Sole accounts are frozen until the estate is settled.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the bank pay funeral costs from the deceased\'s account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most banks will prioritise payment of funeral invoices directly from the deceased\'s account, even before probate is granted. You will need to provide the funeral director\'s invoice. This is standard practice across major UK banks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Death Notification Service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Death Notification Service is a free service operated by UK Finance that allows you to notify multiple banks and building societies through a single contact point. Not all banks participate, so you may still need to contact some individually. It does not cover utility companies, insurers, or government departments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to close a bank account after death?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most banks take 4 to 8 weeks to process account closures once all documents are received. If probate is required, the total process can take 6 to 12 months. Simple estates below the probate threshold are typically resolved in 2 to 4 weeks.',
      },
    },
  ],
};

export default function BanksPage() {
  const banks = getContactsByCategory('bank');
  const buildingSocieties = getContactsByCategory('building-society');

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Banks & Building Societies' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Bank Bereavement Contacts UK: Every Major Bank Compared
      </h1>

      <p className="text-lg text-muted mb-6 max-w-3xl">
        When someone dies, you need to notify every bank and building society they held
        accounts with. Each has different bereavement phone numbers, processes, and
        probate thresholds. This page compares them all so you know exactly what to expect.
      </p>

      <p className="text-sm text-muted mb-8">
        Last reviewed: March 2026. Sources: individual bank bereavement pages (linked below).
        If you spot an error, please{' '}
        <Link href="/about" className="text-primary hover:underline">
          contact us
        </Link>.
      </p>

      {/* Quick comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Quick comparison: bereavement phone numbers
        </h2>
        <p className="text-muted mb-4">
          Every number below is the bank&apos;s dedicated bereavement line, not the general
          customer service number. These lines are staffed by specialist teams trained
          to handle sensitive situations.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-card">
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Bank</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Bereavement Phone</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Hours</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Online Form</th>
                <th className="text-left p-3 font-semibold text-foreground border-b border-border">Probate Threshold</th>
              </tr>
            </thead>
            <tbody>
              {banks.map((bank, i) => (
                <tr
                  key={bank.slug}
                  className={i % 2 === 0 ? 'bg-background' : 'bg-card/50'}
                >
                  <td className="p-3 border-b border-border">
                    <Link
                      href={`/notify/${bank.slug}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {bank.name}
                    </Link>
                    {bank.parentGroup && (
                      <span className="block text-xs text-muted">{bank.parentGroup}</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-border font-mono text-foreground">
                    {bank.bereavementPhone || 'See website'}
                  </td>
                  <td className="p-3 border-b border-border text-muted">
                    {bank.bereavementPhoneHours || 'Varies'}
                  </td>
                  <td className="p-3 border-b border-border">
                    {bank.onlineFormUrl ? (
                      <span className="text-green-600 dark:text-green-400 font-medium">Yes</span>
                    ) : (
                      <span className="text-muted">No</span>
                    )}
                  </td>
                  <td className="p-3 border-b border-border text-foreground">
                    {bank.probateThreshold || 'Ask bank'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Building societies */}
      {buildingSocieties.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Building societies
          </h2>
          <p className="text-muted mb-4">
            Building societies follow similar bereavement processes to banks. Most have
            dedicated bereavement teams and will release small balances without probate.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-card">
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Building Society</th>
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Bereavement Phone</th>
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Hours</th>
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Online Form</th>
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Probate Threshold</th>
                </tr>
              </thead>
              <tbody>
                {buildingSocieties.map((bs, i) => (
                  <tr
                    key={bs.slug}
                    className={i % 2 === 0 ? 'bg-background' : 'bg-card/50'}
                  >
                    <td className="p-3 border-b border-border">
                      <Link
                        href={`/notify/${bs.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {bs.name}
                      </Link>
                    </td>
                    <td className="p-3 border-b border-border font-mono text-foreground">
                      {bs.bereavementPhone || 'See website'}
                    </td>
                    <td className="p-3 border-b border-border text-muted">
                      {bs.bereavementPhoneHours || 'Varies'}
                    </td>
                    <td className="p-3 border-b border-border">
                      {bs.onlineFormUrl ? (
                        <span className="text-green-600 dark:text-green-400 font-medium">Yes</span>
                      ) : (
                        <span className="text-muted">No</span>
                      )}
                    </td>
                    <td className="p-3 border-b border-border text-foreground">
                      {bs.probateThreshold || 'Ask branch'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* What you need to know */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          What you need to know before calling
        </h2>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Documents to have ready</h3>
            <ul className="text-muted space-y-1.5 list-disc list-inside">
              <li>Certified copy of the death certificate (order at least 5 copies)</li>
              <li>Your photo ID (passport or driving licence)</li>
              <li>The deceased&apos;s account details (if known)</li>
              <li>The will (if there is one)</li>
              <li>Grant of probate (if applicable and already obtained)</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">The Death Notification Service</h3>
            <p className="text-muted mb-2">
              The{' '}
              <a
                href="https://www.deathnotificationservice.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Death Notification Service
              </a>{' '}
              (operated by UK Finance) lets you notify multiple banks and building societies
              through a single contact. It is free to use and saves time, but not every bank
              participates, so check the list before relying on it exclusively.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Probate thresholds explained</h3>
            <p className="text-muted mb-2">
              Each bank sets its own threshold below which it will release funds without
              requiring a grant of probate. This varies from £5,000 (Santander simplified process)
              to £50,000 (Lloyds, NatWest, Nationwide). If the balance is above the threshold,
              you will need to apply for{' '}
              <Link href="/probate" className="text-primary hover:underline">
                probate
              </Link>{' '}
              before the bank will release funds. Most banks will still pay funeral invoices
              directly from the account before probate is granted.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">Joint accounts</h3>
            <p className="text-muted">
              Joint accounts with right of survivorship pass automatically to the surviving
              account holder. The bank will remove the deceased&apos;s name from the account after
              you provide the death certificate. The surviving holder keeps full access throughout.
              Sole accounts are frozen immediately and funds are released through the estate
              administration process.
            </p>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Step-by-step: notifying banks after a death
        </h2>

        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <p className="font-semibold text-foreground">Gather documents</p>
              <p className="text-muted text-sm">Get certified copies of the death certificate, the will (if one exists), and your own photo ID.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <p className="font-semibold text-foreground">Identify all accounts</p>
              <p className="text-muted text-sm">Check bank statements, post, and the deceased&apos;s records. The <Link href="/guides/finding-accounts-after-death" className="text-primary hover:underline">finding accounts guide</Link> can help.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <p className="font-semibold text-foreground">Try the Death Notification Service first</p>
              <p className="text-muted text-sm">Notify multiple banks in one go. Then contact any remaining banks individually using the phone numbers above.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <p className="font-semibold text-foreground">Request funeral invoice payment</p>
              <p className="text-muted text-sm">If needed, ask the bank to pay the funeral invoice directly from the deceased&apos;s account. Most banks do this before probate.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <p className="font-semibold text-foreground">Apply for probate if needed</p>
              <p className="text-muted text-sm">If any account exceeds the bank&apos;s probate threshold, you will need to <Link href="/probate" className="text-primary hover:underline">apply for probate</Link> before funds are released.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* Useful templates */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Useful tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/template-letters"
            className="block bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-1">Template Letters</h3>
            <p className="text-sm text-muted">
              Ready-to-use letters for notifying banks, utilities, and other organisations.
            </p>
          </Link>
          <Link
            href="/call-scripts"
            className="block bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-1">Call Scripts</h3>
            <p className="text-sm text-muted">
              Word-for-word scripts for making difficult phone calls to banks and other organisations.
            </p>
          </Link>
          <Link
            href="/phone-directory"
            className="block bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-1">Phone Directory</h3>
            <p className="text-sm text-muted">
              All 60+ bereavement phone numbers in one place, organised by category.
            </p>
          </Link>
          <Link
            href="/document-vault"
            className="block bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-1">Document Vault</h3>
            <p className="text-sm text-muted">
              Track which documents you have gathered and which you still need.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="border-b border-border pb-5">
              <h3 className="font-semibold text-foreground mb-2">{faq.name}</h3>
              <p className="text-muted leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8 text-sm text-amber-800 dark:text-amber-200">
        <p className="font-medium mb-1">Important</p>
        <p>
          This information is for general guidance only. It is not legal or financial advice.
          Bank processes and thresholds can change. Always verify current details directly with the bank.
          Last reviewed: March 2026.
        </p>
      </div>

      <RelatedGuides
        currentPath="/banks"
        guides={[
          '/probate',
          '/template-letters',
          '/call-scripts',
          '/guides/bank-accounts-after-death',
        ]}
      />
    </main>
  );
}
