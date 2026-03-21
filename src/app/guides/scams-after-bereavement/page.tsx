import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';

export const metadata: Metadata = {
  title: 'Bereavement Scams: How to Protect Yourself After a Death',
  description: 'Bereaved families are deliberately targeted by scammers. Learn about fake funeral livestreams, probate cold calls, identity theft from obituaries, and how to protect yourself and the estate.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/scams-after-bereavement' },
  openGraph: {
    title: 'Bereavement Scams: How to Protect Yourself After a Death',
    description: 'Common scams that target bereaved families and how to protect yourself. Fake livestreams, probate cold calls, identity theft, and bogus debt collectors.',
    url: 'https://helpafterloss.co.uk/guides/scams-after-bereavement',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bereavement Scams: How to Protect Yourself After a Death',
    description: 'How to spot and avoid scams that target bereaved families after a death.',
  },
};

const SCAMS = [
  {
    title: 'Fake funeral livestreams',
    desc: 'Scammers scan public funeral notices and obituaries, then create fake social media profiles or websites claiming to offer a livestream of the funeral. They charge mourners who cannot attend in person to "watch" a stream that does not exist. Only trust livestream links that come directly from the funeral director or the family. If you see one shared on social media by an account you do not recognise, do not click it.',
  },
  {
    title: 'Probate cold calls',
    desc: 'Fraudsters call the bereaved pretending to be solicitors, claiming you must use their services for probate or face penalties and delays. Legitimate solicitors never cold call. You are not required to use a solicitor for probate at all. If someone calls you unsolicited about probate, hang up. If you do want a solicitor, find one yourself through the Law Society\'s "Find a Solicitor" service.',
  },
  {
    title: 'Fake debt collectors',
    desc: 'Letters or phone calls claiming the deceased owed money, often with threats of bailiffs or court action if you do not pay immediately. Remember: you are not personally responsible for the deceased\'s debts. Debts are paid from the estate, and only if there are sufficient funds. Always ask for proof of the debt in writing before taking any action, and pass any legitimate claims to the executor.',
  },
  {
    title: 'Identity theft from obituaries',
    desc: 'Scammers harvest personal details from death notices and obituaries, including full names, dates of birth, maiden names, and addresses. They use this information to open bank accounts, apply for credit cards, or make fraudulent benefit claims in the deceased\'s name. Minimise the personal details you include in obituaries. Register the death with all three credit reference agencies (Experian, Equifax, TransUnion) to flag the record as deceased.',
  },
  {
    title: 'Bogus charities',
    desc: 'People appearing at the door or calling by phone, claiming to collect donations in the deceased\'s name for a charity. They may reference the funeral or the cause of death to sound convincing. Only donate through official charity websites. Check the Charity Commission register (register-of-charities.charitycommission.gov.uk) to verify any organisation before giving money.',
  },
  {
    title: 'Will and inheritance scams',
    desc: 'Unsolicited letters, emails, or calls claiming the deceased named you in their will, that you are entitled to an unclaimed inheritance, or that a long-lost relative has left you money. These are always scams. A genuine executor or solicitor would contact you formally by post and would never ask for upfront fees or bank details by email or phone.',
  },
  {
    title: 'Utility scam calls',
    desc: 'Calls claiming to be from the gas, electricity, or water company, saying the account is in serious arrears and threatening disconnection or legal action. They ask for immediate card payment over the phone. Hang up and call the company\'s official bereavement number, which you can find on their website or on a recent bill. No legitimate utility company will threaten disconnection without written notice.',
  },
];

const PROTECTION = [
  {
    title: 'Register with credit reference agencies',
    desc: 'Contact Experian, Equifax, and TransUnion to flag the deceased\'s credit file as "deceased". This makes it much harder for anyone to open new accounts in their name. You can do this online or by post with a copy of the death certificate.',
  },
  {
    title: 'Use the Bereavement Register',
    desc: 'Register at thebereavementregister.org.uk to stop addressed mail for the deceased. This reduces the amount of post arriving in their name, which both reduces distress and limits the information available to potential scammers.',
  },
  {
    title: 'Redirect the post',
    desc: 'Set up Royal Mail redirection for the deceased\'s post, especially if their property will be empty. This ensures important letters (and any suspicious ones) come to you rather than sitting in an unattended letterbox.',
  },
  {
    title: 'Never share details with cold callers',
    desc: 'Do not give personal information, bank details, or estate information to anyone who contacts you unsolicited, whether by phone, email, text, or at the door. If someone claims to be from a bank, insurer, or solicitor, hang up and call the organisation\'s official number yourself.',
  },
];

