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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides & Articles - Help After Loss',
    description: 'In-depth bereavement guides for the UK.',
  },
};

const POSTS = [
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
