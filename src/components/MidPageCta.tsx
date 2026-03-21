import Link from 'next/link';

interface MidPageCtaProps {
  heading?: string;
  text?: string;
}

export function MidPageCta({
  heading = 'Not sure what applies to you?',
  text = 'Answer a few simple questions and get a personalised checklist with deadlines and next steps tailored to your situation.',
}: MidPageCtaProps) {
  return (
    <div className="bg-primary-light/60 border border-primary/10 rounded-xl p-6 my-10 flex flex-col md:flex-row items-center gap-4">
      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1">{heading}</h3>
        <p className="text-sm text-muted leading-relaxed">{text}</p>
      </div>
      <Link
        href="/start"
        className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors whitespace-nowrap flex-shrink-0"
      >
        Get Your Free Guide
      </Link>
    </div>
  );
}
