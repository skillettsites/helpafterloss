import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedGuides } from '@/components/RelatedGuides';
import { GuideImage } from '@/components/GuideImage';

export const metadata: Metadata = {
  title: 'Cars, Driving Licences & DVLA After a Death',
  description: 'What to do about the deceased\'s car, driving licence, insurance, road tax, and DVLA notification after a death. Covers V5C transfer, SORN, Motability returns, and personalised plates.',
  alternates: { canonical: 'https://helpafterloss.co.uk/guides/driving-after-death' },
  openGraph: {
    title: 'Cars, Driving Licences & DVLA After a Death',
    description: 'Everything you need to know about cars, driving licences, insurance, and DVLA after someone dies. V5C transfer, SORN, tax refunds, and Motability explained.',
    url: 'https://helpafterloss.co.uk/guides/driving-after-death',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
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
    content: 'If you used Tell Us Once when registering the death, DVLA is notified automatically. That cancels the driving licence, removes the person as the registered keeper of up to 5 vehicles, and ends the vehicle tax. You still have to tell DVLA separately if you sell a vehicle, keep a vehicle (even temporarily, and even if you are not using it), or want to keep a personalised registration number. If you did not use Tell Us Once, there is no form to fill in: simply write to DVLA, Swansea, SA99 1AB. Your letter must include your relationship to the person who died, the date they died, and their name, address and date of birth. Include their driving licence with the letter if you have it. You do not need to send a death certificate.',
  },
  {
    title: 'Car insurance: act immediately',
    content: 'This one is worth doing early. Please do not assume the car is still insured. Some insurers keep cover running for a short period, and many follow guidance from the Association of British Insurers to keep named drivers covered until renewal, but that is guidance rather than law, and others end the policy at the date of death. So the vehicle should not be driven until you have checked with the insurer or arranged new cover. Anyone who drives it in the meantime is driving uninsured, which can mean a fixed penalty of £300 and 6 penalty points, an unlimited fine and disqualification in court, and the police seizing the vehicle. You have three options: add the vehicle to your own existing insurance policy (call your insurer), take out a temporary short-term policy (available from companies like Cuvva or Tempcover), or SORN the vehicle so it is kept off the public road. Ring the insurer either way, as there may be a refund of premium due to the estate.',
  },
  {
    title: 'Transferring the V5C (logbook)',
    content: 'If you want to keep the vehicle, fill in section 2 of the V5C if it is the newer style with multi-coloured numbered blocks on the front, or section 6 if it is the older style. Tear off and keep the green "new keeper" slip. Write a letter explaining your relationship to the person who died, the date they died, and who should be paid any vehicle tax refund, then send it with the V5C to the Sensitive Casework Team, DVLA, Swansea, SA99 1ZZ. There is no fee for this. DVLA will cancel the existing vehicle tax and any direct debits, send a cheque for the refund, and issue a new V5C. If the log book cannot be found, fill in form V62 instead, which costs £25.',
  },
  {
    title: 'Vehicle tax cannot be transferred',
    content: 'This is the step people most often miss. Vehicle tax cannot be transferred from one person to another, so the tax ends when DVLA is told about the death, even if you are keeping the car in the family. Use the green new keeper slip to tax the vehicle in your own name before you drive it on a public road, and do not wait for the new V5C to arrive. If you would rather not tax it yet, include form V890 with your letter to declare it off the road (SORN). You can be prosecuted if the vehicle is used on a public road before it is taxed in your own name and insured.',
  },
  {
    title: 'SORN (Statutory Off Road Notification)',
    content: 'If the car will not be driven or kept on a public road, make a SORN. You can do this online at gov.uk, by phone on 0300 123 4321, or by including form V890 with your letter to the Sensitive Casework Team. SORN is free and means the vehicle does not need vehicle tax while it is off the road. The vehicle must be kept on private land (a driveway, garage, or private car park), not on a public road.',
  },
  {
    title: 'Vehicle tax (road tax) refund',
    content: 'DVLA automatically refunds any full calendar months of remaining vehicle tax once it is told the vehicle has been sold or transferred, taken off the road, scrapped or written off. The refund comes as a cheque, sent to the name and address on the vehicle log book, which is why your letter should say who the refund should be paid to. Contact DVLA if the cheque has not arrived after 8 weeks. If it arrives in the wrong name, send it back to the Refund Section, DVLA, Swansea, SA99 1AL and tell them the right name.',
  },
  {
    title: 'Selling the vehicle',
    content: 'The executor can sell the vehicle as part of the estate. Write to the Sensitive Casework Team, DVLA, Swansea, SA99 1ZZ with your relationship to the person who died, the date they died, and who should be paid any vehicle tax refund, and send the relevant part of the V5C: section 2 or 6 for a private buyer (give them the green slip), or the yellow motor trade section if you are selling to a dealer. The tax does not go with the car, so the buyer must tax it in their own name before driving it. The sale price forms part of the estate value for probate purposes, so keep a record of the valuation and the sale price.',
  },
  {
    title: 'MOT',
    content: 'The existing MOT remains valid regardless of a change of ownership. The new keeper will need to arrange their own MOT when the current one expires. You can check the MOT expiry date online at gov.uk using the vehicle\'s registration number.',
  },
  {
    title: 'Motability vehicles',
    content: 'If they had a vehicle through the Motability scheme, it must be returned. Call Motability on 0300 456 4566 before you use Tell Us Once or contact DVLA, because telling DVLA first ends the vehicle tax and the car then cannot be driven at all. Once Motability has been told, other named drivers can use the car for up to two weeks to sort out practical matters, after which it goes back to a dealer. Scooters and powered wheelchairs must stop being used straight away and be stored safely until they are collected.',
  },
  {
    title: 'Personalised number plates',
    content: 'If they had a private or personalised registration plate, the executor can keep it, but you have to tell DVLA separately and do it before the vehicle is sold or scrapped. Apply on form V317 to put the number on a retention certificate, which costs £80. The V778 retention document you get back gives the right to assign the number for the next 10 years. If no action is taken, the personalised plate stays with the vehicle when it is sold or scrapped.',
  },
  {
    title: 'If you are in Northern Ireland',
    content: 'The process is different. Tell Us Once is not available in Northern Ireland, so everything has to be done separately. Send the driving licence, with a covering letter giving the person\'s name, address and date of birth or driver number, the date they died, and your relationship to them, to DVA, Driver Licensing Division, Castlerock Road, Waterside, Coleraine, BT51 3TB. You do not need to send the death certificate. Anything to do with the vehicle itself still goes to DVLA in Swansea, SA99 1ZZ, so it is worth telling both.',
  },
];

