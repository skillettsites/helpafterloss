// Managed Will & Probate Record Search product constants.
// Pricing promise: £29 all-in, including the £16 HMCTS copy fee
// (or the £4 standing search fee where no grant exists yet).
// Keep every public claim on the page consistent with these numbers.

export const WILL_SEARCH_PRICE_PENCE = 2900;
export const WILL_SEARCH_NAME = 'Managed Will & Probate Record Search';
export const WILL_SEARCH_DESCRIPTION =
  'We search the England & Wales probate records for you, place the official order, and deliver the documents with a plain-English explanation. £29 all-in, government fees included.';

// Verified against gov.uk/search-will-probate (checked 24 Jul 2026).
// If any of these change on GOV.UK, update here and the page copy follows.
export const GOVUK_COPY_FEE = '£16';
export const GOVUK_STANDING_SEARCH_FEE = '£4';
export const GOVUK_ONLINE_AVAILABILITY = 'around 14 days after probate is issued';
export const GOVUK_POSTAL_RESPONSE = 'within 4 weeks';
export const INCUMBENT_PRICE_FLOOR = '£65'; // National Will Register basic search, verified 23 Jul 2026

export type WillSearchOrder = {
  deceasedName: string;
  otherNames: string;
  deathDate: string;
  location: string;
  customerName: string;
  customerEmail: string;
  notes: string;
};

export function cleanEnv(value: string | undefined): string {
  // Env values in this stack sometimes carry a literal trailing "\n" (two chars).
  // Strip it or Stripe/Resend reject the key as invalid.
  return (value ?? '').replace(/\\n$/, '').trim();
}
