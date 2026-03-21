import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies in Scotland - Complete Guide',
  description: 'A complete guide to what happens when someone dies in Scotland. Covers registration (8 days), Procurator Fiscal, Confirmation (not Probate), Scottish intestacy rules, legal rights, and key contacts.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guide/scotland' },
  openGraph: {
    title: 'What to Do When Someone Dies in Scotland - Complete Guide',
    description: 'Step-by-step guidance for dealing with a death in Scotland, including registration, Confirmation, and Scottish intestacy rules.',
    url: 'https://helpafterloss.co.uk/guide/scotland',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Do When Someone Dies in Scotland',
    description: 'Registration, Procurator Fiscal, Confirmation, and intestacy rules explained for Scotland.',
  },
};

const KEY_DIFFERENCES = [
  {
    england: 'Death must be registered within 5 days',
    scotland: 'Death must be registered within 8 days',
  },
  {
    england: 'Coroner investigates sudden or unexplained deaths',
    scotland: 'Procurator Fiscal investigates sudden or unexplained deaths',
  },
  {
    england: 'Doctor issues a Medical Certificate of Cause of Death (MCCD)',
    scotland: 'Doctor issues Form 11 (medical certificate of cause of death)',
  },
  {
    england: 'Grant of Probate (with a will) or Letters of Administration (without)',
    scotland: 'Confirmation (with or without a will), applied for at the Sheriff Court',
  },
  {
    england: 'Probate Registry processes applications',
    scotland: 'Sheriff Court processes Confirmation applications',
  },
  {
    england: 'Probate court fee: £300 (estates over £5,000)',
    scotland: 'Confirmation court fee: £300 (estates over £5,000)',
  },
  {
    england: 'Small estates: no simplified process',
    scotland: 'Small estates (under £36,000): simplified process, no solicitor needed',
  },
  {
    england: 'Intestacy: spouse gets first £322,000 plus personal belongings, then split with children',
    scotland: 'Intestacy: spouse has "prior rights" to the home (up to £473,000), furniture (up to £29,000), and cash (up to £50,000 or £89,000)',
  },
  {
    england: 'No automatic legal right for children to inherit if there is a will',
    scotland: '"Legal rights" give spouse and children a fixed share of moveable estate, even if excluded from the will',
  },
  {
    england: 'Statutory notice placed in The London Gazette',
    scotland: 'Statutory notice placed in The Edinburgh Gazette',
  },
];

