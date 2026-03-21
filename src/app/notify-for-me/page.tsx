import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { NotifyForm } from './NotifyForm';

export const metadata: Metadata = {
  title: 'Notify Organisations For You - We Send the Emails on Your Behalf',
  description: 'Let us email banks, energy providers, and other organisations on your behalf to notify them of the death. You are CC\'d on every email so you receive all responses directly.',
  alternates: { canonical: 'https://helpafterloss.co.uk/notify-for-me' },
  openGraph: {
    title: 'Notify Organisations For You - We Send the Emails on Your Behalf',
    description: 'Let us email organisations on your behalf to notify them of a death. Free, instant, and you are CC\'d on every email.',
    url: 'https://helpafterloss.co.uk/notify-for-me',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
};

export default function NotifyForMePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumbs items={[
        { label: 'Who to Notify', href: '/notify' },
        { label: 'Notify For Me' },
      ]} />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Let us notify organisations for you
      </h1>

      <p className="text-lg text-muted mb-3 leading-relaxed">
        Contacting every bank, energy provider, and insurer is one of the most draining parts of dealing with a death.
        We can send bereavement notification emails on your behalf, so you do not have to.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-foreground mb-2">How it works</h2>
        <ol className="list-decimal list-inside space-y-1 text-muted text-sm">
          <li>Fill in your details and the details of the person who has died</li>
          <li>Select which organisations you want us to email</li>
          <li>Add any account numbers you have (optional but helpful)</li>
          <li>We send a professional bereavement notification email to each one</li>
          <li><strong>You are CC&apos;d on every email</strong>, so you see exactly what was sent and receive any reply directly</li>
        </ol>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-foreground mb-2">Important</h2>
        <ul className="space-y-1 text-muted text-sm">
          <li>This service is <strong>completely free</strong>. We will never charge for it.</li>
          <li>We only email organisations that accept bereavement notifications by email. For organisations that require a phone call or postal letter, we provide their contact details and template letters instead.</li>
          <li>We do not store any of your personal information after sending the emails.</li>
          <li>The emails are sent from <strong>notifications@helpafterloss.co.uk</strong> with your email as the reply-to address, so responses come directly to you.</li>
        </ul>
      </div>

      <NotifyForm />

      <div className="mt-12 bg-card rounded-xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-3">Organisations that require phone or post</h2>
        <p className="text-muted mb-4">
          Some organisations do not accept bereavement notifications by email. For these, use our other tools:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="/notify" className="bg-background rounded-lg border border-border p-4 hover:border-primary transition-colors">
            <h3 className="font-semibold text-foreground mb-1">Phone Directory</h3>
            <p className="text-sm text-muted">Every bereavement phone number, with hours and what to say</p>
          </a>
          <a href="/template-letters" className="bg-background rounded-lg border border-border p-4 hover:border-primary transition-colors">
            <h3 className="font-semibold text-foreground mb-1">Template Letters</h3>
            <p className="text-sm text-muted">Ready-to-use letters for banks, HMRC, council tax, and more</p>
          </a>
          <a href="/call-scripts" className="bg-background rounded-lg border border-border p-4 hover:border-primary transition-colors">
            <h3 className="font-semibold text-foreground mb-1">Call Scripts</h3>
            <p className="text-sm text-muted">Word-for-word scripts for difficult phone calls</p>
          </a>
          <a href="/tell-us-once" className="bg-background rounded-lg border border-border p-4 hover:border-primary transition-colors">
            <h3 className="font-semibold text-foreground mb-1">Tell Us Once</h3>
            <p className="text-sm text-muted">One call to notify multiple government departments</p>
          </a>
        </div>
      </div>

      <RelatedGuides currentPath="/notify-for-me" guides={['/notify', '/template-letters', '/checklist', '/guides/bank-accounts-after-death']} />
    </main>
  );
}
