import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Services',
      links: [
        { label: 'Streaming Services', href: '/services/streaming' },
        { label: 'Gift Cards', href: '/services/gift-cards' },
        { label: 'Bill Payments', href: '/services/bill-payments' },
        { label: 'Shopping & Sourcing', href: '/services/shopping' },
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
    <footer className="relative bg-dark-900 border-t border-gray-700 border-opacity-20 mt-20 md:mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center font-bold text-dark-950">
                CC
              </div>
              <span className="text-lg font-bold text-gray-100">Card Crafters</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium digital services and sourcing solutions. Fast, secure, and reliable.
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

        <div className="border-t border-gray-700 border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>Trusted by thousands of customers worldwide</p>
            <div className="flex gap-6">
              <span>Secure & Encrypted</span>
              <span>Verified Payments</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
