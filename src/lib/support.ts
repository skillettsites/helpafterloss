import { SupportOrganisation } from './types';

export const SUPPORT_ORGANISATIONS: SupportOrganisation[] = [
  {
    name: 'Samaritans',
    phone: '116 123',
    hours: '24 hours a day, 365 days a year',
    url: 'https://www.samaritans.org',
    description: 'Free, confidential emotional support for anyone in distress. You do not have to be suicidal to call.',
  },
  {
    name: 'Cruse Bereavement Support',
    phone: '0808 808 1677',
    hours: 'Monday to Friday 9:30am-5pm, extended hours on weekday evenings',
    url: 'https://www.cruse.org.uk',
    description: 'The UK\'s leading bereavement charity. Free support, advice, and information after a death. Also offers one-to-one counselling.',
  },
  {
    name: 'Citizens Advice',
    phone: '0800 144 8848',
    hours: 'Monday to Friday 9am-5pm',
    url: 'https://www.citizensadvice.org.uk/family/death-and-wills/',
    description: 'Free, impartial advice on legal, financial, and practical matters after a death, including benefits, debt, and housing.',
  },
  {
    name: 'Age UK',
    phone: '0800 678 1602',
    hours: '8am-7pm, 365 days a year',
    url: 'https://www.ageuk.org.uk/information-advice/money-legal/legal-issues/what-to-do-when-someone-dies/',
    description: 'Support and advice for older people and those dealing with the death of an older person.',
  },
  {
    name: 'Child Bereavement UK',
    phone: '0800 02 888 40',
    hours: 'Monday to Friday 9am-5pm',
    url: 'https://www.childbereavementuk.org',
    description: 'Support for families and professionals when a baby or child dies, or when a child is bereaved.',
  },
  {
    name: 'WAY (Widowed and Young)',
    url: 'https://www.widowedandyoung.org.uk',
    description: 'Peer support for anyone aged 50 or under who has lost a partner. Connects you with others in a similar situation.',
    forSituations: ['spouse_loss', 'young_widow'],
  },
  {
    name: 'The Silver Line',
    phone: '0800 4 70 80 90',
    hours: '24 hours a day, 365 days a year',
    url: 'https://www.thesilverline.org.uk',
    description: 'Free, confidential helpline for older people. Offers friendship, conversation, and information.',
  },
  {
    name: 'Survivors of Bereavement by Suicide (SoBS)',
    phone: '0300 111 5065',
    hours: '9am-9pm every day',
    url: 'https://uksobs.org',
    description: 'Support for anyone who has been bereaved or affected by suicide.',
    forSituations: ['suicide'],
  },
  {
    name: 'The Lullaby Trust',
    phone: '0808 802 6868',
    hours: 'Monday to Friday 10am-5pm, weekends and evenings 6pm-10pm',
    url: 'https://www.lullabytrust.org.uk',
    description: 'Support for families who have experienced the sudden and unexpected death of a baby or young child.',
    forSituations: ['child_loss', 'baby_loss'],
  },
  {
    name: 'Sands (Stillbirth and Neonatal Death Society)',
    phone: '0808 164 3332',
    hours: '9:30am-5:30pm Monday to Friday, 9:30am-9:30pm Tuesday and Thursday',
    url: 'https://www.sands.org.uk',
    description: 'Support for anyone affected by the death of a baby before, during, or shortly after birth.',
    forSituations: ['baby_loss'],
  },
  {
    name: 'MoneyHelper (Bereavement)',
    phone: '0800 138 7777',
    hours: 'Monday to Friday 8am-6pm',
    url: 'https://www.moneyhelper.org.uk/en/family-and-care/death-and-bereavement',
    description: 'Free financial guidance on pensions, benefits, tax, and money matters after a death.',
  },
  {
    name: 'Turn2us',
    url: 'https://www.turn2us.org.uk',
    description: 'Helps people access the money available to them through benefits, grants, and other support. Includes a benefits calculator.',
  },
  {
    name: 'Death Notification Service',
    url: 'https://www.deathnotificationservice.co.uk',
    description: 'Free service to notify multiple banks and building societies of a death with a single notification. Run by the banking industry.',
  },
  {
    name: 'GOV.UK: What to do when someone dies',
    url: 'https://www.gov.uk/when-someone-dies',
    description: 'Official government step-by-step guide covering registration, Tell Us Once, probate, and benefits.',
  },
  {
    name: 'National Will Register',
    url: 'https://www.nationalwillregister.co.uk',
    description: 'Search for a registered will. Useful if you are not sure whether the person left a will or where it might be stored.',
  },
];

export const SUPPORT_MESSAGES = [
  'Take your time. There is no rush to do everything at once.',
  'It is completely normal to feel overwhelmed. Do what you can, when you can.',
  'If a task feels too much, ask a friend or family member to help.',
  'You do not have to go through this alone. The organisations listed on our support page are there for you.',
  'It is okay to take breaks. Your wellbeing matters too.',
  'Many people find that focusing on one task at a time helps make things feel more manageable.',
  'Remember to eat, sleep, and look after yourself. The paperwork can wait.',
  'If you need someone to talk to at any time, call Samaritans free on 116 123.',
];

export function getRandomSupportMessage(): string {
  return SUPPORT_MESSAGES[Math.floor(Math.random() * SUPPORT_MESSAGES.length)];
}
