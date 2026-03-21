import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Bereavement Phone Directory - Every Number You Need When Someone Dies',
  description: 'Complete UK phone directory for bereavement: banks, government, utilities, insurance, pensions, and more. Real phone numbers with call scripts and what to have ready before you ring.',
  alternates: { canonical: 'https://helpafterloss.co.uk/phone-directory' },
  openGraph: {
    title: 'Bereavement Phone Directory - Every Number You Need',
    description: 'Complete UK phone directory for bereavement. Real bereavement department numbers with call scripts and tips.',
    url: 'https://helpafterloss.co.uk/phone-directory',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Bereavement Phone Directory - Every Number You Need',
    description: 'Banks, government, utilities, insurance, pensions. Every bereavement phone number in one place.',
  },
};

interface PhoneEntry {
  name: string;
  phone?: string;
  phoneDisplay?: string;
  email?: string;
  note?: string;
  hours?: string;
  script: string;
  docsNeeded: string[];
}

interface PhoneCategory {
  id: string;
  title: string;
  icon: string;
  entries: PhoneEntry[];
}

const CATEGORIES: PhoneCategory[] = [
  {
    id: 'banks',
    title: 'Banks and Building Societies',
    icon: '🏦',
    entries: [
      {
        name: 'Barclays Bereavement',
        phone: '08001510023',
        phoneDisplay: '0800 151 0023',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 9am to 5pm.',
        script: 'Hello, I am calling to notify you of the death of an account holder. Their name was [name] and they passed away on [date]. Their account number is [number]. I have the death certificate reference number if you need it.',
        docsNeeded: ['Death certificate or reference number', 'Account number and sort code', 'Your relationship to the deceased', 'Your own ID (name, address, date of birth)'],
      },
      {
        name: 'HSBC Bereavement',
        phone: '08000921406',
        phoneDisplay: '0800 092 1406',
        hours: 'Mon to Fri, 8am to 6pm. Sat, 9am to 1pm.',
        script: 'Hello, I am calling to report the death of an account holder. Their name was [name] and the date of death was [date]. I am their [relationship]. Could you tell me what I need to do next?',
        docsNeeded: ['Death certificate', 'Account number or sort code', 'Your ID and proof of relationship', 'Grant of Probate (if available)'],
      },
      {
        name: 'Lloyds Bereavement',
        phone: '03453021044',
        phoneDisplay: '0345 302 1044',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 9am to 2pm.',
        script: 'Hello, I need to report a death. The account holder was [name] and they passed away on [date]. Their account number is [number]. I am their [relationship].',
        docsNeeded: ['Death certificate', 'Account details', 'Your ID', 'Grant of Probate or Letters of Administration (may not be needed for small amounts)'],
      },
      {
        name: 'NatWest Bereavement',
        phone: '08000850960',
        phoneDisplay: '0800 085 0960',
        hours: 'Mon to Fri, 8am to 8pm. Sat and Sun, 9am to 4pm.',
        script: 'Hello, I am calling to let you know that an account holder has passed away. Their name was [name] and the date of death was [date]. I am the [executor/next of kin]. Could you walk me through what happens next?',
        docsNeeded: ['Death certificate', 'Account number', 'Your ID', 'Will or Grant of Probate (if available)'],
      },
      {
        name: 'Santander Bereavement',
        phone: '08000858375',
        phoneDisplay: '0800 085 8375',
        hours: 'Mon to Fri, 9am to 5pm.',
        script: 'Hello, I am notifying you of the death of an account holder. Their name was [name], date of death [date], and their account number is [number].',
        docsNeeded: ['Death certificate', 'Account details', 'Your ID and relationship to the deceased'],
      },
      {
        name: 'Nationwide Bereavement',
        phone: '08004643139',
        phoneDisplay: '0800 464 3139',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 9am to 1pm.',
        script: 'Hello, I need to report the death of an account holder. Their name was [name] and they passed away on [date]. I am their [relationship].',
        docsNeeded: ['Death certificate', 'Membership or account number', 'Your ID'],
      },
      {
        name: 'Halifax Bereavement',
        phone: '03453021044',
        phoneDisplay: '0345 302 1044',
        note: 'Same line as Lloyds (part of the same group).',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 9am to 2pm.',
        script: 'Hello, I am calling to report the death of an account holder at Halifax. Their name was [name] and the date of death was [date]. Their account number is [number].',
        docsNeeded: ['Death certificate', 'Account details', 'Your ID'],
      },
      {
        name: 'TSB Bereavement',
        phone: '03459758758',
        phoneDisplay: '0345 975 8758',
        hours: 'Mon to Fri, 9am to 5pm.',
        script: 'Hello, I need to notify you of a bereavement. The account holder was [name] and they passed away on [date]. I am the [executor/next of kin].',
        docsNeeded: ['Death certificate', 'Account number', 'Your ID'],
      },
      {
        name: 'Co-operative Bank',
        phone: '03457212212',
        phoneDisplay: '0345 721 2212',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 9am to 5pm.',
        script: 'Hello, I am calling because an account holder has died. Their name was [name] and the date of death was [date]. Could you tell me what I need to do?',
        docsNeeded: ['Death certificate', 'Account details', 'Your ID and relationship'],
      },
      {
        name: 'Monzo',
        email: 'bereavement@monzo.com',
        note: 'No bereavement phone line. Contact through the app (if you have access) or email bereavement@monzo.com.',
        hours: 'Email responses typically within 2 working days.',
        script: 'Not applicable (email only). Include the account holder\'s name, date of death, your name, your relationship to them, and a photo or scan of the death certificate.',
        docsNeeded: ['Death certificate (scan or photo)', 'Account holder\'s name and date of birth', 'Your name and relationship'],
      },
      {
        name: 'Starling Bank',
        phone: '02079304450',
        phoneDisplay: '0207 930 4450',
        hours: 'Mon to Fri, 9:30am to 5pm.',
        script: 'Hello, I am calling to report the death of an account holder. Their name was [name] and they passed away on [date]. I am their [relationship].',
        docsNeeded: ['Death certificate', 'Account holder\'s details', 'Your ID'],
      },
      {
        name: 'Virgin Money Bereavement',
        phone: '08001217365',
        phoneDisplay: '0800 121 7365',
        hours: 'Mon to Fri, 9am to 5pm.',
        script: 'Hello, I am calling to notify you of the death of an account holder. Their name was [name], date of death [date], account number [number].',
        docsNeeded: ['Death certificate', 'Account details', 'Your ID'],
      },
    ],
  },
  {
    id: 'government',
    title: 'Government',
    icon: '🏛️',
    entries: [
      {
        name: 'Tell Us Once',
        phone: '08000857308',
        phoneDisplay: '0800 085 7308',
        note: 'Notifies multiple government departments in one go. You will need the reference number given to you by the registrar.',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 9am to 4pm.',
        script: 'Hello, I would like to use the Tell Us Once service to report a death. My reference number is [reference from registrar]. The person who died was [name] and they passed away on [date].',
        docsNeeded: ['Tell Us Once reference number (from the registrar)', 'National Insurance number of the deceased', 'Driving licence and passport numbers (if known)', 'Details of benefits they were receiving'],
      },
      {
        name: 'Register a Death (local registrar)',
        note: 'You register a death at your local register office. Find yours at gov.uk/register-offices.',
        hours: 'Varies by area. Most offices are Mon to Fri, 9am to 4pm. Some offer Saturday appointments.',
        script: 'Hello, I need to register a death. The person who died was [name] and they passed away on [date] at [location]. I am their [relationship]. Could I book an appointment, please?',
        docsNeeded: ['Medical Certificate of Cause of Death (from the doctor or hospital)', 'NHS medical card of the deceased (if available)', 'Birth and marriage certificates (if available)', 'Your own ID'],
      },
      {
        name: 'HMRC Bereavement',
        phone: '03002003300',
        phoneDisplay: '0300 200 3300',
        note: 'If you used Tell Us Once, HMRC will already know. Only call if you did not use Tell Us Once, or if you have specific tax queries.',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am calling about someone who has died. Their name was [name] and their National Insurance number was [NI number]. The date of death was [date]. I am the [executor/next of kin]. Could you tell me if there is any tax owed or any refund due?',
        docsNeeded: ['National Insurance number', 'Date of death', 'Unique Taxpayer Reference (if self-employed)', 'Your own details as executor or next of kin'],
      },
      {
        name: 'DWP Bereavement',
        phone: '08007310469',
        phoneDisplay: '0800 731 0469',
        note: 'Report the death and ask about Bereavement Support Payment (if the deceased\'s spouse/civil partner is under State Pension age).',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am calling to report the death of [name] who was receiving [benefit name]. Their National Insurance number was [NI number]. The date of death was [date]. I would also like to ask about Bereavement Support Payment.',
        docsNeeded: ['National Insurance number of the deceased', 'Date of death', 'Details of any benefits being received', 'Your National Insurance number (if claiming Bereavement Support Payment)'],
      },
      {
        name: 'DVLA',
        phone: '03007906801',
        phoneDisplay: '0300 790 6801',
        note: 'Tell Us Once cancels the driving licence, but you still need to deal with vehicle registration separately.',
        hours: 'Mon to Fri, 8am to 7pm. Sat, 8am to 2pm.',
        script: 'Hello, I need to report the death of a registered vehicle keeper. Their name was [name] and the vehicle registration is [reg number]. I would like to [transfer/SORN/sell] the vehicle.',
        docsNeeded: ['V5C log book (vehicle registration document)', 'Death certificate', 'Driving licence number (if cancelling the licence)'],
      },
      {
        name: 'Passport Office',
        phone: '03002220000',
        phoneDisplay: '0300 222 0000',
        note: 'Tell Us Once will cancel the passport. Only call if Tell Us Once was not used.',
        hours: 'Mon to Fri, 8am to 8pm. Sat and Sun, 9am to 5:30pm.',
        script: 'Hello, I need to cancel the passport of someone who has died. Their name was [name], passport number [number], and the date of death was [date].',
        docsNeeded: ['Passport number', 'Date of death', 'Death certificate'],
      },
      {
        name: 'Veterans UK',
        phone: '08081914218',
        phoneDisplay: '0808 191 4218',
        note: 'For Armed Forces pensions and compensation. Free to call.',
        hours: 'Mon to Thu, 7:30am to 6:30pm. Fri, 7:30am to 5pm.',
        script: 'Hello, I am calling to report the death of a veteran. Their name was [name] and their service number was [number]. They passed away on [date]. I would like to ask about any pension or benefits due to the estate or surviving family.',
        docsNeeded: ['Service number', 'Date of death', 'Death certificate', 'Your relationship to the deceased'],
      },
    ],
  },
  {
    id: 'utilities',
    title: 'Utility Companies',
    icon: '💡',
    entries: [
      {
        name: 'British Gas',
        phone: '03332029802',
        phoneDisplay: '0333 202 9802',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 8am to 6pm.',
        script: 'Hello, I am calling to let you know that the account holder at [address] has died. Their name was [name] and the date of death was [date]. The account number is [number]. I would like to [transfer the account to a new name / close the account and get a final bill].',
        docsNeeded: ['Account number', 'Address where the supply is provided', 'Final meter readings (if possible)', 'Your details for the new account or final bill'],
      },
      {
        name: 'EDF Energy',
        phone: '03332005100',
        phoneDisplay: '0333 200 5100',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am reporting the death of an account holder. Their name was [name] and the account is at [address]. The date of death was [date]. I have meter readings if you need them.',
        docsNeeded: ['Account number', 'Property address', 'Meter readings', 'Your contact details'],
      },
      {
        name: 'E.ON',
        phone: '03450520000',
        phoneDisplay: '0345 052 0000',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 8am to 4pm.',
        script: 'Hello, I need to report that the account holder at [address] has passed away. Their name was [name] and the date of death was [date]. Could you help me with next steps for the account?',
        docsNeeded: ['Account number', 'Property address', 'Meter readings'],
      },
      {
        name: 'Scottish Power',
        phone: '08000270072',
        phoneDisplay: '0800 027 0072',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am calling because the account holder has died. Their name was [name], the account is at [address], and the date of death was [date].',
        docsNeeded: ['Account number', 'Property address', 'Meter readings'],
      },
      {
        name: 'Octopus Energy',
        phone: '08081641088',
        phoneDisplay: '0808 164 1088',
        hours: 'Mon to Fri, 9am to 5pm.',
        script: 'Hello, I am contacting you about the account at [address]. The account holder, [name], has passed away on [date]. I would like to arrange to [transfer/close] the account.',
        docsNeeded: ['Account number', 'Property address', 'Meter readings'],
      },
      {
        name: 'BT',
        phone: '08008001500',
        phoneDisplay: '0800 800 150',
        note: 'For landline, broadband, and BT TV.',
        hours: 'Mon to Fri, 8am to 9pm. Sat, 8am to 8pm. Sun, 9am to 6pm.',
        script: 'Hello, I need to report the death of an account holder. Their name was [name] and the account is at [address]. The date of death was [date]. I would like to [transfer/cancel] the account.',
        docsNeeded: ['Account number', 'Property address', 'Death certificate (may be requested)'],
      },
      {
        name: 'Sky',
        phone: '03337591018',
        phoneDisplay: '0333 759 1018',
        hours: 'Mon to Sun, 8am to 9pm.',
        script: 'Hello, I am calling because a Sky customer has died. Their name was [name] and the account is at [address]. I need to [cancel/transfer] the subscription.',
        docsNeeded: ['Account number or postcode', 'Account holder\'s name', 'Date of death'],
      },
      {
        name: 'Virgin Media',
        phone: '03454541111',
        phoneDisplay: '0345 454 1111',
        hours: 'Mon to Fri, 8am to 9pm. Sat, 8am to 8pm. Sun, 9am to 6pm.',
        script: 'Hello, I need to report the death of a customer. Their name was [name] and the account is at [address]. The date of death was [date]. I would like to cancel the account.',
        docsNeeded: ['Account number', 'Property address', 'Death certificate (may be requested)'],
      },
      {
        name: 'Thames Water',
        phone: '08009808800',
        phoneDisplay: '0800 980 8800',
        note: 'Your water company will vary by area. Check your bill for the right number.',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 8am to 1pm.',
        script: 'Hello, I need to let you know that the account holder at [address] has died. Their name was [name] and the date of death was [date]. Could you transfer the account or send a final bill?',
        docsNeeded: ['Account number', 'Property address', 'Meter reading (if metered)'],
      },
      {
        name: 'United Utilities',
        phone: '03456723723',
        phoneDisplay: '0345 672 3723',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am reporting the death of the account holder at [address]. Their name was [name] and they passed away on [date].',
        docsNeeded: ['Account number', 'Property address'],
      },
    ],
  },
  {
    id: 'insurance-pensions',
    title: 'Insurance and Pensions',
    icon: '📋',
    entries: [
      {
        name: 'Aviva',
        phone: '08000686800',
        phoneDisplay: '0800 068 6800',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am calling about the death of a policyholder. Their name was [name] and the policy number is [number]. The date of death was [date]. I am the [beneficiary/executor]. Could you tell me how to make a claim?',
        docsNeeded: ['Policy number', 'Death certificate', 'Cause of death (for life insurance claims)', 'Your ID and proof of relationship'],
      },
      {
        name: 'Legal and General',
        phone: '03700500955',
        phoneDisplay: '0370 050 0955',
        hours: 'Mon to Fri, 9am to 5pm.',
        script: 'Hello, I need to report the death of a policyholder. Their name was [name], policy number [number], and the date of death was [date]. I would like to start a claim.',
        docsNeeded: ['Policy number', 'Death certificate', 'Grant of Probate (if required)', 'Your ID'],
      },
      {
        name: 'Prudential',
        phone: '',
        phoneDisplay: 'See website',
        hours: 'Mon to Fri, 8:30am to 6pm.',
        script: 'Hello, I am reporting the death of [name] who held a policy with you. The policy number is [number] and the date of death was [date]. I am the [executor/beneficiary].',
        docsNeeded: ['Policy number', 'Death certificate', 'Your ID'],
      },
      {
        name: 'Royal London',
        phone: '03456050960',
        phoneDisplay: '0345 605 0960',
        hours: 'Mon to Fri, 8:30am to 5:30pm.',
        script: 'Hello, I need to report a death and make a claim. The policyholder was [name], policy number [number], date of death [date]. I am the [executor/beneficiary].',
        docsNeeded: ['Policy number', 'Death certificate', 'Your ID and relationship'],
      },
      {
        name: 'Standard Life',
        phone: '03452785476',
        phoneDisplay: '0345 278 5476',
        hours: 'Mon to Fri, 9am to 5pm.',
        script: 'Hello, I am calling to report the death of [name] who had a pension or policy with you. The reference number is [number]. They passed away on [date].',
        docsNeeded: ['Policy or pension reference number', 'Death certificate', 'Your ID'],
      },
      {
        name: 'Scottish Widows',
        phone: '03457697600',
        phoneDisplay: '0345 769 7600',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am notifying you of the death of a customer. Their name was [name] and the policy number is [number]. The date of death was [date]. Could you tell me how to proceed with a claim?',
        docsNeeded: ['Policy number', 'Death certificate', 'Your details'],
      },
      {
        name: 'State Pension',
        phone: '08007310469',
        phoneDisplay: '0800 731 0469',
        note: 'Same number as DWP Bereavement. If you used Tell Us Once, the State Pension will already be stopped.',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I am calling to report the death of a State Pension recipient. Their name was [name] and their National Insurance number was [NI number]. The date of death was [date]. I would also like to ask about any arrears or Bereavement Support Payment.',
        docsNeeded: ['National Insurance number', 'Date of death', 'Your National Insurance number (if a surviving spouse/civil partner)'],
      },
    ],
  },
  {
    id: 'other',
    title: 'Other Important Numbers',
    icon: '📞',
    entries: [
      {
        name: 'Royal Mail Post Redirect',
        phone: '03457740740',
        phoneDisplay: '0345 774 0740',
        note: 'Redirect the deceased person\'s post to your address to catch bills, letters, and financial correspondence you may not know about.',
        hours: 'Mon to Fri, 8am to 6pm. Sat, 8am to 1pm.',
        script: 'Hello, I need to set up a post redirect from [deceased\'s address] to [your address] following a bereavement. The person who died was [name].',
        docsNeeded: ['Death certificate', 'Your ID', 'The deceased\'s full address', 'Payment (from around £35 for 3 months)'],
      },
      {
        name: 'Land Registry',
        phone: '03000060411',
        phoneDisplay: '0300 006 0411',
        note: 'To update property ownership records after probate.',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I need to update the ownership records for a property following a death. The property address is [address] and the title number is [title number, if known]. The registered owner was [name] and they passed away on [date].',
        docsNeeded: ['Property title number (check title deeds)', 'Grant of Probate or Letters of Administration', 'Death certificate', 'Completed form (usually AP1 and AS1 or AS3)'],
      },
      {
        name: 'NS&I (Premium Bonds)',
        phone: '08005000000',
        phoneDisplay: '0800 500 000',
        hours: 'Mon to Fri, 8am to 8pm. Sat, 8am to 6pm.',
        script: 'Hello, I am calling to report the death of a Premium Bonds holder. Their name was [name] and their holder\'s number is [number]. The date of death was [date]. I am the [executor/next of kin].',
        docsNeeded: ['Holder\'s number (on bond certificates or annual statements)', 'Death certificate', 'Grant of Probate (for values over the small estates limit)'],
      },
      {
        name: 'Student Loans Company',
        phone: '03001000611',
        phoneDisplay: '0300 100 0611',
        hours: 'Mon to Fri, 8am to 8pm.',
        script: 'Hello, I am reporting the death of a student loan borrower. Their name was [name] and their Customer Reference Number is [number]. They passed away on [date].',
        docsNeeded: ['Customer Reference Number', 'Death certificate', 'Your relationship to the deceased'],
      },
      {
        name: 'TV Licensing',
        phone: '03007906165',
        phoneDisplay: '0300 790 6165',
        hours: 'Mon to Fri, 8am to 6:30pm.',
        script: 'Hello, I need to cancel a TV licence due to a bereavement. The licence was at [address] in the name of [name]. The date of death was [date]. I would also like to request a refund for any remaining full months.',
        docsNeeded: ['TV licence number (if known)', 'Address', 'Date of death'],
      },
      {
        name: 'Electoral Register',
        note: 'Contact your local council. If you used Tell Us Once, this should be done automatically.',
        hours: 'Mon to Fri, 9am to 5pm (council offices).',
        script: 'Hello, I need to remove someone from the electoral register following a death. Their name was [name] and they lived at [address]. The date of death was [date].',
        docsNeeded: ['Name and address of the deceased', 'Date of death'],
      },
    ],
  },
  {
    id: 'credit-agencies',
    title: 'Credit Reference Agencies',
    icon: '📊',
    entries: [
      {
        name: 'Experian',
        phone: '03444810800',
        phoneDisplay: '0344 481 0800',
        note: 'Register a deceased marker to prevent identity fraud.',
        hours: 'Mon to Fri, 8am to 7pm. Sat, 9am to 5pm.',
        script: 'Hello, I would like to register a deceased marker on someone\'s credit file to prevent identity fraud. Their name was [name], date of birth [DOB], and date of death [date]. Their last address was [address].',
        docsNeeded: ['Full name of the deceased', 'Date of birth and date of death', 'Last known address', 'Death certificate (may be requested)'],
      },
      {
        name: 'Equifax',
        phone: '03333214043',
        phoneDisplay: '0333 321 4043',
        note: 'Register a deceased marker to prevent identity fraud.',
        hours: 'Mon to Fri, 8am to 6pm.',
        script: 'Hello, I need to add a deceased marker to a credit file. The person was [name], date of birth [DOB], date of death [date], last address [address].',
        docsNeeded: ['Full name of the deceased', 'Date of birth and date of death', 'Last known address'],
      },
      {
        name: 'TransUnion',
        phone: '03300247574',
        phoneDisplay: '0330 024 7574',
        note: 'Register a deceased marker to prevent identity fraud.',
        hours: 'Mon to Fri, 9am to 5:30pm.',
        script: 'Hello, I would like to add a deceased marker to prevent fraud. The person was [name], born [DOB], died [date], last address [address].',
        docsNeeded: ['Full name of the deceased', 'Date of birth and date of death', 'Last known address'],
      },
    ],
  },
];