const SECTIONS = [
  {
    id: 'registration',
    title: '1. Registering a death in Scotland',
    tasks: [
      {
        title: 'Get the medical certificate (Form 11)',
        content: 'When someone dies in Scotland, a doctor issues Form 11, the medical certificate of cause of death. If the person died in hospital, the hospital arranges this. If they died at home, contact their GP surgery. This form is given directly to the registrar, not to the family.',
      },
      {
        title: 'Register within 8 days',
        content: 'In Scotland, you must register the death within 8 days (compared to 5 days in England and Wales). Register at the registrar office for the area where the person died. You can book an appointment by calling the local council. Bring the person\'s full name, date and place of birth, last address, occupation, NHS number or CHI number (if known), and any marriage or civil partnership certificate.',
      },
      {
        title: 'Death certificates cost £15 each',
        content: 'Certified copies of the death certificate (called an "extract of the entry") cost £15 each in Scotland, compared to £12.50 in England. Order at least 5 copies. Banks, insurers, solicitors, and pension providers all need originals. It costs more to order them later through National Records of Scotland.',
      },
      {
        title: 'Tell Us Once is available in Scotland',
        content: 'Tell Us Once works in Scotland the same way as in England and Wales. The registrar will give you a reference number. Use it online or by phone (0800 085 7308) within 28 days to notify the DWP, HMRC, DVLA, Passport Office, and the local council in a single step.',
      },
    ],
  },
  {
    id: 'procurator-fiscal',
    title: '2. The Procurator Fiscal',
    tasks: [
      {
        title: 'Scotland does not have coroners',
        content: 'Unlike England, Wales, and Northern Ireland, Scotland does not use the coroner system. Instead, the Procurator Fiscal (part of the Crown Office and Procurator Fiscal Service, known as COPFS) investigates deaths that are sudden, unexplained, suspicious, or the result of an accident.',
      },
      {
        title: 'When the Procurator Fiscal gets involved',
        content: 'The Procurator Fiscal must be informed of any death that was sudden or unexpected, where the cause is unknown, resulted from an accident (at work, at home, or on the road), occurred in custody or during police contact, may have been caused by neglect, or where the person had not seen a doctor in the 14 days before death.',
      },
      {
        title: 'What happens during the investigation',
        content: 'The Procurator Fiscal may order a post-mortem examination. Unlike in England, the family cannot object to a post-mortem in Scotland. The investigation may take days or weeks. You cannot register the death until the Procurator Fiscal releases the body and authorises registration. COPFS will keep you informed of progress.',
      },
      {
        title: 'Fatal Accident Inquiries',
        content: 'In some cases, the Procurator Fiscal will hold a Fatal Accident Inquiry (FAI). This is the Scottish equivalent of an inquest. FAIs are mandatory for deaths in custody and deaths caused by work accidents. They are held at the Sheriff Court and examine the circumstances of the death. There is no jury, and the Sheriff issues a formal determination.',
      },
    ],
  },
  {
    id: 'confirmation',
    title: '3. Confirmation (Scotland\'s probate)',
    tasks: [
      {
        title: 'What is Confirmation?',
        content: 'Confirmation is the Scottish equivalent of probate. It gives you the legal authority to deal with the deceased person\'s estate. You apply to the Sheriff Court, not the Probate Registry. If there is a will, the executor named in the will applies for Confirmation. If there is no will, the nearest relative applies to be appointed as "executor dative" by the court.',
      },
      {
        title: 'How to apply for Confirmation',
        content: 'You need to prepare an inventory of the entire estate, listing every asset and its value at the date of death. Submit the inventory along with the will (if there is one), the death certificate, and the completed inheritance tax form to the Sheriff Court for the area where the person lived. The court fee is £300 for estates over £5,000. You can apply to any Sheriff Court in Scotland.',
      },
      {
        title: 'Small estates (under £36,000)',
        content: 'If the total estate is valued at under £36,000, you can use the simplified "small estate" procedure. The local Sheriff Clerk will help you complete the paperwork for free. You do not need a solicitor. The process is faster and cheaper than the full Confirmation process. This is a significant advantage over the English system, which has no equivalent simplified route.',
      },
      {
        title: 'Processing time',
        content: 'Confirmation in Scotland currently takes around 6 to 8 weeks from submission, which is often faster than the 12 to 16 weeks typical for probate in England. Complex estates or those involving inheritance tax may take longer.',
      },
      {
        title: 'Using Confirmation across the UK',
        content: 'If the person lived in Scotland but owned property in England or Wales, you will need to "reseal" your Confirmation at the Probate Registry in England. This makes the Scottish Confirmation valid south of the border. The same applies in reverse: if you have an English Grant of Probate, you may need to reseal it in Scotland.',
      },
    ],
  },
  {
    id: 'intestacy',
    title: '4. Scottish intestacy rules',
    tasks: [
      {
        title: 'Prior rights (surviving spouse or civil partner)',
        content: 'Scottish intestacy law gives the surviving spouse or civil partner "prior rights" before anyone else inherits. These include: the right to the family home (up to a value of £473,000), the right to household furniture and contents (up to £29,000), and a cash payment (up to £50,000 if there are surviving children, or up to £89,000 if there are no children). These rights only apply to intestate estates.',
      },
      {
        title: 'Legal rights (spouse and children)',
        content: 'After prior rights are satisfied, "legal rights" give the surviving spouse and children a fixed share of the remaining moveable estate (everything except land and buildings). If there are both a surviving spouse and children, each group gets one-third of the moveable estate. If there is only a surviving spouse or only children, that group gets one-half. Legal rights cannot be defeated by a will, making them a unique feature of Scottish law.',
      },
      {
        title: 'Legal rights even when there is a will',
        content: 'This is a crucial difference from English law. In Scotland, a surviving spouse and children always have the right to claim their "legal rights" share of the moveable estate, even if the will leaves them nothing. The person can choose either their entitlement under the will or their legal rights, whichever is more favourable. They cannot claim both. This right does not apply to heritable property (land and buildings).',
      },
      {
        title: 'Remainder of the estate',
        content: 'After prior rights and legal rights are paid out, the remainder of the estate passes according to the intestacy hierarchy: children first, then parents plus siblings, then siblings alone, then parents alone, then the surviving spouse (if they have not already received everything), then aunts and uncles, then grandparents, then great-aunts and great-uncles, and finally the Crown (known as ultimus haeres in Scotland).',
      },
      {
        title: 'Unmarried partners',
        content: 'As in the rest of the UK, unmarried partners have no automatic right to inherit under Scottish intestacy rules, regardless of how long they lived together. However, a cohabiting partner may apply to the court under the Family Law (Scotland) Act 2006 for a share of the estate. This must be done within 6 months of the death. The court has discretion over any award.',
      },
    ],
  },
  {
    id: 'funerals',
    title: '5. Funerals in Scotland',
    tasks: [
      {
        title: 'Getting permission for burial or cremation',
        content: 'After registering the death, the registrar issues a Certificate of Registration of Death (Form 14). This must be given to the funeral director before the burial or cremation can proceed. If the Procurator Fiscal is involved, they will issue a separate authorisation.',
      },
      {
        title: 'Funeral costs in Scotland',
        content: 'Average funeral costs in Scotland are similar to the rest of the UK: around £4,000 to £5,500 for a traditional funeral. Direct cremation is available from around £1,200 to £1,800. Some local authorities in Scotland offer lower-cost municipal funeral services.',
      },
      {
        title: 'Financial help with funeral costs',
        content: 'If you receive certain means-tested benefits, you can apply for a Funeral Support Payment from Social Security Scotland. This replaced the DWP Funeral Expenses Payment in Scotland. It covers burial or cremation fees plus up to £1,000 for other costs. Apply within 6 months of the funeral. Contact Social Security Scotland on 0800 182 2222.',
      },
    ],
  },
  {
    id: 'contacts',
    title: '6. Key contacts in Scotland',
    tasks: [
      {
        title: 'National Records of Scotland (NRS)',
        content: 'Responsible for civil registration in Scotland. For general registration enquiries: 0131 314 4433. Website: nrscotland.gov.uk. Address: New Register House, 3 West Register Street, Edinburgh, EH1 3YT.',
      },
      {
        title: 'Crown Office and Procurator Fiscal Service (COPFS)',
        content: 'Investigates sudden, unexplained, and suspicious deaths. Enquiry line: 0300 020 3000. Website: copfs.gov.uk. Email: enquirypoint@copfs.gov.uk.',
      },
      {
        title: 'Scottish Courts and Tribunals Service',
        content: 'Handles Confirmation applications through the Sheriff Courts. Website: scotcourts.gov.uk. Each Sheriff Court has its own contact details, found on the website.',
      },
      {
        title: 'Social Security Scotland',
        content: 'Handles Funeral Support Payment and other Scottish benefits. Phone: 0800 182 2222. Website: socialsecurity.gov.scot.',
      },
      {
        title: 'Citizens Advice Scotland',
        content: 'Free advice on all aspects of bereavement, including legal and financial matters. Phone: 0800 028 1456. Website: cas.org.uk.',
      },
      {
        title: 'Cruse Bereavement Support Scotland',
        content: 'Free bereavement counselling and support. Helpline: 0808 808 1677. Website: cruse.org.uk. Scottish office: 0345 600 2227.',
      },
    ],
  },
];

