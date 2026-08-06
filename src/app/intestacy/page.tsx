import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Intestacy Rules - Who Inherits When There Is No Will',
  description: 'What happens when someone dies without a will in the UK. Understand the intestacy rules for England, Wales, Scotland, and Northern Ireland. Find out who inherits and what to do.',
  alternates: { canonical: 'https://helpafterloss.co.uk/intestacy' },
  openGraph: {
    title: 'Intestacy Rules - Who Inherits When There Is No Will',
    description: 'What happens when someone dies without a will in the UK. Intestacy rules explained for all four nations.',
    url: 'https://helpafterloss.co.uk/intestacy',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Intestacy Rules - Who Inherits Without a Will',
    description: 'Intestacy rules for England, Wales, Scotland, and Northern Ireland explained in plain English.',
  },
};

export default function IntestacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'When There Is No Will: Intestacy Rules' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        When There Is No Will: Intestacy Rules
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        If your loved one passed away without leaving a will, the law decides who inherits their estate. These are known as the "intestacy rules", and they work differently across the UK. It is worth understanding them, so you know where you stand and what to do next.
      </p>

      {/* Featured snippet targets */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">Who inherits if there is no will?</h2>
        <p className="text-muted leading-relaxed">
          Under the intestacy rules in England and Wales, the surviving husband, wife, or civil partner inherits the first £322,000 plus the personal belongings, plus half of anything above that. What remains is shared equally between the children. If there is no surviving partner, the children inherit everything. Partners who were not married inherit nothing automatically, however long they lived together.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-3">What are the intestacy rules in England and Wales?</h2>
        <p className="text-muted leading-relaxed">
          When there is no will, the law works through a fixed order of relatives. It runs: husband, wife, or civil partner first, then children, then parents, then full brothers and sisters, then half-brothers and half-sisters, then grandparents, then aunts and uncles, and finally the Crown (known as bona vacantia). Each level only inherits if there is nobody left at the levels above.
        </p>
      </section>

      {/* Key warning */}
      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-amber-800 mb-2">Who does not automatically inherit when there is no will</h2>
        <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
          <li>Partners who were not married or in a civil partnership, however long you lived together</li>
          <li>Stepchildren, unless they were legally adopted</li>
          <li>Friends and carers</li>
          <li>Charities</li>
        </ul>
        <p className="text-sm text-amber-800 mt-3">
          If you were their partner but not married, this will feel deeply unfair, and you are far from alone in facing it. You may be able to make a claim under the Inheritance (Provision for Family and Dependants) Act 1975. Please get legal advice as soon as you are able.
        </p>
      </div>

      {/* England and Wales */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">England and Wales</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-foreground">Family situation</th>
                <th className="text-left px-6 py-3 font-semibold text-foreground">Who inherits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-6 py-4 text-muted">Married or civil partner, no children</td>
                <td className="px-6 py-4 text-foreground">The surviving partner inherits everything</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted">Married or civil partner, with children</td>
                <td className="px-6 py-4 text-foreground">The surviving partner gets the first £322,000 plus the personal belongings, plus half of what is left. The children share the other half equally.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted">Children, but no surviving partner</td>
                <td className="px-6 py-4 text-foreground">The children inherit everything, shared equally</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted">No surviving partner and no children</td>
                <td className="px-6 py-4 text-foreground">Parents, then brothers and sisters, then half-brothers and half-sisters, then grandparents, then aunts and uncles, then the Crown</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Scotland */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Scotland</h2>
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm text-muted leading-relaxed mb-4">
            Scotland works differently. The surviving husband, wife, or civil partner has "prior rights" to the home (up to £473,000), the furniture (up to £29,000), and cash (up to £50,000, or £89,000 if there are no children). After prior rights are settled, "legal rights" give the surviving partner and the children fixed shares of the moveable property (money and investments, though not land).
          </p>
          <p className="text-sm text-muted leading-relaxed">
            The remainder is distributed under intestacy rules similar to (but not identical to) England and Wales.
          </p>
          <p className="text-sm mt-4">
            <Link href="/guide/scotland" className="text-primary hover:underline font-medium">Read our full Scotland guide</Link> for detailed coverage of prior rights, legal rights, Confirmation, and the Procurator Fiscal.
          </p>
        </div>
      </section>

      {/* Northern Ireland */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Northern Ireland</h2>
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm text-muted leading-relaxed">
            Northern Ireland follows similar rules to England and Wales, but with different financial thresholds. The surviving husband, wife, or civil partner gets the personal belongings and a statutory legacy (currently £250,000), plus a share of what remains depending on whether there are children.
          </p>
          <p className="text-sm mt-4">
            <Link href="/guide/northern-ireland" className="text-primary hover:underline font-medium">Read our full Northern Ireland guide</Link> for detailed coverage of intestacy, probate through the Belfast Probate Office, and NI-specific contacts.
          </p>
        </div>
      </section>

      {/* What to do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">What to do when there is no will</h2>
        <div className="space-y-4">
          {[
            { title: 'Apply for Letters of Administration', desc: 'Instead of probate, you apply for Letters of Administration using form PA1A. The closest relative has the right to apply, usually the husband, wife, or civil partner first, then children, then parents, then brothers and sisters.' },
            { title: 'Make sure there really is no will', desc: 'Before you assume there is none, ask their solicitor and their bank, and search the National Will Register. The Probate Registry may also hold a will from an earlier application. It is worth ruling this out properly.' },
            { title: 'Where you stand if you were their partner but not married', desc: 'You do not inherit automatically, but you may have a claim if you were living together and depended on them financially. Please get legal advice quickly. Citizens Advice can point you to a solicitor who offers a free first consultation.' },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get guidance for your specific situation</h2>
        <p className="text-muted mb-6">Our tool adapts to whether there is a will or not, and tells you exactly what applies to you.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>

      <RelatedGuides currentPath="/intestacy" guides={['/probate', '/guides/executor-duties', '/guides/bereavement-benefits', '/guides/lost-a-spouse']} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Intestacy Rules: Who Inherits When There Is No Will in the UK',
            description: 'What happens when someone dies without a will in the UK. Intestacy rules for England, Wales, Scotland, and Northern Ireland.',
            datePublished: '2026-03-13',
            dateModified: '2026-03-14',
            author: { '@type': 'Organization', name: 'Help After Loss' },
            publisher: { '@type': 'Organization', name: 'Help After Loss' },
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
              { '@type': 'ListItem', position: 2, name: 'Intestacy Rules', item: 'https://helpafterloss.co.uk/intestacy' },
            ],
          }),
        }}
      />
    </div>
  );
}
