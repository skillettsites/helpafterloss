import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';

export const metadata: Metadata = {
  title: 'When an Unmarried Partner Dies: Your Rights and Options',
  description: 'If your partner died and you were not married or in a civil partnership, the law treats you very differently. Understand your rights regarding property, inheritance, pensions, and what you can claim.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/cohabiting-partners' },
  openGraph: {
    title: 'When an Unmarried Partner Dies: Your Rights and Options',
    description: 'Legal rights for cohabiting partners after a death. Property, inheritance, pensions, the Inheritance Act 1975, and how to protect yourself.',
    url: 'https://helpafterloss.co.uk/guides/cohabiting-partners',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When an Unmarried Partner Dies: Your Rights and Options',
    description: 'What happens legally when an unmarried partner dies. Your rights, options, and how to protect yourself.',
  },
};

const ENTITLED = [
  {
    title: 'Named in the will',
    desc: 'If your partner made a will and named you as a beneficiary, you are entitled to whatever the will specifies. This could be the entire estate, a share of it, specific items, or a fixed sum of money. The will takes priority over any other claims.',
  },
  {
    title: 'Joint tenancy property',
    desc: 'If you and your partner owned your home as joint tenants (not tenants in common), the property passes to you automatically by "right of survivorship". It does not form part of the estate and is not affected by the will or intestacy rules. Check your title deeds or the Land Registry to confirm how the property was held.',
  },
  {
    title: 'Life insurance nominated to you',
    desc: 'If your partner named you as the beneficiary of a life insurance policy, the payout goes directly to you. It does not pass through the estate. Contact the insurance company with the death certificate and your identification to make a claim.',
  },
  {
    title: 'Pension nominations',
    desc: 'If your partner nominated you for pension death benefits, these may be paid to you. Most workplace and private pensions allow the member to nominate anyone as a beneficiary. The pension trustees have discretion but will usually follow the nomination. Contact the pension provider to ask about any death benefits.',
  },
  {
    title: 'Bereavement Support Payment',
    desc: 'Since 2024, cohabiting partners with dependent children can claim Bereavement Support Payment. Previously this was only available to married couples and civil partners. The payment is a lump sum of £3,500 plus up to 18 monthly payments of £350. You must have been living with the deceased as a couple and have a dependent child.',
  },
];

const NOT_ENTITLED = [
  {
    title: 'Savings, investments, and possessions',
    desc: 'Under intestacy rules (when there is no will), you have no automatic right to any savings, investments, or personal possessions held in the deceased\'s sole name. These pass to the deceased\'s nearest relatives: children first, then parents, then siblings, and so on.',
  },
  {
    title: 'The home (if not jointly owned)',
    desc: 'If the property was owned solely by your partner, or if you owned it as tenants in common, you do not automatically inherit their share. Under intestacy, the property passes to their nearest relatives. You may be asked to leave the home. This is why checking how the property is owned is so important.',
  },
  {
    title: 'Spouse\'s inheritance tax exemption',
    desc: 'Married couples and civil partners can transfer assets to each other completely free of inheritance tax. Unmarried partners do not get this exemption. Everything above the nil-rate band (currently £325,000) is taxed at 40%. This can create a significant tax bill even on relatively modest estates.',
  },
];

const SECTIONS = [
  {
    title: 'The Inheritance (Provision for Family Dependants) Act 1975',
    content: 'Even without a will, you may be able to make a court claim under this Act. You can claim if you were financially maintained by the deceased, or if you lived together as a couple for at least two years before the death. The court can order "reasonable financial provision" from the estate, which might include a lump sum, regular payments, or the right to live in the property. Be aware that this process is expensive (legal fees typically range from £5,000 to £20,000 or more) and takes 6 to 12 months. There is a strict time limit of 6 months from the date probate is granted to make a claim. Get specialist legal advice as early as possible.',
  },
  {
    title: 'Scotland is different',
    content: 'If the death occurred in Scotland, cohabiting partners have stronger legal rights under the Family Law (Scotland) Act 2006. You can make a claim to the court for a share of household goods purchased during the relationship, a share of money or property derived from the household, and a capital sum. Claims must be made within 6 months of the death. The court considers the length of the relationship, any children, and the nature and extent of financial arrangements between you.',
  },
];

const PRACTICAL = [
  {
    title: 'Check how the property is owned',
    desc: 'Search the Land Registry (gov.uk/search-property-information-service, £3 per search) to find out whether you own the property as joint tenants or tenants in common. Joint tenancy means automatic inheritance. Tenants in common means the deceased\'s share passes through their estate.',
  },
  {
    title: 'Check pension and life insurance nominations',
    desc: 'Contact every pension provider and insurance company to ask whether your partner nominated you as a beneficiary. Even if you were not nominated, some pension schemes have discretion to pay death benefits to a cohabiting partner.',
  },
  {
    title: 'Gather evidence of financial dependence',
    desc: 'If you may need to make a claim under the Inheritance Act, start gathering evidence now. Joint bills, shared bank statements, evidence of financial contributions to the household, and any written agreements between you and your partner are all relevant.',
  },
  {
    title: 'Seek legal advice quickly',
    desc: 'Speak to a family law solicitor within the first three months. Do not wait for probate to be granted. Many solicitors offer a free initial consultation. Citizens Advice can also provide guidance and refer you to local legal services. The 6-month time limit from probate for Inheritance Act claims is strict and the court rarely grants extensions.',
  },
];

