import type { Metadata } from 'next';
import { DocumentVaultClient } from './DocumentVaultClient';

export const metadata: Metadata = {
  title: 'Document Vault: Track the Paperwork You Need',
  description: 'A free, private checklist of the 28 documents you may need after someone passes away. Tick off what you have found, see what is still missing, and print it. Nothing leaves your device.',
  alternates: { canonical: 'https://helpafterloss.co.uk/document-vault' },
  openGraph: {
    title: 'Document Vault: Track the Paperwork You Need',
    description: 'A free, private checklist of the documents you need after a bereavement. Tick off what you have found and see what is still missing.',
    url: 'https://helpafterloss.co.uk/document-vault',
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Help After Loss' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document Vault: Track the Paperwork You Need',
    description: 'A free, private checklist of the documents you need after a bereavement.',
  },
};

export default function DocumentVaultPage() {
  return <DocumentVaultClient />;
}
