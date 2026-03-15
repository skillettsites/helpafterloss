import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { Providers } from '@/components/Providers';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://helpafterloss.co.uk'),
  title: {
    default: 'Help After Loss - Free Bereavement Guidance for the UK',
    template: '%s | Help After Loss',
  },
  description: 'Free, personalised guidance when someone dies. Get a step-by-step checklist tailored to your situation, covering registration, probate, finances, and more. Trusted UK bereavement support.',
  keywords: ['bereavement', 'what to do when someone dies', 'death checklist UK', 'probate guide', 'registering a death', 'Tell Us Once', 'funeral costs', 'inheritance tax', 'bereavement support payment', 'help after death UK'],
  authors: [{ name: 'Help After Loss' }],
  creator: 'Help After Loss',
  publisher: 'Help After Loss',
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://helpafterloss.co.uk',
    siteName: 'Help After Loss',
    title: 'Help After Loss - Free Bereavement Guidance for the UK',
    description: 'Free, personalised step-by-step guidance when someone dies. Covers everything from registering the death to probate and beyond.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Help After Loss - Compassionate Bereavement Guidance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help After Loss - Free Bereavement Guidance',
    description: 'Free, personalised step-by-step guidance when someone dies in the UK.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: 'KjsTztqB7yI4hyx-0pYddQxxcFnvaeer3rIn8SKA8aE' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0369a1" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
      </head>
      <GoogleAnalytics />
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-3 focus:rounded-lg focus:shadow-lg focus:text-primary">
          Skip to main content
        </a>
        <Providers>
          <EmergencyBanner />
          <Navigation />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