const FUTURE = [
  {
    title: 'Make a will',
    desc: 'The single most important step. A will ensures your partner inherits what you want them to, regardless of intestacy rules. Review and update it whenever your circumstances change.',
  },
  {
    title: 'Own property as joint tenants',
    desc: 'If you buy property together, make sure it is registered as a joint tenancy so it passes automatically to the surviving partner. If you already own as tenants in common, a solicitor can help you change this.',
  },
  {
    title: 'Nominate each other for pensions',
    desc: 'Complete nomination forms for workplace pensions, private pensions, and life insurance policies. Review these every few years as they do not update automatically.',
  },
  {
    title: 'Consider a cohabitation agreement',
    desc: 'A cohabitation agreement sets out what you both own, how finances are shared, and what happens if you separate or if one of you dies. While not as comprehensive as marriage in legal terms, it provides clarity and can support a claim if needed.',
  },
];

const FAQ = [
  {
    q: 'Does a common law partner have inheritance rights?',
    a: 'No. There is no such thing as "common law marriage" in English law. No matter how long you lived together, an unmarried partner has no automatic right to inherit anything under intestacy rules. The only ways to inherit are through a will, joint tenancy property, or nominated pension and insurance benefits.',
  },
  {
    q: 'What happens to the house if my unmarried partner dies?',
    a: 'It depends entirely on how the property is owned. If you owned it as joint tenants, the whole property passes to you automatically. If you owned it as tenants in common, your partner\'s share passes through their estate (to whoever is named in the will, or to their nearest relatives under intestacy). If the property was solely in your partner\'s name, you have no automatic right to remain.',
  },
  {
    q: 'Can I claim from my partner\'s estate if there is no will?',
    a: 'Potentially, yes. Under the Inheritance (Provision for Family Dependants) Act 1975, you can make a claim if you lived together as a couple for at least two years before the death, or if you were financially dependent on them. The court can order reasonable financial provision from the estate. You must apply within 6 months of probate being granted.',
  },
  {
    q: 'Are cohabiting partners entitled to bereavement support payment?',
    a: 'Since 2024, cohabiting partners with dependent children can claim Bereavement Support Payment. This is a lump sum of £3,500 plus up to 18 monthly payments of £350. You must have been living with the deceased as a couple and have a qualifying child. Cohabiting partners without children are still not eligible.',
  },
  {
    q: 'What is the Inheritance Act 1975 claim?',
    a: 'The Inheritance (Provision for Family Dependants) Act 1975 allows certain people, including cohabiting partners, to ask a court to make "reasonable financial provision" from an estate. The court considers factors like the length of your relationship, your financial needs, the size of the estate, and any obligations the deceased had towards you. Claims must be made within 6 months of probate.',
  },
  {
    q: 'How do I protect myself as an unmarried partner?',
    a: 'Make wills naming each other as beneficiaries. Own your home as joint tenants so it passes automatically. Nominate each other for pension death benefits and life insurance payouts. Consider a cohabitation agreement. Review everything regularly, especially after major life changes like having children or buying property.',
  },
];

export default function CohabitingPartnersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'When an Unmarried Partner Dies: Your Rights' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When an Unmarried Partner Dies: Your Rights
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Losing a partner is devastating. If you were not married or in a civil partnership, the legal position can make an already awful situation feel even worse. Understanding where you stand as early as possible helps you protect yourself and make informed decisions.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800&q=80"
        alt="Sunlight streaming through a window into a quiet room"
        credit="Kari Shea"
        creditUrl="https://unsplash.com/@karishea"
      />

      {/* Warning box */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Important:</strong> If you lived with your partner but were not married or in a civil partnership, the law treats you very differently from a spouse. Understanding your position early helps you protect yourself and take the right steps. There is no such thing as "common law marriage" in English law, regardless of how long you lived together.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">46%</p>
          <p className="text-sm text-muted mt-1">Of UK adults wrongly believe common law marriage exists</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">6 months</p>
          <p className="text-sm text-muted mt-1">Time limit from probate to make an Inheritance Act claim</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">2 years</p>
          <p className="text-sm text-muted mt-1">Minimum cohabitation to qualify for an Inheritance Act claim</p>
        </div>
      </div>

      {/* What you ARE entitled to */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What you are entitled to</h2>
      <div className="space-y-4 mb-12">
        {ENTITLED.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* What you are NOT entitled to */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What you are not entitled to (without a will)</h2>
      <div className="space-y-4 mb-12">
        {NOT_ENTITLED.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Legal options */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Your legal options</h2>
      <div className="space-y-4 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Practical steps */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Practical steps to take now</h2>
      <div className="space-y-4 mb-12">
        {PRACTICAL.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Protecting yourself for the future */}
      <h2 className="text-2xl font-bold text-foreground mb-6">For the future: how to protect yourself</h2>
      <div className="space-y-4 mb-12">
        {FUTURE.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions for cohabiting partners</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/cohabiting-partners" guides={['/intestacy', '/guides/property-after-death', '/guides/inheritance-tax', '/support']} />

      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist covering your legal position, financial steps, and everything else you need to deal with.</p>
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
              { '@type': 'ListItem', position: 3, name: 'Cohabiting Partners', item: 'https://helpafterloss.co.uk/guides/cohabiting-partners' },
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
            headline: 'When an Unmarried Partner Dies: Your Rights and Options',
            description: 'Legal rights for cohabiting partners after a death. Property, inheritance, pensions, and how to protect yourself.',
            url: 'https://helpafterloss.co.uk/guides/cohabiting-partners',
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
