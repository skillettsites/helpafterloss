import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Bereavement Call Scripts - Word-for-Word Scripts for Every Call',
  description: 'Detailed word-for-word call scripts for notifying banks, utilities, HMRC, council tax, pensions, insurance, mortgage lenders, and subscriptions after someone dies in the UK.',
  alternates: { canonical: 'https://helpafterloss.co.uk/call-scripts' },
  openGraph: {
    title: 'Bereavement Call Scripts - Exactly What to Say on Every Call',
    description: 'Word-for-word scripts for notifying banks, utilities, HMRC, council tax, pensions, insurance, and more after a death.',
    url: 'https://helpafterloss.co.uk/call-scripts',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bereavement Call Scripts - What to Say When You Call',
    description: 'Word-for-word scripts for every bereavement call. Banks, utilities, HMRC, pensions, insurance, and more.',
  },
};

interface CallScript {
  id: string;
  title: string;
  intro: string;
  docsNeeded: string[];
  script: ScriptSection[];
  ifMissing: string[];
  whatToAsk: string[];
  afterTheCall: string[];
}

interface ScriptSection {
  label: string;
  text: string;
}

const SCRIPTS: CallScript[] = [
  {
    id: 'bank',
    title: '1. Calling the bank',
    intro: 'This is often the first call people dread the most, but bank bereavement teams handle these calls every day. They are trained to be kind and patient. You will not be rushed.',
    docsNeeded: [
      'Death certificate (or reference number)',
      'Account number and sort code',
      'Your full name and relationship to the deceased',
      'Your own address and contact details',
      'Grant of Probate or Letters of Administration (if you have them, but most banks do not need these for the initial call)',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling to let you know that an account holder has passed away. I need to notify you of the death.',
      },
      {
        label: 'They will ask for the account holder\'s details',
        text: 'The account holder\'s name was [full name]. Their date of birth was [date of birth]. The account number is [number] and the sort code is [sort code]. They passed away on [date of death].',
      },
      {
        label: 'They will ask about you',
        text: 'My name is [your name]. I am the [executor of the will / administrator of the estate / next of kin / spouse / son / daughter]. My address is [your address] and my phone number is [your number].',
      },
      {
        label: 'They will ask about the death certificate',
        text: 'I have a [certified copy of the death certificate / the death certificate reference number]. The reference number is [number]. Would you like me to post a copy, or can I upload it online?',
      },
      {
        label: 'If the account was joint',
        text: 'The account was held jointly with [name of surviving holder]. I understand the account should pass to the surviving holder. Could you confirm how that works and whether there is anything we need to do?',
      },
      {
        label: 'Asking about the balance',
        text: 'Could you tell me the balance on the account as at the date of death? I need this information for the estate records.',
      },
      {
        label: 'Asking about direct debits',
        text: 'Could you also let me know what direct debits and standing orders are set up on the account? I need to decide which ones to cancel and which to keep running for now.',
      },
    ],
    ifMissing: [
      'If you do not have the account number: "I\'m sorry, I don\'t have the account number to hand. Could you look it up using their name, date of birth, and address?"',
      'If you do not have the death certificate yet: "The death certificate hasn\'t been issued yet. Can I call back once I have it, or can you start the process now and I\'ll send it later?"',
      'If you are not the executor: "I\'m not the executor, but I am the [relationship]. I wanted to let you know about the death. Could you tell me what the executor will need to do?"',
      'If they ask for Grant of Probate: "Probate hasn\'t been granted yet. Is there anything you can do at this stage? Can you freeze the account and provide a balance in the meantime?"',
    ],
    whatToAsk: [
      'What reference number has been created for this case? (Write it down.)',
      'What documents do you need from me, and where should I send them?',
      'Is there a bereavement pack you can post or email to me?',
      'How long will the process take once you have everything?',
      'Can funeral costs be paid from the account before probate is granted?',
      'Are there any other accounts in the deceased\'s name that I might not know about?',
    ],
    afterTheCall: [
      'Write down the reference number and the name of the person you spoke to.',
      'Send any documents they requested by recorded delivery.',
      'Check whether the bank offers a Death Notification Service form to notify multiple banks at once.',
      'Consider setting up a post redirect to catch any bank statements sent to the deceased\'s address.',
    ],
  },
  {
    id: 'utility',
    title: '2. Calling utility companies',
    intro: 'You will need to call each utility company separately: gas, electricity, water, broadband, phone, and TV. These calls are usually straightforward. The main decision is whether to transfer the account to someone else or close it.',
    docsNeeded: [
      'Account number (check a recent bill)',
      'Address where the service is provided',
      'Final meter readings for gas and electricity (take a photo of the meters)',
      'Name and date of birth of the deceased',
      'Your contact details',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling because the account holder at [address] has passed away. I need to let you know and arrange what happens next with the account.',
      },
      {
        label: 'They will ask for the account details',
        text: 'The account holder was [name]. The account number is [number] and the address is [full address]. They passed away on [date].',
      },
      {
        label: 'If you want to transfer the account',
        text: 'Someone else is still living at the property. I would like to transfer the account into the name of [new person\'s name]. Could you send a final bill up to the date of death, and then set up a new account from that date?',
      },
      {
        label: 'If you want to close the account',
        text: 'The property is now empty and I would like to close the account. I have a final meter reading of [reading] taken on [date]. Could you send a final bill to my address at [your address]?',
      },
      {
        label: 'About meter readings',
        text: 'I took the meter readings on [date]. The gas reading is [reading] and the electricity reading is [reading]. If you need to send someone to take a reading, that is fine too.',
      },
    ],
    ifMissing: [
      'If you do not have the account number: "I don\'t have the account number. Could you look it up using the address and the account holder\'s name? The address is [address]."',
      'If you have not taken meter readings: "I haven\'t been able to take a meter reading yet. Could you send someone to do that, or can I call back once I have the reading?"',
      'If you do not know which supplier it is: "I\'m not sure who supplies the gas/electricity. Could I check this using the meter point reference number, or is there another way to find out?" (You can also check at findmysupplier.energy for energy, or check a recent bill.)',
    ],
    whatToAsk: [
      'Is the account in credit? If so, how do I get a refund?',
      'Are there any outstanding balances?',
      'If the property will be empty, do I need to keep the supply connected? (For gas, keeping the heating on low can prevent pipes from freezing.)',
      'What is the reference number for this notification?',
    ],
    afterTheCall: [
      'Take meter readings if you have not already done so.',
      'If the property will be empty, consider whether to keep heating on at a low level.',
      'Check whether the account was in credit and follow up on any refund.',
      'Update your notebook with the date of the call and reference number.',
    ],
  },
  {
    id: 'hmrc',
    title: '3. Calling HMRC',
    intro: 'If you used Tell Us Once, HMRC will already have been notified. You only need to call HMRC directly if Tell Us Once was not available, or if you have specific questions about the deceased\'s tax affairs. HMRC bereavement calls can take a while, so try to call early in the morning.',
    docsNeeded: [
      'National Insurance number of the deceased',
      'Date of death',
      'Unique Taxpayer Reference (UTR) if they were self-employed',
      'Details of their employment or pension income',
      'Your own details as executor or next of kin',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling to report the death of [name]. I am the [executor of the will / administrator of the estate / next of kin]. Their National Insurance number was [NI number] and they passed away on [date].',
      },
      {
        label: 'They will ask about the deceased\'s circumstances',
        text: '[Name] was [employed by / self-employed as / retired from / in receipt of a pension from] [details]. [If employed:] Their employer was [employer name]. [If self-employed:] Their Unique Taxpayer Reference was [UTR].',
      },
      {
        label: 'Asking about tax owed or refunds',
        text: 'Could you tell me whether there is any income tax owed up to the date of death, or whether a refund is due? I need to include this in the estate records.',
      },
      {
        label: 'If they were self-employed',
        text: 'I understand that a final Self Assessment tax return will need to be filed. Could you tell me the deadline for this and confirm which tax year it covers? I would also like to confirm the mailing address for the return.',
      },
    ],
    ifMissing: [
      'If you do not have the National Insurance number: "I don\'t have the National Insurance number. Their full name was [name], date of birth [DOB], and last known address was [address]. Could you look it up?"',
      'If you are not sure whether they were self-employed: "I\'m not entirely sure of their employment situation. Could you check your records and let me know what you have on file?"',
      'If you do not know whether Tell Us Once was used: "I\'m not sure whether Tell Us Once was used when the death was registered. Could you check whether you have already been notified?"',
    ],
    whatToAsk: [
      'Is there any tax owed or any refund due?',
      'Do I need to file a final tax return? If so, what is the deadline?',
      'Should I cancel any payment on account for the current tax year?',
      'Will you send a statement of the deceased\'s tax position to my address?',
      'What is the reference number for this notification?',
    ],
    afterTheCall: [
      'If a final tax return is needed, note the deadline and gather the relevant records.',
      'Keep all of the deceased\'s tax documents for at least 4 years after the end of the tax year in which they died.',
      'If a refund is due, it will form part of the estate.',
      'Write down the reference number and the name of the person you spoke to.',
    ],
  },
  {
    id: 'council-tax',
    title: '4. Calling the council about council tax',
    intro: 'Your local council needs to know so they can update the council tax account. If the property is now empty, it may be exempt from council tax. If someone else is still living there, they may qualify for a single person discount. This call is usually quick and straightforward.',
    docsNeeded: [
      'Council tax account number (check a recent bill)',
      'Address of the property',
      'Name and date of death of the deceased',
      'Whether anyone else is still living at the property',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling about a council tax account. The account holder, [name], has passed away on [date]. The property address is [address] and the council tax account number is [number].',
      },
      {
        label: 'If the property is now empty',
        text: 'The property is now unoccupied. I understand it may be exempt from council tax until probate is granted, and for six months after that. Could you apply the exemption, please? The Class F exemption, I believe.',
      },
      {
        label: 'If someone else still lives there',
        text: '[Name] is still living at the property. They are now the only adult there. Could you transfer the account into their name and apply the 25% single person discount from the date of death?',
      },
      {
        label: 'Asking about a refund',
        text: 'If any council tax has been overpaid since the date of death, could you arrange a refund to the estate?',
      },
    ],
    ifMissing: [
      'If you do not have the council tax account number: "I don\'t have the account number. Could you look it up using the property address? It is [full address]."',
      'If you are not sure which council to call: "I\'m not sure which council covers [address]. Could you help me find the right one?" (You can also check at gov.uk/find-local-council.)',
    ],
    whatToAsk: [
      'Has the correct exemption or discount been applied?',
      'When will the changes take effect from?',
      'Is there a refund due for any overpayment?',
      'What is the reference number for this update?',
      'Do you need any documents from me (death certificate, Grant of Probate)?',
    ],
    afterTheCall: [
      'If Tell Us Once was used, the council should already know, but it is worth confirming the exemption or discount has been applied.',
      'If the property is empty, check whether the home insurance is still valid for an unoccupied property.',
      'Write down the reference number and any changes they confirmed.',
    ],
  },
  {
    id: 'pension',
    title: '5. Calling about a pension',
    intro: 'The deceased may have had a workplace pension, a private pension, or the State Pension. Each one needs to be contacted separately. Pension providers are used to these calls and will explain the process clearly. There may be a lump sum death benefit or an ongoing pension for a surviving spouse.',
    docsNeeded: [
      'Pension reference number or policy number',
      'National Insurance number of the deceased',
      'Date of death',
      'Death certificate',
      'Your own details and relationship to the deceased',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling to report the death of a pension holder. Their name was [name] and their pension reference number is [number]. They passed away on [date]. I am the [executor/next of kin/surviving spouse].',
      },
      {
        label: 'If you are a surviving spouse or partner',
        text: 'I am [name]\'s [husband/wife/civil partner]. I understand there may be a survivor\'s pension or a dependant\'s pension. Could you tell me what I am entitled to and what I need to do to claim it?',
      },
      {
        label: 'Asking about death benefits',
        text: 'Could you tell me whether there is a lump sum death benefit payable under this pension? And if so, who it is payable to and how much it is?',
      },
      {
        label: 'Asking about pension arrears',
        text: 'Was [name] owed any pension payments up to the date of death? If so, could those be paid to the estate?',
      },
      {
        label: 'For workplace pensions',
        text: 'I understand [name] was a member of your pension scheme through their employer, [employer name]. Could you send me the relevant claim forms and let me know what documentation you need?',
      },
    ],
    ifMissing: [
      'If you do not have the pension reference number: "I don\'t have the pension reference number. Their name was [name], date of birth [DOB], National Insurance number [NI number], and their employer was [employer name]. Could you look it up?"',
      'If you do not know which pension provider it is: "I\'m not sure which company provides the pension. It was through their employer, [employer name]. Do you have any suggestions for how I can trace it?" (You can also use the government\'s free Pension Tracing Service at gov.uk/find-pension-contact-details.)',
      'If you are not the executor: "I\'m not the executor, but I am the [surviving spouse / son / daughter]. I wanted to find out what happens next. Could you tell me what information the executor will need to provide?"',
    ],
    whatToAsk: [
      'Is there a lump sum death benefit? How much is it and who is it payable to?',
      'Is there a survivor\'s pension for the spouse or civil partner?',
      'Are there any pension payments owed up to the date of death?',
      'What claim forms do you need me to complete?',
      'What documents do you need (death certificate, Grant of Probate, marriage certificate)?',
      'How long will the claim take to process once you have everything?',
    ],
    afterTheCall: [
      'Send off the claim forms and documents as soon as possible.',
      'If you cannot find the pension details, use the free Pension Tracing Service at gov.uk/find-pension-contact-details.',
      'Check payslips and old paperwork for details of any other pensions.',
      'Write down the reference number and expected timescale.',
    ],
  },
  {
    id: 'insurance',
    title: '6. Calling about insurance',
    intro: 'If the deceased had life insurance, the payout could be significant and may help with funeral costs or other expenses. Home and car insurance also need to be updated urgently, especially if the property will be empty. Insurance companies have bereavement teams who handle these calls regularly.',
    docsNeeded: [
      'Policy number',
      'Date of death',
      'Death certificate',
      'Cause of death (for life insurance claims)',
      'Your ID and relationship to the deceased',
      'Grant of Probate (may be needed for larger claims)',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling to report the death of a policyholder and to make a claim. Their name was [name] and the policy number is [number]. They passed away on [date]. I am the [executor/named beneficiary/next of kin].',
      },
      {
        label: 'For life insurance',
        text: 'I would like to make a claim under this life insurance policy. The cause of death was [cause]. I have the death certificate. Could you tell me the value of the policy and send me the claim forms?',
      },
      {
        label: 'For home insurance',
        text: 'The property at [address] is now [unoccupied / still occupied by family members]. I need to make sure the insurance cover is still valid. I understand that some policies have a 30-day limit for unoccupied properties. Could you advise me?',
      },
      {
        label: 'For car insurance',
        text: 'I need to cancel the car insurance for [name]\'s vehicle. The registration number is [reg number]. I would like to arrange a pro-rata refund for the remaining term. The policy number is [number].',
      },
      {
        label: 'Asking about the claims process',
        text: 'Could you walk me through what happens next? What forms do I need to complete, and what documents should I send you?',
      },
    ],
    ifMissing: [
      'If you do not have the policy number: "I don\'t have the policy number. Their name was [name], date of birth [DOB], and address was [address]. Could you search for any policies in their name?"',
      'If you are not sure whether they had life insurance: "I\'m not sure whether [name] had a life insurance policy with you. Could you check your records using their name and date of birth?"',
      'If you cannot find any insurance paperwork: "I can\'t find any policy documents. Is there a way to trace whether someone had a policy with you?" (You can also use the Association of British Insurers\' free tracing service at abi.org.uk.)',
    ],
    whatToAsk: [
      'What is the value of the policy?',
      'Was the policy written in trust? (If so, it pays out directly and does not form part of the estate.)',
      'What claim forms do I need to complete?',
      'How long will the claim take to process?',
      'For home insurance: is the cover still valid if the property is unoccupied? Do I need to notify you within a certain number of days?',
      'For car insurance: am I entitled to a refund for unused months?',
    ],
    afterTheCall: [
      'For home insurance, act urgently if the property will be empty. Many policies become void after 30 days of being unoccupied.',
      'Check bank statements for premium payments to identify any other insurance policies.',
      'Send claim forms and documents promptly to avoid delays.',
      'Write down the claim reference number and expected timescale.',
    ],
  },
  {
    id: 'mortgage',
    title: '7. Calling the mortgage company',
    intro: 'If the deceased had a mortgage, the lender needs to know. Do not worry: they will not demand immediate repayment. Mortgage lenders have bereavement processes and will work with you. If there was mortgage protection insurance or life insurance, the mortgage may be paid off entirely.',
    docsNeeded: [
      'Mortgage account number',
      'Property address',
      'Death certificate',
      'Details of any mortgage protection insurance or life insurance',
      'Your details as executor or next of kin',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling to let you know that a mortgage holder has passed away. Their name was [name] and the mortgage account number is [number]. The property address is [address]. They passed away on [date]. I am the [executor/surviving joint owner/next of kin].',
      },
      {
        label: 'If the mortgage was joint',
        text: 'The mortgage was held jointly with [surviving person\'s name], who is still living at the property. Could you confirm that the mortgage continues as normal and advise me of any steps I need to take?',
      },
      {
        label: 'If the mortgage was in the deceased\'s name only',
        text: 'The mortgage was in [name]\'s name only. I understand the monthly payments need to continue. Could you tell me the current monthly payment amount and the outstanding balance? I would like to know what options are available.',
      },
      {
        label: 'Asking about mortgage protection insurance',
        text: 'Do you have any record of mortgage protection insurance or life insurance linked to this mortgage? If so, could you start the claims process?',
      },
      {
        label: 'If you need time',
        text: 'I am still sorting out the estate and may need some time before decisions are made about the property. Could you give me a reasonable period to work things out? I want to make sure the payments keep running in the meantime.',
      },
    ],
    ifMissing: [
      'If you do not have the mortgage account number: "I don\'t have the account number. The property address is [address] and the mortgage was in the name of [name]. Could you look it up?"',
      'If you are not sure who the mortgage lender is: "I\'m not sure who holds the mortgage. Is there a way to find out?" (Check the Land Registry for the mortgage lender, or look at recent bank statements for direct debit payments.)',
      'If you cannot keep up with the payments: "I\'m worried about keeping up with the mortgage payments while the estate is being sorted out. Could you tell me what options are available? I don\'t want to fall into arrears."',
    ],
    whatToAsk: [
      'What is the current outstanding balance?',
      'What is the monthly payment amount and when is it due?',
      'Is there any mortgage protection insurance or life insurance linked to this mortgage?',
      'If the property needs to be sold, what is the process?',
      'Can you give me a reasonable period to sort things out before any action is taken?',
      'What is the reference number for this case?',
    ],
    afterTheCall: [
      'Make sure mortgage payments continue to avoid arrears. If the direct debit was from the deceased\'s account, arrange an alternative.',
      'If there is mortgage protection insurance, submit the claim as soon as possible.',
      'If the property is to be sold, get a valuation and speak to a solicitor.',
      'Write down the reference number, outstanding balance, and monthly payment amount.',
    ],
  },
  {
    id: 'subscriptions',
    title: '8. Calling about subscriptions',
    intro: 'This covers gyms, streaming services, magazines, breakdown cover, and any other regular payments. These calls are usually the quickest and easiest on the list. Most companies will cancel immediately once you explain the situation. You do not usually need to provide a death certificate.',
    docsNeeded: [
      'Account holder\'s name',
      'Account number or email address linked to the subscription',
      'Date of death',
      'Your name and relationship to the deceased',
    ],
    script: [
      {
        label: 'When they answer',
        text: 'Hello, I am calling to cancel a subscription. The account holder, [name], has passed away on [date]. I am their [relationship]. The account number is [number] or the email on the account is [email].',
      },
      {
        label: 'If they ask for a death certificate',
        text: 'I have the death certificate if you need it. Would you like me to email a scan, or post a copy? Most organisations do not require this for straightforward cancellations.',
      },
      {
        label: 'Asking about refunds',
        text: 'If any payments have been taken since [date of death], could you arrange a refund? They would have been taken from [bank/card details if known].',
      },
      {
        label: 'If the subscription was annual',
        text: 'The subscription was paid annually. Is a pro-rata refund available for the unused portion?',
      },
    ],
    ifMissing: [
      'If you do not know the account details: "I don\'t have the account number. The subscription was in the name of [name] and the email address they used might have been [email]. Their address was [address]."',
      'If you are not sure what subscriptions they had: Check bank and credit card statements for regular payments. Look in their email inbox for subscription confirmation emails.',
      'If the subscription is online-only and you do not have their login: "I can\'t access their online account. Is there a way to cancel without logging in? I can provide proof of death if needed."',
    ],
    whatToAsk: [
      'Has the subscription been cancelled with immediate effect?',
      'Are there any refunds due?',
      'Were there any other accounts or subscriptions in this name?',
      'Can you confirm the cancellation in writing or by email?',
    ],
    afterTheCall: [
      'Check bank and credit card statements in a month to make sure the payments have actually stopped.',
      'Common subscriptions to check: Netflix, Spotify, Amazon Prime, Apple, gym, AA/RAC, insurance, magazines, newspapers, meal kit deliveries, software subscriptions.',
      'For online accounts (Netflix, Spotify, etc.), you may be able to cancel through the website or app if you have access to their email.',
      'Write down what you cancelled and the date.',
    ],
  },
];

