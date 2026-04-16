import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { BlogPrintButton } from '@/components/BlogPrintButton';
import { SupportCta } from '@/components/SupportCta';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'How Long Does Probate Take in the UK? Realistic Timeline (2026)',
  description: 'A realistic breakdown of how long probate takes in the UK in 2026, from application to final distribution. Covers HMRC processing, court delays, and what affects the timeline.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/how-long-does-probate-take-uk' },
  openGraph: {
    title: 'How Long Does Probate Take in the UK? Realistic Timeline (2026)',
    description: 'Honest timelines for every stage of probate in the UK, with practical advice on what speeds things up and what causes delays.',
    url: 'https://helpafterloss.co.uk/blog/how-long-does-probate-take-uk',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Long Does Probate Take in the UK? (2026)',
    description: 'Realistic probate timelines and what causes delays.',
  },
};

const TIMELINE_STAGES = [
  {
    stage: 'Gathering documents and valuing the estate',
    typical: '2 to 8 weeks',
    detail: 'This is the stage most people underestimate. You need to write to every bank, building society, pension provider, and investment company to get date-of-death valuations. You also need a property valuation (an estate agent can provide a free one for probate purposes). If the person had complex finances, multiple properties, or overseas assets, this stage can take much longer. You cannot submit the probate application until you have a clear picture of the full estate.',
  },
  {
    stage: 'Completing the inheritance tax forms',
    typical: '1 to 4 weeks',
    detail: 'If the estate is below the inheritance tax threshold and qualifies as an excepted estate, you complete a shorter form as part of the probate application. If inheritance tax is due, you need to submit the full IHT400 form to HMRC and pay at least some of the tax before applying for probate. HMRC must issue a receipt before the probate application can proceed.',
  },
  {
    stage: 'HMRC processing (if IHT400 submitted)',
    typical: '4 to 8 weeks',
    detail: 'HMRC aims to process IHT400 forms within 4 weeks of receiving payment, but in practice it often takes longer. If HMRC raises queries, it can add weeks or months. You need HMRC clearance (the IHT421 stamped form) before you can submit the probate application to the court.',
  },
  {
    stage: 'Submitting the probate application',
    typical: '1 day to 1 week',
    detail: 'You can apply online at GOV.UK or by post. The online application is quicker and you get confirmation immediately. You will need to sign a statement of truth (the oath was replaced in January 2024). The application fee is £300 (free if the estate is under £5,000).',
  },
  {
    stage: 'Court processing the application',
    typical: '4 to 12 weeks (2026)',
    detail: 'The Probate Registry has faced significant backlogs in recent years. In early 2024, wait times were 8 to 16 weeks. By early 2026, the situation has improved somewhat, with most straightforward applications processed in 6 to 10 weeks. However, if the court raises questions or if your application has errors, it will take longer. Paper applications generally take longer than online ones.',
  },
  {
    stage: 'Receiving the grant of probate',
    typical: '1 to 2 weeks after approval',
    detail: 'Once approved, the grant is posted to you (or your solicitor). You will receive the original grant plus any extra copies you ordered. You need these to send to banks, investment companies, and the Land Registry.',
  },
  {
    stage: 'Collecting assets and paying debts',
    typical: '4 to 12 weeks',
    detail: 'Once you have the grant, you send certified copies to each institution holding the deceased person\'s money or assets. Each organisation has its own processing time. Banks typically take 2 to 4 weeks to release funds. Investment companies and pension providers can take longer. You also need to place a statutory notice in The Gazette (a legal requirement to protect yourself from unknown creditors) and wait at least 2 months for any claims.',
  },
  {
    stage: 'Distributing the estate',
    typical: '2 to 4 weeks',
    detail: 'Once all debts are paid, all assets are collected, and the statutory notice period has passed, you can distribute the estate to the beneficiaries. You should prepare estate accounts showing what came in and what went out, and ask each beneficiary to sign a receipt.',
  },
];

export default function HowLongDoesProbateTakePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'How Long Does Probate Take?' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 22 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>12 min read</span>
      </div>
      <BlogPrintButton />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        How Long Does Probate Take in the UK? Realistic Timeline (2026)
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-6">
        The honest answer is: longer than you expect. Government guidance says 16 weeks, but the real end-to-end process, from the death to final distribution, typically takes 6 to 12 months for a straightforward estate. Complex estates can take a year or more. This guide breaks down every stage so you know what to expect.
      </p>

      <div className="bg-card rounded-xl border border-border p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-foreground text-sm mb-1">Not sure what to do right now?</p>
          <p className="text-sm text-muted">Our free guide gives you the tasks that apply to your situation, in the right order, with real deadlines.</p>
        </div>
        <Link href="/start" className="shrink-0 inline-block px-5 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
          Get free guide
        </Link>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Quick summary</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Simple estate, no IHT:</strong> 4 to 6 months from death to distribution</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Moderate estate with IHT:</strong> 6 to 12 months</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Complex estate (property abroad, disputes, business assets):</strong> 12 to 24+ months</li>
          <li className="flex gap-2"><span className="font-bold">+</span> <strong>Just the grant itself:</strong> 6 to 12 weeks from submitting the application</li>
        </ul>
      </div>

      <TableOfContents items={[
        { id: 'overview', label: 'The full timeline at a glance' },
        { id: 'stage-detail', label: 'Each stage explained' },
        { id: 'what-causes-delays', label: 'What causes delays' },
        { id: 'speed-up', label: 'How to speed things up' },
        { id: 'without-probate', label: 'When you do not need probate' },
        { id: 'scotland', label: 'Scotland: Confirmation timelines' },
        { id: 'faqs', label: 'Frequently asked questions' },
      ]} />

      {/* Overview */}
      <h2 id="overview" className="text-2xl font-bold text-foreground mb-6">The full timeline at a glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Getting to the application</p>
          <p className="text-2xl font-bold text-primary mb-1">3 to 12 weeks</p>
          <p className="text-sm text-muted">Gathering valuations, completing forms, and paying any IHT due.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Court processing</p>
          <p className="text-2xl font-bold text-primary mb-1">6 to 12 weeks</p>
          <p className="text-sm text-muted">The Probate Registry reviewing and approving your application.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Collecting and distributing</p>
          <p className="text-2xl font-bold text-primary mb-1">6 to 14 weeks</p>
          <p className="text-sm text-muted">Sending the grant to institutions, collecting assets, paying debts, distributing.</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground mb-1">Total (typical)</p>
          <p className="text-2xl font-bold text-primary mb-1">6 to 12 months</p>
          <p className="text-sm text-muted">From the date of death to final distribution to beneficiaries.</p>
        </div>
      </div>

      {/* Stage detail */}
      <h2 id="stage-detail" className="text-2xl font-bold text-foreground mb-6">Each stage explained</h2>
      <div className="space-y-4 mb-12">
        {TIMELINE_STAGES.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6 flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i + 1}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{item.stage}</h3>
              <p className="text-xs text-primary font-medium mb-2">Typical: {item.typical}</p>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mid-article CTA */}
      <div className="bg-primary-light rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-foreground mb-2">Not sure what to do first?</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Our free personalised guide works out exactly which tasks apply to your situation and gives you them in the right order, with real deadlines based on the date of death.
        </p>
        <Link href="/start" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
          Get Your Free Personalised Guide
        </Link>
      </div>

      {/* Delays */}
      <h2 id="what-causes-delays" className="text-2xl font-bold text-foreground mb-6">What causes delays</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">HMRC queries on the IHT return</h3>
          <p className="text-sm text-muted leading-relaxed">
            If HMRC decides to look more closely at the inheritance tax return, they can take 6 to 12 months to conclude their enquiries. This is more likely if the estate includes business assets, agricultural land, gifts made within 7 years of death, or if the property valuation seems low. HMRC has 4 years to raise enquiries on an IHT return, so even after the grant is issued, there is a risk of further contact.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Missing or unclear will</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the will cannot be found, if there is doubt about its validity, or if someone challenges the will, the process can be held up for months or even years. Challenges under the Inheritance (Provision for Family and Dependants) Act 1975 must be brought within 6 months of the grant being issued, so executors sometimes wait this long before distributing.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Selling property</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the estate includes a property that needs to be sold before beneficiaries can be paid, the timeline depends on the property market. Getting probate, putting the property on the market, selling, and completing can easily add 6 to 12 months to the total process.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Multiple executors who disagree</h3>
          <p className="text-sm text-muted leading-relaxed">
            If there are multiple executors and they cannot agree on decisions, this can slow everything down. All executors must sign the statement of truth. If one executor does not want to act, they can formally renounce, but this requires a separate form and process.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Overseas assets</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the person owned property or held bank accounts in another country, you may need to obtain a separate grant of probate (or equivalent) in that jurisdiction. This runs in parallel but has its own timeline and requirements.
          </p>
        </div>
      </div>

      {/* Solicitor CTA - mid article, after delays section */}
      <div className="bg-card rounded-xl border border-border p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-foreground mb-1">Is your estate complex?</p>
          <p className="text-sm text-muted leading-relaxed">
            If HMRC queries, overseas assets, or family disputes are a risk, a probate solicitor can be worth the cost. You can compare local probate solicitors and get free quotes through Unbiased.co.uk.
          </p>
        </div>
        <a
          href="https://www.unbiased.co.uk/find/solicitors/probate"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-block px-5 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm whitespace-nowrap"
        >
          Compare solicitors
        </a>
      </div>

      {/* Speed up */}
      <h2 id="speed-up" className="text-2xl font-bold text-foreground mb-6">How to speed things up</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Apply online.</strong> Online applications are processed faster than paper ones.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Start gathering valuations immediately.</strong> Do not wait for the funeral. Write to every bank, pension provider, and investment company as soon as you have the death certificate.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Get the IHT forms right first time.</strong> Errors or incomplete forms are the most common reason for HMRC delays. Double-check everything before submitting.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Order enough death certificates.</strong> You will need to send them to multiple organisations at the same time. Having 4 or 5 copies means you can contact several banks in parallel instead of waiting for one to return it.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Place the statutory notice in The Gazette early.</strong> The 2-month notice period runs from the date you place the advert. Place it as soon as you receive the grant so it runs in parallel with asset collection.</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> <strong>Chase regularly.</strong> Do not assume silence means progress. Follow up with the Probate Registry, HMRC, and financial institutions if you have not heard back within their stated timescales.</li>
        </ul>
      </div>

      {/* Without probate */}
      <h2 id="without-probate" className="text-2xl font-bold text-foreground mb-6">When you do not need probate</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Not every estate needs probate. You may not need it if:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> All bank accounts and investments are below the bank's individual probate threshold (see our <Link href="/blog/bank-probate-thresholds-2026" className="text-primary hover:underline">bank thresholds guide</Link>)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> All property was held as joint tenants (it passes automatically to the surviving owner)</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> All assets were held jointly or in trust</li>
          <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">+</span> The only asset is a jointly held bank account</li>
        </ul>
        <p className="text-sm text-muted leading-relaxed mt-4">
          If you are unsure, our <Link href="/probate" className="text-primary hover:underline">probate guide</Link> can help you decide whether you need it.
        </p>
      </div>

      {/* Scotland */}
      <h2 id="scotland" className="text-2xl font-bold text-foreground mb-6">Scotland: Confirmation timelines</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-12">
        <p className="text-sm text-muted leading-relaxed mb-4">
          In Scotland, the equivalent of probate is called Confirmation. The process is broadly similar but is handled by the Sheriff Court rather than the Probate Registry. Processing times in Scotland are generally shorter, with most straightforward applications completed in 4 to 8 weeks from submission. If you are dealing with a Scottish estate, see our <Link href="/guide/scotland" className="text-primary hover:underline">Scotland guide</Link> for specific details.
        </p>
      </div>

      {/* FAQs */}
      <h2 id="faqs" className="text-2xl font-bold text-foreground mb-6">Frequently asked questions</h2>
      <div className="space-y-4 mb-12">
        {[
          { q: 'Can I access money from the estate before probate is granted?', a: 'Most banks will release small amounts (typically up to £5,000 to £50,000 depending on the bank) without probate. Some will pay funeral costs directly from the deceased\'s account. Joint accounts can continue to be used by the surviving holder. For larger sums, you will usually need to wait for the grant.' },
          { q: 'How do I check the progress of my probate application?', a: 'You can call the Probate Registry on 0300 303 0648 or check online if you applied through the GOV.UK service. Have your application reference number ready.' },
          { q: 'What happens if the executor does nothing?', a: 'Beneficiaries can apply to the court to remove an executor who is not acting. This is called a "passing over" order. Alternatively, if there are multiple executors, the others can proceed without the inactive one. If you are a beneficiary and the executor is not responding, seek legal advice.' },
        ].map((faq, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
          </div>
        ))}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Do I need a solicitor for probate?</h3>
          <p className="text-sm text-muted leading-relaxed">
            No, you can apply for probate yourself. The online application at GOV.UK is designed for people without legal training. However, if the estate is complex (property abroad, business assets, IHT due, family disputes), a solicitor can be worth the cost. Expect to pay £1,500 to £5,000 for a solicitor-led application.{' '}
            <a href="https://www.unbiased.co.uk/find/solicitors/probate" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unbiased.co.uk</a>
            {' '}lets you compare local probate solicitors and get free quotes.
          </p>
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-foreground mb-3">Need support?</h3>
        <p className="text-sm text-muted leading-relaxed mb-2">
          Dealing with probate while grieving can be overwhelming. If you need someone to talk to:
        </p>
        <ul className="space-y-1 text-sm text-muted">
          <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677 (free)</li>
          <li><strong>Samaritans:</strong> 116 123 (free, 24 hours)</li>
        </ul>
      </div>

      <SupportCta />

      <RelatedGuides
        currentPath="/blog/how-long-does-probate-take-uk"
        guides={['/probate', '/guides/executor-duties', '/guides/inheritance-tax', '/blog/bank-probate-thresholds-2026']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need help with what to do next?</h2>
        <p className="text-muted mb-6">Our personalised guide covers every practical step after a bereavement, with deadlines calculated from the date of death.</p>
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
            headline: 'How Long Does Probate Take in the UK? Realistic Timeline (2026)',
            description: 'A realistic breakdown of how long probate takes in the UK in 2026, from application to final distribution.',
            datePublished: '2026-03-22',
            dateModified: '2026-03-22',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://helpafterloss.co.uk/blog/how-long-does-probate-take-uk',
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
              { '@type': 'ListItem', position: 3, name: 'How Long Does Probate Take?', item: 'https://helpafterloss.co.uk/blog/how-long-does-probate-take-uk' },
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
              { '@type': 'Question', name: 'Can I access money from the estate before probate is granted?', acceptedAnswer: { '@type': 'Answer', text: 'Most banks will release small amounts (typically up to £5,000 to £50,000 depending on the bank) without probate. Some will pay funeral costs directly from the deceased\'s account. Joint accounts can continue to be used by the surviving holder.' } },
              { '@type': 'Question', name: 'How do I check the progress of my probate application?', acceptedAnswer: { '@type': 'Answer', text: 'You can call the Probate Registry on 0300 303 0648 or check online if you applied through the GOV.UK service.' } },
              { '@type': 'Question', name: 'Do I need a solicitor for probate?', acceptedAnswer: { '@type': 'Answer', text: 'No, you can apply for probate yourself via GOV.UK. However, if the estate is complex, a solicitor can be worth the cost (typically £1,500 to £5,000).' } },
            ],
          }),
        }}
      />
    </div>
  );
}
