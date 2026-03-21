import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';

export const metadata: Metadata = {
  title: 'Cancelling Subscriptions and Direct Debits After a Death',
  description: 'How to find and cancel all subscriptions, direct debits, and standing orders after someone dies. Covers streaming services, mobile contracts, insurance, loyalty points, and hidden subscriptions.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/subscriptions-after-death' },
  openGraph: {
    title: 'Cancelling Subscriptions and Direct Debits After a Death',
    description: 'A complete guide to finding and cancelling every subscription and direct debit after a death, including loyalty points and hidden subscriptions.',
    url: 'https://helpafterloss.co.uk/guides/subscriptions-after-death',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancelling Subscriptions and Direct Debits After a Death',
    description: 'How to find and cancel all subscriptions, direct debits, and standing orders after a death.',
  },
};

const SECTIONS = [
  {
    title: 'Start with bank statements',
    content: 'The quickest way to find all outgoing payments is to request a full list of direct debits and standing orders from the deceased\'s bank. Most banks will provide this once you present the death certificate and proof that you are the executor or next of kin. Go through at least three months of bank statements to catch quarterly or annual payments that might not show up every month.',
  },
  {
    title: 'Direct debits vs standing orders',
    content: 'Direct debits are set up by the company and allow them to pull money from the account. Standing orders are set up by the account holder and push a fixed amount at regular intervals. Both need cancelling, but the process is different. Direct debits are cancelled by contacting the company directly, while standing orders can be cancelled through the bank. When the bank account is frozen after death, direct debits will bounce, but it is still important to formally cancel them to avoid debt collection letters.',
  },
];

const CATEGORIES = [
  {
    title: 'TV and streaming',
    items: 'Sky, Netflix, Amazon Prime, Disney+, Spotify, Apple TV+, NOW TV, BT Sport, DAZN, YouTube Premium. Most can be cancelled online through the account settings, but you may need to call if you do not have the login details. Sky requires a phone call to their bereavement team.',
  },
  {
    title: 'Mobile phone contracts',
    items: 'EE, O2, Vodafone, Three, Tesco Mobile, giffgaff, BT Mobile. Contact the provider\'s bereavement team. Early termination fees are typically waived for bereavement if you provide a death certificate. Check whether the handset is still under a separate device plan, as this may also need settling.',
  },
  {
    title: 'Broadband and home phone',
    items: 'BT, Virgin Media, TalkTalk, Sky, Plusnet, EE Home. Contact the bereavement team directly. If someone else in the household still needs the service, you can usually transfer it into their name without paying a disconnection fee.',
  },
  {
    title: 'Insurance policies',
    items: 'Car insurance, home insurance, travel insurance, pet insurance, life insurance, private medical insurance (Bupa, AXA, Aviva). Contact each provider. Some policies may have a payout to the estate, particularly life insurance and death-in-service benefits. Do not cancel life insurance without checking for a claim first.',
  },
  {
    title: 'Memberships and subscriptions',
    items: 'Gym memberships (PureGym, David Lloyd, The Gym Group), magazine and newspaper subscriptions, professional memberships, trade unions, clubs, and societies. Most will cancel without penalty on receipt of a death certificate.',
  },
  {
    title: 'Charity donations',
    items: 'Regular charity donations by direct debit should be stopped, but consider notifying the charity rather than just cancelling. Many charities will want to acknowledge the person\'s support, and the family may wish to set up a memorial fund or continue the donation in the deceased\'s name.',
  },
  {
    title: 'Software and digital services',
    items: 'Microsoft 365, Adobe Creative Cloud, iCloud storage, Google One, Dropbox, antivirus subscriptions. Check both app store subscriptions (Apple App Store, Google Play) and direct subscriptions through company websites.',
  },
  {
    title: 'Motoring',
    items: 'Breakdown cover (AA, RAC, Green Flag), parking permits, toll accounts (Dart Charge, Congestion Charge), car wash memberships. The AA and RAC both have bereavement processes and will cancel without penalty.',
  },
];

