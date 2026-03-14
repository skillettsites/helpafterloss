import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies - Step-by-Step Guide',
  description: 'A complete step-by-step guide to everything you need to do when someone dies in the UK. From the first 24 hours through to the first year, covering registration, funerals, probate, finances, and more.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guide' },
  openGraph: {
    title: 'What to Do When Someone Dies - Step-by-Step Guide',
    description: 'A complete step-by-step guide covering registration, funerals, probate, finances, and more after a death in the UK.',
    url: 'https://helpafterloss.co.uk/guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Do When Someone Dies - Step-by-Step Guide',
    description: 'A complete step-by-step guide covering registration, funerals, probate, finances, and more.',
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
        content: 'If they lived alone, lock the property, check heating is on (to prevent frozen pipes in winter), and remove perishable food. Let neighbours know if appropriate.',
      },
      {
        title: 'Find the will',
        content: 'Check at home, with their solicitor, their bank, or search the National Will Register. The will may contain funeral wishes and names the executor.',
      },
      {
        title: 'Tell close family and friends',
        content: 'You do not have to do this alone. Ask someone to help you share the news.',
      },
    ],
  },
  {
    id: 'registration',
    title: 'Register the death (within 5 days)',
    tasks: [
      {
        title: 'Book an appointment at the register office',
        content: 'Register at the register office in the area where the person died. In England and Wales this must be done within 5 days. In Scotland, within 8 days. You will need the MCCD, the person\'s full name, date of birth, last address, occupation, NHS number (if known), and marriage or civil partnership certificate (if applicable).',
      },
      {
        title: 'Order death certificate copies',
        content: 'Order at least 5 certified copies (£12.50 each in England, £11 in Wales, £15 in Scotland). Banks, insurers, pension providers, and solicitors all need an original. It costs more to order extras later.',
      },
      {
        title: 'Use Tell Us Once',
        content: 'The registrar will give you a Tell Us Once reference number. This single service notifies the DWP (benefits), HMRC, DVLA, Passport Office, local council, and public sector pensions. Use it within 28 days. It is not available in Northern Ireland.',
      },
    ],
  },
  {
    id: 'funeral',
    title: 'Arrange the funeral (first 2 weeks)',
    tasks: [
      {
        title: 'Choose a funeral director',
        content: 'Shop around and ask for itemised quotes. Costs vary significantly between providers. You are entitled to see a price list. You do not have to use the funeral director suggested by the hospital.',
      },
      {
        title: 'Consider your options',
        content: 'Traditional burial averages around £5,400, cremation with a service around £4,200, and direct cremation from around £1,600. A direct cremation is the most affordable option, with no ceremony at the crematorium. You can hold a separate memorial later.',
      },
      {
        title: 'Check for financial help',
        content: 'If you receive means-tested benefits, you may be able to get a Funeral Expenses Payment from the DWP (up to £1,000 for extras, plus burial/cremation fees). If the person was under 18, the Children\'s Funeral Fund covers costs in England.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial tasks (first month)',
    tasks: [
      {
        title: 'Notify banks and building societies',
        content: 'Contact each bank individually, or use the free Death Notification Service (deathnotificationservice.co.uk) to notify multiple banks at once. Sole accounts will be frozen. Banks will usually release money for funeral costs before probate.',
      },
      {
        title: 'Check for life insurance',
        content: 'Look through paperwork, emails, and bank statements for any life insurance policies. Contact the insurer with the death certificate. If written in trust, it pays out directly to the beneficiary.',
      },
      {
        title: 'Notify pension providers',
        content: 'Contact state, workplace, and private pension providers. There may be a survivor\'s pension, a lump sum death benefit, or remaining guaranteed payments.',
      },
      {
        title: 'Apply for Bereavement Support Payment',
        content: 'If your spouse or civil partner died and you are under State Pension age: higher rate (with children) gives £3,500 lump sum plus £350/month for 18 months. Standard rate: £2,500 plus £100/month. Claim within 3 months for full backdating.',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal and probate (within 3 months)',
    tasks: [
      {
        title: 'Apply for probate',
        content: 'Probate (Grant of Probate if there is a will, Letters of Administration if not) gives you the legal right to deal with the estate. You need to value the estate, complete an inheritance tax form, and submit the application. The court fee is £300 for estates over £5,000. Processing takes around 12-16 weeks.',
      },
      {
        title: 'Check inheritance tax',
        content: 'Inheritance tax is charged at 40% on the estate above £325,000 (nil-rate band). There is an additional £175,000 if the home passes to children/grandchildren. Spouses can transfer unused allowance, giving up to £1 million combined. IHT must be paid within 6 months of death.',
      },
      {
        title: 'Place statutory notices',
        content: 'Place a notice in The London Gazette (and a local newspaper) to protect yourself from liability for unknown debts. Wait at least 2 months before distributing assets.',
      },
    ],
  },
  {
    id: 'property',
    title: 'Property and ongoing matters',
    tasks: [
      {
        title: 'Check home insurance',
        content: 'Many policies become void after 30 days if the property is empty. Contact the insurer urgently. You may need specialist unoccupied property insurance.',
      },
      {
        title: 'Apply for council tax exemption',
        content: 'An empty property is exempt from council tax from the date of death until probate is granted, and for 6 months after that.',
      },
      {
        title: 'Cancel subscriptions and direct debits',
        content: 'Check bank statements for regular payments: TV licence, phone, broadband, streaming services, gym, insurance, charity donations, breakdown cover.',
      },
      {
        title: 'Deal with digital accounts',
        content: 'Facebook and Instagram can be memorialised or deleted. Google has an Inactive Account Manager. Cancel paid subscriptions. Each platform has its own process.',
      },
    ],
  },
];

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What to Do When Someone Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        A complete step-by-step guide covering everything from the first 24 hours through to the first year. This is a general guide. For a checklist personalised to your exact situation, use our free tool.
      </p>
      <Link
        href="/start"
        className="inline-block mb-10 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
      >
        Get Your Personalised Guide
      </Link>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-6 mb-10" aria-label="Guide sections">
        <h2 className="font-semibold text-foreground mb-3">In this guide</h2>
        <ul className="space-y-2">
          {SECTIONS.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-primary hover:underline text-sm">{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      {SECTIONS.map((section, sIndex) => (
        <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
          <div className="space-y-6">
            {section.tasks.map((task, tIndex) => (
              <div key={tIndex} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-2">{task.title}</h3>
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
                  Take a moment. You are doing an incredible job at a very difficult time. If any of this feels overwhelming, call Cruse Bereavement Support on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>.
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

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Want a guide specific to your situation?</h2>
        <p className="text-muted mb-6">Answer a few questions and get a personalised checklist with real deadlines and costs.</p>
        <Link
          href="/start"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guide" guides={['/checklist', '/template-letters', '/deadline-tracker', '/print-checklist']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'What to Do When Someone Dies in the UK',
            description: 'A complete step-by-step guide to everything you need to do when someone dies in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
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
