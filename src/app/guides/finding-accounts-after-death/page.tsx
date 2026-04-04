import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Finding All Their Accounts After Death',
  description: 'How to find every bank account, pension, insurance policy, and subscription the deceased held. Free and paid methods for executors, including credit agency searches, Gretel, and the Pension Tracing Service.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/finding-accounts-after-death' },
  openGraph: {
    title: 'Finding All Their Accounts After Death',
    description: 'A complete guide for executors on tracing unknown bank accounts, pensions, insurance policies, and subscriptions after someone dies.',
    url: 'https://helpafterloss.co.uk/guides/finding-accounts-after-death',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finding All Their Accounts After Death',
    description: 'How to find every account, policy, and pension the deceased held. Free and paid methods explained.',
  },
};

const METHODS = [
  {
    step: '1',
    title: 'Search their paperwork and email',
    cost: 'Free',
    desc: 'Start with what is already available. Go through bank statements, letters from financial institutions, tax returns, payslips, and receipts. Check drawers, filing cabinets, safes, and any home office. If you have access to their email, search for terms like "account", "policy", "statement", "renewal", "direct debit", and "subscription". Their email inbox will often reveal accounts you would never have found otherwise. Also check their phone for banking apps and saved passwords.',
    documents: 'No documents needed at this stage.',
  },
  {
    step: '2',
    title: 'Request a credit reference agency deceased search',
    cost: 'From £25',
    desc: 'This is the single most effective method. As executor or next of kin, you can legally request a search of the deceased person\'s credit file. This reveals every credit agreement, bank account, loan, mortgage, credit card, and financial product registered in their name. Experian offers a Deceased Tracing service for £25 that provides a full report. Equifax and TransUnion offer similar services. You will need a certified copy of the death certificate and, ideally, the Grant of Probate or Letters of Administration. Some agencies will accept a copy of the will naming you as executor before probate is granted.',
    documents: 'Certified death certificate, Grant of Probate (or Letters of Administration), photo ID.',
  },
  {
    step: '3',
    title: 'Use Gretel (gretel.co.uk)',
    cost: 'Free',
    desc: 'Gretel is a free service that searches multiple sources to find financial accounts linked to the deceased. You register the death on their platform and they contact financial institutions on your behalf to identify any accounts held. Gretel works with hundreds of UK banks, building societies, insurers, and pension providers. It is particularly useful for finding accounts you did not know about. The service is free because it is funded by the financial institutions themselves, who want to reunite assets with the right people.',
    documents: 'Death certificate, proof of your authority to act (Grant of Probate, Letters of Administration, or copy of the will).',
  },
  {
    step: '4',
    title: 'Use the Death Notification Service (deathnotificationservice.co.uk)',
    cost: 'Free',
    desc: 'The Death Notification Service (DNS) lets you notify multiple banks and building societies of a death in a single registration. Run by UK Finance, the trade body for the banking sector, it covers most major UK banks. When you register, each participating bank will check whether they hold any accounts in the deceased\'s name and contact you directly. This is useful both for notifying institutions you already know about and for discovering accounts you were not aware of. You can register online and the whole process takes around 10 minutes.',
    documents: 'Death certificate reference number, your own ID, details of any known accounts.',
  },
  {
    step: '5',
    title: 'Trace lost pensions with the Pension Tracing Service',
    cost: 'Free',
    desc: 'The Pension Tracing Service is a free government tool that helps you find workplace and personal pensions the deceased may have built up during their career. Many people change jobs multiple times and lose track of old pension schemes. The service holds details of over 200,000 workplace and personal pension schemes. Visit gov.uk/find-pension-contact-details and search using the name of a former employer or pension provider. Once you find a scheme, contact them directly with the death certificate and proof of your authority. Some workplace pensions pay a lump sum death benefit that does not form part of the estate.',
    documents: 'Name of former employers or pension providers. Death certificate and proof of authority when you contact the scheme.',
  },
  {
    step: '6',
    title: 'Search the Unclaimed Assets Register',
    cost: '£25',
    desc: 'The Unclaimed Assets Register (UAR), run by Gretel, searches for dormant bank and building society accounts, unclaimed insurance policies, pensions, and investments. Financial institutions are required to transfer dormant accounts (untouched for 15 years) to the Reclaim Fund, but the original owner or their estate can still reclaim the money. A search costs £25 and covers millions of dormant accounts across the UK financial sector. If a match is found, you will be given instructions on how to reclaim the funds.',
    documents: 'Full name and date of birth of the deceased. Death certificate and proof of authority for any claims.',
  },
  {
    step: '7',
    title: 'Check for insurance policies via BIBA',
    cost: 'Free enquiry',
    desc: 'The British Insurance Brokers\' Association (BIBA) can help trace insurance policies the deceased may have held. Contact them on 0370 950 1790. They maintain records of insurance brokers and can help you identify which companies may hold policies. Also check for policies that came bundled with bank accounts (many packaged current accounts include life insurance or travel insurance). Check payslips for any group life insurance through their employer, as these often pay out a lump sum of 2 to 4 times the annual salary.',
    documents: 'Death certificate, details of any known policies or employers.',
  },
  {
    step: '8',
    title: 'Check for Premium Bonds with NS&I',
    cost: 'Free',
    desc: 'Premium Bonds are one of the most commonly forgotten financial products. NS&I (National Savings and Investments) holds billions in unclaimed Premium Bonds. Contact NS&I on 08085 007 007 or write to NS&I, Glasgow G58 1SB. They will check whether the deceased held any bonds and arrange for them to be cashed in or transferred. Premium Bonds continue to be entered into the monthly draw for up to 12 months after the holder\'s death, so do not rush to cash them in. Any prizes won during that period belong to the estate.',
    documents: 'Death certificate, holder\'s number (if known), your proof of authority.',
  },
  {
    step: '9',
    title: 'Request HMRC self-assessment records',
    cost: 'Free',
    desc: 'If the deceased filed Self Assessment tax returns, HMRC holds records of every income source they declared: employment, self-employment, rental income, dividends, interest, and pension income. As executor, you can write to HMRC (or call the Bereavement helpline on 0300 200 3300) to request copies of recent tax returns. These records can reveal bank accounts, investment holdings, rental properties, and pension providers you were not aware of. HMRC can also confirm whether any tax refunds are due to the estate.',
    documents: 'Death certificate, Grant of Probate or Letters of Administration, the deceased\'s National Insurance number and UTR (Unique Taxpayer Reference) if known.',
  },
];