const FAQ = [
  {
    q: 'What scams target bereaved families?',
    a: 'The most common are fake funeral livestream charges, probate cold calls from people pretending to be solicitors, fake debt collectors demanding payment for supposed debts, identity theft using details from obituaries, bogus charity collections, and inheritance scams claiming you are owed money. Scammers know that bereaved people are vulnerable and distracted, which is exactly why they target them.',
  },
  {
    q: 'How do I stop scam calls after someone dies?',
    a: 'Register the deceased\'s phone number with the Telephone Preference Service (TPS) at tpsonline.org.uk. If the phone line is being kept, consider getting the number changed. For mobile phones, once you have retrieved any data you need, cancel the contract. Report persistent scam calls to Action Fraud on 0300 123 2040.',
  },
  {
    q: 'How do I protect the deceased from identity theft?',
    a: 'Register the death with all three credit reference agencies (Experian, Equifax, TransUnion) so the file is flagged as deceased. Sign up with the Bereavement Register to stop post. Close or transfer all bank accounts, and cancel the driving licence and passport through DVLA and HMPO. Minimise personal details in public obituaries.',
  },
  {
    q: 'Should I report bereavement scams?',
    a: 'Yes, always. Report to Action Fraud (0300 123 2040 or actionfraud.police.uk), which is the UK\'s national fraud reporting centre. You can also report to Trading Standards through the Citizens Advice consumer helpline on 0808 223 1133. Reporting helps protect other bereaved families from the same scam.',
  },
  {
    q: 'How do I stop post addressed to a deceased person?',
    a: 'Register with the Bereavement Register at thebereavementregister.org.uk (free). This removes the deceased from most mailing lists within a few weeks. You can also set up Royal Mail redirection to forward their post to your address. Contact individual companies directly to close accounts and remove them from mailing lists.',
  },
];

export default function ScamsAfterBereavementPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Bereavement Scams: How to Protect Yourself' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Bereavement Scams: How to Protect Yourself
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        It is an uncomfortable truth that bereaved families are deliberately targeted by scammers. Knowing the common tactics used helps you recognise them quickly and protect both yourself and the estate.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
        alt="A lock symbolising security and protection"
        credit="FlyD"
        creditUrl="https://unsplash.com/@flyd2069"
      />

      {/* Warning box */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Be on your guard:</strong> Bereaved families are deliberately targeted by scammers who know you are dealing with unfamiliar processes during an extremely difficult time. If something feels wrong, it probably is. Never rush into giving money or personal details to anyone who contacts you unsolicited.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">7 scams</p>
          <p className="text-sm text-muted mt-1">Common tactics that target the bereaved</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">0300 123 2040</p>
          <p className="text-sm text-muted mt-1">Action Fraud reporting line</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">3 agencies</p>
          <p className="text-sm text-muted mt-1">Register the death with Experian, Equifax, TransUnion</p>
        </div>
      </div>

      {/* Scam types */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Scams to watch out for</h2>
      <div className="space-y-4 mb-12">
        {SCAMS.map((scam, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{scam.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{scam.desc}</p>
          </div>
        ))}
      </div>

      {/* Protection steps */}
      <h2 className="text-2xl font-bold text-foreground mb-6">How to protect yourself and the estate</h2>
      <div className="space-y-4 mb-12">
        {PROTECTION.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Reporting callout */}
      <div className="bg-accent/50 rounded-xl p-5 mb-12">
        <h3 className="font-semibold text-foreground mb-2">How to report a scam</h3>
        <p className="text-sm text-muted leading-relaxed">
          Report fraud to <strong>Action Fraud</strong> on 0300 123 2040 or at actionfraud.police.uk. For consumer issues, contact <strong>Trading Standards</strong> through the Citizens Advice consumer helpline on 0808 223 1133. If you have given out bank details, call your bank immediately to secure your account.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about bereavement scams</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/scams-after-bereavement" guides={['/notify', '/guides/bank-accounts-after-death', '/support', '/guides/executor-duties']} />

      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist of everything you need to do, including steps to protect yourself and the estate.</p>
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
              { '@type': 'ListItem', position: 3, name: 'Bereavement Scams', item: 'https://helpafterloss.co.uk/guides/scams-after-bereavement' },
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
            headline: 'Bereavement Scams: How to Protect Yourself After a Death',
            description: 'Common scams that target bereaved families and how to protect yourself and the estate.',
            url: 'https://helpafterloss.co.uk/guides/scams-after-bereavement',
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
