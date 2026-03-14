import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'When Someone Dies Abroad: A Complete UK Guide',
  description: 'What to do when a UK national dies overseas. Covers FCDO contact, local death certificates, repatriation costs, travel insurance, and registering the death back in the UK.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/deaths-abroad' },
  openGraph: {
    title: 'When Someone Dies Abroad: A Complete UK Guide',
    description: 'Practical guidance for UK families dealing with a death overseas, including repatriation, local procedures, and what the FCDO can do to help.',
    url: 'https://helpafterloss.co.uk/guides/deaths-abroad',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When Someone Dies Abroad: A Complete UK Guide',
    description: 'Step-by-step guidance for UK families when someone dies overseas.',
  },
};

const STEPS = [
  {
    step: '1',
    title: 'Contact the FCDO (Foreign, Commonwealth & Development Office)',
    desc: 'The FCDO operates a 24/7 helpline on +44 20 7008 5000. They can help with local procedures, contact family members on your behalf, and provide guidance on repatriation. They will assign a consular officer who can liaise with local authorities, help identify the person, and put you in touch with local funeral directors and translators. Contact them as soon as possible.',
  },
  {
    step: '2',
    title: 'Get a local death certificate',
    desc: 'The death must be registered in the country where it happened. The local British consulate can guide you through this process. You will need the local death certificate translated into English and legalised (apostilled) before it can be used in the UK. The consulate can recommend approved translators. Keep multiple copies of the translated certificate, as UK banks and institutions will each need one.',
  },
  {
    step: '3',
    title: 'Decide: repatriation or local funeral',
    desc: 'Repatriation (bringing the body back to the UK) typically costs between £3,000 and £10,000 or more, depending on the country. This includes embalming, a zinc-lined coffin, air freight, and extensive paperwork. A local burial or cremation in the country where the person died is often significantly cheaper and can be arranged more quickly. There is no legal requirement to bring the body home. Consider the person\'s wishes and what the family can afford.',
  },
  {
    step: '4',
    title: 'Arrange repatriation',
    desc: 'If you choose repatriation, use a specialist international funeral director. The FCDO can provide a list of experienced firms. The body must be embalmed, placed in a zinc-lined coffin, and accompanied by paperwork including a freedom from infection certificate, the local death certificate, and customs clearance documents. The funeral director will handle most of this, but expect the process to take 3 to 6 weeks.',
  },
  {
    step: '5',
    title: 'Check travel insurance',
    desc: 'Most travel insurance policies cover repatriation costs, typically between £5,000 and £25,000. Contact the insurer immediately and provide the policy number and details of what happened. Keep every receipt for expenses including flights, accommodation, phone calls, and translation fees. If the person was on a package holiday, the tour operator may also assist with costs and logistics.',
  },
  {
    step: '6',
    title: 'Register the death in the UK',
    desc: 'Registering the death in the UK is not legally required, but it is strongly recommended so there is a permanent UK record. You register at the General Register Office (GRO), not at your local register office. You can do this by post by sending the foreign death certificate (with a certified English translation) to the GRO. There is a fee for a UK death certificate. This UK registration does not replace the local registration abroad.',
  },
  {
    step: '7',
    title: 'Bring personal belongings home',
    desc: 'The FCDO can help arrange the return of personal effects such as jewellery, clothing, and documents. In some countries, personal belongings may be held by the police or local authorities, especially if there is an investigation. You may need customs clearance to bring items back to the UK. The consulate can advise on what paperwork is needed and whether there are any local restrictions.',
  },
];

const FAQ = [
  {
    q: 'Do I need to register the death in the UK?',
    a: 'It is not legally required, but it is recommended. Registering the death with the General Register Office creates a permanent UK record, which can make dealing with UK institutions, probate, and pensions much simpler. You can register by post.',
  },
  {
    q: 'Who pays for repatriation?',
    a: 'The family or the deceased person\'s estate pays for repatriation. Travel insurance may cover most or all of the costs. The FCDO does not pay for repatriation. If the person had no insurance and the family cannot afford it, a local burial or cremation is usually the most practical option.',
  },
  {
    q: 'Can I arrange a funeral in the country where they died?',
    a: 'Yes, and it is often significantly cheaper than repatriation. The local British consulate can help find funeral directors and advise on local customs and legal requirements. Many families choose a local cremation and then bring the ashes home, which is simpler and less expensive than repatriating a body.',
  },
  {
    q: 'What if they had no travel insurance?',
    a: 'You will need to fund repatriation yourself or choose a local funeral. Some charities, such as the Foreign and Commonwealth Office Association, may be able to help in exceptional circumstances. The FCDO can arrange an interest-free loan to cover essential costs in cases of extreme financial hardship, but this must be repaid.',
  },
  {
    q: 'How long does repatriation take?',
    a: 'Typically 3 to 6 weeks. The process can take longer if there is a post-mortem examination, a criminal investigation, or if the country has complex bureaucratic procedures. Countries with mandatory autopsies or those where the death was unexpected may add several weeks to the timeline.',
  },
  {
    q: 'Can I fly out to be with them?',
    a: 'Yes. The FCDO can help with emergency travel documents if your passport has expired or you do not have one. If you need to travel urgently, the consulate can issue an Emergency Travel Document. Some travel insurance policies also cover the cost of a family member travelling out to deal with arrangements.',
  },
];

