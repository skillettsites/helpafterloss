import { Task, UserAnswers } from './types';

type A = Partial<UserAnswers>;

const isSpouseOrPartner = (a: A) =>
  a.relationship === 'spouse' || a.relationship === 'civilPartner';

const isUnmarriedPartner = (a: A) => a.relationship === 'unmarriedPartner';

const isAdult = (a: A) => a.userAge !== 'under18';

const isNotFriendUnlessNextOfKin = (a: A) =>
  (a.relationship !== 'friend' && a.relationship !== 'other') || a.isNextOfKin === true;

const deceasedIsAdult = (a: A) => a.deceasedAge !== 'under18';

const ownsProperty = (a: A) =>
  a.propertyStatus === 'ownedSole' || a.propertyStatus === 'ownedJoint';

const isScotland = (a: A) => a.location === 'scotland';
const isNorthernIreland = (a: A) => a.location === 'northernIreland';
const hasUrgentFaith = (a: A) =>
  a.faithRequirements === 'muslim' || a.faithRequirements === 'jewish';

export const TASKS: Task[] = [
  // ═══════════════════════════════════════
  // IMMEDIATE
  // ═══════════════════════════════════════
  {
    id: 'get-medical-certificate',
    title: 'Get the Medical Certificate of Cause of Death (MCCD)',
    description: 'A doctor must verify the death and issue the MCCD. If the death was at home, call the GP. If in hospital, the hospital will arrange this. You need this certificate to register the death.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 30,
    deadlineDaysFromDeath: 1,
    deadlineLabel: 'As soon as possible',
    showIf: () => true,
  },
  {
    id: 'call-coroner-expected',
    title: 'The death may need to be reported to the coroner',
    description: 'Because the death was unexpected, it will likely be referred to a coroner (or Procurator Fiscal in Scotland). This can delay registration and the funeral. The hospital, police, or GP usually handle this referral. You do not need to do anything yourself, but be aware of the process.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 15,
    showIf: (a: A) => a.deathCircumstance !== 'expected' && a.coronerInvolved !== false,
  },
  {
    id: 'secure-property',
    title: 'Secure the person\'s home',
    description: 'If the person lived alone, make sure the property is locked and secure. Check heating is on in cold weather to prevent frozen pipes. Remove any perishable food. Let neighbours know if appropriate.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: (a: A) => deceasedIsAdult(a) && a.propertyStatus !== 'noProperty',
  },
  {
    id: 'locate-will',
    title: 'Find the will',
    description: 'Check the person\'s home, their solicitor, their bank, or the National Will Register. The will may contain funeral wishes and names the executor who will manage the estate.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 60,
    url: 'https://www.nationalwillregister.co.uk',
    showIf: (a: A) => deceasedIsAdult(a) && (a.hasWill === 'unknown' || a.hasWill === 'yes'),
  },
  {
    id: 'inform-family',
    title: 'Inform close family and friends',
    description: 'Let the people closest to the person know. You may want to ask someone to help you share the news so you do not have to make every call yourself.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: () => true,
    supportMessage: 'This is one of the hardest parts. Ask someone to help you if you can.',
  },
  {
    id: 'urgent-burial-muslim',
    title: 'Arrange burial as soon as possible (Islamic tradition)',
    description: 'In Islam, burial should ideally take place within 24 hours. Contact your local mosque or Islamic burial society immediately. They can help with washing (ghusl), shrouding (kafan), and funeral prayers (Salat al-Janazah). You will need to register the death first, which can be expedited.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 120,
    showIf: (a: A) => a.faithRequirements === 'muslim',
  },
  {
    id: 'urgent-burial-jewish',
    title: 'Arrange burial as soon as possible (Jewish tradition)',
    description: 'In Judaism, burial should take place as soon as possible, ideally within 24-48 hours. Contact your synagogue or the Jewish Joint Burial Society. They will arrange shomrim (watchers), tahara (ritual washing), and the funeral. Shiva begins after burial.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 120,
    showIf: (a: A) => a.faithRequirements === 'jewish',
  },
  {
    id: 'death-abroad',
    title: 'Contact the Foreign Office for a death abroad',
    description: 'Call the Foreign, Commonwealth & Development Office on 020 7008 5000. They can help with local requirements, repatriation of the body, and getting a UK death certificate. Your travel insurance may cover repatriation costs.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 60,
    phoneNumber: '020 7008 5000',
    url: 'https://www.gov.uk/government/organisations/foreign-commonwealth-development-office',
    showIf: (a: A) => a.deathLocation === 'abroad',
  },
  {
    id: 'ask-adult-help',
    title: 'Ask a trusted adult to help you',
    description: 'As you are under 18, many of the legal and financial tasks will need to be done by an adult. This could be your other parent, a grandparent, older sibling, or another trusted adult. You should not have to deal with everything yourself.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 15,
    showIf: (a: A) => a.userAge === 'under18',
    supportMessage: 'You are going through something incredibly difficult. It is okay to ask for help and to let adults handle the paperwork.',
  },

  // ═══════════════════════════════════════
  // REGISTRATION
  // ═══════════════════════════════════════
  {
    id: 'register-death',
    title: 'Register the death',
    description: 'You must register the death at the register office in the area where the person died. Book an appointment. You will need the MCCD and the person\'s details (full name, date of birth, address, occupation, NHS number if known, marriage/civil partnership certificate if applicable). The registrar will give you a green form for the funeral director and copies of the death certificate.',
    category: 'registration',
    priority: 'urgent',
    estimatedMinutes: 60,
    deadlineDaysFromDeath: 5,
    deadlineLabel: 'Within 5 days',
    url: 'https://www.gov.uk/register-a-death',
    showIf: (a: A) => !isScotland(a) && !isNorthernIreland(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'register-death-scotland',
    title: 'Register the death',
    description: 'In Scotland you must register the death within 8 days at the registrar\'s office in the area where the person died. You will need the MCCD and the person\'s details. The registrar will provide a Certificate of Registration of Death (Form 14) for the funeral director.',
    category: 'registration',
    priority: 'urgent',
    estimatedMinutes: 60,
    deadlineDaysFromDeath: 8,
    deadlineLabel: 'Within 8 days',
    url: 'https://www.nrscotland.gov.uk/registration/registering-a-death',
    showIf: (a: A) => isScotland(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'register-death-ni',
    title: 'Register the death',
    description: 'In Northern Ireland you must register the death within 5 days at the registrar\'s office in the district where the person died. You will need the MCCD and the person\'s details.',
    category: 'registration',
    priority: 'urgent',
    estimatedMinutes: 60,
    deadlineDaysFromDeath: 5,
    deadlineLabel: 'Within 5 days',
    url: 'https://www.nidirect.gov.uk/articles/registering-death',
    showIf: (a: A) => isNorthernIreland(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'order-death-certificates',
    title: 'Order enough copies of the death certificate',
    description: 'Order at least 5 certified copies (£11 each). Banks, insurers, pension providers, and solicitors all need an original. It costs more to order extra copies later. You can order them when you register the death.',
    category: 'registration',
    priority: 'urgent',
    estimatedMinutes: 5,
    showIf: (a: A) => isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'tell-us-once',
    title: 'Use the Tell Us Once service',
    description: 'Tell Us Once lets you report the death to most government organisations in one go. The registrar will give you a Tell Us Once reference number. Use it online or by phone within 28 days. It notifies: DWP (benefits and State Pension), HMRC, DVLA, Passport Office, local council (council tax, electoral register, Blue Badge, libraries), and public sector pensions.',
    category: 'registration',
    priority: 'important',
    estimatedMinutes: 30,
    deadlineDaysFromDeath: 28,
    deadlineLabel: 'Within 28 days of registration',
    url: 'https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once',
    phoneNumber: '0800 085 7308',
    showIf: (a: A) => !isNorthernIreland(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'notify-government-ni',
    title: 'Notify government departments individually',
    description: 'Tell Us Once is not available in Northern Ireland. You will need to contact each government department separately: HMRC, DWP (for benefits), DVLA, and the Passport Office. Contact your local council about council tax and electoral register.',
    category: 'registration',
    priority: 'important',
    estimatedMinutes: 120,
    showIf: (a: A) => isNorthernIreland(a) && isNotFriendUnlessNextOfKin(a),
  },

  // ═══════════════════════════════════════
  // FUNERAL
  // ═══════════════════════════════════════
  {
    id: 'contact-funeral-director',
    title: 'Contact a funeral director',
    description: 'Shop around and ask for itemised quotes. Funeral costs vary hugely. You are entitled to see a price list. Ask about: their basic fee, care of the deceased, the coffin, transport, ceremony fees, and burial/cremation fees. You do not have to use the funeral director suggested by the hospital.',
    category: 'funeral',
    priority: 'important',
    estimatedMinutes: 90,
    showIf: (a: A) => !a.hasFuneralPlan && isNotFriendUnlessNextOfKin(a),
    supportMessage: 'Take your time with this decision. Most funeral directors are understanding and will not pressure you.',
  },
  {
    id: 'contact-prepaid-provider',
    title: 'Contact the pre-paid funeral plan provider',
    description: 'If the person had a pre-paid funeral plan, contact the provider. They will explain what is covered and arrange things with a funeral director. Check what extras may not be covered.',
    category: 'funeral',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.hasFuneralPlan === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'funeral-expenses-payment',
    title: 'Apply for help with funeral costs (Funeral Expenses Payment)',
    description: 'If you receive means-tested benefits, you may be able to get a Funeral Expenses Payment from the DWP. This covers burial or cremation fees, up to £1,000 for other costs (flowers, coffin, transport), and travel to arrange or attend the funeral. Apply within 6 months of the funeral. Call the Bereavement Service on 0800 731 0469.',
    category: 'funeral',
    priority: 'important',
    estimatedMinutes: 45,
    deadlineDaysFromDeath: 180,
    deadlineLabel: 'Within 6 months of the funeral',
    phoneNumber: '0800 731 0469',
    url: 'https://www.gov.uk/funeral-payments',
    showIf: (a: A) => a.receivingBenefits === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'childrens-funeral-fund',
    title: 'Apply to the Children\'s Funeral Fund',
    description: 'If the person who died was under 18 (or a stillborn baby after 24 weeks), the Children\'s Funeral Fund for England covers burial fees, cremation fees, and a simple coffin. The funeral director can apply on your behalf.',
    category: 'funeral',
    priority: 'important',
    estimatedMinutes: 30,
    url: 'https://www.gov.uk/child-funeral-costs',
    showIf: (a: A) => a.deceasedAge === 'under18' && !isScotland(a) && !isNorthernIreland(a),
  },

  // ═══════════════════════════════════════
  // FINANCIAL
  // ═══════════════════════════════════════
  {
    id: 'notify-banks',
    title: 'Notify banks and building societies',
    description: 'Contact each bank where the person had an account. You can also use the free Death Notification Service to notify multiple banks at once. Sole accounts will be frozen. Banks will usually release money for funeral costs before probate. Ask about the bank\'s probate threshold, as small balances may be released without probate.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 60,
    url: 'https://www.deathnotificationservice.co.uk',
    showIf: (a: A) => deceasedIsAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'joint-accounts',
    title: 'Transfer joint bank accounts to your name',
    description: 'Joint accounts usually pass to the surviving account holder. Contact the bank to have the account transferred into your sole name. This normally does not need probate. Keep using the account as normal in the meantime.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.hasJointBankAccounts === true,
  },
  {
    id: 'claim-life-insurance',
    title: 'Claim on the life insurance policy',
    description: 'Contact the insurance company with the death certificate and policy number. If the policy was written in trust, it pays out directly to the beneficiary without waiting for probate. If not in trust, it forms part of the estate.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 45,
    showIf: (a: A) => a.hasLifeInsurance === true,
  },
  {
    id: 'notify-pension-providers',
    title: 'Notify pension providers',
    description: 'Contact each pension provider (state, workplace, and private pensions). There may be a survivor\'s pension, a lump sum death benefit, or remaining guaranteed payments. For the State Pension, Tell Us Once will notify the DWP, but you should check if there are any arrears owed.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 60,
    showIf: (a: A) => a.deceasedHadPension === true,
  },
  {
    id: 'death-in-service',
    title: 'Check for death-in-service benefits',
    description: 'Contact the person\'s employer. Many employers offer a death-in-service benefit, typically 2-4 times the annual salary, paid to a nominated beneficiary. Also ask about any outstanding pay, holiday pay, or workplace pension.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.employmentStatus === 'employed',
  },
  {
    id: 'notify-employer',
    title: 'Notify the employer',
    description: 'Contact the person\'s employer to let them know. Ask about: final salary payment, any holiday pay owed, return of personal belongings, workplace pension, and death-in-service benefit.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.employmentStatus === 'employed',
  },
  {
    id: 'self-employed-closure',
    title: 'Deal with the business',
    description: 'If the person was self-employed, you may need to: notify HMRC and cancel the self-assessment registration, inform clients and suppliers, deal with any employees (if applicable), close business bank accounts, cancel business insurance, and deregister for VAT if applicable.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 180,
    showIf: (a: A) => a.employmentStatus === 'selfEmployed',
  },
  {
    id: 'bereavement-support-payment',
    title: 'Apply for Bereavement Support Payment',
    description: 'If your spouse or civil partner died and you are under State Pension age, you may be entitled to Bereavement Support Payment. Higher rate (with dependent children): £3,500 lump sum plus £350/month for 18 months. Standard rate: £2,500 lump sum plus £100/month for 18 months. Claim within 3 months for full backdating.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    deadlineDaysFromDeath: 630,
    deadlineLabel: 'Claim within 21 months (best within 3 months)',
    url: 'https://www.gov.uk/bereavement-support-payment',
    phoneNumber: '0800 731 0469',
    showIf: (a: A) => isSpouseOrPartner(a) && a.userUnderStatePensionAge === true,
  },
  {
    id: 'council-tax-change',
    title: 'Update council tax',
    description: 'If the person lived alone, the property may be exempt from council tax during probate and for 6 months after the grant of probate. If you lived together, you may now qualify for the 25% single person discount. Contact the council or use Tell Us Once.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 20,
    showIf: (a: A) => deceasedIsAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'cancel-subscriptions',
    title: 'Cancel or transfer subscriptions and direct debits',
    description: 'Check bank statements for regular payments: TV licence, phone contracts, broadband, streaming services, gym memberships, insurance policies, charity donations, magazines, breakdown cover. Cancel each one individually.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 120,
    showIf: (a: A) => deceasedIsAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'notify-utilities',
    title: 'Notify utility companies',
    description: 'Contact gas, electricity, and water providers to close or transfer the accounts. Take meter readings on the date of death if possible. If you are taking over the property, ask to transfer the accounts to your name.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 60,
    showIf: (a: A) => deceasedIsAdult(a) && a.propertyStatus !== 'noProperty' && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'deal-with-vehicle',
    title: 'Deal with the vehicle',
    description: 'Notify the DVLA (Tell Us Once does this). Cancel or transfer the car insurance. If selling the vehicle, you need probate first unless the value is below the bank\'s threshold. The vehicle can be driven on existing insurance and tax in the meantime. Update the V5C logbook.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 45,
    url: 'https://www.gov.uk/tell-dvla-about-bereavement',
    showIf: (a: A) => a.hasVehicle === true,
  },
  {
    id: 'child-benefit-transfer',
    title: 'Transfer or claim Child Benefit',
    description: 'If the person who died was receiving Child Benefit for children under 16 (or under 20 in education), the surviving parent or guardian should contact HMRC to transfer or claim the benefit. Call the Child Benefit helpline on 0300 200 3100.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    phoneNumber: '0300 200 3100',
    showIf: (a: A) => a.hasDependentsUnder18 === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'guardian-arrangements',
    title: 'Check guardianship arrangements for children',
    description: 'If the person who died was a sole parent, check the will for a named guardian. If there is no will or no guardian named, you may need to apply to the court for a Child Arrangements Order. Contact a family law solicitor or Citizens Advice for guidance.',
    category: 'financial',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: (a: A) => a.hasDependentsUnder18 === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'hmrc-final-tax-return',
    title: 'File the final tax return with HMRC',
    description: 'If the person was self-employed, had rental income, or other untaxed income, a final Self Assessment tax return needs to be filed for the period from the start of the tax year to the date of death. Contact HMRC\'s bereavement helpline on 0300 200 3300.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 120,
    phoneNumber: '0300 200 3300',
    url: 'https://www.gov.uk/government/organisations/hm-revenue-customs/contact/bereavement-and-deceased-estate',
    showIf: (a: A) => a.employmentStatus === 'selfEmployed',
  },

  // ═══════════════════════════════════════
  // LEGAL & PROBATE
  // ═══════════════════════════════════════
  {
    id: 'apply-probate',
    title: 'Apply for probate (Grant of Probate)',
    description: 'Probate gives you the legal right to deal with the estate. You need to: value the estate, complete the inheritance tax form (IHT205 or IHT400), submit the probate application (PA1P form), pay the court fee (£300 for estates over £5,000, free if under). You can do this yourself or use a solicitor. Current processing time is around 12-16 weeks.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 240,
    url: 'https://www.gov.uk/applying-for-probate',
    showIf: (a: A) => deceasedIsAdult(a) && a.hasWill === 'yes' && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'apply-letters-admin',
    title: 'Apply for Letters of Administration',
    description: 'When there is no will, you apply for Letters of Administration instead of probate. The process is similar: value the estate, complete the IHT form, submit the application (PA1A form), pay the court fee (£300 for estates over £5,000). The person who applies is called the "administrator" and is usually the closest relative.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 240,
    url: 'https://www.gov.uk/applying-for-probate',
    showIf: (a: A) => deceasedIsAdult(a) && a.hasWill === 'no' && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'apply-confirmation-scotland',
    title: 'Apply for Confirmation (Scotland)',
    description: 'In Scotland, the equivalent of probate is called Confirmation. Apply to the Sheriff Court. If the estate is under £36,000 and straightforward, you can use the simplified "small estate" process. The court fee varies by estate value.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 240,
    url: 'https://www.scotcourts.gov.uk/taking-action/dealing-with-a-deceased%27s-estate',
    showIf: (a: A) => isScotland(a) && deceasedIsAdult(a) && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'intestacy-rules',
    title: 'Understand who inherits without a will (intestacy rules)',
    description: 'Without a will, the law decides who inherits. In England and Wales: the spouse/civil partner gets the first £322,000 plus personal belongings, and half of the remainder. Children share the other half. If there is no spouse, children inherit everything equally. Unmarried partners, stepchildren, and friends have no automatic right to inherit.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 30,
    url: 'https://www.gov.uk/inherits-someone-dies-without-will',
    showIf: (a: A) => deceasedIsAdult(a) && a.hasWill === 'no',
  },
  {
    id: 'unmarried-partner-warning',
    title: 'Get legal advice about your rights as an unmarried partner',
    description: 'As an unmarried partner, you do not automatically inherit anything under intestacy rules, regardless of how long you lived together. You may be able to make a claim under the Inheritance (Provision for Family and Dependants) Act 1975 if you were financially dependent on the person. Seek legal advice as soon as possible.',
    category: 'legal',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: (a: A) => isUnmarriedPartner(a) && a.hasWill === 'no',
    supportMessage: 'This can be a very stressful situation. Citizens Advice and some solicitors offer free initial consultations.',
  },
  {
    id: 'inheritance-tax',
    title: 'Check if inheritance tax applies',
    description: 'Inheritance tax is charged at 40% on the value of the estate above £325,000 (the nil-rate band). If the person left their home to their children or grandchildren, there is an additional £175,000 allowance (the residence nil-rate band). Spouses can transfer unused allowance, giving a potential combined threshold of £1 million. If IHT applies, it must be paid within 6 months of death. Use form IHT400.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 120,
    deadlineDaysFromDeath: 180,
    deadlineLabel: 'IHT due within 6 months',
    url: 'https://www.gov.uk/inheritance-tax',
    showIf: (a: A) => deceasedIsAdult(a) && (a.estimatedEstateValue === '325kTo500k' || a.estimatedEstateValue === '500kTo1m' || a.estimatedEstateValue === 'over1m'),
  },
  {
    id: 'statutory-notices',
    title: 'Place statutory notices to protect yourself',
    description: 'As an executor or administrator, place a notice in The London Gazette (and a local newspaper) under the Trustee Act 1925. This protects you from personal liability for debts you did not know about. You must wait at least 2 months after placing the notice before distributing assets. The Gazette notice costs around £100.',
    category: 'legal',
    priority: 'normal',
    estimatedMinutes: 30,
    url: 'https://www.thegazette.co.uk/wills-and-probate',
    showIf: (a: A) => deceasedIsAdult(a) && a.estimatedEstateValue !== 'under5k' && (a.isExecutor === true || a.hasWill === 'no') && isAdult(a),
  },

  // ═══════════════════════════════════════
  // PROPERTY
  // ═══════════════════════════════════════
  {
    id: 'home-insurance-check',
    title: 'Check and update home insurance',
    description: 'Many home insurance policies become void if the property is unoccupied for more than 30 days. Contact the insurer to explain the situation. You may need to switch to specialist unoccupied property insurance. Do this urgently to avoid leaving the property uninsured.',
    category: 'property',
    priority: 'urgent',
    estimatedMinutes: 30,
    deadlineDaysFromDeath: 30,
    deadlineLabel: 'Check within 30 days',
    showIf: (a: A) => a.propertyStatus === 'ownedSole',
  },
  {
    id: 'mortgage-notification',
    title: 'Notify the mortgage lender',
    description: 'Contact the mortgage company with the death certificate. Ask about: mortgage protection insurance (which may pay off the mortgage), whether payments can be paused during probate, and what happens next. If there is a joint mortgage, it usually continues with the surviving owner.',
    category: 'property',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.hasMortgage === true,
  },
  {
    id: 'council-tax-exemption',
    title: 'Apply for council tax exemption on the empty property',
    description: 'A property left empty after someone dies is exempt from council tax from the date of death until probate is granted, and for 6 months after that. Contact the local council to apply. Tell Us Once may start this process, but follow up to make sure.',
    category: 'property',
    priority: 'normal',
    estimatedMinutes: 20,
    showIf: (a: A) => a.propertyStatus === 'ownedSole',
  },
  {
    id: 'notify-landlord',
    title: 'Notify the landlord',
    description: 'Contact the landlord or letting agent. Check the tenancy agreement for what happens on death. Some tenancies end, others can be transferred to a spouse or family member living at the property. Give notice if needed and arrange to return keys and clear the property.',
    category: 'property',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.propertyStatus === 'renting',
  },
  {
    id: 'notify-council-housing',
    title: 'Notify the council or housing association',
    description: 'Contact the council or housing association about the tenancy. A spouse, civil partner, or family member living at the property may have the right to succeed (take over) the tenancy. This right varies depending on the type of tenancy and local rules.',
    category: 'property',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.propertyStatus === 'councilHousing',
  },
  {
    id: 'land-registry',
    title: 'Update the Land Registry',
    description: 'If the property was owned jointly as "joint tenants", it passes automatically to the surviving owner. Send a copy of the death certificate to the Land Registry (form DJP). If owned as "tenants in common" or in the person\'s sole name, the property forms part of the estate and probate is needed before it can be transferred or sold.',
    category: 'property',
    priority: 'normal',
    estimatedMinutes: 30,
    url: 'https://www.gov.uk/registering-land-or-property-with-land-registry',
    showIf: (a: A) => ownsProperty(a),
  },
  {
    id: 'redirect-post',
    title: 'Redirect the person\'s post',
    description: 'Set up a Royal Mail redirection to forward post to your address. This costs from £36.99 for 3 months. It helps you catch any correspondence, bills, or accounts you may not know about. You can set this up online or at a post office.',
    category: 'property',
    priority: 'normal',
    estimatedMinutes: 15,
    url: 'https://www.royalmail.com/receiving/redirection',
    showIf: (a: A) => deceasedIsAdult(a) && isNotFriendUnlessNextOfKin(a),
  },

  // ═══════════════════════════════════════
  // DIGITAL
  // ═══════════════════════════════════════
  {
    id: 'digital-accounts',
    title: 'Deal with digital and online accounts',
    description: 'Each platform has its own process. Facebook and Instagram can be memorialised or deleted. Google has an Inactive Account Manager. Apple has a Digital Legacy programme. Contact each service with a death certificate. Cancel any paid subscriptions (Netflix, Spotify, Amazon Prime, etc.).',
    category: 'digital',
    priority: 'normal',
    estimatedMinutes: 120,
    showIf: (a: A) => a.hasDigitalAccounts === true,
  },

  // ═══════════════════════════════════════
  // ONGOING
  // ═══════════════════════════════════════
  {
    id: 'distribute-estate',
    title: 'Distribute the estate to beneficiaries',
    description: 'Once probate is granted and all debts are paid, distribute the remaining assets according to the will (or intestacy rules). Keep detailed records of everything. Send estate accounts to all beneficiaries. Do not distribute anything until at least 2 months after placing statutory notices.',
    category: 'ongoing',
    priority: 'normal',
    estimatedMinutes: 240,
    showIf: (a: A) => deceasedIsAdult(a) && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'first-anniversary',
    title: 'Prepare for difficult dates',
    description: 'Birthdays, anniversaries, and the first anniversary of the death can bring a wave of grief. This is completely normal. Plan ahead for how you want to spend these days. Reach out to Cruse Bereavement Support (0808 808 1677) if you need someone to talk to.',
    category: 'ongoing',
    priority: 'normal',
    estimatedMinutes: 0,
    showIf: () => true,
    supportMessage: 'Grief does not follow a straight line. It is okay to have good days and bad days, even months or years later.',
  },
];

export function getFilteredTasks(answers: Partial<UserAnswers>): Task[] {
  return TASKS.filter(task => task.showIf(answers));
}

export function getTasksByCategory(answers: Partial<UserAnswers>): Record<string, Task[]> {
  const filtered = getFilteredTasks(answers);
  const grouped: Record<string, Task[]> = {};
  for (const task of filtered) {
    if (!grouped[task.category]) grouped[task.category] = [];
    grouped[task.category].push(task);
  }
  return grouped;
}