const FAQ = [
  {
    q: 'How do I find a deceased person\'s bank accounts if I have no paperwork?',
    a: 'Start with a credit reference agency search. Experian\'s Deceased Tracing service (£25) will reveal all credit agreements and bank accounts registered to that person. You can also register with Gretel (free) and the Death Notification Service (free), both of which contact financial institutions on your behalf. Between these three services, you will find the vast majority of accounts.',
  },
  {
    q: 'Can I access a deceased person\'s credit report?',
    a: 'Yes. As executor or administrator of the estate, you have a legal right to request a credit search on the deceased. You will need a certified copy of the death certificate and proof of your authority to act (Grant of Probate, Letters of Administration, or a copy of the will naming you as executor). Experian, Equifax, and TransUnion all offer this service.',
  },
  {
    q: 'How long does it take to find all accounts after death?',
    a: 'Allow 4 to 8 weeks to get a reasonably complete picture. Credit agency searches typically return results within 5 to 10 working days. Gretel and the Death Notification Service may take longer as they contact institutions individually. Pension tracing can take several weeks, especially if the deceased had multiple employers over their career. Do not rush to distribute the estate until you are confident you have found everything.',
  },
  {
    q: 'What if I find accounts after the estate has been distributed?',
    a: 'If you discover accounts after distribution, you will need to collect the newly found assets and distribute them to the beneficiaries according to the will (or intestacy rules). If a creditor comes forward, you may need to recover funds from beneficiaries. This is one reason why placing a statutory notice in The London Gazette is so important: it limits your personal liability as executor.',
  },
  {
    q: 'Do I need Grant of Probate to search for accounts?',
    a: 'Not always. You can begin searching before probate is granted. Credit reference agencies will often accept a copy of the will naming you as executor, along with the death certificate. Gretel and the Death Notification Service can also be used before probate. However, you will need the Grant of Probate (or Letters of Administration) to actually close accounts and withdraw funds.',
  },
  {
    q: 'Are there any completely free ways to find unknown accounts?',
    a: 'Yes. Gretel, the Death Notification Service, the Pension Tracing Service, NS&I Premium Bond checks, BIBA insurance enquiries, and HMRC record requests are all free. The only paid services are the credit reference agency searches (from £25) and the Unclaimed Assets Register (£25). The free methods alone will catch most accounts.',
  },
  {
    q: 'What happens to bank accounts nobody ever finds?',
    a: 'Accounts left dormant for 15 years are transferred to the Reclaim Fund under the Dormant Assets Scheme. The money is used to fund good causes, but the original owner (or their estate) can reclaim it at any time. There is no time limit on reclaiming dormant assets. Search the Unclaimed Assets Register or contact the bank directly if you suspect a dormant account exists.',
  },
];

