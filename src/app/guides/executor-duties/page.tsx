import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Executor Duties: A Complete Step-by-Step Guide',
  description: 'Everything an executor needs to do, in the right order. From locating the will and registering the death through to distributing assets and closing the estate. Plain English guidance with timelines.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/executor-duties' },
  openGraph: {
    title: 'Executor Duties: A Complete Step-by-Step Guide',
    description: 'A complete guide to executor duties in the UK: what you must do, in what order, and what you are legally responsible for.',
    url: 'https://helpafterloss.co.uk/guides/executor-duties',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executor Duties: A Complete Step-by-Step Guide',
    description: 'Everything an executor needs to do, from locating the will to distributing the estate.',
  },
};

const STEPS = [
  {
    step: '1',
    title: 'Locate and secure the will',
    desc: 'Your first job is to find the original will. Check the person\'s home, safe, solicitor\'s files, and bank safe deposit box. The will may also be registered with the National Will Register (Certainty or Smee & Ford). If you cannot find it, check whether probate was ever granted for a previous spouse or relative, as some solicitors hold wills long-term. Once found, keep the original safe. Do not mark or annotate it in any way.',
  },
  {
    step: '2',
    title: 'Register the death (if not already done)',
    desc: 'In England and Wales, the death must be registered within 5 days (8 days in Scotland). This is usually done by the next of kin, but you may need to assist. You register at the local Register Office for the area where the person died. You will receive a Death Certificate (certified copy of entry) and a green certificate for burial or cremation. Order at least 5 certified copies of the Death Certificate at registration (£11 each), as every bank, insurer, and institution will need one.',
  },
  {
    step: '3',
    title: 'Arrange the funeral',
    desc: 'You are responsible for making funeral arrangements unless another family member takes this on. Check the will first for any specific wishes regarding burial, cremation, or religious preferences. The will is not legally binding on funeral wishes, but courts generally expect reasonable wishes to be followed. Contact a funeral director promptly. Keep all receipts as funeral costs are paid from the estate before any other expenses.',
  },
  {
    step: '4',
    title: 'Use Tell Us Once',
    desc: 'Tell Us Once is a free government service that notifies multiple departments in a single registration: HMRC, DWP, DVLA, Passport Office, local council, and others. Ask for the Tell Us Once reference number when you register the death, then use it online at gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once or by phone on 0800 085 7308.',
  },
  {
    step: '5',
    title: 'Notify banks, insurers, and pension providers',
    desc: 'Contact every financial institution the person had accounts with. Use the Death Notification Service (deathnotificationservice.co.uk) to notify multiple banks at once. For insurance policies, contact each provider directly to cancel policies and check for any life cover. For pensions, notify the pension provider and ask about any dependant\'s pension that may be payable to a surviving spouse or partner. Freeze any sole bank accounts to prevent further direct debits or transactions.',
  },
  {
    step: '6',
    title: 'Value the estate',
    desc: 'You need a full picture of everything the person owned and owed at the date of death. This includes: all bank and savings accounts (get a statement showing the balance on the date of death), investments and shares, property (get a formal estate agent valuation or RICS valuation), personal possessions of significant value, life insurance paid to the estate (not into trust), vehicles, and any money owed to them. Subtract all debts: mortgages, loans, credit cards, outstanding bills, and any other liabilities. The resulting figure is the net estate value.',
  },
  {
    step: '7',
    title: 'Complete the inheritance tax forms',
    desc: 'If the net estate is below the IHT threshold (£325,000, or up to £500,000 if a home is left to direct descendants), complete form IHT205 (the short return). If the estate is above the threshold, complete form IHT400 and pay any tax due within 6 months of death. Inheritance tax is charged at 40% on the amount above the threshold. You can pay IHT on property in instalments over 10 years. HMRC must receive IHT400 before you can apply for probate.',
  },
  {
    step: '8',
    title: 'Apply for Grant of Probate',
    desc: 'If the estate requires probate (almost always needed if the person owned property), complete form PA1P (with a will) or PA1A (without). You can apply online at gov.uk/applying-for-probate. You will need to send the original will, a certified copy of the Death Certificate, and the completed IHT form. The court fee is £300 for estates over £5,000, and free for estates under £5,000. Current processing times are 12-16 weeks.',
  },
  {
    step: '9',
    title: 'Place a statutory notice in The London Gazette',
    desc: 'This step is strongly recommended even though it is not legally required. Placing a notice in The London Gazette (and optionally a local newspaper) gives unknown creditors two months to come forward. If a creditor appears after you have distributed the estate and you have not placed this notice, you may be personally liable for the debt. The notice costs around £80-150. Visit thegazette.co.uk to place it.',
  },
  {
    step: '10',
    title: 'Collect in all assets',
    desc: 'Once you hold the Grant of Probate, use it to close and collect all accounts. Send a sealed copy of the grant to each bank, the Land Registry (for property), the Share Registrar, and any other institution holding assets. Banks will transfer funds to the estate account. You should open a separate executor\'s bank account to hold estate funds during administration.',
  },
  {
    step: '11',
    title: 'Pay all debts and liabilities',
    desc: 'Before distributing anything to beneficiaries, you must pay all outstanding debts. The order of priority is: funeral expenses first, then secured debts (mortgages), then unsecured debts (credit cards, loans, utility bills), then any legacies in the will, and finally the residuary estate. If the estate is insolvent (more debts than assets), seek legal advice immediately as there are specific rules about the order in which creditors are paid.',
  },
  {
    step: '12',
    title: 'Prepare estate accounts',
    desc: 'You must prepare a full set of estate accounts showing all assets collected, all payments made, and what is left to distribute. These accounts should be approved and signed by all residuary beneficiaries before final distribution. Keep records of all receipts and payments. The accounts protect you if any beneficiary later questions how the estate was handled.',
  },
  {
    step: '13',
    title: 'Distribute to beneficiaries',
    desc: 'Once accounts are approved and all debts paid, you can distribute the estate according to the will. Pay specific legacies (gifts of particular items or sums) first, then distribute the residuary estate (what is left after legacies, debts, and expenses) to the residuary beneficiaries. Get a signed receipt from each beneficiary. Keep a copy of all receipts and correspondence for at least 12 years.',
  },
];

