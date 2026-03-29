import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PageDisclaimer } from '@/components/PageDisclaimer';

export const metadata: Metadata = {
  title: 'How to Claim Life Insurance After a Death in the UK (2026)',
  description: 'Step-by-step guide to claiming life insurance after a death in the UK. Finding policies, the claim process, documents needed, policies in trust, tax implications, and common reasons for delays.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/life-insurance-claim' },
  openGraph: {
    title: 'How to Claim Life Insurance After a Death in the UK (2026)',
    description: 'How to find life insurance policies, make a claim, and receive the payout. Covers employer policies, mortgage protection, trust status, and tax.',
    url: 'https://helpafterloss.co.uk/guides/life-insurance-claim',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Claim Life Insurance After a Death in the UK (2026)',
    description: 'How to claim life insurance after a death. Finding policies, the process, and avoiding delays.',
  },
};

const FAQ = [
  {
    q: 'How long does a life insurance payout take in the UK?',
    a: 'Most life insurance claims are paid within 4 to 8 weeks of the insurer receiving all the required documents. Simple claims with clear documentation can be paid in as little as 2 weeks. Complex cases, such as those involving a coroner\'s investigation or a claim within the first year of the policy, can take 3 to 6 months or longer. If your claim is taking longer than expected, contact the insurer to ask for an update and a specific timeline.',
  },
  {
    q: 'Do I need probate to claim life insurance?',
    a: 'Not if the policy was written in trust. Policies held in trust are paid directly to the named beneficiaries without waiting for probate. If the policy was not in trust, the payout forms part of the deceased\'s estate, and probate is usually required before the insurer will release the funds. This is one of the key reasons financial advisers recommend placing life insurance policies in trust.',
  },
  {
    q: 'Is life insurance payout taxable in the UK?',
    a: 'The payout itself is not subject to income tax or capital gains tax. However, if the policy was not written in trust, the payout forms part of the deceased\'s estate for inheritance tax purposes. If the total estate (including the life insurance payout) exceeds the inheritance tax threshold (currently £325,000, or up to £500,000 with the residence nil-rate band), inheritance tax at 40% may be due on the amount above the threshold. Policies written in trust avoid this entirely.',
  },
  {
    q: 'How do I find out if someone had life insurance?',
    a: 'Check the deceased\'s paperwork, bank and credit card statements for premium payments, their email inbox, and any documents from financial advisers or mortgage brokers. Contact their employer\'s HR department about death in service benefits. Ask their bank if any policies were sold alongside accounts or mortgages. You can also search the unclaimed assets register at the Association of British Insurers (abi.org.uk). Finally, check with any trade unions or professional bodies they belonged to, as these sometimes include life cover as a membership benefit.',
  },
  {
    q: 'Can a life insurance claim be rejected?',
    a: 'Yes, though it is uncommon. The most common reasons for rejection are non-disclosure (the policyholder did not declare a pre-existing medical condition or lifestyle factor when applying), the death falling within an exclusion period (most policies exclude suicide within the first 12 months), lapsed premiums (the policy had ended because payments stopped), or fraud. If your claim is rejected, ask the insurer for a full written explanation. You can complain through the insurer\'s internal complaints process, and if that fails, escalate to the Financial Ombudsman Service (financial-ombudsman.org.uk).',
  },
];

