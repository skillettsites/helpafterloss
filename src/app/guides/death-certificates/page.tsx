import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { PageDisclaimer } from '@/components/PageDisclaimer';

export const metadata: Metadata = {
  title: 'Death Certificates UK: How Many Do You Need, Costs, and How to Order (2026)',
  description: 'Everything about death certificates in the UK. How many to order, current costs (£12.50 in England and Wales), ordering online or in person, certified copies, and differences in Scotland and Northern Ireland.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/death-certificates' },
  openGraph: {
    title: 'Death Certificates UK: How Many Do You Need, Costs, and How to Order (2026)',
    description: 'How many death certificates to order, current costs, and how to get extra copies. Covers England, Wales, Scotland, and Northern Ireland.',
    url: 'https://helpafterloss.co.uk/guides/death-certificates',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Death Certificates UK: How Many Do You Need, Costs, and How to Order (2026)',
    description: 'How many death certificates to order and the current costs in England, Wales, Scotland, and Northern Ireland.',
  },
};

const FAQ = [
  {
    q: 'How many death certificates do I need?',
    a: 'We recommend ordering between 10 and 15 certified copies. You will need to send one to each bank, building society, pension provider, insurance company, the mortgage lender, HMRC, the probate registry, and any other organisation that holds accounts or assets. Some organisations return the certificate after checking it, but many do not, and the process is much faster if you can send certificates to multiple organisations at the same time rather than waiting for one to be returned before sending it to the next.',
  },
  {
    q: 'How much does a death certificate cost in the UK?',
    a: 'In England and Wales, a certified copy of the death certificate costs £11 at the time of registration and £11 for additional copies ordered at the same time. If you order copies later, the cost is £11 per copy from the register office or £11 online via the General Register Office. In Scotland, the cost is £12 for a full extract. In Northern Ireland, the cost is £15 per certified copy. These prices are correct as of 2026 but may change.',
  },
  {
    q: 'Can I use a photocopy of a death certificate?',
    a: 'No. Most organisations require a certified copy (the official document issued by the register office, printed on security paper with a watermark). A photocopy or scan is not accepted as proof of death by banks, pension providers, insurers, or the probate registry. Some organisations will accept a digital share code through the GOV.UK Tell Us Once service, but this is not universal. Always use certified copies.',
  },
  {
    q: 'How do I order more death certificates after the registration?',
    a: 'You can order additional certified copies at any time from the register office where the death was registered, or online through the General Register Office (gro.gov.uk). You will need the deceased\'s full name, date of death, and the district where the death was registered. Online orders typically arrive within 4 to 7 working days. You can also apply by post using form GRO150.',
  },
  {
    q: 'What is the difference between a certified copy and an informational copy?',
    a: 'A certified copy is the official document issued by the register office, printed on watermarked security paper and signed by the registrar. This is the version you need for legal and administrative purposes. An informational extract (sometimes called a short certificate) contains less detail and is not accepted by most organisations. When you order a death certificate, always request the full certified copy.',
  },
];