const FAQ = [
  {
    q: 'Is probate the same in Scotland as in England?',
    a: 'No. Scotland uses a process called Confirmation, which is applied for through the Sheriff Court rather than the Probate Registry. The legal framework, forms, and fees are different. Estates under £36,000 in Scotland benefit from a simplified small estate procedure.',
  },
  {
    q: 'What is the Procurator Fiscal?',
    a: 'The Procurator Fiscal is a public prosecutor who investigates sudden, unexplained, or suspicious deaths in Scotland. This role replaces the coroner system used in England, Wales, and Northern Ireland. The Procurator Fiscal is part of the Crown Office and Procurator Fiscal Service (COPFS).',
  },
  {
    q: 'Can a will override legal rights in Scotland?',
    a: 'No. Legal rights in Scotland cannot be defeated by a will. A surviving spouse and children always have the right to claim their legal rights share of the moveable estate. However, a person can choose either what the will gives them or their legal rights share. They cannot take both.',
  },
  {
    q: 'How much does Confirmation cost in Scotland?',
    a: 'The court fee for Confirmation is £300 for estates valued over £5,000, and free for estates under £5,000. If you use a solicitor, expect fees of £1,500 to £5,000 depending on complexity. For small estates under £36,000, the Sheriff Clerk can help you apply for free.',
  },
  {
    q: 'What is the difference between prior rights and legal rights?',
    a: 'Prior rights apply only when someone dies without a will. They give the surviving spouse the right to the home (up to £473,000), furniture (up to £29,000), and a cash sum. Legal rights apply whether or not there is a will, and give the surviving spouse and children a fixed share of the moveable estate (everything except land and buildings).',
  },
  {
    q: 'Does Tell Us Once work in Scotland?',
    a: 'Yes. Tell Us Once is available in Scotland and works the same way as in England and Wales. The registrar will give you a reference number when you register the death. Use it within 28 days to notify multiple government departments in a single step.',
  },
  {
    q: 'What is a Fatal Accident Inquiry?',
    a: 'A Fatal Accident Inquiry (FAI) is the Scottish equivalent of an inquest. It is a public hearing held at the Sheriff Court to examine the circumstances of certain deaths. FAIs are mandatory for deaths in custody and deaths caused by work accidents. The Sheriff issues a formal determination about the cause of death and any precautions that might have prevented it.',
  },
  {
    q: 'What if the person lived in Scotland but owned property in England?',
    a: 'You will need to obtain Confirmation in Scotland first, then have it "resealed" at the Probate Registry in England. Resealing makes the Scottish Confirmation valid for English assets. You may need a solicitor who practises in both jurisdictions to help with this.',
  },
];

