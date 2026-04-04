import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TableOfContents } from '@/components/TableOfContents';
import { RelatedGuides } from '@/components/RelatedGuides';
import { BlogPrintButton } from '@/components/BlogPrintButton';
import { SupportCta } from '@/components/SupportCta';
import { FreeChecklistBanner } from '@/components/FreeChecklistBanner';

export const metadata: Metadata = {
  title: 'How Many Death Certificates Do I Need? (2026 Guide)',
  description: 'You typically need 8-12 certified copies of a death certificate, at £12.50 each in England. Find out exactly who needs one, how to order, and how to save money.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/death-certificate-how-many-copies' },
  openGraph: {
    title: 'How Many Death Certificates Do I Need? (2026 Guide)',
    description: 'Most families need 8-12 certified copies at £12.50 each in England. Full breakdown of who needs an original, how to order, and money-saving tips.',
    url: 'https://helpafterloss.co.uk/blog/death-certificate-how-many-copies',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Death Certificates Do I Need? (2026 Guide)',
    description: 'Most families need 8-12 certified copies at £12.50 each in England. Full breakdown of who needs an original, how to order, and money-saving tips.',
  },
};

const WHO_NEEDS_A_COPY = [
  { organisation: 'Banks and building societies', note: 'One per bank. Some banks process and return the certificate within a few days; others hold it for weeks.' },
  { organisation: 'Life insurance companies', note: 'Each insurer will need their own original. They rarely return them quickly.' },
  { organisation: 'Pension providers', note: 'Workplace pensions, private pensions, and the State Pension all require notification with a certified copy.' },
  { organisation: 'Mortgage lender', note: 'Needed to notify the lender and begin the process of transferring or paying off the mortgage.' },
  { organisation: 'HMRC', note: 'Required for the final self-assessment tax return and to close the tax record. Also needed for inheritance tax forms.' },
  { organisation: 'Solicitor handling probate', note: 'If you are using a solicitor, they will need their own copy to begin work on the estate.' },
  { organisation: 'Land Registry', note: 'Needed to transfer or sell any property owned by the deceased.' },
  { organisation: 'Stockbrokers and investment platforms', note: 'ISAs, shares, premium bonds, and other investments each require notification.' },
  { organisation: 'Utility companies', note: 'Gas, electricity, water, and broadband providers. Some accept a certified photocopy rather than an original, but many still require the real thing.' },
  { organisation: 'Vehicle insurance and DVLA', note: 'Car insurance is void from the date of death. DVLA needs to be notified to update the V5C.' },
  { organisation: 'Employer', note: 'To process any outstanding salary, holiday pay, or death-in-service benefits.' },
];

const FAQS = [
  {
    question: 'Can I photocopy a death certificate?',
    answer: 'You can photocopy a death certificate, but most banks, insurers, and government departments will not accept a photocopy. They require a certified copy, which is an official copy issued by the register office or the General Register Office. Some utility companies and subscription services will accept a clear photocopy or scanned image, so it is worth asking before sending an original.',
  },
  {
    question: 'How long does it take to get death certificates?',
    answer: 'If you order certified copies at the time of registering the death, they are usually available on the same day or posted within a few working days. Ordering from the General Register Office (GRO) online or by post typically takes 5-10 working days for the standard service. The priority service costs £38.50 and arrives within 1 working day.',
  },
  {
    question: 'What if I need more copies later?',
    answer: 'You can order additional certified copies at any time from the General Register Office (GRO) online at gro.gov.uk, by phone on 0300 303 0012, or by post. The fee is £12.50 per copy in England and Wales. You will need the full name of the deceased, the date of death, and the district where the death was registered.',
  },
  {
    question: 'What is the difference between a certified copy and an original death certificate?',
    answer: 'The actual original death certificate stays with the register office permanently. What you receive are certified copies, which are official reproductions printed on secure paper with a watermark. Every certified copy carries the same legal weight. There is no difference between one ordered at registration and one ordered years later.',
  },
  {
    question: 'Do organisations return death certificates?',
    answer: 'Some do and some do not. Banks often return them within 1-2 weeks, but insurance companies and pension providers can hold them for several weeks. Government departments such as HMRC and the Land Registry may take even longer. If you are relying on getting certificates back, ask each organisation upfront how long they will keep it. To avoid delays, it is safer to order enough copies so you can send them to multiple organisations at the same time.',
  },
  {
    question: 'Can I get a death certificate for someone who died years ago?',
    answer: 'Yes. You can order a certified copy of any death registered in England and Wales from the GRO, regardless of how long ago the death occurred. The fee is £12.50 per copy in England and Wales. For deaths registered in Scotland, contact National Records of Scotland (£15 per copy). For Northern Ireland, contact the General Register Office for Northern Ireland.',
  },
];

export default function DeathCertificateHowManyCopiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'How Many Death Certificates Do I Need?' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 17 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>8 min read</span>
      </div>
      <BlogPrintButton />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        How Many Death Certificates Do I Need? (2026 Guide)
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Most families need <strong className="text-foreground">8 to 12 certified copies</strong> of the death certificate. Each copy costs <strong className="text-foreground">£12.50</strong> in England and Wales (£15 in Scotland), so you should budget between £100 and £150. The exact number depends on how many banks, insurers, pension providers, and other organisations you need to notify. It is far better to order too many than too few, because sending certificates to multiple organisations at the same time can save you weeks of waiting.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Key takeaways</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> Most families need 8-12 certified copies, costing £100-£150 in England</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Each copy costs £12.50 in England and Wales (£15 in Scotland)</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Order copies at registration for the fastest, cheapest option</li>
          <li className="flex gap-2"><span className="font-bold">+</span> Banks, insurers, and pension providers all need their own original certified copy</li>
          <li className="flex gap-2"><span className="font-bold">+</span> The Death Notification Service can reduce the number you need for banks</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'who-needs-copy', label: 'Who needs a certified copy?' },
        { id: 'certified-vs-originals', label: 'Certified copies vs originals vs photocopies' },
        { id: 'how-to-order', label: 'How to order death certificates' },
        { id: 'cost-breakdown', label: 'Cost breakdown by number of copies' },
        { id: 'tips', label: 'Tips for saving time and money' },
        { id: 'scotland', label: 'Scotland: what is different?' },
        { id: 'northern-ireland', label: 'Northern Ireland: what is different?' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* Quick summary box */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="text-xl font-bold text-foreground mb-3">Quick answer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">8-12</p>
            <p className="text-sm text-muted mt-1">copies recommended</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">£12.50</p>
            <p className="text-sm text-muted mt-1">per copy (England)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">£100-£150</p>
            <p className="text-sm text-muted mt-1">typical total cost</p>
          </div>
        </div>
      </div>

      {/* Who needs a copy */}
      <h2 id="who-needs-copy" className="text-2xl font-bold text-foreground mb-4">Who needs a certified copy?</h2>
      <p className="text-sm text-muted mb-6">
        Every organisation that holds money, property, or an account in the deceased person's name will need to see a certified copy of the death certificate before they release funds or close the account. Here is a typical list:
      </p>
      <div className="space-y-3 mb-12">
        {WHO_NEEDS_A_COPY.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-1">{item.organisation}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.note}</p>
          </div>
        ))}
      </div>

      {/* Certified copies vs originals */}
      <h2 id="certified-vs-originals" className="text-2xl font-bold text-foreground mb-4">Certified copies vs originals vs photocopies</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          There is often confusion about these terms, so here is what they mean in practice:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Certified copy (what you need)</h3>
            <p className="text-sm text-muted leading-relaxed">
              An official copy issued by the register office or the General Register Office (GRO). It is printed on secure paper with a watermark and carries the same legal weight as the register entry itself. Every copy you order from the registrar is a certified copy. Banks, insurers, and solicitors all require these.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">The "original" certificate</h3>
            <p className="text-sm text-muted leading-relaxed">
              Strictly speaking, the original death certificate never leaves the register office. It is the entry in the death register. Every copy you receive is technically a certified copy of that entry. People often call the first copy they receive the "original," but legally it is no different from copies ordered later.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Photocopy (usually not accepted)</h3>
            <p className="text-sm text-muted leading-relaxed">
              A photocopy or scan of a certified copy. Most banks, pension providers, and government departments will not accept these. Some utility companies and subscription services will accept a clear photocopy, but always check first. It is not worth the risk of having a claim or account closure delayed because an organisation rejects your photocopy.
            </p>
          </div>
        </div>
      </div>

      {/* How to order */}
      <h2 id="how-to-order" className="text-2xl font-bold text-foreground mb-4">How to order death certificates</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">1. At registration (cheapest and fastest)</h3>
          <p className="text-sm text-muted leading-relaxed">
            When you register the death at your local register office, you can order as many certified copies as you need on the spot. The cost is £12.50 per copy in England and Wales. This is the easiest time to order because you are already there, and the certificates are often available the same day or within a few working days. Order at least 8 copies. If the estate is complicated, with multiple bank accounts, insurers, or properties, order 12 or more.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">2. Online from the General Register Office (GRO)</h3>
          <p className="text-sm text-muted leading-relaxed">
            You can order additional copies online at any time from the GRO website (gro.gov.uk). The cost is £12.50 per copy for the standard service in England and Wales, delivered within 5-10 working days. The priority service costs £38.50 per copy and arrives within 1 working day. You will need the deceased's full name, date of death, and the registration district.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">3. By post from the GRO</h3>
          <p className="text-sm text-muted leading-relaxed">
            You can also request copies by post. Download form CAS 66 from the GRO website, complete it, and send it with a cheque or postal order for £12.50 per copy (England). Allow at least two weeks for delivery. This is the slowest option but useful if you cannot access the internet.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">4. From the local register office</h3>
          <p className="text-sm text-muted leading-relaxed">
            You can contact the register office where the death was originally registered and order additional copies directly from them. The fee is £12.50 per copy in England and Wales. Some register offices allow you to collect in person, which can be faster than waiting for postal delivery from the GRO.
          </p>
        </div>
      </div>

      {/* Cost breakdown table */}
      <h2 id="cost-breakdown" className="text-2xl font-bold text-foreground mb-4">Cost breakdown by number of copies</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">Copies</th>
              <th className="text-right py-3 px-4 font-semibold text-foreground">England &amp; Wales</th>
              <th className="text-right py-3 px-4 font-semibold text-foreground">Scotland</th>
              <th className="text-left py-3 pl-4 font-semibold text-foreground">When to order this many</th>
            </tr>
          </thead>
          <tbody>
            {[
              { copies: '5', ew: '£62.50', scot: '£75', when: 'Small estate: one bank, one pension, no property' },
              { copies: '8', ew: '£100', scot: '£120', when: 'Typical estate with a few accounts and one property' },
              { copies: '10', ew: '£125', scot: '£150', when: 'Multiple banks, insurance policies, and a property' },
              { copies: '12', ew: '£150', scot: '£180', when: 'Complex estate with investments, multiple properties, or business interests' },
            ].map((row, i) => (
              <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card/50' : ''}`}>
                <td className="py-3 pr-4 font-medium text-foreground">{row.copies}</td>
                <td className="py-3 px-4 text-right text-primary font-medium">{row.ew}</td>
                <td className="py-3 px-4 text-right text-muted">{row.scot}</td>
                <td className="py-3 pl-4 text-muted">{row.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <h2 id="tips" className="text-2xl font-bold text-foreground mb-4">Tips for saving time and money</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Order extra copies at registration</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            The standard price is the same whether you order at registration or later, but ordering upfront saves you a separate trip or an online order and the wait for delivery. It is always better to have a couple of spare copies than to run short and pay £38.50 each for the priority service.
          </p>
        </div>
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Send certificates to multiple organisations at the same time</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            If you only have a few copies and send them one at a time, waiting for each organisation to process and return the certificate, the whole process can drag on for months. With enough copies, you can notify all organisations simultaneously and cut weeks off the administration.
          </p>
        </div>
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Ask if the organisation will return the certificate</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            Some organisations return the death certificate after they have processed it; others do not. Ask before you send, so you know whether to expect it back. If they will return it within a week, you may be able to reuse it elsewhere, reducing the total number you need.
          </p>
        </div>
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Use the Death Notification Service</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            The free <a href="https://www.deathnotificationservice.co.uk" target="_blank" rel="noopener noreferrer" className="underline text-green-800">Death Notification Service</a> lets you notify multiple banks and building societies with a single form. This can reduce the number of separate certificates you need, because participating organisations share the notification.
          </p>
        </div>
        <div className="bg-success-light rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Send by recorded delivery</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            If you are posting a death certificate to an organisation, always use Royal Mail's signed-for service. Certificates are difficult and time-consuming to replace if they go missing in the post. The small extra cost is well worth the peace of mind.
          </p>
        </div>
      </div>

      {/* Scotland */}
      <h2 id="scotland" className="text-2xl font-bold text-foreground mb-4">Scotland: what is different?</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <p className="text-sm text-muted leading-relaxed mb-4">
          In Scotland, the process is broadly similar but there are a few key differences:
        </p>
        <ul className="text-sm text-muted space-y-3 list-disc pl-5">
          <li>A death must be registered within <strong className="text-foreground">8 days</strong>, compared to 5 days in England and Wales.</li>
          <li>Certified copies cost <strong className="text-foreground">£15 each</strong> from National Records of Scotland (NRS).</li>
          <li>You can order copies from any local registrar in Scotland or directly from NRS at <a href="https://www.nrscotland.gov.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nrscotland.gov.uk</a>.</li>
          <li>Scotland uses a different form and the certificate format is slightly different, but it is accepted by all UK-wide organisations including banks and HMRC.</li>
        </ul>
      </div>

      {/* Northern Ireland */}
      <h2 id="northern-ireland" className="text-2xl font-bold text-foreground mb-4">Northern Ireland: what is different?</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          In Northern Ireland, the process is handled by the General Register Office for Northern Ireland (GRONI):
        </p>
        <ul className="text-sm text-muted space-y-3 list-disc pl-5">
          <li>A death must be registered within <strong className="text-foreground">5 days</strong>, the same as England and Wales.</li>
          <li>Certified copies cost <strong className="text-foreground">£15 each</strong> when ordered at registration.</li>
          <li>Additional copies can be ordered online from GRONI at <a href="https://www.nidirect.gov.uk/services/order-birth-death-marriage-or-civil-partnership-certificate" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nidirect.gov.uk</a>.</li>
          <li>The registration is done at the local district registrar's office.</li>
          <li>Northern Ireland certificates are accepted by all UK-wide organisations.</li>
        </ul>
      </div>

      {/* FAQs */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
            <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <FreeChecklistBanner />

      {/* Cross-links */}
      <SupportCta />
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Next steps:</strong> Once you have your death certificates, use our <Link href="/notify" className="text-primary hover:underline">notification guide</Link> to contact banks, insurers, and utility companies. Our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> tell you exactly what to write, and our <Link href="/call-scripts" className="text-primary hover:underline">call scripts</Link> tell you what to say on the phone.
        </p>
      </div>

      <RelatedGuides
        currentPath="/blog/death-certificate-how-many-copies"
        guides={['/guide', '/costs', '/notify', '/template-letters']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Not sure what to do next?</h2>
        <p className="text-muted mb-6">Our step-by-step guide walks you through everything you need to do after someone dies, in the right order, including ordering death certificates.</p>
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
            headline: 'How Many Death Certificates Do I Need? (2026 Guide)',
            description: 'You typically need 8-12 certified copies of a death certificate, at £12.50 each in England. Full breakdown of who needs one, how to order, and how to save money.',
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
              '@id': 'https://helpafterloss.co.uk/blog/death-certificate-how-many-copies',
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
            mainEntity: FAQS.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
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
              { '@type': 'ListItem', position: 2, name: 'Guides & Articles', item: 'https://helpafterloss.co.uk/blog' },
              { '@type': 'ListItem', position: 3, name: 'How Many Death Certificates Do I Need?', item: 'https://helpafterloss.co.uk/blog/death-certificate-how-many-copies' },
            ],
          }),
        }}
      />
    </div>
  );
}
