import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PageDisclaimer } from '@/components/PageDisclaimer';
import { FreeChecklistBanner } from '@/components/FreeChecklistBanner';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies - Complete UK Step-by-Step Guide (2026)',
  description: 'Free step-by-step guide to everything you need to do when someone dies in the UK. Covers the first 24 hours, registering the death, funerals, probate, finances, benefits, and property. Updated for 2026.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guide' },
  openGraph: {
    title: 'What to Do When Someone Dies - Complete UK Step-by-Step Guide (2026)',
    description: 'Free step-by-step guide covering registration, funerals, probate, finances, benefits, and more after a death in the UK. Updated for 2026.',
    url: 'https://helpafterloss.co.uk/guide',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Do When Someone Dies in the UK - Full Guide',
    description: 'Everything you need to do after a death, from the first 24 hours to the first year. Free, practical, updated for 2026.',
  },
};

const SECTIONS = [
  {
    id: 'first-24-hours',
    title: 'The first 24 hours',
    tasks: [
      {
        title: 'Get the Medical Certificate of Cause of Death (MCCD)',
        content: 'A doctor must verify the death and issue the MCCD. If the death happened at home, call the GP surgery. If in hospital, the hospital will arrange this. If the death was sudden or unexplained, it may be referred to a coroner (or Procurator Fiscal in Scotland), which can delay the process.',
      },
      {
        title: 'Secure the person\'s home',
        content: 'If they lived alone, lock the property, check heating is on (to prevent frozen pipes in winter), and remove perishable food. Let neighbours know if appropriate. Check the letterbox for post and remove anything visible through windows that might attract burglars.',
      },
      {
        title: 'Find the will',
        content: 'Check at home, with their solicitor, their bank, or search the National Will Register (nationalwillregister.co.uk, costs around £30). The will may contain funeral wishes and names the executor. If you cannot find a will, do not panic. Many estates are dealt with under intestacy rules.',
      },
      {
        title: 'Tell close family and friends',
        content: 'You do not have to do this alone. Ask someone to help you share the news. If appropriate, agree who will contact the person\'s workplace, neighbours, and wider circle. Consider whether you want to place a newspaper notice later.',
      },
      {
        title: 'Contact a funeral director (if needed)',
        content: 'If the death occurred at home and you would like the person to be moved, a funeral director can collect them at any time. You do not need to have chosen a funeral director for this step; most will provide the initial collection service. There is no rush to decide on funeral arrangements.',
      },
    ],
  },
  {
    id: 'registration',
    title: 'Register the death (within 5 days)',
    tasks: [
      {
        title: 'Book an appointment at the register office',
        content: 'Register at the register office in the area where the person died. In England and Wales this must be done within 5 days. In Scotland, within 8 days. You will need the MCCD, the person\'s full name, date of birth, last address, occupation, NHS number (if known), and marriage or civil partnership certificate (if applicable). The registrar will issue a green "certificate for burial or cremation" which the funeral director needs.',
      },
      {
        title: 'Order death certificate copies',
        content: 'Order at least 5 certified copies (£12.50 each in England, £11 in Wales, £15 in Scotland). Banks, insurers, pension providers, and solicitors all need an original. It costs more to order extras later. Some people need 8 to 10 copies if the person had multiple bank accounts, investments, and insurance policies.',
      },
      {
        title: 'Use Tell Us Once',
        content: 'The registrar will give you a Tell Us Once reference number. This single service notifies the DWP (benefits), HMRC, DVLA, Passport Office, local council, and public sector pensions. Use it within 28 days. It is not available in Northern Ireland. You can use it online at gov.uk/tell-us-once or by phone on 0800 085 7308.',
      },
    ],
  },
  {
    id: 'funeral',
    title: 'Arrange the funeral (first 2 weeks)',
    tasks: [
      {
        title: 'Choose a funeral director',
        content: 'Shop around and ask for itemised quotes from at least 3 funeral directors. Costs vary significantly between providers. You are entitled to see a price list. You do not have to use the funeral director suggested by the hospital. All funeral directors must comply with the Funeral Director Compliance Scheme.',
      },
      {
        title: 'Consider your options',
        content: 'Traditional burial averages around £5,400, cremation with a service around £4,200, and direct cremation from around £1,600. A direct cremation is the most affordable option, with no ceremony at the crematorium. You can hold a separate memorial later. Green burials and woodland burials are also growing in popularity.',
      },
      {
        title: 'Check for financial help with funeral costs',
        content: 'If you receive means-tested benefits, you may be able to get a Funeral Expenses Payment from the DWP (up to £1,000 for extras, plus burial/cremation fees). Call 0800 731 0469 to apply. If the person was under 18, the Children\'s Funeral Fund covers costs in England. Some trade unions, employers, and charities also offer help with funeral costs.',
      },
      {
        title: 'Consider the person\'s wishes',
        content: 'Check the will, any pre-paid funeral plans, letters, or conversations about their preferences. They may have specified burial or cremation, a religious or secular service, specific music, or a particular location. If there are no recorded wishes, choose what feels right for the family.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial tasks (first month)',
    tasks: [
      {
        title: 'Notify banks and building societies',
        content: 'Contact each bank individually, or use the free Death Notification Service (deathnotificationservice.co.uk) to notify multiple banks at once. Sole accounts will be frozen. Banks will usually release money for funeral costs before probate is granted. Joint accounts normally continue to operate for the surviving account holder.',
      },
      {
        title: 'Check for life insurance',
        content: 'Look through paperwork, emails, and bank statements for any life insurance policies. Contact the insurer with the death certificate. If written in trust, it pays out directly to the beneficiary without waiting for probate. Also check for death-in-service benefits through the person\'s employer.',
      },
      {
        title: 'Notify pension providers',
        content: 'Contact state, workplace, and private pension providers. There may be a survivor\'s pension, a lump sum death benefit, or remaining guaranteed payments. For the State Pension, contact the Pension Service on 0800 731 0469. Use the Pension Tracing Service at gov.uk/find-pension-contact-details to find lost pensions.',
      },
      {
        title: 'Apply for Bereavement Support Payment',
        content: 'If your spouse or civil partner died and you are under State Pension age: higher rate (with children) gives £3,500 lump sum plus £350/month for 18 months. Standard rate: £2,500 plus £100/month. Claim within 3 months for full backdating. You can claim by calling 0800 731 0469 or online at gov.uk.',
      },
      {
        title: 'Redirect post',
        content: 'Set up Royal Mail post redirection from the person\'s address to yours (costs £37 for 3 months, £52 for 6 months, £73 for 12 months). This helps you catch correspondence from organisations you may not know about, including insurance policies, investments, and subscriptions.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal and probate (within 3 months)',
    tasks: [
      {
        title: 'Apply for probate',
        content: 'Probate (Grant of Probate if there is a will, Letters of Administration if not) gives you the legal right to deal with the estate. You need to value the estate, complete an inheritance tax form, and submit the application. The court fee is £300 for estates over £5,000. Processing takes around 12-16 weeks. You can apply online at gov.uk/applying-for-probate.',
      },
      {
        title: 'Check inheritance tax',
        content: 'Inheritance tax is charged at 40% on the estate above £325,000 (nil-rate band). There is an additional £175,000 if the home passes to children/grandchildren. Spouses can transfer unused allowance, giving up to £1 million combined. IHT must be paid within 6 months of death. You can pay in instalments for property.',
      },
      {
        title: 'Place statutory notices',
        content: 'Place a notice in The London Gazette (and a local newspaper) to protect yourself from liability for unknown debts. This costs around £80-£150 and gives creditors 2 months to come forward. Wait at least 2 months before distributing assets. This step is strongly recommended even though it is not strictly mandatory.',
      },
    ],
  },
  {
    id: 'property',
    title: 'Property and ongoing matters',
    tasks: [
      {
        title: 'Check home insurance urgently',
        content: 'Many policies become void after 30 days if the property is empty. Contact the insurer urgently to let them know. You may need specialist unoccupied property insurance, which costs around £200-£500 per year. Continue visiting the property regularly.',
      },
      {
        title: 'Apply for council tax exemption',
        content: 'An empty property is exempt from council tax from the date of death until probate is granted, and for 6 months after that. Contact the local council to apply. You will need a copy of the death certificate.',
      },
      {
        title: 'Cancel subscriptions and direct debits',
        content: 'Check bank statements for regular payments: TV licence, phone, broadband, streaming services, gym, insurance, charity donations, breakdown cover. You may be entitled to refunds for advance payments. Keep a list of what you cancel and when.',
      },
      {
        title: 'Deal with digital accounts',
        content: 'Facebook and Instagram can be memorialised or deleted. Google has an Inactive Account Manager. Cancel paid subscriptions. Each platform has its own process. Our digital legacy guide has step-by-step instructions for every major platform.',
      },
      {
        title: 'Consider the long-term plan for property',
        content: 'If the person owned their home, it will need to be valued for probate. You may need to decide whether to sell, transfer to a beneficiary, or rent it out. Speak to an estate agent for a current valuation. The property may be exempt from capital gains tax if sold within a reasonable time.',
      },
    ],
  },
];

const FAQ = [
  {
    q: 'How long do I have to register a death in the UK?',
    a: 'In England and Wales, you must register the death within 5 days. In Scotland, within 8 days. In Northern Ireland, within 5 days. If the death has been referred to a coroner, registration may be delayed until their investigation is complete.',
  },
  {
    q: 'How many death certificates do I need?',
    a: 'Order at least 5 certified copies when you register the death. Each bank, insurer, and pension provider will need an original. If the person had many accounts and policies, you may need 8 to 10. Extra copies cost more if ordered later.',
  },
  {
    q: 'What is Tell Us Once and who does it notify?',
    a: 'Tell Us Once is a free government service that notifies multiple departments about a death in one step. It covers the DWP, HMRC, DVLA, Passport Office, local council services, and public sector pension schemes. It does not cover banks, insurers, or utility companies. It is available in England, Wales, and Scotland but not Northern Ireland.',
  },
  {
    q: 'Do I need to pay for the funeral upfront?',
    a: 'Most funeral directors will wait for payment until after the funeral. If you are on means-tested benefits, you can apply for a Funeral Expenses Payment from the DWP to help cover costs. Some funeral directors also offer payment plans. Banks will often release funds from the deceased person\'s account specifically for funeral costs, even before probate.',
  },
  {
    q: 'How much does a funeral cost in the UK?',
    a: 'A cremation with a service averages around £4,200 and a burial around £5,400. Direct cremation (with no service) starts from around £1,600 and is the most affordable option. Prices vary significantly by region and provider, so always get at least three quotes.',
  },
  {
    q: 'Do I need probate?',
    a: 'You usually need probate if the person owned property in their sole name, had savings above the bank\'s threshold (typically £5,000-£50,000), or had investments. You usually do not need probate if all assets were jointly owned, as they pass automatically to the surviving owner.',
  },
  {
    q: 'Can I arrange the funeral before registering the death?',
    a: 'Yes, you can begin making arrangements with a funeral director before registering the death. However, the burial or cremation cannot take place until registration is complete and you have the green certificate (or the coroner has issued the relevant paperwork).',
  },
  {
    q: 'What benefits can I claim after my spouse dies?',
    a: 'If your spouse or civil partner died and you are under State Pension age, you can claim Bereavement Support Payment: £3,500 lump sum plus £350/month for 18 months if you have children, or £2,500 plus £100/month without children. Claim within 3 months for full backdating. You may also be entitled to Widowed Parent\'s Allowance or other means-tested benefits.',
  },
];

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What to Do When Someone Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        A complete step-by-step guide covering everything from the first 24 hours through to the first year. This is a general guide for the UK, updated for 2026. For a checklist personalised to your exact situation, use our free tool.
      </p>
      <Link
        href="/start"
        className="inline-block mb-8 px-6 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-base"
      >
        Get Your Personalised Guide
      </Link>

      {/* Key facts summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">5 days</p>
          <p className="text-xs text-muted mt-1">To register (Eng/Wales)</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">£12.50</p>
          <p className="text-xs text-muted mt-1">Per death certificate</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">£300</p>
          <p className="text-xs text-muted mt-1">Probate court fee</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 text-center">
          <p className="text-xl font-bold text-primary">28 days</p>
          <p className="text-xs text-muted mt-1">Tell Us Once deadline</p>
        </div>
      </div>

      {/* Nation-specific guides */}
      <div className="bg-card rounded-xl border border-border p-5 md:p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-3">In Scotland or Northern Ireland?</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          The process differs depending on where the death occurred. This guide covers England and Wales. For nation-specific guidance, see:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/guide/scotland" className="flex-1 bg-primary-light rounded-lg p-4 hover:bg-primary/10 transition-colors group">
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Scotland</p>
            <p className="text-xs text-muted mt-1">8-day registration, Procurator Fiscal, Confirmation, legal rights</p>
          </Link>
          <Link href="/guide/northern-ireland" className="flex-1 bg-primary-light rounded-lg p-4 hover:bg-primary/10 transition-colors group">
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Northern Ireland</p>
            <p className="text-xs text-muted mt-1">No Tell Us Once, Belfast Probate Office, different fees and rules</p>
          </Link>
        </div>
      </div>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-5 md:p-6 mb-10" aria-label="Guide sections">
        <h2 className="font-semibold text-foreground mb-3">In this guide</h2>
        <ul className="space-y-2.5">
          {SECTIONS.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-primary hover:underline text-sm md:text-base py-1 inline-block">{s.title}</a>
            </li>
          ))}
          <li>
            <a href="#faq" className="text-primary hover:underline text-sm md:text-base py-1 inline-block">Common questions</a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      {SECTIONS.map((section, sIndex) => (
        <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
          <div className="space-y-5">
            {section.tasks.map((task, tIndex) => (
              <div key={tIndex} className="bg-card rounded-xl border border-border p-5 md:p-6">
                <h3 className="font-semibold text-foreground mb-2 text-base">{task.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{task.content}</p>
              </div>
            ))}
          </div>

          {/* Cross-links after registration section */}
          {sIndex === 1 && (
            <>
              <div className="bg-primary-light rounded-xl p-5 mt-6">
                <p className="text-sm text-foreground leading-relaxed">
                  Need to write to banks, utility companies, or HMRC? Our <Link href="/template-letters" className="text-primary font-medium hover:underline">ready-to-use template letters</Link> save you time and make sure you include everything they need.
                </p>
              </div>
              <div className="bg-primary-light rounded-lg p-4 my-4">
                <p className="text-sm text-foreground">
                  <strong>Related:</strong> Learn how <Link href="/tell-us-once" className="text-primary hover:underline">Tell Us Once</Link> notifies most government departments for you. You can also <Link href="/guides" className="text-primary hover:underline">find your local register office</Link> or browse <Link href="/counties" className="text-primary hover:underline">county-level guides</Link> for region-specific information.
                </p>
              </div>
            </>
          )}

          {/* Cultural guidance link after funeral section */}
          {sIndex === 2 && (
            <>
              <div className="bg-primary-light rounded-xl p-5 mt-6">
                <p className="text-sm text-foreground leading-relaxed">
                  If faith or cultural traditions are important for the funeral arrangements, see our <Link href="/cultural-guide" className="text-primary font-medium hover:underline">cultural and religious funeral guide</Link> covering Muslim, Jewish, Hindu, Sikh, Buddhist, and Christian practices in the UK.
                </p>
              </div>
              <div className="bg-warm border border-warm-border rounded-xl p-5 mt-4">
                <p className="text-sm text-amber-800 leading-relaxed">
                  Take a moment. You are doing an incredible job at a very difficult time. If any of this feels overwhelming, call Cruse Bereavement Support on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a> (free, Monday to Friday).
                </p>
              </div>
              <div className="bg-primary-light rounded-lg p-4 my-4">
                <p className="text-sm text-foreground">
                  <strong>Related:</strong> Compare <Link href="/guides/funeral-options" className="text-primary hover:underline">all funeral types</Link> (burial, cremation, direct, green, woodland), see the <Link href="/costs" className="text-primary hover:underline">full cost breakdown</Link>, or read about <Link href="/blog/free-funeral-options-uk" className="text-primary hover:underline">free funeral options</Link> if money is tight.
                </p>
              </div>
            </>
          )}

          {/* Template letters link after financial section */}
          {sIndex === 3 && (
            <>
              <div className="bg-primary-light rounded-xl p-5 mt-6">
                <p className="text-sm text-foreground leading-relaxed">
                  We have <Link href="/template-letters" className="text-primary font-medium hover:underline">template letters</Link> you can use to notify banks, utility companies, HMRC, employers, insurers, and the DVLA.
                </p>
              </div>
              <div className="bg-primary-light rounded-lg p-4 my-4">
                <p className="text-sm text-foreground">
                  <strong>Related:</strong> See our detailed guide to <Link href="/guides/bank-accounts-after-death" className="text-primary hover:underline">dealing with bank accounts after a death</Link>, tips for <Link href="/guides/finding-accounts-after-death" className="text-primary hover:underline">finding accounts you may not know about</Link>, and our <Link href="/notify" className="text-primary hover:underline">full list of organisations to notify</Link>. You may also qualify for <Link href="/guides/bereavement-benefits" className="text-primary hover:underline">bereavement benefits</Link>.
                </p>
              </div>
            </>
          )}

          {/* Cross-links after legal section */}
          {sIndex === 4 && (
            <div className="bg-primary-light rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Related:</strong> Read our full <Link href="/probate" className="text-primary hover:underline">probate guide</Link> for step-by-step instructions, or learn about <Link href="/guides/executor-duties" className="text-primary hover:underline">executor duties</Link> and <Link href="/guides/inheritance-tax" className="text-primary hover:underline">inheritance tax thresholds</Link>. If there is no will, see our <Link href="/intestacy" className="text-primary hover:underline">intestacy rules guide</Link>.
              </p>
            </div>
          )}

          {/* Cross-links after property section */}
          {sIndex === 5 && (
            <div className="bg-primary-light rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Related:</strong> See our guides on <Link href="/guides/property-after-death" className="text-primary hover:underline">dealing with property after a death</Link>, <Link href="/guides/council-tax-after-death" className="text-primary hover:underline">council tax exemptions</Link>, and <Link href="/guides/subscriptions-after-death" className="text-primary hover:underline">cancelling subscriptions</Link>. For a full breakdown of expected expenses, see our <Link href="/costs" className="text-primary hover:underline">costs guide</Link>.
              </p>
            </div>
          )}
        </section>
      ))}

      {/* FAQ Section */}
      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Common questions</h2>
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <details key={i} className="bg-card rounded-xl border border-border group">
              <summary className="p-5 md:p-6 font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-4 hover:text-primary transition-colors">
                <span>{item.q}</span>
                <svg className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Local guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Find your local guide</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          We have step-by-step guides for cities across the UK with local registrar details, council contacts, and area-specific information.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { name: 'London', slug: 'london-westminster' },
            { name: 'Birmingham', slug: 'birmingham' },
            { name: 'Manchester', slug: 'manchester' },
            { name: 'Edinburgh', slug: 'edinburgh' },
            { name: 'Cardiff', slug: 'cardiff' },
            { name: 'Belfast', slug: 'belfast' },
          ].map(city => (
            <Link key={city.slug} href={`/guides/${city.slug}`} className="bg-card rounded-lg border border-border p-3 hover:border-primary transition-colors text-center">
              <p className="text-sm font-medium text-foreground">{city.name}</p>
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted mt-3">
          <Link href="/guides" className="text-primary hover:underline">View all local guides</Link>
        </p>
      </section>

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-6 md:p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Want a guide specific to your situation?</h2>
        <p className="text-muted mb-6">Answer a few questions and get a personalised checklist with real deadlines and costs.</p>
        <Link
          href="/start"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Get Your Personalised Guide
        </Link>
        <p className="text-sm text-muted mt-3">Free. No sign-up required. Takes about 3 minutes.</p>
      </div>

      <PageDisclaimer lastReviewed="March 2026" jurisdiction="all-uk" />

      <FreeChecklistBanner variant="bottom" />
      <RelatedGuides currentPath="/guide" guides={['/checklist', '/template-letters', '/deadline-tracker', '/print-checklist']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'What to Do When Someone Dies in the UK',
            description: 'A complete step-by-step guide to everything you need to do when someone dies in the UK, from the first 24 hours through registration, funerals, probate, and finances.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-20',
            author: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
            step: SECTIONS.flatMap(s => s.tasks.map(t => ({
              '@type': 'HowToStep',
              name: t.title,
              text: t.content,
            }))),
          }),
        }}
      />
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
              { '@type': 'ListItem', position: 2, name: 'Step-by-Step Guide', item: 'https://helpafterloss.co.uk/guide' },
            ],
          }),
        }}
      />
    </div>
  );
}
