import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Services',
      links: [
        { label: 'Streaming Services', href: '/services?category=streaming' },
        { label: 'Gift Cards', href: '/services?category=gift-cards' },
        { label: 'Bill Payments', href: '/services?category=bill-payments' },
        { label: 'Shopping & Sourcing', href: '/services?category=shopping' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-accent-gold/15 bg-dark-900/90 md:mt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold/45 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-11 w-44">
                <Image
                  src="/brand/logo-long.png"
                  alt="Card Crafters"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium digital services, cards, bill payments, and sourcing support with a clearer order flow.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Copyright {currentYear} Card Crafters. All rights reserved.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-gray-100 mb-4 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>Digital services, cards, bill payments, and sourcing support.</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <span>Guided request flow</span>
              <span>Review before confirmation</span>
              <span>Responsive support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
