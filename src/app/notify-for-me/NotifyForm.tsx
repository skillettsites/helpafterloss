'use client';

import { useState } from 'react';
import { bereavementContacts } from '@/lib/bereavement-contacts';

const emailableContacts = bereavementContacts.filter(c => c.bereavementEmail);

const categoryLabels: Record<string, string> = {
  bank: 'Banks',
  'building-society': 'Building Societies',
  energy: 'Energy Providers',
  telecoms: 'Telecoms',
  water: 'Water Companies',
  insurance: 'Insurance & Pensions',
  government: 'Government',
};

// Group by category
const grouped = emailableContacts.reduce((acc, contact) => {
  if (!acc[contact.category]) acc[contact.category] = [];
  acc[contact.category].push(contact);
  return acc;
}, {} as Record<string, typeof emailableContacts>);

interface OrgSelection {
  slug: string;
  name: string;
  email: string;
  category: string;
  accountNumber: string;
  sortCode: string;
  customerReference: string;
}

interface SendResult {
  organisation: string;
  success: boolean;
  error?: string;
}

export function NotifyForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [sending, setSending] = useState(false);
  const [results, setResults] = useState<SendResult[] | null>(null);
  const [error, setError] = useState('');

  // Step 1: Your details
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourAddress, setYourAddress] = useState('');
  const [yourPhone, setYourPhone] = useState('');
  const [relationship, setRelationship] = useState('');
  const [deceasedName, setDeceasedName] = useState('');
  const [dateOfDeath, setDateOfDeath] = useState('');

  // Step 2: Organisation selection
  const [selections, setSelections] = useState<Record<string, OrgSelection>>({});

  function toggleOrg(contact: typeof emailableContacts[0]) {
    setSelections(prev => {
      const next = { ...prev };
      if (next[contact.slug]) {
        delete next[contact.slug];
      } else {
        next[contact.slug] = {
          slug: contact.slug,
          name: contact.name,
          email: contact.bereavementEmail!,
          category: contact.category,
          accountNumber: '',
          sortCode: '',
          customerReference: '',
        };
      }
      return next;
    });
  }

  function updateOrgField(slug: string, field: 'accountNumber' | 'sortCode' | 'customerReference', value: string) {
    setSelections(prev => ({
      ...prev,
      [slug]: { ...prev[slug], [field]: value },
    }));
  }

  function selectAll() {
    const allSelected: Record<string, OrgSelection> = {};
    emailableContacts.forEach(c => {
      allSelected[c.slug] = {
        slug: c.slug,
        name: c.name,
        email: c.bereavementEmail!,
        category: c.category,
        accountNumber: '',
        sortCode: '',
        customerReference: '',
      };
    });
    setSelections(allSelected);
  }

  function selectNone() {
    setSelections({});
  }

  const selectedCount = Object.keys(selections).length;

  function canProceedStep1() {
    return yourName && yourEmail && yourAddress && yourPhone && relationship && deceasedName && dateOfDeath;
  }

  async function handleSend() {
    if (selectedCount === 0) return;

    setSending(true);
    setError('');
    setResults(null);

    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          yourName,
          yourEmail,
          yourAddress,
          yourPhone,
          relationship,
          deceasedName,
          dateOfDeath,
          organisations: Object.values(selections),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setResults(data.results);
      setStep(3);
    } catch {
      setError('Could not connect to the server. Please check your internet connection and try again.');
    } finally {
      setSending(false);
    }
  }

  // Step 3: Results
  if (step === 3 && results) {
    const successes = results.filter(r => r.success);
    const failures = results.filter(r => !r.success);

    return (
      <div className="space-y-6">
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-2">
            {successes.length} email{successes.length !== 1 ? 's' : ''} sent successfully
          </h2>
          <p className="text-muted mb-4">
            You have been CC&apos;d on {successes.length === 1 ? 'this email' : 'all emails'}. Check your inbox at <strong>{yourEmail}</strong> to see what was sent. Any replies from these organisations will come directly to your inbox.
          </p>
          {successes.length > 0 && (
            <ul className="space-y-1">
              {successes.map(r => (
                <li key={r.organisation} className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">&#10003;</span>
                  <span>{r.organisation}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {failures.length > 0 && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-2">
              {failures.length} email{failures.length !== 1 ? 's' : ''} could not be sent
            </h3>
            <p className="text-muted text-sm mb-3">
              You can contact these organisations directly using our <a href="/notify" className="text-primary underline">phone directory</a> or <a href="/template-letters" className="text-primary underline">template letters</a>.
            </p>
            <ul className="space-y-1">
              {failures.map(r => (
                <li key={r.organisation} className="flex items-center gap-2 text-sm">
                  <span className="text-red-600">&#10007;</span>
                  <span>{r.organisation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold text-foreground mb-2">What happens next</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>Most organisations will reply within 5 to 10 working days</li>
            <li>They may ask you to send a copy of the death certificate by post or upload it online</li>
            <li>Keep an eye on your inbox and spam folder for responses</li>
            <li>If you do not hear back within two weeks, follow up by phone using our <a href="/call-scripts" className="text-primary underline">call scripts</a></li>
          </ul>
        </div>

        <button
          onClick={() => { setStep(1); setResults(null); setSelections({}); }}
          className="text-primary underline text-sm"
        >
          Start again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress indicator */}
      <div className="flex items-center gap-3 text-sm">
        <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-border text-muted'}`}>1</span>
        <span className={step >= 1 ? 'text-foreground font-medium' : 'text-muted'}>Your details</span>
        <span className="text-border">/</span>
        <span className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-border text-muted'}`}>2</span>
        <span className={step >= 2 ? 'text-foreground font-medium' : 'text-muted'}>Select organisations</span>
      </div>

      {/* Step 1: Your details */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Your details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your full name *</label>
                <input type="text" value={yourName} onChange={e => setYourName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Jane Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your email address *</label>
                <input type="email" value={yourEmail} onChange={e => setYourEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="jane@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1">Your postal address *</label>
                <textarea value={yourAddress} onChange={e => setYourAddress(e.target.value)} rows={2}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="123 Example Street, London, SW1A 1AA" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your phone number *</label>
                <input type="tel" value={yourPhone} onChange={e => setYourPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="07700 900000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your relationship to the deceased *</label>
                <select value={relationship} onChange={e => setRelationship(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select...</option>
                  <option value="executor of the will">Executor of the will</option>
                  <option value="administrator of the estate">Administrator of the estate</option>
                  <option value="spouse or civil partner">Spouse or civil partner</option>
                  <option value="son or daughter">Son or daughter</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Brother or sister</option>
                  <option value="next of kin">Next of kin</option>
                  <option value="solicitor acting on behalf of the estate">Solicitor</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">About the person who has died</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Their full name *</label>
                <input type="text" value={deceasedName} onChange={e => setDeceasedName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Date of death *</label>
                <input type="date" value={dateOfDeath} onChange={e => setDateOfDeath(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          </div>

          <button
            onClick={() => { if (canProceedStep1()) setStep(2); }}
            disabled={!canProceedStep1()}
            className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next: Select organisations
          </button>
        </div>
      )}

      {/* Step 2: Select organisations */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-muted">
              Select the organisations you want us to email. You can add account details for each one (optional).
            </p>
            <div className="flex gap-2 text-sm">
              <button onClick={selectAll} className="text-primary underline">Select all</button>
              <span className="text-border">|</span>
              <button onClick={selectNone} className="text-primary underline">Clear</button>
            </div>
          </div>

          {Object.entries(grouped).map(([category, contacts]) => (
            <div key={category} className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-foreground mb-3">{categoryLabels[category] || category}</h3>
              <div className="space-y-3">
                {contacts.map(contact => {
                  const isSelected = !!selections[contact.slug];
                  return (
                    <div key={contact.slug} className="space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleOrg(contact)}
                          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <div>
                          <span className="font-medium text-foreground">{contact.name}</span>
                          <span className="text-xs text-muted ml-2">({contact.bereavementEmail})</span>
                        </div>
                      </label>

                      {isSelected && (
                        <div className="ml-7 grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {(category === 'bank' || category === 'building-society') ? (
                            <>
                              <input
                                type="text"
                                placeholder="Account number (optional)"
                                value={selections[contact.slug].accountNumber}
                                onChange={e => updateOrgField(contact.slug, 'accountNumber', e.target.value)}
                                className="px-2 py-1.5 text-sm rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                              />
                              <input
                                type="text"
                                placeholder="Sort code (optional)"
                                value={selections[contact.slug].sortCode}
                                onChange={e => updateOrgField(contact.slug, 'sortCode', e.target.value)}
                                className="px-2 py-1.5 text-sm rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                              />
                            </>
                          ) : (
                            <input
                              type="text"
                              placeholder="Customer/account reference (optional)"
                              value={selections[contact.slug].customerReference}
                              onChange={e => updateOrgField(contact.slug, 'customerReference', e.target.value)}
                              className="px-2 py-1.5 text-sm rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary sm:col-span-2"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Preview section */}
          {selectedCount > 0 && (
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-foreground mb-2">Preview email</h3>
              <p className="text-xs text-muted mb-3">This is what will be sent to each organisation (customised per category):</p>
              <div className="bg-background rounded-lg border border-border p-4 text-sm text-muted whitespace-pre-wrap font-mono leading-relaxed">
                {(() => {
                  const firstOrg = Object.values(selections)[0];
                  if (!firstOrg) return '';
                  const lines: string[] = [];
                  lines.push('Dear Sir or Madam,');
                  lines.push('');
                  lines.push(`I am writing to notify you of the death of ${deceasedName}, who held an account or policy with ${firstOrg.name}.`);
                  lines.push('');
                  lines.push(`${deceasedName} passed away on ${dateOfDeath}.`);
                  lines.push('');
                  if (firstOrg.accountNumber || firstOrg.sortCode || firstOrg.customerReference) {
                    lines.push('The account details I am aware of are:');
                    if (firstOrg.accountNumber) lines.push(`Account/Policy number: ${firstOrg.accountNumber}`);
                    if (firstOrg.sortCode) lines.push(`Sort code: ${firstOrg.sortCode}`);
                    if (firstOrg.customerReference) lines.push(`Customer reference: ${firstOrg.customerReference}`);
                    lines.push('');
                  }
                  lines.push(`I am the ${relationship} and would be grateful if you could advise me of the next steps.`);
                  lines.push('');
                  lines.push('[Category-specific requests included in the actual email]');
                  lines.push('');
                  lines.push('Yours faithfully,');
                  lines.push(yourName);
                  return lines.join('\n');
                })()}
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 text-muted hover:text-foreground transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleSend}
              disabled={selectedCount === 0 || sending}
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : `Send ${selectedCount} email${selectedCount !== 1 ? 's' : ''}`}
            </button>
            {selectedCount > 0 && (
              <span className="text-sm text-muted">
                You will be CC&apos;d on {selectedCount === 1 ? 'this email' : 'all emails'}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