const FAQ = [
  {
    q: 'Can I refuse to be an executor?',
    a: 'Yes. You do not have to act as executor just because someone named you in their will. You can give up the role by completing a "renunciation" form before you have done anything to administer the estate. Once you have started acting as executor, renunciation is more complicated and requires court permission. If you wish to step down, speak to a solicitor before doing anything at all.',
  },
  {
    q: 'Can I be paid for being an executor?',
    a: 'Only if the will specifically says so. Most wills do not include an executor\'s payment clause, meaning you act for free. Professional executors (solicitors or trust companies named in the will) can charge fees. If you are also a beneficiary, you will inherit under the will but cannot charge separately for your time unless the will permits it.',
  },
  {
    q: 'Am I personally liable as executor?',
    a: 'Yes, to a degree. If you distribute the estate and a creditor later appears, you can be personally liable to pay them. This is exactly why placing a statutory notice in The London Gazette is so important: it limits your liability by giving creditors the chance to come forward before distribution. You are also liable for errors such as paying the wrong beneficiary or miscalculating inheritance tax.',
  },
  {
    q: 'What if beneficiaries dispute the will?',
    a: 'Try mediation first. Family disputes about wills are common and a professional mediator can often resolve them far more cheaply than court action. If a beneficiary believes the will is invalid (due to lack of capacity, undue influence, or fraud), they can challenge it through the courts. As executor, you must remain neutral and act in the interests of all beneficiaries equally.',
  },
  {
    q: 'How long does the whole process take?',
    a: 'Most estates are fully administered within 6 to 18 months. Simple estates with straightforward assets and no disputes can be done in 6 months. Complex estates with property, business interests, overseas assets, or disputes can take 2 years or more. The probate application itself currently takes 12-16 weeks to process.',
  },
  {
    q: 'Can I hire a solicitor to help me?',
    a: 'Yes, and for complex estates it is often worth doing so. Any solicitor\'s fees come out of the estate before distribution, not from your own pocket. You can instruct a solicitor for the whole process or just for specific parts, such as completing the IHT forms or dealing with a property sale. Get quotes from at least two firms before committing.',
  },
  {
    q: 'What if there is no will?',
    a: 'If the person died without a will (intestate), there is no executor. Instead, the closest relative applies for Letters of Administration and becomes the administrator. The estate is then distributed according to the intestacy rules, not according to any wishes the person may have expressed informally. The rules are strict: unmarried partners, for example, receive nothing under intestacy.',
  },
  {
    q: 'What taxes need to be filed?',
    a: 'As executor you must file a final Self Assessment tax return for the deceased (covering April to the date of death) and pay any outstanding income tax. If the estate earns income during administration (rent, interest, dividends), you must file an estate tax return and pay income tax on that income. Inheritance tax must be paid within 6 months of death. Speak to an accountant or HMRC if you are unsure.',
  },
];

