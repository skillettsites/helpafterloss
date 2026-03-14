import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Funeral Options: Every Type of Funeral Explained',
  description: 'A complete guide to every type of funeral in the UK, from traditional burial and cremation to direct cremation, green woodland burial, humanist ceremonies, and DIY funerals. Honest cost comparisons and practical advice.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/funeral-options' },
  openGraph: {
    title: 'Funeral Options: Every Type of Funeral Explained',
    description: 'Every type of funeral explained with honest costs. Traditional burial, cremation, direct cremation, green burial, humanist, DIY, and more.',
    url: 'https://helpafterloss.co.uk/guides/funeral-options',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funeral Options: Every Type of Funeral Explained',
    description: 'Honest guide to every type of funeral in the UK with costs, pros and cons.',
  },
};

const FUNERAL_TYPES = [
  {
    type: 'Traditional burial with service',
    cost: '£5,000 to £7,000',
    description: 'The most familiar type of funeral: a service at a church, chapel, or crematorium, followed by burial in a churchyard or cemetery. A funeral director manages the whole process from collecting the deceased to the graveside.',
    includes: ['Collecting and caring for the deceased', 'Coffin of your choice', 'Hearse to the service and graveside', 'Service at a church or chapel', 'Burial plot (if not already owned)', 'Grave digging and backfilling', 'Minister or officiant'],
    pros: 'A permanent physical place to visit and grieve. Well understood by most families and supported by most faiths.',
    cons: 'The most expensive option. Burial plots in many areas are scarce and expensive. Annual maintenance costs for the grave may follow.',
    note: 'Burial plot costs vary enormously by location. In London and the South East, a new single grave can cost £4,000-£7,000 alone. In rural areas, costs can be much lower.',
  },
  {
    type: 'Traditional cremation with service',
    cost: '£4,000 to £5,500',
    description: 'A service at a crematorium or church, followed by cremation. The ashes (also called cremated remains) are returned to the family, usually within a week or two. The family can then scatter, bury, or keep the ashes.',
    includes: ['Collecting and caring for the deceased', 'Coffin', 'Hearse', 'Service at crematorium or chapel', 'Cremation fees', 'Return of ashes in a container'],
    pros: 'More affordable than burial. No ongoing grave maintenance. Flexibility with what you do with the ashes. Can scatter in a meaningful place.',
    cons: 'No permanent grave for those who want one. The crematorium slot is typically 30-60 minutes, which can feel rushed.',
    note: 'You can split the ashes between family members or scatter them in multiple locations. Ask your funeral director about the legal requirements for scattering in your chosen location.',
  },
  {
    type: 'Direct cremation',
    cost: '£1,000 to £2,000',
    description: 'The most affordable option. The person is collected and cremated without a formal service. No mourners attend the cremation itself. The ashes are returned to the family, who can then hold a memorial at any time and place they choose.',
    includes: ['Collecting the deceased', 'Basic coffin', 'Transport to crematorium', 'Cremation', 'Return of ashes'],
    pros: 'Significantly cheaper than a traditional funeral. No time pressure. The family can plan a personal and meaningful memorial at their own pace. Becoming much more common and widely accepted.',
    cons: 'No service at the time of death, which some families find hard. The family does not see the coffin go into the crematorium.',
    note: 'Direct cremation has grown from around 4% of funerals in 2016 to over 20% today. Many families follow it with a personal gathering, a memorial walk, or a scattering ceremony.',
  },
  {
    type: 'Direct burial',
    cost: '£2,000 to £3,500',
    description: 'Similar to direct cremation, but the person is buried without a formal service at the graveside. A simpler, lower-cost burial that gives the family a permanent place to visit.',
    includes: ['Collecting the deceased', 'Basic coffin', 'Transport and burial', 'Burial plot (if available in package)'],
    pros: 'More affordable than a traditional burial. Gives a permanent grave.',
    cons: 'No service. Fewer providers offer this compared to direct cremation.',
    note: 'Some cemeteries and providers offer direct burial packages. Contact local cemeteries directly, as prices vary significantly.',
  },
  {
    type: 'Green or woodland burial',
    cost: '£2,000 to £4,500',
    description: 'The person is buried in a natural burial ground, often a meadow or woodland. A biodegradable coffin or shroud is used. No concrete or metal. The grave is typically marked with a native tree or wildflowers rather than a headstone.',
    includes: ['Natural burial ground plot', 'Biodegradable coffin or shroud', 'Simple ceremony (often outdoors at the graveside)', 'Tree or wildflower marking'],
    pros: 'Environmentally conscious. Often a beautiful, peaceful setting. Lower cost than traditional burial in many cases. Appeals to those who want to give something back to the earth.',
    cons: 'Less formal. The grave may look quite different to a traditional cemetery. Not all areas have a nearby natural burial ground. Headstones are not usually permitted.',
    note: 'The Natural Death Centre maintains a directory of natural burial grounds across the UK at naturaldeath.org.uk.',
  },
  {
    type: 'Humanist or non-religious ceremony',
    cost: '£300 to £500 for the celebrant, plus funeral director costs',
    description: 'A humanist celebrant leads a bespoke ceremony that is entirely tailored to the person who died. No religious content. The focus is on celebrating the person\'s life, with personal readings, music, tributes from friends and family, and stories.',
    includes: ['Meeting with a humanist celebrant to plan the ceremony', 'A personalised written tribute', 'The ceremony itself (at a crematorium, woodland, or any venue)'],
    pros: 'Deeply personal. Suitable for people of no faith or mixed-faith families. No constraints on content, music, or venue.',
    cons: 'The celebrant cost is in addition to other funeral costs. Finding the right celebrant takes time.',
    note: 'Humanists UK trains and accredits celebrants across the country. Find one at humanism.org.uk/ceremonies. Many secular celebrants are also available who are not formally affiliated with Humanists UK.',
  },
  {
    type: 'Religious ceremony',
    cost: 'Varies significantly by faith and denomination',
    description: 'A funeral conducted according to the traditions and requirements of the person\'s faith. Includes Christian (Church of England, Catholic, Baptist, Methodist), Muslim, Jewish, Hindu, Sikh, Buddhist, and many other traditions.',
    includes: ['Religious service led by a minister, imam, rabbi, or equivalent', 'Adherence to specific faith requirements (timing, preparation of the body, burial vs. cremation)'],
    pros: 'Provides spiritual comfort and familiar ritual. Supported by the faith community.',
    cons: 'Requirements vary significantly. Some faiths prohibit cremation (Orthodox Judaism, Islam in most traditions). Muslim funerals ideally take place within 24-48 hours of death.',
    note: 'Our cultural and religious guide covers specific requirements for major faiths in more detail.',
  },
  {
    type: 'DIY funeral',
    cost: 'Potentially £500 to £2,000 or less',
    description: 'It is entirely legal in the UK to arrange a funeral yourself without using a funeral director. The family can wash and lay out the deceased, choose the coffin, transport the body to the crematorium or burial ground, and hold the service entirely themselves.',
    includes: ['Whatever the family chooses to include'],
    pros: 'Can save thousands of pounds. Very personal. Full control over every aspect.',
    cons: 'Requires significant practical organisation at an already difficult time. You will need to handle paperwork yourself, including the cremation forms or burial registration. Not suitable for all families.',
    note: 'The Natural Death Centre (naturaldeath.org.uk) provides detailed guidance on arranging a DIY funeral. They also have a helpline: 01962 712690.',
  },
  {
    type: 'Repatriation',
    cost: '£3,000 to £10,000+ depending on distance',
    description: 'If the person died abroad, repatriation involves returning the body to the UK for a funeral here. Alternatively, some families choose to hold the funeral in the country where the person died and have the ashes repatriated, or arrange a local funeral there.',
    includes: ['Embalming and preparation of the deceased', 'Documentation and customs clearance', 'Specialist flight coffin', 'International transport'],
    pros: 'Allows the family to be together in their home country. May be required by faith or family tradition.',
    cons: 'Significantly more expensive. Can take days or weeks. Requires specialist funeral directors with international experience.',
    note: 'The Foreign, Commonwealth and Development Office (FCDO) can provide guidance if someone dies abroad. Call 020 7008 5000. The British Embassy in the country of death will also assist.',
  },
];

