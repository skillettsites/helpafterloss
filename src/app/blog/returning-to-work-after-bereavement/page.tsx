import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Returning to Work After Bereavement: Your Rights and How to Cope (2026)',
  description: 'A practical guide to returning to work after a bereavement in the UK. Covers your legal rights, phased returns, flexible working, what to tell your employer, and how to cope when grief follows you to the office.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/returning-to-work-after-bereavement' },
  openGraph: {
    title: 'Returning to Work After Bereavement: Your Rights and How to Cope (2026)',
    description: 'Your legal rights when returning to work after a death, plus practical advice on phased returns, talking to your manager, and managing grief at work.',
    url: 'https://helpafterloss.co.uk/blog/returning-to-work-after-bereavement',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Returning to Work After Bereavement (2026)',
    description: 'Your rights, practical tips, and coping strategies for going back to work while grieving.',
  },
};

export default function ReturningToWorkPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'Returning to Work After Bereavement' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 22 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>12 min read</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Returning to Work After Bereavement: Your Rights and How to Cope (2026)
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Going back to work after someone dies is one of the hardest transitions you will face. Your brain is foggy, your energy is depleted, and the world expects you to function as if nothing has happened. This guide covers your legal rights, how to talk to your employer, and honest advice for coping when grief follows you into the workplace.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key points</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> There is no "right" time to return. Some people go back after a week; others need months.</li>
          <li className="flex gap-2"><span className="font-bold">+</span> You have the right to request flexible working from day one of employment.</li>
          <li className="flex gap-2"><span className="font-bold">+</span> If grief is affecting your health, your GP can sign you off with stress or bereavement-related illness.</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Most employers offer an Employee Assistance Programme (EAP) with free counselling.</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'when-ready', label: 'How to know when you are ready' },
        { id: 'rights', label: 'Your legal rights' },
        { id: 'phased-return', label: 'Requesting a phased return' },
        { id: 'telling-colleagues', label: 'Telling colleagues and your manager' },
        { id: 'first-day-back', label: 'The first day back' },
        { id: 'grief-at-work', label: 'When grief hits at work' },
        { id: 'concentration', label: 'Dealing with concentration problems' },
        { id: 'self-employed', label: 'If you are self-employed' },
        { id: 'employer-guidance', label: 'Guidance for employers and managers' },
        { id: 'support', label: 'Where to get support' },
      ]} />

      {/* When ready */}
      <h2 id="when-ready" className="text-2xl font-bold text-foreground mb-6">How to know when you are ready</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The truth is, you may never feel fully "ready." Many bereaved people go back to work when their leave runs out rather than when they feel ready, and that is OK. Some find that work provides structure, distraction, and a sense of normality. Others find it overwhelming. Both experiences are valid.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Signs you might benefit from more time off include: not being able to sleep for more than a few hours, crying for much of the day, not being able to eat or look after yourself, or feeling unable to leave the house. If this is where you are, speak to your GP. They can sign you off with stress, anxiety, or bereavement-related depression, and this is treated as any other illness for sick pay purposes.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Signs you might be ready to try going back include: wanting some structure in your day, missing the routine or the people, feeling able to concentrate on simple tasks for short periods, or simply needing the income. Going back does not mean you are over it. It just means you are taking a step.
        </p>
      </div>

      {/* Rights */}
      <h2 id="rights" className="text-2xl font-bold text-foreground mb-6">Your legal rights</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Bereavement leave</h3>
          <p className="text-sm text-muted leading-relaxed">
            The only statutory paid bereavement leave in the UK is Parental Bereavement Leave (2 weeks for the loss of a child under 18). For all other bereavements, any paid leave is at your employer's discretion. Most employers offer 3 to 5 days for the death of an immediate family member. Check your contract or staff handbook for your organisation's policy. For a full breakdown, see our guide on <Link href="/blog/bereavement-leave-rights-uk" className="text-primary hover:underline">bereavement leave rights in the UK</Link>.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Flexible working</h3>
          <p className="text-sm text-muted leading-relaxed">
            Since April 2024, all employees have the right to request flexible working from day one. You can make two requests in any 12-month period. Your employer must consider the request seriously and respond within two months. Flexible working could mean: reduced hours, different start and finish times, working from home, compressed hours, or a temporary change to your role. Your employer does not have to agree, but they must give a valid business reason for refusing.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Sick leave</h3>
          <p className="text-sm text-muted leading-relaxed">
            Grief is not classified as an illness, but the physical and mental effects of grief (anxiety, depression, insomnia, inability to concentrate) absolutely can be. If your GP signs you off, you are entitled to Statutory Sick Pay (£116.75 per week in 2026, for up to 28 weeks) if you earn at least £123 per week. Many employers pay more than the statutory minimum for the first few weeks. Bereavement-related sick leave should be treated sensitively and not counted toward absence triggers for disciplinary purposes. If your employer does penalise you, contact ACAS on 0300 123 1100.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Protection from unfair treatment</h3>
          <p className="text-sm text-muted leading-relaxed">
            You cannot be dismissed or treated detrimentally for taking Parental Bereavement Leave, for taking time off for dependants, or for requesting flexible working. If your grief has caused a long-term impact on your ability to carry out day-to-day activities (lasting or expected to last 12 months or more), it may qualify as a disability under the Equality Act 2010, in which case your employer has a duty to make reasonable adjustments.
          </p>
        </div>
      </div>

      {/* Phased return */}
      <h2 id="phased-return" className="text-2xl font-bold text-foreground mb-6">Requesting a phased return</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          A phased return means going back gradually rather than jumping straight to full-time hours. This is not a legal right, but most reasonable employers will accommodate it, especially if your GP recommends it. A typical phased return might look like:
        </p>
        <ul className="space-y-2 text-sm text-muted mb-4">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Week 1:</strong> 2 to 3 short days (4 to 5 hours each)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Week 2:</strong> 3 to 4 days at slightly longer hours</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Week 3 to 4:</strong> Full days but not yet at full capacity</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Week 4+:</strong> Gradually returning to normal hours and workload</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed">
          Ask your manager or HR whether the phased return will be on full pay or reduced pay. Some employers pay full salary during a phased return; others reduce pay pro rata. If you are returning from sick leave, your GP can include a recommendation for a phased return on your fit note.
        </p>
      </div>

      {/* Telling colleagues */}
      <h2 id="telling-colleagues" className="text-2xl font-bold text-foreground mb-6">Telling colleagues and your manager</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Before you go back</h3>
          <p className="text-sm text-muted leading-relaxed">
            Consider emailing your manager a day or two before your return. Let them know you are coming back and, if you are comfortable doing so, say what you need. For example: "I'd appreciate it if you could let the team know in advance so I don't have to explain to everyone individually." Or: "I'd prefer it if people didn't ask me about it unless I bring it up." You get to set the boundaries. A brief email removes the awkward first conversation.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Handling awkward reactions</h3>
          <p className="text-sm text-muted leading-relaxed">
            Colleagues will react in different ways. Some will avoid you because they do not know what to say. Others will say well-meaning but unhelpful things like "at least they are at peace" or "you look like you're doing really well." A few will get it right. Try to be patient with the ones who get it wrong. Most people are trying their best with a situation they have no training for. If someone says something that hurts, you can say: "I know you mean well, but that's quite hard to hear right now."
          </p>
        </div>
      </div>

      {/* First day back */}
      <h2 id="first-day-back" className="text-2xl font-bold text-foreground mb-6">The first day back</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The first day is almost always the hardest. The commute, the building, the desk, the routine you used to do on autopilot now all feel strange. Here are some things that can help:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Start mid-week (Wednesday or Thursday) so you only have a couple of days before the weekend</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Plan something comforting for the evening (a favourite meal, a call with a friend, a quiet night in)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Set a low bar for yourself: just being there counts as a success</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> If you can, have a trusted colleague you can go to if you need a moment</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Know where you can go for a quiet moment if you need one (a meeting room, your car, outside)</li>
        </ul>
      </div>

      {/* Grief at work */}
      <h2 id="grief-at-work" className="text-2xl font-bold text-foreground mb-6">When grief hits at work</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Grief does not respect your working hours. A song on the radio, an email from someone who does not know, a smell in the kitchen, or simply a quiet moment can trigger a wave of emotion. This is completely normal and does not mean you came back too soon.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If it happens: step away if you can. Go to the bathroom, step outside, or find a quiet room. Let the wave pass. It will pass. Then go back when you are ready. If you work in a role where stepping away is not possible (retail, teaching, healthcare), have a signal agreed with a colleague who can cover for you for five minutes.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Over time, these waves come less often and less intensely. But they can still catch you off guard months or years later, particularly around anniversaries, holidays, or milestones. That is not weakness. That is love.
        </p>
      </div>

      {/* Concentration */}
      <h2 id="concentration" className="text-2xl font-bold text-foreground mb-6">Dealing with concentration problems</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          "Grief brain" is real. Bereaved people commonly report difficulty concentrating, forgetfulness, inability to make decisions, and a feeling of mental fog. This is caused by the stress hormone cortisol, which affects memory and cognitive function. It is not permanent, but it can last for weeks or months.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Practical strategies:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Write everything down. Use lists, reminders, and notes more than you normally would.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Break tasks into smaller steps. A big task feels impossible; a small step feels manageable.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Tell your manager if you are struggling with specific tasks. They may be able to reassign work temporarily.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Avoid making major decisions at work (or in life) during the first few months if possible.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Be kind to yourself. You are running on a fraction of your normal capacity. That is not laziness.</li>
        </ul>
      </div>

      {/* Self-employed */}
      <h2 id="self-employed" className="text-2xl font-bold text-foreground mb-6">If you are self-employed</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Being self-employed and bereaved is particularly tough because there is no sick pay, no compassionate leave, and no one to cover your work. The financial pressure to keep going can feel relentless.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If you need to take time off and cannot afford to, check whether you are eligible for New Style ESA (if you have paid enough National Insurance contributions) or Universal Credit. If you lost a spouse or civil partner, you may be eligible for Bereavement Support Payment regardless of your employment status.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Consider telling your clients you need to reduce your workload temporarily. Most will be understanding. If you have ongoing contracts, explore whether a colleague or subcontractor could take on some work in the short term. And if the work can wait, let it wait. Your health matters more than a deadline.
        </p>
      </div>

      {/* Employer guidance */}
      <h2 id="employer-guidance" className="text-2xl font-bold text-foreground mb-6">Guidance for employers and managers</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          If you are a manager whose employee is returning after a bereavement, what you do in the first few days matters enormously. Good practice includes:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Have a private, unhurried conversation before they return (or on day one) to ask what they need</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Offer a phased return without the employee having to ask for it</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Reduce their workload for the first few weeks without making them feel sidelined</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Remind them of the EAP if your organisation has one</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Check in regularly but briefly. "How are you doing today?" is enough.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Do not assume they are "fine" because they look fine. Grief is often invisible.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Be aware of trigger dates (the anniversary, the birthday, Christmas) and check in around those times</li>
        </ul>
      </div>

      {/* Support */}
      <h2 id="support" className="text-2xl font-bold text-foreground mb-6">Where to get support</h2>
      <div className="bg-primary-light rounded-xl p-6 mb-12">
        <ul className="space-y-2 text-sm text-muted">
          <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677 (free)</li>
          <li><strong>Samaritans:</strong> 116 123 (free, 24 hours)</li>
          <li><strong>Mind:</strong> 0300 123 3393 (Mon-Fri 9am-6pm)</li>
          <li><strong>ACAS (employment rights):</strong> 0300 123 1100 (Mon-Fri 8am-6pm)</li>
          <li><strong>Your Employee Assistance Programme:</strong> Check your staff handbook or ask HR for the number</li>
          <li><strong>NHS talking therapies:</strong> Self-refer at <a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">nhs.uk</a> for free CBT and counselling</li>
        </ul>
      </div>

      <RelatedGuides
        currentPath="/blog/returning-to-work-after-bereavement"
        guides={['/blog/bereavement-leave-rights-uk', '/guides/bereavement-benefits', '/blog/grief-and-anxiety', '/support']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need help with the practical side?</h2>
        <p className="text-muted mb-6">Our personalised guide covers every task after a bereavement, from finances to notifications, with deadlines calculated for you.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Returning to Work After Bereavement: Your Rights and How to Cope (2026)',
            description: 'A practical guide to returning to work after a bereavement in the UK, covering legal rights, phased returns, and coping strategies.',
            datePublished: '2026-03-22',
            dateModified: '2026-03-22',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://helpafterloss.co.uk/blog/returning-to-work-after-bereavement',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Guides & Articles', item: 'https://helpafterloss.co.uk/blog' },
              { '@type': 'ListItem', position: 3, name: 'Returning to Work After Bereavement', item: 'https://helpafterloss.co.uk/blog/returning-to-work-after-bereavement' },
            ],
          }),
        }}
      />
    </div>
  );
}
