import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageDisclaimer } from '@/components/PageDisclaimer';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions When Someone Dies | Help After Loss',
  description:
    'Answers to the most common questions after a death in the UK. Registering a death, probate, funeral costs, bank accounts, inheritance tax, benefits, and more.',
  alternates: { canonical: 'https://helpafterloss.co.uk/faq' },
  openGraph: {
    title: 'Frequently Asked Questions When Someone Dies',
    description:
      'Clear answers to the most common questions people ask after a death in the UK. Updated for 2026.',
    url: 'https://helpafterloss.co.uk/faq',
    type: 'article',
  },
};

const faqs = [
  {
    category: 'Registering the death',
    questions: [
      {
        q: 'How long do I have to register a death in the UK?',
        a: 'In England and Wales, you must register a death within 5 days. In Scotland, it is 8 days. In Northern Ireland, it is 5 days. Registration is done at the local register office in the district where the person died, not necessarily where they lived.',
      },
      {
        q: 'Who can register a death?',
        a: 'A relative of the deceased, someone present at the death, the occupier of the building where the death occurred, or the person arranging the funeral. In practice, it is usually a close family member. You will need to attend the register office in person.',
      },
      {
        q: 'What documents do I need to register a death?',
        a: 'You will need the medical certificate of cause of death (issued by the doctor or hospital), the deceased\'s birth certificate, marriage or civil partnership certificate, NHS number, and details of their occupation. Not all are essential, but bring as many as you can.',
      },
    ],
  },
  {
    category: 'Death certificates',
    questions: [
      {
        q: 'How much does a death certificate cost?',
        a: 'In England and Wales, a certified copy costs £12.50. In Scotland, it is £15. Prices may vary slightly in Northern Ireland. You should order at least 10 certified copies, as banks, insurers, and other organisations often need to keep or retain them temporarily.',
      },
      {
        q: 'How many death certificates do I need?',
        a: 'We recommend ordering 10 to 15 certified copies. Each bank, insurer, pension provider, and utility company may need a copy, and some retain them for weeks. Having extras saves time. You can order more later, but it is cheaper to order them all at once during registration.',
      },
    ],
  },
  {
    category: 'Probate',
    questions: [
      {
        q: 'Do I need probate?',
        a: 'Not always. If the deceased only had joint assets (which pass automatically to the survivor), or if individual accounts are below each bank\'s probate threshold (typically £5,000 to £50,000), you may not need probate. If the deceased owned property in their sole name, probate is almost always required.',
      },
      {
        q: 'How much does probate cost?',
        a: 'The court fee for a grant of probate in England and Wales is £300 (free for estates under £5,000). Solicitor fees, if you use one, typically range from £2,000 to £15,000, or 1% to 5% of the estate value. You can apply for probate yourself to save on solicitor fees.',
      },
      {
        q: 'How long does probate take?',
        a: 'The grant of probate itself usually takes 8 to 12 weeks after application. However, the entire estate administration process (collecting assets, paying debts, distributing to beneficiaries) commonly takes 6 to 12 months, and complex estates can take longer.',
      },
      {
        q: 'Can I apply for probate without a solicitor?',
        a: 'Yes. Many people apply for probate themselves, especially for straightforward estates. The government website allows you to apply online. It is a good option if the estate is simple: one property, a few bank accounts, no disputes, and no inheritance tax to pay.',
      },
    ],
  },
  {
    category: 'Bank accounts and finances',
    questions: [
      {
        q: 'What happens to bank accounts when someone dies?',
        a: 'Sole accounts are frozen as soon as the bank is notified. Joint accounts usually pass to the surviving account holder. Most banks will release funds for funeral costs before probate is granted. Each bank has its own probate threshold, typically £5,000 to £50,000, below which they may release funds without probate.',
      },
      {
        q: 'Do I need to notify every bank separately?',
        a: 'Generally yes, but the Death Notification Service (run by UK Finance) lets you notify multiple banks through a single contact. Not all banks participate, so check their list. You will still need to contact utility companies, insurers, and other organisations individually.',
      },
      {
        q: 'Can the bank release money for the funeral?',
        a: 'Yes. Most banks will pay funeral invoices directly from the deceased\'s account before probate is granted. You will need to provide the funeral director\'s invoice. This is standard practice across UK banks.',
      },
    ],
  },
  {
    category: 'Funeral costs',
    questions: [
      {
        q: 'How much does a funeral cost in the UK?',
        a: 'A traditional burial costs £4,000 to £8,000. A cremation with a service costs £3,000 to £6,500. Direct cremation (no service) costs £1,000 to £2,500. Costs vary significantly by region, with London being the most expensive.',
      },
      {
        q: 'Who pays for the funeral?',
        a: 'There is no legal obligation on any specific person to pay. In practice, the cost usually comes from the deceased\'s estate. If the estate has insufficient funds, the person who arranged the funeral may be liable. The government\'s Funeral Expenses Payment may help if you receive certain benefits.',
      },
    ],
  },
  {
    category: 'Tell Us Once',
    questions: [
      {
        q: 'What is Tell Us Once?',
        a: 'Tell Us Once is a free government service that notifies multiple government departments of a death in a single step. It covers HMRC, DWP, the Passport Office, DVLA, and local council services. The registrar will give you a reference number to use. It is not available in Northern Ireland.',
      },
      {
        q: 'What does Tell Us Once not cover?',
        a: 'Tell Us Once only covers government departments. It does not notify banks, building societies, utility companies, insurers, pension providers, or any private-sector organisation. You must contact each of these individually.',
      },
    ],
  },
  {
    category: 'Inheritance tax',
    questions: [
      {
        q: 'How much is the inheritance tax threshold?',
        a: 'The nil-rate band is £325,000 per person. If you leave your home to direct descendants, the residence nil-rate band adds up to £175,000, giving a potential threshold of £500,000. Married couples and civil partners can combine their allowances, potentially sheltering up to £1 million.',
      },
      {
        q: 'When do I need to pay inheritance tax?',
        a: 'Inheritance tax is due within 6 months of the end of the month in which the person died. Interest is charged after this deadline. You can pay inheritance tax on property in instalments over 10 years. The executor is responsible for calculating and paying inheritance tax before distributing the estate.',
      },
    ],
  },
  {
    category: 'Benefits and support',
    questions: [
      {
        q: 'What is Bereavement Support Payment?',
        a: 'Bereavement Support Payment is a DWP benefit for the surviving spouse or civil partner of someone who died. It provides an initial lump sum of up to £3,500 plus monthly payments of up to £350 for 18 months. You must claim within 21 months of the death. It is not means-tested.',
      },
      {
        q: 'Can I get help with funeral costs?',
        a: 'If you receive certain means-tested benefits (Universal Credit, Pension Credit, Housing Benefit, and others), you may qualify for a Funeral Expenses Payment from the government. This covers burial or cremation fees, up to £1,000 for other costs, and travel expenses. Apply within 6 months of the funeral.',
      },
    ],
  },
  {
    category: 'Practical matters',
    questions: [
      {
        q: 'What happens to the deceased\'s property?',
        a: 'If the property was jointly owned with right of survivorship, it passes automatically to the surviving owner. If the property was owned solely or as tenants in common, it forms part of the estate and will be distributed according to the will, or intestacy rules if there is no will. Probate is required before the property can be sold or transferred.',
      },
      {
        q: 'Do I need to cancel direct debits?',
        a: 'Yes. You should cancel or redirect direct debits and standing orders from the deceased\'s sole account. For joint accounts, the surviving holder can manage them directly. Contact each company to close the account, transfer it, or arrange a final bill. Our template letters can help with this.',
      },
      {
        q: 'What happens to debts when someone dies?',
        a: 'Debts do not disappear. They are paid from the estate before beneficiaries receive anything. If the estate has insufficient funds, debts are written off in a specific order of priority. Family members are not personally liable for the deceased\'s debts unless they were a joint borrower or guarantor.',
      },
    ],
  },
];

