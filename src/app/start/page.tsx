import type { Metadata } from 'next';
import { Questionnaire } from '@/components/Questionnaire';

export const metadata: Metadata = {
  title: 'Get Your Personalised Guide',
  description: 'Answer a few gentle questions about your situation and we will put together a personalised step-by-step guide, shaped around your circumstances. Free, and nothing is stored.',
  alternates: { canonical: 'https://helpafterloss.co.uk/start' },
  openGraph: {
    title: 'Get Your Personalised Bereavement Guide',
    description: 'Answer a few questions and get a personalised step-by-step checklist with everything you need to do.',
    url: 'https://helpafterloss.co.uk/start',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Your Personalised Bereavement Guide',
    description: 'Free, personalised guidance for UK families after someone passes away. Takes about 3 minutes.',
  },
};

export default function StartPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-3">
          Let us take some of this off your shoulders
        </h1>
        <p className="text-muted leading-relaxed max-w-lg mx-auto">
          A few gentle questions, and then we will put together a clear list of what needs doing, in a sensible order, with the dates that matter and the links you will need. Some of the questions are difficult ones. Answer what you can, and skip anything you would rather not.
        </p>
        <p className="text-sm text-muted mt-3">
          Everything you type stays on your own device. We never see it, store it, or share it.
        </p>
      </div>

      <Questionnaire />
    </div>
  );
}