const QUOTE_ITEMS = [
  { item: 'Collection and care of the deceased', note: 'From the place of death to the funeral home, 24 hours a day' },
  { item: 'Preparation and laying out', note: 'Washing, dressing, and care of the body' },
  { item: 'Coffin', note: 'Ranges from simple MDF to solid oak; ask for a basic option if cost is a concern' },
  { item: 'Hearse', note: 'Transport from funeral home to the service and then to the crematorium or cemetery' },
  { item: 'Funeral director\'s service', note: 'Coordinating the whole event' },
  { item: 'Cremation or burial fee', note: 'Paid to the crematorium or cemetery, not kept by the funeral director' },
  { item: 'Minister or officiant', note: 'Church minister, humanist celebrant, or civil celebrant' },
  { item: 'Flowers', note: 'Usually quoted separately; families can provide their own' },
  { item: 'Order of service', note: 'Printing costs; families can often do this themselves' },
  { item: 'Death certificates', note: '£11 each; order at least 5 when you register the death' },
];

const COST_REDUCTION = [
  { title: 'Choose direct cremation', detail: 'Saves £2,500-£4,000 compared to a traditional cremation with service. You can still hold a meaningful memorial gathering afterwards.' },
  { title: 'Get at least 3 quotes', detail: 'Funeral director prices vary by thousands of pounds in the same area. Since 2021, the Competition and Markets Authority requires funeral directors to publish itemised price lists online. Use these to compare.' },
  { title: 'Choose a simple coffin', detail: 'Coffins range from under £300 to over £3,000. A simple chipboard or cardboard coffin is dignified and significantly cheaper. Nobody at the funeral will know or care what the coffin cost.' },
  { title: 'Skip what you don\'t need', detail: 'You don\'t have to have flowers, a limousine, or a printed order of service. Remove any item from the quote that doesn\'t feel meaningful to you.' },
  { title: 'Consider a council or municipal funeral', detail: 'Most councils offer a "public health funeral" for those who cannot afford a private funeral. These are modest but dignified.' },
  { title: 'Hold the reception at home', detail: 'A reception after the funeral at someone\'s home, or in a garden or park, can be just as meaningful as a hired venue and costs very little.' },
  { title: 'Ask about the Society of Allied and Independent Funeral Directors (SAIF)', detail: 'Independent funeral directors often charge less than national chains. Look for SAIF or NAFD (National Association of Funeral Directors) members.' },
];

