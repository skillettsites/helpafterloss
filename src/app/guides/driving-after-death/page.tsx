import type { Metadata } from 'next';
import Link from 'next/link';
import { RelatedGuides } from '@/components/RelatedGuides';

export const metadata: Metadata = {
  title: 'Cars, Driving Licences & DVLA After a Death',
  description: 'What to do about the deceased\'s car, driving licence, insurance, road tax, and DVLA notification after a death. Covers V5C transfer, SORN, Motability returns, and personalised plates.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/driving-after-death' },
  openGraph: {
    title: 'Cars, Driving Licences & DVLA After a Death',
    description: 'Everything you need to know about cars, driving licences, insurance, and DVLA after someone dies. V5C transfer, SORN, tax refunds, and Motability explained.',
    url: 'https://helpafterloss.co.uk/guides/driving-after-death',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cars, Driving Licences & DVLA After a Death',
    description: 'What to do about the deceased\'s car, driving licence, insurance, and road tax after a death.',
  },
};

const SECTIONS = [
  {
    title: 'Notifying DVLA about the driving licence',
    content: 'If you used Tell Us Once when registering the death, DVLA will be notified automatically and you do not need to do anything further about the driving licence. If you did not use Tell Us Once, post the driving licence to DVLA, Swansea, SA99 1AB with a covering letter stating the person\'s full name, date of birth, date of death, and driving licence number. You do not need to send the death certificate. DVLA will process this within about 4 weeks and send a confirmation letter.',
  },
  {
    title: 'Car insurance: act immediately',
    content: 'This is urgent. The deceased\'s car insurance policy becomes void from the moment of death. If anyone drives the vehicle, they are driving without insurance, which is a criminal offence carrying a minimum £300 fine and 6 penalty points. You have three options: add the vehicle to your own existing insurance policy (call your insurer), take out a temporary short-term policy (available from companies like Cuvva or Tempcover), or SORN the vehicle immediately so it is not driven or kept on a public road.',
  },
  {
    title: 'Transferring the V5C (logbook)',
    content: 'If you want to keep the vehicle, you need to transfer the V5C registration document into your name. Complete section 2 of the V5C (the "new keeper" section) and send it to DVLA with a covering letter explaining the circumstances. There is no fee for a bereavement transfer. DVLA will issue a new V5C in your name within 4-6 weeks. In the meantime, keep the green "new keeper" slip from the V5C as proof of your entitlement to the vehicle.',
  },
  {
    title: 'SORN (Statutory Off Road Notification)',
    content: 'If the car will not be driven or kept on a public road, make a SORN. You can do this online at gov.uk, by phone on 0300 123 4321, or by post. SORN is free and means the vehicle does not need insurance or road tax while it is off the road. The vehicle must be kept on private land (a driveway, garage, or private car park), not on a public road.',
  },
  {
    title: 'Vehicle tax (road tax) refund',
    content: 'If the vehicle has remaining tax, DVLA will automatically refund any full calendar months remaining once the vehicle is either transferred to a new keeper, SORNed, or scrapped. The refund is sent to the registered keeper\'s address by cheque. If you have changed the address, let DVLA know so the refund reaches you.',
  },
  {
    title: 'Selling the vehicle',
    content: 'The executor can sell the vehicle as part of the estate. Complete the V5C to transfer ownership to the buyer in the usual way. The sale price forms part of the estate value for probate purposes. Get the vehicle valued (a dealer quote, online valuation, or similar car listings will do) and keep a record of the valuation and the sale price. If the vehicle is worth more than a few hundred pounds, it should be included on the probate application.',
  },
  {
    title: 'MOT',
    content: 'The existing MOT remains valid regardless of a change of ownership. The new keeper will need to arrange their own MOT when the current one expires. You can check the MOT expiry date online at gov.uk using the vehicle\'s registration number.',
  },
  {
    title: 'Motability vehicles',
    content: 'If the deceased had a vehicle through the Motability scheme, it must be returned. Motability will contact you or you can call them on 0300 456 4566. They allow 6 weeks from the date of death to arrange alternative transport before the vehicle needs to be returned. Any advance payment made when the vehicle was ordered is not refundable, but Motability may make a goodwill payment in some cases.',
  },
  {
    title: 'Personalised number plates',
    content: 'If the deceased had a private or personalised registration plate, the executor can retain it. You need to apply to transfer the plate to a retention certificate (form V317, £80 fee) or assign it directly to another vehicle. If no action is taken, the personalised plate stays with the vehicle when it is sold or scrapped. Act before disposing of the vehicle if you want to keep the plate.',
  },
];

