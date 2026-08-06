import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { YourDetailsForm } from '@/components/YourDetailsForm';

export const metadata: Metadata = {
  title: 'Your Details: Enter Them Once, Use Them Everywhere',
  description: 'Save the details you get asked for on every bereavement call and letter. We fill them into every script and template for you, so you never type them twice. Stored on your device only.',
  alternates: { canonical: 'https://helpafterloss.co.uk/your-details' },
  openGraph: {
    title: 'Your Details: Enter Them Once, Use Them Everywhere',
    description: 'Save the details you get asked for on every bereavement call and letter, and we fill them in for you. Stored on your device only.',
    url: 'https://helpafterloss.co.uk/your-details',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Details: Enter Them Once, Use Them Everywhere',
    description: 'Never type the same bereavement details twice. Saved on your device only.',
  },
};

export default function YourDetailsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Your details' }]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Enter your details once, and we will fill them in for you
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Sorting out someone&apos;s affairs means giving the same handful of facts to bank after bank, over and over:
        their name, their date of birth, when they passed away, your relationship to them. It is wearing, and it is
        the last thing you need. Put them in here once and every phone script, letter and form on this site will
        already have them filled in.
      </p>

      <YourDetailsForm />
    </div>
  );
}