const PLANNING_AHEAD = [
  { title: 'Pre-paid funeral plans', detail: 'A pre-paid plan lets you fix the funeral director\'s costs at today\'s prices. Since July 2022, all funeral plan providers must be authorised by the Financial Conduct Authority (FCA). Check that any plan you consider is FCA-regulated.' },
  { title: 'What to look for in a funeral plan', detail: 'Check exactly what is included (some plans do not cover cremation or burial fees). Check what happens if the funeral director goes out of business. Check whether you can change provider.' },
  { title: 'Writing your wishes down', detail: 'Even without a pre-paid plan, writing down your funeral wishes clearly and telling your next of kin where to find them is enormously helpful. It removes uncertainty at a difficult time.' },
  { title: 'Funeral savings', detail: 'Some people prefer to put money aside in a savings account rather than take out a plan. If you do this, make sure someone knows about the savings and that they are accessible when needed.' },
];

export default function FuneralOptionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Funeral Options: Every Type Explained' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Funeral Options: Every Type Explained
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        There are more options than most people realise. Funerals do not have to follow a single template, and the right choice depends on the wishes of the person who died, your family's needs, and your budget. This guide explains every type of funeral honestly, with real cost comparisons, so you can make the decision that is right for you.
      </p>

      {/* Key stat callout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£4,200</p>
          <p className="text-sm text-muted mt-1">UK average cremation with service</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£1,600</p>
          <p className="text-sm text-muted mt-1">UK average direct cremation</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£5,400</p>
          <p className="text-sm text-muted mt-1">UK average traditional burial</p>
        </div>
      </div>

      {/* CMA notice */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <h3 className="font-semibold text-amber-800 mb-2">Your right to an itemised quote</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          Since September 2021, the Competition and Markets Authority (CMA) requires all funeral directors in England, Scotland, and Wales to display itemised prices on their websites. You have the right to ask for a full itemised quote before agreeing to anything. Never accept a package price without understanding exactly what is and is not included.
        </p>
      </div>

      {/* All funeral types */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Every type of funeral explained</h2>
      <div className="space-y-6 mb-12">
        {FUNERAL_TYPES.map((funeral, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-foreground">{funeral.type}</h3>
              <span className="text-primary font-bold text-sm ml-4 flex-shrink-0">{funeral.cost}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">{funeral.description}</p>
            <div className="mb-4">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Typically includes</p>
              <ul className="space-y-1">
                {funeral.includes.map((item, j) => (
                  <li key={j} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div className="bg-background rounded-lg p-3 border border-border">
                <p className="text-xs font-semibold text-foreground mb-1">Advantages</p>
                <p className="text-xs text-muted leading-relaxed">{funeral.pros}</p>
              </div>
              <div className="bg-background rounded-lg p-3 border border-border">
                <p className="text-xs font-semibold text-foreground mb-1">Considerations</p>
                <p className="text-xs text-muted leading-relaxed">{funeral.cons}</p>
              </div>
            </div>
            {funeral.note && (
              <p className="text-xs text-muted italic leading-relaxed border-t border-border pt-3">{funeral.note}</p>
            )}
          </div>
        ))}
      </div>

      {/* What's in a quote */}
      <h2 className="text-2xl font-bold text-foreground mb-4">What is included in a funeral director's quote?</h2>
      <p className="text-muted text-sm leading-relaxed mb-6">Understanding what each line item means helps you question anything that seems unnecessary or overpriced.</p>
      <div className="space-y-3 mb-12">
        {QUOTE_ITEMS.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-4 flex gap-4">
            <span className="text-primary font-bold text-sm flex-shrink-0 w-6 text-right">{i + 1}.</span>
            <div>
              <p className="font-semibold text-foreground text-sm">{item.item}</p>
              <p className="text-xs text-muted mt-0.5 leading-relaxed">{item.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ways to reduce costs */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Ways to reduce costs</h2>
      <div className="space-y-4 mb-12">
        {COST_REDUCTION.map((item, i) => (
          <div key={i} className="bg-success-light rounded-xl p-5">
            <h3 className="font-semibold text-green-800 mb-2">{item.title}</h3>
            <p className="text-sm text-green-800/80 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Financial help */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Financial help with funeral costs</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Funeral Expenses Payment</h3>
          <p className="text-sm text-muted leading-relaxed">If you receive Universal Credit, Pension Credit, Housing Benefit, or certain other means-tested benefits, you may be entitled to help from the DWP. This covers burial or cremation fees in full, plus up to £1,000 towards other costs. Apply within 6 months of the funeral on form SF200. Call 0800 731 0469 for more information.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Children's Funeral Fund</h3>
          <p className="text-sm text-muted leading-relaxed">If a child under 18 dies in England (or a baby is stillborn after 24 weeks), the Children's Funeral Fund covers burial or cremation costs. There is no means test. Tell your funeral director at the first meeting and they will handle the application.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Trade union and employer schemes</h3>
          <p className="text-sm text-muted leading-relaxed">Some trade unions and employer pension schemes include a death grant or lump sum that can help with funeral costs. Check the deceased's union membership and any workplace pension documentation.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Crowdfunding</h3>
          <p className="text-sm text-muted leading-relaxed">GoFundMe and similar platforms are increasingly used to raise money for funeral costs, particularly when deaths are unexpected or when the deceased was young. This can be set up quickly and shared through social media. Many people are glad to have a practical way to help.</p>
        </div>
      </div>

      {/* Planning ahead */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Planning ahead</h2>
      <div className="space-y-4 mb-12">
        {PLANNING_AHEAD.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/funeral-options" guides={['/costs', '/cultural-guide', '/guide', '/guides/bereavement-benefits']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need help deciding what to do?</h2>
        <p className="text-muted mb-6">Our personalised guide will walk you through the decisions in the right order, based on your specific circumstances.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'Funeral Options', item: 'https://helpafterloss.co.uk/guides/funeral-options' },
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
            headline: 'Funeral Options: Every Type of Funeral Explained',
            description: 'A complete guide to every type of funeral in the UK with honest cost comparisons.',
            url: 'https://helpafterloss.co.uk/guides/funeral-options',
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
