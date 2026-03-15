import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Personalised Checklist',
  description: 'Your personalised step-by-step bereavement checklist, tailored to your situation. Work through tasks at your own pace with real deadlines and helpful links.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://helpafterloss.co.uk/results' },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