export default function FindingAccountsAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Finding All Their Accounts After Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Finding All Their Accounts After Death
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        One of the hardest parts of administering an estate is knowing exactly what the deceased held. Bank accounts, pensions, insurance policies, investments, subscriptions, and savings could be spread across dozens of providers. Missing even one account can delay probate, cause tax problems, or leave money unclaimed forever. This guide covers every method available to trace what they had.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">9 methods</p>
          <p className="text-sm text-muted mt-1">To trace accounts, pensions, and policies</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">6 are free</p>
          <p className="text-sm text-muted mt-1">Most tracing services cost nothing</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">4-8 weeks</p>
          <p className="text-sm text-muted mt-1">Typical time to get a full picture</p>
        </div>
      </div>

      {/* Important note */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Important:</strong> As executor, you are personally liable if you distribute the estate and an unknown creditor or account later comes to light. Take the time to search thoroughly before distributing anything. Place a statutory notice in The London Gazette to protect yourself.
        </p>
      </div>

      {/* What documents you will need */}
      <h2 className="text-2xl font-bold text-foreground mb-4">Documents you will need</h2>
      <p className="text-muted leading-relaxed mb-4">
        Before you begin, gather the following. Not every method requires all of these, but having them ready will save time.
      </p>
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0">1.</span>
            <span><strong className="text-foreground">Certified death certificate</strong> (at least 2 copies). Required by almost every institution. Order extra copies when registering the death (£12.50 each in England and Wales (£15 in Scotland)).</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0">2.</span>
            <span><strong className="text-foreground">Grant of Probate or Letters of Administration.</strong> Needed to close accounts and withdraw funds. Some searches can begin before this is granted.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0">3.</span>
            <span><strong className="text-foreground">The will</strong> (if one exists). A copy may be enough for initial searches, but institutions will want to see the original or a sealed court copy.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0">4.</span>
            <span><strong className="text-foreground">Your own photo ID.</strong> Passport or driving licence. Required to verify your identity as executor.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0">5.</span>
            <span><strong className="text-foreground">The deceased&apos;s National Insurance number</strong> (if known). Helpful for HMRC and pension tracing.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0">6.</span>
            <span><strong className="text-foreground">Details of known employers.</strong> Past and present. Needed for tracing workplace pensions and group life insurance.</span>
          </li>
        </ul>
      </div>

      {/* Methods */}
      <h2 className="text-2xl font-bold text-foreground mb-6">How to find their accounts: 9 methods</h2>
      <div className="space-y-4 mb-12">
        {METHODS.map(m => (
          <div key={m.step} className="bg-card rounded-xl border border-border p-6 flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {m.step}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-semibold text-foreground">{m.title}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${m.cost === 'Free' ? 'bg-green-100 text-green-800' : m.cost === 'Free enquiry' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                  {m.cost}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-2">{m.desc}</p>
              <p className="text-xs text-muted"><strong className="text-foreground">Documents needed:</strong> {m.documents}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended order */}
      <div className="bg-primary-light rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-foreground mb-3">Recommended order of action</h3>
        <ol className="text-sm text-muted leading-relaxed space-y-2">
          <li><strong className="text-foreground">Week 1:</strong> Search their home, paperwork, email, and phone. Register with the Death Notification Service and Gretel.</li>
          <li><strong className="text-foreground">Week 2:</strong> Request a credit reference agency search (Experian Deceased Tracing, £25). Contact NS&I about Premium Bonds. Call BIBA about insurance.</li>
          <li><strong className="text-foreground">Week 3-4:</strong> Use the Pension Tracing Service for each former employer. Contact HMRC for self-assessment records.</li>
          <li><strong className="text-foreground">Week 4-6:</strong> Search the Unclaimed Assets Register if you suspect dormant accounts. Follow up on any leads from earlier searches.</li>
          <li><strong className="text-foreground">Week 6-8:</strong> Review all results. Cross-reference findings. You should now have a complete picture of the estate.</li>
        </ol>
      </div>

      {/* Key contacts */}
      <h2 className="text-2xl font-bold text-foreground mb-4">Key contacts at a glance</h2>
      <div className="bg-card rounded-xl border border-border overflow-hidden mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-gray-50">
              <th className="text-left p-4 font-semibold text-foreground">Service</th>
              <th className="text-left p-4 font-semibold text-foreground">Contact</th>
              <th className="text-left p-4 font-semibold text-foreground">Cost</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-border">
              <td className="p-4">Experian Deceased Tracing</td>
              <td className="p-4">experian.co.uk</td>
              <td className="p-4">£25</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">Gretel</td>
              <td className="p-4">gretel.co.uk</td>
              <td className="p-4">Free</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">Death Notification Service</td>
              <td className="p-4">deathnotificationservice.co.uk</td>
              <td className="p-4">Free</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">Pension Tracing Service</td>
              <td className="p-4">gov.uk/find-pension-contact-details</td>
              <td className="p-4">Free</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">Unclaimed Assets Register</td>
              <td className="p-4">gretel.co.uk</td>
              <td className="p-4">£25</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">BIBA (insurance)</td>
              <td className="p-4">0370 950 1790</td>
              <td className="p-4">Free</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4">NS&I (Premium Bonds)</td>
              <td className="p-4">08085 007 007</td>
              <td className="p-4">Free</td>
            </tr>
            <tr>
              <td className="p-4">HMRC Bereavement</td>
              <td className="p-4">0300 200 3300</td>
              <td className="p-4">Free</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about finding accounts after death</h2>
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
        <Link href="/guides/executor-duties" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Executor Duties</h3>
          <p className="text-sm text-muted leading-relaxed">Complete step-by-step guide to administering an estate</p>
        </Link>
        <Link href="/guides/bank-accounts-after-death" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Bank Accounts After Death</h3>
          <p className="text-sm text-muted leading-relaxed">How to close accounts and release money, with or without probate</p>
        </Link>
        <Link href="/guides/pensions-after-death" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Pensions After Death</h3>
          <p className="text-sm text-muted leading-relaxed">State pension, workplace pensions, and tracing lost schemes</p>
        </Link>
        <Link href="/guides/subscriptions-after-death" className="bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-sm transition-all group">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">Subscriptions & Direct Debits</h3>
          <p className="text-sm text-muted leading-relaxed">Finding and cancelling all recurring payments</p>
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/finding-accounts-after-death" guides={['/guides/executor-duties', '/guides/bank-accounts-after-death', '/guides/pensions-after-death', '/guides/debts-after-death']} />

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
            '@type': 'Article',
            headline: 'Finding All Their Accounts After Death',
            description: 'How to find every bank account, pension, insurance policy, and subscription the deceased held. Free and paid methods for executors.',
            url: 'https://helpafterloss.co.uk/guides/finding-accounts-after-death',
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
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
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'Finding Accounts After Death', item: 'https://helpafterloss.co.uk/guides/finding-accounts-after-death' },
            ],
          }),
        }}
      />
    </div>
  );
}
