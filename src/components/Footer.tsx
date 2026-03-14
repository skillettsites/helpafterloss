import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16 no-print" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-primary-dark mb-3">Help After Loss</h2>
            <p className="text-sm text-muted leading-relaxed max-w-md">
              Free, compassionate guidance when someone dies. We help you navigate the practical steps so you can focus on what matters most.
            </p>
            <p className="text-sm text-muted mt-4">
              Need someone to talk to right now?<br />
              Call <a href="tel:116123" className="text-primary hover:underline font-medium">Samaritans free on 116 123</a>, 24 hours a day.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide" className="text-muted hover:text-primary transition-colors">Step-by-Step Guide</Link></li>
              <li><Link href="/checklist" className="text-muted hover:text-primary transition-colors">Master Checklist</Link></li>
              <li><Link href="/probate" className="text-muted hover:text-primary transition-colors">Probate Guide</Link></li>
              <li><Link href="/intestacy" className="text-muted hover:text-primary transition-colors">Dying Without a Will</Link></li>
              <li><Link href="/costs" className="text-muted hover:text-primary transition-colors">Costs Breakdown</Link></li>
              <li><Link href="/tell-us-once" className="text-muted hover:text-primary transition-colors">Tell Us Once</Link></li>
              <li><Link href="/digital-legacy" className="text-muted hover:text-primary transition-colors">Digital Accounts</Link></li>
              <li><Link href="/cultural-guide" className="text-muted hover:text-primary transition-colors">Cultural Guidance</Link></li>
              <li><Link href="/template-letters" className="text-muted hover:text-primary transition-colors">Template Letters</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/support" className="text-muted hover:text-primary transition-colors">Support & Helplines</Link></li>
              <li><Link href="/about" className="text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/start" className="text-muted hover:text-primary transition-colors">Get Your Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted">
          <p>
            This website provides general guidance only and does not constitute legal, financial, or tax advice.
            Always seek professional advice for your specific circumstances.
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Help After Loss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
