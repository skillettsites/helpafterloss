import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PageDisclaimer } from '@/components/PageDisclaimer';

export const metadata: Metadata = {
  title: 'What Happens to a Mortgage When Someone Dies? (UK Guide 2026)',
  description: 'What happens to a mortgage when someone dies in the UK. Joint mortgages, sole mortgages, mortgage protection insurance, right to remain, continuing payments during probate, and selling vs keeping the property.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/mortgage-after-death' },
  openGraph: {
    title: 'What Happens to a Mortgage When Someone Dies? (UK Guide 2026)',
    description: 'Comprehensive guide to dealing with a mortgage after a death in the UK, including joint and sole mortgages, insurance, and your options.',
    url: 'https://helpafterloss.co.uk/guides/mortgage-after-death',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Happens to a Mortgage When Someone Dies? (UK Guide 2026)',
    description: 'What happens to a mortgage after a death in the UK. Joint vs sole mortgages, insurance, and your rights.',
  },
};

const FAQ = [
  {
    q: 'Can the mortgage lender repossess the property after someone dies?',
    a: 'The lender cannot repossess immediately. They must give the estate and any surviving occupants a reasonable period to make arrangements. In practice, lenders will usually allow several months while probate is obtained and the estate is administered. However, if mortgage payments stop entirely and no communication is made with the lender, they can eventually begin repossession proceedings. Always contact the lender as soon as possible to explain the situation and agree a plan.',
  },
  {
    q: 'Do I have to keep paying the mortgage during probate?',
    a: 'Yes. The mortgage does not pause because someone has died. Monthly payments must continue to avoid arrears building up. If the mortgage was joint, the surviving borrower is responsible. If it was sole, the estate is responsible, and the executor should arrange payments from the estate funds. If there is no money available, contact the lender to discuss options such as a temporary payment holiday or reduced payments.',
  },
  {
    q: 'What happens to a joint mortgage when one person dies?',
    a: 'If you had a joint mortgage, the surviving borrower takes over responsibility for the full mortgage. The lender cannot demand that you repay the whole balance immediately. You continue making the monthly payments as before. Check whether there is a life insurance or mortgage protection policy that could pay off some or all of the balance. Contact the lender to update the account into your sole name.',
  },
  {
    q: 'Does mortgage protection insurance pay out after death?',
    a: 'If the deceased had a mortgage protection policy (also called decreasing term life insurance), it should pay out enough to clear the remaining mortgage balance. Check the deceased\'s paperwork, bank statements for premium payments, and contact the mortgage broker who arranged the loan. The payout goes directly to the lender to clear the debt. If the policy was a level term life insurance, the full sum assured is paid out regardless of the remaining mortgage balance.',
  },
  {
    q: 'Can I transfer a mortgage into my name after someone dies?',
    a: 'If you were a joint borrower, this is straightforward. The lender will remove the deceased\'s name once you provide the death certificate. If the mortgage was in the deceased\'s sole name, transferring it to you is more complex. The lender will need to assess your ability to afford the repayments. You may need to apply for a new mortgage in your own name. If you are the deceased\'s spouse or civil partner living in the property, lenders are generally willing to work with you on this.',
  },
];

