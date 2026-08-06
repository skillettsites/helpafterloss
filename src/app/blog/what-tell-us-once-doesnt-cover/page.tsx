import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { BlogPrintButton } from '@/components/BlogPrintButton';
import { SupportCta } from '@/components/SupportCta';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'What Tell Us Once Doesn\'t Cover: The Full List',
  description: 'Tell Us Once only notifies government departments. You still need to contact banks, insurers, energy companies, telecoms, and dozens more. Here is every organisation Tell Us Once misses.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/what-tell-us-once-doesnt-cover' },
  openGraph: {
    title: 'What Tell Us Once Doesn\'t Cover: The Full List',
    description: 'The complete list of organisations you still need to contact after using Tell Us Once, with links to notification guides for each one.',
    url: 'https://helpafterloss.co.uk/blog/what-tell-us-once-doesnt-cover',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Tell Us Once Doesn\'t Cover: The Full List',
    description: 'Tell Us Once misses banks, insurers, energy companies, and dozens more. Here is what you still need to do.',
  },
};

const COVERED = [
  { name: 'Department for Work and Pensions (DWP)', detail: 'State Pension, Pension Credit, Universal Credit, and all other benefits', link: '/notify/dwp' },
  { name: 'HM Revenue and Customs (HMRC)', detail: 'Income tax, tax credits, and National Insurance', link: '/notify/hmrc' },
  { name: 'DVLA', detail: 'cancels the driving licence, removes the person as registered keeper of up to 5 vehicles, and ends the vehicle tax. You must still tell DVLA yourself if you sell a vehicle, keep one, or want to keep a personalised registration number', link: '/notify/dvla' },
  { name: 'HM Passport Office', detail: 'cancels the passport. It does not offer the option of having the passport returned as a keepsake, which form D1 does', link: '/notify/passport-office' },
  { name: 'Electoral register', detail: 'Removal from the electoral roll', link: null },
  { name: 'Local council', detail: 'Council tax, blue badge, library card', link: null },
  { name: 'Veterans UK', detail: 'Armed forces compensation and pensions', link: null },
  { name: 'Social Security Scotland', detail: 'Devolved Scottish benefits', link: null },
  { name: 'Public sector pension schemes', detail: 'NHS, Civil Service, Armed Forces, local government, and Scottish Public Pension Agency schemes', link: null },
];

