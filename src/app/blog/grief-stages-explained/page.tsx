import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'The Stages of Grief: What They Really Mean and Why Grief is Not Linear',
  description: 'An honest look at the stages of grief, what they really mean, why grief does not follow a neat sequence, and other models that may better describe your experience.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/grief-stages-explained' },
  openGraph: {
    title: 'The Stages of Grief: What They Really Mean and Why Grief is Not Linear',
    description: 'The truth about the stages of grief, why they are widely misunderstood, and what grief actually looks like in real life.',
    url: 'https://helpafterloss.co.uk/blog/grief-stages-explained',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Stages of Grief Explained',
    description: 'Why grief is not linear and what the stages of grief actually mean.',
  },
};

export default function GriefStagesExplainedPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'The Stages of Grief' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 22 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>12 min read</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        The Stages of Grief: What They Really Mean and Why Grief is Not Linear
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        You have probably heard of the "five stages of grief." They are everywhere: in books, films, therapy sessions, and well-meaning advice from people who think grief follows a predictable path. But the reality is messier, more confusing, and more human than any neat model suggests. This article explains what the stages actually mean, why they are so widely misunderstood, and what grief really looks like day to day.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">The most important thing to know</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          There is no right way to grieve. You are not doing it wrong. If your grief does not match any model or stage, that does not mean something is broken. Everyone grieves differently, and your experience is valid exactly as it is.
        </p>
      </div>

      <TableOfContents items={[
        { id: 'five-stages', label: 'The five stages of grief' },
        { id: 'misunderstood', label: 'Why the stages are misunderstood' },
        { id: 'not-linear', label: 'Grief is not linear' },
        { id: 'other-models', label: 'Other models of grief' },
        { id: 'what-grief-feels-like', label: 'What grief actually feels like' },
        { id: 'complicated-grief', label: 'When grief becomes complicated' },
        { id: 'helping-yourself', label: 'Helping yourself through grief' },
        { id: 'support', label: 'Getting support' },
      ]} />

      {/* Five stages */}
      <h2 id="five-stages" className="text-2xl font-bold text-foreground mb-6">The five stages of grief</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">1. Denial</h3>
          <p className="text-sm text-muted leading-relaxed">
            Denial is often the first response to loss. It does not mean you literally do not believe the person has died (though sometimes that happens too). It is more of a numbness, a feeling of unreality, as if you are watching your own life from a distance. You might go through the motions, attend the funeral, make the phone calls, and feel nothing. This is not coldness. It is your mind's way of protecting you from the full weight of what has happened. Denial buys you time to absorb the loss at a pace you can manage.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">2. Anger</h3>
          <p className="text-sm text-muted leading-relaxed">
            Anger in grief can be directed anywhere: at the person who died (for leaving you), at doctors (for not doing more), at God or fate (for letting it happen), at family members (for not understanding), or at yourself (for things left unsaid). Some people feel angry at the world for carrying on as normal while theirs has fallen apart. This anger is not irrational. It is a natural response to something deeply unfair. Underneath anger, there is usually pain.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">3. Bargaining</h3>
          <p className="text-sm text-muted leading-relaxed">
            Bargaining is the "what if" and "if only" stage. What if I had noticed the symptoms sooner? If only they had gone to the doctor earlier. What if I had said something different the last time we spoke? Bargaining is the mind trying to regain control in a situation where there is none. It is closely linked to guilt, which is one of the most common and least discussed aspects of grief. Most people feel guilty about something, even when they have nothing to feel guilty about.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">4. Depression</h3>
          <p className="text-sm text-muted leading-relaxed">
            This stage is not clinical depression in the psychiatric sense (though grief can trigger that too). It is the deep sadness that arrives when the reality of the loss fully lands. The numbness has worn off, the anger has quieted, and what is left is sorrow. You may withdraw from others, lose interest in things you used to enjoy, struggle to sleep or eat, and feel that nothing matters. This is often the longest stage, and it can feel like it will never end. But it is the stage where the real work of grief happens: learning to live with the loss.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">5. Acceptance</h3>
          <p className="text-sm text-muted leading-relaxed">
            Acceptance does not mean being OK with what happened. It does not mean you have moved on or stopped missing them. It means you have found a way to live with the reality that they are gone. You can hold the loss and still function. You can feel sad and still laugh. You can miss them terribly and still plan for the future. Acceptance is not an endpoint; it is an ongoing state that coexists with sadness. Many bereaved people describe it not as "getting over" grief but as "growing around" it.
          </p>
        </div>
      </div>

      {/* Misunderstood */}
      <h2 id="misunderstood" className="text-2xl font-bold text-foreground mb-6">Why the stages are misunderstood</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The five stages were originally described by Elisabeth Kubler-Ross in her 1969 book "On Death and Dying." Here is the crucial point that most people miss: <strong>she was writing about people who were dying, not people who were grieving a death.</strong> The stages described the emotional journey of terminally ill patients coming to terms with their own mortality. They were later applied to grief more broadly, and Kubler-Ross herself acknowledged that this was a simplification.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          In her later work with David Kessler, she was explicit that the stages were never meant to be a linear progression. They were not supposed to be a checklist that you work through in order. They were intended as a framework for understanding common emotional responses, not a prescription for how grief should go.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          The problem is that the neat, sequential version became the cultural default. People who do not experience the stages in order, or who skip some entirely, or who bounce between them unpredictably, can feel like they are grieving wrong. They are not. The model was never meant to be used that way.
        </p>
      </div>

      {/* Not linear */}
      <h2 id="not-linear" className="text-2xl font-bold text-foreground mb-6">Grief is not linear</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Real grief is chaotic. You might feel numb on Monday, furious on Tuesday, fine on Wednesday, and unable to get out of bed on Thursday. You might go weeks feeling relatively OK and then be blindsided by a wave of grief triggered by a song, a smell, or a stranger who walks like they did.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          You can experience multiple "stages" in a single hour. You can feel acceptance and anger at the same time. You can have a good day and feel guilty about it. You can be months or years into your grief and suddenly feel like you are back at the beginning. None of this is unusual. All of it is normal.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Many bereaved people describe grief as coming in waves. Sometimes the waves are close together and overwhelming. Over time, they tend to space out and become less intense. But they never stop entirely. A wave can hit you years later, triggered by something you did not expect.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          If someone tells you that you should be "over it by now" or that you should have "reached acceptance," they are wrong. Grief does not have an expiry date.
        </p>
      </div>

      {/* Other models */}
      <h2 id="other-models" className="text-2xl font-bold text-foreground mb-6">Other models of grief</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The Dual Process Model</h3>
          <p className="text-sm text-muted leading-relaxed">
            Developed by Stroebe and Schut in 1999, this model suggests that healthy grieving involves oscillating between two orientations: loss-oriented (confronting the grief, crying, yearning for the person) and restoration-oriented (dealing with practical matters, adapting to new roles, building a new identity). You naturally move back and forth between these throughout the day and over time. This model is widely used by bereavement counsellors because it validates the common experience of feeling fine while doing the shopping and then falling apart at home. Both states are necessary.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Continuing Bonds</h3>
          <p className="text-sm text-muted leading-relaxed">
            Older models of grief suggested that the goal was to "let go" of the deceased and "move on." The continuing bonds approach, developed by Klass, Silverman, and Nickman in the 1990s, challenges this. It suggests that maintaining an ongoing connection with the person who has died is not only normal but healthy. Talking to them, keeping their photo by the bed, visiting their grave, celebrating their birthday, or simply carrying their memory with you are all ways of continuing the bond. You do not have to let go to heal.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The Tonkin Model (Growing Around Grief)</h3>
          <p className="text-sm text-muted leading-relaxed">
            Lois Tonkin proposed that grief does not shrink over time; instead, your life grows around it. Imagine grief as a circle inside a larger circle. In the early days, the grief fills almost the entire space. Over time, the grief stays the same size, but the life around it expands. New experiences, relationships, and moments of joy grow around the grief, not in place of it. This is why you can be years into grief and still feel it as intensely as ever in certain moments, while also having built a meaningful life alongside it.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Worden's Tasks of Mourning</h3>
          <p className="text-sm text-muted leading-relaxed">
            William Worden proposed four tasks of mourning rather than stages: (1) accepting the reality of the loss, (2) processing the pain of grief, (3) adjusting to a world without the person, and (4) finding an enduring connection with the person while embarking on a new life. The advantage of the "tasks" framing is that it implies active work rather than passive stages that happen to you. You can work on these tasks in any order and revisit them as needed.
          </p>
        </div>
      </div>

      {/* What grief feels like */}
      <h2 id="what-grief-feels-like" className="text-2xl font-bold text-foreground mb-6">What grief actually feels like</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Grief is not just emotional. It is physical, cognitive, and behavioural too. Here are some of the experiences that bereaved people commonly report:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Emotional</p>
            <ul className="space-y-1 text-sm text-muted">
              <li>Sadness, yearning, longing</li>
              <li>Anger, irritability</li>
              <li>Guilt, regret</li>
              <li>Anxiety, panic</li>
              <li>Numbness, emptiness</li>
              <li>Relief (especially after a long illness)</li>
              <li>Feeling like you are going mad</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Physical</p>
            <ul className="space-y-1 text-sm text-muted">
              <li>Exhaustion, fatigue</li>
              <li>Insomnia or sleeping too much</li>
              <li>Loss of appetite or comfort eating</li>
              <li>Tightness in the chest or throat</li>
              <li>Muscle tension, headaches</li>
              <li>Weakened immune system</li>
              <li>Stomach problems, nausea</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Cognitive</p>
            <ul className="space-y-1 text-sm text-muted">
              <li>Difficulty concentrating</li>
              <li>Forgetfulness ("grief brain")</li>
              <li>Confusion, disorientation</li>
              <li>Intrusive thoughts or images</li>
              <li>Inability to make decisions</li>
              <li>Sensing the person's presence</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Behavioural</p>
            <ul className="space-y-1 text-sm text-muted">
              <li>Withdrawing from others</li>
              <li>Avoiding reminders (or seeking them out)</li>
              <li>Restlessness, inability to sit still</li>
              <li>Crying at unexpected moments</li>
              <li>Talking about the person constantly (or not at all)</li>
              <li>Changes in routines or habits</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted leading-relaxed mt-4">
          All of these are normal grief responses. If you are experiencing any of them, you are not going mad. Your body and mind are processing an enormous loss.
        </p>
      </div>

      {/* Complicated grief */}
      <h2 id="complicated-grief" className="text-2xl font-bold text-foreground mb-6">When grief becomes complicated</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          For most people, grief gradually becomes more manageable over time, even if it never fully goes away. But for some people, grief becomes stuck. This is sometimes called "complicated grief" or "prolonged grief disorder." It is characterised by an intense yearning for the person that does not ease after many months, difficulty accepting the death, feeling that life has no meaning without them, and an inability to function in daily life.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Prolonged grief disorder was formally recognised as a diagnosis in the ICD-11 and DSM-5-TR. It is not the same as normal grief, which is painful but gradually allows you to function. Complicated grief may require specialist support, including grief-focused therapy. It is estimated to affect around 7% to 10% of bereaved people.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          If you feel that your grief is not easing at all after many months, or if you are finding it impossible to function, please speak to your GP. There is no shame in needing professional help. Treatment is effective, and asking for it is a sign of strength.
        </p>
      </div>

      {/* Helping yourself */}
      <h2 id="helping-yourself" className="text-2xl font-bold text-foreground mb-6">Helping yourself through grief</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Let yourself grieve.</strong> Do not try to rush it, suppress it, or perform it for others. Grief takes as long as it takes.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Talk about it</strong> if talking helps. Say their name. Tell stories. Share memories. If talking does not help, that is fine too.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Look after your body.</strong> Grief is physically demanding. Try to eat, rest, and move your body, even just a short walk.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Be patient with yourself.</strong> You are operating on a fraction of your normal capacity. Lower your standards for a while.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Accept that grief changes.</strong> It will not always feel like this. But it may come back when you least expect it. Both are normal.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Find your people.</strong> Grief support groups (in person or online) connect you with others who understand. Cruse, the WAY Foundation (for young widows and widowers), and local hospice groups all run regular sessions.</li>
        </ul>
      </div>

      {/* Support */}
      <h2 id="support" className="text-2xl font-bold text-foreground mb-6">Getting support</h2>
      <div className="bg-primary-light rounded-xl p-6 mb-12">
        <ul className="space-y-2 text-sm text-muted">
          <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677 (free, Mon-Fri 9:30am-5pm, extended hours available)</li>
          <li><strong>Samaritans:</strong> 116 123 (free, 24 hours, 365 days a year)</li>
          <li><strong>Mind:</strong> 0300 123 3393 (Mon-Fri 9am-6pm)</li>
          <li><strong>NHS talking therapies:</strong> Self-refer at <a href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">nhs.uk</a></li>
          <li><strong>WAY Foundation (young widows/widowers):</strong> <a href="https://www.widowedandyoung.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">widowedandyoung.org.uk</a></li>
          <li><strong>Winston's Wish (children):</strong> 08088 020 021</li>
        </ul>
      </div>

      {/* Practical help links */}
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Need help with the practical steps?</strong> Our <Link href="/checklist" className="text-primary hover:underline">interactive checklist</Link> walks you through everything from registering the death to closing accounts. See our <Link href="/notify" className="text-primary hover:underline">notification guide</Link> for every organisation you need to contact, with direct phone numbers.
        </p>
      </div>

      <RelatedGuides
        currentPath="/blog/grief-stages-explained"
        guides={['/guides/first-year-after-loss', '/blog/grief-and-anxiety', '/guides/helping-someone-grieve', '/support']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Dealing with the practical side too?</h2>
        <p className="text-muted mb-6">If you also need help with the practical tasks after a death, our personalised guide creates a step-by-step plan based on your situation.</p>
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
            headline: 'The Stages of Grief: What They Really Mean and Why Grief is Not Linear',
            description: 'An honest look at the stages of grief, why they are widely misunderstood, and what grief actually looks like in real life.',
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
              '@id': 'https://helpafterloss.co.uk/blog/grief-stages-explained',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What are the stages of grief?',
                acceptedAnswer: { '@type': 'Answer', text: 'The most well-known model describes five stages: denial, anger, bargaining, depression, and acceptance. These were originally proposed by Elisabeth Kubler-Ross in 1969. However, modern grief research shows that grief is not linear and most people do not experience these stages in order or at all.' },
              },
              {
                '@type': 'Question',
                name: 'Do you have to go through all five stages of grief?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. The five stages model was never intended as a checklist. Many people skip stages entirely, experience them out of order, or feel emotions not included in the model. There is no right or wrong way to grieve.' },
              },
              {
                '@type': 'Question',
                name: 'How long do the stages of grief last?',
                acceptedAnswer: { '@type': 'Answer', text: 'There is no set timeline. Grief is different for everyone. Some people begin to feel more functional within a few months, while others take years. Grief does not have a deadline, and feeling intense emotions months or even years later is completely normal.' },
              },
              {
                '@type': 'Question',
                name: 'What is complicated grief?',
                acceptedAnswer: { '@type': 'Answer', text: 'Complicated grief, or prolonged grief disorder, is when grief becomes stuck and does not ease over many months. It is characterised by intense yearning, difficulty accepting the death, and inability to function in daily life. It affects around 7% to 10% of bereaved people and may require specialist support.' },
              },
            ],
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
              { '@type': 'ListItem', position: 3, name: 'The Stages of Grief', item: 'https://helpafterloss.co.uk/blog/grief-stages-explained' },
            ],
          }),
        }}
      />
    </div>
  );
}