const EXTRA_SECTIONS = [
  {
    title: 'Loyalty points and rewards',
    content: 'Check airline miles (Avios, Virgin Points), hotel loyalty programmes, credit card rewards, and supermarket points (Tesco Clubcard, Nectar). Some can be transferred to a family member. Avios points can sometimes be transferred by contacting British Airways directly. NatWest MyRewards must be claimed within 90 days. Supermarket loyalty points can usually be spent by using the card or transferred to another account.',
  },
  {
    title: 'How to find hidden subscriptions',
    content: 'Search the deceased\'s email inbox for words like "subscription", "renewal", "payment confirmation", "receipt", and "billing". Check the app store on their phone for active subscriptions (Settings > Apple ID > Subscriptions on iPhone, or Google Play > Payments > Subscriptions on Android). Also check for PayPal recurring payments, as many online subscriptions are billed through PayPal rather than directly from the bank.',
  },
  {
    title: 'Do not cancel everything at once',
    content: 'Before cancelling a mobile phone contract, check whether there are voicemails, photos, or important data you want to preserve. Before cancelling email services, check for any correspondence you may need. Before cancelling cloud storage, download any files. It is better to take a few days to review what is there before shutting everything down permanently.',
  },
];

const FAQ = [
  {
    q: 'How do I find all the subscriptions someone had?',
    a: 'Start with the bank. Request a full list of direct debits and standing orders, and review at least three months of bank statements. Then search their email inbox for words like "subscription", "renewal", and "payment confirmation". Check their phone for app store subscriptions. Finally, look through their post for membership cards or renewal letters.',
  },
  {
    q: 'Can I cancel a mobile phone contract after a death?',
    a: 'Yes. Contact the network provider\'s bereavement team with a copy of the death certificate. All major UK networks (EE, O2, Vodafone, Three) have a bereavement process. They will cancel the contract without charging early termination fees. If the handset is on a separate device plan, ask about settling or returning it.',
  },
  {
    q: 'Do I have to pay early termination fees after bereavement?',
    a: 'In most cases, no. The majority of UK companies waive early termination fees when presented with a death certificate. This applies to mobile contracts, broadband, gym memberships, and most subscription services. If a company insists on charging a fee, escalate to their complaints team or contact Citizens Advice.',
  },
  {
    q: 'What happens to loyalty points when someone dies?',
    a: 'It depends on the programme. Some loyalty schemes (like Avios) allow points to be transferred to a family member if you contact them directly. Others (like Tesco Clubcard) may let you spend the points using the existing card. Some schemes simply cancel the points on death. Check each programme\'s terms or call their customer service team.',
  },
  {
    q: 'Should I cancel direct debits or close the bank account first?',
    a: 'Cancel the direct debits first. If you close the bank account while direct debits are still active, the companies will receive returned payments and may send debt collection letters to the deceased\'s address. Formally cancelling each subscription first, with a copy of the death certificate, ensures a clean closure and avoids unnecessary chasing letters.',
  },
];

export default function SubscriptionsAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Cancelling Subscriptions and Direct Debits After a Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Cancelling Subscriptions and Direct Debits After a Death
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Most people have more active subscriptions and direct debits than they realise. Working through them systematically helps you avoid paying for services no one is using, and prevents confusing letters arriving at the deceased's address months later.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
        alt="A notebook and pen on a desk, ready for list-making"
        credit="Green Chameleon"
        creditUrl="https://unsplash.com/@craftedbygc"
      />

      {/* Getting started */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Where to start</h2>
      <div className="space-y-4 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What to cancel, category by category</h2>
      <div className="space-y-4 mb-12">
        {CATEGORIES.map((cat, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{cat.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{cat.items}</p>
          </div>
        ))}
      </div>

      {/* Extra guidance */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Other things to check</h2>
      <div className="space-y-4 mb-12">
        {EXTRA_SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Tip */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-12">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Tip:</strong> Keep a spreadsheet or written list of every company you contact, the date you called, the reference number, and the outcome. This is helpful if any company continues to chase for payment or if the executor needs to account for all estate expenses.
        </p>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about subscriptions after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/subscriptions-after-death" guides={['/guides/bank-accounts-after-death', '/notify', '/digital-legacy', '/template-letters']} />

      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored list of exactly which companies and organisations you need to contact.</p>
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
              { '@type': 'ListItem', position: 3, name: 'Subscriptions After Death', item: 'https://helpafterloss.co.uk/guides/subscriptions-after-death' },
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
            headline: 'Cancelling Subscriptions and Direct Debits After a Death',
            description: 'How to find and cancel all subscriptions, direct debits, and standing orders after someone dies.',
            url: 'https://helpafterloss.co.uk/guides/subscriptions-after-death',
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
