import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'When Your Spouse or Partner Dies - Financial and Practical Guide',
  description: 'What to do when your husband, wife, or civil partner dies in the UK. Covers Bereavement Support Payment, joint accounts, mortgages, pension benefits, council tax, and the rights of unmarried partners.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/lost-a-spouse' },
  openGraph: {
    title: 'When Your Spouse or Partner Dies - Financial and Practical Guide',
    description: 'Practical guidance for people who have lost a spouse or civil partner in the UK, covering benefits, finances, and legal steps.',
    url: 'https://helpafterloss.co.uk/guides/lost-a-spouse',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When Your Spouse or Partner Dies - Financial and Practical Guide',
    description: 'Bereavement Support Payment, joint accounts, pensions, council tax, and the rights of cohabiting partners.',
  },
};

export default function LostASpousePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When Your Spouse or Partner Dies
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Losing your partner is the most significant loss most people will ever experience. At the same time, the financial and practical implications are considerable. This guide focuses on the steps that matter most for surviving spouses and partners, including the benefits you may be entitled to and the financial changes you will need to manage.
      </p>

      {/* Immediate steps */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Immediate steps</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">You are next of kin</h3>
          <p className="text-sm text-muted leading-relaxed">
            As a spouse or civil partner, you are legally next of kin. Hospitals, GPs, and the coroner will treat you as the primary contact. You have the right to make funeral decisions and to apply for probate (or Letters of Administration if there is no will). If you and your partner were separated but not divorced, you may still hold this legal position: check with a solicitor if there is any uncertainty.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Registering the death</h3>
          <p className="text-sm text-muted leading-relaxed">
            Register the death within 5 days in England and Wales (8 days in Scotland) at the local register office. You will need the Medical Certificate of Cause of Death. Order at least 6 to 8 certified copies of the death certificate at £11 each: you will need one for each bank, insurance policy, pension provider, the mortgage lender, and various government departments. Use Tell Us Once at the appointment to notify the DWP, HMRC, DVLA, and other bodies in a single step.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Contacting the DWP immediately</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your partner received any state benefits or the state pension, these must be stopped promptly. Overpayments have to be repaid. Call the DWP bereavement service on 0800 731 0469. They will also tell you what you may be entitled to claim, including Bereavement Support Payment (see below). The earlier you call, the more of your entitlement you will receive.
          </p>
        </div>
      </div>

      {/* Bereavement Support Payment */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Bereavement Support Payment</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What is Bereavement Support Payment?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Bereavement Support Payment (BSP) is a government benefit for surviving spouses and civil partners who are under State Pension age when their partner dies. It is paid as a lump sum followed by monthly payments for 18 months. It does not count as income for tax purposes and does not affect most other benefits. You must have been legally married or in a civil partnership: it is not available to cohabiting couples (see below).
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Higher rate: with dependent children</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you have at least one dependent child or are pregnant: you receive a lump sum of £3,500 followed by £350 per month for up to 18 months. The lump sum is paid in the first month. To qualify for the higher rate, you must be entitled to Child Benefit (or would be if you applied). You do not need to be receiving Child Benefit at the time of the death.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Standard rate: without dependent children</h3>
          <p className="text-sm text-muted leading-relaxed">
            Without dependent children: you receive a lump sum of £2,500 followed by £100 per month for up to 18 months. The total standard rate payment over 18 months is £4,300. Payments stop if you reach State Pension age during the 18 months.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to claim and the time limit</h3>
          <p className="text-sm text-muted leading-relaxed">
            Claim as soon as possible after the death. If you claim within 3 months, your payments are backdated to the date of death. If you claim later, you will lose some months of payment. Claim online at gov.uk/bereavement-support-payment or by calling the DWP on 0800 731 0469. You will need the death certificate, your partner's National Insurance number, and your bank details.
          </p>
        </div>
      </div>

      {/* Joint accounts and mortgage */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Joint accounts, mortgage, and property</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Joint bank accounts</h3>
          <p className="text-sm text-muted leading-relaxed">
            Joint accounts continue to operate normally after one account holder dies. The surviving partner can continue using the account. Notify the bank of the death so they can update their records and remove the deceased's name. Joint accounts do not form part of the estate and do not require probate. Sole accounts in your partner's name will be frozen until probate is granted.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The mortgage</h3>
          <p className="text-sm text-muted leading-relaxed">
            Contact your mortgage lender as soon as possible. If your partner had life insurance linked to the mortgage, the policy will pay it off directly. If not, the mortgage continues and becomes your sole responsibility. Lenders are generally understanding during bereavement and most will offer a payment holiday if you need time to sort things out. Ask about changing the mortgage to a sole name, and check what any change in income means for your affordability. Some lenders will require probate before making changes.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Property ownership: joint tenants vs tenants in common</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you owned the property as joint tenants, your partner's share passes automatically to you on their death, without going through probate. You will need to register the change with the Land Registry (form DJP, no fee for the survivorship application itself). If you owned as tenants in common, your partner's share forms part of their estate and must go through probate. Check the Land Registry title for your property to confirm which applies.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Council tax: single person discount</h3>
          <p className="text-sm text-muted leading-relaxed">
            Once you are the only adult in the property, you are entitled to a 25% council tax discount. Contact your local council to apply. The discount is not automatic: you must request it. You may also be entitled to a council tax exemption for the period immediately after the death (up to 6 months in some circumstances). If you move to a smaller property, council tax will obviously also change.
          </p>
        </div>
      </div>

      {/* Pensions */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Pension survivor benefits</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Workplace and private pensions</h3>
          <p className="text-sm text-muted leading-relaxed">
            Contact every pension provider your partner had. Many workplace pensions include a survivor's pension, which pays a proportion of your partner's pension to you for life (often 50% of their entitlement). There may also be a lump sum death benefit, particularly from defined contribution (money purchase) pensions. Check whether your partner completed a nomination of beneficiary form: pension death benefits are often paid at the trustees' discretion to the nominated person, outside the estate.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">State pension for surviving spouses</h3>
          <p className="text-sm text-muted leading-relaxed">
            If your partner had a state pension or had made National Insurance contributions, you may be able to inherit some of their entitlement to boost your own state pension. This is more likely if you or your partner reached State Pension age before April 2016, under the old system. Under the new state pension (post-2016), inheritance is more limited. Contact the Pension Service on 0800 731 0469 to find out exactly what you are entitled to.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Other benefits to check</h3>
          <p className="text-sm text-muted leading-relaxed">
            Your household income will have changed significantly. Check whether you are now entitled to Universal Credit, Pension Credit (if you are over the qualifying age), Housing Benefit, or Council Tax Support. Use the benefits calculator at entitledto.co.uk or turn2us.org.uk to see what you qualify for. Do not assume you are not entitled: many surviving spouses are surprised by what they can claim.
          </p>
        </div>
      </div>

      {/* Emotional support prompt */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          There is a lot to do, and it can feel relentless. Please do not try to sort everything at once. The financial and legal tasks will wait a little longer than you think. If you need to talk to someone, the Cruse Bereavement Support helpline is free: <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>.
        </p>
      </div>

      {/* Changing names on documents */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Changing documents and accounts</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Documents to update in your name</h3>
          <p className="text-sm text-muted leading-relaxed">
            Over the weeks and months ahead, you will need to update a range of accounts and documents. Work through these at your own pace: the V5C logbook for any car you are keeping (DVLA form V62), your home insurance, contents insurance, utility accounts, broadband and TV accounts, any investment or savings accounts you held jointly, and any rental income properties. Use our <Link href="/template-letters" className="text-primary font-medium hover:underline">template letters</Link> to make this easier.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Car insurance</h3>
          <p className="text-sm text-muted leading-relaxed">
            Notify your car insurer of the change in household circumstances. If your partner was named on the policy, remove them. If your partner owned the car and it is now being transferred to you, you will need to update the V5C with the DVLA and arrange insurance in your own name before driving the vehicle. Driving without valid insurance is a serious offence. Contact the DVLA on 0300 790 6802 for vehicle registration queries.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Your own will and lasting power of attorney</h3>
          <p className="text-sm text-muted leading-relaxed">
            This is a difficult time to think about, but important: review your own will. If your partner was your main beneficiary and executor, you need to update it. Similarly, if your partner held Lasting Power of Attorney for you, that ends with their death and you should consider putting a new one in place. A solicitor can help, or you can update a will through a reputable online service from around £100.
          </p>
        </div>
      </div>

      {/* Cohabiting partners */}
      <h2 className="text-2xl font-bold text-foreground mb-6">If you were not married or in a civil partnership</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Cohabiting partners have fewer legal rights</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you were living together but not married or in a civil partnership, the law treats you very differently from a spouse. You are not automatically entitled to inherit anything unless you are named in the will. You cannot claim Bereavement Support Payment. You may not have the right to remain in a jointly rented home without being named on the tenancy. You may have fewer rights to pension death benefits, depending on the scheme rules. This is a deeply unfair situation that many people do not discover until it is too late.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What cohabiting partners can do</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you are named in the will, you can inherit and apply for probate as administrator alongside any executor. If you are not named in the will, or there is no will, you can make a claim under the Inheritance (Provision for Family and Dependants) Act 1975 if you were financially dependent on your partner, or lived with them for at least 2 years before the death. You must act within 6 months of probate being granted. Get legal advice immediately if you are in this situation.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Inheritance tax for cohabiting couples</h3>
          <p className="text-sm text-muted leading-relaxed">
            Married couples and civil partners can leave everything to each other free of inheritance tax. This exemption does not apply to cohabiting partners. If your partner's estate passes to you as a cohabiting partner, inheritance tax may be due at 40% on everything above £325,000. There is no equivalent of the spouse exemption. This can mean a significant tax bill on a shared home. Get professional advice early.
          </p>
        </div>
      </div>

      {/* Emotional support */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Emotional support and taking care of yourself</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The grief of losing a partner</h3>
          <p className="text-sm text-muted leading-relaxed">
            Losing your partner affects every part of your daily life. The grief is not just emotional: it is the absence of someone who shared your routines, your decisions, your home, and your plans for the future. Many people describe it as losing their identity as much as losing a person. Grief after losing a spouse can last for years and may look very different from what you expected. There is no correct way to grieve and no set timeline.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Support specifically for widows and widowers</h3>
          <p className="text-sm text-muted leading-relaxed">
            Widowed and Young (WAY) supports people widowed under 51: way.org.uk or 0300 012 4929. Cruse Bereavement Support: free helpline 0808 808 1677. The Bereavement Advice Centre: 0800 634 9494, with specific financial guidance for bereaved people. Sue Ryder online bereavement counselling: sueryder.org. Your GP can refer you to local counselling or talking therapies on the NHS.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If you have children</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you have children, you are managing your own grief while also supporting theirs. Winston's Wish supports bereaved children and their families: winstonswish.org or 08088 020 021. Child Bereavement UK also offers support for the whole family: childbereavementuk.org or 0800 02 888 40. Be honest with children at an age-appropriate level: children generally cope better with truthful, simple explanations than with silence or euphemism.
          </p>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a checklist tailored to your situation</h2>
        <p className="text-muted mb-6">Answer a few questions about your circumstances and we will give you a personalised list of exactly what to do next.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guides/lost-a-spouse" guides={['/guides/bereavement-benefits', '/probate', '/template-letters', '/tell-us-once']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'When Your Spouse or Partner Dies',
            description: 'Financial and practical guidance for surviving spouses and civil partners in the UK.',
            datePublished: '2026-03-14',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: { '@type': 'Organization', name: 'Help After Loss', url: 'https://helpafterloss.co.uk' },
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
              { '@type': 'ListItem', position: 3, name: 'When a Spouse Dies', item: 'https://helpafterloss.co.uk/guides/lost-a-spouse' },
            ],
          }),
        }}
      />
    </div>
  );
}
