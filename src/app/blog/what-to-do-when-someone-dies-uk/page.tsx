import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { TableOfContents } from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies: Complete UK Step-by-Step Checklist (2026)',
  description: 'A complete step-by-step checklist of what to do when someone dies in the UK. Covers the first 24 hours, registering the death, Tell Us Once, funeral planning, probate, finances, and longer-term tasks.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog/what-to-do-when-someone-dies-uk' },
  openGraph: {
    title: 'What to Do When Someone Dies: Complete UK Step-by-Step Checklist (2026)',
    description: 'A plain-English checklist of everything you need to do when someone dies in the UK, from the first hours to months later.',
    url: 'https://helpafterloss.co.uk/blog/what-to-do-when-someone-dies-uk',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Do When Someone Dies in the UK: Full 2026 Checklist',
    description: 'Everything you need to do when someone dies, from the first 24 hours to the months ahead.',
  },
};

export default function WhatToDoWhenSomeoneDiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Articles', href: '/blog' },
        { label: 'What to Do When Someone Dies' }
      ]} />

      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span>Updated 22 March 2026</span>
        <span aria-hidden="true">|</span>
        <span>14 min read</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        What to Do When Someone Dies: Complete UK Step-by-Step Checklist (2026)
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone you love dies, the practical demands can feel overwhelming. There are phone calls to make, forms to complete, organisations to notify, and decisions to take at a time when you can barely think straight. This guide walks you through every step, in order, so you do not have to figure it out alone.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold text-amber-900 mb-3">Before you begin</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          There is no rush to do everything at once. Nothing on this list needs to happen in the first few hours except getting a medical certificate of cause of death. Everything else can wait until you feel ready. If you are struggling, please call <strong>Cruse Bereavement Support on 0808 808 1677</strong> or the <strong>Samaritans on 116 123</strong> (free, 24 hours).
        </p>
      </div>

      <TableOfContents items={[
        { id: 'first-hours', label: 'The first few hours' },
        { id: 'first-days', label: 'Within the first few days' },
        { id: 'register-death', label: 'Registering the death' },
        { id: 'tell-us-once', label: 'Using Tell Us Once' },
        { id: 'funeral', label: 'Planning the funeral' },
        { id: 'first-weeks', label: 'During the first few weeks' },
        { id: 'finances', label: 'Sorting out finances' },
        { id: 'probate', label: 'Probate and the estate' },
        { id: 'longer-term', label: 'Longer-term tasks' },
        { id: 'looking-after-yourself', label: 'Looking after yourself' },
      ]} />

      {/* First hours */}
      <h2 id="first-hours" className="text-2xl font-bold text-foreground mb-6">The first few hours</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If they died at home</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            If the death was expected and the person was under the care of a GP or district nurse, call the GP surgery. The GP (or another doctor from the practice) will come to the house to confirm the death and issue a medical certificate of cause of death (MCCD). There is no legal requirement for this to happen immediately, so do not feel you must rush. You can stay with the person for as long as you need to.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            If the death was sudden or unexplained, call 999. The police and an ambulance will attend. This is standard procedure and does not mean anyone has done anything wrong. The police will arrange for the body to be taken to the mortuary. A coroner will investigate and decide whether a post-mortem is needed.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If they died in hospital or a care home</h3>
          <p className="text-sm text-muted leading-relaxed">
            The hospital or care home will handle the medical certification. A doctor at the hospital will issue the MCCD. The staff will explain the next steps and ask about your preferred funeral director. You do not have to decide this immediately. You can ask them to keep the person in the hospital mortuary while you make arrangements. There is usually no charge for a few days.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">If the coroner is involved</h3>
          <p className="text-sm text-muted leading-relaxed">
            The coroner must be informed if the cause of death is unknown, if the person was not seen by a doctor in the 28 days before death, if the death was violent or unnatural, if it happened during an operation or before recovery from an anaesthetic, or if the death may be linked to an industrial disease. The coroner may order a post-mortem or, in some cases, open an inquest. This can delay the funeral and the registration, but the coroner's office will keep you updated. You can still register the death once the coroner issues the necessary paperwork.
          </p>
        </div>
      </div>

      {/* First few days */}
      <h2 id="first-days" className="text-2xl font-bold text-foreground mb-6">Within the first few days</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Collect the medical certificate of cause of death</h3>
          <p className="text-sm text-muted leading-relaxed">
            The MCCD is the green form issued by the doctor. You will need it to register the death. If the person died in hospital, you usually collect it from the bereavement office. If they died at home, the GP surgery will have it ready. Since September 2024, all deaths in England and Wales must be reviewed by a medical examiner before the MCCD is issued. This is a free process and usually takes 1 to 2 working days. The medical examiner may contact you to discuss the circumstances of the death. This is normal.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Find important documents</h3>
          <p className="text-sm text-muted leading-relaxed">
            Start gathering key documents when you feel able to. You will need them over the coming weeks and months. The most important ones are: the will (check at home, with the person's solicitor, or search the National Will Register), birth certificate, marriage or civil partnership certificate, passport, driving licence, National Insurance number, bank and building society details, mortgage information, pension details, insurance policies (especially life insurance), and any pre-paid funeral plan documents. Our <Link href="/guides/document-checklist" className="text-primary hover:underline">document checklist</Link> can help you track these down.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Contact a funeral director (optional at this stage)</h3>
          <p className="text-sm text-muted leading-relaxed">
            There is no legal requirement to use a funeral director. Some families arrange funerals themselves, and <Link href="/blog/free-funeral-options-uk" className="text-primary hover:underline">low-cost options</Link> are available if money is tight. If you do choose a funeral director, you can ask for a written estimate before committing. Prices vary significantly, so it is worth getting at least two quotes. If the person had a pre-paid funeral plan, contact the plan provider as soon as possible.
          </p>
        </div>
      </div>

      {/* Register the death */}
      <h2 id="register-death" className="text-2xl font-bold text-foreground mb-6">Registering the death</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-4">
        <p className="text-sm text-muted leading-relaxed mb-4">
          You must register the death within 5 days in England and Wales (8 days in Scotland). Registration is free. You will need the MCCD and should bring the deceased person's birth certificate, NHS number, and details of their address. For a full breakdown of everything to bring, see our guide on <Link href="/blog/registering-a-death-uk" className="text-primary hover:underline">registering a death in the UK</Link>.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          You can register the death at any register office in England and Wales, but if you register in a different district to where the death occurred, it will take a few extra days because the paperwork has to be forwarded. Most register offices require an appointment. Book one by calling the local council or visiting their website.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          At the appointment, the registrar will ask you questions about the person who has died: their full name, date and place of birth, last address, occupation, marital status, and whether they were receiving a pension or benefits. The registrar will give you a certified copy of the death certificate (currently £11 each). We recommend ordering at least 3 or 4 copies, as many organisations require an original. See our guide on <Link href="/blog/death-certificate-how-many-copies" className="text-primary hover:underline">how many death certificates to order</Link>.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          The registrar will also give you the green form (Certificate for Burial or Cremation), which your funeral director needs before the funeral can go ahead.
        </p>
      </div>
      <p className="text-sm text-muted mb-12">
        For detailed guidance, see <a href="https://www.gov.uk/register-a-death" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK: Register a death</a>.
      </p>

      {/* Tell Us Once */}
      <h2 id="tell-us-once" className="text-2xl font-bold text-foreground mb-6">Using Tell Us Once</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-4">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Tell Us Once is a free government service that lets you report a death to most government departments in one go. The registrar will give you a unique reference number and explain how to use it. You can complete it online, by phone (0800 085 7308), or at the register office itself. Tell Us Once will notify: DWP (to stop benefits and pensions), HMRC, the Passport Office, DVLA, the local council (council tax and electoral register), and several other agencies.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Tell Us Once does not cover everything. You will still need to contact banks, building societies, utility companies, insurance providers, phone companies, and many others yourself. For the full list of what it does and does not cover, see our article: <Link href="/blog/what-tell-us-once-doesnt-cover" className="text-primary hover:underline">What Tell Us Once does not cover</Link>. Our <Link href="/blog/tell-us-once-service-guide" className="text-primary hover:underline">complete Tell Us Once guide</Link> walks you through the whole process.
        </p>
      </div>
      <p className="text-sm text-muted mb-12">
        Note: Tell Us Once is available in England and Wales but <strong>not in Northern Ireland</strong>. Scotland has a similar service called Tell Us Once Scotland.
      </p>

      {/* Funeral */}
      <h2 id="funeral" className="text-2xl font-bold text-foreground mb-6">Planning the funeral</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Types of funeral</h3>
          <p className="text-sm text-muted leading-relaxed">
            The main options are: a traditional funeral with a service (average cost around £4,000 to £5,000 in 2026), a direct cremation with no service (from around £900 to £1,500), a woodland or green burial, or a DIY funeral organised without a funeral director. You should check whether the person left any wishes about their funeral, either in their will, a pre-paid funeral plan, or informally with family. Our <Link href="/guides/funeral-options" className="text-primary hover:underline">funeral options guide</Link> explains every type in detail.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Paying for the funeral</h3>
          <p className="text-sm text-muted leading-relaxed">
            If money is a concern, you are not alone. The person arranging the funeral is legally responsible for the cost, but there is help available. You may be able to claim the DWP Funeral Expenses Payment (now called the Funeral Payment within Universal Credit) if you receive certain benefits. Some charities also help with funeral costs. Banks may release money from the deceased's account to pay the funeral director directly, even before probate. Our guide to <Link href="/blog/free-funeral-options-uk" className="text-primary hover:underline">free and low-cost funeral options</Link> covers every available route.
          </p>
        </div>
      </div>

      {/* First weeks */}
      <h2 id="first-weeks" className="text-2xl font-bold text-foreground mb-6">During the first few weeks</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Notify organisations</h3>
          <p className="text-sm text-muted leading-relaxed">
            Beyond Tell Us Once, you will need to contact: all banks and building societies, credit card companies, mortgage lenders, landlords, utility companies (gas, electricity, water), phone and broadband providers, insurance companies (home, car, life, pet, travel), the person's employer, pension providers, subscription services (TV, streaming, gym, magazines), social media companies, and the Royal Mail (to redirect post). Our <Link href="/notify" className="text-primary hover:underline">notification tool</Link> has phone numbers and step-by-step instructions for each organisation, and our <Link href="/notify-for-me" className="text-primary hover:underline">Notify For Me</Link> service can send some of these on your behalf.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Secure the property</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the person lived alone, make sure the property is secure. Inform the home insurance company as soon as possible, because most policies have a condition that the property must be occupied or regularly checked. Many insurers will continue cover for a limited period (usually 30 days) after a death, but you need to tell them. Check the post regularly and redirect it to your address if needed using Royal Mail's redirection service.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Council tax</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the person lived alone, you may be entitled to a council tax exemption. A property left empty after a death is exempt from council tax for up to six months after probate is granted (Class F exemption). If you now live alone in a shared property, you may qualify for the 25% single person discount. Our <Link href="/guides/council-tax-after-death" className="text-primary hover:underline">council tax guide</Link> explains the rules in full.
          </p>
        </div>
      </div>

      {/* Finances */}
      <h2 id="finances" className="text-2xl font-bold text-foreground mb-6">Sorting out finances</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Bank accounts</h3>
          <p className="text-sm text-muted leading-relaxed">
            Joint accounts can usually continue to be used by the surviving holder. Sole accounts will be frozen once the bank is notified. Most banks will release small amounts without probate (the threshold varies by bank, typically between £5,000 and £50,000). See our <Link href="/blog/bank-probate-thresholds-2026" className="text-primary hover:underline">bank probate thresholds comparison</Link> for the full list. To close accounts and release larger sums, you will usually need the grant of probate.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Benefits you may be entitled to</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you have lost a spouse or civil partner, you may be able to claim Bereavement Support Payment (a lump sum of up to £3,500 plus up to 18 monthly payments of £350). You must claim within 21 months of the death. If you have dependent children, the amounts are higher. Our <Link href="/guides/bereavement-benefits" className="text-primary hover:underline">bereavement benefits guide</Link> covers every available benefit and how to claim.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Life insurance and pensions</h3>
          <p className="text-sm text-muted leading-relaxed">
            Check whether the person had life insurance (through work, a mortgage, or a standalone policy). Contact the insurer to make a claim. For workplace pensions, contact the employer's HR department. For the state pension, DWP will have been notified through Tell Us Once. Our <Link href="/guides/pensions-after-death" className="text-primary hover:underline">pensions after death guide</Link> explains what happens to different types of pension.
          </p>
        </div>
      </div>

      {/* Probate */}
      <h2 id="probate" className="text-2xl font-bold text-foreground mb-6">Probate and the estate</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-4">
        <p className="text-sm text-muted leading-relaxed mb-4">
          Probate is the legal process that gives someone the authority to deal with a deceased person's estate (their money, property, and possessions). You may not need probate if the estate is small, if all assets were jointly owned, or if bank balances are below the bank's probate threshold. Our <Link href="/probate" className="text-primary hover:underline">probate guide</Link> explains when you need it and how to apply.
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          The probate application fee is £300 (free if the estate is worth less than £5,000). You can apply yourself through the government's online service at <a href="https://www.gov.uk/applying-for-probate" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GOV.UK</a>, or you can instruct a solicitor (typically £1,500 to £5,000 or a percentage of the estate). For a realistic timeline, see our article on <Link href="/blog/how-long-does-probate-take-uk" className="text-primary hover:underline">how long probate takes in the UK</Link>.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          If the person died without a will, the estate is distributed according to the rules of intestacy. Our <Link href="/intestacy" className="text-primary hover:underline">intestacy guide</Link> explains who inherits what. If inheritance tax is due, it must be paid within 6 months of the end of the month of death to avoid interest. See our <Link href="/blog/inheritance-tax-guide-after-death" className="text-primary hover:underline">inheritance tax guide</Link> for thresholds and exemptions.
        </p>
      </div>

      {/* Longer term */}
      <h2 id="longer-term" className="text-2xl font-bold text-foreground mb-6">Longer-term tasks</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Update your own will and documents</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the person who died was named in your own will (for example, as a beneficiary or executor), you should update it. If they were listed as next of kin on medical forms, update those too. If you had joint finances, you may need to rearrange bank accounts, insurance policies, and direct debits.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The first anniversary and beyond</h3>
          <p className="text-sm text-muted leading-relaxed">
            Grief does not follow a neat timeline. Many people find the second year harder than the first, because the numbness wears off and reality sets in. Be patient with yourself. If specific dates or occasions are difficult, plan ahead so you are not caught off guard. Our <Link href="/guides/first-year-after-loss" className="text-primary hover:underline">first year after loss guide</Link> offers a month-by-month outline of what to expect.
          </p>
        </div>
      </div>

      {/* Looking after yourself */}
      <h2 id="looking-after-yourself" className="text-2xl font-bold text-foreground mb-6">Looking after yourself</h2>
      <div className="bg-card rounded-xl border border-border p-6 mb-4">
        <p className="text-sm text-muted leading-relaxed mb-4">
          While you are dealing with all these practical tasks, do not forget to look after yourself. Grief is physically exhausting. It can affect your sleep, appetite, concentration, and immune system. Try to eat regularly, rest when you can, and accept help when it is offered. You do not have to be strong for everyone else.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          If you are finding it hard to cope, please reach out. You deserve support.
        </p>
      </div>
      <div className="bg-primary-light rounded-xl p-6 mb-12">
        <h3 className="font-semibold text-foreground mb-3">Free support lines</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li><strong>Cruse Bereavement Support:</strong> 0808 808 1677 (free, Mon-Fri 9:30am-5pm, extended hours available)</li>
          <li><strong>Samaritans:</strong> 116 123 (free, 24 hours a day, 365 days a year)</li>
          <li><strong>Mind:</strong> 0300 123 3393 (Mon-Fri 9am-6pm)</li>
          <li><strong>NHS Bereavement:</strong> Visit <a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-loss/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">nhs.uk/grief</a> for self-help resources and local services</li>
        </ul>
      </div>

      <RelatedGuides
        currentPath="/blog/what-to-do-when-someone-dies-uk"
        guides={['/guide', '/checklist', '/tell-us-once', '/probate']}
      />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist</h2>
        <p className="text-muted mb-6">Answer a few questions about your situation and we will create a step-by-step plan with deadlines calculated from the date of death.</p>
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
            headline: 'What to Do When Someone Dies: Complete UK Step-by-Step Checklist (2026)',
            description: 'A complete step-by-step checklist of what to do when someone dies in the UK, from the first hours to months later.',
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
              '@id': 'https://helpafterloss.co.uk/blog/what-to-do-when-someone-dies-uk',
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
              { '@type': 'ListItem', position: 3, name: 'What to Do When Someone Dies', item: 'https://helpafterloss.co.uk/blog/what-to-do-when-someone-dies-uk' },
            ],
          }),
        }}
      />
    </div>
  );
}
