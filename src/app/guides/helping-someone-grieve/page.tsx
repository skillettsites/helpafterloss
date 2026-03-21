import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';

export const metadata: Metadata = {
  title: 'How to Help Someone Who Is Grieving - Practical Guide',
  description: 'What to say, what not to say, and practical things you can do to support a bereaved friend, family member, or colleague. Compassionate, honest guidance for the weeks and months ahead.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/helping-someone-grieve' },
  openGraph: {
    title: 'How to Help Someone Who Is Grieving',
    description: 'Practical guidance on supporting a bereaved friend, family member, or colleague through grief.',
    url: 'https://helpafterloss.co.uk/guides/helping-someone-grieve',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Help Someone Who Is Grieving',
    description: 'What to say, what not to say, and practical things you can do to support someone who is grieving.',
  },
};

export default function HelpingSomeoneGrievePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'How to Help Someone Who Is Grieving' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        How to Help Someone Who Is Grieving
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone you care about loses a person they love, it can be hard to know what to do. You want to help, but you are afraid of saying the wrong thing or overstepping. The truth is that your presence matters far more than perfect words. This guide covers what actually helps, what to avoid, and how to support someone not just in the first few days but in the months that follow.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80"
        alt="Two hands forming a heart shape silhouetted against a sunset"
        credit="Priscilla Du Preez"
        creditUrl="https://unsplash.com/@priscilladupreez"
      />

      {/* What to say and what not to say */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What to say (and what not to say)</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Things that help</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Simple, honest words are almost always best. You do not need a speech. You just need to show that you care and that you are not going to disappear.
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>&quot;I am so sorry. I don't know what to say, but I am here.&quot;</li>
            <li>&quot;I loved [name]. They were such a good person.&quot;</li>
            <li>&quot;You don't have to reply to this. I just wanted you to know I am thinking of you.&quot;</li>
            <li>&quot;I am going to drop some food round on Thursday. You don't need to do anything.&quot;</li>
            <li>&quot;There is no right way to feel. Whatever you are feeling is OK.&quot;</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Things to avoid saying</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            These phrases are almost always well-intentioned, but they can land badly. The bereaved person may smile politely, but inside these words can feel dismissive, minimising, or even hurtful.
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li><strong>&quot;They are in a better place.&quot;</strong> You do not know what the person believes, and for many people there is no better place than here.</li>
            <li><strong>&quot;I know how you feel.&quot;</strong> Even if you have experienced a similar loss, every grief is different. Say &quot;I can only imagine how hard this is&quot; instead.</li>
            <li><strong>&quot;At least they lived a long life.&quot;</strong> The length of someone's life does not reduce the pain of losing them.</li>
            <li><strong>&quot;At least they are not suffering any more.&quot;</strong> This may be true, but the person left behind is suffering right now.</li>
            <li><strong>&quot;You need to be strong.&quot;</strong> Grieving people do not need to perform strength. They need permission to fall apart.</li>
            <li><strong>&quot;Everything happens for a reason.&quot;</strong> This can feel deeply dismissive. Some losses have no reason and no silver lining.</li>
            <li><strong>&quot;Let me know if you need anything.&quot;</strong> This puts the burden on the grieving person. Offer something specific instead.</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">When you do not know what to say</h3>
          <p className="text-sm text-muted leading-relaxed">
            It is completely fine to say &quot;I don't know what to say.&quot; That honesty is far better than staying silent because you are worried about getting it wrong. A short text message, a card through the door, or simply sitting with someone without saying much at all can mean more than any carefully crafted words. Do not let the fear of imperfection stop you from showing up.
          </p>
        </div>
      </div>

      {/* Practical things you can do */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Practical things you can do</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Be specific with your offers</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Grieving people rarely have the energy to think about what they need, let alone ask for it. Instead of asking &quot;What can I do?&quot;, offer something concrete. Here are things that genuinely help:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>Cook a meal and drop it round (in a container they do not need to return)</li>
            <li>Do the school run for a week</li>
            <li>Walk their dog</li>
            <li>Mow their lawn or take the bins out</li>
            <li>Offer to make phone calls on their behalf: banks, utilities, insurers</li>
            <li>Help with funeral admin: collecting death certificates, researching funeral directors, writing the order of service</li>
            <li>Do a supermarket shop and drop it off</li>
            <li>Sit with their children for an afternoon so they can have time alone</li>
            <li>Drive them to appointments</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Help with the admin</h3>
          <p className="text-sm text-muted leading-relaxed">
            The amount of paperwork and phone calls after a death is overwhelming. If you are close to the person, offer to help with the administrative side. This might mean sitting with them while they make calls, keeping a list of who has been notified, or researching things like probate or pension entitlements. Our <Link href="/template-letters" className="text-primary font-medium hover:underline">template letters</Link> and <Link href="/phone-directory" className="text-primary font-medium hover:underline">phone directory</Link> can help you support them with this.
          </p>
        </div>
      </div>

      {/* The first few days */}
      <h2 className="text-2xl font-bold text-foreground mb-6">The first few days</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Just be there</h3>
          <p className="text-sm text-muted leading-relaxed">
            In the immediate aftermath, the most important thing is your presence. The bereaved person may be in shock, numb, or unable to process what has happened. They do not need advice. They need someone nearby who is calm, kind, and not expecting anything from them. If you are close enough, go to their home. Bring food. Make tea. Answer the door if people arrive. You do not need to fill silences.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Help with immediate practicalities</h3>
          <p className="text-sm text-muted leading-relaxed">
            If they want help with funeral arrangements, offer it. If they do not, do not push. Some people find the practical work a useful distraction; others cannot face it yet. Offer to call the funeral director, pick up the death certificate, or look after the house if they need to travel. Make sure they are eating and drinking, even if it is just toast and water. Grief is physically exhausting, and people forget to look after themselves.
          </p>
        </div>
      </div>

      {/* The first few weeks */}
      <h2 className="text-2xl font-bold text-foreground mb-6">The first few weeks</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Keep showing up after the funeral</h3>
          <p className="text-sm text-muted leading-relaxed">
            This is where most people disappear. The funeral is over, the flowers have wilted, and everyone goes back to their normal lives. But for the bereaved person, normal life has ended. The weeks after the funeral are often the hardest, because the shock has worn off and the reality is setting in. This is when your support matters most. A text every few days, a phone call once a week, an invitation to go for a walk. Keep showing up.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Remember the dates that matter</h3>
          <p className="text-sm text-muted leading-relaxed">
            Put a note in your calendar for the person's birthday, the anniversary of the death, and any other dates that will be difficult (wedding anniversaries, Mother's Day, Father's Day, Christmas). Send a message on those days. Even a simple &quot;Thinking of you today, I know it must be a hard one&quot; means the world. It tells the bereaved person that someone else still remembers.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Do not be afraid to mention the person who died</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many people avoid mentioning the dead person's name because they are worried about upsetting the bereaved. In reality, the opposite is true. Hearing their loved one's name, hearing a story about them, or being reminded that other people miss them too is usually a comfort, not a source of pain. Say their name. Share a memory. It helps.
          </p>
        </div>
      </div>

      {/* Months later */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Months later</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Grief does not have a deadline</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no point at which grief is &quot;done&quot;. It changes shape over time, but it does not disappear after a set number of weeks or months. Some people find that the second year is harder than the first, because the numbness has lifted and the full weight of the loss becomes clear. Do not assume someone is &quot;over it&quot; because they seem to be coping. Keep checking in, even six months or a year later. A simple &quot;How are you really doing?&quot; can open a conversation they desperately need to have.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Be patient with changes in behaviour</h3>
          <p className="text-sm text-muted leading-relaxed">
            Grief can make people irritable, withdrawn, forgetful, or unlike themselves. They may cancel plans at the last minute, lose interest in things they used to enjoy, or struggle with concentration. This is normal. Try not to take it personally. They are not pushing you away; they are surviving. Give them space when they need it and company when they want it. Let them lead.
          </p>
        </div>
      </div>

      {/* Supporting a grieving child */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Supporting a grieving child</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Be honest in an age-appropriate way</h3>
          <p className="text-sm text-muted leading-relaxed">
            Children need honesty. Avoid euphemisms like &quot;gone to sleep&quot; or &quot;gone away&quot;, which can create confusion or fear (a child may become afraid of going to sleep). Use clear, gentle language: &quot;Grandad has died. That means his body has stopped working and he won't be coming back. It is very sad, and it is OK to cry.&quot; Answer their questions honestly and simply, and do not be afraid to say &quot;I don't know&quot; when you genuinely do not.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Maintain routines</h3>
          <p className="text-sm text-muted leading-relaxed">
            Children find safety in routine. Try to keep school, mealtimes, bedtimes, and activities as normal as possible. This does not mean ignoring the grief; it means providing a stable framework within which they can process it. Let them know it is OK to feel sad, angry, confused, or even to laugh and play. Children grieve in bursts, not continuously, and that is completely normal.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Inform the school</h3>
          <p className="text-sm text-muted leading-relaxed">
            Let the child's school know as soon as possible. Teachers, teaching assistants, and the school counsellor can watch for changes in behaviour and provide extra support during the school day. Many schools have bereavement policies and access to resources. If the child seems to be struggling significantly, ask the school about referral to educational psychology or local child bereavement services such as Winston's Wish (winstonswish.org) or Grief Encounter (griefencounter.org.uk).
          </p>
        </div>
      </div>

      {/* Supporting a grieving colleague */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Supporting a grieving colleague</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What colleagues can do</h3>
          <p className="text-sm text-muted leading-relaxed">
            When a colleague is bereaved, acknowledge it directly. A simple &quot;I was sorry to hear about your mum&quot; is enough. Do not pretend nothing has happened. If you work closely together, offer to cover tasks or deadlines while they are away. When they return, do not expect them to be operating at full capacity straight away. Grief affects concentration, memory, and energy levels. Be patient.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What employers and managers should do</h3>
          <p className="text-sm text-muted leading-relaxed">
            Beyond statutory bereavement leave, good employers offer flexibility. This might mean flexible working hours, the option to work from home, a phased return, or additional unpaid leave. Have a private conversation with the employee about what they need, rather than assuming. Do not rush them back to full duties. Some people want to throw themselves into work; others need a gentler return. Let them decide. If your organisation has an Employee Assistance Programme, remind them it exists and that it is confidential.
          </p>
        </div>
      </div>

      {/* When to suggest professional help */}
      <h2 className="text-2xl font-bold text-foreground mb-6">When to suggest professional help</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Signs someone may need more support</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Most grief, however painful, is a natural response to loss and does not require professional intervention. But some people get stuck, and their grief becomes something more. Look out for:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>Persistent feelings of numbness or detachment lasting many months</li>
            <li>Inability to carry out basic daily tasks (washing, eating, getting out of bed)</li>
            <li>Increasing use of alcohol or drugs to cope</li>
            <li>Expressing feelings of guilt, worthlessness, or that life is not worth living</li>
            <li>Complete withdrawal from friends, family, and activities</li>
            <li>Intense anger or bitterness that is not easing over time</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to raise it gently</h3>
          <p className="text-sm text-muted leading-relaxed">
            Suggesting professional help can feel awkward, but it is one of the most caring things you can do. Frame it around concern, not criticism: &quot;I have noticed you seem really weighed down by everything. Have you thought about speaking to someone? Cruse has a free helpline, or your GP can refer you to counselling.&quot; Offer to help them make the call or go with them to the appointment. Visit our <Link href="/support" className="text-primary font-medium hover:underline">support and helplines page</Link> for a full list of free bereavement services.
          </p>
        </div>
      </div>

      {/* Looking after yourself */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Looking after yourself</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Supporting someone through grief is tiring</h3>
          <p className="text-sm text-muted leading-relaxed">
            Being present for someone in deep pain takes an emotional toll. You may find yourself absorbing their sadness, feeling helpless, or becoming anxious about saying the wrong thing. This is normal, but you need to look after your own wellbeing too. Set boundaries where you need them. It is OK to step back occasionally, to say &quot;I need a quiet evening tonight&quot;, or to talk to someone about how you are feeling. You cannot pour from an empty cup.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">You may be grieving too</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the person who died was someone you also cared about, you are dealing with your own grief while trying to support someone else. Do not push your own feelings aside entirely. Find someone you can talk to, whether that is another friend, a family member, or a professional. Your grief matters too, even if it looks different from theirs.
          </p>
        </div>
      </div>

      {/* Warm box */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          The most important thing you can do for someone who is grieving is to show up and keep showing up. You do not need to fix their pain. You just need to let them know they are not alone in it. If you or someone you are supporting needs to talk, Cruse Bereavement Support offers free, confidential help on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>.
        </p>
      </div>

      {/* FAQs */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What should I say when someone dies?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Keep it simple and sincere. &quot;I am so sorry for your loss&quot; or &quot;I am thinking of you&quot; is perfectly fine. You do not need to find the perfect words. Avoid cliches like &quot;everything happens for a reason&quot; or &quot;they are in a better place&quot;. If you do not know what to say, it is OK to say exactly that. A card, a text, or simply being present matters more than eloquence.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How do I comfort someone who has lost a parent?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Acknowledge the significance of their loss. Losing a parent changes everything, even for adults. Share a positive memory of their parent if you have one. Offer practical help: cooking, shopping, childcare, or driving them to the registrar's office. Keep checking in after the funeral, when everyone else has moved on. For more specific guidance, see our <Link href="/guides/lost-a-parent" className="text-primary font-medium hover:underline">guide for when a parent dies</Link>.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Is it OK to send a text instead of calling?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Yes. A text is often better than a phone call in the first few days, because the bereaved person can read it when they are ready and does not have to manage a conversation. Send a genuine message and make it clear they do not need to reply. Something like &quot;No need to respond. Just want you to know I care and I am here whenever you need me.&quot;
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Should I go to the funeral even if I did not know the person well?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you are close to the bereaved person, yes. Your presence at the funeral is for them, not for the person who died. It shows that you care enough to give up your time and be there during one of the hardest days of their life. If you are unsure, ask: &quot;I would like to come to the funeral to support you. Would that be OK?&quot;
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How long does grief last?</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no fixed timeline. Grief is not something people &quot;get over&quot;; it is something they learn to carry. The most intense pain usually softens over months and years, but significant dates, milestones, and unexpected triggers can bring it flooding back. Do not put a timeline on someone else's grief, and do not assume they should be &quot;fine&quot; after a certain period.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What if I say the wrong thing?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Most bereaved people understand that the people around them are trying their best. If you say something clumsy, it is unlikely to cause lasting damage. What hurts far more is silence, avoidance, or people pretending nothing has happened. If you realise you have said something unhelpful, you can simply say &quot;Sorry, that came out wrong. I just want you to know I care.&quot; Showing up imperfectly is always better than not showing up at all.
          </p>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Supporting someone through a bereavement?</h2>
        <p className="text-muted mb-6">Our step-by-step guide and personalised checklist can help you understand what they are going through and what practical tasks lie ahead.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get a Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/helping-someone-grieve" guides={['/guides/lost-a-parent', '/guides/lost-a-spouse', '/guides/lost-a-friend', '/support']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Help Someone Who Is Grieving',
            description: 'Practical guidance on supporting a bereaved friend, family member, or colleague through grief.',
            datePublished: '2026-03-14',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
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
                name: 'What should I say when someone dies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Keep it simple and sincere. "I am so sorry for your loss" or "I am thinking of you" is perfectly fine. Avoid cliches like "everything happens for a reason" or "they are in a better place". A card, a text, or simply being present matters more than eloquence.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I comfort someone who has lost a parent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Acknowledge the significance of their loss. Share a positive memory of their parent if you have one. Offer practical help like cooking, shopping, or childcare. Keep checking in after the funeral, when everyone else has moved on.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it OK to send a text instead of calling?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A text is often better than a phone call in the first few days because the bereaved person can read it when they are ready. Send a genuine message and make it clear they do not need to reply.',
                },
              },
              {
                '@type': 'Question',
                name: 'Should I go to the funeral even if I did not know the person well?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If you are close to the bereaved person, yes. Your presence at the funeral is for them, not for the person who died. It shows that you care enough to be there during one of the hardest days of their life.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does grief last?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'There is no fixed timeline. Grief is not something people "get over"; it is something they learn to carry. The most intense pain usually softens over months and years, but significant dates and unexpected triggers can bring it back.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if I say the wrong thing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most bereaved people understand that the people around them are trying their best. What hurts far more is silence or avoidance. If you say something clumsy, simply say "Sorry, that came out wrong. I just want you to know I care." Showing up imperfectly is always better than not showing up at all.',
                },
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
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'How to Help Someone Who Is Grieving', item: 'https://helpafterloss.co.uk/guides/helping-someone-grieve' },
            ],
          }),
        }}
      />
    </div>
  );
}