const NOT_COVERED: { category: string; intro: string; items: { name: string; link: string | null }[] }[] = [
  {
    category: 'Banks and building societies',
    intro: 'Tell Us Once does not contact any bank or building society. You need to notify each one individually, or use the free Death Notification Service (deathnotificationservice.co.uk) to notify several at once.',
    items: [
      { name: 'Barclays', link: '/notify/barclays' },
      { name: 'HSBC', link: '/notify/hsbc' },
      { name: 'Lloyds Bank', link: '/notify/lloyds-bank' },
      { name: 'NatWest', link: '/notify/natwest' },
      { name: 'Santander', link: '/notify/santander' },
      { name: 'Halifax', link: '/notify/halifax' },
      { name: 'Nationwide', link: '/notify/nationwide' },
      { name: 'Yorkshire Building Society', link: '/notify/yorkshire-building-society' },
      { name: 'Coventry Building Society', link: '/notify/coventry-building-society' },
      { name: 'Skipton Building Society', link: '/notify/skipton-building-society' },
      { name: 'Leeds Building Society', link: '/notify/leeds-building-society' },
      { name: 'Principality Building Society', link: '/notify/principality-building-society' },
    ],
  },
  {
    category: 'Insurance companies',
    intro: 'Life insurance, home insurance, car insurance, travel insurance, pet insurance, and private medical insurance all need to be contacted directly. Policies may pay out a lump sum or need to be transferred to another name.',
    items: [
      { name: 'Aviva', link: '/notify/aviva' },
      { name: 'AXA', link: null },
      { name: 'Direct Line', link: null },
      { name: 'Legal & General', link: '/notify/legal-and-general' },
      { name: 'LV=', link: null },
      { name: 'Royal London', link: '/notify/royal-london' },
      { name: 'Zurich', link: null },
    ],
  },
  {
    category: 'Energy companies',
    intro: 'Gas and electricity suppliers need to be told directly. You will need to provide a meter reading and arrange for the account to be closed or transferred to another name.',
    items: [
      { name: 'British Gas', link: '/notify/british-gas' },
      { name: 'EDF Energy', link: '/notify/edf-energy' },
      { name: 'E.ON Next', link: '/notify/eon-next' },
      { name: 'Octopus Energy', link: '/notify/octopus-energy' },
      { name: 'Scottish Power', link: '/notify/scottish-power' },
      { name: 'OVO Energy', link: '/notify/ovo-energy' },
      { name: 'Shell Energy', link: null },
      { name: 'Utilita', link: null },
    ],
  },
  {
    category: 'Telecoms and broadband',
    intro: 'Phone, broadband, and TV providers all require separate notification. Most will waive early termination fees on a bereavement.',
    items: [
      { name: 'BT', link: '/notify/bt' },
      { name: 'Sky', link: '/notify/sky' },
      { name: 'Virgin Media O2', link: '/notify/virgin-media' },
      { name: 'Vodafone', link: null },
      { name: 'EE', link: null },
      { name: 'Three', link: null },
      { name: 'TalkTalk', link: '/notify/talktalk' },
    ],
  },
  {
    category: 'Water companies',
    intro: 'Your local water company needs to be contacted to close or transfer the account. Water companies are regional, so contact whichever one serves the property.',
    items: [
      { name: 'Thames Water', link: '/notify/thames-water' },
      { name: 'Severn Trent', link: null },
      { name: 'United Utilities', link: null },
      { name: 'Anglian Water', link: null },
      { name: 'Yorkshire Water', link: null },
      { name: 'South West Water', link: null },
      { name: 'Southern Water', link: null },
      { name: 'Welsh Water', link: null },
      { name: 'Northumbrian Water', link: null },
    ],
  },
  {
    category: 'Pension providers',
    intro: 'Workplace and private pension providers must be contacted yourself. The State Pension is covered by Tell Us Once through the DWP, and most public sector schemes are covered too, but nothing in the private sector is.',
    items: [
      { name: 'Any workplace pension scheme', link: null },
      { name: 'Any private pension provider', link: null },
    ],
  },
  {
    category: 'Mortgage lenders',
    intro: 'If the person had a mortgage, the lender must be informed. The property forms part of the estate and the mortgage will need to be repaid, transferred, or the property sold.',
    items: [],
  },
  {
    category: 'Landlords and letting agents',
    intro: 'If the person rented their home, notify the landlord or letting agent as soon as possible. The tenancy does not automatically end on death. The estate may be liable for rent until the tenancy is properly ended.',
    items: [],
  },
  {
    category: 'Employers',
    intro: 'Contact the person\'s employer to arrange final salary payments, return any company property, and ask about any death-in-service benefit or workplace pension.',
    items: [],
  },
  {
    category: 'Subscription services',
    intro: 'Cancel or transfer any recurring subscriptions to avoid ongoing charges. Check bank statements for direct debits you might not be aware of.',
    items: [
      { name: 'Netflix', link: null },
      { name: 'Amazon Prime', link: null },
      { name: 'Spotify', link: null },
      { name: 'Apple subscriptions', link: null },
      { name: 'Gym memberships', link: null },
      { name: 'Magazine and newspaper subscriptions', link: null },
    ],
  },
  {
    category: 'Vehicle insurance and breakdown cover',
    intro: 'Do not assume the car is still insured. Some insurers keep cover running for a while, others end it at the date of death, so check with them before the vehicle is driven or arrange cover that is arranged. The vehicle tax cannot be transferred either, so it needs taxing in the new keeper\'s name or declaring off the road. Breakdown cover and any vehicle finance agreements must also be contacted.',
    items: [],
  },
  {
    category: 'Social media and online accounts',
    intro: 'Most platforms have a process for memorialising or deleting accounts. Facebook allows a "legacy contact" to manage the account. Google has an Inactive Account Manager.',
    items: [
      { name: 'Facebook / Meta', link: null },
      { name: 'X (formerly Twitter)', link: null },
      { name: 'Instagram', link: null },
      { name: 'LinkedIn', link: null },
      { name: 'Google', link: null },
    ],
  },
  {
    category: 'Loyalty schemes and rewards programmes',
    intro: 'Points and air miles can sometimes be transferred to a next of kin. Contact each programme to find out their policy.',
    items: [
      { name: 'Tesco Clubcard', link: null },
      { name: 'Nectar', link: null },
      { name: 'Avios / British Airways Executive Club', link: null },
    ],
  },
  {
    category: 'Professional memberships and trade unions',
    intro: 'Any professional bodies, trade unions, or industry associations the person belonged to should be notified. Some have death benefits or benevolent funds that may help the family.',
    items: [],
  },
  {
    category: 'Dentist, optician, and GP',
    intro: 'The GP surgery may be notified automatically through the NHS Spine system, but this is not guaranteed. It is worth confirming with the surgery directly. Dentists and opticians are never covered by Tell Us Once.',
    items: [],
  },
];

