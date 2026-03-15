import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'What to Do When Someone Dies in Northern Ireland - Complete Guide',
  description: 'A complete guide to what happens when someone dies in Northern Ireland. Covers registration with NISRA, the coroner system, probate through Belfast High Court, NI intestacy rules, and key contacts.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guide/northern-ireland' },
  openGraph: {
    title: 'What to Do When Someone Dies in Northern Ireland - Complete Guide',
    description: 'Step-by-step guidance for dealing with a death in Northern Ireland, including NISRA registration, probate, and intestacy rules.',
    url: 'https://helpafterloss.co.uk/guide/northern-ireland',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Do When Someone Dies in Northern Ireland',
    description: 'Registration, coroner system, probate, and intestacy rules explained for Northern Ireland.',
  },
};

const KEY_DIFFERENCES = [
  {
    england: 'Death registered at local register office (General Register Office)',
    ni: 'Death registered at district registrar office (NISRA, Northern Ireland Statistics and Research Agency)',
  },
  {
    england: 'Tell Us Once available to notify government departments',
    ni: 'Tell Us Once is NOT available in Northern Ireland. You must notify each department separately.',
  },
  {
    england: 'Grant of Probate from the Probate Registry',
    ni: 'Grant of Probate from the Probate Office at the Royal Courts of Justice, Belfast',
  },
  {
    england: 'Probate application online at gov.uk',
    ni: 'Probate application by post or in person at the Probate Office, Belfast',
  },
  {
    england: 'Probate court fee: £300 (estates over £5,000)',
    ni: 'Probate fee varies by estate value (sliding scale from £261 to £7,000+)',
  },
  {
    england: 'Coroner system investigates sudden or unexplained deaths',
    ni: 'Coroner system investigates sudden or unexplained deaths (Coroners Service for Northern Ireland)',
  },
  {
    england: 'Death certificate: £12.50 per copy',
    ni: 'Death certificate: £15 per copy',
  },
  {
    england: 'Intestacy: spouse gets first £322,000 plus personal belongings',
    ni: 'Intestacy: spouse gets personal belongings plus first £250,000, remainder split with children',
  },
  {
    england: 'Bereavement Support Payment claimed through DWP',
    ni: 'Bereavement Support Payment claimed through the Department for Communities (DfC)',
  },
  {
    england: 'Funeral Expenses Payment from DWP',
    ni: 'Funeral Expenses Payment from the Department for Communities (DfC)',
  },
];

