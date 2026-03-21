import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'When a Friend Dies - Your Grief Matters',
  description: 'Support and practical guidance for people who have lost a close friend. Covers your right to grieve, attending the funeral, helping the family, workplace bereavement leave, and finding support.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/lost-a-friend' },
  openGraph: {
    title: 'When a Friend Dies - Your Grief Matters',
    description: 'Friend grief is real but often unrecognised. Guidance for bereaved friends on what to do, how to help, and where to find support.',
    url: 'https://helpafterloss.co.uk/guides/lost-a-friend',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When a Friend Dies - Your Grief Matters',
    description: 'Friend grief is real but often unrecognised. Support and guidance for bereaved friends.',
  },
};

export default function LostAFriendPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'When a Friend Dies' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When a Friend Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Losing a close friend is a profound grief that is often unacknowledged by the people and systems around us. Friends are the family we choose. The loss of a close friendship can leave a gap in your daily life, your sense of self, and your future plans that is hard to describe to anyone who has not experienced it. This guide is for you, and it starts with the most important thing: your grief is real, and it matters.
      </p>

      {/* Your grief matters */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Your grief matters</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Disenfranchised grief</h3>
          <p className="text-sm text-muted leading-relaxed">
            Grief that is not publicly recognised or validated is sometimes called "disenfranchised grief". Friend loss is one of the most common forms. Employers do not routinely offer bereavement leave. Colleagues and acquaintances may not know how close you were. The formal condolences, flowers, and casseroles tend to go to the immediate family. You may be expected to simply carry on. This does not reflect the reality of your loss, and it can make grief harder to process.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Friendships at different life stages</h3>
          <p className="text-sm text-muted leading-relaxed">
            The significance of a friendship often cannot be captured by its length or frequency of contact. A childhood friend who knew your whole history, a person who walked alongside you through a particularly difficult period of your life, a close colleague or creative partner: these losses can be every bit as devastating as losing a family member. There is no hierarchy of grief that makes your loss less important.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Complicated feelings</h3>
          <p className="text-sm text-muted leading-relaxed">
            Grief for a friend can include guilt if you had drifted apart, or if the last conversation ended badly. It can include anger if they died by suicide, an accident, or from something preventable. It may include relief if they had been suffering, followed quickly by guilt about the relief. All of these feelings are part of grief. They do not make you a bad person or a bad friend. If you had an estranged or complicated relationship with the person who died, your grief is still valid.
          </p>
        </div>
      </div>

      {/* What you can do to help */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What you can do to help the family</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Making contact with the family</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you knew your friend's family, a short, personal message in the days after the death means a great deal. You do not need to have the right words: "I am so sorry. I loved [name] dearly and I am thinking of you" is enough. A handwritten card is especially meaningful. Do not wait until you have found the perfect thing to say: an imperfect message sent promptly is worth far more than a perfect one that arrives weeks later.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Offering practical help</h3>
          <p className="text-sm text-muted leading-relaxed">
            The family may be grateful for practical offers of help. If you had a close relationship with the family, you might offer to help with food, to collect children from school, to field phone calls, or to help with any administrative task. Be specific: "Can I bring dinner on Tuesday?" is more useful than "Let me know if there's anything I can do." If you are not close to the family, a message and a card are appropriate and appreciated.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Sharing memories</h3>
          <p className="text-sm text-muted leading-relaxed">
            Families often find it deeply comforting to hear stories and memories from their loved one's friends, particularly stories they may not have known. In the weeks and months after the death, a message, a card, or even an email sharing a specific memory ("I was thinking about the time we...") can be genuinely sustaining for the family. Do not worry that it will upset them: most bereaved families are grateful for anything that keeps the person's memory alive.
          </p>
        </div>
      </div>

      {/* Attending the funeral */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Attending the funeral</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Finding out about funeral arrangements</h3>
          <p className="text-sm text-muted leading-relaxed">
            Funeral details are usually shared by the immediate family, sometimes via a funeral notice in a local newspaper or on a memorial website. If you are not in direct contact with the family, check your friend's social media accounts or ask a mutual friend. Do not be afraid to ask directly if you are not sure: "I would very much like to attend the funeral if that would be welcome" is a perfectly appropriate message to send to the family.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Your role at the funeral</h3>
          <p className="text-sm text-muted leading-relaxed">
            You may be invited to give a reading, speak about your friend, or help in another way. If you are invited to speak and feel able, it is a significant gift to the family and to others who loved your friend. If you do not feel able, it is entirely acceptable to decline. At the funeral itself, you are there as a mourner. Sit wherever feels right, cry if you need to, and take your time leaving. If a wake or gathering follows, your presence there is also meaningful.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If you cannot attend</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you cannot attend the funeral due to distance, work, or other circumstances, acknowledge this to the family and to yourself. Send a card, make a donation to any charity named, or find another way to mark the day. Some funerals are now streamed online: ask the family if this is available. Missing the funeral does not mean missing the chance to grieve or to honour your friend.
          </p>
        </div>
      </div>

      {/* If named as executor */}
      <h2 className="text-2xl font-bold text-foreground mb-6">If your friend named you as executor</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">It is an honour, and a significant task</h3>
          <p className="text-sm text-muted leading-relaxed">
            Being named as executor by a friend is a mark of deep trust. It is also a substantial legal responsibility. As executor, you are responsible for applying for probate, collecting and valuing all assets, paying all debts, and distributing what remains to the beneficiaries. This can take months, and it happens while you are also grieving. You are entitled to claim reasonable expenses from the estate, including professional fees if you use a solicitor.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Applying for probate as a friend</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no rule that only family members can apply for probate. If you are named as executor in the will, you apply for probate using form PA1P at gov.uk. The process is the same regardless of your relationship to the deceased. If the estate is straightforward, you can do this yourself. If it is complex (property, business interests, assets abroad, disputes), a solicitor can help. The court fee is £300 for estates over £5,000. See our <Link href="/probate" className="text-primary font-medium hover:underline">full probate guide</Link>.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Navigating family dynamics as executor</h3>
          <p className="text-sm text-muted leading-relaxed">
            Being a friend acting as executor when the deceased has family can be delicate. The family may not know you well, or may feel that the role should have been theirs. Be transparent and communicative: send updates, share the will (beneficiaries are entitled to see it), and keep accounts. Your legal duty is to the will, not to any individual family member. If the family is actively hostile or obstructive, seek legal advice early.
          </p>
        </div>
      </div>

      {/* Warm support prompt */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          Grief for a friend can feel lonely, especially when the world around you doesn't recognise the depth of what you've lost. Please reach out for support. Cruse Bereavement Support is there for anyone who is grieving, regardless of the relationship: <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>.
        </p>
      </div>

      {/* Workplace bereavement leave */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Workplace bereavement leave for friends</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">No automatic statutory entitlement</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is currently no statutory right to paid bereavement leave for the death of a friend in UK law. The existing statutory entitlements cover parents losing a child under 18, but nothing for the death of a friend. This means that, legally, your employer has no obligation to offer paid time off when a friend dies. Any leave is at your employer's discretion.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What you can do</h3>
          <p className="text-sm text-muted leading-relaxed">
            Speak to your HR department or line manager. Explain that you have lost a very close friend and need time to attend the funeral and manage the immediate impact of the loss. Most decent employers will offer at least a day for the funeral, and often more. If your employer is unhelpful, you could use annual leave, request unpaid leave, or speak to your GP about a fit note if you are genuinely unwell as a result of grief. Your trade union, if you have one, can support you in this conversation.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Grief and workplace performance</h3>
          <p className="text-sm text-muted leading-relaxed">
            Grief affects concentration, memory, motivation, and emotional regulation. It can affect your work for weeks or months after a loss. If you are struggling, be honest with your line manager. Most workplaces have Employee Assistance Programmes (EAPs) offering confidential counselling: check whether yours is available. If you are referred for performance management while grieving, a GP fit note or a letter from a counsellor can help demonstrate the medical context.
          </p>
        </div>
      </div>

      {/* Supporting mutual friends */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Supporting mutual friends</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Grief within a friendship group</h3>
          <p className="text-sm text-muted leading-relaxed">
            When a friend dies, the whole friendship group is affected. People within the group will grieve differently: some will want to talk about the person constantly; others will find that too painful. Some will want to gather and be together; others will withdraw. There is no right way, and it can create tension if people have very different needs. Try to be patient with each other, and avoid the temptation to judge how others are grieving.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Keeping the friendship group together</h3>
          <p className="text-sm text-muted leading-relaxed">
            Sometimes the death of a central person in a friendship group causes it to fragment. Without their energy or their role as an organiser or connector, people drift apart. If you value the friendships within the group, take the initiative to maintain them. A gathering, however informal, a shared meal, or simply a group message can help people feel connected. Acknowledging anniversaries (the birthday, the death day) together can be a meaningful way to grieve collectively.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Checking in over time</h3>
          <p className="text-sm text-muted leading-relaxed">
            The intensity of support within a friendship group often fades after the first few weeks, as people return to their own lives. But grief does not follow that timeline. Check in with close mutual friends at the one-month mark, the three-month mark, and on the anniversary. A simple "I've been thinking about [name] today, how are you doing?" is enough. It is the consistency of being remembered and checked on that helps people through the long months of grief.
          </p>
        </div>
      </div>

      {/* Memorialising your friend */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Memorialising your friend</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Personal ways to remember them</h3>
          <p className="text-sm text-muted leading-relaxed">
            There are no rules for how you remember a friend. Some people find it comforting to create a small personal ritual: visiting a place they loved on the anniversary, cooking a meal they liked, watching a film they introduced you to, or writing them a letter. Others donate to a cause they cared about, take up something they always talked about doing together, or simply allow themselves time each year to sit with the memories. Whatever feels meaningful to you is the right thing.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Online memorials and social media</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your friend had social media accounts, their profiles may still be active. Facebook and Instagram can be memorialised so the account becomes a place for people to share memories. Google's Inactive Account Manager allows users to designate what happens to their account after death. If the family asks you to help manage these accounts, you will likely need the login details or to make a formal request to the platform. Our <Link href="/digital-legacy" className="text-primary font-medium hover:underline">digital legacy guide</Link> explains the process for each platform.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Fundraising in their name</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many people choose to fundraise for a cause connected to the way their friend died, or for a charity the friend cared about. This can be a way of channelling grief into something purposeful, and it creates a lasting association between the person and something good in the world. If you organise a fundraiser, let the family know: most families are deeply touched by this kind of tribute.
          </p>
        </div>
      </div>

      {/* Finding support */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Finding support for bereaved friends</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Cruse Bereavement Support</h3>
          <p className="text-sm text-muted leading-relaxed">
            Cruse offers free, confidential bereavement support for anyone who has experienced a significant loss, including the death of a close friend. Helpline: 0808 808 1677 (Monday to Friday 9:30am to 5pm). One-to-one support, local groups, and online resources are available. You do not need to justify how close you were: if you are grieving, Cruse is there for you. cruse.org.uk.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Grief counselling</h3>
          <p className="text-sm text-muted leading-relaxed">
            Speaking to a counsellor can help you process grief for a friend, especially if the grief feels invisible or unacknowledged. Ask your GP for a referral to NHS talking therapies (IAPT). The BACP directory at bacp.co.uk can help you find a qualified private counsellor. Sue Ryder (sueryder.org) offers free online bereavement counselling with trained counsellors who understand all kinds of grief. You do not need to be in crisis to access these services.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Support after traumatic loss</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your friend died suddenly, violently, by suicide, or in a traumatic accident, you may be experiencing traumatic grief or PTSD in addition to bereavement. These are different from ordinary grief and may need specific therapeutic support. EMDR (Eye Movement Desensitisation and Reprocessing) and trauma-focused CBT are effective for traumatic bereavement. Speak to your GP about a referral. Support After Suicide (supportaftersuicide.org.uk) is specifically there for people bereaved by a suicide.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">At a Loss</h3>
          <p className="text-sm text-muted leading-relaxed">
            At a Loss (ataloss.org) is a UK directory of bereavement services, searchable by type of loss and location. It includes services specifically for people who have lost a friend, as well as services for particular circumstances (sudden death, suicide, road death, and more). If you are not sure what kind of support would help most, the directory can help you find the right organisation.
          </p>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need help with the practical side?</h2>
        <p className="text-muted mb-6">If you have been asked to help with practical tasks after your friend's death, our personalised guide can help you understand what needs to happen and when.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/lost-a-friend" guides={['/guide', '/support', '/cultural-guide', '/digital-legacy']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'When a Friend Dies',
            description: 'Support and practical guidance for people who have lost a close friend in the UK.',
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
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'When a Friend Dies', item: 'https://helpafterloss.co.uk/guides/lost-a-friend' },
            ],
          }),
        }}
      />
    </div>
  );
}
