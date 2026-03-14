import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Template Letters for Bereavement - Ready-to-Use Notification Letters',
  description: 'Free template letters to notify banks, utilities, HMRC, council tax, employers, insurers, DVLA, and more after someone dies. Copy, fill in the details, and send.',
  alternates: { canonical: 'https://helpafterloss.co.uk/template-letters' },
  openGraph: {
    title: 'Template Letters for Bereavement - Ready-to-Use Notification Letters',
    description: 'Free template letters to notify banks, utilities, HMRC, council tax, employers, insurers, and the DVLA after a death.',
    url: 'https://helpafterloss.co.uk/template-letters',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Bereavement Template Letters - UK',
    description: 'Ready-to-use letters for notifying organisations after someone dies.',
  },
};

interface TemplateLetter {
  id: string;
  title: string;
  description: string;
  letter: string;
  tips: string[];
}

const TEMPLATES: TemplateLetter[] = [
  {
    id: 'bank',
    title: 'Notifying a bank or building society',
    description: 'Use this letter to notify any bank, building society, or financial institution of the death. Send separately to each provider.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

[Bank/Building Society name]
[Bereavement Team / Department address]

Dear Sir or Madam,

I am writing to notify you of the death of [full name of the deceased], who held an account (or accounts) with you.

[Full name of the deceased] passed away on [date of death]. I enclose a certified copy of the death certificate.

The account details I am aware of are:

Account name: [name on account]
Account number: [account number]
Sort code: [sort code]

I am the [executor of the will / administrator of the estate / next of kin] and would be grateful if you could:

- Freeze the account(s) to prevent any unauthorised transactions
- Confirm the balance(s) as at the date of death
- Advise me of any standing orders or direct debits on the account(s)
- Let me know what documentation you require to release the funds

Please send all correspondence to the address above.

Yours faithfully,

[Your full name]

Enclosures: Certified copy of death certificate`,
    tips: [
      'Send a separate letter to each bank or building society.',
      'You can also use the free Death Notification Service (deathnotificationservice.co.uk) to notify multiple banks at once.',
      'Most banks will release reasonable funeral costs from the account before probate is granted.',
      'If the account was jointly held, it usually passes automatically to the surviving account holder.',
      'Keep copies of all letters you send and note the date you posted them.',
    ],
  },
  {
    id: 'utility',
    title: 'Notifying utility companies',
    description: 'Use this letter for gas, electricity, water, broadband, phone, or TV licence providers.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

[Utility company name]
[Company address]

Dear Sir or Madam,

I am writing to inform you that [full name of the deceased], the account holder at the address below, passed away on [date of death].

Account number: [account number, if known]
Account address: [address where the service is provided]

I am the [executor of the will / administrator of the estate / next of kin].

[Choose one of the following:]

Option A - Transfer the account:
I would like to transfer the account into my name / the name of [new account holder's full name], who will continue to live at the property. Please send a final bill up to the date of death and set up a new account from that date.

Option B - Close the account:
I would like to close the account. Please provide a final meter reading as of [date] and send the closing bill to my address above.

Please send all correspondence to my address at the top of this letter.

Yours faithfully,

[Your full name]`,
    tips: [
      'Take final meter readings for gas, electricity, and water on the date of death (or as soon as possible after).',
      'If the property will be empty, consider whether you need to keep the heating on at a low level to prevent damage.',
      'You do not need to send a death certificate to most utility companies, but keep one ready in case they ask.',
      'Cancel the TV licence online at tvlicensing.co.uk or by calling 0300 790 6165. You may be entitled to a refund for any full remaining months.',
      'Check whether any utility accounts are in credit. You are entitled to a refund of any overpayment.',
    ],
  },
  {
    id: 'hmrc',
    title: 'Notifying HMRC',
    description: 'If Tell Us Once was used, HMRC will already be aware. Otherwise, use this letter to notify them directly.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

HM Revenue and Customs
Pay As You Earn and Self Assessment
BX9 1AS

Dear Sir or Madam,

I am writing to notify you of the death of [full name of the deceased].

Date of death: [date of death]
National Insurance number: [NI number of the deceased]
Unique Taxpayer Reference (if applicable): [UTR number]

I am the [executor of the will / administrator of the estate / next of kin].

[Full name of the deceased] was [employed by / self-employed / retired / in receipt of a pension]. Please could you:

- Confirm any tax owed or any tax refund due up to the date of death
- Cancel any future tax demands or payments
- Send any correspondence regarding the estate to my address above

I enclose a certified copy of the death certificate.

Yours faithfully,

[Your full name]

Enclosures: Certified copy of death certificate`,
    tips: [
      'If you used the Tell Us Once service at the register office, HMRC will already have been notified. You do not need to write separately.',
      'You can also call the HMRC bereavement helpline on 0300 200 3300.',
      'If the deceased was self-employed, a final tax return will need to be filed covering the start of the tax year to the date of death.',
      'Any tax refund owed to the deceased will form part of the estate.',
      'Keep the deceased person\'s tax records for at least 4 years after the end of the tax year in which they died.',
    ],
  },
  {
    id: 'council-tax',
    title: 'Notifying the council (council tax)',
    description: 'Tell the local council about the death to claim any exemptions or discounts on council tax.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

[Council name]
Council Tax Department
[Council address]

Dear Sir or Madam,

I am writing to notify you of the death of [full name of the deceased], who was the [sole / joint] council tax payer at:

[Property address]
[Postcode]

Council tax account number: [account number, if known]
Date of death: [date of death]

I am the [executor of the will / administrator of the estate / next of kin].

[Choose whichever applies:]

The property is now unoccupied:
I understand that the property is exempt from council tax from the date of death until probate is granted, and for six months after that. Please apply the relevant exemption and confirm this in writing.

Someone else still lives at the property:
[Name of remaining occupant] continues to live at the property. If they are now the sole adult occupant, please apply the 25% single person discount from the date of death. Please transfer the account into their name.

Please send all correspondence to my address above.

Yours faithfully,

[Your full name]`,
    tips: [
      'If you used Tell Us Once, the council will already have been notified, but it is still worth confirming the correct discount or exemption has been applied.',
      'An empty property is exempt from council tax from the date of death until probate is granted (Class F exemption).',
      'After probate is granted, the property remains exempt for a further 6 months, as long as it stays empty and has not been sold.',
      'If only one adult remains at the property, they are entitled to a 25% single person discount.',
      'Contact the council by phone if you need the exemption applied urgently.',
    ],
  },
  {
    id: 'employer',
    title: 'Notifying an employer',
    description: 'If the deceased was employed at the time of death, notify their employer.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

[Employer name]
[HR Department / Manager's name]
[Employer address]

Dear [Manager's name / Sir or Madam],

I am writing to let you know that [full name of the deceased], who was employed by you as [job title, if known], passed away on [date of death].

I am [his/her/their] [relationship, e.g. spouse / partner / son / daughter / executor].

I would be grateful if you could let me know:

- Whether any salary or holiday pay is owed up to the date of death
- Whether there is a workplace pension, and if so, the details of the scheme and any death-in-service benefit
- Whether there was any life insurance or death-in-service cover provided through the employment
- If there are any personal belongings at the workplace that need to be collected

Please could you also ensure that payroll is updated and no further payments are made to [full name of the deceased].

Please send all correspondence to my address above.

Yours faithfully,

[Your full name]`,
    tips: [
      'Many employers offer death-in-service benefits (typically 2 to 4 times annual salary), so always ask.',
      'Workplace pensions may include a lump sum death benefit. Contact the pension scheme administrator directly if needed.',
      'The employer may also need to issue a P45 to HMRC.',
      'If the deceased was a member of a trade union, the union may also offer a death benefit.',
      'Ask a friend or family member to make the initial phone call if you find it too difficult.',
    ],
  },
  {
    id: 'subscriptions',
    title: 'Cancelling subscriptions and memberships',
    description: 'A general letter you can adapt for any subscription, membership, or regular payment.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

[Company / Organisation name]
[Address]

Dear Sir or Madam,

I am writing to notify you that [full name of the deceased], a [member / subscriber / customer] of yours, passed away on [date of death].

Membership / Account number: [number, if known]

I am the [executor of the will / administrator of the estate / next of kin] and I would like to cancel [his/her/their] [membership / subscription / account] with immediate effect.

If any payments have been taken after the date of death, I would be grateful if you could arrange a refund to the original payment method or to the estate.

If you need any further information, please contact me at the address above.

Yours faithfully,

[Your full name]`,
    tips: [
      'Check bank and credit card statements for regular payments you might not be aware of.',
      'Common subscriptions to cancel: streaming services (Netflix, Spotify, Amazon Prime), gym memberships, magazine subscriptions, breakdown cover (AA, RAC), professional memberships.',
      'For online accounts, check email inboxes for subscription confirmation emails.',
      'You may be entitled to a pro-rata refund for any period paid for but not used.',
      'Some organisations (charities, clubs) will cancel immediately with just a phone call.',
    ],
  },
  {
    id: 'insurance',
    title: 'Notifying insurance companies',
    description: 'Use this letter for life insurance, home insurance, car insurance, travel insurance, or any other insurance policies.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

[Insurance company name]
[Claims / Bereavement Department]
[Company address]

Dear Sir or Madam,

I am writing to notify you of the death of [full name of the deceased], who held a [life insurance / home insurance / car insurance / other] policy with you.

Policy number: [policy number]
Date of death: [date of death]

I am the [executor of the will / administrator of the estate / named beneficiary / next of kin].

[For life insurance:]
I would like to make a claim under this policy. Please send me the relevant claim forms and let me know what documents you require.

[For home insurance:]
The property at [address] is now [unoccupied / still occupied by family members]. Please confirm whether the cover remains valid and advise me of any changes I need to make. I understand that some policies have a 30-day limit for unoccupied properties.

[For car insurance:]
The vehicle registered to [full name of the deceased] is [registration number]. Please cancel the policy and arrange a pro-rata refund for the remaining term.

I enclose a certified copy of the death certificate.

Please send all correspondence to my address above.

Yours faithfully,

[Your full name]

Enclosures: Certified copy of death certificate`,
    tips: [
      'Contact home insurers urgently. Many policies become void if a property is unoccupied for more than 30 days.',
      'If a life insurance policy was written in trust, it pays out directly to the beneficiary and does not form part of the estate.',
      'Check bank statements and paperwork for policies you may not know about.',
      'For car insurance, you may be entitled to a refund of unused premiums.',
      'The Association of British Insurers has a free tracing service to help find lost or forgotten policies: abi.org.uk.',
    ],
  },
  {
    id: 'dvla',
    title: 'Notifying the DVLA',
    description: 'If the deceased held a driving licence or was the registered keeper of a vehicle. Tell Us Once will notify the DVLA about the driving licence, but you still need to deal with vehicle registration separately.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

DVLA
Swansea
SA99 1AB

Dear Sir or Madam,

I am writing to notify you of the death of [full name of the deceased].

Date of death: [date of death]
Driving licence number: [licence number, if known]

Regarding the driving licence:
[If Tell Us Once was not used:] I enclose the driving licence and ask that you cancel it. If Tell Us Once was used, you should already have been notified.

Regarding the vehicle(s):
[Full name of the deceased] was the registered keeper of the following vehicle(s):

Registration number: [registration number]
Make and model: [make and model]

[Choose one:]

Option A - Transfer to a new keeper:
I would like to transfer the registration to [new keeper's full name]. I enclose the completed V5C/2 (new keeper supplement) section of the log book.

Option B - The vehicle is being sold or scrapped:
Please update your records accordingly. [If sold, I have notified the new keeper.]

Option C - The vehicle will be kept off the road:
I have declared a SORN (Statutory Off Road Notification) for this vehicle.

I enclose a certified copy of the death certificate and the V5C log book.

Yours faithfully,

[Your full name]

Enclosures: Certified copy of death certificate, V5C log book [and driving licence if applicable]`,
    tips: [
      'If you used Tell Us Once, the driving licence will be cancelled automatically. However, you still need to deal with vehicle registration separately.',
      'You can apply for a refund of any remaining full months of vehicle tax. Do this through the DVLA.',
      'If the vehicle is not being used, declare a SORN (free) to avoid needing to pay vehicle tax or have an MOT.',
      'If you are selling the vehicle, you can notify the DVLA online at gov.uk.',
      'Return the blue badge (if applicable) to the local council.',
    ],
  },
  {
    id: 'passport',
    title: 'Notifying the Passport Office',
    description: 'Cancel the passport of the deceased. Tell Us Once will handle this automatically, but you can also do it directly.',
    letter: `[Your full name]
[Your address line 1]
[Your address line 2]
[Your postcode]
[Your phone number]
[Your email address]

[Date]

HM Passport Office
PO Box 767
Southport
PR8 9PW

Dear Sir or Madam,

I am writing to notify you of the death of [full name of the deceased] and request that [his/her/their] passport be cancelled.

Full name (as shown on passport): [full name as on passport]
Date of birth: [date of birth]
Date of death: [date of death]
Passport number: [passport number]

I am the [executor of the will / administrator of the estate / next of kin].

I enclose the passport and a certified copy of the death certificate. If you are able to return the cancelled passport as a keepsake, I would appreciate that.

Yours faithfully,

[Your full name]

Enclosures: Passport, certified copy of death certificate`,
    tips: [
      'If you used Tell Us Once, the Passport Office will already have been notified and you do not need to send this letter.',
      'Cutting the corner of the passport does not officially cancel it. The Passport Office needs to update their records.',
      'You can request the cancelled passport be returned to you as a keepsake.',
      'If you cannot find the passport, still write to let them know it should be cancelled.',
      'There is no charge for cancelling a passport after someone dies.',
    ],
  },
];

function LetterBlock({ letter }: { letter: string }) {
  return (
    <div className="relative">
      <pre className="bg-white border border-border rounded-lg p-6 text-sm text-foreground leading-relaxed whitespace-pre-wrap font-sans overflow-x-auto">
        {letter}
      </pre>
    </div>
  );
}

export default function TemplateLettersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Template Letters and Scripts' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Template Letters and Scripts
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        Ready-to-use template letters for notifying organisations after someone dies. Copy the letter, fill in the details marked in [square brackets], and send by post or email. Each letter includes practical tips to help you.
      </p>
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Before you start:</strong> Make sure you have the following to hand: certified copies of the death certificate, the deceased person's full name, date of birth, and any relevant account or reference numbers. If you used the <Link href="/tell-us-once" className="font-medium underline">Tell Us Once</Link> service, some of these organisations will already have been notified.
        </p>
      </div>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-6 mb-10" aria-label="Template letters">
        <h2 className="font-semibold text-foreground mb-3">Letters in this guide</h2>
        <ul className="space-y-2">
          {TEMPLATES.map(t => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-primary hover:underline text-sm">{t.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Template letters */}
      {TEMPLATES.map((template, index) => (
        <section key={template.id} id={template.id} className="mb-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-2">{template.title}</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">{template.description}</p>

          <LetterBlock letter={template.letter} />

          {/* Tips */}
          <div className="bg-primary-light rounded-xl p-5 mt-4">
            <h3 className="font-semibold text-foreground text-sm mb-2">Practical tips</h3>
            <ul className="space-y-1.5">
              {template.tips.map((tip, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gentle support message after 4th template */}
          {index === 3 && (
            <div className="bg-warm border border-warm-border rounded-xl p-5 mt-8">
              <p className="text-sm text-amber-800 leading-relaxed">
                Writing these letters can be exhausting. You do not have to do them all at once. Take breaks when you need to, and ask a friend or family member to help if you can. If you are struggling, call Cruse Bereavement Support free on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>.
              </p>
            </div>
          )}
        </section>
      ))}

      {/* General tips section */}
      <section className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">General tips for sending notification letters</h2>
        <ul className="space-y-3">
          <li className="text-sm text-muted leading-relaxed flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
            <span><strong>Keep copies.</strong> Photograph or photocopy every letter before sending, and make a note of the date you posted it.</span>
          </li>
          <li className="text-sm text-muted leading-relaxed flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
            <span><strong>Send by recorded delivery</strong> when enclosing original documents like death certificates, passports, or log books.</span>
          </li>
          <li className="text-sm text-muted leading-relaxed flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
            <span><strong>Order enough death certificates.</strong> We recommend at least 5 certified copies. You can order more from the register office at any time (currently £12.50 each in England, £11 in Wales, £15 in Scotland).</span>
          </li>
          <li className="text-sm text-muted leading-relaxed flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
            <span><strong>Use Tell Us Once.</strong> This free government service notifies multiple departments in one go, including HMRC, DWP, DVLA, the Passport Office, and your local council. <Link href="/tell-us-once" className="text-primary hover:underline">Learn more about Tell Us Once.</Link></span>
          </li>
          <li className="text-sm text-muted leading-relaxed flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
            <span><strong>Many organisations accept email.</strong> Check the company website for a bereavement contact email. It can be faster than posting a letter.</span>
          </li>
          <li className="text-sm text-muted leading-relaxed flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
            <span><strong>Ask for help.</strong> A trusted friend, family member, solicitor, or Citizens Advice can help you with the paperwork. You do not need to do this alone.</span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need a personalised to-do list?</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a step-by-step checklist tailored to your exact situation, including which organisations to contact and when.</p>
        <Link
          href="/start"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Template Letters for Bereavement',
            description: 'Free template letters to notify banks, utilities, HMRC, council tax, employers, insurers, DVLA, and more after someone dies in the UK.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            isPartOf: {
              '@type': 'WebSite',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
          }),
        }}
      />
      <RelatedGuides currentPath="/template-letters" guides={['/phone-directory', '/call-scripts', '/guides/document-checklist', '/guide']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Template Letters', item: 'https://helpafterloss.co.uk/template-letters' },
            ],
          }),
        }}
      />
    </div>
  );
}