export default function PhoneDirectoryPage() {
  const allEntries = CATEGORIES.reduce((acc, cat) => acc + cat.entries.length, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Phone Directory' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Phone Directory: Every Number You Need
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        {allEntries} phone numbers in one place, organised by category. Each entry includes the number to call, what to say, and what documents to have ready. All numbers have been verified as bereavement or general contact lines.
      </p>
      <p className="text-sm text-muted mb-8">
        Most of these numbers are free to call from landlines and mobiles. Numbers starting with 0345 and 0333 are charged at the same rate as a standard local call and are usually included in your phone plan.
      </p>

      {/* Tips before you start */}
      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-amber-900 mb-3">Before you start making calls</h2>
        <ul className="space-y-2.5">
          {[
            'Have these ready: death certificate (or reference number), the deceased\'s account numbers, your own ID, and your relationship to the deceased.',
            'Calls tend to be quicker earlier in the morning. Try ringing between 8am and 10am if you can.',
            'Bereavement teams are specially trained and understand this is difficult. They will be patient with you.',
            'You can ask someone else to call on your behalf. Most organisations will accept this with a letter of authority.',
            'Keep a notebook by the phone. Write down who you called, the date, the name of the person you spoke to, and any reference numbers they give you.',
            'You do not have to make all these calls in one day. Spread them out and take breaks when you need to.',
          ].map((tip, i) => (
            <li key={i} className="text-sm text-amber-800 leading-relaxed flex gap-2">
              <span className="mt-0.5 shrink-0">&#8226;</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Table of contents */}
      <nav className="bg-card rounded-xl border border-border p-6 mb-10" aria-label="Phone directory categories">
        <h2 className="font-semibold text-foreground mb-3">Jump to a section</h2>
        <ul className="space-y-2">
          {CATEGORIES.map(cat => (
            <li key={cat.id}>
              <a href={`#${cat.id}`} className="text-primary hover:underline text-sm">
                {cat.icon} {cat.title} ({cat.entries.length} numbers)
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Categories */}
      {CATEGORIES.map((category, catIndex) => (
        <section key={category.id} id={category.id} className="mb-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">{category.icon}</span>
            {category.title}
          </h2>

          <div className="space-y-4">
            {category.entries.map((entry, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{entry.name}</h3>
                  {entry.phone ? (
                    <a
                      href={`tel:${entry.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {entry.phoneDisplay}
                    </a>
                  ) : entry.email ? (
                    <a
                      href={`mailto:${entry.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shrink-0"
                    >
                      {entry.email}
                    </a>
                  ) : null}
                </div>

                {entry.note && (
                  <p className="text-sm text-muted leading-relaxed mb-3">{entry.note}</p>
                )}

                {entry.hours && (
                  <p className="text-xs text-muted mb-3">
                    <span className="font-medium text-foreground">Hours:</span> {entry.hours}
                  </p>
                )}

                {/* What to say */}
                <div className="bg-primary-light rounded-lg p-4 mb-3">
                  <p className="text-xs font-semibold text-primary-dark mb-1.5">What to say when they answer</p>
                  <p className="text-sm text-foreground leading-relaxed italic">&ldquo;{entry.script}&rdquo;</p>
                </div>

                {/* Documents needed */}
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1.5">Have ready before you call</p>
                  <ul className="space-y-1">
                    {entry.docsNeeded.map((doc, j) => (
                      <li key={j} className="text-xs text-muted flex gap-1.5">
                        <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Support message after banks and government sections */}
          {catIndex === 1 && (
            <div className="bg-warm border border-warm-border rounded-xl p-5 mt-6">
              <p className="text-sm text-amber-800 leading-relaxed">
                Making these calls can be emotionally exhausting. You do not have to do them all at once. If you need someone to talk to, call Cruse Bereavement Support free on <a href="tel:08088081677" className="font-medium underline">0808 808 1677</a>, or the Samaritans on <a href="tel:116123" className="font-medium underline">116 123</a> (24 hours).
              </p>
            </div>
          )}
        </section>
      ))}

      {/* Cross-reference to call scripts */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="text-xl font-bold text-foreground mb-3">Need more help with what to say?</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          We have written detailed, word-for-word call scripts for every type of call. Each script covers exactly what to say, what questions they will ask, and what to do if you do not have the information they need.
        </p>
        <Link
          href="/call-scripts"
          className="inline-block px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          View Full Call Scripts
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

      <RelatedGuides currentPath="/phone-directory" guides={['/call-scripts', '/template-letters', '/tell-us-once', '/guide']} />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What phone number do I call to report a death to the bank?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Each bank has a dedicated bereavement line. For example: Barclays 0800 151 0023, HSBC 0800 092 1406, Lloyds 0345 302 1044, NatWest 0800 085 0960, Santander 0800 085 8375, Nationwide 0800 464 3139. Have the death certificate and account details ready before you call.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the Tell Us Once phone number?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Tell Us Once phone number is 0800 085 7308. This free service lets you report a death to most government departments in one call. You will need the reference number given to you when you registered the death. It is available Monday to Friday 8am to 8pm, and Saturday 9am to 4pm.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I stop someone\'s credit file being used for fraud after they die?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Contact all three credit reference agencies to add a deceased marker: Experian on 0344 481 0800, Equifax on 0333 321 4043, and TransUnion on 0330 024 7574. This helps prevent identity fraud. You will need the deceased\'s full name, date of birth, date of death, and last known address.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I say when I call to report a death?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A simple opening is: "Hello, I am calling to notify you of a death. The account holder was [name] and they passed away on [date]. Their account number is [number]. I am their [relationship]." Bereavement teams are specially trained and will guide you through the rest of the call. Have the death certificate and account details ready.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can someone else make bereavement phone calls on my behalf?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, most organisations will allow someone else to call on your behalf. They will usually need a letter of authority signed by you (or by the executor of the estate), along with a copy of the death certificate. Some banks may also accept verbal authorisation over the phone if you are present during the call.',
                },
              },
            ],
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
              { '@type': 'ListItem', position: 2, name: 'Phone Directory', item: 'https://helpafterloss.co.uk/phone-directory' },
            ],
          }),
        }}
      />
    </div>
  );
}
