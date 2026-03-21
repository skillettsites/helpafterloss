import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';
import { MidPageCta } from '@/components/MidPageCta';

export const metadata: Metadata = {
  title: 'When a Child Dies - Support and Guidance for Bereaved Parents',
  description: 'Compassionate guidance for parents and families after the death of a child or baby in the UK. Covers the first hours, the coroner, Children\'s Funeral Fund, registering the death, telling siblings, and specialist support.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/lost-a-child' },
  openGraph: {
    title: 'When a Child Dies - Support and Guidance for Bereaved Parents',
    description: 'Support and practical guidance for bereaved parents in the UK, covering the Children\'s Funeral Fund, registering the death, and specialist organisations.',
    url: 'https://helpafterloss.co.uk/guides/lost-a-child',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When a Child Dies - Support and Guidance for Bereaved Parents',
    description: 'Practical guidance and specialist support for bereaved parents in the UK.',
  },
};

export default function LostAChildPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'When a Child Dies' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When a Child Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        There are no words adequate to this loss. Losing a child is the most devastating thing a parent can experience, and this guide is written with that in mind. Alongside the overwhelming grief, there are practical things that need to happen. We have tried to explain them as simply and gently as possible, so you only need to read what is relevant to you right now.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1602523961358-f9f03dd557db?w=800&q=80"
        alt="Soft candlelight glowing warmly in a quiet, peaceful setting"
        credit="Rebecca Peterson-Hall"
        creditUrl="https://unsplash.com/@rpetersonhall"
      />

      {/* First hours */}
      <h2 className="text-2xl font-bold text-foreground mb-6">The first hours</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">At the hospital</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your child died in hospital, the medical team will support you through the immediate practical steps. You do not need to leave straight away: most hospitals will allow you as much time as you need with your child. A bereavement midwife or specialist nurse may be assigned to you. Ask for this support if it is not offered. You are allowed to hold your child, take photographs, and have any meaningful time that feels right for your family.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If your child died at home or unexpectedly</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your child died at home or the death was unexpected, call 999. The ambulance service will attend, and the death will be referred to the coroner. This is a legal requirement in England and Wales when a death is sudden, unexplained, or the circumstances are unclear. It is not a reflection on you or on what happened. The police may also attend as part of the standard process: this is routine and does not imply any suspicion.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Telling people</h3>
          <p className="text-sm text-muted leading-relaxed">
            You do not have to tell anyone else today. Ask a trusted family member or close friend to be the person who handles communications on your behalf. Give them permission to tell people at a pace that feels manageable. You do not owe anyone an immediate explanation. Protect your own space during these first hours.
          </p>
        </div>
      </div>

      {/* Coroner */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Post-mortems and the coroner</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">When the coroner is involved</h3>
          <p className="text-sm text-muted leading-relaxed">
            A coroner investigates deaths that are sudden, violent, unnatural, or where the cause is unknown. After the death of a child, coroner involvement is very common, even when the cause is known, particularly for sudden unexpected deaths in infancy (SUDI or SIDS). The coroner's office will contact you and guide you through the process. You are entitled to be kept informed throughout, and to have someone with you at any meeting with the coroner.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Post-mortem examinations</h3>
          <p className="text-sm text-muted leading-relaxed">
            The coroner may order a post-mortem (autopsy) to establish the cause of death. You may not be able to prevent this if the coroner has ordered it, though you can express your wishes about certain aspects (such as the retention of tissue samples). A hospital post-mortem, requested to help understand the illness rather than legally required, can be declined. Ask the hospital team to be clear about which type is being proposed. The results of the post-mortem will be explained to you, and you can take someone with you.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Inquests</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the cause of death cannot be confirmed without further investigation, the coroner may open an inquest. This is a formal hearing to establish who died, when, where, and how. Inquests can take weeks or months to conclude. During this time, the death cannot be registered, which can delay the funeral. The coroner will keep you informed. If you have questions about the process, the organisation INQUEST (inquest.org.uk) offers free, specialist advice for bereaved families.
          </p>
        </div>
      </div>

      {/* Registering the death */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Registering your child's death</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Registering if the cause of death is known</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the doctor can certify the cause of death and there is no coroner involvement, you register the death at the local register office within 5 days (8 days in Scotland). You will need the Medical Certificate of Cause of Death. Either parent can register. The registrar will be experienced in supporting bereaved parents and the appointment will be handled with great sensitivity. Order several certified copies of the death certificate (£12.50 each in England, £11 in Wales, £15 in Scotland).
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If the coroner is involved</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the coroner is involved, registration may be delayed while investigations are completed. The coroner will issue an interim death certificate which can be used for some administrative purposes in the meantime. The registrar will explain what you can and cannot do while waiting. You do not need to chase this: the coroner's office will notify you when registration can proceed.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Stillbirth: registering a baby born after 24 weeks</h3>
          <p className="text-sm text-muted leading-relaxed">
            A baby born after 24 completed weeks of pregnancy showing no signs of life is registered as a stillbirth. You must register within 42 days in England and Wales. Either parent can register. You will receive a certificate of stillbirth, not a birth certificate. The hospital team will guide you through the process. If your baby was born before 24 weeks, there is no legal requirement to register, but you can request a Certificate of Baby's Death from the hospital, which many parents find meaningful.
          </p>
        </div>
      </div>

      {/* Children's Funeral Fund */}
      <h2 className="text-2xl font-bold text-foreground mb-6">The Children's Funeral Fund</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What the fund covers</h3>
          <p className="text-sm text-muted leading-relaxed">
            In England, the Children's Funeral Fund covers burial or cremation fees charged by local councils and crematoria for children under 18, and for babies stillborn after 24 weeks of pregnancy. The fund pays these fees directly to the funeral director: you do not pay and then claim back. The fund covers the basic burial or cremation cost only, not all funeral director fees.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to access it</h3>
          <p className="text-sm text-muted leading-relaxed">
            Ask your funeral director to apply on your behalf. They will be familiar with the process. You do not apply directly. There is no means test: the fund is available to all families in England regardless of income. The equivalent scheme in Scotland covers burial and cremation costs up to a set amount for anyone under 18. Wales and Northern Ireland have their own arrangements: ask your funeral director or the hospital bereavement team for details in your area.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Other funeral costs</h3>
          <p className="text-sm text-muted leading-relaxed">
            The Children's Funeral Fund does not cover all the costs involved: funeral director fees, coffin, transportation, and any service costs are not always included. Many funeral directors offer significantly reduced rates, or waive fees entirely, for children's funerals. Ask directly: most are willing to help. If you are on means-tested benefits, you may also be eligible for a Funeral Expenses Payment from the DWP, which can help with other costs. See our <Link href="/costs" className="text-primary font-medium hover:underline">full costs guide</Link>.
          </p>
        </div>
      </div>

      {/* Gentle support prompt */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          Please be gentle with yourself. There is no right way to do any of this. If you are struggling, Child Bereavement UK offers free, specialist support for bereaved parents: <a href="tel:08000288840" className="font-medium underline">0800 02 888 40</a>. You do not need to be managing practical tasks to call them. Talking is enough.
        </p>
      </div>

      <MidPageCta
        heading="We can help with the practical steps"
        text="If you would like a clear list of what needs to happen and when, our free personalised guide can take some of that weight from you."
      />

      {/* Telling siblings */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Telling siblings and other children</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">When to tell them</h3>
          <p className="text-sm text-muted leading-relaxed">
            Tell siblings as soon as you can, even if you are not sure how. Children generally cope better with honest, age-appropriate information than with being shielded from the truth. They will sense that something serious has happened. If you delay telling them, and they find out from someone else, it can damage trust. You do not have to have all the answers: it is okay to say you are sad too, and that you do not know exactly why this happened.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to talk to children about death</h3>
          <p className="text-sm text-muted leading-relaxed">
            Use clear, honest language appropriate to the child's age. Avoid euphemisms like "gone to sleep" or "passed away" with young children, as these can cause confusion or fear. For younger children: "Your brother/sister died. That means their body stopped working and they won't be coming back, but we will always love them and remember them." Children may react with questions, or with apparent indifference, or with tears: all of these are normal. Winston's Wish (winstonswish.org) has excellent guidance on talking to children about the death of a sibling.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Supporting surviving siblings</h3>
          <p className="text-sm text-muted leading-relaxed">
            Surviving siblings may feel overlooked as adults around them focus on their own grief. They may also feel guilt, anger, or worry about their own safety. Maintain as much routine as possible. Let school know what has happened: teachers can provide support and be alert to changes in behaviour. Child Bereavement UK (0800 02 888 40) supports the whole family, including bereaved siblings. Winston's Wish offers a helpline specifically for children and young people.
          </p>
        </div>
      </div>

      {/* Time off work */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Time off work</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Your legal entitlement</h3>
          <p className="text-sm text-muted leading-relaxed">
            As of 2026, there is no statutory right to paid parental bereavement leave for parents who lose a child aged 18 or over (the Parental Bereavement Leave Act 2018 covers loss of a child under 18, and of a stillborn baby after 24 weeks). If your child was under 18, you are entitled to 2 weeks of Parental Bereavement Leave, which can be taken as two separate weeks within 56 weeks of the death. You are entitled to the statutory rate of pay (currently £184.03 per week, or 90% of your average weekly earnings if that is lower) if you qualify. Check gov.uk for full eligibility details.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What most employers offer</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many employers offer compassionate leave beyond the statutory minimum. Speak to your HR department or line manager as soon as you feel able. Most employers will be genuinely accommodating in these circumstances. If you are a member of a trade union, your union representative can support you in conversations with your employer about time off and flexible arrangements when you return.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Returning to work</h3>
          <p className="text-sm text-muted leading-relaxed">
            Returning to work after losing a child is one of the hardest things you will do. There is no right time. Some parents find that returning gives them structure and purpose; others need more time. Speak to your GP if you are struggling: a fit note can authorise further time off, and your GP can refer you for counselling. You are not expected to perform normally straight away. Ask your employer about a phased return, reduced hours, or working from home.
          </p>
        </div>
      </div>

      {/* Specialist support */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Specialist support for bereaved parents</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Child Bereavement UK</h3>
          <p className="text-sm text-muted leading-relaxed">
            Child Bereavement UK supports families when a child or young person dies, or when a child is bereaved. Free helpline: 0800 02 888 40 (Monday to Friday, 9am to 5pm). Live chat and email support at childbereavementuk.org. They also support bereaved siblings and can advise on telling other children about the death. Their trained staff understand the particular pain of losing a child.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The Compassionate Friends</h3>
          <p className="text-sm text-muted leading-relaxed">
            The Compassionate Friends is a UK charity supporting bereaved parents, siblings, and grandparents after the death of a child of any age. Free helpline: 0345 123 2304 (open every day, including weekends, 10am to 4pm and 7pm to 10pm). They also have a postal library of bereavement books, local support groups, and online forums. Many bereaved parents find it deeply helpful to speak to someone who truly understands because they have been through it themselves.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Sands: for stillbirth and neonatal death</h3>
          <p className="text-sm text-muted leading-relaxed">
            Sands (Stillbirth and Neonatal Death Society) supports anyone affected by the death of a baby. Helpline: 0808 164 3332 (Monday to Friday 9:30am to 5:30pm, Tuesday and Thursday until 7:30pm). They also have a free app, an online community, and local groups. Sands works with hospitals to improve care for bereaved parents and can advise on rights and options in the immediate aftermath of a baby's death.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Winston's Wish</h3>
          <p className="text-sm text-muted leading-relaxed">
            Winston's Wish supports bereaved children and their families. They are particularly helpful for parents trying to support surviving siblings. Helpline: 08088 020 021 (Monday to Friday 9am to 5pm). They also offer online resources, a young people's helpline, and residential weekends for bereaved children and their parents. Their website (winstonswish.org) has excellent guidance for parents on how to talk about death with children.
          </p>
        </div>
      </div>

      {/* Memory making */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Memory-making and remembrance</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Creating memories in the hospital</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many hospitals have a memory-making service for parents of babies and young children who have died. This may include hand and foot casts, photographs, locks of hair, or a memory box. Ask the bereavement midwife or nurse about what is available: many parents find these keepsakes deeply precious in the years ahead. If no one has mentioned this, you are absolutely entitled to ask. You may also wish to contact Petals (petalscharity.org) or SANDS for additional memory-making support.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Memorials and anniversaries</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no wrong way to memorialise your child. Some families plant a tree, make a donation to a charity in their name, hold an annual gathering, or create a book of memories. Some parents find it helpful to have somewhere to go: a grave, a place where ashes are scattered, or a memorial bench. Others find meaning in fundraising or campaigning in their child's name. Whatever feels right for your family is the right thing.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Online memorials</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many families create an online memorial where friends and extended family can share memories and photographs. MuchLoved (muchloved.com) specialises in this and is free. Facebook also allows memorial pages. If your child had their own social media accounts, speak to the platforms about memorialising them: Instagram, Facebook, and TikTok all have policies for this. Our <Link href="/digital-legacy" className="text-primary font-medium hover:underline">digital legacy guide</Link> explains how to manage online accounts after a death.
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions when a child dies</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Do I have to pay for my child's funeral?</h3>
          <p className="text-sm text-muted leading-relaxed">
            In England, the Children's Funeral Fund covers burial or cremation fees for children under 18 and babies stillborn after 24 weeks. Your funeral director applies on your behalf. There is no means test. Scotland has a similar scheme. In addition, many funeral directors significantly reduce or waive their fees for children's funerals. If you are on means-tested benefits, you may also be eligible for a Funeral Expenses Payment from the DWP.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Am I entitled to parental bereavement leave?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your child was under 18, or was a stillborn baby after 24 weeks of pregnancy, you are entitled to 2 weeks of Parental Bereavement Leave. This can be taken as two separate weeks within 56 weeks of the death. You are entitled to statutory pay (currently £184.03 per week or 90% of average weekly earnings, whichever is lower). Many employers offer additional paid leave beyond this.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Will there be a post-mortem?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the cause of death is unknown or the death was sudden, the coroner will usually order a post-mortem. This is a legal requirement and cannot be refused. The coroner's office will explain the process and keep you informed. If a hospital post-mortem is requested (to better understand an illness), you can decline. The results will be shared with you, and you can take someone with you to the meeting.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Where can I get support as a bereaved parent?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Child Bereavement UK (0800 02 888 40), The Compassionate Friends (0345 123 2304), and Sands for stillbirth and neonatal death (0808 164 3332) all offer free, specialist support. Your GP can also refer you to counselling. You do not need to be in crisis to reach out for help.
          </p>
        </div>
      </div>

      {/* Official resources */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Official resources</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <ul className="text-sm text-muted leading-relaxed space-y-2">
          <li><a href="https://www.gov.uk/parental-bereavement-pay-leave" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">gov.uk/parental-bereavement-pay-leave</a> : Parental Bereavement Leave and Pay</li>
          <li><a href="https://www.gov.uk/childrens-funeral-fund" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">gov.uk/childrens-funeral-fund</a> : Children's Funeral Fund for England</li>
          <li><a href="https://www.childbereavementuk.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">childbereavementuk.org</a> : Free support for bereaved parents and families</li>
          <li><a href="https://www.tcf.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">tcf.org.uk</a> : The Compassionate Friends</li>
          <li><a href="https://www.sands.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">sands.org.uk</a> : Sands, stillbirth and neonatal death charity</li>
        </ul>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">We are here to help with the practical side</h2>
        <p className="text-muted mb-6">If you would like a personalised checklist of what needs to happen and when, we can help you with that so you can focus on what matters most.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/lost-a-child" guides={['/costs', '/support', '/template-letters', '/cultural-guide']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: "Do I have to pay for my child's funeral?",
                acceptedAnswer: { '@type': 'Answer', text: "In England, the Children's Funeral Fund covers burial or cremation fees for children under 18 and babies stillborn after 24 weeks. Your funeral director applies on your behalf. There is no means test. Scotland has a similar scheme." },
              },
              {
                '@type': 'Question',
                name: 'Am I entitled to parental bereavement leave?',
                acceptedAnswer: { '@type': 'Answer', text: 'If your child was under 18 or stillborn after 24 weeks, you are entitled to 2 weeks of Parental Bereavement Leave within 56 weeks of the death, with statutory pay of £184.03 per week or 90% of average weekly earnings.' },
              },
              {
                '@type': 'Question',
                name: 'Will there be a post-mortem?',
                acceptedAnswer: { '@type': 'Answer', text: 'If the cause of death is unknown or the death was sudden, the coroner will usually order a post-mortem. This is a legal requirement. A hospital post-mortem requested for medical understanding can be declined.' },
              },
              {
                '@type': 'Question',
                name: 'Where can I get support as a bereaved parent?',
                acceptedAnswer: { '@type': 'Answer', text: 'Child Bereavement UK (0800 02 888 40), The Compassionate Friends (0345 123 2304), and Sands (0808 164 3332) all offer free, specialist support. Your GP can also refer you to counselling.' },
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
            '@type': 'Article',
            headline: 'When a Child Dies',
            description: 'Support and practical guidance for bereaved parents in the UK after losing a child.',
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
              { '@type': 'ListItem', position: 3, name: 'When a Child Dies', item: 'https://helpafterloss.co.uk/guides/lost-a-child' },
            ],
          }),
        }}
      />
    </div>
  );
}