// Build schema from all FAQs
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((section) =>
    section.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-muted mb-4 max-w-3xl">
        Clear answers to the most common questions people ask after a death in
        the UK. If you cannot find what you are looking for, our{' '}
        <Link href="/start" className="text-primary hover:underline">
          personalised checklist
        </Link>{' '}
        will give you guidance tailored to your specific situation.
      </p>
      <p className="text-sm text-muted mb-10">
        Last reviewed: March 2026. See our{' '}
        <Link href="/editorial-policy" className="text-primary hover:underline">
          editorial policy
        </Link>{' '}
        for how we maintain accuracy.
      </p>

      {/* Quick jump links */}
      <nav className="bg-card border border-border rounded-xl p-5 mb-10">
        <p className="font-semibold text-foreground text-sm mb-3">Jump to a topic:</p>
        <div className="flex flex-wrap gap-2">
          {faqs.map((section) => (
            <a
              key={section.category}
              href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full"
            >
              {section.category}
            </a>
          ))}
        </div>
      </nav>

      {/* FAQ sections */}
      <div className="space-y-12">
        {faqs.map((section) => (
          <section
            key={section.category}
            id={section.category.toLowerCase().replace(/\s+/g, '-')}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-5">
              {section.category}
            </h2>
            <div className="space-y-5">
              {section.questions.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-border pb-5"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <PageDisclaimer lastReviewed="March 2026" jurisdiction="all-uk" />

      <RelatedGuides
        currentPath="/faq"
        guides={['/guide', '/probate', '/costs', '/banks']}
      />
    </main>
  );
}
