import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cultural and Religious Funeral Guide - UK',
  description: 'Guidance on funeral and bereavement practices for different faiths and cultures in the UK. Muslim, Jewish, Hindu, Sikh, Buddhist, and Christian traditions explained.',
  alternates: { canonical: 'https://helpafterloss.co.uk/cultural-guide' },
};

const TRADITIONS = [
  {
    faith: 'Islam',
    timeline: 'Burial within 24 hours where possible',
    practices: [
      'The body is washed (ghusl) by family members of the same gender, following specific Islamic procedures.',
      'The body is wrapped in plain white cloth (kafan). Coffins are generally not used, though UK regulations may require one for burial.',
      'Funeral prayers (Salat al-Janazah) are performed, usually at the mosque.',
      'Burial is preferred over cremation, which is not permitted in Islam.',
      'The grave should face Makkah (Qibla direction).',
      'Mourning (iddah) lasts 3 days for most, 4 months and 10 days for a widow.',
    ],
    ukNotes: 'Contact your local mosque immediately. Many UK mosques have dedicated burial committees. Some local authorities have Muslim burial sections in public cemeteries. Expedited registration may be possible; ask the registrar.',
  },
  {
    faith: 'Judaism',
    timeline: 'Burial within 24-48 hours where possible',
    practices: [
      'Shomrim (watchers) stay with the body until burial, reading psalms.',
      'The body is ritually washed (tahara) by the Chevra Kadisha (burial society).',
      'Dressed in simple white shrouds (tachrichim). A plain wooden coffin is traditional.',
      'The funeral service is simple and dignified, led by a rabbi.',
      'Cremation is not permitted in Orthodox Judaism.',
      'Shiva (7 days of mourning) begins after burial, when family stays at home and receives visitors.',
      'Sheloshim (30 days) and the full mourning year follow.',
    ],
    ukNotes: 'Contact the synagogue or Jewish Joint Burial Society immediately. They will handle most arrangements. The United Synagogue has its own burial grounds. Expedited registration may be possible.',
  },
  {
    faith: 'Hinduism',
    timeline: 'Cremation as soon as possible, ideally within 24 hours',
    practices: [
      'The body is washed and anointed by family members, dressed in new clothes.',
      'Prayers and rituals are performed at home before the cremation.',
      'Cremation is the traditional practice (except for children under 3 and holy men, who may be buried).',
      'The eldest son traditionally lights the funeral pyre; in the UK this translates to pressing the cremation button.',
      'Ashes are ideally scattered in a sacred river (the Ganges is most auspicious). In the UK, ashes may be scattered in the sea or a river.',
      'A mourning period of 13 days follows, with the family staying at home.',
    ],
    ukNotes: 'Contact your local Hindu temple or the Hindu Council UK. Some UK crematoria allow family members to witness the start of cremation. Check with the crematorium about their policies.',
  },
  {
    faith: 'Sikhism',
    timeline: 'Cremation as soon as possible',
    practices: [
      'The body is washed and dressed in clean clothes, including the five articles of faith (Kakkars).',
      'Prayers from the Guru Granth Sahib are recited.',
      'Cremation is the traditional practice.',
      'The eldest son or close relative traditionally starts the cremation.',
      'Ashes may be scattered in running water.',
      'Akhand Path (continuous reading of the Guru Granth Sahib) may be held during the mourning period.',
      'Bhog ceremony marks the end of the mourning period, typically after 10-13 days.',
    ],
    ukNotes: 'Contact the local Gurdwara for guidance and support. The Sikh community often rallies around bereaved families with practical and emotional support.',
  },
  {
    faith: 'Buddhism',
    timeline: 'Varies by tradition, generally not urgent',
    practices: [
      'Practices vary significantly between Buddhist traditions (Theravada, Mahayana, Tibetan, Zen).',
      'Chanting and meditation are common, sometimes for several days before the funeral.',
      'Both burial and cremation are acceptable; cremation is more common.',
      'Some traditions believe the consciousness takes time to leave the body, so it should not be disturbed immediately.',
      'White is the traditional colour of mourning in many Buddhist cultures.',
      'Memorial services may be held at specific intervals (7 days, 49 days, 100 days).',
    ],
    ukNotes: 'Contact the local Buddhist temple or centre for guidance specific to your tradition. Practices can vary significantly.',
  },
  {
    faith: 'Christianity',
    timeline: 'Usually 1-3 weeks after death',
    practices: [
      'Practices vary between denominations (Catholic, Church of England, Methodist, Baptist, etc.).',
      'A church service or chapel service is common, led by a minister or priest.',
      'Both burial and cremation are widely accepted across most Christian denominations.',
      'The funeral service typically includes hymns, prayers, readings, and a eulogy.',
      'A wake or reception after the service is traditional in many communities.',
      'Catholic tradition may include a vigil or Rosary the evening before the funeral.',
    ],
    ukNotes: 'Contact the person\'s church or parish. If they were not part of a congregation, any local minister will usually help. The Church of England provides funeral services for anyone in the parish.',
  },
];

export default function CulturalGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Cultural and Religious Funeral Guidance
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Different faiths and cultures have their own practices and timelines for funerals and mourning. This guide covers the main traditions observed in the UK, with practical notes on how they work within UK regulations.
      </p>

      <div className="bg-warm border border-warm-border rounded-xl p-6 mb-10">
        <p className="text-sm text-amber-800">
          If you need to arrange a burial within 24-48 hours for religious reasons, tell the registrar when you book the appointment. Most register offices can prioritise urgent registrations.
        </p>
      </div>

      {/* Tradition guides */}
      <div className="space-y-8 mb-12">
        {TRADITIONS.map((t, i) => (
          <section key={i} className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-1">{t.faith}</h2>
            <p className="text-sm text-primary font-medium mb-4">{t.timeline}</p>
            <h3 className="text-sm font-semibold text-foreground mb-2">Key practices</h3>
            <ul className="space-y-1.5 text-sm text-muted mb-4">
              {t.practices.map((p, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="bg-primary-light rounded-lg p-4">
              <h3 className="text-sm font-semibold text-primary-dark mb-1">In the UK</h3>
              <p className="text-sm text-primary-dark/80">{t.ukNotes}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="bg-primary-light rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get guidance tailored to your faith</h2>
        <p className="text-muted mb-6">Our personalised guide adjusts timelines and tasks based on your religious or cultural requirements.</p>
        <Link href="/start" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
          Get Your Personalised Guide
        </Link>
      </div>
    </div>
  );
}
