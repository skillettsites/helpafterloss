import Link from 'next/link';

interface MidPageCtaProps {
  heading?: string;
  text?: string;
}

export function MidPageCta({
  heading = 'Not sure what applies in your situation?',
  text = 'Answer a few short questions and we will put together a checklist for your circumstances, with the dates that matter and what to do next.',
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