export default function DeathCertificatesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Death Certificates' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Death Certificates UK: How Many Do You Need, Costs, and How to Order
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        One of the first practical tasks after someone dies is obtaining death certificates. You will need certified copies for banks, insurers, pension providers, the probate registry, and many other organisations. Getting enough copies from the start saves weeks of waiting later. This guide explains how many to order, what they cost, and how to get them.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£11</p>
          <p className="text-sm text-muted mt-1">Cost per certified copy in England and Wales</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">10-15</p>
          <p className="text-sm text-muted mt-1">Recommended number of copies to order</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">5 days</p>
          <p className="text-sm text-muted mt-1">Registration deadline after death (England and Wales)</p>
        </div>
      </div>

      {/* What is a death certificate */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What is a death certificate?</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">The official record of death</h3>
          <p className="text-sm text-muted leading-relaxed">
            A death certificate is an official document issued by the register office that records the fact and cause of a death. It contains the deceased's full name, date and place of death, age, occupation, cause of death as determined by the doctor, and the name of the person who registered the death (the informant). It is printed on watermarked security paper and signed by the registrar. This certified copy is the document you need for all legal, financial, and administrative purposes.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Certified copy vs informational extract</h3>
          <p className="text-sm text-muted leading-relaxed">
            A certified copy is the full official document. An informational extract (sometimes called a short certificate) contains limited information and is not accepted by most organisations. When ordering, always request the full certified copy. This is the default in most cases, but it is worth confirming when you place your order.
          </p>
        </div>
      </div>

      {/* How many to order */}
      <h2 className="text-2xl font-bold text-foreground mb-6">How many death certificates to order</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Why you need multiple copies</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Every organisation that holds an account, policy, or asset in the deceased's name will need to see a death certificate before they will close the account, release funds, or transfer ownership. While some organisations return the certificate after processing, many do not, and even those that do can take several weeks. Having multiple copies allows you to contact several organisations at the same time, which significantly speeds up the administration. We recommend ordering between 10 and 15 copies. Here is a typical list of who will need one:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>Each bank and building society (one per institution)</li>
            <li>Each pension provider (workplace, private, and state pension)</li>
            <li>Life insurance companies</li>
            <li>The mortgage lender</li>
            <li>HMRC (for inheritance tax and the deceased's final tax return)</li>
            <li>The Probate Registry (if applying for probate)</li>
            <li>The Land Registry (if property ownership needs updating)</li>
            <li>The DVLA (to cancel or transfer a driving licence and vehicle registration)</li>
            <li>Utility companies (some require a certified copy)</li>
            <li>The deceased's employer</li>
            <li>Any investment or share platforms</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Saving money if the estate is small</h3>
          <p className="text-sm text-muted leading-relaxed">
            If the estate is simple, with only one or two bank accounts and no property, you may only need 3 to 5 copies. You can always order more later if needed, though there will be a short wait for postal delivery. It is generally cheaper per copy to order them all at the time of registration, as some register offices offer a small discount for bulk orders on the day.
          </p>
        </div>
      </div>

      {/* Costs */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Costs</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">England and Wales</h3>
          <p className="text-sm text-muted leading-relaxed">
            A certified copy of the death certificate costs £11 when ordered at the time of registration. Additional copies ordered on the same day cost £11 each. If you order copies later from the register office where the death was registered, the cost is also £11 per copy. If you order from the General Register Office (GRO) online or by post, the cost is £11 per copy. Priority service (next working day dispatch) is available from the GRO for an additional fee.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Scotland</h3>
          <p className="text-sm text-muted leading-relaxed">
            In Scotland, a full extract of the death certificate costs £12. You can order copies from the registrar at the time of registration or later from National Records of Scotland (nrscotland.gov.uk). The registration process in Scotland is slightly different: the death must be registered within 8 days (compared to 5 days in England and Wales). Two qualified informants can register the death, not just one.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Northern Ireland</h3>
          <p className="text-sm text-muted leading-relaxed">
            In Northern Ireland, a certified copy of the death certificate costs £15. Copies can be ordered from the district registrar's office where the death was registered or from the General Register Office for Northern Ireland (nidirect.gov.uk/gro). The death must be registered within 5 days. The registration process is similar to England and Wales but administered separately.
          </p>
        </div>
      </div>

      {/* How to order */}
      <h2 className="text-2xl font-bold text-foreground mb-6">How to order death certificates</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">At the time of registration</h3>
          <p className="text-sm text-muted leading-relaxed">
            The easiest and cheapest time to order copies is when you register the death. The registrar will ask how many copies you want, and they are usually printed and handed to you on the spot or posted within a few days. This is the most efficient option, so order as many as you think you will need. If in doubt, order 12. The total cost at £11 each would be £132, which is a worthwhile investment to avoid weeks of delays.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Online</h3>
          <p className="text-sm text-muted leading-relaxed">
            In England and Wales, you can order additional copies online through the General Register Office at gro.gov.uk/gro/content/certificates. You will need the deceased's full name, date of death, and the registration district. Delivery typically takes 4 to 7 working days by standard post. In Scotland, order through scotlandspeople.gov.uk. In Northern Ireland, order through nidirect.gov.uk.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">In person or by post</h3>
          <p className="text-sm text-muted leading-relaxed">
            You can visit the register office where the death was registered and request copies in person. Bring identification and the details of the registration. You can also apply by post using form GRO150 (available to download from gov.uk). Payment can be made by cheque or postal order payable to the relevant register office. Postal applications typically take 7 to 10 working days.
          </p>
        </div>
      </div>

      {/* Replacing lost certificates */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Replacing lost or damaged certificates</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">How to get a replacement</h3>
          <p className="text-sm text-muted leading-relaxed">
            If you lose a death certificate or it gets damaged, you can order a replacement at any time. There is no limit on how many times you can order copies, and there is no expiry date on a death certificate. Replacement copies are identical to the originals and carry the same legal weight. Order from the register office where the death was registered, or from the General Register Office online. The cost is the same as ordering any other copy. If the death was registered many years ago, the GRO may need a few extra days to locate the record.
          </p>
        </div>
      </div>

      {/* Registration process */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Registering the death</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Who can register the death</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            In England and Wales, the death must be registered within 5 days at the register office in the district where the person died (or where they were living). The following people can act as the informant:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>A relative who was present at the death</li>
            <li>A relative who was present during the last illness</li>
            <li>A relative who lives in the district where the death occurred</li>
            <li>Someone present at the death (even if not a relative)</li>
            <li>The occupier of the building where the death occurred (e.g. a care home manager)</li>
            <li>The person arranging the funeral (but not the funeral director)</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What to bring to the registration</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            The registrar will need the medical certificate of cause of death (issued by the doctor or hospital). You should also bring, if available:
          </p>
          <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc pl-5">
            <li>The deceased's birth certificate</li>
            <li>Their marriage or civil partnership certificate</li>
            <li>Their NHS medical card</li>
            <li>Their driving licence</li>
            <li>Their passport</li>
            <li>Proof of their address</li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            These documents help the registrar complete the record accurately. If you do not have them all, the registration can still go ahead.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">What happens at the registration</h3>
          <p className="text-sm text-muted leading-relaxed">
            The registrar will ask you questions about the deceased: their full name, date and place of birth, occupation, address, and marital status. They will record the cause of death from the medical certificate. You will then be asked to check and sign the register entry. The registrar will issue a green form (the certificate for burial or cremation, needed by the funeral director) and the death certificates you have ordered. The registrar will also ask if you want to use the Tell Us Once service, which notifies multiple government departments of the death in a single step.
          </p>
        </div>
      </div>

      {/* Important note */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Order enough copies upfront.</strong> The single most common regret we hear from bereaved families is not ordering enough death certificates at the time of registration. Running out of copies means waiting days or weeks for replacements while everything else is on hold. When in doubt, order more rather than fewer.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about death certificates</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <PageDisclaimer lastReviewed="March 2026" jurisdiction="all-uk" />

      <RelatedGuides currentPath="/guides/death-certificates" guides={['/guides/document-checklist', '/guides/executor-duties', '/tell-us-once', '/probate']} />

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
              { '@type': 'ListItem', position: 3, name: 'Death Certificates', item: 'https://helpafterloss.co.uk/guides/death-certificates' },
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
            headline: 'Death Certificates UK: How Many Do You Need, Costs, and How to Order (2026)',
            description: 'How many death certificates to order, current costs, and how to get extra copies in England, Wales, Scotland, and Northern Ireland.',
            url: 'https://helpafterloss.co.uk/guides/death-certificates',
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
