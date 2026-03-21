import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Bank Accounts After Death: What Happens and What to Do',
  description: 'What happens to bank accounts when someone dies in the UK. How to find accounts, notify banks, release money without probate, and close accounts. Includes bank threshold comparison.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/bank-accounts-after-death' },
  openGraph: {
    title: 'Bank Accounts After Death: What Happens and What to Do',
    description: 'How to find, notify, and close bank accounts after someone dies. Includes probate thresholds for major UK banks.',
    url: 'https://helpafterloss.co.uk/guides/bank-accounts-after-death',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank Accounts After Death: What Happens and What to Do',
    description: 'How to find, notify, and close bank accounts after someone dies in the UK.',
  },
};

const SECTIONS = [
  {
    title: 'What happens immediately',
    content: 'When a bank is told that an account holder has died, it freezes the account straight away. No money can go in or out. Standing orders and direct debits are cancelled. If any payments bounce as a result, the bank will not charge fees on the deceased\'s account. This is standard practice across all UK banks and building societies.',
  },
  {
    title: 'Sole accounts vs joint accounts',
    content: 'For sole accounts (in the deceased\'s name only), the bank freezes the account until probate is granted or the bank agrees to release the funds. For joint accounts, the money passes automatically to the surviving account holder under the "right of survivorship." The surviving holder keeps full access to the account and the balance does not form part of the estate for probate purposes, though it may still count for inheritance tax.',
  },
  {
    title: 'How to find all their accounts',
    content: 'Start by checking bank statements, letters, and emails at home. Look through filing cabinets, drawers, and any paperwork folders. Check for banking apps on their phone or tablet. If you think there may be accounts you cannot find, you can use a credit reference agency deceased search through Experian, Equifax, or TransUnion. The Bereavement Register and individual banks can also help trace forgotten accounts. Building societies, NS&I Premium Bonds, and credit union accounts are commonly overlooked.',
  },
  {
    title: 'The Death Notification Service',
    content: 'The Death Notification Service (deathnotificationservice.co.uk) lets you notify multiple banks and building societies of a death in one go. You fill in a single online form with the deceased\'s details and select which institutions to notify. It covers over 40 banks and building societies. It is free to use. Each bank will then contact you separately with their own requirements for closing the account and releasing funds.',
  },
  {
    title: 'Releasing money without probate',
    content: 'Most banks will release money from a deceased person\'s account without a Grant of Probate if the balance is below a certain threshold. Each bank sets its own limit. Some banks will ask you to sign an indemnity form instead, which means you agree to return the money if a valid claim is made against the estate later. If the account balance is above the bank\'s threshold, you will need to apply for probate before the bank will release anything.',
  },
  {
    title: 'Priority funeral payments',
    content: 'Almost all UK banks will release funds to pay for a funeral before probate is granted, regardless of the account balance. You will need to provide the funeral director\'s invoice directly to the bank. The bank pays the funeral director, not you. This is widely accepted practice and you should not hesitate to ask. Some banks will also release a small amount for immediate household bills if the surviving family is in financial difficulty.',
  },
  {
    title: 'How long the process takes',
    content: 'Once probate is granted and the bank receives a sealed copy of the grant, most banks release the funds within 2 to 4 weeks. The entire process from death to receiving the money typically takes 4 to 8 weeks for accounts below the probate threshold, or 4 to 6 months if probate is needed. Delays usually happen when paperwork is incomplete or when there are multiple beneficiaries who all need to sign.',
  },
];

const THRESHOLDS = [
  { bank: 'Barclays', threshold: 'Varies (case by case)', notes: 'May release without probate at their discretion' },
  { bank: 'HSBC', threshold: 'Varies (case by case)', notes: 'Assessed individually based on account balance and complexity' },
  { bank: 'Lloyds Banking Group', threshold: '£50,000', notes: 'Covers Lloyds, Halifax, Bank of Scotland, Scottish Widows' },
  { bank: 'NatWest Group', threshold: 'Varies (case by case)', notes: 'Covers NatWest, Royal Bank of Scotland, Ulster Bank' },
  { bank: 'Santander', threshold: '£50,000', notes: 'Per account, not total across all Santander accounts' },
  { bank: 'Nationwide', threshold: 'Varies (case by case)', notes: 'Typically assessed based on the total amount held' },
  { bank: 'Monzo', threshold: '£100 without indemnity form', notes: 'Higher amounts possible with a signed indemnity form' },
  { bank: 'Starling', threshold: '£10,000', notes: 'With a signed indemnity form and death certificate' },
  { bank: 'Leeds Building Society', threshold: '£50,000', notes: 'Across all accounts held with the society' },
];

