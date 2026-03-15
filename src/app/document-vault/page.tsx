'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

type DocumentItem = {
  id: string;
  name: string;
  tip: string;
};

type DocumentCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: DocumentItem[];
};

const CATEGORIES: DocumentCategory[] = [
  {
    id: 'personal-id',
    title: 'Personal Identification',
    icon: '🪪',
    description: 'Official documents that prove identity and status. You will need these for almost every notification and claim.',
    items: [
      {
        id: 'death-certificate',
        name: 'Death certificate (original + certified copies)',
        tip: 'You will need 5 to 10 certified copies. Order extras when you register the death at the register office. Each copy costs around £11. Many organisations will not accept photocopies.',
      },
      {
        id: 'will',
        name: 'Will',
        tip: 'Check the person\'s home (filing cabinet, safe, desk drawers), their solicitor, their bank\'s safe deposit box, and the National Will Register (certainty.co.uk). Some people also store wills with Will Aid or local probate registries.',
      },
      {
        id: 'birth-certificate',
        name: 'Birth certificate of the deceased',
        tip: 'Usually kept at home with other important papers. If lost, order a replacement from the General Register Office (gro.gov.uk) for £11. In Scotland, apply to National Records of Scotland.',
      },
      {
        id: 'marriage-certificate',
        name: 'Marriage or civil partnership certificate',
        tip: 'Needed for pension claims, life insurance, and probate. If lost, order a replacement from the register office where the ceremony took place, or from gro.gov.uk (£11).',
      },
      {
        id: 'ni-number',
        name: 'National Insurance number',
        tip: 'Found on payslips, P60s, tax letters from HMRC, or benefit letters from DWP. You can also call the HMRC NI helpline on 0300 200 3500.',
      },
      {
        id: 'passport',
        name: 'Passport',
        tip: 'Check at home. HM Passport Office will cancel it when notified via Tell Us Once. Do not send it off yourself; keep it until you have finished using it as ID for banks and insurers.',
      },
      {
        id: 'driving-licence',
        name: 'Driving licence',
        tip: 'DVLA will be notified via Tell Us Once if you use the service. Otherwise, return it to DVLA, Swansea, SA99 1AB. Keep a note of the licence number first.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Documents',
    icon: '💷',
    description: 'Bank accounts, savings, investments, and debts. Gather as much as you can so nothing is missed when settling the estate.',
    items: [
      {
        id: 'bank-details',
        name: 'Bank and building society account details',
        tip: 'Check for statements, debit cards, chequebooks, and online banking details. Look for letters from banks in recent post. You can also write to the major banks to ask if the person held any accounts.',
      },
      {
        id: 'mortgage-documents',
        name: 'Mortgage documents',
        tip: 'The mortgage lender will have a record. Check for paperwork at home, or look at bank statements for monthly payments. Many mortgages include life insurance that pays off the balance.',
      },
      {
        id: 'life-insurance',
        name: 'Life insurance policies',
        tip: 'Check paperwork at home, bank statements for premium payments, and contact the person\'s employer (many workplace schemes include life cover). The Association of British Insurers can help trace lost policies.',
      },
      {
        id: 'pension-details',
        name: 'Pension details (state, workplace, private)',
        tip: 'Check payslips for workplace pension deductions. Contact the Pension Tracing Service (gov.uk/find-pension-contact-details) to find lost pensions. State pension: call DWP on 0800 731 0469.',
      },
      {
        id: 'premium-bonds',
        name: 'Premium Bonds and NS&I certificates',
        tip: 'Check for certificates or letters from NS&I at home. Contact NS&I on 08085 007 007 or at nsandi.com. Premium Bonds stay in draws for 12 months after death.',
      },
      {
        id: 'shares-investments',
        name: 'Share certificates and investment statements',
        tip: 'Check for certificates, ISA statements, or letters from fund managers. Look at bank statements for dividends. Contact the Unclaimed Assets Register if you think there are lost investments.',
      },
      {
        id: 'tax-returns',
        name: 'Tax returns, P60s, and HMRC correspondence',
        tip: 'Check home files and online HMRC accounts. The last P60 shows income and tax paid in the final tax year. You will need these to file the final Self Assessment return if required.',
      },
      {
        id: 'benefit-letters',
        name: 'Benefit letters (if receiving any)',
        tip: 'Check for letters from DWP, the local council (Housing Benefit, Council Tax Support), or the NHS (exemption certificates). These help identify what needs to be cancelled or transferred.',
      },
    ],
  },
  {
    id: 'property',
    title: 'Property and Home',
    icon: '🏡',
    description: 'Documents related to where the person lived, from deeds to utility bills. These are needed for probate and transferring services.',
    items: [
      {
        id: 'property-deeds',
        name: 'Property deeds or tenancy agreement',
        tip: 'If the property is owned, deeds are usually held by the mortgage lender or solicitor. Check the Land Registry (gov.uk/search-property-information-service). If rented, find the tenancy agreement and contact the landlord.',
      },
      {
        id: 'council-tax',
        name: 'Council tax bill',
        tip: 'Found in recent post or online council account. Notify the council promptly, as you may be entitled to a discount or exemption while the property is empty. The property is exempt from council tax for up to 6 months after a death.',
      },
      {
        id: 'utility-gas',
        name: 'Gas account details',
        tip: 'Check recent bills, direct debits on bank statements, or the meter for the supplier name. You can also check who supplies gas to an address at findmysupplier.energy.',
      },
      {
        id: 'utility-electric',
        name: 'Electricity account details',
        tip: 'Check recent bills, direct debits on bank statements, or the meter for the supplier name. Some people have gas and electric with the same supplier, but not always.',
      },
      {
        id: 'utility-water',
        name: 'Water account details',
        tip: 'The water company depends on the property location. Check recent bills or contact the regional water company directly. Water bills are usually paid quarterly.',
      },
      {
        id: 'broadband-phone',
        name: 'Broadband and phone contracts',
        tip: 'Check bank statements for monthly payments, and look for a router (the provider name is usually on it). Mobile phone contracts: check the phone itself or recent direct debits.',
      },
      {
        id: 'home-insurance',
        name: 'Home insurance (buildings and contents)',
        tip: 'Check paperwork at home and bank statements for annual or monthly payments. Notify the insurer urgently if the property will be empty, as policies often have a 30-day unoccupied limit.',
      },
    ],
  },
  {
    id: 'vehicle',
    title: 'Vehicle and Transport',
    icon: '🚗',
    description: 'If the person owned a vehicle, you will need these documents to notify insurers, transfer or sell the car, and update the DVLA.',
    items: [
      {
        id: 'v5c',
        name: 'Vehicle registration document (V5C)',
        tip: 'Usually kept in the car or at home. You need this to transfer ownership or notify DVLA the vehicle is off the road (SORN). Never leave it in the car if parked on a public road.',
      },
      {
        id: 'car-insurance',
        name: 'Car insurance certificate',
        tip: 'Check the glovebox, home paperwork, or bank statements for the insurer. Cancel or transfer the policy promptly. You may be entitled to a pro-rata refund of the remaining premium.',
      },
      {
        id: 'mot-certificate',
        name: 'MOT certificate',
        tip: 'Check the glovebox or online at gov.uk/check-mot-history. The MOT stays valid but must be in date if the car is being driven or sold.',
      },
    ],
  },
  {
    id: 'other',
    title: 'Other Important Documents',
    icon: '📋',
    description: 'Miscellaneous documents that can be easy to overlook but are important for a complete picture.',
    items: [
      {
        id: 'funeral-plan',
        name: 'Funeral plan or wishes document',
        tip: 'Check at home for a prepaid funeral plan, a letter of wishes, or instructions left with a solicitor. Some people arrange and pay for funerals in advance through companies like Dignity or the Co-op.',
      },
      {
        id: 'medical-records',
        name: 'Medical records, prescriptions, and GP details',
        tip: 'The GP surgery holds the main records. These may be needed for ongoing insurance claims, cause of death queries, or pension applications that require medical evidence.',
      },
      {
        id: 'digital-accounts',
        name: 'Digital accounts (email, social media, subscriptions)',
        tip: 'Check the person\'s phone, computer, and any password manager they used. Look at bank statements for subscription payments (Netflix, Amazon, Spotify, etc.). Facebook has a memorialisation option; Google has an Inactive Account Manager.',
      },
    ],
  },
];

const ALL_ITEMS = CATEGORIES.flatMap((cat) => cat.items);
const TOTAL_ITEMS = ALL_ITEMS.length;

const STORAGE_KEY = 'helpafterloss-document-vault';

type VaultState = {
  checked: Record<string, boolean>;
  notes: Record<string, string>;
};

function loadState(): VaultState {
  if (typeof window === 'undefined') return { checked: {}, notes: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return { checked: {}, notes: {} };
}

function saveState(state: VaultState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export default function DocumentVaultPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const state = loadState();
    setChecked(state.checked);
    setNotes(state.notes);
    setLoaded(true);
  }, []);

  const persist = useCallback((newChecked: Record<string, boolean>, newNotes: Record<string, string>) => {
    saveState({ checked: newChecked, notes: newNotes });
  }, []);

  const toggleChecked = (id: string) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    persist(next, notes);
  };

  const updateNote = (id: string, value: string) => {
    const next = { ...notes, [id]: value };
    setNotes(next);
    persist(checked, next);
  };

  const toggleNoteExpanded = (id: string) => {
    setExpandedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const foundCount = Object.values(checked).filter(Boolean).length;
  const progressPercent = TOTAL_ITEMS > 0 ? Math.round((foundCount / TOTAL_ITEMS) * 100) : 0;

  const resetAll = () => {
    if (window.confirm('This will clear all your ticked items and notes. Are you sure?')) {
      setChecked({});
      setNotes({});
      setExpandedNotes({});
      saveState({ checked: {}, notes: {} });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Document Vault Checklist' }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Document Vault Checklist
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-4">
        When someone dies, there are many important documents to find and organise. It is easy to forget things when you are going through so much. Use this checklist to keep track of what you have found and what you still need.
      </p>
      <p className="text-sm text-muted mb-8">
        Your progress is saved automatically on this device. Nothing is sent anywhere.
      </p>

      {/* Progress bar */}
      {loaded && (
        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-foreground">
              {foundCount} of {TOTAL_ITEMS} documents found
            </p>
            <p className="text-sm font-semibold text-primary">{progressPercent}%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-primary h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {foundCount === TOTAL_ITEMS && (
            <p className="text-sm text-success font-medium mt-3">
              You have found everything. Well done. That is a huge weight off your shoulders.
            </p>
          )}
          {foundCount > 0 && foundCount < TOTAL_ITEMS && (
            <p className="text-sm text-muted mt-3">
              You are making good progress. Take your time with the rest.
            </p>
          )}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mb-8 no-print">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          Print this checklist
        </button>
        <button
          onClick={resetAll}
          className="px-4 py-2 bg-white text-muted text-sm font-medium rounded-lg border border-border hover:bg-gray-50 transition-colors"
        >
          Reset all
        </button>
      </div>

      {/* Print header */}
      <div className="hidden print:block mb-8 pb-4 border-b border-gray-300">
        <p className="text-sm text-gray-500">Help After Loss - helpafterloss.co.uk</p>
        <p className="text-base font-semibold text-gray-800 mt-1">Document Vault Checklist</p>
        <p className="text-xs text-gray-400 mt-1">
          {foundCount} of {TOTAL_ITEMS} documents found
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-8 mb-10">
        {CATEGORIES.map((category) => {
          const catCheckedCount = category.items.filter((item) => checked[item.id]).length;
          const catTotal = category.items.length;
          const allDone = catCheckedCount === catTotal;

          return (
            <section key={category.id} aria-labelledby={`heading-${category.id}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl" role="img" aria-hidden="true">{category.icon}</span>
                <div>
                  <h2 id={`heading-${category.id}`} className="text-xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-xs text-muted">
                    {catCheckedCount} of {catTotal} found
                    {allDone && <span className="text-success ml-2">Complete</span>}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">{category.description}</p>

              <div className="space-y-3">
                {category.items.map((item) => {
                  const isChecked = !!checked[item.id];
                  const noteExpanded = !!expandedNotes[item.id];
                  const hasNote = !!(notes[item.id] && notes[item.id].trim());

                  return (
                    <div
                      key={item.id}
                      className={`bg-card rounded-xl border transition-colors ${
                        isChecked ? 'border-success/40 bg-success-light/30' : 'border-border'
                      } p-4`}
                    >
                      {/* Checkbox row */}
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleChecked(item.id)}
                          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-success border-success text-white'
                              : 'border-gray-300 hover:border-primary'
                          }`}
                          aria-label={isChecked ? `Mark ${item.name} as not found` : `Mark ${item.name} as found`}
                          role="checkbox"
                          aria-checked={isChecked}
                        >
                          {isChecked && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${isChecked ? 'text-success line-through' : 'text-foreground'}`}>
                            {item.name}
                          </p>
                          <p className="text-xs text-muted leading-relaxed mt-1">
                            <span className="font-medium text-primary-dark">Where to look:</span>{' '}
                            {item.tip}
                          </p>
                        </div>
                      </div>

                      {/* Notes toggle and field */}
                      <div className="ml-8 mt-2">
                        <button
                          onClick={() => toggleNoteExpanded(item.id)}
                          className="text-xs text-muted hover:text-primary transition-colors no-print"
                        >
                          {noteExpanded ? 'Hide note' : hasNote ? 'Show note' : 'Add a note'}
                        </button>
                        {/* Print: show note if it has content */}
                        {hasNote && !noteExpanded && (
                          <p className="hidden print:block text-xs text-muted mt-1 italic">
                            Note: {notes[item.id]}
                          </p>
                        )}
                        {noteExpanded && (
                          <textarea
                            value={notes[item.id] || ''}
                            onChange={(e) => updateNote(item.id, e.target.value)}
                            placeholder="Add your own notes here, for example where you found it or a reference number..."
                            className="mt-2 w-full px-3 py-2 text-xs bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-y"
                            rows={2}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Helpful tips */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-amber-900 mb-3">Helpful tips</h2>
        <ul className="text-sm text-amber-800 leading-relaxed space-y-2">
          <li>
            <span className="font-medium">Do not rush.</span> You do not need to find everything at once. Focus on the most urgent items first: death certificate, will, and bank details.
          </li>
          <li>
            <span className="font-medium">Check recent post.</span> Letters from banks, insurers, pension providers, and HMRC often reveal accounts you did not know about.
          </li>
          <li>
            <span className="font-medium">Search the whole house.</span> Check filing cabinets, desk drawers, kitchen drawers, bedside tables, wardrobes, and even inside books. People keep important papers in surprising places.
          </li>
          <li>
            <span className="font-medium">Ask the solicitor.</span> If the person had a solicitor, they may hold the will, property deeds, or other important documents.
          </li>
          <li>
            <span className="font-medium">Check bank statements.</span> Direct debits and standing orders reveal insurance policies, subscriptions, memberships, and other financial commitments.
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="bg-primary-light rounded-xl p-5 mb-10">
        <p className="text-sm text-primary-dark leading-relaxed">
          This checklist covers the most common documents needed after a death in the UK. Your situation may require additional documents not listed here. If the estate is complex (business interests, overseas assets, trusts), consider speaking to a solicitor or probate specialist.
        </p>
      </div>

      {/* Related guides */}
      <RelatedGuides
        currentPath="/document-vault"
        guides={['/checklist', '/print-checklist', '/probate', '/notify']}
      />

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-8 text-center no-print">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need a personalised step-by-step guide?</h2>
        <p className="text-muted mb-6">
          Answer a few questions and we will build a checklist of everything you need to do, tailored to your exact situation.
        </p>
        <Link
          href="/start"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
        >
          Get Your Personalised Guide
        </Link>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://helpafterloss.co.uk' },
              { '@type': 'ListItem', position: 2, name: 'Document Vault Checklist', item: 'https://helpafterloss.co.uk/document-vault' },
            ],
          }),
        }}
      />
    </div>
  );
}
