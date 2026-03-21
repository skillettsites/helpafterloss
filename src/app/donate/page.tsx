import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DonateForm } from './DonateForm';

export const metadata: Metadata = {
  title: 'Donate - Help Keep This Resource Free',
  description: 'Help After Loss is completely free. Your donation helps cover running costs and supports verified bereavement charities across the UK.',
  alternates: { canonical: 'https://helpafterloss.co.uk/donate' },
  openGraph: {
    title: 'Donate - Help Keep This Resource Free',
    description: 'Your donation helps cover running costs and supports verified bereavement charities across the UK.',
    url: 'https://helpafterloss.co.uk/donate',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
};

export default function DonatePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumbs items={[{ label: 'Donate' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Help keep this resource free
      </h1>

      <p className="text-lg text-muted mb-6 leading-relaxed">
        Help After Loss is completely free to use and always will be. No ads, no paywalls, no selling your data.
        We believe that when you are going through the worst time of your life, the last thing you need is
        a paywall between you and the help you need.
      </p>

      <div className="bg-card rounded-xl border border-border p-6 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-3">Where your donation goes</h2>
        <ul className="space-y-3 text-muted">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold text-lg mt-0.5">1</span>
            <div>
              <p className="font-medium text-foreground">Running costs</p>
              <p className="text-sm">Hosting, domain registration, and keeping the site fast and reliable for everyone who needs it.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold text-lg mt-0.5">2</span>
            <div>
              <p className="font-medium text-foreground">Bereavement charities</p>
              <p className="text-sm">Any funds remaining after costs are donated to verified UK bereavement charities including Cruse Bereavement Support, WAY Widowed and Young, and The Good Grief Trust.</p>
            </div>
          </li>
        </ul>
      </div>

      <DonateForm />

      <div className="mt-10 space-y-4 text-sm text-muted">
        <p>
          Payments are processed securely by Stripe. We never see or store your card details.
        </p>
        <p>
          If you cannot donate, that is absolutely fine. This site will always be free.
          The best way to help is to share it with someone who needs it.
        </p>
        <p>
          If you know someone who is grieving, you might also find our guide on{' '}
          <a href="/guides/helping-someone-grieve" className="text-primary underline">helping someone who is grieving</a> useful.
        </p>
      </div>
    </main>
  );
}
