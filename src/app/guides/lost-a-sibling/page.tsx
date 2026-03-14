import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'When a Brother or Sister Dies - Support for Bereaved Siblings',
  description: 'Guidance and support for people who have lost a brother or sister. Covers your grief, supporting parents, practical help with the funeral, executor duties, legal rights, and bereavement leave.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/lost-a-sibling' },
  openGraph: {
    title: 'When a Brother or Sister Dies - Support for Bereaved Siblings',
    description: 'Compassionate guidance for bereaved brothers and sisters, covering grief, practical help, executor duties, and specialist support.',
    url: 'https://helpafterloss.co.uk/guides/lost-a-sibling',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When a Brother or Sister Dies - Support for Bereaved Siblings',
    description: 'Your grief is valid. Guidance for bereaved siblings on practical help, legal rights, and finding support.',
  },
};

export default function LostASiblingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When a Brother or Sister Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Bereaved siblings are sometimes called "the forgotten mourners". When a brother or sister dies, the focus often falls on the surviving parents or the spouse of the deceased, while siblings are expected to be strong, to support others, or simply to get on with it. This guide is for you. Your grief is real, your loss matters, and you deserve support too.
      </p>

      {/* Your grief is valid */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Your grief is valid</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Why sibling grief is often invisible</h3>
          <p className="text-sm text-muted leading-relaxed">
            Society tends to focus condolences and sympathy on parents and spouses when someone dies. Siblings can find that their own grief is overlooked, minimised, or expected to take second place to others. Friends and colleagues may not know what to say, or may not realise how significant the loss is. You may find yourself in the strange position of comforting others while needing comfort yourself. Recognising this dynamic is the first step to getting the support you deserve.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What sibling grief feels like</h3>
          <p className="text-sm text-muted leading-relaxed">
            Losing a sibling is losing someone who has known you your whole life: your shared childhood, your family history, the person who understood things about your family that no one else ever could. For many people, it also brings a profound sense of their own mortality. Grief for a sibling may include guilt (if you were not as close as you wished), anger, relief if your sibling was ill for a long time, and deep loneliness. All of these responses are normal and valid.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Grief and family relationships</h3>
          <p className="text-sm text-muted leading-relaxed">
            The death of a sibling can shift relationships within a family in ways that are hard to predict. Families sometimes pull together; sometimes they fragment. Old rivalries, resentments, or unresolved tensions can surface. If you had a complicated relationship with your sibling, the grief may be complicated too. Grief for an estranged sibling, or for a sibling with whom you had a difficult relationship, is still grief. You do not need to have been close to be devastated.
          </p>
        </div>
      </div>

      {/* Supporting parents */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Supporting your parents through their grief</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">No parent should bury a child</h3>
          <p className="text-sm text-muted leading-relaxed">
            Your parents are dealing with an unimaginable loss. The grief of a parent for a child is different from any other grief, and they may be in a state of profound shock, even if your sibling was older or had been ill. Be patient with them. Their grief does not diminish yours. You can hold both at the same time: your own grief and theirs.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Balancing support and your own needs</h3>
          <p className="text-sm text-muted leading-relaxed">
            Siblings often feel a strong pull to support their parents, sometimes at the cost of their own grieving. This is natural, but unsustainable. You cannot pour from an empty cup. Try to find at least one person, outside the immediate family, with whom you can be honest about your own grief. A friend, a counsellor, or a bereavement support service can give you a space that is purely yours.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">When your parents are elderly or ill</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parents are elderly, frail, or living with dementia or other conditions, the practical responsibility for managing everything may fall heavily on you. This can feel overwhelming when you are already grieving. Accept help from other family members, friends, and professional services. Social services can provide support for elderly parents who need it: contact the local council to request a care needs assessment. You are allowed to ask for help.
          </p>
        </div>
      </div>

      {/* Practical help */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Practical help with the funeral and notifications</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Who makes funeral decisions</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your sibling had a spouse or civil partner, they have the primary right to make funeral decisions. If your sibling was unmarried with no children, parents are typically next of kin and have this right, followed by siblings. If you are taking the lead on funeral arrangements, try to involve others where you can: funeral decisions that feel exclusionary can create lasting resentment. A good funeral director can help navigate these conversations.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to help with notifications</h3>
          <p className="text-sm text-muted leading-relaxed">
            Volunteering to handle specific, practical tasks is often the most useful thing a sibling can do. You might offer to contact their employer, friends, or social groups; to write social media posts or a newspaper notice; to organise a communication from the family; or to handle phone calls so that the surviving partner or parents do not have to repeat themselves over and over. Our <Link href="/template-letters" className="text-primary font-medium hover:underline">template letters</Link> can help with formal notifications.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">At the funeral</h3>
          <p className="text-sm text-muted leading-relaxed">
            Your role at the funeral is to be present as a mourner, a supporter, and someone who loved your sibling. You may be asked to give a reading, a eulogy, or to carry the coffin. You are allowed to say no if you do not feel able. You are also allowed to be visibly grief-stricken, even if those around you expect you to hold it together. Grief expressed honestly is never something to be ashamed of.
          </p>
        </div>
      </div>

      {/* Executor section */}
      <h2 className="text-2xl font-bold text-foreground mb-6">If you are named as executor</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Being named in a sibling's will</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your sibling named you as executor in their will, you have a significant legal responsibility. You are responsible for valuing the estate, applying for probate, paying all debts, and distributing what remains to the beneficiaries. You can do this yourself for straightforward estates, or use a solicitor. You are entitled to claim reasonable expenses from the estate. If you do not feel able to act, you can renounce the role before you have taken any formal steps: speak to a solicitor about this.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Applying for probate</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your sibling owned property or had significant assets in their sole name, you will need to apply for probate. Use form PA1P (with a will) at gov.uk. The court fee is £300 for estates over £5,000. Current processing time is around 12 to 16 weeks. Once granted, you can access their accounts, sell property, and distribute the estate. See our <Link href="/probate" className="text-primary font-medium hover:underline">probate guide</Link> for the full process.
          </p>
        </div>
      </div>

      {/* Legal rights */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Legal rights: what siblings are entitled to</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Under intestacy (no will)</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your sibling died without a will, the intestacy rules determine who inherits. In England and Wales, siblings only inherit if there is no surviving spouse, civil partner, children, or parents. This means that for most adults, siblings receive nothing under intestacy. If your sibling was unmarried, had no children, and both parents have also died, then siblings inherit equally. In Scotland, siblings may receive a share under the rules of succession if there is no surviving spouse or children. See our <Link href="/intestacy" className="text-primary font-medium hover:underline">intestacy guide</Link> for the full rules.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Under a will</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your sibling left a will, they can choose to leave you anything they wish. If you have been left a specific gift or a share of the estate, you are a beneficiary and entitled to receive it. You are also entitled to see the will (as a beneficiary) and to receive formal estate accounts from the executor. If you believe you were financially dependent on your sibling, you may be able to make a claim under the Inheritance (Provision for Family and Dependants) Act 1975, but this is legally complex: seek professional advice.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Decisions about the body and funeral</h3>
          <p className="text-sm text-muted leading-relaxed">
            The legal right to decide what happens to a body follows a specific order: spouse or civil partner first, then children, then parents, then siblings. If your sibling was married or had adult children, you may not have a legal say in funeral decisions, even if you have strong views. Try to express your wishes respectfully and to reach an agreement. A funeral director or mediator can help if there is significant disagreement.
          </p>
        </div>
      </div>

      {/* Support message */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          Your grief as a sibling is real, and it deserves real support. You do not need to be the strong one all the time. Cruse Bereavement Support offers free, confidential help on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>. You can call just to talk, without needing to know what to say.
        </p>
      </div>

      {/* Workplace leave */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Bereavement leave for siblings</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">No automatic statutory entitlement</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is currently no statutory right to paid bereavement leave for the death of a sibling in UK law. The statutory entitlement (Parental Bereavement Leave) applies only to parents who lose a child under 18. For adult siblings, any bereavement leave depends on your employer's policy. Many employers do offer compassionate leave of 1 to 5 days for a sibling's death, but this is discretionary.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to approach your employer</h3>
          <p className="text-sm text-muted leading-relaxed">
            Speak to your HR department or line manager as soon as possible. Explain the situation and ask what the company's bereavement policy covers. Most reasonable employers will accommodate time off for a sibling's funeral and some additional time to manage immediate practical matters. If your employer is unhelpful, your trade union representative can advise. If you are unwell as a result of grief, your GP can issue a fit note allowing further time off.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">When you return to work</h3>
          <p className="text-sm text-muted leading-relaxed">
            Returning to work while grieving can be genuinely difficult. Many colleagues will not know what to say and may avoid the subject, which can feel isolating. It can help to have one person at work who knows the situation and with whom you can be honest. If you are struggling, talk to your GP: counselling and talking therapies can be accessed via the NHS. Employee Assistance Programmes (EAPs), if your employer offers one, often include free confidential counselling.
          </p>
        </div>
      </div>

      {/* Finding support */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Finding support for bereaved siblings</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The Compassionate Friends: siblings section</h3>
          <p className="text-sm text-muted leading-relaxed">
            The Compassionate Friends has a dedicated Sibling Support Group for adults who have lost a brother or sister. They offer an online forum, a postal library, and local support groups. Their helpline is 0345 123 2304, open daily 10am to 4pm and 7pm to 10pm. Their website is tcf.org.uk. The Sibling Support Network within TCF specifically recognises the unique grief of bereaved siblings.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Cruse Bereavement Support</h3>
          <p className="text-sm text-muted leading-relaxed">
            Cruse offers free, confidential bereavement support for anyone who has lost someone important to them. Helpline: 0808 808 1677 (Monday to Friday 9:30am to 5pm). They can offer one-to-one support, local groups, and online resources. Their support is not limited to spouses or parents: sibling bereavement is just as valid a reason to reach out. cruse.org.uk.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Grief counselling and therapy</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you are finding it hard to manage your grief, speaking to a counsellor can make a significant difference. Ask your GP for a referral to NHS talking therapies (IAPT). Alternatively, the British Association for Counselling and Psychotherapy (BACP) directory at bacp.co.uk lets you find an accredited counsellor near you. Sue Ryder (sueryder.org) also offers free online bereavement counselling. You do not need a GP referral for any of these.
          </p>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a practical checklist for your situation</h2>
        <p className="text-muted mb-6">If you need help understanding what practical steps apply to you, our personalised guide can walk you through them.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/lost-a-sibling" guides={['/guide', '/support', '/template-letters', '/intestacy']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'When a Brother or Sister Dies',
            description: 'Compassionate guidance for bereaved siblings in the UK, covering grief, practical help, executor duties, and specialist support.',
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
              { '@type': 'ListItem', position: 3, name: 'When a Sibling Dies', item: 'https://helpafterloss.co.uk/guides/lost-a-sibling' },
            ],
          }),
        }}
      />
    </div>
  );
}
