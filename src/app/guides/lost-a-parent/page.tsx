import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';
import { MidPageCta } from '@/components/MidPageCta';

export const metadata: Metadata = {
  title: 'When a Parent Dies - What to Do Next',
  description: 'Practical and compassionate guidance for adult children after a parent dies. Covers first steps, finding the will, executor duties, clearing the home, inheritance, and sibling disagreements.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/lost-a-parent' },
  openGraph: {
    title: 'When a Parent Dies - What to Do Next',
    description: 'Practical and compassionate guidance for adult children after a parent dies in the UK.',
    url: 'https://helpafterloss.co.uk/guides/lost-a-parent',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When a Parent Dies - What to Do Next',
    description: 'Practical guidance for adult children: wills, executor duties, clearing the home, inheritance, and sibling disagreements.',
  },
};

export default function LostAParentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'When a Parent Dies' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When a Parent Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Losing a parent is one of the hardest things most people go through, even when it has been expected for a long time. As an adult child, you may find yourself carrying most of the practical work at a time when you are also grieving. This guide takes you through what needs to happen, in a sensible order, so nothing important gets missed. There is no need to read it all at once.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        alt="Sunlight breaking through clouds over a peaceful mountain landscape"
        credit="Simon Berger"
        creditUrl="https://unsplash.com/@8moments"
      />

      {/* First steps */}
      <h2 className="text-2xl font-bold text-foreground mb-6">First steps: who does what</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Who is next of kin?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent had a spouse or civil partner who is still alive, they are legally next of kin. The surviving parent will usually be the first person the hospital, GP, or coroner contacts. If there is no surviving spouse, the role typically falls to the eldest child, though any adult child can take the lead. There is no legal rule here for adult children, so it is worth agreeing early on who will be the main point of contact.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Finding the will</h3>
          <p className="text-sm text-muted leading-relaxed">
            One of the first things to look for is the will. When you feel able to, check the house carefully: filing cabinets, desk drawers, a safe, a solicitor's office, or their bank. You can also search the National Will Register at certainty.co.uk (around £100) or contact the Probate Registry to see if a will has been deposited. If you find a will, do not act on it until you have a solicitor or probate service verify it is valid and the most recent version. The will names the executor and states who inherits what.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Registering the death</h3>
          <p className="text-sm text-muted leading-relaxed">
            In England and Wales, the death must be registered within 5 days at the register office in the area where your parent died. In Scotland, you have 8 days. You will need the Medical Certificate of Cause of Death from the doctor or hospital. Order at least 5 certified copies of the death certificate (£12.50 each in England and Wales, £15 in Scotland), as banks, insurers, and pension providers each need an original. Use Tell Us Once at the appointment to notify government departments in a single step.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Arranging the funeral</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent left funeral wishes, try to honour them where you can. If not, the decision falls to the executor (or the next of kin if there is no will). It is worth asking for at least three itemised quotes from funeral directors. A traditional burial averages around £5,400, cremation around £4,200, and direct cremation from around £1,600. Spending more does not mean caring more. A direct cremation followed by a memorial you plan in your own time can be just as personal, and far less of a strain on the family's finances.
          </p>
        </div>
      </div>

      {/* Executor section */}
      <h2 className="text-2xl font-bold text-foreground mb-6">If you are named as executor</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What being an executor means</h3>
          <p className="text-sm text-muted leading-relaxed">
            The executor is the person legally responsible for administering the estate. This includes applying for probate, collecting all assets, paying all debts and taxes, and distributing what remains to the beneficiaries. It is a significant responsibility and can take many months. You are not legally required to act as executor even if named in the will: you can renounce the role before you have intermeddled (taken any formal steps). Speak to a solicitor if you are unsure whether to accept.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Applying for probate</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent's estate includes property, or has more than around £5,000 to £50,000 in sole-name accounts, you will almost certainly need probate. Apply using form PA1P (with a will) at gov.uk. The court fee is £526. You will need to value the estate and complete an inheritance tax form first. Current processing time is around usually within 12 weeks. For a detailed walkthrough, see our <Link href="/probate" className="text-primary font-medium hover:underline">full probate guide</Link>.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Paying debts before distributing</h3>
          <p className="text-sm text-muted leading-relaxed">
            Before any money goes to beneficiaries, all debts must be paid. This includes the mortgage, credit cards, loans, utility bills, and any care home fees. Place a statutory notice in The Gazette (thegazette.co.uk, around £85) and a local newspaper. Wait at least 2 months before distributing the estate. This protects you personally from creditors who come forward later.
          </p>
        </div>
      </div>

      <MidPageCta
        heading="Not sure what needs doing first?"
        text="Our personalised guide asks a few questions about your parent's situation and gives you a step-by-step checklist with the deadlines that actually apply to you."
      />

      {/* Home and possessions */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Dealing with your parent's home</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Secure the property immediately</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent lived alone, the house will need securing before too long. Check the heating, clear out perishable food, lock all doors and windows, and cancel any milk or newspaper deliveries. Going back to an empty home is hard, so take someone with you if that helps. Contact the home insurer: most standard policies become void if the property is empty for more than 30 days, and you may need to switch to specialist unoccupied property insurance. Apply to the council for a council tax exemption, which runs from the date of death through probate and for 6 months afterwards.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Clearing the house</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no need to rush this, and most people find it takes longer than they expected. Go through belongings slowly: important documents can be mixed in with ordinary paperwork, and some items may have real financial or sentimental value. Look for bank statements, insurance policies, share certificates, premium bonds (check at nsandi.com), pension paperwork, and any assets you were not aware of. Only once you have a full picture of the estate should you start clearing.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Sentimental items and family disagreements</h3>
          <p className="text-sm text-muted leading-relaxed">
            Sentimental items often cause more difficulty than money does, and that is rarely about the objects themselves. If the will does not specify who receives particular items, they form part of the residuary estate to be divided among the beneficiaries. A quiet family gathering where people choose items in turn can take a lot of the heat out of it. Keep a written record of any informal agreements. If items of significant value are involved, get them properly valued before distributing. A mediator can help if disagreements become serious.
          </p>
        </div>
      </div>

      {/* Finances */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Sorting finances and pensions</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Bank accounts and savings</h3>
          <p className="text-sm text-muted leading-relaxed">
            Contact each bank individually, or use the free Death Notification Service at deathnotificationservice.co.uk to notify multiple banks at once. Sole accounts will be frozen but most banks will release funds for funeral costs before probate is granted. Joint accounts pass automatically to the surviving holder. Request a final bank statement from each account to help value the estate.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">State pension and workplace pensions</h3>
          <p className="text-sm text-muted leading-relaxed">
            Contact the DWP to stop state pension payments: overpayments will need to be repaid from the estate. For workplace and private pensions, contact each provider. There may be a lump sum death benefit, ongoing payments to a dependent, or remaining guaranteed payment periods. Many pension death benefits are written in trust and pass outside the estate, paid at the pension trustees' discretion. Check any nomination of beneficiary forms your parent may have completed.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Bereavement Support Payment: not available to children</h3>
          <p className="text-sm text-muted leading-relaxed">
            Bereavement Support Payment is only available to surviving spouses and civil partners. As an adult child, you cannot claim it after losing a parent, which comes as a surprise to a lot of people. If money is tight, it is worth checking what else you may be entitled to at gov.uk/benefits. Some employers offer enhanced compassionate leave; check your contract or speak to HR.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Life insurance and investments</h3>
          <p className="text-sm text-muted leading-relaxed">
            Search through all paperwork and bank statements for insurance premiums. Some policies are written in trust, meaning the payout goes directly to the named beneficiary without forming part of the estate. ISAs lose their tax-free status on death (though there is a continuing account allowance for spouses). Shares and investments must be valued at the date of death for inheritance tax purposes.
          </p>
        </div>
      </div>

      {/* Inheritance and probate */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Inheritance and who gets what</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If there is a will</h3>
          <p className="text-sm text-muted leading-relaxed">
            The will sets out exactly who inherits and in what proportions. Adult children have no automatic legal right to inherit if they are not named in the will, though they may be able to challenge it under the Inheritance (Provision for Family and Dependants) Act 1975 if they were financially dependent on the parent. The executor must follow the will, even if other family members disagree with its contents.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If there is no will (intestacy)</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent passed away without leaving a will, the intestacy rules decide who inherits. In England and Wales: if there is a surviving spouse or civil partner, they receive the first £322,000 and half of anything above that. Children share the remaining half equally. If there is no surviving spouse, children inherit equally. In Scotland, children always have a right to a minimum share (Legal Rights) regardless of what a will says. See our <Link href="/intestacy" className="text-primary font-medium hover:underline">intestacy guide</Link> for the full rules.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Inheritance tax</h3>
          <p className="text-sm text-muted leading-relaxed">
            Inheritance tax is charged at 40% on the value of the estate above £325,000. If your parent left their home to children or grandchildren, an additional allowance of up to £175,000 applies, giving a potential threshold of £500,000. If they were widowed, the unused portion of the first parent's nil-rate band can be carried forward, meaning the estate may be entirely exempt. Any IHT due must be paid within 6 months of death.
          </p>
        </div>
      </div>

      {/* Sibling disagreements */}
      <h2 className="text-2xl font-bold text-foreground mb-6">When siblings disagree</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Why disagreements happen</h3>
          <p className="text-sm text-muted leading-relaxed">
            Falling out with brothers and sisters after a parent passes away is very common, and it does not mean your family is a difficult one. Grief affects people in different ways, and old tensions tend to resurface at an already painful time. Disagreements most often centre on whether the will feels fair, who cared for the parent in later life, particular items, or how quickly to sell the family home. It can help to separate the practical decisions from the emotional ones and deal with them apart from each other.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What the executor can and cannot do</h3>
          <p className="text-sm text-muted leading-relaxed">
            The executor has a legal duty to follow the will. They cannot give extra money to one beneficiary or delay the estate to punish another. Beneficiaries are entitled to receive accounts showing how the estate has been administered. If you believe the executor is acting improperly, you can apply to the court for them to be removed or to compel them to pass accounts. A solicitor can advise on this.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Mediation and legal challenge</h3>
          <p className="text-sm text-muted leading-relaxed">
            If conversations at home are not getting anywhere, family mediation is far cheaper and quicker than going to court, and it keeps relationships intact more often than litigation does. A mediator helps everyone reach an agreement between themselves. If you believe the will is invalid (due to lack of mental capacity, undue influence, or fraud), you can contest it, but it is expensive and it takes a real emotional toll. Legal advice is essential before taking this step. The Contentious Probate team at any solicitor can advise.
          </p>
        </div>
      </div>

      {/* Emotional support */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          Losing a parent can change how the world feels in ways that are hard to anticipate. Even when it was expected, the grief can still take you by surprise. You do not have to carry it on your own. Cruse Bereavement Support offers free, confidential help on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>, and your GP can refer you to counselling if you are struggling.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-6">Finding emotional support</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Grief after losing a parent</h3>
          <p className="text-sm text-muted leading-relaxed">
            Losing a parent, even in old age, can feel like losing the ground under your feet. Many people describe feeling unexpectedly adrift, vulnerable, or as though they have suddenly become "the older generation". None of that is unusual. Grieving and getting through the paperwork are not separate stages, and there is no order you are supposed to do them in.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Support organisations</h3>
          <p className="text-sm text-muted leading-relaxed">
            Cruse Bereavement Support: free helpline on 0808 808 1677, open Monday to Friday 9:30am to 5pm (with extended hours on some days). Sue Ryder offers online bereavement counselling at sueryder.org. At a Loss (ataloss.org) is a UK directory of bereavement services. Your GP can refer you to NHS counselling or a local bereavement service. Many hospices also offer free community bereavement support, even if your parent was never in their care.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Looking after yourself</h3>
          <p className="text-sm text-muted leading-relaxed">
            The paperwork after a parent passes away is heavier than most people expect, and it can go on for months. Pace yourself where you can. Share tasks with brothers, sisters, or other family members rather than carrying it all. When people offer help with cooking or shopping, it is fine to say yes. If you are working, speak to your employer early about what you need. Most are more understanding than you might think, but they cannot help if they do not know what you are dealing with.
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions when a parent dies</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Who is responsible for arranging the funeral when a parent dies?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent had a surviving spouse, they typically take the lead. If there is no surviving spouse, the executor named in the will has the legal right and responsibility. If there is no will, any adult child can step forward. In practice, it is worth agreeing early with siblings about who will coordinate, to avoid confusion or conflict. The funeral director can guide you through the process regardless of who takes the lead.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Do I need to apply for probate when a parent dies?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent owned property, or had more than around £5,000 to £50,000 in sole-name bank accounts (the threshold varies by bank), you will almost certainly need probate. Apply using form PA1P at gov.uk if there is a will, or PA1A if there is no will. The court fee is £526. You do not need a solicitor, though one can help if the estate is complex.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Can adult children claim bereavement benefits after a parent dies?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Bereavement Support Payment is only available to surviving spouses and civil partners, not to children. As an adult child, you cannot claim it. If your income has been affected by the loss (for example, if you were financially dependent on your parent), check your eligibility for Universal Credit or other benefits at gov.uk/benefits.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How long does bereavement leave last if a parent dies?</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no statutory right to paid bereavement leave for the death of a parent in UK law. Most employers offer 3 to 5 days of compassionate leave as part of their company policy, though some offer more. Check your employment contract or speak to HR. If you need longer, your GP can issue a fit note. ACAS has guidance on bereavement in the workplace at acas.org.uk.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What happens to my parent's house after they die?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your parent had a surviving spouse who owned the property as joint tenants, it passes to them automatically. If the property was in your parent's sole name, it becomes part of the estate and is distributed according to the will or intestacy rules. You cannot sell the property until probate is granted. Apply for a Class F council tax exemption as soon as you can, because the property is usually exempt from the date of death right through until 6 months after the grant of probate in England, or 12 months in Wales. Note the clock runs from the grant, not from the day your parent died, and while you are still waiting for the grant there is no time limit at all.
          </p>
        </div>
      </div>

      {/* Official resources */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Official resources</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <ul className="text-sm text-muted leading-relaxed space-y-2">
          <li><a href="https://www.gov.uk/after-a-death" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">gov.uk/after-a-death</a> : Step-by-step guide from the government</li>
          <li><a href="https://www.gov.uk/applying-for-probate" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">gov.uk/applying-for-probate</a> : How to apply for probate online</li>
          <li><a href="https://www.gov.uk/find-bereavement-services-from-council" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">gov.uk/find-bereavement-services-from-council</a> : Local council bereavement services</li>
          <li><a href="https://www.gov.uk/inherits-someone-dies-without-will" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">gov.uk/inherits-someone-dies-without-will</a> : Intestacy rules explained</li>
          <li><a href="https://www.cruse.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">cruse.org.uk</a> : Free bereavement support and counselling</li>
        </ul>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist for your situation</h2>
        <p className="text-muted mb-6">Answer a few questions and we will give you a step-by-step list with the deadlines that matter, tailored to your parent's circumstances.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/lost-a-parent" guides={['/guide', '/probate', '/template-letters', '/costs']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Who is responsible for arranging the funeral when a parent dies?',
                acceptedAnswer: { '@type': 'Answer', text: 'If your parent had a surviving spouse, they typically take the lead. If there is no surviving spouse, the executor named in the will has the legal right and responsibility. If there is no will, any adult child can step forward.' },
              },
              {
                '@type': 'Question',
                name: 'Do I need to apply for probate when a parent dies?',
                acceptedAnswer: { '@type': 'Answer', text: 'If your parent owned property, or had more than around £5,000 to £50,000 in sole-name bank accounts, you will almost certainly need probate. Apply using form PA1P at gov.uk if there is a will, or PA1A if there is no will. The court fee is £526.' },
              },
              {
                '@type': 'Question',
                name: 'Can adult children claim bereavement benefits after a parent dies?',
                acceptedAnswer: { '@type': 'Answer', text: 'Bereavement Support Payment is only available to surviving spouses and civil partners, not to children. Check your eligibility for Universal Credit or other benefits at gov.uk/benefits.' },
              },
              {
                '@type': 'Question',
                name: 'How long does bereavement leave last if a parent dies?',
                acceptedAnswer: { '@type': 'Answer', text: 'There is no statutory right to paid bereavement leave for the death of a parent in UK law. Most employers offer 3 to 5 days of compassionate leave. Check your employment contract or speak to HR.' },
              },
              {
                '@type': 'Question',
                name: "What happens to my parent's house after they die?",
                acceptedAnswer: { '@type': 'Answer', text: 'If jointly owned as joint tenants with a surviving spouse, it passes automatically. If in sole name, it becomes part of the estate and is distributed according to the will or intestacy rules. You cannot sell until probate is granted.' },
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
            image: 'https://helpafterloss.co.uk/opengraph-image',
            headline: 'When a Parent Dies',
            description: 'Practical and compassionate guidance for adult children after a parent dies in the UK.',
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
              { '@type': 'ListItem', position: 3, name: 'When a Parent Dies', item: 'https://helpafterloss.co.uk/guides/lost-a-parent' },
            ],
          }),
        }}
      />
    </div>
  );
}
