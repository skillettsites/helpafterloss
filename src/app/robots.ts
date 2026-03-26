import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/results', '/dashboard', '/auth', '/donate/thank-you', '/print-checklist'],
      },
    ],
    sitemap: 'https://helpafterloss.co.uk/sitemap.xml',
  };
}
