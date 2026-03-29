import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PageDisclaimer } from '@/components/PageDisclaimer';

export const metadata: Metadata = {
  title: 'What to Say When Someone Dies: A Compassionate Guide',
  description: 'What to say when someone dies, what NOT to say, texting vs calling, supporting someone over time, cultural considerations, and when to suggest professional help. Honest, practical advice.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/what-to-say-when-someone-dies' },
  openGraph: {
    title: 'What to Say When Someone Dies: A Compassionate Guide',
    description: 'Simple, honest phrases that help. What to avoid. How to support someone over time, not just the first week.',
    url: 'https://helpafterloss.co.uk/guides/what-to-say-when-someone-dies',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Say When Someone Dies: A Compassionate Guide',
    description: 'Honest, practical guidance on what to say (and what not to say) when someone you know is grieving.',
  },
};

const FAQ = [
  {
    q: 'What is the best thing to say when someone dies?',
    a: 'Keep it simple and sincere. "I am so sorry" or "I am thinking of you" is enough. You do not need to find the perfect words. What matters most is that you acknowledge the loss and show that you care. Avoid trying to explain or rationalise the death. The bereaved person does not need a reason or a silver lining. They need to know they are not alone.',
  },
  {
    q: 'Is it better to text or call when someone dies?',
    a: 'In the first few days, a text or message is usually better than a phone call. The bereaved person is likely overwhelmed, exhausted, and not up for conversation. A text lets them read your words when they are ready, without having to manage a phone call. Make it clear they do not need to reply. After the first week or two, a phone call can be more personal and allows a real conversation. Follow the person\'s lead on how they prefer to communicate.',
  },
  {
    q: 'What should you not say when someone dies?',
    a: 'Avoid phrases like "everything happens for a reason", "they are in a better place", "at least they are not suffering", "I know how you feel", "you need to be strong", or "time heals all wounds". These are well-intentioned but can feel dismissive or minimising. Also avoid comparing their loss to your own, giving unsolicited advice about how to grieve, or putting a timeline on their recovery.',
  },
  {
    q: 'What do you say when someone dies by suicide?',
    a: 'Acknowledge the death directly and honestly. Say something like "I am so sorry about [name]. I am here for you." Do not speculate about why it happened, assign blame, or use language like "committed suicide" (which implies a crime). The preferred term is "died by suicide". Let the person talk if they want to, and do not shy away from the conversation. If they seem to be struggling deeply, gently suggest contacting a specialist service such as Survivors of Bereavement by Suicide (0300 111 5065) or the Samaritans (116 123).',
  },
  {
    q: 'How do you support someone who is grieving long-term?',
    a: 'Keep checking in after the funeral, when everyone else has gone back to their normal lives. Send a message on difficult dates: the anniversary, their birthday, Christmas, Mother\'s Day or Father\'s Day. Mention the person who died by name. Invite the bereaved person to do ordinary things: a walk, a coffee, dinner. Do not expect them to be "over it" after a certain period. Grief does not have a deadline, and your ongoing presence means more than you realise.',
  },
];

