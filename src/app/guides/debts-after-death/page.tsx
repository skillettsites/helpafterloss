import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'What Happens to Debt When Someone Dies in the UK',
  description: 'Debts are not inherited in the UK. Learn what happens to credit cards, mortgages, loans, and other debts when someone dies. Know your rights and what debt collectors can and cannot do.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/debts-after-death' },
  openGraph: {
    title: 'What Happens to Debt When Someone Dies in the UK',
    description: 'Debts are not inherited. Learn what happens to credit cards, mortgages, and loans after death, and what debt collectors can legally do.',
    url: 'https://helpafterloss.co.uk/guides/debts-after-death',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Happens to Debt When Someone Dies in the UK',
    description: 'What happens to debts after death and your rights if collectors contact you.',
  },
};

const DEBT_TYPES = [
  {
    type: 'Credit cards',
    sole: 'The outstanding balance is paid from the estate. The credit card company writes off any remaining balance if the estate cannot cover it. They cannot pursue family members.',
    joint: 'If the card has a joint account holder (rare for credit cards) or a supplementary cardholder who is jointly liable, the surviving holder is responsible for the full balance. Check the card agreement carefully.',
  },
  {
    type: 'Mortgages',
    sole: 'Check whether there is a life insurance policy or mortgage protection policy first. If there is, the insurer pays off the mortgage. If there is no insurance, the estate must pay. If the estate cannot cover it, the property may need to be sold.',
    joint: 'The surviving borrower takes on the full mortgage. The lender cannot demand immediate repayment. Contact the lender to remove the deceased\'s name and check whether any life insurance or mortgage protection is in place.',
  },
  {
    type: 'Personal loans',
    sole: 'Paid from the estate. If the estate has insufficient funds, the loan is written off. However, if someone acted as a guarantor for the loan, the guarantor becomes liable for the outstanding balance.',
    joint: 'The surviving borrower is responsible for the full remaining balance. Contact the lender as soon as possible, as they may offer a payment plan or temporary reduced payments while the estate is being sorted.',
  },
  {
    type: 'Overdrafts',
    sole: 'The bank deducts the overdraft balance from the account before releasing any remaining funds to the estate. If the account is overdrawn with no other funds, the overdraft is treated as an unsecured debt of the estate.',
    joint: 'The surviving account holder is responsible for repaying the overdraft in full.',
  },
  {
    type: 'HP/PCP on vehicles',
    sole: 'The car technically belongs to the finance company until the final payment is made. The estate can either continue the payments and keep the car, settle the finance early, or return the vehicle. The finance company may reclaim the car if payments stop.',
    joint: 'The surviving party on the agreement continues making payments. Contact the finance company to update the agreement.',
  },
  {
    type: 'Council tax',
    sole: 'Any outstanding council tax is paid from the estate. As executor, you are responsible for paying it from estate funds, not from your own pocket. If the property becomes empty, you may be eligible for a council tax exemption (Class F) for up to six months after probate is granted.',
    joint: 'The surviving resident continues to pay council tax. If they are now the only adult in the property, they can apply for the 25% single person discount.',
  },
  {
    type: 'Utility bills',
    sole: 'The estate pays any outstanding balance up to the date of death. Contact each utility provider to close or transfer the account. Keep the utilities on if the property needs to be maintained while the estate is administered.',
    joint: 'The surviving account holder continues the contract. Contact the provider to update the account name.',
  },
];

const PRIORITY_ORDER = [
  { priority: '1', category: 'Funeral expenses', detail: 'Paid first from the estate, before any other debts' },
  { priority: '2', category: 'Estate administration costs', detail: 'Probate fees, solicitor fees, valuations' },
  { priority: '3', category: 'Secured debts', detail: 'Mortgages, secured loans (paid from the secured asset)' },
  { priority: '4', category: 'Preferential debts', detail: 'Employee wages owed by the deceased' },
  { priority: '5', category: 'Unsecured debts', detail: 'Credit cards, personal loans, overdrafts, utility bills' },
  { priority: '6', category: 'Interest on unsecured debts', detail: 'Any interest that accrued after the date of death' },
  { priority: '7', category: 'Deferred debts', detail: 'Debts owed to the deceased\'s spouse or civil partner' },
];