export default function MortgageAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Mortgage After Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What Happens to a Mortgage When Someone Dies?
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone dies with an outstanding mortgage, the debt does not disappear. But it does not mean the property is automatically lost either. What happens next depends on whether the mortgage was joint or sole, whether there is insurance, and who inherits the property. This guide explains every scenario and what your options are.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£3</p>
          <p className="text-sm text-muted mt-1">Land Registry title search to check ownership type</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">0800 731 0469</p>
          <p className="text-sm text-muted mt-1">DWP Bereavement Service helpline</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">6 months</p>
          <p className="text-sm text-muted mt-1">Council tax exemption on empty property after probate</p>
        </div>
      </div>

      {/* Joint mortgage */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Joint mortgage</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What happens to a joint mortgage</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the mortgage was in both names, the surviving borrower automatically takes over the full mortgage. The lender cannot call in the loan or demand immediate repayment. You simply continue making the monthly payments as before. Contact the lender to let them know about the death and to have the account updated into your sole name. You will need to send them a certified copy of the death certificate. If the property was owned as joint tenants (which is the most common arrangement for couples), you also own the property outright without needing probate.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Affordability on one income</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the mortgage was affordable on two incomes but is a stretch on one, speak to your lender about your options. They may be able to extend the mortgage term to reduce monthly payments, switch you to an interest-only arrangement temporarily, or offer a payment holiday while you get your finances in order. You may also be eligible for Support for Mortgage Interest (SMI), a government loan that covers the interest on your mortgage if you receive certain benefits. Check gov.uk for current eligibility rules.
          </p>
        </div>
      </div>

      {/* Sole mortgage */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Sole mortgage</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What happens if the mortgage was in one name only</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the deceased was the sole borrower, the mortgage becomes a debt of the estate. The executor must continue making payments from the estate funds while probate is being obtained. Once probate is granted, the executor can either pay off the mortgage (using estate funds or an insurance payout), sell the property to clear the debt, or transfer the mortgage to the person who inherits the property (subject to the lender's approval). The lender will not demand immediate repayment but will expect regular communication and ongoing payments.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Right to remain in the property</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you are the deceased's spouse or civil partner and you were living in the property, you have a right to remain there under the Matrimonial Causes Act 1973 and the Family Law Act 1996, even if you were not on the mortgage or the title deeds. This right does not extend to unmarried partners automatically, though they may have a claim depending on the circumstances. If you are not the spouse or civil partner, seek legal advice about your position as soon as possible. Shelter (0808 800 4444) can provide free housing advice.
          </p>
        </div>
      </div>

      {/* Mortgage protection insurance */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Mortgage protection insurance</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Checking for a policy</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Many mortgages, particularly those arranged through a broker, have an associated life insurance policy designed to pay off the balance on death. This is often set up at the same time as the mortgage and may have been forgotten about. Check these places:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>The deceased's paperwork, filing cabinet, or document folder</li>
            <li>Bank statements for regular premium payments to an insurer</li>
            <li>The mortgage broker who arranged the loan</li>
            <li>The mortgage lender, who may know if a policy was assigned to them</li>
            <li>The deceased's email inbox (search for "life insurance", "protection", or "policy")</li>
            <li>The unclaimed assets register at the Association of British Insurers (abi.org.uk)</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Types of mortgage protection</h3>
          <p className="text-sm text-muted leading-relaxed">
            Decreasing term insurance is the most common type of mortgage protection. The payout reduces over time in line with the mortgage balance, so it pays just enough to clear the remaining debt. Level term insurance pays a fixed lump sum regardless of the outstanding balance, which may leave money left over after the mortgage is cleared. Mortgage payment protection insurance (MPPI) is different; it covers monthly payments if you are unable to work, not the full balance on death. Check the policy wording carefully to understand what is covered.
          </p>
        </div>
      </div>

      {/* Continuing payments during probate */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Continuing payments during probate</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Who pays the mortgage while probate is pending?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Mortgage payments must continue during probate. If the mortgage was joint, the surviving borrower is responsible. If it was sole, the executor should arrange payments from the deceased's bank accounts (which banks will usually allow for essential outgoings like mortgages, even before probate is granted). If there is not enough money in the deceased's accounts, the executor may need to use their own funds temporarily and reclaim the amount from the estate later. Always keep receipts and records of any payments you make on behalf of the estate.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What happens if payments stop</h3>
          <p className="text-sm text-muted leading-relaxed">
            If mortgage payments stop, arrears will build up and interest will be charged on the unpaid amounts. The lender will write to the estate (or the surviving borrower) to chase payment. If the situation is not resolved, they can ultimately apply to the court for possession of the property. However, lenders are required to treat bereaved families fairly under FCA rules. They must give you a reasonable amount of time to sort things out. Contact the lender early and keep them informed. If you are struggling, seek free debt advice from StepChange (stepchange.org, 0800 138 1111) or Citizens Advice.
          </p>
        </div>
      </div>

      {/* Selling vs keeping the property */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Selling vs keeping the property</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Selling the property to clear the mortgage</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the property needs to be sold to pay off the mortgage, the executor can put it on the market before probate is granted, but the sale cannot complete until the Grant of Probate has been issued. Estate agents and conveyancers are used to this and will work around probate timelines. The mortgage will be repaid from the sale proceeds, and any remaining equity goes to the estate for distribution to the beneficiaries. If the property is in negative equity (worth less than the mortgage), the shortfall becomes a debt of the estate.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Keeping the property</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you inherit the property and want to keep it, you will need to either pay off the mortgage (using insurance proceeds, savings, or other estate funds) or take over the mortgage in your own name. Taking over the mortgage requires the lender to assess your affordability. If you cannot meet their criteria, you may need to apply for a new mortgage with a different lender. Speak to an independent mortgage broker who can search the whole market for you. There is no stamp duty to pay when inheriting a property, though there may be inheritance tax implications if the estate exceeds the nil-rate band.
          </p>
        </div>
      </div>

      {/* Help to Buy and shared ownership */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Help to Buy and shared ownership</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Help to Buy equity loan</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the deceased purchased the property using a Help to Buy equity loan, the government holds an equity share in the property (typically 20%, or 40% in London). On death, this equity loan must eventually be repaid. If the property is sold, the government's percentage share is taken from the sale proceeds. If a surviving joint owner wants to keep the property, they will need to repay the equity loan, which is based on the current market value of the property, not the original purchase price. Contact the Help to Buy agent for your region to discuss your options.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Shared ownership</h3>
          <p className="text-sm text-muted leading-relaxed">
            Shared ownership properties are part-owned and part-rented from a housing association. What happens on death depends on whether the property was held as joint tenants or tenants in common. If joint tenants, the surviving owner takes over the full share and continues paying the rent on the remaining portion. If the property was in the deceased's sole name, the housing association's lease will set out what happens. Some leases allow the share to be passed to a family member; others give the housing association first refusal to buy back the share. Check the lease and contact the housing association promptly.
          </p>
        </div>
      </div>

      {/* Equity release */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Equity release</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What happens to an equity release plan</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the deceased had a lifetime mortgage (the most common type of equity release), the loan plus accumulated interest becomes repayable on death. Equity release plans approved by the Equity Release Council include a "no negative equity guarantee," meaning the amount owed can never exceed the value of the property. If a surviving spouse or partner is named on the plan and still living in the property, the loan does not become repayable until they also die or move into long-term care. If the plan was in the deceased's sole name, the executor typically has 12 months to repay the loan, usually by selling the property. Contact the equity release provider as soon as possible to understand the terms.
          </p>
        </div>
      </div>

      {/* Important note */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Contact the lender as soon as possible.</strong> Mortgage lenders are required to treat bereaved customers fairly under FCA regulations. Most will offer flexibility while the estate is being sorted out, but only if you communicate with them. Ignoring the mortgage will make the situation worse. If you are unsure of your rights, seek free advice from Shelter (0808 800 4444) or Citizens Advice (citizensadvice.org.uk).
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about mortgages after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <PageDisclaimer lastReviewed="March 2026" jurisdiction="england-wales" />

      <RelatedGuides currentPath="/guides/mortgage-after-death" guides={['/guides/property-after-death', '/guides/life-insurance-claim', '/guides/inheritance-tax', '/guides/executor-duties']} />

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
              { '@type': 'ListItem', position: 3, name: 'Mortgage After Death', item: 'https://helpafterloss.co.uk/guides/mortgage-after-death' },
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
            headline: 'What Happens to a Mortgage When Someone Dies? (UK Guide 2026)',
            description: 'What happens to a mortgage when someone dies in the UK. Joint mortgages, sole mortgages, insurance, and your options for the property.',
            url: 'https://helpafterloss.co.uk/guides/mortgage-after-death',
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