export default function DeathsAbroadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When Someone Dies Abroad
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Losing someone is difficult enough without the added complexity of dealing with foreign legal systems, language barriers, and international logistics. Around 6,000 UK nationals die abroad each year, and the process of bringing them home or arranging a funeral overseas can feel overwhelming. This guide explains exactly what to do, step by step.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">~6,000</p>
          <p className="text-sm text-muted mt-1">UK nationals die abroad each year</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">3-6 weeks</p>
          <p className="text-sm text-muted mt-1">Typical repatriation time</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£3,000-£10,000+</p>
          <p className="text-sm text-muted mt-1">Repatriation cost range</p>
        </div>
      </div>

      {/* Step by step */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What to do, step by step</h2>
      <div className="space-y-4 mb-12">
        {STEPS.map(s => (
          <div key={s.step} className="bg-card rounded-xl border border-border p-6 flex gap-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {s.step}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Suspicious circumstances warning */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-12">
        <h3 className="font-semibold text-amber-800 mb-2">If the death involved suspicious circumstances</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          If someone dies in suspicious circumstances abroad, a local police investigation will take place. This can significantly delay repatriation, sometimes by months. The FCDO will keep you updated on the progress of any investigation, but they cannot intervene in foreign legal processes. You may want to seek legal advice from a solicitor with experience in international cases.
        </p>
      </div>

      {/* Country-specific notes */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Country-specific considerations</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">EU and EEA countries</h3>
          <p className="text-sm text-muted leading-relaxed">
            The European Certificate of Death can simplify cross-border procedures. Many EU countries have well-established processes for dealing with foreign nationals, and English-speaking consular staff are usually available. Repatriation from EU countries tends to be faster and less expensive than from more distant destinations.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">USA and Canada</h3>
          <p className="text-sm text-muted leading-relaxed">
            Both countries have well-established repatriation procedures. The British consulate or embassy will assist with local requirements. Be aware that some US states require a mandatory autopsy for certain types of death, which can add time to the process. Costs tend to be higher due to distance.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Popular holiday destinations (Spain, France, Greece, Turkey)</h3>
          <p className="text-sm text-muted leading-relaxed">
            UK consulates in popular tourist areas handle these cases regularly and are experienced with the process. Tour operators can often provide significant practical help, especially if the person was on a package holiday. Repatriation from these countries is usually straightforward.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-2">Countries with mandatory autopsy requirements</h3>
          <p className="text-sm text-muted leading-relaxed">
            Some countries, including certain US states and India, require a mandatory post-mortem examination for unexpected or unnatural deaths. This can delay repatriation by several weeks. The local consulate will keep you informed about the timeline and can help expedite the process where possible.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/deaths-abroad" guides={['/guides/funeral-options', '/costs', '/guides/document-checklist', '/support']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get Your Personalised Guide</h2>
        <p className="text-muted mb-6">Answer a few questions about your situation and we will create a tailored checklist covering everything you need to do.</p>
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
              { '@type': 'ListItem', position: 3, name: 'Deaths Abroad', item: 'https://helpafterloss.co.uk/guides/deaths-abroad' },
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
            headline: 'When Someone Dies Abroad: A Complete UK Guide',
            description: 'What to do when a UK national dies overseas, including FCDO contact, repatriation, local death certificates, and registering the death in the UK.',
            url: 'https://helpafterloss.co.uk/guides/deaths-abroad',
            datePublished: '2026-03-14',
            dateModified: '2026-03-14',
            author: {
              '@type': 'Organization',
              name: 'Help After Loss',
            },
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
