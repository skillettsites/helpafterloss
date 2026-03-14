import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { bereavementContacts } from '@/lib/bereavement-contacts';

export const dynamic = 'force-dynamic';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY is not configured');
  return new Resend(key);
}

// Rate limiting: IP-based, max 3 requests per hour
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  rateLimitMap.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

interface NotifyRequest {
  yourName: string;
  yourEmail: string;
  yourAddress: string;
  yourPhone: string;
  relationship: string;
  deceasedName: string;
  dateOfDeath: string;
  organisations: {
    name: string;
    email: string;
    slug: string;
    category: string;
    accountNumber?: string;
    sortCode?: string;
    customerReference?: string;
  }[];
}

function formatDateUK(dateStr: string): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) return dateStr;
  const day = parsed.getDate();
  const month = months[parsed.getMonth()];
  const year = parsed.getFullYear();
  return `${day} ${month} ${year}`;
}

function generateEmailBody(data: NotifyRequest, org: NotifyRequest['organisations'][0], formattedDate: string): string {
  const lines: string[] = [];

  lines.push(`Dear Sir or Madam,`);
  lines.push('');
  lines.push(`I am writing to notify you of the death of ${data.deceasedName}, who held an account or policy with ${org.name}.`);
  lines.push('');
  lines.push(`${data.deceasedName} passed away on ${formattedDate}.`);
  lines.push('');

  if (org.accountNumber || org.sortCode || org.customerReference) {
    lines.push('The account details I am aware of are:');
    lines.push('');
    if (org.accountNumber) lines.push(`Account/Policy number: ${org.accountNumber}`);
    if (org.sortCode) lines.push(`Sort code: ${org.sortCode}`);
    if (org.customerReference) lines.push(`Customer reference: ${org.customerReference}`);
    lines.push('');
  }

  lines.push(`I am the ${data.relationship} and would be grateful if you could:`);
  lines.push('');

  if (org.category === 'bank' || org.category === 'building-society') {
    lines.push('- Freeze the account(s) to prevent any unauthorised transactions');
    lines.push('- Confirm the balance(s) as at the date of death');
    lines.push('- Advise me of any standing orders or direct debits on the account(s)');
    lines.push('- Let me know what documentation you require to release the funds');
  } else if (org.category === 'energy') {
    lines.push('- Note the account holder has passed away');
    lines.push('- Provide a final meter reading or advise how to submit one');
    lines.push('- Transfer the account to my name or close it as appropriate');
    lines.push('- Confirm any outstanding balance or credit on the account');
  } else if (org.category === 'telecoms') {
    lines.push('- Note the account holder has passed away');
    lines.push('- Cancel the account or transfer it to my name');
    lines.push('- Confirm any outstanding balance or credit');
    lines.push('- Waive any early termination fees, given the circumstances');
  } else if (org.category === 'water') {
    lines.push('- Note the account holder has passed away');
    lines.push('- Transfer the account to my name or close it');
    lines.push('- Confirm any outstanding balance or credit');
  } else if (org.category === 'insurance') {
    lines.push('- Note the policyholder has passed away');
    lines.push('- Advise me of any policies held and their current value');
    lines.push('- Let me know what documentation is required to make a claim');
    lines.push('- Confirm the process and expected timescales');
  } else {
    lines.push('- Note the account holder has passed away');
    lines.push('- Advise me of the next steps and any documentation required');
    lines.push('- Confirm any outstanding matters on the account');
  }

  lines.push('');
  lines.push('I will provide a certified copy of the death certificate and any other required documentation on request.');
  lines.push('');
  lines.push('Please send all correspondence to:');
  lines.push('');
  lines.push(data.yourName);
  lines.push(data.yourAddress);
  lines.push(`Phone: ${data.yourPhone}`);
  lines.push(`Email: ${data.yourEmail}`);
  lines.push('');
  lines.push('Yours faithfully,');
  lines.push('');
  lines.push(data.yourName);

  return lines.join('\n');
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const data: NotifyRequest = await request.json();

    // Validate required fields
    if (!data.yourName || !data.yourEmail || !data.deceasedName || !data.dateOfDeath || !data.relationship) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate yourAddress and yourPhone are non-empty
    if (!data.yourAddress || !data.yourAddress.trim()) {
      return NextResponse.json({ error: 'Your address is required' }, { status: 400 });
    }
    if (!data.yourPhone || !data.yourPhone.trim()) {
      return NextResponse.json({ error: 'Your phone number is required' }, { status: 400 });
    }

    if (!data.organisations || data.organisations.length === 0) {
      return NextResponse.json({ error: 'No organisations selected' }, { status: 400 });
    }

    if (data.organisations.length > 20) {
      return NextResponse.json({ error: 'Maximum 20 organisations per request' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.yourEmail)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Format date of death as UK format
    const formattedDate = formatDateUK(data.dateOfDeath);

    // Server-side organisation lookup: resolve email from slug, never trust client-supplied email
    const resolvedOrgs = data.organisations.map(org => {
      const contact = bereavementContacts.find(c => c.slug === org.slug);
      if (!contact || !contact.bereavementEmail) {
        return { ...org, resolvedEmail: null as string | null };
      }
      return {
        ...org,
        name: contact.name,
        category: contact.category,
        resolvedEmail: contact.bereavementEmail,
      };
    });

    const invalidOrgs = resolvedOrgs.filter(o => !o.resolvedEmail);
    if (invalidOrgs.length === resolvedOrgs.length) {
      return NextResponse.json(
        { error: 'None of the selected organisations have a verified email address on file.' },
        { status: 400 }
      );
    }

    const results: { organisation: string; success: boolean; error?: string }[] = [];

    for (const org of resolvedOrgs) {
      if (!org.resolvedEmail) {
        results.push({
          organisation: org.name,
          success: false,
          error: 'No verified email address on file for this organisation',
        });
        continue;
      }

      try {
        const body = generateEmailBody(data, org, formattedDate);

        const resend = getResend();
        await resend.emails.send({
          from: 'Help After Loss <notifications@helpafterloss.co.uk>',
          to: [org.resolvedEmail],
          cc: [data.yourEmail],
          replyTo: data.yourEmail,
          subject: `Bereavement Notification - ${data.deceasedName}`,
          text: body,
        });

        results.push({ organisation: org.name, success: true });
      } catch (err) {
        results.push({
          organisation: org.name,
          success: false,
          error: err instanceof Error ? err.message : 'Failed to send',
        });
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failCount = results.filter(r => !r.success).length;

    return NextResponse.json({
      message: `${successCount} email${successCount !== 1 ? 's' : ''} sent successfully${failCount > 0 ? `, ${failCount} failed` : ''}`,
      results,
    });
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
