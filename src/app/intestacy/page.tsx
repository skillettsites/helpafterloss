import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Intestacy Rules - Who Inherits When There Is No Will',
  description: 'What happens when someone dies without a will in the UK. Understand the intestacy rules for England, Wales, Scotland, and Northern Ireland. Find out who inherits and what to do.',
  alternates: { canonical: 'https://helpafterloss.co.uk/intestacy' },
};

export default function IntestacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Dying Without a Will: Intestacy Rules
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        When someone dies without a will, the law decides who inherits their estate. These are called the "intestacy rules" and they differ across the UK. Understanding them is important so you know your rights and what to do next.
      </p>

      {/* Key warning */}
      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-amber-800 mb-2">Who does NOT automatically inherit under intestacy?</h2>
        <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
          <li>Unmarried partners (regardless of how long you lived together)</li>
          <li>Stepchildren (unless legally adopted)</li>
          <li>Friends and carers</li>
          <li>Charities</li>
        </ul>
        <p className="text-sm text-amber-800 mt-3">
          If you are an unmarried partner, you may be able to make a claim under the Inheritance (Provision for Family and Dependants) Act 1975. Seek legal advice as soon as possible.
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
                <td className="px-6 py-4 text-muted">Married/civil partner, no children</td>
                <td className="px-6 py-4 text-foreground">Spouse/partner inherits everything</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted">Married/civil partner with children</td>
                <td className="px-6 py-4 text-foreground">Spouse gets the first £322,000 plus personal belongings, plus half the remainder. Children share the other half equally.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted">Children but no spouse</td>
                <td className="px-6 py-4 text-foreground">Children inherit everything, shared equally</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted">No spouse and no children</td>
                <td className="px-6 py-4 text-foreground">Parents, then siblings, then half-siblings, then grandparents, then aunts/uncles, then the Crown</td>
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
            Scotland has different rules. The surviving spouse/civil partner has "prior rights" to the home (up to £473,000), furniture (up to £29,000), and cash (up to £50,000 or £89,000 if no children). After prior rights, "legal rights" give the spouse and children fixed shares of moveable property (money, investments, but not land).
          </p>
          <p className="text-sm text-muted leading-relaxed">
            The remainder is distributed under intestacy rules similar to (but not identical to) England and Wales.
          </p>
        </div>
      </section>

      {/* Northern Ireland */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Northern Ireland</h2>
        <div className="bg-card rounded-xl border border-border p-6">
          <p className="text-sm text-muted leading-relaxed">
            Northern Ireland follows similar intestacy rules to England and Wales but with different financial thresholds. The spouse gets personal belongings and a statutory legacy amount (currently £250,000), plus a share of the remainder depending on whether there are children.
          </p>
        </div>
      </section>

      {/* What to do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">What to do if there is no will</h2>
        <div className="space-y-4">
          {[
            { title: 'Apply for Letters of Administration', desc: 'Instead of probate, you apply for Letters of Administration using form PA1A. The closest relative has the right to apply, usually: spouse first, then children, then parents, then siblings.' },
            { title: 'Check if you need to search for a will', desc: 'Before assuming there is no will, check with the person\'s solicitor, bank, and the National Will Register. Wills can also be held by the Probate Registry from a previous application.' },
            { title: 'Understand your position if you are an unmarried partner', desc: 'You do not inherit automatically, but you may have a claim if you were living together and financially dependent. Seek legal advice quickly. Citizens Advice can help you find a solicitor who offers a free initial consultation.' },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Intestacy Rules: Who Inherits When There Is No Will in the UK',
            description: 'What happens when someone dies without a will in the UK. Intestacy rules for England, Wales, Scotland, and Northern Ireland.',
            publisher: { '@type': 'Organization', name: 'Help After Loss' },
          }),
        }}
      />
    </div>
  );
}