const FAQ = [
  {
    q: 'Do you inherit debt when someone dies?',
    a: 'No. In the UK, debts are not inherited. You are never personally responsible for someone else\'s debts simply because you are their relative, child, or next of kin. The only exceptions are if you were a joint borrower on the debt, a guarantor, or if you are the surviving partner on a joint account. Debt collectors who suggest otherwise are breaking the rules.',
  },
  {
    q: 'Who pays credit card debt after death?',
    a: 'Credit card debt on a sole account is paid from the deceased\'s estate. If the estate does not have enough money to cover the balance, the credit card company writes it off. They cannot pursue family members for the shortfall. If it was a joint credit card account, the surviving account holder is responsible for the full balance.',
  },
  {
    q: 'What happens to a mortgage when someone dies?',
    a: 'First, check whether there is a life insurance policy or mortgage protection policy, as these are designed to pay off the mortgage on death. If there is no insurance and the mortgage was in the deceased\'s sole name, the estate must deal with it. For joint mortgages, the surviving borrower takes over the full mortgage. The lender cannot demand immediate repayment.',
  },
  {
    q: 'Can debt collectors chase family members?',
    a: 'Debt collectors cannot legally pursue family members for a sole debt that belonged to the deceased. If a debt collector contacts you about a deceased relative\'s sole debt, they are acting improperly. Tell them firmly that the debt belongs to the estate and provide the executor\'s contact details. If they persist, report them to the Financial Ombudsman.',
  },
  {
    q: 'What happens if the estate can\'t pay all debts?',
    a: 'If the estate does not have enough assets to pay all debts, it is considered "insolvent." In this case, debts are paid in a strict order of priority: funeral costs first, then secured debts, then unsecured debts. Creditors in lower priority categories may receive nothing or only a partial payment. Any debts the estate cannot pay are written off. Beneficiaries receive nothing from an insolvent estate.',
  },
  {
    q: 'Am I responsible for my spouse\'s debts after they die?',
    a: 'Only if you were a joint borrower or guarantor on the debt. Being married or in a civil partnership does not automatically make you responsible for your partner\'s sole debts. However, if you had joint debts (joint mortgage, joint loan, joint bank overdraft), you become responsible for the full remaining balance. If you are unsure, check the original credit agreement to see whose name is on it.',
  },
];

export default function DebtsAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'What Happens to Debt When Someone Dies' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What Happens to Debt When Someone Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        One of the most common worries after someone dies is whether their debts will pass to the family. The short answer is no. But the full picture depends on whether debts are sole or joint, what type they are, and whether the estate can cover them. This guide explains it all.
      </p>

      {/* Key message */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>The most important thing to know:</strong> Debts are NOT inherited. You are not personally responsible for someone else&apos;s debts unless you were a joint borrower or guarantor. Do not let anyone tell you otherwise. Debt collectors who contact family members about sole debts are acting improperly.
        </p>
      </div>

      {/* Secured vs unsecured */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-2">Secured vs unsecured debt</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          <strong>Secured debts</strong> are tied to an asset, usually a property. Mortgages are the most common example. If the debt is not repaid, the lender can take the asset. Secured debts take priority over unsecured ones.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          <strong>Unsecured debts</strong> are not tied to any asset. Credit cards, personal loans, overdrafts, and utility bills are all unsecured. If the estate runs out of money, unsecured creditors may not be paid in full or at all.
        </p>
      </div>

      {/* Debt types */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What happens to each type of debt</h2>
      <div className="space-y-4 mb-12">
        {DEBT_TYPES.map((debt, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-3">{debt.type}</h3>
            <div className="space-y-2">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Sole debt</span>
                <p className="text-sm text-muted leading-relaxed mt-1">{debt.sole}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Joint debt</span>
                <p className="text-sm text-muted leading-relaxed mt-1">{debt.joint}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Priority order */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Order of priority when the estate can&apos;t pay everything</h2>
      <p className="text-sm text-muted leading-relaxed mb-4">
        When an estate is insolvent (debts exceed assets), debts must be paid in a strict legal order. Creditors in lower priority categories may receive only partial payment or nothing at all.
      </p>
      <div className="space-y-3 mb-12">
        {PRIORITY_ORDER.map(item => (
          <div key={item.priority} className="bg-card rounded-xl border border-border p-4 flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {item.priority}
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">{item.category}</h3>
              <p className="text-sm text-muted">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Debt collectors */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-2">What debt collectors can and cannot do</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          Debt collectors <strong>can</strong> contact the executor or administrator of the estate to make a claim against the estate. They can register their claim and receive payment from estate funds if funds are available.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Debt collectors <strong>cannot</strong> pursue family members for sole debts that belonged to the deceased. They cannot harass, threaten, or mislead relatives into paying. They cannot add charges or interest to the debt after being notified of the death. If a debt collector contacts you about a relative&apos;s sole debt and suggests you are personally liable, report them to the Financial Ombudsman Service (0800 023 4567).
        </p>
      </div>

      {/* Free advice */}
      <div className="bg-accent/50 rounded-xl p-6 mb-12">
        <h2 className="font-semibold text-foreground mb-2">Free debt advice</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          If the estate is insolvent or you are unsure how to handle debts, these organisations offer free, confidential advice:
        </p>
        <ul className="text-sm text-muted space-y-1">
          <li><strong>StepChange</strong> (stepchange.org, 0800 138 1111)</li>
          <li><strong>National Debtline</strong> (nationaldebtline.org, 0808 808 4000)</li>
          <li><strong>Citizens Advice</strong> (citizensadvice.org.uk, 0800 144 8848)</li>
        </ul>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about debts after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/debts-after-death" guides={['/guides/bank-accounts-after-death', '/guides/property-after-death', '/probate', '/costs']} />

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
              { '@type': 'ListItem', position: 3, name: 'Debts After Death', item: 'https://helpafterloss.co.uk/guides/debts-after-death' },
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
            headline: 'What Happens to Debt When Someone Dies in the UK',
            description: 'Debts are not inherited in the UK. Learn what happens to credit cards, mortgages, and loans after death.',
            url: 'https://helpafterloss.co.uk/guides/debts-after-death',
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