export default function WhatToSayPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'What to Say When Someone Dies' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What to Say When Someone Dies: A Compassionate Guide
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone you know loses a person they love, finding the right words can feel impossible. You want to help, but you are terrified of saying the wrong thing. The truth is that there are no perfect words, and that is OK. What matters is that you show up. This guide covers what to say, what to avoid, and how to support someone not just in the first few days but in the weeks and months that follow.
      </p>

      {/* What to say */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What to say: simple, honest phrases</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Phrases that genuinely help</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            The best things to say are simple, sincere, and do not try to fix the pain. You are not expected to make it better. You are just showing that you care and that you are not going to disappear.
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>&quot;I am so sorry. I don't know what to say, but I am here.&quot;</li>
            <li>&quot;I am thinking of you. You don't need to reply to this.&quot;</li>
            <li>&quot;I loved [name]. They meant a lot to me too.&quot;</li>
            <li>&quot;There is no right way to feel right now. Whatever you are feeling is OK.&quot;</li>
            <li>&quot;I am going to bring some food round on Saturday. You don't need to do anything.&quot;</li>
            <li>&quot;I can't imagine how hard this is, but I am not going anywhere.&quot;</li>
            <li>&quot;Would it help if I came over and just sat with you for a bit?&quot;</li>
            <li>&quot;I remember when [name] did [specific memory]. They were wonderful.&quot;</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Why simple is best</h3>
          <p className="text-sm text-muted leading-relaxed">
            Bereaved people consistently say that the messages they valued most were short and honest. You do not need to write a long letter or deliver a speech. A single sentence that says "I see your pain and I am here" is worth more than a paragraph of well-meaning philosophising. Do not overthink it. Just say something, even if it feels inadequate.
          </p>
        </div>
      </div>

      {/* What NOT to say */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What NOT to say</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Phrases to avoid</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            These phrases are almost always well-intentioned, but they frequently land badly. The person may nod politely, but inside these words can feel dismissive, minimising, or tone-deaf.
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-3 list-disc pl-5">
            <li><strong>&quot;Everything happens for a reason.&quot;</strong> Some deaths have no reason and no silver lining. This can feel deeply dismissive of someone's pain.</li>
            <li><strong>&quot;They are in a better place.&quot;</strong> You do not know what the person believes. For many people, there is no better place than here with them.</li>
            <li><strong>&quot;At least they lived a long life.&quot;</strong> The length of someone's life does not reduce the grief of losing them.</li>
            <li><strong>&quot;At least they are not suffering any more.&quot;</strong> This may be true, but the person standing in front of you is suffering right now. This is not the comfort you think it is.</li>
            <li><strong>&quot;I know how you feel.&quot;</strong> Even if you have experienced loss, every grief is unique. Say &quot;I can only imagine how hard this is&quot; instead.</li>
            <li><strong>&quot;You need to be strong.&quot;</strong> Grieving people do not need to perform strength. They need permission to fall apart.</li>
            <li><strong>&quot;Let me know if you need anything.&quot;</strong> This sounds generous, but it puts the burden on the grieving person. Offer something specific instead.</li>
            <li><strong>&quot;Time heals all wounds.&quot;</strong> Time does not heal grief. It may soften it, but the wound never fully closes. This phrase minimises the permanence of the loss.</li>
          </ul>
        </div>
      </div>

      {/* Texting vs calling vs in person */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Texting vs calling vs in person</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The first few days: text or message</h3>
          <p className="text-sm text-muted leading-relaxed">
            In the immediate aftermath, a text, WhatsApp, or handwritten card is usually the best approach. The bereaved person is overwhelmed, exhausted, and often fielding calls from family members and official organisations. A text lets them read your words in their own time without having to hold a conversation. Make it clear they do not need to reply. Something like: &quot;I have just heard. I am so sorry. Please don't feel you need to respond to this. I am here whenever you are ready.&quot;
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">After the first week: phone call</h3>
          <p className="text-sm text-muted leading-relaxed">
            After the initial shock has passed and the funeral is over, a phone call becomes more appropriate. It shows a deeper level of care than a text and allows a real conversation. Call at a sensible time and do not be offended if they do not answer. Leave a warm voicemail and try again another day. Some people find it helpful to have someone to talk to on the phone during quiet evenings when loneliness is worst.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">In person: the most meaningful option</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you live nearby and you are close to the person, visiting in person is the most powerful thing you can do. Bring food. Make tea. Sit with them. You do not need to fill every silence. Physical presence is its own form of comfort. If they want to talk, listen. If they want to sit quietly, that is fine too. Do not stay too long; an hour is often enough. Let them know you will come again.
          </p>
        </div>
      </div>

      {/* Supporting someone over time */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Supporting someone over time, not just the first week</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">After the funeral is when it matters most</h3>
          <p className="text-sm text-muted leading-relaxed">
            Most people receive an outpouring of support in the first few days. Cards arrive, flowers are delivered, people call. Then the funeral happens, and within a week or two, everyone goes back to their normal lives. But for the bereaved person, this is often when the real grief begins. The shock has worn off, the house is quiet, and the permanence of the loss starts to sink in. This is when your continued presence matters most.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Practical ways to keep showing up</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Put a reminder in your calendar for once a week to check in. It does not need to be a grand gesture. Small, consistent acts of care add up:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>A text every few days: &quot;Thinking of you. No need to reply.&quot;</li>
            <li>An invitation to go for a walk or have a coffee</li>
            <li>Dropping round a meal or some shopping</li>
            <li>Remembering difficult dates: the anniversary, their birthday, Christmas, Mother's Day, Father's Day</li>
            <li>Saying the dead person's name. Do not be afraid to mention them. It is a comfort, not a reminder.</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The second year can be harder</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many bereaved people say the second year is more painful than the first. The numbness has lifted, the "firsts" (first birthday without them, first Christmas, first anniversary) are over, and other people have long since stopped asking how they are. If you are still checking in a year later, you are doing something truly valuable. Most people have stopped by then.
          </p>
        </div>
      </div>

      {/* Cultural considerations */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Cultural considerations</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Respecting different traditions</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Grief is universal, but the rituals and expectations around death vary between cultures and religions. If you are supporting someone from a different background to your own, it is worth understanding what their traditions involve so you can be respectful and helpful:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li><strong>Jewish tradition:</strong> Shiva is a seven-day mourning period. Visitors bring food (not flowers) and sit with the family. It is customary to say &quot;I am sorry for your loss&quot; or the Hebrew phrase &quot;May their memory be a blessing.&quot;</li>
            <li><strong>Muslim tradition:</strong> Burial typically happens within 24 hours. The mourning period (Iddah) can last up to 40 days. Visitors offer condolences and may recite prayers. Bring food rather than flowers.</li>
            <li><strong>Hindu tradition:</strong> Cremation usually takes place within 24 hours. The mourning period lasts 13 days. White is the traditional colour of mourning. Visitors bring fruit or food, not flowers.</li>
            <li><strong>Sikh tradition:</strong> Cremation is standard. Prayers are recited at the family home. The mourning period typically lasts 10 to 13 days. Visitors bring food or make a charitable donation.</li>
            <li><strong>Chinese tradition:</strong> Funerals are elaborate and may last several days. White is the colour of mourning. Money in white envelopes may be given to help with funeral costs.</li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            If you are unsure what is appropriate, simply ask: &quot;I want to be respectful of your traditions. Is there anything specific I should know or do?&quot; People appreciate the question.
          </p>
        </div>
      </div>

      {/* Supporting grieving children */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Supporting grieving children</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What to say to a child</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Children need honesty, delivered gently. Avoid euphemisms like &quot;gone to sleep&quot; or &quot;gone away&quot;, which can create confusion and fear. Use clear, simple language:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>&quot;[Name] has died. That means their body stopped working and they won't be coming back.&quot;</li>
            <li>&quot;It is very sad, and it is OK to cry.&quot;</li>
            <li>&quot;It is also OK if you don't feel like crying right now. Everyone feels things differently.&quot;</li>
            <li>&quot;You can always talk to me about [name] whenever you want to.&quot;</li>
            <li>&quot;Nothing you did caused this. It is not your fault.&quot;</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How children grieve</h3>
          <p className="text-sm text-muted leading-relaxed">
            Children grieve in bursts, not continuously. They might cry for ten minutes and then ask to play a game. This is completely normal and does not mean they do not care. They process grief in small doses that they can manage. Let them lead. Answer their questions honestly, even when they ask the same question multiple times. Maintain their normal routine as much as possible, as this provides stability. If a child is struggling significantly, specialist organisations like Winston's Wish (winstonswish.org, 08088 020 021) and Grief Encounter (griefencounter.org.uk) offer free support.
          </p>
        </div>
      </div>

      {/* When someone dies by suicide */}
      <h2 className="text-2xl font-bold text-foreground mb-6">When someone dies by suicide</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What to say</h3>
          <p className="text-sm text-muted leading-relaxed">
            A death by suicide carries an additional layer of pain: shock, confusion, guilt, anger, and the feeling of stigma. Many people avoid the bereaved family because they do not know what to say. Do not be one of those people. Acknowledge the death directly: &quot;I am so sorry about [name]. I am here for you.&quot; Do not speculate about reasons, assign blame, or try to make sense of it. Use the language &quot;died by suicide&quot; rather than &quot;committed suicide&quot;, which carries connotations of crime or sin. Let them talk if they want to, and do not flinch from the conversation.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Specialist support</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Grief after a suicide is particularly complex, and specialist support can make a real difference. These UK organisations offer free, confidential help:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li><strong>Survivors of Bereavement by Suicide (SOBS):</strong> 0300 111 5065, uksobs.org</li>
            <li><strong>Samaritans:</strong> 116 123 (free, 24/7), samaritans.org</li>
            <li><strong>Support After Suicide Partnership:</strong> supportaftersuicide.org.uk</li>
            <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677, cruse.org.uk</li>
          </ul>
        </div>
      </div>

      {/* When to suggest professional support */}
      <h2 className="text-2xl font-bold text-foreground mb-6">When to suggest professional support</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Signs someone may need more help</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Most grief, however painful, is a natural process and not something that requires professional treatment. But some people get stuck, and their grief becomes something more. Watch for:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>Persistent numbness or emotional detachment lasting many months</li>
            <li>Inability to carry out daily tasks: eating, washing, getting out of bed</li>
            <li>Increasing reliance on alcohol or drugs</li>
            <li>Expressing feelings of guilt, worthlessness, or that life is not worth living</li>
            <li>Complete withdrawal from all social contact</li>
            <li>Intense anger or bitterness that shows no sign of easing</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to raise it gently</h3>
          <p className="text-sm text-muted leading-relaxed">
            Frame it around concern, not criticism. Something like: &quot;I have noticed you seem really weighed down by everything. Would it help to talk to someone who specialises in this? Cruse has a free helpline, or your GP can refer you to counselling.&quot; Offer to help them make the call or go with them to the appointment. Do not push it if they are not ready, but let them know the option is there. Visit our <Link href="/support" className="text-primary font-medium hover:underline">support and helplines page</Link> for a full list of free bereavement services across the UK.
          </p>
        </div>
      </div>

      {/* Warm box */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>The most important thing is to say something.</strong> The fear of saying the wrong thing stops many people from saying anything at all. But silence hurts more than a clumsy sentence. A short, honest message is always better than no message. Show up imperfectly. It matters more than you think.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <PageDisclaimer lastReviewed="March 2026" />

      <RelatedGuides currentPath="/guides/what-to-say-when-someone-dies" guides={['/guides/helping-someone-grieve', '/guides/lost-a-parent', '/guides/lost-a-spouse', '/guides/first-year-after-loss']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Supporting someone through a bereavement?</h2>
        <p className="text-muted mb-6">Our step-by-step guide and personalised checklist can help you understand what they are going through and what practical tasks lie ahead.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get a Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
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
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'What to Say When Someone Dies', item: 'https://helpafterloss.co.uk/guides/what-to-say-when-someone-dies' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What to Say When Someone Dies: A Compassionate Guide',
            description: 'Honest, practical guidance on what to say, what not to say, and how to support someone who is grieving.',
            url: 'https://helpafterloss.co.uk/guides/what-to-say-when-someone-dies',
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
          }),
        }}
      />
    </div>
  );
}
