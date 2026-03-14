import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Property After Death: Mortgages, Selling & Council Tax',
  description: 'What happens to property when someone dies in the UK. Joint tenants vs tenants in common, mortgage options, selling before probate, council tax exemptions, and capital gains tax on inherited property.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/property-after-death' },
  openGraph: {
    title: 'Property After Death: Mortgages, Selling & Council Tax',
    description: 'Everything you need to know about dealing with property after a death: ownership, mortgages, council tax, and selling.',
    url: 'https://helpafterloss.co.uk/guides/property-after-death',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property After Death: Mortgages, Selling & Council Tax',
    description: 'What happens to property when someone dies, including mortgages, council tax, and selling.',
  },
};

const SECTIONS = [
  {
    title: 'Joint tenants vs tenants in common',
    content: 'How a property is owned makes a huge difference to what happens next. If the property was held as "joint tenants," the deceased\'s share passes automatically to the surviving owner. This happens outside of the will and probate. You just need to send the death certificate to the Land Registry to update the title. If the property was held as "tenants in common," the deceased\'s share forms part of their estate and is dealt with through probate. It goes to whoever is named in the will, or according to intestacy rules if there is no will. You can check the ownership type on the Land Registry title register (gov.uk/search-property-information-land-registry, £3 per title).',
  },
  {
    title: 'What happens to the mortgage',
    content: 'The first thing to check is whether there is a life insurance policy or mortgage protection policy. Many mortgages, particularly those taken out through a broker, have an associated life policy designed to pay off the balance on death. Check the deceased\'s paperwork and contact the mortgage lender to ask. If there is no insurance and the mortgage was joint, the surviving borrower takes over the full mortgage. The lender cannot demand immediate repayment. If the mortgage was in the deceased\'s sole name, the estate must either continue the payments, pay off the mortgage, or sell the property. Contact the lender as soon as possible, as they will usually allow a period of grace while the estate is being administered.',
  },
  {
    title: 'Can you sell the property before probate?',
    content: 'If the property was owned as joint tenants, the surviving owner can sell at any time after updating the Land Registry, because the property belongs to them. If the property was in the deceased\'s sole name or held as tenants in common, you cannot complete a sale until probate is granted. You can put the property on the market and accept an offer before probate, but the sale cannot legally complete until you hold the Grant of Probate. Estate agents and conveyancers are used to this and will work around probate timelines.',
  },
  {
    title: 'Council tax on an empty property',
    content: 'When someone dies and their property is left empty, you can apply for a Class F council tax exemption. This exempts the property from council tax from the date of death until six months after the Grant of Probate is issued. After that, the executor or beneficiary becomes liable. Some councils offer further discounts for empty properties, so check with the local authority. If a surviving partner or family member continues to live in the property and is now the only adult, they can claim the 25% single person discount.',
  },
  {
    title: 'Capital gains tax on inherited property',
    content: 'When you inherit a property, its base cost for capital gains tax (CGT) purposes is the probate value (the market value at the date of death). You do not pay CGT on the inheritance itself. You only pay CGT if the property increases in value between the date of death and the date you sell it. If you sell the property for the same price as the probate value, or less, there is no CGT to pay. If the property becomes your main home, it may qualify for Private Residence Relief, which eliminates CGT entirely. The current CGT rate on residential property is 18% for basic rate taxpayers and 24% for higher rate taxpayers.',
  },
  {
    title: 'Clearing the property',
    content: 'There is no legal deadline to clear a deceased person\'s property. While the Class F council tax exemption is in place, you have time. Take it at the pace that feels right. If the property is rented, check the tenancy agreement for notice periods. For owned properties, consider whether items should be valued for the estate before being removed. Keep receipts for anything you pay for (clearance, repairs, storage) as these may be claimable as estate administration expenses.',
  },
  {
    title: 'Rented property',
    content: 'If the deceased was renting, the tenancy does not automatically end on death. For secure or assured tenancies, the tenancy may pass to a spouse or partner who was living in the property. Check the tenancy agreement and speak to the landlord or housing association. For private rentals, the executor may need to give notice and clear the property. The estate is responsible for rent up to the end of the notice period. Shelter (shelter.org.uk, 0808 800 4444) provides free advice on tenancy succession rights.',
  },
  {
    title: 'Insuring an empty property',
    content: 'Standard home insurance policies often exclude cover if the property is left unoccupied for more than 30 consecutive days. Check the existing policy immediately and contact the insurer to let them know about the death. You may need specialist unoccupied property insurance, which typically costs more but covers risks like burst pipes, vandalism, and fire. Keep the property secure, check it regularly, and maintain heating during winter to reduce the risk of damage.',
  },
];