export default function CallScriptsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Call Scripts' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Call Scripts: Exactly What to Say
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        Word-for-word scripts for every type of bereavement call. We know these calls feel daunting. Having the words in front of you makes them much easier.
      </p>
      <p className="text-sm text-muted leading-relaxed mb-8">
        You can read these scripts out loud during the call. Nobody will mind. The person on the other end of the line handles bereavement calls regularly and will be patient with you. Take your time.
      </p>

      {/* Reassurance box */}
      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-amber-900 mb-3">It is okay to feel nervous about these calls</h2>
        <ul className="space-y-2.5">
          {[
            'You do not have to have all the answers. If they ask something you do not know, just say so. They will tell you what they need.',
            'It is perfectly fine to read from a script. Many people do.',
            'If you get upset during the call, take a moment. The person will wait.',
            'You can hang up and call back another day if it gets too much.',
            'You can ask a trusted friend or family member to make the call for you.',
            'Most bereavement lines have shorter wait times than normal customer service lines.',
          ].map((tip, i) => (
            <li key={i} className="text-sm text-amber-800 leading-relaxed flex gap-2">
              <span className="mt-0.5 shrink-0">&#8226;</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-6 mb-10" aria-label="Call scripts">
        <h2 className="font-semibold text-foreground mb-3">Scripts in this guide</h2>
        <ul className="space-y-2">
          {SCRIPTS.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-primary hover:underline text-sm">{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Scripts */}
      {SCRIPTS.map((script, index) => (
        <section key={script.id} id={script.id} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-2">{script.title}</h2>
          <p className="text-sm text-muted leading-relaxed mb-5">{script.intro}</p>

          {/* Documents needed */}
          <div className="bg-card rounded-xl border border-border p-5 mb-5">
            <h3 className="font-semibold text-foreground text-sm mb-2">Have ready before you call</h3>
            <ul className="space-y-1.5">
              {script.docsNeeded.map((doc, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The script itself */}
          <div className="space-y-3 mb-5">
            {script.script.map((section, i) => (
              <div key={i} className="bg-primary-light rounded-xl p-5">
                <p className="text-xs font-semibold text-primary-dark mb-2">{section.label}</p>
                <p className="text-sm text-foreground leading-relaxed italic">&ldquo;{section.text}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* If you don't have what they ask for */}
          <div className="bg-card rounded-xl border border-border p-5 mb-5">
            <h3 className="font-semibold text-foreground text-sm mb-3">If they ask for something you do not have</h3>
            <ul className="space-y-2.5">
              {script.ifMissing.map((item, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to ask them */}
          <div className="bg-card rounded-xl border border-border p-5 mb-5">
            <h3 className="font-semibold text-foreground text-sm mb-3">Questions to ask before you hang up</h3>
            <ul className="space-y-1.5">
              {script.whatToAsk.map((item, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After the call */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground text-sm mb-3">After the call</h3>
            <ul className="space-y-1.5">
              {script.afterTheCall.map((item, i) => (
                <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-success mt-0.5 shrink-0">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support message after scripts 3 and 6 */}
          {(index === 2 || index === 5) && (
            <div className="bg-warm border border-warm-border rounded-xl p-5 mt-6">
              <p className="text-sm text-amber-800 leading-relaxed">
                You are doing really well. These calls take courage, and every one you make is one less to worry about. If you need to take a break, do. If you need someone to talk to, call Cruse Bereavement Support free on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>.
              </p>
            </div>
          )}
        </section>
      ))}

      {/* Cross-reference to phone directory */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="text-xl font-bold text-foreground mb-3">Need the phone numbers?</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Our phone directory has every bereavement phone number you might need, with clickable numbers you can call straight from your phone.
        </p>
        <Link
          href="/phone-directory"
          className="inline-block px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          View Phone Directory
        </Link>
      </div>

      {/* Prefer to write? */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="text-xl font-bold text-foreground mb-3">Prefer to write instead of calling?</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          If you find phone calls too difficult, we also have ready-to-use template letters you can copy, fill in the blanks, and post.
        </p>
        <Link
          href="/template-letters"
          className="inline-block px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          View Template Letters
        </Link>
      </div>

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need a personalised to-do list?</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a step-by-step checklist tailored to your exact situation, telling you who to call and when.</p>
        <Link
          href="/start"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/call-scripts" guides={['/phone-directory', '/template-letters', '/guide', '/support']} />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Make Bereavement Phone Calls After Someone Dies',
            description: 'Word-for-word call scripts for notifying banks, utilities, HMRC, council tax, pensions, insurance, mortgage lenders, and subscriptions after a death in the UK.',
            datePublished: '2026-03-14',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            step: SCRIPTS.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title.replace(/^\d+\.\s*/, ''),
              text: s.intro,
            })),
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Call Scripts', item: 'https://helpafterloss.co.uk/call-scripts' },
            ],
          }),
        }}
      />
    </div>
  );
}
