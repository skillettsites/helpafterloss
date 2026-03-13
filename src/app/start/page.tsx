import type { Metadata } from 'next';
import { Questionnaire } from '@/components/Questionnaire';

export const metadata: Metadata = {
  title: 'Get Your Personalised Guide',
  description: 'Answer a few questions about your situation and we will create a personalised step-by-step guide with everything you need to do, tailored to your circumstances.',
  alternates: { canonical: 'https://helpafterloss.co.uk/start' },
};

export default function StartPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-3">
          Let us help you work out what to do
        </h1>
        <p className="text-muted leading-relaxed max-w-lg mx-auto">
          We will ask you some simple questions about your situation. Based on your answers, we will create a personalised checklist with everything you need to do, in the right order, with deadlines and helpful links.
        </p>
        <p className="text-sm text-muted mt-3">
          Your answers are saved on your device only. We do not store any of your information.
        </p>
      </div>

      <Questionnaire />
    </div>
  );
}