const FAQ = [
  {
    q: 'Can you sell a house before probate is granted?',
    a: 'You can put the house on the market and accept an offer before probate, but the sale cannot legally complete until you hold the Grant of Probate. This is because you do not have the legal authority to transfer ownership until probate is granted. The exception is joint tenants: if the property was owned as joint tenants, the surviving owner can sell without probate because the property passed to them automatically on death.',
  },
  {
    q: 'What happens to a mortgage when someone dies?',
    a: 'Check for life insurance or mortgage protection first, as many mortgages have an associated policy. If there is no insurance and the mortgage was joint, the surviving borrower takes over. If it was sole, the estate must pay it off or the property may need to be sold. Contact the lender promptly. They will usually allow a grace period during estate administration and will not charge penalty interest in the short term.',
  },
  {
    q: 'Do I have to pay council tax on an empty property after death?',
    a: 'Not immediately. You can apply for a Class F council tax exemption, which covers the period from the date of death until six months after the Grant of Probate is issued. After that, council tax becomes payable. The executor or the person who inherits the property is responsible. Apply to the local council with a copy of the death certificate.',
  },
  {
    q: 'What is the difference between joint tenants and tenants in common?',
    a: 'Joint tenants each own the whole property together. When one dies, the property passes automatically to the surviving owner, outside of the will and probate. Tenants in common each own a defined share (often 50/50, but not always). When one dies, their share forms part of their estate and is dealt with through probate. You can check the ownership type on the Land Registry title register for £3.',
  },
  {
    q: 'Do I pay capital gains tax on inherited property?',
    a: 'Not on the inheritance itself. The base cost of the property is set at its market value on the date of death (the probate value). You only pay capital gains tax if the property increases in value between the date of death and the date you sell it. If you move in and it becomes your main home, Private Residence Relief may eliminate CGT entirely.',
  },
  {
    q: 'How long can a property sit empty after someone dies?',
    a: 'There is no legal time limit. However, practical issues arise over time: the council tax exemption expires six months after probate, insurance may lapse if the property is unoccupied for more than 30 days, and an empty property is at risk of damage or break-ins. Most advisers recommend dealing with the property within 12 months if possible, but there is no penalty for taking longer.',
  },
];

export default function PropertyAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Property After Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Property After Death: Mortgages, Selling & Council Tax
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Dealing with a property after someone dies raises many practical questions. Can you sell it? What happens to the mortgage? Do you owe council tax on an empty house? The answers depend on how the property was owned and whether probate is needed. This guide covers all the common situations.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£3</p>
          <p className="text-sm text-muted mt-1">Land Registry title search to check ownership type</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">6 months</p>
          <p className="text-sm text-muted mt-1">Council tax exemption after probate</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">18-24%</p>
          <p className="text-sm text-muted mt-1">CGT rate on residential property gains</p>
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-4 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-semibold text-foreground mb-2">{section.title}</h2>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about property after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/property-after-death" guides={['/guides/debts-after-death', '/guides/inheritance-tax', '/probate', '/guides/executor-duties']} />

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
              { '@type': 'ListItem', position: 3, name: 'Property After Death', item: 'https://helpafterloss.co.uk/guides/property-after-death' },
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
            headline: 'Property After Death: Mortgages, Selling & Council Tax',
            description: 'What happens to property when someone dies in the UK, including mortgages, selling, council tax exemptions, and capital gains tax.',
            url: 'https://helpafterloss.co.uk/guides/property-after-death',
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
