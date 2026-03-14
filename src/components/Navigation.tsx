'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AccountMenu } from './AccountMenu';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/guide', label: 'Step-by-Step Guide' },
    { href: '/checklist', label: 'Checklist' },
    { href: '/guides', label: 'Local Guides' },
    { href: '/template-letters', label: 'Letters' },
    { href: '/costs', label: 'Costs' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-40 no-print" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-primary-dark hover:text-primary transition-colors">
            Help After Loss
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start"
              className="ml-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Get Your Guide
            </Link>
            <AccountMenu />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 bg-primary text-white text-center font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Get Your Personalised Guide
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