export default function ScotlandGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guide', href: '/guide' },
        { label: 'Scotland' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When Someone Dies in Scotland
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        Scotland has its own legal system for dealing with death, and the process differs from England and Wales in several important ways. Registration takes 8 days instead of 5. There is no coroner; the Procurator Fiscal investigates unexpected deaths. And probate is called Confirmation, handled by the Sheriff Court. This guide covers everything you need to know.
      </p>
      <Link
        href="/start"
        className="inline-block mb-10 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
      >
        Get Your Personalised Guide
      </Link>

      {/* Key differences table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Key differences from England and Wales</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card">
                <th className="text-left p-3 border border-border font-semibold text-foreground">England and Wales</th>
                <th className="text-left p-3 border border-border font-semibold text-foreground">Scotland</th>
              </tr>
            </thead>
            <tbody>
              {KEY_DIFFERENCES.map((diff, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-card/50' : ''}>
                  <td className="p-3 border border-border text-muted">{diff.england}</td>
                  <td className="p-3 border border-border text-muted font-medium">{diff.scotland}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-6 mb-10" aria-label="Guide sections">
        <h2 className="font-semibold text-foreground mb-3">In this guide</h2>
        <ul className="space-y-2">
          {SECTIONS.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-primary hover:underline text-sm">{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      {SECTIONS.map((section, sIndex) => (
        <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
          <div className="space-y-6">
            {section.tasks.map((task, tIndex) => (
              <div key={tIndex} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-2">{task.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{task.content}</p>
              </div>
            ))}
          </div>

          {/* Callout after Procurator Fiscal section */}
          {sIndex === 1 && (
            <div className="bg-warm border border-warm-border rounded-xl p-5 mt-6">
              <p className="text-sm text-amber-800 leading-relaxed">
                If the Procurator Fiscal is involved, do not worry. This is standard procedure for any sudden or unexplained death in Scotland. It does not mean anything suspicious is suspected. COPFS will keep you informed throughout the process.
              </p>
            </div>
          )}

          {/* Cross-link after Confirmation section */}
          {sIndex === 2 && (
            <div className="bg-primary-light rounded-lg p-4 mt-6">
              <p className="text-sm text-foreground">
                <strong>Related:</strong> Read our <Link href="/probate" className="text-primary hover:underline">full probate guide</Link> for a UK-wide overview, or see <Link href="/guides/executor-duties" className="text-primary hover:underline">executor duties</Link> for your responsibilities as the person administering the estate.
              </p>
            </div>
          )}

          {/* Cross-link after intestacy section */}
          {sIndex === 3 && (
            <div className="bg-primary-light rounded-lg p-4 mt-6">
              <p className="text-sm text-foreground">
                <strong>Related:</strong> See our <Link href="/intestacy" className="text-primary hover:underline">full intestacy guide</Link> for rules across all four UK nations, or learn about <Link href="/guides/cohabiting-partners" className="text-primary hover:underline">rights for unmarried partners</Link>.
              </p>
            </div>
          )}
        </section>
      ))}

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about deaths in Scotland</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Northern Ireland link */}
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Other nations:</strong> See our guide for <Link href="/guide/northern-ireland" className="text-primary hover:underline">Northern Ireland</Link>, or go back to the <Link href="/guide" className="text-primary hover:underline">main step-by-step guide</Link> (which covers England and Wales).
        </p>
      </div>

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Want a guide specific to your situation?</h2>
        <p className="text-muted mb-6">Answer a few questions and get a personalised checklist with real deadlines and costs.</p>
        <Link
          href="/start"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/guide/scotland" guides={['/guide', '/probate', '/intestacy', '/guide/northern-ireland']} />

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
              { '@type': 'ListItem', position: 2, name: 'Guide', item: 'https://helpafterloss.co.uk/guide' },
              { '@type': 'ListItem', position: 3, name: 'Scotland', item: 'https://helpafterloss.co.uk/guide/scotland' },
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
            headline: 'What to Do When Someone Dies in Scotland',
            description: 'A complete guide to registration, Procurator Fiscal, Confirmation, and intestacy rules in Scotland.',
            url: 'https://helpafterloss.co.uk/guide/scotland',
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