const FAQ = [
  {
    q: 'How do I notify DVLA of a death?',
    a: 'The easiest way is through Tell Us Once, which notifies DVLA automatically when you register the death. If you did not use Tell Us Once, there is no form to complete. Write to DVLA, Swansea, SA99 1AB, giving your relationship to the person who died, the date they died, and their name, address and date of birth. Include their driving licence if you have it. You do not need to send the death certificate.',
  },
  {
    q: 'Can I drive their car?',
    a: 'Not without checking first. Please do not assume the car is still insured. Some insurers keep cover running for a short period, and many follow guidance from the Association of British Insurers to keep named drivers covered until renewal, but that is guidance rather than law, and some policies end at the date of death. One call to the insurer will tell you exactly where you stand, and driving on an assumption is not worth the risk. You need to add the car to your own insurance or take out a temporary policy, and tax it in your own name, or else keep it off the road with a SORN. Driving uninsured or untaxed can be prosecuted.',
  },
  {
    q: 'What happens to car insurance when someone dies?',
    a: 'Cover for other drivers stops, and many insurers cancel the policy or allow only a short grace period once they are told. Contact the insurance company to tell them and ask about any refund for the remaining premium. If they were paying monthly by direct debit, the insurer may try to collect further payments, so cancel the direct debit as well. Named drivers on the policy should not rely on it either.',
  },
  {
    q: 'How do I transfer a car into my name after a death?',
    a: 'Fill in section 2 of the V5C (or section 6 on an older log book), keep the green "new keeper" slip, and send the V5C with a letter giving your relationship to the person who died, the date they died, and who should receive any tax refund, to the Sensitive Casework Team, DVLA, Swansea, SA99 1ZZ. There is no fee. You must then tax the vehicle in your own name using the green slip before driving it, as vehicle tax cannot be transferred.',
  },
  {
    q: 'Do I get a refund on road tax?',
    a: 'Yes. DVLA automatically refunds any full calendar months of remaining vehicle tax once it is told the vehicle has been sold, transferred, taken off the road or scrapped. The refund comes by cheque, sent to the name and address on the log book, so say in your letter who it should be paid to.',
  },
  {
    q: 'What happens to a Motability car when someone dies?',
    a: 'It must be returned. Call Motability on 0300 456 4566 before using Tell Us Once or contacting DVLA, because the vehicle tax ends once DVLA is told and the car then cannot be driven. After you have told Motability, other named drivers can use the car for up to two weeks before it goes back to a dealer.',
  },
];

export default function DrivingAfterDeathPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Cars, Driving Licences & DVLA After a Death' }
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Cars, Driving Licences & DVLA After a Death
      </h1>
      <p className="text-lg text-muted leading-relaxed mb-10">
        Sorting out your loved one's car means dealing with several different organisations, and one or two of these steps genuinely cannot wait. The most urgent is insurance, because a motor policy does not carry over to let anyone else drive the car.
      </p>

      <GuideImage
        src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"
        alt="A parked car on a quiet suburban street"
        credit="Samuele Errico Piccarini"
        creditUrl="https://unsplash.com/@samuele_errico_piccarini"
      />

      {/* Urgent warning */}
      <div className="bg-warm border border-warm-border rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Worth checking first:</strong> please do not assume the car is still insured, because what happens to cover after the policyholder dies varies from one insurer to the next. The vehicle tax cannot be transferred to anyone else either. Do not drive it until it is insured and taxed in the new keeper&apos;s name, or keep it off the road with a SORN.
        </p>
      </div>

      {/* Quick summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">Free</p>
          <p className="text-sm text-muted mt-1">No fee to send the V5C to DVLA, or to make a SORN</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">£25</p>
          <p className="text-sm text-muted mt-1">Fee for form V62 if the log book is missing</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-5 text-center">
          <p className="text-2xl font-bold text-primary">2 weeks</p>
          <p className="text-sm text-muted mt-1">To return a Motability vehicle once you have told them</p>
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
            image: 'https://helpafterloss.co.uk/opengraph-image',
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