const SECTIONS = [
  {
    id: 'registration',
    title: '1. Registering a death in Northern Ireland',
    tasks: [
      {
        title: 'Get the medical certificate',
        content: 'A doctor who attended the person during their final illness issues the Medical Certificate of Cause of Death (MCCD). If the person died in hospital, the hospital arranges this. If they died at home, contact their GP surgery. If the death was sudden or the cause is unknown, the doctor must report it to the coroner.',
      },
      {
        title: 'Register within 5 days',
        content: 'In Northern Ireland, the death must be registered within 5 days at any district registrar office. Registration is administered by NISRA (Northern Ireland Statistics and Research Agency) through 26 district registrar offices. You can register in any district, not just where the person died. Bring the MCCD, the person\'s full name, date and place of birth, last address, occupation, and date of birth of any surviving spouse.',
      },
      {
        title: 'Death certificates cost £15 each',
        content: 'Certified copies of the death certificate cost £15 each in Northern Ireland. Order at least 5 copies at the time of registration, as it costs more to order them later. Banks, insurers, solicitors, and pension providers all need originals.',
      },
      {
        title: 'Tell Us Once is NOT available in Northern Ireland',
        content: 'This is one of the most significant differences. Tell Us Once does not operate in Northern Ireland. You must notify each government department individually: HMRC, the Department for Communities (DfC, which handles benefits), DVLA, the Passport Office, and the local council. This means more phone calls and letters, but our template letters and notify tool can help.',
      },
    ],
  },
  {
    id: 'coroner',
    title: '2. The coroner system in Northern Ireland',
    tasks: [
      {
        title: 'Northern Ireland has its own coroner service',
        content: 'The Coroners Service for Northern Ireland operates separately from the coroner system in England and Wales. It is part of the Northern Ireland Courts and Tribunals Service. There is one Coroner for Northern Ireland, based in Belfast, supported by deputy coroners.',
      },
      {
        title: 'When the coroner gets involved',
        content: 'A death must be reported to the coroner if: the cause of death is unknown, the person did not see a doctor during their last illness, the death was sudden or unexpected, the death resulted from violence, accident, or neglect, the death occurred during surgery or under anaesthesia, the death occurred in custody, or if there is any suspicious circumstance.',
      },
      {
        title: 'What happens during a coroner investigation',
        content: 'The coroner may order a post-mortem examination to establish the cause of death. If the cause is confirmed and there are no suspicious circumstances, the coroner will issue a coroner\'s certificate that allows the death to be registered. You cannot register the death until the coroner authorises it.',
      },
      {
        title: 'Inquests in Northern Ireland',
        content: 'If the coroner decides a full inquest is needed, this is a public hearing to examine the circumstances of the death. Inquests in Northern Ireland can take some time to be scheduled, particularly if they involve historical cases or complex circumstances. The family will be notified of the date and can attend. Legal aid may be available for bereaved families at inquests.',
      },
    ],
  },
  {
    id: 'probate',
    title: '3. Probate in Northern Ireland',
    tasks: [
      {
        title: 'Probate through the Belfast Probate Office',
        content: 'In Northern Ireland, probate applications are handled by the Probate Office at the Royal Courts of Justice in Belfast. This is different from England, where you apply to the Probate Registry (often online). You apply for a Grant of Probate (with a will) or Letters of Administration (without a will). Applications are made by post or in person.',
      },
      {
        title: 'How to apply',
        content: 'You need to complete the relevant probate application form, along with an Inheritance Tax form. Submit the original will (if there is one), the death certificate, and proof of your identity. The Probate Office will schedule an appointment for you to swear an oath (if applying in person). All executors named in the will must agree to the application, though some can renounce.',
      },
      {
        title: 'Probate fees in Northern Ireland',
        content: 'Northern Ireland uses a sliding scale of fees based on the net value of the estate. As a general guide: estates under £10,000 pay no fee, estates between £10,000 and £25,000 pay around £261, and fees increase with estate value. For large estates (over £400,000), fees can exceed £7,000. This is significantly more expensive than the flat £300 fee in England and Wales.',
      },
      {
        title: 'Processing time',
        content: 'Probate applications in Northern Ireland typically take 8 to 12 weeks to process. Straightforward cases can be faster. If inheritance tax is due or there are complications, it will take longer.',
      },
      {
        title: 'Using probate across the UK',
        content: 'A Grant of Probate issued in Northern Ireland is valid throughout Northern Ireland. If the person also owned assets in England, Wales, or Scotland, you may need to reseal the grant in the relevant jurisdiction. An English probate can also be resealed for use in Northern Ireland.',
      },
    ],
  },
  {
    id: 'intestacy',
    title: '4. Northern Ireland intestacy rules',
    tasks: [
      {
        title: 'Spouse or civil partner with children',
        content: 'If the person died without a will and is survived by a spouse or civil partner and children, the spouse receives all personal belongings plus the first £250,000 of the estate. The remainder is split: one-third to the spouse and two-thirds divided equally among the children. If the estate is worth less than £250,000, the spouse inherits everything.',
      },
      {
        title: 'Spouse or civil partner without children',
        content: 'If there are no children, the surviving spouse or civil partner inherits the entire estate. Parents, siblings, and other relatives receive nothing.',
      },
      {
        title: 'No spouse or civil partner',
        content: 'If there is no surviving spouse or civil partner, the estate passes in this order: children (equally), then parents (equally), then siblings (equally), then half-siblings, then grandparents, then aunts and uncles, then half-aunts and half-uncles. If no relatives can be found, the estate passes to the Crown.',
      },
      {
        title: 'Key differences from England',
        content: 'The main difference is the statutory legacy amount. In England, the surviving spouse receives the first £322,000. In Northern Ireland, it is £250,000. Northern Ireland also has slightly different rules about who qualifies as a relative and in what order they inherit.',
      },
      {
        title: 'Unmarried partners',
        content: 'As in the rest of the UK, unmarried partners have no automatic right to inherit under intestacy rules in Northern Ireland. The Inheritance (Provision for Family and Dependants) (Northern Ireland) Order 1979 allows certain dependants to apply to court for provision from the estate, but this is not guaranteed and requires legal action.',
      },
    ],
  },
  {
    id: 'benefits',
    title: '5. Benefits and financial help',
    tasks: [
      {
        title: 'Bereavement Support Payment',
        content: 'If your spouse or civil partner died and you are under State Pension age, you can claim Bereavement Support Payment. The rates are the same as in the rest of the UK: higher rate (with dependent children) is a £3,500 lump sum plus £350 per month for 18 months; standard rate is £2,500 plus £100 per month. In Northern Ireland, claim through the Department for Communities (DfC), not the DWP. Call 0800 085 2463.',
      },
      {
        title: 'Funeral Expenses Payment',
        content: 'If you receive certain means-tested benefits, you can apply for a Funeral Expenses Payment to help cover funeral costs. In Northern Ireland, this is handled by the Department for Communities (not the DWP). It covers necessary burial or cremation costs plus up to £1,000 for other expenses. Apply within 6 months of the funeral. Call 0800 085 2463.',
      },
      {
        title: 'Other benefits',
        content: 'Universal Credit, Pension Credit, Housing Benefit, and other benefits are administered by the Department for Communities in Northern Ireland, not the DWP. If you are already receiving benefits, report the death to DfC as soon as possible. You may be entitled to a single person discount on rates (the Northern Ireland equivalent of council tax).',
      },
    ],
  },
  {
    id: 'contacts',
    title: '6. Key contacts in Northern Ireland',
    tasks: [
      {
        title: 'General Register Office (Northern Ireland)',
        content: 'Part of NISRA. Handles all birth, death, and marriage registrations. Phone: 028 9151 3101. Website: nisra.gov.uk. Address: Oxford House, 49-55 Chichester Street, Belfast, BT1 4HL.',
      },
      {
        title: 'Probate Office',
        content: 'Handles all probate applications for Northern Ireland. Phone: 028 9072 4678. Address: Royal Courts of Justice, Chichester Street, Belfast, BT1 3JF. Website: nidirect.gov.uk (search for "probate").',
      },
      {
        title: 'Coroners Service for Northern Ireland',
        content: 'Investigates deaths that are sudden, unexplained, or suspicious. Phone: 028 9044 6800. Address: Laganside Courts, Oxford Street, Belfast, BT1 3LL.',
      },
      {
        title: 'Department for Communities (DfC)',
        content: 'Handles benefits including Bereavement Support Payment and Funeral Expenses Payment. Bereavement line: 0800 085 2463. Website: communities-ni.gov.uk.',
      },
      {
        title: 'NI Direct',
        content: 'The official government services website for Northern Ireland. Provides guidance on what to do when someone dies. Website: nidirect.gov.uk/articles/what-to-do-when-someone-dies. Phone: 0300 200 7890.',
      },
      {
        title: 'Cruse Bereavement Support (Northern Ireland)',
        content: 'Free bereavement counselling and support. Helpline: 0808 808 1677. Website: cruse.org.uk. Northern Ireland office: 028 9043 4600.',
      },
      {
        title: 'Citizens Advice Northern Ireland',
        content: 'Free advice on all aspects of bereavement. Phone: 0800 028 8877. Website: citizensadvice.org.uk.',
      },
    ],
  },
];

