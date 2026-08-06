import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { BlogPrintButton } from '@/components/BlogPrintButton';
import { SupportCta } from '@/components/SupportCta';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Free and Low-Cost Funeral Options in the UK (2026 Guide)',
  description: "Can't afford a funeral? This guide covers every option: council funerals, DWP Funeral Expenses Payment, Children's Funeral Fund, direct cremation, DIY funerals, charitable help, and crowdfunding. No judgement.",
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/free-funeral-options-uk' },
  openGraph: {
    title: 'Free and Low-Cost Funeral Options in the UK (2026 Guide)',
    description: "A practical guide to free and affordable funerals in the UK, including council funerals, DWP help, direct cremation, and DIY options.",
    url: 'https://helpafterloss.co.uk/blog/free-funeral-options-uk',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free and Low-Cost Funeral Options in the UK',
    description: "If you cannot afford a funeral, here are all your options, explained clearly and without judgement.",
  },
};

export default function FreeFuneralOptionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'Free and Low-Cost Funeral Options' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 17 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>11 min read</span>
      </div>
      <BlogPrintButton />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Free and Low-Cost Funeral Options in the UK
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-6">
        The average UK funeral costs £3,828 for a simple attended service and £4,510 for a traditional one, according to the SunLife Cost of Dying Report 2026. For many families, that is simply not affordable, especially when the loss was unexpected. This guide sets out every option available to you, honestly and without judgement. There is always a way to give someone a dignified farewell.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key takeaways</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> If no one can arrange a funeral, the council must do it by law at no cost to the family</li>
          <li className="flex gap-2"><span className="font-bold">+</span> DWP Funeral Expenses Payment covers cremation/burial fees with no cap, plus up to £1,000 if you are on benefits</li>
          <li className="flex gap-2"><span className="font-bold">+</span> The Children's Funeral Fund covers all burial/cremation fees for under-18s with no means test</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Direct cremation from around £1,095 is a dignified, affordable alternative</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Most banks will release funeral funds before probate on receipt of a death certificate and invoice</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'which-option', label: 'Which option is right for you?' },
        { id: 'council-funeral', label: 'Option 1: Public health funeral (council funeral)' },
        { id: 'dwp-payment', label: 'Option 2: DWP Funeral Expenses Payment' },
        { id: 'childrens-fund', label: "Option 3: Children's Funeral Fund" },
        { id: 'direct-cremation', label: 'Option 4: Direct cremation' },
        { id: 'diy-funeral', label: 'Option 5: DIY funeral' },
        { id: 'charitable-help', label: 'Option 6: Charitable and other sources of help' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* Reassurance */}
      <div className="bg-primary-light rounded-xl p-6 mb-10">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>An important note before you read on:</strong> funeral costs are treated as a priority debt of the estate. This means they can be paid from the person's bank accounts before anything else is settled. If the person had any savings at all, ask the funeral director and the bank about releasing funds directly for the funeral before probate is granted. Many banks will do this on receipt of a death certificate and an invoice. This option is often overlooked.
        </p>
      </div>

      {/* Decision guide */}
      <h2 id="which-option" className="text-2xl font-bold text-foreground mb-4">Which option is right for you?</h2>
      <p className="text-sm text-muted mb-6">Work through these questions in order to find the most relevant option for your situation.</p>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm font-semibold text-foreground mb-2">Did the person have any savings, a life insurance policy, or a funeral plan?</p>
          <p className="text-sm text-muted leading-relaxed">If yes, these should cover costs first. Ask the bank about releasing funeral funds before probate. Contact the insurer with the death certificate to claim any life insurance. A pre-paid funeral plan transfers directly to the funeral director.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm font-semibold text-foreground mb-2">Was the person a child under 18, or was it a stillbirth after 24 weeks?</p>
          <p className="text-sm text-muted leading-relaxed">If yes: the Children's Funeral Fund covers burial and cremation fees in England at no cost to you. There is no means test. See the section below for details.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm font-semibold text-foreground mb-2">Are you receiving means-tested benefits?</p>
          <p className="text-sm text-muted leading-relaxed">If yes: you may qualify for a DWP Funeral Expenses Payment. This covers the cremation or burial fee in full, with no cap, plus up to £1,000 for other costs. See below for qualifying benefits and how to claim.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm font-semibold text-foreground mb-2">Is no one willing or able to arrange the funeral?</p>
          <p className="text-sm text-muted leading-relaxed">If yes: the local council is legally required to arrange a public health funeral. This is a last resort option and the council may attempt to recover costs from the estate, but in England and Wales there is no cost to the family.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm font-semibold text-foreground mb-2">Can you arrange it yourself and keep costs to a minimum?</p>
          <p className="text-sm text-muted leading-relaxed">If yes: a direct cremation (from around £1,095) or a DIY funeral (where you handle the arrangements yourself) can reduce costs significantly. Both are completely legal. Details below.</p>
        </div>
      </div>

      {/* Option 1: Public Health Funeral */}
      <h2 id="council-funeral" className="text-2xl font-bold text-foreground mb-6">Option 1: Public health funeral (council funeral)</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What it is</h3>
          <p className="text-sm text-muted leading-relaxed">
            Under section 46 of the Public Health (Control of Disease) Act 1984, every local council in England and Wales has a duty to arrange a funeral if no one else will or can. The equivalent duty is section 87 of the Burial and Cremation (Scotland) Act 2016 in Scotland, and section 25 of the Welfare Services Act (Northern Ireland) 1971, which places the duty on district councils, in Northern Ireland. This is not a charity; it is a legal obligation. The council will arrange a simple cremation (or burial in some circumstances) with no service and no family present, unless you specifically arrange to attend.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The cost to you</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no upfront cost to the family. However, the council will attempt to recover reasonable costs from the estate. If the person left no money or assets, the costs are written off. If there is an estate, even a small one, the council will claim from it before anything is distributed to beneficiaries.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            One point that worries families more than it needs to: in England and Wales, councils have not been able to pursue relatives for these costs since 6 April 2009, when that power was removed from section 46. They can only claim from the estate. The same applies in Scotland. Northern Ireland is the exception, as section 25 still allows a district council to recover from a person who was liable to maintain the deceased, so it is worth asking the council there what their practice is.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">When to use it</h3>
          <p className="text-sm text-muted leading-relaxed">
            A public health funeral is appropriate when the person had no next of kin, when the family genuinely cannot afford any funeral at all, or when there are family disputes about who is responsible. It is not appropriate simply to avoid cost if other options are available. Contact your local council's environmental health department to start the process.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What it does not include</h3>
          <p className="text-sm text-muted leading-relaxed">
            A public health funeral is functional, not ceremonial. There is typically no service, no music, no flowers, and no opportunity for family to say goodbye in a formal way. If the family wants any of these things, they will need to arrange and fund them separately. Some councils do allow family members to attend. Ask your council contact what is possible.
          </p>
        </div>
      </div>

      {/* Option 2: DWP Funeral Expenses Payment */}
      <h2 id="dwp-payment" className="text-2xl font-bold text-foreground mb-6">Option 2: DWP Funeral Expenses Payment</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What it covers</h3>
          <p className="text-sm text-muted leading-relaxed">
            The DWP's Funeral Expenses Payment covers the burial fee for a particular plot or the cremation fee in full, with no cap on that part, plus up to £1,000 for other costs such as the funeral director's fees, coffin and flowers. It also helps with travel to arrange or attend the funeral, moving the person more than 50 miles within the UK, and the cost of death certificates and other documents. If they had a pre-paid funeral plan, the £1,000 drops to £120 towards items the plan does not cover. If the estate has any assets, the DWP will recover the payment from those assets after the funeral. This is the England and Wales scheme. In Scotland it is replaced by Funeral Support Payment, which pays a flat rate of £1,327.75 (£162.05 if there was a fully paid pre-paid plan) on top of burial or cremation costs.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Who qualifies</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            In England and Wales, you can apply if you (the person arranging the funeral) or your partner are currently receiving one of these:
          </p>
          <ul className="space-y-1.5 text-sm text-muted">
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Universal Credit</li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Income-related Employment and Support Allowance (ESA)</li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Pension Credit</li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> Housing Benefit</li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> A Support for Mortgage Interest loan</li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            This list is shorter than it used to be. Tax credits ended in April 2025, and Income Support and income-based Jobseeker's Allowance are no longer listed for England and Wales. If you are still receiving one of those older benefits, please do ring the Bereavement Service anyway rather than assume you are turned down.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Scotland's Funeral Support Payment uses a wider list, which does still include Income Support and income-based Jobseeker's Allowance alongside Universal Credit, Pension Credit, Housing Benefit and income-related ESA.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The relationship rules</h3>
          <p className="text-sm text-muted leading-relaxed">
            You must have been close enough to the person who died. The DWP accepts: spouse or civil partner; partner you lived with; a child (including a stillborn child after 24 weeks); a close relative or close friend (if there is no other more appropriate person who could apply). The DWP will also check whether there are other people who could have applied instead. If there is a closer relative who is not on benefits, you may not qualify.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to apply</h3>
          <p className="text-sm text-muted leading-relaxed">
            Apply on form SF200, which is available at gov.uk or by calling the Bereavement Service on 0800 151 2012 (free to call). You must apply within 6 months of the funeral. The DWP will tell you how much they will pay and may ask for evidence. Payment goes directly to the funeral director in most cases, so you do not need to fund the funeral first and claim back.
          </p>
        </div>
      </div>

      {/* Option 3: Children's Funeral Fund */}
      <h2 id="childrens-fund" className="text-2xl font-bold text-foreground mb-6">Option 3: Children's Funeral Fund</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          The Children's Funeral Fund for England was introduced in 2019. It covers the burial plot or cremation fees for any child under 18, or for a baby born after 24 weeks of pregnancy (including stillbirths), and it also pays up to £300 towards a coffin, shroud or casket. There is no means test and no application form for the family to complete. The funeral director applies directly to the NHS Business Services Authority on your behalf.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Beyond the fees and that £300, the fund does not cover funeral director fees, flowers, or other costs. However, if you are also on qualifying benefits, you can claim a DWP Funeral Expenses Payment for the remaining costs.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          The other nations each have their own arrangement. In Wales, burial and cremation fees are waived and families receive a £500 contribution towards other costs. In Scotland, councils have not charged burial or cremation fees for under-18s since 2018, and there is nothing for the family to apply for. In Northern Ireland, the Child Funeral Fund pays a lump sum of £3,441 towards a basic funeral. Ask your funeral director or local council about the scheme in your nation.
        </p>
      </div>

      {/* Option 4: Direct cremation */}
      <h2 id="direct-cremation" className="text-2xl font-bold text-foreground mb-6">Option 4: Direct cremation</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What it is</h3>
          <p className="text-sm text-muted leading-relaxed">
            A direct cremation is a simple cremation with no funeral service and no mourners at the crematorium. The person is collected by the funeral director, cremated, and their ashes returned to the family. The UK average cost is £1,628 (SunLife Cost of Dying Report 2026), and published prices start from around £1,095 with the national providers. This is significantly cheaper than a traditional funeral but still a private, dignified arrangement.{' '}See our <Link href="/blog/true-cost-of-dying-uk" className="text-primary hover:underline">full cost of dying guide</Link> for a complete breakdown.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">You can still hold a memorial</h3>
          <p className="text-sm text-muted leading-relaxed">
            A direct cremation does not mean there is no opportunity to gather and remember the person. Many families hold a separate memorial service after the cremation: in a garden, a church hall, a favourite pub, or a venue that meant something to the person. The ashes can be present or scattered at the service. There is no time limit, and the memorial can be as simple or as meaningful as you choose.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Finding a provider</h3>
          <p className="text-sm text-muted leading-relaxed">
            Direct cremation providers include Dignity, Pure Cremation, Simplicity Cremations, and various independent funeral directors. In mid-2026 the national providers were publishing prices from around £1,095 to about £1,600, with a national median of £1,545 across all published price lists, so it is well worth comparing two or three. Always check that the provider is a member of the National Association of Funeral Directors (NAFD) or the Society of Allied and Independent Funeral Directors (SAIF), and ask for a full written price list before agreeing to anything, as the lowest headline prices sometimes exclude collection from home or the return of the ashes.
          </p>
        </div>
      </div>

      {/* Option 5: DIY funeral */}
      <h2 id="diy-funeral" className="text-2xl font-bold text-foreground mb-6">Option 5: DIY funeral (arranging without a funeral director)</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Is it legal?</h3>
          <p className="text-sm text-muted leading-relaxed">
            Yes. In England and Wales, there is no legal requirement to use a funeral director. You can legally keep the person at home (in appropriate conditions), build your own coffin, arrange transport in your own vehicle, and contact a crematorium or burial ground directly to book. You will need the death certificate and, for cremation, a Medical Certificate of Cause of Death (MCCD) completed by the attending practitioner and scrutinised by a medical examiner. Since 9 September 2024, the old system of two separate cremation forms (Form Cremation 4 and 5, signed by two doctors) has been replaced by the medical examiner system in England and Wales, removing those doctors' fees entirely. Northern Ireland still uses cremation certificates signed by two doctors, and their fees still apply there. The Natural Death Centre (naturaldeath.org.uk) provides detailed, practical guidance for DIY funerals.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What a DIY funeral might cost</h3>
          <p className="text-sm text-muted leading-relaxed">
            The cremation fee alone (booked directly with the crematorium) is typically £700-£1,100 depending on the area, and unattended slots are often cheaper still. A simple cardboard or wicker coffin costs £100-£400. Since 9 September 2024, the medical examiner system has replaced the old two-doctor cremation certificate process in England and Wales, so there is no longer a separate doctor's fee for cremation forms. Total: roughly £800-£1,500 for a DIY cremation. A DIY burial in a natural burial ground can cost £800-£1,500 for the plot and digging fees.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Is it right for everyone?</h3>
          <p className="text-sm text-muted leading-relaxed">
            A DIY funeral requires someone to be willing and able to handle the practicalities: caring for the person, dealing with paperwork, and coordinating with the crematorium or burial ground. This is not for everyone, and there is absolutely no obligation. But for those who are able and willing, it can be a very meaningful and cost-effective way to care for someone you love.
          </p>
        </div>
      </div>

      {/* Option 6: Charitable and other help */}
      <h2 id="charitable-help" className="text-2xl font-bold text-foreground mb-6">Option 6: Charitable and other sources of help</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Royal British Legion</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the person who died served in the armed forces (or was the spouse, partner, or child of someone who did), the Royal British Legion may be able to help with funeral costs. Contact their welfare team on 0808 802 8080. This is a grant, not a loan, and does not need to be repaid.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Trade union benevolent funds</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many trade unions have benevolent funds that can help members or their families with funeral costs. Check with the person's union if they were a member, or contact the TUC for guidance on which union may apply.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Religious organisations</h3>
          <p className="text-sm text-muted leading-relaxed">
            Many churches, mosques, synagogues, gurdwaras, and other religious organisations have funds to help families who cannot afford a funeral, particularly for members of their congregation. Contact the relevant religious leader directly and explain your situation honestly.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Local charities and community foundations</h3>
          <p className="text-sm text-muted leading-relaxed">
            Local community foundations and charitable trusts sometimes have hardship funds that can help with funeral costs. Search the Directory of Social Change or contact your local Citizens Advice for guidance on what is available in your area.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Funeral directors' own payment plans</h3>
          <p className="text-sm text-muted leading-relaxed">
            Some funeral directors will allow you to pay in instalments, particularly if the estate is going through probate and funds will eventually be released. Ask directly and get the arrangement in writing. Not all funeral directors offer this, but it is worth asking.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Crowdfunding</h3>
          <p className="text-sm text-muted leading-relaxed">
            GoFundMe and JustGiving are both commonly used to raise money for funeral costs. Many families find that friends, colleagues, and community members are willing to contribute when they know there is a specific need. Be clear about what the money is for and how it will be used. GoFundMe does not charge a platform fee; JustGiving charges a small percentage.
          </p>
        </div>
      </div>

      {/* Key reminder */}
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <h3 className="font-semibold text-foreground mb-2">Remember: funeral costs come from the estate first</h3>
        <p className="text-sm text-muted leading-relaxed">
          Even if the person who died had money in the bank, you may not be able to access it immediately without probate. However, most major banks will release funds directly to a funeral director on receipt of the death certificate and a funeral invoice, without waiting for probate. This is called "releasing funds for funeral expenses" and is standard practice. Ask the bank specifically about this before you assume you cannot access the money.
        </p>
      </div>

      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {[
          { q: 'What is the cheapest way to have a funeral in the UK?', a: 'A direct cremation is the most affordable private option, starting from around £1,095 with the national providers, with a UK average of £1,628. There is no service at the crematorium. You can hold a separate memorial at a venue of your choice at little or no cost.' },
          { q: 'Can you have a funeral with no money?', a: "Yes. If you are on qualifying benefits, the DWP Funeral Expenses Payment covers burial or cremation fees in full, with no cap, plus up to £1,000 for other costs. If no one is able to arrange a funeral, the local council is legally required to do so at no cost to the family." },
          { q: 'Who pays for a funeral if there is no money in the estate?', a: "If the person had no money and no one can afford to pay, the local council arranges a public health funeral. In England and Wales this duty is section 46 of the Public Health (Control of Disease) Act 1984; in Scotland it is section 87 of the Burial and Cremation (Scotland) Act 2016, and in Northern Ireland section 25 of the Welfare Services Act (Northern Ireland) 1971. This is a legal obligation, not charity. Since 6 April 2009, English and Welsh councils can only recover the cost from the estate, not from relatives. The family may also be able to claim DWP Funeral Expenses Payment if they are on qualifying benefits." },
          { q: 'Can I arrange a funeral without a funeral director?', a: 'Yes. In England and Wales, there is no legal requirement to use a funeral director. You can keep the person at home, build your own coffin, and book directly with a crematorium or burial ground. The Natural Death Centre provides practical guidance.' },
        ].map((faq, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      {/* Cross-links */}
      <SupportCta />
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Next steps:</strong> After the funeral, you will need to <Link href="/notify" className="text-primary hover:underline">notify organisations</Link> of the death. Our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> and <Link href="/call-scripts" className="text-primary hover:underline">call scripts</Link> make this easier. See our <Link href="/guide" className="text-primary hover:underline">step-by-step guide</Link> for the full process.
        </p>
      </div>

      <RelatedGuides
        currentPath="/blog/free-funeral-options-uk"
        guides={['/costs', '/notify', '/blog/true-cost-of-dying-uk', '/template-letters']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Not sure what applies to your situation?</h2>
        <p className="text-muted mb-6">Our personalised guide helps you work through the practical and financial steps after a bereavement, including which benefits you may be entitled to claim.</p>
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
            image: 'https://helpafterloss.co.uk/opengraph-image',
            headline: 'Free and Low-Cost Funeral Options in the UK',
            description: "A practical guide to free and affordable funeral options in the UK, including council funerals, DWP Funeral Expenses Payment, Children's Funeral Fund, direct cremation, and DIY funerals.",
            datePublished: '2026-03-14',
            dateModified: '2026-03-17',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://helpafterloss.co.uk/blog/free-funeral-options-uk',
            },
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
              { '@type': 'ListItem', position: 2, name: 'Guides & Articles', item: 'https://helpafterloss.co.uk/blog' },
              { '@type': 'ListItem', position: 3, name: 'Free and Low-Cost Funeral Options in the UK', item: 'https://helpafterloss.co.uk/blog/free-funeral-options-uk' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is the cheapest way to have a funeral in the UK?', acceptedAnswer: { '@type': 'Answer', text: 'A direct cremation is the most affordable private option, starting from around £1,095 with the national providers, with a UK average of £1,628. There is no service at the crematorium. You can hold a separate memorial at a venue of your choice at little or no cost.' } },
              { '@type': 'Question', name: 'Can you have a funeral with no money?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. If you are on qualifying benefits, the DWP Funeral Expenses Payment covers burial or cremation fees in full, with no cap, plus up to £1,000 for other costs. If no one is able to arrange a funeral, the local council is legally required to do so at no cost to the family.' } },
              { '@type': 'Question', name: 'Who pays for a funeral if there is no money in the estate?', acceptedAnswer: { '@type': 'Answer', text: 'If the person had no money and no one can afford to pay, the local council arranges a public health funeral. In England and Wales this duty is section 46 of the Public Health (Control of Disease) Act 1984; in Scotland it is section 87 of the Burial and Cremation (Scotland) Act 2016, and in Northern Ireland section 25 of the Welfare Services Act (Northern Ireland) 1971. This is a legal obligation, not charity. Since 6 April 2009, English and Welsh councils can only recover the cost from the estate, not from relatives. The family may also be able to claim DWP Funeral Expenses Payment if they are on qualifying benefits.' } },
              { '@type': 'Question', name: 'Can I arrange a funeral without a funeral director?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In England and Wales, there is no legal requirement to use a funeral director. You can keep the person at home, build your own coffin, and book directly with a crematorium or burial ground. The Natural Death Centre provides practical guidance.' } },
            ],
          }),
        }}
      />
    </div>
  );
}
