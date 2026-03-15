import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bereavement Deadline Tracker',
  description: 'Track important deadlines after a death in the UK. Enter the date of death and see when key tasks like registration, probate, tax returns, and benefit claims are due.',
  alternates: { canonical: 'https://helpafterloss.co.uk/deadline-tracker' },
};

export default function DeadlineTrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