export default function LifeInsuranceClaimPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Life Insurance Claim' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        How to Claim Life Insurance After a Death in the UK
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Life insurance can provide crucial financial support after a death, but many families do not know whether a policy exists, where to find it, or how to make a claim. This guide walks you through the entire process: finding policies, gathering documents, submitting the claim, and understanding what happens to the payout.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">4-8 weeks</p>
          <p className="text-sm text-muted mt-1">Typical payout time for straightforward claims</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£325,000</p>
          <p className="text-sm text-muted mt-1">IHT nil-rate band (policies not in trust count towards this)</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">No time limit</p>
          <p className="text-sm text-muted mt-1">There is no deadline to make a life insurance claim</p>
        </div>
      </div>

      {/* Finding all policies */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Finding all life insurance policies</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Where to look</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            People often have more life insurance than their family realises. Policies can be attached to mortgages, bundled with bank accounts, provided by employers, or included in professional memberships. Check all of the following:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li><strong>Personal paperwork:</strong> policy documents, annual statements, filing cabinets, desk drawers</li>
            <li><strong>Bank and credit card statements:</strong> look for regular payments to insurance companies</li>
            <li><strong>Email inbox:</strong> search for "life insurance", "policy", "protection", "premium"</li>
            <li><strong>Employer:</strong> contact HR about death in service benefits (typically 2-4x annual salary)</li>
            <li><strong>Mortgage lender or broker:</strong> many mortgages have associated life cover</li>
            <li><strong>Bank accounts:</strong> some current accounts include free life insurance as a perk</li>
            <li><strong>Trade unions and professional bodies:</strong> some include life cover with membership</li>
            <li><strong>Financial adviser:</strong> if the deceased used an IFA, they will have records of all policies arranged</li>
            <li><strong>Association of British Insurers:</strong> the unclaimed assets register at abi.org.uk can help trace lost policies</li>
          </ul>
        </div>
      </div>

      {/* The claim process */}
      <h2 className="text-2xl font-bold text-foreground mb-6">The claim process step by step</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Step 1: Contact the insurer</h3>
          <p className="text-sm text-muted leading-relaxed">
            Call the insurance company's bereavement or claims team. They will confirm whether the policy is active and in force, explain what benefits are payable, and send you a claim form. Have the policy number ready if you have it, but insurers can also look up policies using the deceased's name, date of birth, and address. Most insurers have dedicated bereavement teams who will guide you through the process.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Step 2: Gather the required documents</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Every insurer is slightly different, but you will typically need:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>The original or a certified copy of the death certificate</li>
            <li>The policy document (if available)</li>
            <li>A completed claim form (provided by the insurer)</li>
            <li>Proof of the claimant's identity (passport or driving licence)</li>
            <li>Proof of relationship to the deceased (marriage certificate, birth certificate)</li>
            <li>The Grant of Probate or Letters of Administration (if the policy is not in trust)</li>
            <li>The claimant's bank details for the payout</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Step 3: Submit the claim</h3>
          <p className="text-sm text-muted leading-relaxed">
            Return the completed claim form with all supporting documents. Send copies rather than originals where possible, and use tracked delivery. Keep copies of everything you send. The insurer will acknowledge receipt and give you a reference number. They may need to verify the claim with the deceased's GP or request further information. Ask for a specific timeline so you know when to expect the decision.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Step 4: Receive the payout</h3>
          <p className="text-sm text-muted leading-relaxed">
            Once the claim is approved, the payout is made by bank transfer. For policies in trust, the payment goes directly to the named beneficiaries. For policies not in trust, the payment goes to the estate (the executor's bank account). Most straightforward claims are paid within 4 to 8 weeks. The insurer will send a letter confirming the amount paid and any deductions.
          </p>
        </div>
      </div>

      {/* Policies in trust vs not in trust */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Policies written in trust vs not in trust</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What does "written in trust" mean?</h3>
          <p className="text-sm text-muted leading-relaxed">
            When a life insurance policy is placed in trust, it is legally held by trustees for the benefit of named beneficiaries. This means the payout does not form part of the deceased's estate. It is paid directly to the beneficiaries without waiting for probate, and it does not count towards the estate for inheritance tax purposes. This is a significant advantage. Many financial advisers recommend placing life insurance in trust as standard. Check the policy documents for any mention of a trust deed, or ask the insurer directly.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What if the policy is not in trust?</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the policy was not written in trust, the payout goes into the deceased's estate. This means you will usually need probate before the insurer releases the funds. The payout also counts towards the total estate value for inheritance tax. If the estate (including the life insurance payout) exceeds the inheritance tax threshold, 40% tax is due on the excess. The executor will need to account for the payout in the IHT return (form IHT400) before distributing the estate.
          </p>
        </div>
      </div>

      {/* Tax implications */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Tax implications</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Income tax and capital gains tax</h3>
          <p className="text-sm text-muted leading-relaxed">
            Life insurance payouts are not subject to income tax or capital gains tax. The beneficiary receives the full payout amount without any tax deducted. This applies regardless of the size of the payout or whether the policy was in trust or not.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Inheritance tax</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the policy was written in trust, the payout is outside the estate and there is no inheritance tax to pay on it. If the policy was not in trust, the payout is added to the estate value. The current nil-rate band is £325,000 (plus up to £175,000 residence nil-rate band if a home is passed to direct descendants). Anything above this is taxed at 40%. If a large life insurance payout pushes the estate over the threshold, the tax bill can be substantial. This is why placing policies in trust is so important.
          </p>
        </div>
      </div>

      {/* Common reasons for delays */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common reasons claims are delayed or rejected</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Non-disclosure</h3>
          <p className="text-sm text-muted leading-relaxed">
            When the policyholder applied for the insurance, they were asked health and lifestyle questions. If they did not disclose a pre-existing medical condition, smoking habit, or high-risk occupation, the insurer may investigate. In serious cases, they can void the policy entirely. Under the Insurance Act 2015, the policyholder has a duty to take "reasonable care" not to misrepresent material facts. Minor or innocent omissions are less likely to invalidate a claim.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Suicide exclusion</h3>
          <p className="text-sm text-muted leading-relaxed">
            Most life insurance policies exclude death by suicide within the first 12 months of the policy (some specify 24 months). After this exclusion period, death by suicide is covered. If the death is under investigation by a coroner, the insurer will wait for the inquest outcome before making a decision. This can delay the claim by several months.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Lapsed policy</h3>
          <p className="text-sm text-muted leading-relaxed">
            If premium payments stopped before the death, the policy may have lapsed. Some policies have a grace period (typically 30 days) during which the policy remains active even if a payment is missed. Check with the insurer whether the policy was still in force at the date of death. If premiums were missed due to the policyholder's illness, you may be able to argue that the policy should be reinstated.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What to do if a claim is rejected</h3>
          <p className="text-sm text-muted leading-relaxed">
            Ask the insurer for a full written explanation of why the claim has been declined. If you disagree, use the insurer's formal complaints procedure. If the complaint is not resolved to your satisfaction, you can escalate to the Financial Ombudsman Service (financial-ombudsman.org.uk, 0800 023 4567). The Ombudsman can order the insurer to pay the claim if they find the rejection was unfair. There is no charge for using the Ombudsman service.
          </p>
        </div>
      </div>

      {/* Important note */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>There is no time limit for making a life insurance claim.</strong> Even if the death happened months or years ago, you can still claim. Insurers cannot refuse a valid claim simply because it was submitted late. If you have recently discovered a policy you did not know about, contact the insurer and they will process it.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about life insurance claims</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <PageDisclaimer lastReviewed="March 2026" jurisdiction="all-uk" />

      <RelatedGuides currentPath="/guides/life-insurance-claim" guides={['/guides/mortgage-after-death', '/guides/pensions-after-death', '/guides/inheritance-tax', '/guides/finding-accounts-after-death']} />

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
              { '@type': 'ListItem', position: 3, name: 'Life Insurance Claim', item: 'https://helpafterloss.co.uk/guides/life-insurance-claim' },
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
            headline: 'How to Claim Life Insurance After a Death in the UK (2026)',
            description: 'Step-by-step guide to finding and claiming life insurance policies after a death. Covers employer policies, mortgage protection, trust status, and tax.',
            url: 'https://helpafterloss.co.uk/guides/life-insurance-claim',
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