const FAQ = [
  {
    q: 'What does Tell Us Once actually do?',
    a: 'Tell Us Once notifies selected government bodies that someone has died. This includes HMRC, DWP (benefits and State Pension), DVLA (driving licence, vehicle keeper records and vehicle tax), HM Passport Office, the local council (council tax, electoral roll, blue badge, library card), Veterans UK, Social Security Scotland, and most public sector pension schemes. It does not contact any private company, bank, insurer, or utility provider.',
  },
  {
    q: 'Do I still need to contact banks after Tell Us Once?',
    a: 'Yes. Tell Us Once does not notify any bank or building society. You need to contact each bank individually, or use the free Death Notification Service at deathnotificationservice.co.uk to notify multiple banks in a single registration.',
  },
  {
    q: 'Does Tell Us Once cancel energy and broadband accounts?',
    a: 'No. Tell Us Once only contacts government departments. Every energy supplier, broadband provider, and telecoms company needs to be contacted separately. Most have dedicated bereavement teams and will waive early termination fees.',
  },
  {
    q: 'Does Tell Us Once work in Northern Ireland?',
    a: 'No. Tell Us Once is not available in Northern Ireland. You will need to contact each government department separately. The NI Direct website has guidance on who to notify.',
  },
  {
    q: 'How long do I have to use my Tell Us Once reference?',
    a: 'You have 28 days from the day your unique reference number is issued to use the service. The clock starts when the registrar gives you the number, not from the registration itself. After that you would need to contact each department individually, so it is worth ringing the register office if the date is close.',
  },
  {
    q: 'Can I use Tell Us Once for someone who died abroad?',
    a: 'It depends. If the death was registered with the UK authorities (through the British Consulate) and a UK death certificate was issued, you may be able to use Tell Us Once. If the death was only registered in the country where it happened, you will need to contact each UK government department separately.',
  },
];

export default function TellUsOnceNotCoveredPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: "What Tell Us Once Doesn't Cover" }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 6 August 2026</span>
        <span aria-hidden="true">|</span>
        <span>8 min read</span>
      </div>
      <BlogPrintButton />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What Tell Us Once Doesn&apos;t Cover: The Full List
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Tell Us Once is genuinely helpful, but the name is misleading. It only notifies a handful of government departments. After using it, you still need to contact 20 to 30 organisations yourself: every bank, insurer, pension provider, energy company, telecoms provider, and more. This guide lists everything Tell Us Once misses, so you know exactly what still needs doing.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key takeaways</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> Tell Us Once only notifies government bodies and public sector pension schemes (DWP, HMRC, DVLA, Passport Office, electoral register, council, Veterans UK, Social Security Scotland)</li>
          <li className="flex gap-2"><span className="font-bold">+</span> You still need to contact every bank, insurer, pension, energy company, and telecoms provider yourself</li>
          <li className="flex gap-2"><span className="font-bold">+</span> The free Death Notification Service can notify multiple banks at once</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Tell Us Once is not available in Northern Ireland</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Your Tell Us Once reference must be used within 28 days of being issued</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'what-covered', label: 'What Tell Us Once does cover' },
        { id: 'what-not-covered', label: 'What Tell Us Once does not cover' },
        { id: 'faqs', label: 'Common questions about Tell Us Once' },
      ]} />

      {/* What Tell Us Once DOES cover */}
      <h2 id="what-covered" className="text-2xl font-bold text-foreground mb-4">What Tell Us Once does cover</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <p className="text-sm text-muted mb-4">Tell Us Once will notify the following government departments on your behalf:</p>
        <ul className="space-y-2">
          {COVERED.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <span>
                {item.link ? (
                  <Link href={item.link} className="text-primary hover:underline font-medium">{item.name}</Link>
                ) : (
                  <strong className="text-foreground">{item.name}</strong>
                )}
                {' '}{item.detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted mt-4">
          That is what it covers. Everything below is <strong className="text-foreground">left for you to do</strong>.
        </p>
      </div>

      {/* What Tell Us Once does NOT cover */}
      <h2 id="what-not-covered" className="text-2xl font-bold text-foreground mb-4">What Tell Us Once does not cover</h2>
      <p className="text-sm text-muted mb-6">
        You will need to contact each of the following organisations directly. Where we have a specific notification guide, you can click through for the bereavement team contact details, what documents they need, and what to expect.
      </p>

      <div className="space-y-6 mb-12">
        {NOT_COVERED.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{section.category}</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">{section.intro}</p>
            {section.items.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, j) => (
                  item.link ? (
                    <Link
                      key={j}
                      href={item.link}
                      className="inline-block text-sm px-3 py-1.5 bg-primary-light text-primary rounded-lg hover:underline"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span key={j} className="inline-block text-sm px-3 py-1.5 bg-gray-100 text-muted rounded-lg">
                      {item.name}
                    </span>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Death Notification Service tip */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-12">
        <h3 className="font-semibold text-amber-800 mb-2">Save time with the Death Notification Service</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          The <strong>Death Notification Service</strong> (deathnotificationservice.co.uk) is a free service that lets you notify multiple banks and building societies in a single registration. It covers most major UK banks. This is separate from Tell Us Once, and it is well worth using alongside it.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-card rounded-xl border border-border p-6 mb-12 text-center">
        <h3 className="font-semibold text-foreground mb-2">See our complete notification directory</h3>
        <p className="text-sm text-muted mb-4">
          We have step-by-step notification guides for over 60 UK organisations, with bereavement team phone numbers, what documents you need, and what to say.
        </p>
        <Link href="/notify" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Browse All Notification Guides
        </Link>
      </div>

      {/* FAQ */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Common questions about Tell Us Once</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <SupportCta />

      <RelatedGuides
        currentPath="/blog/what-tell-us-once-doesnt-cover"
        guides={['/notify', '/tell-us-once', '/template-letters', '/call-scripts']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised notification checklist</h2>
        <p className="text-muted mb-6">Answer a few questions about the person who died and we will tell you exactly which organisations to contact, in the right order.</p>
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
            headline: 'What Tell Us Once Doesn\'t Cover: The Full List',
            description: 'The complete list of organisations Tell Us Once does not notify, and what you need to do yourself after someone dies.',
            datePublished: '2026-03-14',
            dateModified: '2026-08-06',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://helpafterloss.co.uk/blog/what-tell-us-once-doesnt-cover',
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
              { '@type': 'ListItem', position: 3, name: 'What Tell Us Once Doesn\'t Cover', item: 'https://helpafterloss.co.uk/blog/what-tell-us-once-doesnt-cover' },
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
            mainEntity: FAQ.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
    </div>
  );
}
