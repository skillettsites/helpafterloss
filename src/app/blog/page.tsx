import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guides & Articles - Help After Loss',
  description: 'In-depth guides and articles on bereavement, funeral costs, workplace rights, and practical support after a death in the UK.',
  alternates: { canonical: 'https://helpafterloss.co.uk/blog' },
  openGraph: {
    title: 'Guides & Articles - Help After Loss',
    description: 'In-depth guides on funeral costs, bereavement leave rights, and free funeral options in the UK.',
    url: 'https://helpafterloss.co.uk/blog',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides & Articles - Help After Loss',
    description: 'In-depth bereavement guides for the UK.',
  },
};

const POSTS = [
  {
    href: '/blog/what-to-do-when-someone-dies-uk',
    title: 'What to Do When Someone Dies: Complete UK Step-by-Step Checklist (2026)',
    date: 'March 2026',
    description: 'A complete step-by-step checklist of what to do when someone dies in the UK. Covers the first 24 hours, registering the death, Tell Us Once, funeral planning, probate, finances, and longer-term tasks.',
  },
  {
    href: '/blog/registering-a-death-uk',
    title: 'Registering a Death in the UK: What to Bring, Where to Go (2026)',
    date: 'March 2026',
    description: 'Everything you need to know about registering a death in the UK. What documents to bring, where to register, who can register, what happens at the appointment, and what you receive afterwards.',
  },
  {
    href: '/blog/tell-us-once-service-guide',
    title: 'Tell Us Once Service: How It Works and How to Register (2026)',
    date: 'March 2026',
    description: 'A complete guide to the Tell Us Once service. Who it notifies, how to use it online or by phone, what information you need, and everything it does not cover.',
  },
  {
    href: '/blog/how-long-does-probate-take-uk',
    title: 'How Long Does Probate Take in the UK? Realistic Timeline (2026)',
    date: 'March 2026',
    description: 'A realistic breakdown of how long probate takes, from gathering valuations to final distribution. Covers HMRC processing, court delays, and what affects the timeline.',
  },
  {
    href: '/blog/inheritance-tax-guide-after-death',
    title: 'Inheritance Tax After a Death: UK Thresholds and Exemptions (2026/27)',
    date: 'March 2026',
    description: 'Current thresholds, the residence nil-rate band, transferable allowances, main exemptions, gifts within 7 years, and how to calculate and pay inheritance tax after a death.',
  },
  {
    href: '/blog/returning-to-work-after-bereavement',
    title: 'Returning to Work After Bereavement: Your Rights and How to Cope (2026)',
    date: 'March 2026',
    description: 'Your legal rights when going back to work, how to request a phased return, what to tell colleagues, and practical tips for coping when grief follows you to the office.',
  },
  {
    href: '/blog/grief-stages-explained',
    title: 'The Stages of Grief: What They Really Mean and Why Grief is Not Linear',
    date: 'March 2026',
    description: 'An honest look at the five stages of grief, why they are widely misunderstood, other models of grief that may better describe your experience, and what grief actually feels like day to day.',
  },
  {
    href: '/blog/how-to-cope-losing-a-parent',
    title: 'How to Cope With Losing a Parent: A Practical and Emotional Guide',
    date: 'March 2026',
    description: 'A compassionate guide to navigating life after the death of a mother or father. Covers the emotional impact, family dynamics, practical tasks, and where to find support.',
  },
  {
    href: '/blog/grief-and-anxiety',
    title: 'Grief and Anxiety: Why Bereavement Triggers Panic and How to Manage It',
    date: 'March 2026',
    description: 'Why grief and anxiety are so closely linked, the types of anxiety common after bereavement, how to manage panic attacks, and when to seek professional help.',
  },
  {
    href: '/blog/grief-at-christmas',
    title: 'Coping With Grief at Christmas: Practical Ways to Get Through the Holidays',
    date: 'March 2026',
    description: 'Practical, compassionate advice for coping with grief at Christmas. How to handle traditions, family gatherings, and the pressure to be happy when you are grieving.',
  },
  {
    href: '/blog/true-cost-of-dying-uk',
    title: 'The True Cost of Dying in the UK in 2026',
    date: 'March 2026',
    description: 'A definitive breakdown of every cost you may face when someone dies: funerals, certificates, probate, solicitors, inheritance tax, headstones, and all the hidden extras people forget to plan for.',
  },
  {
    href: '/blog/bereavement-leave-rights-uk',
    title: 'Bereavement Leave in the UK: Your Rights in 2026',
    date: 'March 2026',
    description: "What you are legally entitled to when a loved one dies, what most employers actually offer, what to do if your employer refuses, and guidance for HR professionals on best practice.",
  },
  {
    href: '/blog/free-funeral-options-uk',
    title: 'Free and Low-Cost Funeral Options in the UK',
    date: 'March 2026',
    description: 'A practical, non-judgmental guide to every option available when you cannot afford a funeral: council funerals, DWP Funeral Expenses Payment, direct cremation, DIY funerals, and charitable help.',
  },
  {
    href: '/blog/what-tell-us-once-doesnt-cover',
    title: "What Tell Us Once Doesn't Cover: The Full List",
    date: 'March 2026',
    description: 'Tell Us Once notifies some government departments, but you still need to contact banks, utilities, insurers, and more yourself. Here is every organisation you must notify manually.',
  },
  {
    href: '/blog/bank-probate-thresholds-2026',
    title: 'Bank Probate Thresholds 2026: Complete Comparison',
    date: 'March 2026',
    description: 'How much money each UK bank will release without probate. A full comparison table of every major bank and building society, with step-by-step instructions.',
  },
  {
    href: '/blog/death-certificate-how-many-copies',
    title: 'How Many Death Certificates Do I Need? (2026 Guide)',
    date: 'March 2026',
    description: 'How many certified copies to order, who needs one, what they cost, and the difference between ordering at registration versus later from the GRO.',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Guides &amp; Articles
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        In-depth guides on the practical and financial side of bereavement. Written in plain English, with real figures and specific guidance for people in the UK.
      </p>

      <div className="space-y-6 mb-12">
        {POSTS.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="block bg-card rounded-xl border border-border p-6 hover:border-primary hover:shadow-sm transition-all group"
          >
            <p className="text-xs text-muted uppercase tracking-wide mb-2">{post.date}</p>
            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
              {post.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed">{post.description}</p>
            <p className="text-sm text-primary font-medium mt-4">Read article &rarr;</p>
          </Link>
        ))}
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Need personalised guidance?</h2>
        <p className="text-muted mb-6">Our free tool creates a step-by-step checklist based on your specific situation, with deadlines calculated from the date of death.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Help After Loss: Guides & Articles',
            description: 'In-depth guides on bereavement, funeral costs, and practical support in the UK.',
            url: 'https://helpafterloss.co.uk/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Help After Loss',
              url: 'https://helpafterloss.co.uk',
            },
            blogPost: POSTS.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              url: `https://helpafterloss.co.uk${post.href}`,
              datePublished: '2026-03-14',
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
              { '@type': 'ListItem', position: 2, name: 'Guides & Articles', item: 'https://helpafterloss.co.uk/blog' },
            ],
          }),
        }}
      />
    </div>
  );
}
