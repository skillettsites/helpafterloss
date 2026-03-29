import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Editorial Policy | Help After Loss',
  description:
    'How we research, write, and maintain the bereavement guidance on Help After Loss. Our commitment to accuracy, transparency, and compassion.',
  alternates: { canonical: 'https://helpafterloss.co.uk/editorial-policy' },
};

export default function EditorialPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Editorial Policy' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Editorial Policy
      </h1>

      <p className="text-lg text-muted mb-8">
        Help After Loss provides free bereavement guidance for people in the UK who have
        lost someone. We take the accuracy and sensitivity of our content seriously.
        This page explains how we research, write, and maintain our guides.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">How we research content</h2>
        <p className="text-muted mb-3">
          Our guides are based on official government sources, established charities,
          and professional bodies. Primary sources include:
        </p>
        <ul className="text-muted space-y-1.5 list-disc list-inside mb-3">
          <li>GOV.UK (death registration, probate, Tell Us Once, benefits)</li>
          <li>HMRC (inheritance tax, capital gains tax, income tax after death)</li>
          <li>DWP (Bereavement Support Payment, other benefits)</li>
          <li>Individual bank and building society bereavement pages</li>
          <li>Energy, telecoms, and water company bereavement processes</li>
          <li>SunLife Cost of Dying Report (funeral cost data)</li>
          <li>The Law Society (probate solicitor guidance)</li>
          <li>Cruse Bereavement Support, Mind, and other mental health charities</li>
        </ul>
        <p className="text-muted">
          We link to original sources wherever possible so you can verify information
          independently.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">How we maintain accuracy</h2>
        <p className="text-muted mb-3">
          Bereavement-related information changes regularly. Probate fees, benefit amounts,
          tax thresholds, and organisational processes are all subject to change. We maintain
          accuracy through:
        </p>
        <ul className="text-muted space-y-1.5 list-disc list-inside">
          <li>Annual review of all financial figures (aligned with the April tax year)</li>
          <li>Quarterly checks of organisation phone numbers and URLs</li>
          <li>Monitoring GOV.UK updates for policy and process changes</li>
          <li>&quot;Last reviewed&quot; dates on every guide page</li>
          <li>A feedback mechanism for readers to report errors</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">What this site is not</h2>
        <p className="text-muted mb-3">
          Help After Loss is an information resource. It is not a substitute for
          professional legal, financial, or medical advice. We strongly recommend
          consulting a qualified professional for complex estate matters, tax questions,
          or mental health concerns.
        </p>
        <p className="text-muted">
          We are not affiliated with any bank, solicitor, funeral director, or government
          department. When we recommend services or include links, we clearly disclose
          any affiliate or commercial relationships.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">Jurisdiction</h2>
        <p className="text-muted">
          Our guides cover England, Wales, Scotland, and Northern Ireland. Where processes
          differ between nations (such as death registration, probate vs confirmation, or
          Tell Us Once availability), we flag these differences clearly. Each guide specifies
          which nations it covers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">Privacy and data</h2>
        <p className="text-muted">
          We do not collect or store personal information about the deceased or your situation.
          Our personalised checklist tool saves data only to your device (localStorage).
          No bereavement data is sent to our servers. See our{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            privacy policy
          </Link>{' '}
          for full details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">Report an error</h2>
        <p className="text-muted">
          If you find information that is outdated, incorrect, or unclear, please email{' '}
          <a
            href="mailto:contact@helpafterloss.co.uk"
            className="text-primary hover:underline"
          >
            contact@helpafterloss.co.uk
          </a>
          . We aim to investigate and correct errors within 48 hours.
        </p>
      </section>
    </main>
  );
}
