import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Document Vault Checklist',
  description: 'Keep track of the important documents you need after a bereavement. Check off items as you gather them, with helpful tips on where to find each one.',
  alternates: { canonical: 'https://helpafterloss.co.uk/document-vault' },
};

export default function DocumentVaultLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