const FAQ = [
  {
    q: 'Does Tell Us Once work in Northern Ireland?',
    a: 'No. Tell Us Once is not available in Northern Ireland. You must contact each government department separately to report the death. This includes HMRC, the Department for Communities (for benefits), DVLA, the Passport Office, and Land and Property Services (for rates). Our template letters and notification tools can help you with each one.',
  },
  {
    q: 'Where do I apply for probate in Northern Ireland?',
    a: 'All probate applications in Northern Ireland go through the Probate Office at the Royal Courts of Justice in Belfast. You cannot apply online as you can in England. Applications are made by post or in person. The Probate Office phone number is 028 9072 4678.',
  },
  {
    q: 'How much does probate cost in Northern Ireland?',
    a: 'Probate fees in Northern Ireland are based on a sliding scale related to the estate value. Estates under £10,000 pay no fee. The fees increase with estate value and can be significantly higher than the flat £300 fee in England and Wales. For estates over £400,000, fees can exceed £7,000.',
  },
  {
    q: 'What are the intestacy rules in Northern Ireland?',
    a: 'If someone dies without a will in Northern Ireland, the surviving spouse or civil partner receives personal belongings plus the first £250,000. If there are children, the remainder is split one-third to the spouse and two-thirds to the children. If there are no children, the spouse inherits everything. Unmarried partners receive nothing automatically.',
  },
  {
    q: 'Is the coroner system in Northern Ireland the same as England?',
    a: 'It is similar but separate. The Coroners Service for Northern Ireland is its own organisation, based in Belfast. The circumstances that trigger a coroner referral are broadly the same as in England and Wales. Inquests follow a similar format but are conducted under Northern Ireland legislation.',
  },
  {
    q: 'Do I pay council tax or rates in Northern Ireland?',
    a: 'Northern Ireland does not have council tax. Instead, it uses domestic rates, administered by Land and Property Services (LPS). When someone dies, contact LPS on 0300 200 7801 to update the ratepayer details. You may be entitled to a single person discount of 25%, and an empty property may qualify for a rate reduction.',
  },
  {
    q: 'Who handles benefits in Northern Ireland?',
    a: 'Benefits in Northern Ireland are handled by the Department for Communities (DfC), not the DWP. This includes Bereavement Support Payment, Funeral Expenses Payment, Universal Credit, and Pension Credit. The bereavement line is 0800 085 2463.',
  },
  {
    q: 'What if the person lived in Northern Ireland but owned property in England?',
    a: 'You will need to obtain a Grant of Probate in Northern Ireland first, then have it "resealed" at the Probate Registry in England. This makes the Northern Ireland grant valid for English assets. The same applies in reverse.',
  },
];