const FAQ = [
  {
    q: 'How do I notify DVLA of a death?',
    a: 'The easiest way is through Tell Us Once, which notifies DVLA automatically when you register the death. If you did not use Tell Us Once, post the driving licence to DVLA, Swansea, SA99 1AB with a covering letter including the date of death. You do not need to send the death certificate.',
  },
  {
    q: 'Can I drive the deceased\'s car?',
    a: 'Not under their insurance policy. The policy becomes void at the moment of death, meaning anyone driving the car is uninsured. You need to either add the car to your own insurance, take out a temporary policy, or SORN the vehicle. Driving without insurance is a criminal offence.',
  },
  {
    q: 'What happens to car insurance when someone dies?',
    a: 'The policy ends immediately. Contact the insurance company to cancel and ask about any refund for the remaining premium. If the deceased was paying monthly by direct debit, the insurer may try to collect further payments, so cancel the direct debit as well. Any named drivers on the policy also lose their cover.',
  },
  {
    q: 'How do I transfer a car into my name after a death?',
    a: 'Complete section 2 of the V5C (logbook), write a covering letter explaining the bereavement, and post both to DVLA. There is no fee. DVLA will issue a new V5C in your name within 4-6 weeks. Keep the green "new keeper" slip as temporary proof of ownership.',
  },
  {
    q: 'Do I get a refund on road tax?',
    a: 'Yes. DVLA automatically refunds any full calendar months of remaining vehicle tax when the vehicle is transferred, SORNed, or scrapped. The refund is sent by cheque to the registered keeper\'s address.',
  },
  {
    q: 'What happens to a Motability car when someone dies?',
    a: 'It must be returned. Motability gives you 6 weeks from the date of death to arrange alternative transport. Call them on 0300 456 4566 to make arrangements. Advance payments are generally not refundable, though goodwill payments may be made.',
  },
];

export default function DrivingAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Cars, Driving Licences & DVLA After a Death
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Dealing with the deceased's vehicle involves several different organisations and some time-sensitive steps. The most urgent is car insurance, which is void from the moment of death.
      </p>

      {/* Urgent warning */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Urgent:</strong> The deceased's car insurance is void from the moment of death. If anyone drives the vehicle without arranging separate insurance, they are committing a criminal offence. Sort insurance or SORN the vehicle before anything else.
        </p>
      </div>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">4-6 weeks</p>
          <p className="text-sm text-muted mt-1">For DVLA to process a V5C transfer</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">Free</p>
          <p className="text-sm text-muted mt-1">No fee for bereavement V5C transfers or SORN</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">6 weeks</p>
          <p className="text-sm text-muted mt-1">Grace period for Motability vehicle returns</p>
        </div>
      </div>

      {/* Content sections */}
      <h2 className="text-2xl font-bold text-foreground mb-6">What you need to do</h2>
      <div className="space-y-4 mb-12">
        {SECTIONS.map((section, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Common questions about cars and DVLA after death</h2>
      <div className="space-y-4 mb-12">
        {FAQ.map((item, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides currentPath="/guides/driving-after-death" guides={['/tell-us-once', '/guides/executor-duties', '/guides/subscriptions-after-death', '/template-letters']} />

      <div className="bg-primary-light rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-3">Get a personalised checklist</h2>
        <p className="text-muted mb-6">Answer a few questions and we will create a tailored checklist of everything you need to do, including vehicles, insurance, and DVLA.</p>
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
              { '@type': 'ListItem', position: 3, name: 'Cars & DVLA After Death', item: 'https://helpafterloss.co.uk/guides/driving-after-death' },
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
            headline: 'Cars, Driving Licences & DVLA After a Death',
            description: 'What to do about the deceased\'s car, driving licence, insurance, road tax, and DVLA notification after a death.',
            url: 'https://helpafterloss.co.uk/guides/driving-after-death',
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
