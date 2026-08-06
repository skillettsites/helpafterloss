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
    description: 'A doctor needs to confirm the death and issue the MCCD. If your loved one passed away at home, call their GP. If they were in hospital, the hospital will arrange it for you. You will need this certificate before you can register the death.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 30,
    deadlineDaysFromDeath: 1,
    deadlineLabel: 'As soon as possible',
    showIf: () => true,
  },
  {
    id: 'call-coroner-expected',
    title: 'The coroner may need to be involved',
    description: 'Because it was unexpected, it is likely to be referred to a coroner (or the Procurator Fiscal in Scotland). This can delay registration and the funeral, which is hard when you are already waiting. The hospital, police or GP normally make the referral, so there is nothing you need to do yourself. It just helps to know it is happening.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 15,
    showIf: (a: A) => a.deathCircumstance !== 'expected' && a.coronerInvolved !== false,
  },
  {
    id: 'secure-property',
    title: 'Make sure their home is secure',
    description: 'If they lived alone, it is worth checking the doors and windows are locked. In cold weather, leave the heating on so the pipes do not freeze. Clear out any food that will spoil. You may also want to let a neighbour know, if that feels right.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: (a: A) => deceasedIsAdult(a) && a.propertyStatus !== 'noProperty',
  },
  {
    id: 'locate-will',
    title: 'Find the will',
    description: 'It may be at their home, with their solicitor, at their bank, or listed on the National Will Register. A will often sets out funeral wishes, and it names the executor, the person who will look after the estate.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 60,
    url: 'https://www.nationalwillregister.co.uk',
    showIf: (a: A) => deceasedIsAdult(a) && (a.hasWill === 'unknown' || a.hasWill === 'yes'),
  },
  {
    id: 'inform-family',
    title: 'Let close family and friends know',
    description: 'Tell the people who were closest to them. You do not have to do this on your own: someone else can take part of the list, so you are not making every call yourself.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: () => true,
    supportMessage: 'This is one of the hardest parts. If someone offers to help with the calls, it is fine to say yes.',
  },
  {
    id: 'urgent-burial-muslim',
    title: 'Arrange burial as soon as possible (Islamic tradition)',
    description: 'In Islam, burial should ideally take place within 24 hours. Your local mosque or Islamic burial society will know exactly what is needed, so contact them as soon as you can. They can help with washing (ghusl), shrouding (kafan), and funeral prayers (Salat al-Janazah). You will need to register the death first, which can be expedited.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 120,
    showIf: (a: A) => a.faithRequirements === 'muslim',
  },
  {
    id: 'urgent-burial-jewish',
    title: 'Arrange burial as soon as possible (Jewish tradition)',
    description: 'In Judaism, burial should take place as soon as possible, ideally within 24-48 hours. Your synagogue or the Jewish Joint Burial Society will guide you through it. They will arrange shomrim (watchers), tahara (ritual washing), and the funeral. Shiva begins after the burial.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 120,
    showIf: (a: A) => a.faithRequirements === 'jewish',
  },
  {
    id: 'death-abroad',
    title: 'Contact the Foreign Office for a death abroad',
    description: 'Call the Foreign, Commonwealth & Development Office on 020 7008 5000. They deal with this every day and can talk you through local requirements, bringing your loved one home, and getting a UK death certificate. It is worth checking the travel insurance policy too, as it may cover repatriation costs.',
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
    description: 'Because you are under 18, an adult will need to handle most of the legal and financial tasks. That might be your other parent, a grandparent, an older brother or sister, or another adult you trust. None of this should sit on your shoulders.',
    category: 'immediate',
    priority: 'urgent',
    estimatedMinutes: 15,
    showIf: (a: A) => a.userAge === 'under18',
    supportMessage: 'What you are going through is very hard. It is okay to ask for help, and to let the adults around you take on the paperwork.',
  },

  // ═══════════════════════════════════════
  // REGISTRATION
  // ═══════════════════════════════════════
  {
    id: 'register-death',
    title: 'Register the death',
    description: 'This is done at the register office for the area where they passed away, by appointment. The 5 days runs from the point the medical examiner confirms the cause of death, not from the day they passed away, so if that confirmation has not reached you yet then your clock has not started. Take the MCCD and their details with you: full name, date of birth, address, occupation, NHS number if you know it, and their marriage or civil partnership certificate if there is one. The registrar will give you a green form for the funeral director, along with the copies of the death certificate you have asked for.',
    category: 'registration',
    priority: 'urgent',
    estimatedMinutes: 60,
    deadlineDaysFromDeath: 5,
    deadlineLabel: 'Usually within 5 days of confirmation',
    url: 'https://www.gov.uk/register-a-death',
    showIf: (a: A) => !isScotland(a) && !isNorthernIreland(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'register-death-scotland',
    title: 'Register the death',
    description: 'In Scotland you must register the death within 8 days, at the registrar\'s office for the area where they passed away. Take the MCCD and their personal details with you. The registrar will give you a Certificate of Registration of Death (Form 14) to pass on to the funeral director.',
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
    description: 'In Northern Ireland you must register the death within 5 days, at the registrar\'s office for the district where they passed away. Take the MCCD and their personal details with you.',
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
    description: 'It is worth ordering at least 5 certified copies (£12.50 each in England and Wales, £15 in Scotland). Banks, insurers, pension providers, and solicitors each need to see an original, so having a few spare saves a lot of chasing. You can order them at the same appointment when you register the death, and extra copies cost more later.',
    category: 'registration',
    priority: 'urgent',
    estimatedMinutes: 5,
    showIf: (a: A) => isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'tell-us-once',
    title: 'Use the Tell Us Once service',
    description: 'Tell Us Once lets you report the death to most government organisations in one go, so you do not have to explain what has happened again and again. The registrar will give you a Tell Us Once reference number, and the 28 days runs from when you get that number. It notifies: DWP (benefits and State Pension), HMRC, DVLA, Passport Office, local council (council tax, electoral register, Blue Badge, libraries), and public sector pensions. One important thing first: if they had a Motability vehicle, ring Motability on 0300 456 4566 BEFORE you use Tell Us Once. Once Tell Us Once has gone through, the car can no longer be driven. It is not available in Northern Ireland.',
    category: 'registration',
    priority: 'important',
    estimatedMinutes: 30,
    deadlineDaysFromDeath: 28,
    deadlineLabel: 'Within 28 days of getting your reference number',
    url: 'https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once',
    phoneNumber: '0800 085 7308',
    showIf: (a: A) => !isNorthernIreland(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'notify-government-ni',
    title: 'Notify government departments individually',
    description: 'Tell Us Once is not available in Northern Ireland, so each department needs to be contacted separately: HMRC, DWP (for benefits), DVLA, and the Passport Office. Your local council will also need to know, for council tax and the electoral register. There is no need to do them all in one day.',
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
    description: 'You are entitled to see a price list, and it is fine to ask more than one funeral director for an itemised quote. Costs vary a great deal. Worth asking about: their basic fee, care of the person who has passed away, the coffin, transport, ceremony fees, and burial or cremation fees. You do not have to use the funeral director suggested by the hospital.',
    category: 'funeral',
    priority: 'important',
    estimatedMinutes: 90,
    showIf: (a: A) => !a.hasFuneralPlan && isNotFriendUnlessNextOfKin(a),
    supportMessage: 'Take as long as you need over this. A good funeral director will give you time and will not push you.',
  },
  {
    id: 'contact-prepaid-provider',
    title: 'Contact the pre-paid funeral plan provider',
    description: 'If they had a pre-paid funeral plan, contact the provider. They will explain what the plan covers and arrange things with a funeral director, which takes a lot off your plate. It is worth checking which extras may not be included.',
    category: 'funeral',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.hasFuneralPlan === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'funeral-expenses-payment',
    title: 'Apply for help with funeral costs (Funeral Expenses Payment)',
    description: 'If you receive means-tested benefits, you may be able to get a Funeral Expenses Payment from the DWP. Burial and cremation fees are not capped; the £1,000 limit applies only to other costs such as the funeral director\'s fee, the coffin and flowers. Travel to arrange or attend the funeral is covered too. Worth knowing: if there was a pre-paid funeral plan, that £1,000 drops to £120. The 6 months runs from the funeral, not from the day they passed away, and it is best to apply before the funeral with a signed invoice or contract. The Bereavement Service on 0800 151 2012 can talk you through it.',
    category: 'funeral',
    priority: 'important',
    estimatedMinutes: 45,
    deadlineDaysFromDeath: 180,
    deadlineLabel: 'Within 6 months of the funeral (not the date they passed away)',
    phoneNumber: '0800 151 2012',
    url: 'https://www.gov.uk/funeral-payments',
    showIf: (a: A) => a.receivingBenefits === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'childrens-funeral-fund',
    title: 'Apply to the Children\'s Funeral Fund',
    description: 'If the person who passed away was under 18 (or a baby stillborn after 24 weeks), the Children\'s Funeral Fund for England covers burial fees, cremation fees, and a simple coffin. Your funeral director can apply on your behalf, so this is not something you need to handle yourself.',
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
    description: 'Each bank where they held an account will need to be told. The free Death Notification Service lets you notify several banks at once, which saves a lot of phone calls. Sole accounts will be frozen. Banks will usually release money for funeral costs before probate, and it is worth asking about their probate threshold, as smaller balances can often be released without it.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 60,
    url: 'https://www.deathnotificationservice.co.uk',
    showIf: (a: A) => deceasedIsAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'joint-accounts',
    title: 'Transfer joint bank accounts to your name',
    description: 'Joint accounts usually pass to the surviving account holder. Contact the bank and they will transfer the account into your sole name. This does not normally need probate, and you can carry on using the account as usual in the meantime.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.hasJointBankAccounts === true,
  },
  {
    id: 'claim-life-insurance',
    title: 'Claim on the life insurance policy',
    description: 'Contact the insurance company with the death certificate and the policy number. If the policy was written in trust, it pays out directly to the beneficiary without waiting for probate. If it was not written in trust, it forms part of the estate.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 45,
    showIf: (a: A) => a.hasLifeInsurance === true,
  },
  {
    id: 'notify-pension-providers',
    title: 'Notify pension providers',
    description: 'Get in touch with each pension provider (state, workplace, and private pensions). There may be a survivor\'s pension, a lump sum death benefit, or guaranteed payments still to come. Tell Us Once will notify the DWP about the State Pension, though it is worth checking whether any arrears are owed.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 60,
    showIf: (a: A) => a.deceasedHadPension === true,
  },
  {
    id: 'notify-employer',
    title: 'Notify the employer and check for death-in-service benefits',
    description: 'Let their employer know when you feel able to. It is worth asking about: death-in-service benefit (typically 2-4 times annual salary, paid to a nominated beneficiary), the final salary payment, any holiday pay owed, the return of personal belongings, and the workplace pension.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.employmentStatus === 'employed',
  },
  {
    id: 'self-employed-closure',
    title: 'Deal with the business',
    description: 'If they were self-employed, there may be a few things to work through: notifying HMRC and cancelling the self-assessment registration, letting clients and suppliers know, sorting out any employees, closing business bank accounts, cancelling business insurance, and deregistering for VAT if it applied. This one takes a while, so it is fine to do it in stages.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 180,
    showIf: (a: A) => a.employmentStatus === 'selfEmployed',
  },
  {
    id: 'bereavement-support-payment',
    title: 'Apply for Bereavement Support Payment',
    description: 'If your husband, wife, or civil partner has passed away and you are under State Pension age, you may be entitled to Bereavement Support Payment. Higher rate (with dependent children): £3,500 lump sum plus £350 a month for 18 months. Standard rate: £2,500 lump sum plus £100 a month for 18 months. When you claim really matters: claim within 3 months and you get the lump sum and all 18 monthly payments; between 3 and 12 months you still get the lump sum but fewer monthly payments; and once 12 months have passed you lose the lump sum altogether and can only get some of the monthly payments. After 21 months you usually get nothing. If you are anywhere near the 12 month mark, this is worth doing today.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    deadlineDaysFromDeath: 630,
    deadlineLabel: 'Lump sum is lost after 12 months; nothing at all after 21',
    url: 'https://www.gov.uk/bereavement-support-payment',
    phoneNumber: '0800 151 2012',
    showIf: (a: A) => isSpouseOrPartner(a) && a.userUnderStatePensionAge === true,
  },
  {
    id: 'council-tax-change',
    title: 'Update council tax',
    description: 'If they lived alone, the property may be exempt from council tax during probate and for 6 months after the grant of probate. If you lived together, you may now qualify for the 25% single person discount. You can sort this through Tell Us Once, or by contacting the council directly.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 20,
    showIf: (a: A) => deceasedIsAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'cancel-subscriptions',
    title: 'Cancel or transfer subscriptions and direct debits',
    description: 'Their bank statements are the easiest place to spot regular payments: TV licence, phone contracts, broadband, streaming services, gym memberships, insurance policies, charity donations, magazines, breakdown cover. Each one has to be cancelled separately, so this is a job to work through gradually rather than in one sitting.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 120,
    showIf: (a: A) => deceasedIsAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'notify-utilities',
    title: 'Notify utility companies',
    description: 'Contact the gas, electricity, and water providers to close or transfer the accounts. Take meter readings on the date of death if you can. If you are taking the property on, ask for the accounts to be put into your name.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 60,
    showIf: (a: A) => deceasedIsAdult(a) && a.propertyStatus !== 'noProperty' && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'deal-with-vehicle',
    title: 'Deal with the vehicle',
    description: 'Notify the DVLA (Tell Us Once does this for you). Contact the insurer as soon as you can. Please do not drive the car in the meantime: a motor policy usually ends when the policyholder passes away, so driving it would leave you uninsured even though the policy looks live. Arrange temporary cover in your own name, check whether your own policy lets you drive other cars, or declare the vehicle SORN and leave it off the road until things are settled. If you plan to sell it, you will usually need probate first, unless the value is below the bank\'s threshold. The V5C logbook will also need updating.',
    category: 'financial',
    priority: 'normal',
    estimatedMinutes: 45,
    url: 'https://www.gov.uk/tell-dvla-about-bereavement',
    showIf: (a: A) => a.hasVehicle === true,
  },
  {
    id: 'child-benefit-transfer',
    title: 'Transfer or claim Child Benefit',
    description: 'If the person who passed away was receiving Child Benefit for children under 16 (or under 20 in education), the surviving parent or guardian should contact HMRC to transfer or claim the benefit. The Child Benefit helpline is 0300 200 3100.',
    category: 'financial',
    priority: 'important',
    estimatedMinutes: 30,
    phoneNumber: '0300 200 3100',
    showIf: (a: A) => a.hasDependentsUnder18 === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'guardian-arrangements',
    title: 'Check guardianship arrangements for children',
    description: 'If the person who passed away was a sole parent, the will may name a guardian, so it is worth checking. If there is no will, or no guardian named, you may need to apply to the court for a Child Arrangements Order. A family law solicitor or Citizens Advice can talk you through what happens next.',
    category: 'legal',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: (a: A) => a.hasDependentsUnder18 === true && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'hmrc-final-tax-return',
    title: 'File the final tax return with HMRC',
    description: 'If they were self-employed, had rental income, or other untaxed income, a final Self Assessment tax return needs to be filed for the period from the start of the tax year to the date of death. HMRC\'s bereavement helpline on 0300 200 3300 deals with exactly this and can tell you what is needed.',
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
    description: 'Probate gives you the legal right to deal with the estate. There are a few steps: value the estate, report the estate values on the probate application (for excepted estates below the threshold) or complete form IHT400 (if above), submit the probate application (PA1P form), then pay the court fee (£526 for estates over £5,000, free if under). Many people do this themselves, and you can use a solicitor if you would rather not. The grant usually arrives within 12 weeks of applying.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 240,
    url: 'https://www.gov.uk/applying-for-probate',
    showIf: (a: A) => deceasedIsAdult(a) && a.hasWill === 'yes' && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'apply-letters-admin',
    title: 'Apply for Letters of Administration',
    description: 'When there is no will, you apply for Letters of Administration rather than probate. The process is much the same: value the estate, complete the IHT form, submit the application (PA1A form), and pay the court fee (£526 for estates over £5,000). Whoever applies is called the "administrator", and it is usually the closest relative.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 240,
    url: 'https://www.gov.uk/applying-for-probate',
    showIf: (a: A) => deceasedIsAdult(a) && a.hasWill === 'no' && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'apply-confirmation-scotland',
    title: 'Apply for Confirmation (Scotland)',
    description: 'In Scotland, the equivalent of probate is called Confirmation, and you apply to the Sheriff Court. If the estate is under £36,000 and straightforward, you can use the simplified "small estate" process. The court fee varies by estate value.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 240,
    url: 'https://www.scotcourts.gov.uk/taking-action/dealing-with-a-deceaseds-estate-in-scotland/',
    showIf: (a: A) => isScotland(a) && deceasedIsAdult(a) && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'intestacy-rules',
    title: 'Understand who inherits without a will (intestacy rules)',
    description: 'Without a will, the law decides who inherits. In England and Wales, the spouse or civil partner receives the first £322,000 plus personal belongings, and half of what is left. The children share the other half. If there is no surviving spouse, the children inherit everything equally. It is worth knowing that unmarried partners, stepchildren, and friends have no automatic right to inherit.',
    category: 'legal',
    priority: 'important',
    estimatedMinutes: 30,
    url: 'https://www.gov.uk/inherits-someone-dies-without-will',
    showIf: (a: A) => deceasedIsAdult(a) && a.hasWill === 'no',
  },
  {
    id: 'unmarried-partner-warning',
    title: 'Get legal advice about your rights as an unmarried partner',
    description: 'As an unmarried partner, you do not automatically inherit anything under intestacy rules, however long you lived together. You may still be able to make a claim under the Inheritance (Provision for Family and Dependants) Act 1975 if you were financially dependent on them. This is one worth getting legal advice on early.',
    category: 'legal',
    priority: 'urgent',
    estimatedMinutes: 60,
    showIf: (a: A) => isUnmarriedPartner(a) && a.hasWill === 'no',
    supportMessage: 'This is a hard thing to face on top of everything else. Citizens Advice and some solicitors offer a free first consultation.',
  },
  {
    id: 'inheritance-tax',
    title: 'Check if inheritance tax applies',
    description: 'Inheritance tax is charged at 40% on the value of the estate above £325,000 (the nil-rate band). If they left their home to their children or grandchildren, there is an additional £175,000 allowance (the residence nil-rate band). A spouse can pass on their unused allowance, which can bring the combined threshold to £1 million. Where it applies, inheritance tax must be paid within 6 months of death. The form you need is IHT400.',
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
    description: 'As an executor or administrator, placing a notice in The London Gazette (and a local newspaper) under the Trustee Act 1925 protects you personally from liability for debts you had no way of knowing about. You need to wait at least 2 months after placing the notice before distributing any assets. The Gazette notice costs £96.55 plus VAT, so around £116.',
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
    description: 'Many home insurance policies become void once a property has been unoccupied for more than 30 days. Let the insurer know what has happened; they deal with this often. You may need to switch to a specialist unoccupied property policy. This one is worth doing sooner rather than later, so the home is never left uninsured.',
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
    description: 'Contact the mortgage company with the death certificate. Ask about: mortgage protection insurance, which may pay off the mortgage; whether payments can be paused while probate goes through; and what happens next. A joint mortgage usually continues with the surviving owner.',
    category: 'property',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.hasMortgage === true,
  },
  {
    id: 'council-tax-exemption',
    title: 'Apply for council tax exemption on the empty property',
    description: 'A property left empty after someone passes away is exempt from council tax from the date of death until probate is granted, and for 6 months after that. Contact the local council to apply. Tell Us Once may start this off, but it is worth following up to make sure it has gone through.',
    category: 'property',
    priority: 'normal',
    estimatedMinutes: 20,
    showIf: (a: A) => a.propertyStatus === 'ownedSole',
  },
  {
    id: 'notify-landlord',
    title: 'Notify the landlord',
    description: 'Contact the landlord or letting agent, and have a look at the tenancy agreement to see what it says. Some tenancies end; others can be transferred to a spouse or family member living at the property. Give notice if it is needed, and arrange a time to return the keys and clear the property.',
    category: 'property',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.propertyStatus === 'renting',
  },
  {
    id: 'notify-council-housing',
    title: 'Notify the council or housing association',
    description: 'Contact the council or housing association about the tenancy. A spouse, civil partner, or family member living at the property may have the right to succeed (take over) the tenancy. This varies depending on the type of tenancy and local rules, so ask them what applies.',
    category: 'property',
    priority: 'important',
    estimatedMinutes: 30,
    showIf: (a: A) => a.propertyStatus === 'councilHousing',
  },
  {
    id: 'land-registry',
    title: 'Update the Land Registry',
    description: 'If the property was owned jointly as "joint tenants", it passes automatically to the surviving owner. Send a copy of the death certificate to the Land Registry with form DJP. If it was held as "tenants in common", or in their sole name, the property forms part of the estate and probate is needed before it can be transferred or sold.',
    category: 'property',
    priority: 'normal',
    estimatedMinutes: 30,
    url: 'https://www.gov.uk/registering-land-or-property-with-land-registry',
    showIf: (a: A) => ownsProperty(a),
  },
  {
    id: 'redirect-post',
    title: 'Redirect their post',
    description: 'A Royal Mail redirection forwards their post to your address, from £45 for 3 months, with a discounted concession rate if you receive Universal Credit or Pension Credit. It quietly helps you catch any letters, bills, or accounts you did not know about. You can set it up online or at a post office.',
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
    description: 'Every platform handles this differently. Facebook and Instagram accounts can be memorialised or deleted. Google has an Inactive Account Manager, and Apple has a Digital Legacy programme. Most services will ask for a death certificate. It is also worth cancelling any paid subscriptions (Netflix, Spotify, Amazon Prime and so on). None of this is urgent, so come back to it when you feel ready.',
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
    description: 'Once probate is granted and all the debts are paid, the remaining assets are shared out according to the will (or the intestacy rules). Keep clear records as you go, and send estate accounts to all the beneficiaries. Do not distribute anything until at least 2 months after the statutory notices were placed.',
    category: 'ongoing',
    priority: 'normal',
    estimatedMinutes: 240,
    showIf: (a: A) => deceasedIsAdult(a) && a.estimatedEstateValue !== 'under5k' && isAdult(a) && isNotFriendUnlessNextOfKin(a),
  },
  {
    id: 'first-anniversary',
    title: 'Prepare for difficult dates',
    description: 'Birthdays, anniversaries, and the first year without them can bring grief back suddenly. That is completely normal. It can help to think ahead about how you would like to spend those days, and who you would like around you. Cruse Bereavement Support (0808 808 1677) are there if you would like to talk to someone.',
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
