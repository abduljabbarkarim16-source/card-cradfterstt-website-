'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from './cart/CartProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { count, openCart } = useCart();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  function isActiveRoute(href: string) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-accent-gold/10 bg-dark-950/88 backdrop-blur-md">
      <div className="max-w-7xl mx-auto pl-0 pr-2 sm:pr-4 lg:pr-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-16 w-16 overflow-hidden">
              <Image
                src="/brand/monogram-glow.png"
                alt="Card Crafters"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-1 py-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActiveRoute(link.href)
                    ? 'bg-accent-gold/10 text-accent-gold'
                    : 'text-gray-300 hover:bg-white/[0.04] hover:text-accent-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-200 transition hover:border-accent-gold hover:text-accent-gold"
              aria-label={`Open cart${count > 0 ? ` with ${count} item${count === 1 ? '' : 's'}` : ''}`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h2.386a1.5 1.5 0 011.47 1.206l.286 1.43m0 0L7.5 13.5A1.5 1.5 0 008.986 15h7.714a1.5 1.5 0 001.43-1.045l1.62-5.105A1.5 1.5 0 0018.32 6.9H6.392m0-1.264L6.75 7.5m2.25 12a.75.75 0 100-1.5.75.75 0 000 1.5zm8.25 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              {count > 0 && (
                <span className="absolute -right-2 -top-2 min-w-5 rounded-full bg-accent-gold px-1.5 py-0.5 text-center text-xs font-bold leading-none text-dark-950">
                  {count}
                </span>
              )}
            </button>
            <Link href="/services" className="btn btn-primary text-xs md:text-sm">
              Services
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-accent-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 pb-4 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                  isActiveRoute(link.href)
                    ? 'bg-accent-gold/10 text-accent-gold'
                    : 'text-gray-300 hover:bg-dark-800 hover:text-accent-gold'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/services"
              className="block px-4 py-2 mt-2 btn btn-primary text-xs text-center"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-gray-200"
              aria-label={`Open cart${count > 0 ? ` with ${count} item${count === 1 ? '' : 's'}` : ''}`}
              onClick={() => {
                setIsOpen(false);
                openCart();
              }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h2.386a1.5 1.5 0 011.47 1.206l.286 1.43m0 0L7.5 13.5A1.5 1.5 0 008.986 15h7.714a1.5 1.5 0 001.43-1.045l1.62-5.105A1.5 1.5 0 0018.32 6.9H6.392m0-1.264L6.75 7.5m2.25 12a.75.75 0 100-1.5.75.75 0 000 1.5zm8.25 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              {count > 0 && <span className="rounded-full bg-accent-gold px-2 py-0.5 text-xs font-bold text-dark-950">{count}</span>}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
