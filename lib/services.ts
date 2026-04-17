export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'streaming' | 'gift-cards' | 'bill-payments' | 'shopping';
  categoryLabel: string;
  description: string;
  longDescription: string;
  whatYouProvide: string[];
  deliveryTime: string;
  price?: string;
  features: string[];
  relatedServices?: string[];
  icon?: string;
}

export const SERVICES: Service[] = [
  // Streaming Services
  {
    id: 'netflix-standard-controlled',
    name: 'Netflix Standard – Controlled',
    slug: 'netflix-standard-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Netflix Standard subscription with full billing handled by Card Crafters.',
    longDescription:
      'Managed Netflix Standard subscription operated by Card Crafters. Includes HD streaming and simultaneous viewing on multiple devices. Account billing, renewal, and continuity are fully managed to prevent service interruption. Mandatory CAPS continuity balance required (equal to one billing cycle).',
    whatYouProvide: [
      'Your valid email address',
      'Preferred password setup',
      'Contact information for support requests',
    ],
    deliveryTime: '24-48 hours',
    price: 'TTD 135.00',
    features: [
      'Full account management',
      'Automatic billing renewal',
      'HD streaming quality',
      'Multiple simultaneous streams',
      'Dedicated support',
      'No interruptions guaranteed',
    ],
    relatedServices: [
      'netflix-premium-controlled',
      'netflix-basic-controlled',
      'disney-plus-controlled',
    ],
  },
  {
    id: 'netflix-premium-controlled',
    name: 'Netflix Premium – Controlled',
    slug: 'netflix-premium-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Netflix Premium subscription with 4K streaming and full account control.',
    longDescription:
      'Managed Netflix Premium subscription operated by Card Crafters. Enjoy 4K Ultra HD streaming with support for up to 4 simultaneous devices. Payment, billing, and account continuity are fully managed to prevent service interruption. Mandatory CAPS continuity balance required.',
    whatYouProvide: [
      'Valid email address',
      'Password preference',
      'Contact details',
    ],
    deliveryTime: '24-48 hours',
    price: 'TTD 175.00',
    features: [
      '4K Ultra HD streaming',
      '4 simultaneous devices',
      'Dolby Atmos support',
      'Full account management',
      'Automatic renewal',
      'Priority support',
    ],
    relatedServices: [
      'netflix-standard-controlled',
      'netflix-basic-controlled',
      'apple-tv-controlled',
    ],
  },
  {
    id: 'netflix-basic-controlled',
    name: 'Netflix Basic – Controlled',
    slug: 'netflix-basic-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Netflix Basic subscription with HD streaming quality.',
    longDescription:
      'Managed Netflix Basic subscription operated by Card Crafters. Includes HD streaming on a single device with full account management. Billing and renewal are handled automatically to ensure uninterrupted access. Mandatory CAPS continuity balance required.',
    whatYouProvide: [
      'Email address',
      'Password preference',
      'Contact information',
    ],
    deliveryTime: '24-48 hours',
    price: 'TTD 85.00',
    features: [
      'HD (720p) streaming',
      'Single device streaming',
      'Full account management',
      'Automatic billing',
      'Continuous access',
      'Basic support',
    ],
    relatedServices: [
      'netflix-standard-controlled',
      'netflix-premium-controlled',
      'hulu-no-ads',
    ],
  },
  {
    id: 'disney-plus-controlled',
    name: 'Disney+ – Controlled',
    slug: 'disney-plus-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Disney+ subscription with access to Disney, Marvel, Star Wars, and more.',
    longDescription:
      'Managed Disney+ subscription operated by Card Crafters. Full billing and account management included. Access to exclusive Disney, Marvel, Star Wars, and National Geographic content. Mandatory CAPS continuity balance required equal to one billing cycle.',
    whatYouProvide: [
      'Valid email',
      'Password preference',
      'Contact details',
    ],
    deliveryTime: '24-48 hours',
    price: 'TTD 145.00',
    features: [
      '4K streaming quality',
      'Multiple profiles',
      'Full account control',
      'Automatic renewal',
      'Disney, Marvel & Star Wars content',
      'Download capabilities',
    ],
    relatedServices: [
      'netflix-premium-controlled',
      'hbo-premium-controlled',
      'apple-tv-controlled',
    ],
  },
  {
    id: 'apple-tv-controlled',
    name: 'Apple TV+ – Controlled',
    slug: 'apple-tv-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Apple TV+ subscription with exclusive shows and films.',
    longDescription:
      'Managed Apple TV+ subscription with full billing and account management by Card Crafters. Access to exclusive original content including Emmy-winning series and films. Mandatory CAPS continuity balance required.',
    whatYouProvide: [
      'Email address',
      'Password setup',
      'Contact information',
    ],
    deliveryTime: '24-48 hours',
    price: 'TTD 95.00',
    features: [
      '4K streaming quality',
      'Multiple user profiles',
      'Exclusive originals',
      'Full account management',
      'Automatic renewal',
      'Family sharing ready',
    ],
    relatedServices: [
      'netflix-premium-controlled',
      'disney-plus-controlled',
      'hbo-premium-controlled',
    ],
  },
  {
    id: 'hbo-premium-controlled',
    name: 'HBO Premium – Controlled',
    slug: 'hbo-premium-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed HBO Premium subscription with ad-free streaming access.',
    longDescription:
      'Managed HBO Premium subscription operated by Card Crafters. Full ad-free streaming access with comprehensive account management and automatic renewal. Mandatory CAPS continuity balance required equal to one billing cycle.',
    whatYouProvide: [
      'Email address',
      'Password preference',
      'Contact info',
    ],
    deliveryTime: '24-48 hours',
    price: 'TTD 115.00',
    features: [
      'Ad-free streaming',
      '4K available',
      'Multiple profiles',
      'Full account control',
      'Automatic billing',
      'Download to device',
    ],
    relatedServices: [
      'netflix-premium-controlled',
      'disney-plus-controlled',
      'apple-tv-controlled',
    ],
  },
  {
    id: 'prime-video-controlled',
    name: 'Prime Video – Controlled',
    slug: 'prime-video-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Amazon Prime Video subscription with movies and exclusive series.',
    longDescription:
      'Managed Amazon Prime Video access with full billing and account control by Card Crafters. Access to thousands of movies, shows, and exclusive Prime originals. Continuity balance required for uninterrupted service.',
    whatYouProvide: [
      'Valid email',
      'Password preference',
      'Contact details',
    ],
    deliveryTime: '24-48 hours',
    price: 'TTD 70.00',
    features: [
      '4K streaming available',
      'Unlimited movies & shows',
      'Prime exclusive content',
      'Full account management',
      'Automatic renewal',
      'Download feature',
    ],
    relatedServices: [
      'netflix-premium-controlled',
      'disney-plus-controlled',
      'apple-tv-controlled',
    ],
  },

  // Gift Cards
  {
    id: 'amazon-10-gift-card',
    name: 'Amazon $10 Gift Card',
    slug: 'amazon-10-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Amazon gift card code worth USD $10.',
    longDescription:
      'Digital Amazon gift card code valued at USD $10. Delivered electronically after payment confirmation. Use immediately for purchases on Amazon. This is a digital product with instant delivery.',
    whatYouProvide: ['Email address for delivery'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 90.00',
    features: [
      'Digital delivery',
      'Instant use',
      'No expiration',
      'Full value redeemable',
      'Secure delivery',
    ],
    relatedServices: [
      'amazon-15-gift-card',
      'amazon-25-gift-card',
      'amazon-50-gift-card',
    ],
  },
  {
    id: 'amazon-15-gift-card',
    name: 'Amazon $15 Gift Card',
    slug: 'amazon-15-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Amazon gift card code worth USD $15.',
    longDescription:
      'Digital Amazon gift card code valued at USD $15. Delivered electronically immediately after payment. Ready to use on any Amazon purchase. One-time digital product.',
    whatYouProvide: ['Email for delivery'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 145.00',
    features: [
      'Instant digital delivery',
      'No expiry',
      'Full redemption value',
      'Secure code',
    ],
    relatedServices: [
      'amazon-10-gift-card',
      'amazon-25-gift-card',
      'amazon-100-gift-card',
    ],
  },
  {
    id: 'amazon-25-gift-card',
    name: 'Amazon $25 Gift Card',
    slug: 'amazon-25-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Amazon gift card code worth USD $25.',
    longDescription:
      'Digital Amazon gift card code valued at USD $25. Electronic delivery after payment confirmation. Use immediately for shopping on Amazon. Full digital product.',
    whatYouProvide: ['Email address'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 250.00',
    features: [
      'Instant delivery',
      'Lifetime value',
      'Digital format',
      'Secure code',
    ],
    relatedServices: [
      'amazon-15-gift-card',
      'amazon-50-gift-card',
      'amazon-100-gift-card',
    ],
  },
  {
    id: 'amazon-50-gift-card',
    name: 'Amazon $50 Gift Card',
    slug: 'amazon-50-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Amazon gift card code worth USD $50.',
    longDescription:
      'Digital Amazon gift card code valued at USD $50. Delivered electronically after payment. Full purchasing power on Amazon. Digital product only.',
    whatYouProvide: ['Email for code delivery'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 400.00',
    features: [
      'Fast delivery',
      'Redeemable immediately',
      'No expiration',
      'Digital format',
    ],
    relatedServices: [
      'amazon-25-gift-card',
      'amazon-100-gift-card',
      'google-play-25-gift-card',
    ],
  },
  {
    id: 'amazon-100-gift-card',
    name: 'Amazon $100 Gift Card',
    slug: 'amazon-100-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Amazon gift card code worth USD $100.',
    longDescription:
      'Digital Amazon gift card code valued at USD $100. Delivered electronically immediately after payment confirmation. Full purchasing power on Amazon.',
    whatYouProvide: ['Email address for delivery'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 800.00',
    features: [
      'Instant delivery',
      'Full value usable',
      'Digital secure code',
      'No expiration date',
    ],
    relatedServices: [
      'amazon-50-gift-card',
      'google-play-100-gift-card',
      'steam-gift-card-50',
    ],
  },
  {
    id: 'google-play-25-gift-card',
    name: 'Google Play $25 Gift Card',
    slug: 'google-play-25-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Google Play gift card code worth USD $25.',
    longDescription:
      'Digital Google Play gift card code valued at USD $25. Use for apps, games, books, and entertainment on Google Play Store. Delivered electronically after payment.',
    whatYouProvide: ['Email address'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 250.00',
    features: [
      'Google Play apps & games',
      'Instant digital delivery',
      'No expiration',
      'Secure code delivery',
    ],
    relatedServices: [
      'google-play-50-gift-card',
      'google-play-100-gift-card',
      'steam-gift-card-25',
    ],
  },
  {
    id: 'google-play-50-gift-card',
    name: 'Google Play $50 Gift Card',
    slug: 'google-play-50-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Google Play gift card code worth USD $50.',
    longDescription:
      'Digital Google Play gift card code valued at USD $50. Access thousands of apps, games, movies, and books on Google Play. Immediate electronic delivery.',
    whatYouProvide: ['Email for delivery'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 400.00',
    features: [
      'Apps, games & entertainment',
      'Fast digital delivery',
      'Permanent balance',
      'Secure code',
    ],
    relatedServices: [
      'google-play-25-gift-card',
      'google-play-100-gift-card',
      'steam-gift-card-50',
    ],
  },
  {
    id: 'google-play-100-gift-card',
    name: 'Google Play $100 Gift Card',
    slug: 'google-play-100-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Google Play gift card code worth USD $100.',
    longDescription:
      'Digital Google Play gift card code valued at USD $100. Maximum purchasing power for apps, games, subscriptions, and media on Google Play Store.',
    whatYouProvide: ['Email address for code'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 800.00',
    features: [
      'Full Google Play access',
      'Instant email delivery',
      'No expiry',
      'Unlimited redemption',
    ],
    relatedServices: [
      'google-play-50-gift-card',
      'steam-gift-card-100',
      'amazon-100-gift-card',
    ],
  },
  {
    id: 'steam-gift-card-25',
    name: 'Steam Gift Card $25',
    slug: 'steam-gift-card-25',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Steam gift card code worth USD $25 for gaming.',
    longDescription:
      'Digital Steam gift card code valued at USD $25. Use on Steam platform for games, software, and DLC. Delivered electronically after payment.',
    whatYouProvide: ['Email address'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 250.00',
    features: [
      'Steam games & DLC',
      'Instant digital delivery',
      'Account wallet credit',
      'Secure code',
    ],
    relatedServices: [
      'steam-gift-card-50',
      'steam-gift-card-100',
      'google-play-25-gift-card',
    ],
  },
  {
    id: 'steam-gift-card-50',
    name: 'Steam Gift Card $50',
    slug: 'steam-gift-card-50',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Steam gift card code worth USD $50 for PC gaming.',
    longDescription:
      'Digital Steam gift card code valued at USD $50. Purchase any games, software, or DLC from Steam. Immediate electronic delivery to email.',
    whatYouProvide: ['Email for delivery'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 400.00',
    features: [
      'All Steam products',
      'Fast digital delivery',
      'Account wallet credit',
      'Secure transfer',
    ],
    relatedServices: [
      'steam-gift-card-25',
      'steam-gift-card-100',
      'google-play-50-gift-card',
    ],
  },
  {
    id: 'steam-gift-card-100',
    name: 'Steam Gift Card $100',
    slug: 'steam-gift-card-100',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Steam gift card code worth USD $100.',
    longDescription:
      'Digital Steam gift card code valued at USD $100. Full purchasing power for games, software, and DLC on Steam. Digital delivery.',
    whatYouProvide: ['Email address'],
    deliveryTime: '15-30 minutes',
    price: 'TTD 800.00',
    features: [
      'Maximum Steam access',
      'Instant delivery',
      'Full account credit',
      'Lifetime value',
    ],
    relatedServices: [
      'steam-gift-card-50',
      'google-play-100-gift-card',
      'amazon-100-gift-card',
    ],
  },

  // Bill Payments
  {
    id: 'utility-bill-payment',
    name: 'Utility Bill Payment',
    slug: 'utility-bill-payment',
    category: 'bill-payments',
    categoryLabel: 'Bill Payments',
    description: 'Pay your electricity, water, and utility bills online.',
    longDescription:
      'Secure online payment service for utility bills including electricity, water, and other utilities. We handle the payment processing and provide confirmation. Quick processing with receipts provided.',
    whatYouProvide: [
      'Account number',
      'Bill amount or meter number',
      'Contact information',
      'Confirmation details',
    ],
    deliveryTime: '24-48 hours',
    price: 'Varies by amount',
    features: [
      'Secure payment processing',
      'Online submission',
      'Receipt provided',
      'Multiple utility types',
      'Quick confirmation',
      'Account tracking',
    ],
    relatedServices: [
      'internet-cable-payment',
      'subscription-payment',
    ],
  },
  {
    id: 'internet-cable-payment',
    name: 'Internet & Cable Payment',
    slug: 'internet-cable-payment',
    category: 'bill-payments',
    categoryLabel: 'Bill Payments',
    description: 'Pay internet and cable service bills online.',
    longDescription:
      'Online payment service for internet, cable, and telecom bills. We process payments securely and provide confirmation documents. Covers all major service providers.',
    whatYouProvide: [
      'Account number',
      'Service provider info',
      'Payment amount',
      'Contact email',
    ],
    deliveryTime: '24-48 hours',
    price: 'Varies by amount',
    features: [
      'Secure online processing',
      'Fast confirmation',
      'Multiple providers',
      'Payment receipts',
      'Account management',
      'Support available',
    ],
    relatedServices: [
      'utility-bill-payment',
      'subscription-payment',
    ],
  },
  {
    id: 'subscription-payment',
    name: 'Subscription Service Payment',
    slug: 'subscription-payment',
    category: 'bill-payments',
    categoryLabel: 'Bill Payments',
    description: 'Pay for online subscriptions and memberships.',
    longDescription:
      'Payment service for online subscriptions, memberships, and recurring services. We handle secure processing for various platforms and services.',
    whatYouProvide: [
      'Account details',
      'Service information',
      'Payment amount',
      'Contact info',
    ],
    deliveryTime: '24-48 hours',
    price: 'Varies by amount',
    features: [
      'Multiple platforms',
      'Secure payment',
      'Instant confirmation',
      'Receipt generation',
      'Easy tracking',
    ],
    relatedServices: [
      'utility-bill-payment',
      'internet-cable-payment',
    ],
  },

  // Shopping & Sourcing
  {
    id: 'online-shopping-sourcing',
    name: 'Online Shopping & Sourcing',
    slug: 'online-shopping-sourcing',
    category: 'shopping',
    categoryLabel: 'Shopping & Sourcing',
    description: 'Professional shopping and product sourcing assistance.',
    longDescription:
      'Full service shopping and sourcing assistance. We help you find, purchase, and arrange delivery of products from international retailers. Expert product research and vendor negotiation included.',
    whatYouProvide: [
      'Product specifications',
      'Quantity needed',
      'Budget range',
      'Delivery address',
      'Contact information',
    ],
    deliveryTime: '5-14 business days',
    price: 'Varies by purchase',
    features: [
      'Product research',
      'Price comparison',
      'Vendor selection',
      'Quality assurance',
      'Logistics handling',
      'Customs assistance',
      'Delivery confirmation',
    ],
    relatedServices: [
      'custom-package-handling',
    ],
  },
  {
    id: 'custom-package-handling',
    name: 'Custom Package & Freight',
    slug: 'custom-package-handling',
    category: 'shopping',
    categoryLabel: 'Shopping & Sourcing',
    description: 'International shipping, customs, and freight handling.',
    longDescription:
      'Complete international logistics service including customs clearance, freight arrangement, and final delivery. We handle all documentation and compliance requirements.',
    whatYouProvide: [
      'Package details',
      'Contents list',
      'Declared value',
      'Recipient info',
      'Special instructions',
    ],
    deliveryTime: '7-21 days',
    price: 'TTD 200+',
    features: [
      'Customs clearance',
      'Freight arrangement',
      'Documentation handling',
      'Insurance options',
      'Tracking available',
      'Door-to-door delivery',
    ],
    relatedServices: [
      'online-shopping-sourcing',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return SERVICES.filter(service => service.category === category);
}

export function getCategories() {
  return [
    { id: 'streaming', label: 'Streaming Services', count: SERVICES.filter(s => s.category === 'streaming').length },
    { id: 'gift-cards', label: 'Gift Cards', count: SERVICES.filter(s => s.category === 'gift-cards').length },
    { id: 'bill-payments', label: 'Bill Payments', count: SERVICES.filter(s => s.category === 'bill-payments').length },
    { id: 'shopping', label: 'Shopping & Sourcing', count: SERVICES.filter(s => s.category === 'shopping').length },
  ];
}
