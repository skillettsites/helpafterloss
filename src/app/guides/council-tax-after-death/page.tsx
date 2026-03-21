import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';

export const metadata: Metadata = {
  title: 'Council Tax After Death: Exemptions, Discounts & What to Do',
  description: 'What happens to council tax when someone dies. How to get the Class F exemption on empty properties, claim single person discount, and what executors need to know about council tax liability.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/council-tax-after-death' },
  openGraph: {
    title: 'Council Tax After Death: Exemptions, Discounts & What to Do',
    description: 'Council tax exemptions, discounts, and what to do when someone dies. Class F exemption, single person discount, and executor responsibilities explained.',
    url: 'https://helpafterloss.co.uk/guides/council-tax-after-death',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Council Tax After Death: Exemptions, Discounts & What to Do',
    description: 'Council tax exemptions, discounts, and what executors need to know after a death.',
  },
};

const SECTIONS = [
  {
    title: 'Notify the council as soon as possible',
    content: 'The council needs to know about the death so they can adjust the council tax account. If you used Tell Us Once when registering the death, the council will be notified automatically. If not, contact them directly by phone or in writing. They will need the date of death, the full name and address of the deceased, and details of anyone else living at the property. Most councils have a dedicated bereavement team who can deal with this quickly.',
  },
  {
    title: 'Single person discount (25% off)',
    content: 'If one adult remains living in the property, they can claim a 25% single person discount. This takes effect from the date of death, not from when you apply, so you will receive a backdated adjustment. Apply to your local council as soon as possible. You can usually do this online or by phone. Students, people with severe mental impairments, and live-in carers do not count as adults for council tax purposes, so even if they are in the property, the remaining adult may still qualify.',
  },
  {
    title: 'Class F exemption for empty properties',
    content: 'If the property is left empty after the death (because the deceased lived alone, or because all occupants have moved out), it qualifies for a Class F exemption. This means no council tax is payable from the date of death until six months after probate (Grant of Representation) is granted. The exemption is not automatic. You must apply to the council and provide a copy of the death certificate. Once probate is granted, send a copy of the grant to the council so they can calculate the six-month period correctly.',
  },
  {
    title: 'What executors are responsible for',
    content: 'Council tax on the deceased\'s property is paid from the estate, not from the executor\'s personal funds. During the Class F exemption period, nothing is owed. Once the exemption ends, full council tax becomes payable and should be paid from estate funds. If the property is sold or transferred to a beneficiary before the exemption expires, the new owner becomes responsible from that point. Keep all council tax correspondence and receipts as part of the estate records.',
  },
  {
    title: 'Second adult rebate',
    content: 'The second adult rebate was abolished in England in April 2013 as part of council tax benefit reforms. It still exists in Wales and some parts of Scotland. If you are in Wales or Scotland and another adult remains in the property but is on a low income (for example, receiving Jobseeker\'s Allowance, Income Support, or Pension Credit), you may be able to claim a second adult rebate instead of the single person discount. Check with your local authority whether this applies in your area. In England, the 25% single person discount is the main reduction available if you become the sole adult occupant.',
  },
  {
    title: 'Council tax reduction (benefit) changes',
    content: 'If the deceased was receiving council tax reduction (formerly council tax benefit), this stops on the date of death. The surviving partner will need to make a new claim in their own name, based on their own income and circumstances. Do this promptly, as some councils will backdate claims but others will not. If the surviving partner is a pensioner on a low income, they are very likely to qualify for a council tax reduction in their own right.',
  },
  {
    title: 'After the exemption period ends',
    content: 'Once the Class F exemption expires (six months after probate), full council tax becomes payable on the property. If the property is still empty, some councils charge a premium on top of the standard rate for long-term empty properties. It is worth asking the council about any discretionary discounts or hardship relief if the estate is taking longer than expected to administer. Every council has slightly different policies, so always ask.',
  },
];

const FAQ = [
  {
    q: 'Do I have to pay council tax on an empty property after someone dies?',
    a: 'Not immediately. An empty property qualifies for the Class F exemption, which means no council tax is payable from the date of death until six months after probate is granted. You must apply to the council for this exemption. After the six-month period, full council tax applies.',
  },
  {
    q: 'How do I get a council tax exemption after a death?',
    a: 'Contact your local council\'s council tax department and tell them about the death. Provide the death certificate and explain that the property is empty. They will apply the Class F exemption from the date of death. If you used Tell Us Once, the council may already have been notified, but it is still worth calling to confirm.',
  },
  {
    q: 'How long does the council tax exemption last?',
    a: 'The Class F exemption runs from the date of death until six months after probate (the Grant of Representation) is issued. If probate takes 4 months and then you get a further 6 months of exemption, the total could be 10 months or more. After that, full council tax is payable.',
  },
  {
    q: 'Can I claim single person discount after bereavement?',
    a: 'Yes. If there is now only one adult living in the property, you can claim a 25% single person discount. This is backdated to the date of death. Apply to your council online, by phone, or in writing.',
  },
  {
    q: 'Is the executor responsible for paying council tax?',
    a: 'The executor is responsible for managing the estate\'s finances, which includes paying council tax from estate funds. The executor does not pay from their own pocket. If the property is empty, the Class F exemption should cover the initial period. After that, any council tax due is an estate expense.',
  },
];

export default function CouncilTaxAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Council Tax After a Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Council Tax After a Death
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone dies, their council tax situation changes immediately. You may be entitled to an exemption, a discount, or both. Knowing what to claim and when can save hundreds of pounds.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
        alt="A miniature model house with keys on a table"
        credit="Avi Waxman"
        creditUrl="https://unsplash.com/@aviosly"
      />

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">25% off</p>
          <p className="text-sm text-muted mt-1">Single person discount if one adult remains</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">6 months</p>
          <p className="text-sm text-muted mt-1">Exemption after probate for empty properties</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">Class F</p>
          <p className="text-sm text-muted mt-1">The exemption code for properties left empty after death</p>
        </div>
      </div>

      {/* Important note */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Important:</strong> Council tax rules and discretionary discounts vary between local authorities. The information here covers the standard rules in England. Scotland, Wales, and Northern Ireland have slightly different systems. Always contact your local council directly to confirm what applies.
        </p>
      </div>

      {/* Content sections */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What you need to know</h2>
      <div className="space-y-4 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about council tax after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/council-tax-after-death" guides={['/guides/property-after-death', '/tell-us-once', '/guides/executor-duties', '/costs']} />

      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist covering council tax, property, and everything else you need to deal with.</p>
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
              { '@type': 'ListItem', position: 3, name: 'Council Tax After Death', item: 'https://helpafterloss.co.uk/guides/council-tax-after-death' },
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
            headline: 'Council Tax After Death: Exemptions, Discounts & What to Do',
            description: 'What happens to council tax when someone dies. Exemptions, discounts, and what executors need to know.',
            url: 'https://helpafterloss.co.uk/guides/council-tax-after-death',
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
