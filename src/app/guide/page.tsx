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
        content: 'A doctor needs to confirm the death and issue the MCCD. If your loved one died at home, call their GP surgery. If they were in hospital, the hospital will arrange it for you. If the death was sudden or unexplained, it may be referred to a coroner (or the Procurator Fiscal in Scotland), which can take a little longer.',
      },
      {
        title: 'Make their home secure',
        content: 'If they lived on their own, lock the property up, check the heating is on so the pipes do not freeze in winter, and clear out any food that will spoil. Let a trusted neighbour know if that feels right. Collect the post, and move anything valuable out of sight of the windows.',
      },
      {
        title: 'Find the will',
        content: 'Have a look at home, and ask their solicitor or their bank. You can also search the National Will Register (nationalwillregister.co.uk, around £30). A will often sets out funeral wishes and names the executor. If you cannot find one, please try not to worry. Many estates are dealt with under the intestacy rules.',
      },
      {
        title: 'Tell close family and friends',
        content: 'You do not have to do this on your own. Ask someone you trust to help you share the news. It can help to agree who will contact their workplace, their neighbours, and the wider circle. You can decide later whether you would like to place a notice in a newspaper.',
      },
      {
        title: 'Contact a funeral director (if needed)',
        content: 'If your loved one died at home and you would like them to be moved, a funeral director can collect them at any time of the day or night. You do not need to have chosen who will handle the funeral yet; most will carry out this first collection for you. There is no rush at all to decide on the arrangements.',
      },
    ],
  },
  {
    id: 'registration',
    title: 'Register the death (within 5 days)',
    tasks: [
      {
        title: 'Book an appointment at the register office',
        content: 'You register at the register office for the area where they died. In England and Wales this must be done within 5 days. In Scotland, within 8 days. Take the MCCD with you, along with their full name, date of birth, last address, occupation, NHS number (if you know it), and their marriage or civil partnership certificate if there is one. The registrar will give you a green "certificate for burial or cremation", which the funeral director will need.',
      },
      {
        title: 'Order death certificate copies',
        content: 'It is worth ordering at least 5 certified copies (£12.50 each in England and Wales, £15 in Scotland). Banks, insurers, pension providers, and solicitors each need an original. Extra copies cost more if you order them later, so it is better to have a few too many than too few. If there were several bank accounts, investments, and insurance policies, 8 to 10 copies is not unusual.',
      },
      {
        title: 'Use Tell Us Once',
        content: 'The registrar will give you a Tell Us Once reference number. This one service notifies the DWP (benefits), HMRC, DVLA, the Passport Office, your local council, and public sector pensions, so you do not have to contact them all separately. Use it within 28 days. It is not available in Northern Ireland. You can use it online at gov.uk/tell-us-once or by phone on 0800 085 7308.',
      },
    ],
  },
  {
    id: 'funeral',
    title: 'Arrange the funeral (first 2 weeks)',
    tasks: [
      {
        title: 'Choose a funeral director',
        content: 'Take your time, and ask for itemised quotes from at least 3 funeral directors. Prices vary a great deal between providers. You are entitled to see a price list, and you do not have to use the funeral director the hospital suggests. All funeral directors must comply with the Funeral Director Compliance Scheme.',
      },
      {
        title: 'Consider your options',
        content: 'Traditional burial averages around £5,400, cremation with a service around £4,200, and direct cremation from around £1,600. A direct cremation is the gentlest on the budget, with no ceremony at the crematorium, and you can still hold a memorial of your own later, whenever feels right. Green burials and woodland burials are becoming more popular too.',
      },
      {
        title: 'Check for financial help with funeral costs',
        content: 'If you receive means-tested benefits, you may be able to get a Funeral Expenses Payment from the DWP (up to £1,000 for extras, plus burial or cremation fees). Call 0800 151 2012 to apply. If they were under 18, the Children\'s Funeral Fund covers the costs in England. Some trade unions, employers, and charities help with funeral costs as well, so it is always worth asking.',
      },
      {
        title: 'Think about what they would have wanted',
        content: 'Have a look at the will, any pre-paid funeral plan, letters, or conversations you remember about their preferences. They may have had views on burial or cremation, a religious or secular service, particular music, or a certain place. If nothing was written down, choose whatever feels right for you and your family.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial tasks (first month)',
    tasks: [
      {
        title: 'Notify banks and building societies',
        content: 'You can contact each bank yourself, or use the free Death Notification Service (deathnotificationservice.co.uk) to tell several banks at once and save yourself the repeat calls. Accounts in their sole name will be frozen. Banks will usually release money for funeral costs before probate is granted. Joint accounts normally carry on as usual for the surviving account holder.',
      },
      {
        title: 'Check for life insurance',
        content: 'Have a look through paperwork, emails, and bank statements for any life insurance policies. Contact the insurer with the death certificate. If a policy was written in trust, it pays out directly to the beneficiary without waiting for probate. It is also worth asking their employer about any death-in-service benefits.',
      },
      {
        title: 'Notify pension providers',
        content: 'Get in touch with any state, workplace, and private pension providers. There may be a survivor\'s pension, a lump sum death benefit, or remaining guaranteed payments due to you. For the State Pension, contact the Pension Service on 0800 731 0469. If you think a pension has been lost track of, the Pension Tracing Service at gov.uk/find-pension-contact-details can help you find it.',
      },
      {
        title: 'Apply for Bereavement Support Payment',
        content: 'If your spouse or civil partner died and you are under State Pension age: higher rate (with children) gives £3,500 lump sum plus £350/month for 18 months. Standard rate: £2,500 plus £100/month. Claim within 3 months for full backdating. You can claim by calling 0800 151 2012 or online at gov.uk.',
      },
      {
        title: 'Redirect post',
        content: 'Setting up Royal Mail post redirection from their address to yours costs £37 for 3 months, £52 for 6 months, or £73 for 12 months. It is one of the most useful things you can do, because it catches letters from organisations you may not know about, including insurance policies, investments, and subscriptions.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal and probate (within 3 months)',
    tasks: [
      {
        title: 'Apply for probate',
        content: 'Probate (a Grant of Probate if there is a will, or Letters of Administration if there is not) gives you the legal right to deal with the estate. You value the estate, complete an inheritance tax form, and submit the application. The court fee is £526 for estates over £5,000, and processing takes around 12-16 weeks. You can apply online at gov.uk/applying-for-probate.',
      },
      {
        title: 'Check inheritance tax',
        content: 'Inheritance tax is charged at 40% on the estate above £325,000 (nil-rate band). There is an additional £175,000 if the home passes to children/grandchildren. Spouses can transfer unused allowance, giving up to £1 million combined. IHT must be paid within 6 months of death. You can pay in instalments for property.',
      },
      {
        title: 'Place statutory notices',
        content: 'Placing a notice in The London Gazette (and a local newspaper) protects you personally from debts nobody knew about. It costs around £80-£150 and gives creditors 2 months to come forward, so wait at least 2 months before sharing out any assets. It is not strictly compulsory, but we would strongly encourage it.',
      },
    ],
  },
  {
    id: 'property',
    title: 'Property and ongoing matters',
    tasks: [
      {
        title: 'Check home insurance urgently',
        content: 'This one is worth doing sooner rather than later, as many policies become void after 30 days if the property is empty. Let the insurer know what has happened. You may need specialist unoccupied property insurance, which costs around £200-£500 per year. It also helps to keep visiting the property regularly.',
      },
      {
        title: 'Apply for council tax exemption',
        content: 'An empty property is exempt from council tax from the date of death until probate is granted, and for 6 months after that. Ring the local council to apply. They will ask for a copy of the death certificate.',
      },
      {
        title: 'Cancel subscriptions and direct debits',
        content: 'Bank statements are the easiest place to spot regular payments: TV licence, phone, broadband, streaming services, gym, insurance, charity donations, breakdown cover. You may be owed refunds for anything paid in advance. Keep a simple list of what you have cancelled and when, so you do not have to hold it all in your head.',
      },
      {
        title: 'Deal with digital accounts',
        content: 'Facebook and Instagram accounts can be memorialised so friends can still visit them, or closed altogether, whichever feels right. Google has an Inactive Account Manager. Do cancel any paid subscriptions. Every platform works a little differently, and our digital legacy guide walks through each of the main ones.',
      },
      {
        title: 'Decide what happens to the property in the longer term',
        content: 'If they owned their home, it will need to be valued for probate. In time you will need to decide whether to sell it, transfer it to a beneficiary, or let it out. An estate agent can give you a current valuation. The property may be exempt from capital gains tax if it is sold within a reasonable time. There is no need to decide any of this quickly.',
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
    a: 'Order at least 5 certified copies when you register the death. Each bank, insurer, and pension provider will need an original. If they had a lot of accounts and policies, you may need 8 to 10. Extra copies cost more if you order them later.',
  },
  {
    q: 'What is Tell Us Once and who does it notify?',
    a: 'Tell Us Once is a free government service that notifies multiple departments about a death in one step. It covers the DWP, HMRC, DVLA, Passport Office, local council services, and public sector pension schemes. It does not cover banks, insurers, or utility companies. It is available in England, Wales, and Scotland but not Northern Ireland.',
  },
  {
    q: 'Do I need to pay for the funeral upfront?',
    a: 'Most funeral directors will wait for payment until after the funeral. If you are on means-tested benefits, you can apply for a Funeral Expenses Payment from the DWP to help cover costs. Some funeral directors also offer payment plans. Banks will often release funds from their account specifically for funeral costs, even before probate.',
  },
  {
    q: 'How much does a funeral cost in the UK?',
    a: 'A cremation with a service averages around £4,200 and a burial around £5,400. Direct cremation (with no service) starts from around £1,600 and is the most affordable option. Prices vary significantly by region and provider, so always get at least three quotes.',
  },
  {
    q: 'Do I need probate?',
    a: 'You usually need probate if they owned property in their sole name, had savings above the bank\'s threshold (typically £5,000-£50,000), or had investments. You usually do not need probate if everything was jointly owned, as it passes automatically to the surviving owner.',
  },
  {
    q: 'Can I arrange the funeral before registering the death?',
    a: 'Yes, you can begin making arrangements with a funeral director before registering the death. However, the burial or cremation cannot take place until registration is complete and you have the green certificate (or the coroner has issued the relevant paperwork).',
  },
  {
    q: 'What benefits can I claim after my spouse dies?',
    a: 'If your spouse or civil partner died and you are under State Pension age, you can claim Bereavement Support Payment: £3,500 lump sum plus £350/month for 18 months if you have children, or £2,500 plus £100/month without children. Claim within 3 months and you get the lump sum and all 18 monthly payments; leave it past 12 months and the lump sum is lost entirely. You may also be entitled to other means-tested benefits.',
  },
];

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What to Do When Someone Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        We are very sorry for your loss. This guide takes you gently through what needs doing, from the first 24 hours to the first year, so you never have to wonder what comes next. It covers the UK generally and is updated for 2026. If you would like a checklist built around your own circumstances, our free tool can do that for you.
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
          <p className="text-xl font-bold text-primary">£526</p>
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
          The process is a little different depending on where your loved one died. This guide covers England and Wales. If you need guidance for elsewhere in the UK:
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
          We have step-by-step guides for cities across the UK, with local registrar details, council contacts, and information for your area.
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
        <p className="text-muted mb-6">Answer a few gentle questions and we will put together a checklist just for you, with the deadlines and costs that actually apply.</p>
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
