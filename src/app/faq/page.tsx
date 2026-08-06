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
        a: 'In England and Wales, you must register a death within 5 days of getting the confirmation from the medical examiner or coroner. In Scotland, it is 8 days. In Northern Ireland, it is 5 days. The clock starts from that confirmation rather than from the date of death, so a wait for the paperwork does not put you behind. Registration is done at the local register office in the district where the person died, not necessarily where they lived.',
      },
      {
        q: 'Who can register a death?',
        a: 'A relative, someone who was present at the death, the occupier of the building where they died, or whoever is arranging the funeral. In practice it is usually a close family member. You do need to go to the register office in person, so take someone with you if that would help.',
      },
      {
        q: 'What documents do I need to register a death?',
        a: 'Take the medical certificate of cause of death (issued by the doctor or hospital), along with their birth certificate, marriage or civil partnership certificate, NHS number, and details of their occupation. Not all of these are essential, so bring what you can find and do not worry about the rest.',
      },
    ],
  },
  {
    category: 'Death certificates',
    questions: [
      {
        q: 'How much does a death certificate cost?',
        a: 'In England and Wales, a certified copy costs £12.50, and the GRO priority service is £38.50. In Scotland it is around £15, though the exact fee is set locally, so check with the registrar. In Northern Ireland it is £8 from the registrar at the time of registration, or £15 for the first copy ordered later from GRONI and £8 for each additional copy ordered at the same time. Around 5 to 10 copies suits most families, as banks, insurers, and other organisations often need to keep them for a while.',
      },
      {
        q: 'How many death certificates do I need?',
        a: 'Around 5 to 10 certified copies suits most families, depending on how many accounts and policies there were. Each bank, insurer, pension provider, and utility company may need a copy, and some retain them for weeks, so a larger estate can need 8 to 12. You can order more later at the same price per copy, but it takes longer, so it is better to have a spare than to run short.',
      },
    ],
  },
  {
    category: 'Probate',
    questions: [
      {
        q: 'Do I need probate?',
        a: 'Not always. If everything was jointly owned (which passes automatically to the surviving owner), or if the individual accounts sit below each bank\'s probate threshold (typically £5,000 to £50,000), you may not need probate at all. If they owned property in their sole name, probate is almost always required.',
      },
      {
        q: 'How much does probate cost?',
        a: 'The court fee for a grant of probate in England and Wales is £526 (free for estates under £5,000). Solicitor fees, if you use one, typically range from £2,000 to £15,000, or 1% to 5% of the estate value. You can apply for probate yourself to save on solicitor fees.',
      },
      {
        q: 'How long does probate take?',
        a: 'The grant of probate itself usually arrives within 12 weeks of applying, and often sooner. However, the entire estate administration process (collecting assets, paying debts, distributing to beneficiaries) commonly takes 6 to 12 months, and complex estates can take longer.',
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
        a: 'Accounts in their sole name are frozen as soon as the bank is told. Joint accounts usually pass to the surviving account holder. Most banks will release money for funeral costs before probate is granted, so do ask. Each bank has its own probate threshold, typically £5,000 to £50,000, below which they may release funds without it.',
      },
      {
        q: 'Do I need to notify every bank separately?',
        a: 'Generally yes, but the Death Notification Service (run by UK Finance) lets you notify multiple banks through a single contact. Not all banks participate, so check their list. You will still need to contact utility companies, insurers, and other organisations individually.',
      },
      {
        q: 'Can the bank release money for the funeral?',
        a: 'Yes. Most banks will pay funeral invoices directly from their account before probate is granted. You just need to give them the funeral director\'s invoice. This is standard practice across UK banks, so please do not feel awkward asking.',
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
        a: 'No one person is legally obliged to pay. In practice the cost comes out of the estate. If there is not enough in the estate, whoever arranged the funeral may become responsible, so it is worth being clear about that before you sign anything. The government\'s Funeral Expenses Payment may help if you receive certain benefits.',
      },
    ],
  },
  {
    category: 'Tell Us Once',
    questions: [
      {
        q: 'What is Tell Us Once?',
        a: 'Tell Us Once is a free government service that notifies multiple government departments of a death in a single step. It covers HMRC, DWP, the Passport Office, DVLA, and local council services. The registrar will give you a unique reference number, and you need to use the service within 28 days of getting that number. It is not available in Northern Ireland.',
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
        a: 'Bereavement Support Payment is a DWP benefit for the surviving husband, wife, or civil partner. It provides an initial lump sum of up to £3,500, plus monthly payments of up to £350 for 18 months. Timing matters: claim within 3 months and you get the lump sum and all 18 monthly payments, and after 12 months the lump sum is lost altogether, though some monthly payments can still be claimed up to 21 months. It is not means-tested, so it does not matter what you have in savings.',
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
        a: 'If the property was jointly owned with right of survivorship, it passes automatically to the surviving owner. If it was owned solely, or as tenants in common, it forms part of the estate and is shared out according to the will, or the intestacy rules if there is no will. Probate is needed before the property can be sold or transferred.',
      },
      {
        q: 'Do I need to cancel direct debits?',
        a: 'Yes. Cancel or redirect the direct debits and standing orders on any account in their sole name. On a joint account, the surviving holder can sort these out directly. Contact each company to close the account, transfer it, or ask for a final bill. Our template letters take the hard work out of that.',
      },
      {
        q: 'What happens to debts when someone dies?',
        a: 'Debts do not simply disappear. They are paid out of the estate before anyone receives their inheritance. If there is not enough in the estate, debts are written off in a set order of priority. Importantly, family members are not personally responsible for their debts unless they were a joint borrower or a guarantor, so please do not let anyone tell you otherwise.',
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
        Clear, honest answers to the questions people most often ask us after
        losing someone. If you cannot find what you need here, our{' '}
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

      <PageDisclaimer lastReviewed="August 2026" jurisdiction="all-uk" />

      <RelatedGuides
        currentPath="/faq"
        guides={['/guide', '/probate', '/costs', '/banks']}
      />
    </main>
  );
}