const FAQ = [
  {
    q: 'What happens to a bank account when someone dies?',
    a: 'The bank freezes the account as soon as it is notified of the death. All standing orders and direct debits are cancelled. No withdrawals or deposits can be made. The money remains in the account until either probate is granted or the bank agrees to release the funds under its small estate procedure. Joint accounts are an exception; the surviving account holder keeps full access.',
  },
  {
    q: 'Can I use the deceased\'s bank account to pay for the funeral?',
    a: 'Yes. Almost all UK banks will release funds to pay for the funeral before probate is granted. You need to provide the funeral director\'s invoice to the bank. The bank will typically pay the funeral director directly rather than giving you the money. This applies even if the account balance is above the bank\'s normal probate threshold.',
  },
  {
    q: 'Do I need probate to close a bank account?',
    a: 'Not always. If the account balance is below the bank\'s threshold (which varies from bank to bank, typically between £5,000 and £50,000), the bank may release the money with just a death certificate and proof of your identity and entitlement. If the balance is above the threshold, you will need a Grant of Probate or Letters of Administration.',
  },
  {
    q: 'What happens to a joint bank account when someone dies?',
    a: 'The money in a joint account passes automatically to the surviving account holder. The bank removes the deceased\'s name from the account and the surviving holder continues using it as normal. The money does not go through probate. However, the deceased\'s share of the joint account may still be counted for inheritance tax purposes.',
  },
  {
    q: 'How do I find all the bank accounts someone had?',
    a: 'Check their paperwork, post, email, and phone for banking apps. You can also request a deceased person\'s credit report from Experian, Equifax, or TransUnion, which will show any accounts linked to their name. The Unclaimed Assets Register (greatlakesuk.com) can help trace dormant accounts. NS&I (Premium Bonds and savings) is often overlooked, so check with them directly.',
  },
  {
    q: 'How long does it take to release money after death?',
    a: 'For small accounts below the bank\'s probate threshold, funds are usually released within 2 to 4 weeks of submitting the death certificate and required forms. For larger accounts requiring probate, the total process typically takes 4 to 6 months, as you need to wait for the Grant of Probate (currently 12 to 16 weeks) before the bank will act.',
  },
  {
    q: 'What is the Death Notification Service?',
    a: 'The Death Notification Service is a free service at deathnotificationservice.co.uk that lets you notify over 40 banks and building societies of a death through a single online form. Instead of contacting each bank separately, you fill in one form and select which institutions to notify. Each bank then contacts you with their specific requirements for closing the account.',
  },
  {
    q: 'Can banks release money without probate?',
    a: 'Yes. Most banks have a threshold below which they will release funds without probate. This varies by bank, from as low as £100 (Monzo, without an indemnity form) to £50,000 (Lloyds Group, Santander, Leeds Building Society). Some banks assess each case individually. You will usually need to provide a death certificate, proof of identity, and sometimes a signed indemnity form.',
  },
];

export default function BankAccountsAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Bank Accounts After Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Bank Accounts After Death: What Happens and What to Do
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Dealing with someone&apos;s bank accounts after they die is one of the first practical tasks you will face. Banks freeze accounts as soon as they are told, which can leave families without access to money they need. This guide explains how the process works, how to find all the accounts, and how to get money released as quickly as possible.
      </p>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">40+ banks</p>
          <p className="text-sm text-muted mt-1">Covered by the Death Notification Service</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">4-8 weeks</p>
          <p className="text-sm text-muted mt-1">Typical time to release funds</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£5k-£50k</p>
          <p className="text-sm text-muted mt-1">Typical bank thresholds without probate</p>
        </div>
      </div>

      {/* Content sections */}
      <div className="space-y-4 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-semibold text-foreground mb-2">{section.title}</h2>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Probate thresholds table */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Bank probate thresholds comparison</h2>
      <p className="text-sm text-muted leading-relaxed mb-4">
        The table below shows the approximate amount each bank may release without requiring a Grant of Probate. These thresholds can change, so always confirm with the bank directly.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-accent/50">
              <th className="text-left p-3 font-semibold text-foreground">Bank</th>
              <th className="text-left p-3 font-semibold text-foreground">Threshold</th>
              <th className="text-left p-3 font-semibold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {THRESHOLDS.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-accent/50'}>
                <td className="p-3 text-foreground font-medium">{row.bank}</td>
                <td className="p-3 text-muted">{row.threshold}</td>
                <td className="p-3 text-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="bg-card rounded-xl border border-border p-6 mb-12 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">Find your bank&apos;s bereavement process</h2>
        <p className="text-sm text-muted mb-4">We have individual guides for the bereavement process at every major UK bank, with direct phone numbers and what to send.</p>
        <Link href="/notify" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Browse Bank Notification Guides
        </Link>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about bank accounts after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/bank-accounts-after-death" guides={['/notify', '/guides/debts-after-death', '/guides/executor-duties', '/probate']} />

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised estate checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist of exactly what needs to be done for this particular estate.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

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
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://helpafterloss.co.uk/guides' },
              { '@type': 'ListItem', position: 3, name: 'Bank Accounts After Death', item: 'https://helpafterloss.co.uk/guides/bank-accounts-after-death' },
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
            headline: 'Bank Accounts After Death: What Happens and What to Do',
            description: 'How to find, notify, and close bank accounts after someone dies in the UK. Includes probate thresholds for major banks.',
            url: 'https://helpafterloss.co.uk/guides/bank-accounts-after-death',
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