export default function NorthernIrelandGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guide', href: '/guide' },
        { label: 'Northern Ireland' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When Someone Dies in Northern Ireland
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        Northern Ireland has its own registration system, probate process, and benefits administration. The biggest practical difference is that Tell Us Once is not available, meaning you must notify each government department individually. Probate is handled through the Probate Office in Belfast, not online, and fees are higher than in England and Wales. This guide covers everything specific to Northern Ireland.
      </p>
      <Link
        href="/start"
        className="inline-block mb-10 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
      >
        Get Your Personalised Guide
      </Link>

      {/* Important warning about Tell Us Once */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Important:</strong> Tell Us Once is not available in Northern Ireland. You will need to contact HMRC, the Department for Communities, DVLA, the Passport Office, and Land and Property Services individually. This means more paperwork, but our <Link href="/template-letters" className="text-amber-800 font-medium underline">template letters</Link> and <Link href="/notify" className="text-amber-800 font-medium underline">notification guide</Link> can help you through each one.
        </p>
      </div>

      {/* Key differences table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Key differences from England and Wales</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-card">
                <th className="text-left p-3 border border-border font-semibold text-foreground">England and Wales</th>
                <th className="text-left p-3 border border-border font-semibold text-foreground">Northern Ireland</th>
              </tr>
            </thead>
            <tbody>
              {KEY_DIFFERENCES.map((diff, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-card/50' : ''}>
                  <td className="p-3 border border-border text-muted">{diff.england}</td>
                  <td className="p-3 border border-border text-muted font-medium">{diff.ni}</td>
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

          {/* Cross-link after registration section */}
          {sIndex === 0 && (
            <div className="bg-primary-light rounded-lg p-4 mt-6">
              <p className="text-sm text-foreground">
                <strong>Need help notifying organisations?</strong> Since Tell Us Once is not available, use our <Link href="/notify" className="text-primary hover:underline">full list of organisations to notify</Link>, <Link href="/template-letters" className="text-primary hover:underline">template letters</Link>, and <Link href="/notify-for-me" className="text-primary hover:underline">Notify For Me</Link> service to save time.
              </p>
            </div>
          )}

          {/* Cross-link after probate section */}
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
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about deaths in Northern Ireland</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Scotland link */}
      <div className="bg-primary-light rounded-lg p-4 mb-8">
        <p className="text-sm text-foreground">
          <strong>Other nations:</strong> See our guide for <Link href="/guide/scotland" className="text-primary hover:underline">Scotland</Link>, or go back to the <Link href="/guide" className="text-primary hover:underline">main step-by-step guide</Link> (which covers England and Wales).
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

      <RelatedGuides currentPath="/guide/northern-ireland" guides={['/guide', '/probate', '/intestacy', '/guide/scotland']} />

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
              { '@type': 'ListItem', position: 3, name: 'Northern Ireland', item: 'https://helpafterloss.co.uk/guide/northern-ireland' },
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
            headline: 'What to Do When Someone Dies in Northern Ireland',
            description: 'A complete guide to registration, probate, and intestacy rules in Northern Ireland.',
            url: 'https://helpafterloss.co.uk/guide/northern-ireland',
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