export default function ExecutorDutiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Executor Duties: A Complete Guide' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Executor Duties: A Complete Guide
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Being named as an executor is a significant responsibility. You have a legal duty to administer the estate correctly and protect the interests of all beneficiaries. This guide walks you through every step, in the right order, so nothing important is missed.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">13 steps</p>
          <p className="text-sm text-muted mt-1">From locating the will to final distribution</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">6-18 months</p>
          <p className="text-sm text-muted mt-1">Typical time to administer an estate</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£300</p>
          <p className="text-sm text-muted mt-1">Probate court fee (estates over £5,000)</p>
        </div>
      </div>

      {/* Important warning */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Important:</strong> As executor you have personal legal liability. This means if you make a mistake, such as distributing the estate before paying all debts, you may have to pay from your own money. Read this guide carefully and seek professional advice if anything is unclear.
        </p>
      </div>

      {/* Step by step */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Your duties, step by step</h2>
      <div className="space-y-4 mb-12">
        {STEPS.map(s => (
          <div key={s.step} className="bg-card rounded-xl border border-border p-6 flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {s.step}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Statutory notice callout */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-12">
        <h3 className="font-semibold text-amber-800 mb-2">The London Gazette notice: why it matters</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          Many executors skip the statutory notice because it seems like extra work. This is a mistake. If an unknown creditor appears after you have distributed the estate and you did not place the notice, you can be personally liable for their debt. The notice costs around £80-150 and gives creditors two months to come forward. Once that window closes, your liability is significantly limited.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about executor duties</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Related links */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Related guidance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <Link href="/probate" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Probate Guide</h3>
          <p className="text-sm text-muted leading-relaxed">Full guidance on applying for Grant of Probate, costs, and DIY vs solicitor</p>
        </Link>
        <Link href="/template-letters" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Template Letters</h3>
          <p className="text-sm text-muted leading-relaxed">Ready-to-use letters for banks, HMRC, insurers, pension providers, and more</p>
        </Link>
        <Link href="/costs" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Costs Breakdown</h3>
          <p className="text-sm text-muted leading-relaxed">What probate, solicitors, and estate administration actually costs</p>
        </Link>
        <Link href="/intestacy" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Dying Without a Will</h3>
          <p className="text-sm text-muted leading-relaxed">What happens when there is no will and how intestacy rules work</p>
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/executor-duties" guides={['/probate', '/template-letters', '/costs', '/intestacy']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised estate checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist of exactly what needs to be done for this particular estate.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
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
              { '@type': 'ListItem', position: 3, name: 'Executor Duties', item: 'https://helpafterloss.co.uk/guides/executor-duties' },
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
            headline: 'Executor Duties: A Complete Step-by-Step Guide',
            description: 'Everything an executor needs to do, in the right order, from locating the will to distributing assets.',
            url: 'https://helpafterloss.co.uk/guides/executor-duties',
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
