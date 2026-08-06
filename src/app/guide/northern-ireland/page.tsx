import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'When Someone Dies in Northern Ireland: No Tell Us Once (2026)',
  description: 'Northern Ireland has no Tell Us Once service, its own probate fees, and different intestacy rules. A free step-by-step guide with the phone numbers, deadlines and costs.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guide/northern-ireland' },
  openGraph: {
    title: 'When Someone Dies in Northern Ireland: No Tell Us Once (2026)',
    description: 'No Tell Us Once, Northern Ireland\'s own probate fees, and different intestacy rules. A free step-by-step guide with the phone numbers, deadlines and costs.',
    url: 'https://helpafterloss.co.uk/guide/northern-ireland',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When Someone Dies in Northern Ireland: Key Differences (2026)',
    description: 'No Tell Us Once, higher probate fees, and NI-specific processes. Registration, coroner, probate, and intestacy rules explained.',
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
    england: 'Probate court fee: £526 (estates over £5,000)',
    ni: 'No probate fee at all if the estate is £10,000 or less; above that a flat £326, plus an £81 personal application fee if you apply without a solicitor',
  },
  {
    england: 'Coroner system investigates sudden or unexplained deaths',
    ni: 'Coroner system investigates sudden or unexplained deaths (Coroners Service for Northern Ireland)',
  },
  {
    england: 'Death certificate: £12.50 per copy',
    ni: 'Death certificate: £8 per copy from the registrar on the day, or £15 for the first copy later from GRONI',
  },
  {
    england: 'Intestacy: spouse gets first £322,000 plus personal belongings; if there are no children the spouse takes everything',
    ni: 'Intestacy: spouse gets personal belongings plus first £250,000 where there are children; where there are none it is £450,000 and the spouse shares the rest with parents or siblings',
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
        content: 'The doctor who cared for your loved one during their final illness issues the Medical Certificate of Cause of Death (MCCD). If they were in hospital, the hospital arranges this for you. If they were at home, call their GP surgery. If the death was sudden, or the cause is not known, the doctor has to report it to the coroner.',
      },
      {
        title: 'Register within 5 days',
        content: 'In Northern Ireland, the death must be registered within 5 days at any district registrar office. Registration is looked after by NISRA (Northern Ireland Statistics and Research Agency) through 26 district offices, and you can go to whichever is easiest for you, not only the one where they died. Take the MCCD, their full name, date and place of birth, last address, occupation, and the date of birth of any surviving husband, wife, or civil partner.',
      },
      {
        title: 'Death certificates cost £8 each on the day',
        content: 'This is one place where Northern Ireland genuinely rewards getting it done at the time. Certified copies cost £8 each if you buy them from the registrar while you are registering. Order them later from GRONI instead and the first copy is £15, with further copies £8 each if bought at the same time. So ordering 5 on the day costs £40 rather than £47. Banks, insurers, solicitors, and pension providers each need an original.',
      },
      {
        title: 'Tell Us Once is NOT available in Northern Ireland',
        content: 'This is one of the biggest differences, and it does mean more work for you. Tell Us Once does not operate in Northern Ireland, so each government department needs to hear from you separately: HMRC, the Department for Communities (DfC, which handles benefits), DVLA, the Passport Office, and the local council. That is more phone calls and letters than elsewhere in the UK, but our template letters and notify tool are there to take some of the weight off.',
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
        content: 'The coroner may ask for a post-mortem examination to establish the cause of death. Once the cause is confirmed and there is nothing untoward, the coroner issues a coroner\'s certificate so the death can be registered. You cannot register until the coroner gives that authorisation, so there may be a wait.',
      },
      {
        title: 'Inquests in Northern Ireland',
        content: 'If the coroner decides a full inquest is needed, that is a public hearing to look at the circumstances of the death. Inquests in Northern Ireland can take a while to be scheduled, particularly where cases are historical or complicated. Your family will be told the date and can attend, and legal aid may be available to bereaved families at inquests.',
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
        content: 'If the estate is assessed at £10,000 or less, there is no court fee to pay at all. Above £10,000 the fee is a flat £326, not a sliding scale. If you are applying yourself rather than through a solicitor, there is a further personal application fee of £81, so most families applying on their own pay £407 in total. These figures come from the Court of Judicature (Non-Contentious Probate) Fees (Amendment) Order (Northern Ireland) 2026 and apply from 1 April 2026; they are already set to rise to £333 plus £83 in April 2027. Northern Ireland sets its own fees through the Department of Justice rather than following the England and Wales figure, so it is always worth checking the current Court Fees page on justice-ni.gov.uk before you budget. You may also be able to get the fee reduced or waived if you are on a low income or certain benefits.',
      },
      {
        title: 'Processing time',
        content: 'The Northern Ireland Courts and Tribunals Service does not publish average processing times for probate, so we would rather not quote a figure than give you one we cannot stand behind. Straightforward cases move faster; if inheritance tax is due or there are complications, expect longer. The Probate Office in Belfast (028 9072 4678) will tell you where your application has got to.',
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
        content: 'If there was no will, and your loved one is survived by a husband, wife, or civil partner and by children, the surviving partner receives all the personal belongings plus the first £250,000 of the estate. If the estate is worth £250,000 or less, the surviving partner inherits all of it. Above that, how the remainder is split depends on how many children there are, which is a detail often missed: if there is only one child, the surviving partner takes one-half of the remainder and the child takes the other half; if there is more than one child, the surviving partner takes one-third and the children share the other two-thirds equally. A child who died before your loved one but left children of their own still counts for this purpose, and their share passes down to them.',
      },
      {
        title: 'Spouse or civil partner without children',
        content: 'This is where Northern Ireland differs most from England and Wales, and where people are most often given the wrong answer. The surviving husband, wife, or civil partner does not automatically inherit everything. If there are no children but your loved one left parents, or brothers and sisters, or nieces and nephews through a sibling who has died, the surviving partner receives the personal belongings plus the first £450,000, and then one-half of whatever remains. The other half goes to the parents, or if no parent survives, to the brothers and sisters and their children. It is only where there are no children, no parents, and no siblings or their children that the surviving partner inherits the whole estate.',
      },
      {
        title: 'No spouse or civil partner',
        content: 'If there is no surviving spouse or civil partner, the estate passes in this order: children (equally, with a deceased child\'s share passing to their own children), then parents (equally), then brothers and sisters, with the children of a sibling who died first taking their parent\'s share. Beyond that the law looks for the nearest blood relatives, which in practice usually means grandparents, then aunts and uncles or their children. If no relatives can be found, the estate passes to the Crown through the Crown Solicitor\'s Office. One important Northern Ireland difference: half-brothers and half-sisters are not pushed down the queue as they are in England and Wales. Relatives of the half-blood inherit equally with relatives of the whole blood in the same degree.',
      },
      {
        title: 'Key differences from England',
        content: 'The statutory legacy amounts are different. In England and Wales the surviving spouse receives the first £322,000 where there are children, and the whole estate where there are none. In Northern Ireland it is £250,000 where there are children, and £450,000 plus half the remainder where there are no children but parents or siblings survive. Those Northern Ireland figures were set by the Administration of Estates (Rights of Surviving Spouse or Civil Partner) Order (Northern Ireland) 2007 and have not been raised since 1 January 2008, so they have stood still for well over a decade while the England and Wales figure has risen. Northern Ireland also treats half-blood relatives equally rather than ranking them below full siblings.',
      },
      {
        title: 'Unmarried partners',
        content: 'As in the rest of the UK, partners who were not married have no automatic right to inherit under the intestacy rules in Northern Ireland. This catches many people out, and it can feel very unfair. The Inheritance (Provision for Family and Dependants) (Northern Ireland) Order 1979 lets certain dependants apply to the court for provision from the estate, though nothing is guaranteed and it does mean going to law. If this is your situation, please get advice early.',
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
        content: 'Universal Credit, Pension Credit, Housing Benefit, and other benefits are handled by the Department for Communities in Northern Ireland rather than the DWP. If you receive benefits yourself, let DfC know what has happened as soon as you feel able. You may also be entitled to a single person discount on your rates (the Northern Ireland equivalent of council tax).',
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
    a: 'If the estate is assessed at £10,000 or less, there is no fee. Above £10,000 the fee is a flat £326, and if you apply yourself rather than through a solicitor there is a further personal application fee of £81, giving £407 in total. These figures apply from 1 April 2026 and are set by the Department of Justice, separately from the England and Wales fee, so it is worth checking the current Court Fees page on justice-ni.gov.uk before you budget. Northern Ireland is cheaper than England and Wales, where the court fee is £526.',
  },
  {
    q: 'What are the intestacy rules in Northern Ireland?',
    a: 'If there is no will in Northern Ireland and there are children, the surviving husband, wife, or civil partner receives the personal belongings plus the first £250,000. What is left is then split one-half to the surviving partner if there is only one child, or one-third if there is more than one child, with the children sharing the rest. If there are no children, the surviving partner does not automatically inherit everything: where parents, brothers or sisters, or their children survive, the partner takes the personal belongings plus the first £450,000 and one-half of the remainder, and the other half goes to those relatives. Only where there are no children, parents or siblings does the surviving partner take the whole estate. Partners who were not married receive nothing automatically.',
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
        We are very sorry for your loss. Northern Ireland has its own registration system, probate process, and benefits administration, so it helps to know what to expect. The biggest practical difference is that Tell Us Once is not available, which means contacting each government department yourself. Probate goes through the Probate Office in Belfast rather than online, though the court fees are lower than in England and Wales. This guide covers everything specific to Northern Ireland, in plain English.
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
          <strong>Worth knowing:</strong> Tell Us Once is not available in Northern Ireland, so HMRC, the Department for Communities, DVLA, the Passport Office, and Land and Property Services each need to hear from you separately. That is more paperwork than we would wish on anyone, but our <Link href="/template-letters" className="text-amber-800 font-medium underline">template letters</Link> and <Link href="/notify" className="text-amber-800 font-medium underline">notification guide</Link> will walk you through each one.
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
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about the process in Northern Ireland</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Practical tools */}
      <div className="bg-primary-light rounded-lg p-4 mb-4">
        <p className="text-sm text-foreground">
          <strong>Practical tools:</strong> Use our <Link href="/notify" className="text-primary hover:underline">notification guide</Link> to contact banks and utility companies, our <Link href="/template-letters" className="text-primary hover:underline">template letters</Link> to save time writing, and our <Link href="/costs" className="text-primary hover:underline">cost calculator</Link> to plan your budget. Since Tell Us Once is not available in Northern Ireland, our <Link href="/call-scripts" className="text-primary hover:underline">call scripts</Link> are especially useful for phoning government departments.
        </p>
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
            image: 'https://helpafterloss.co.uk/opengraph-image',
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
