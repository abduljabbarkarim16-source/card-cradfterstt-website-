export type ServiceCategoryId = 'streaming' | 'gift-cards' | 'bill-payments' | 'shopping';

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategoryId;
  categoryLabel: string;
  description: string;
  longDescription: string;
  whatYouProvide: string[];
  deliveryTime: string;
  price?: string;
  numericPrice?: number;
  image: string;
  features: string[];
  relatedServices?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'netflix-standard-controlled',
    name: 'Netflix Standard - Controlled',
    slug: 'netflix-standard-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Netflix Standard subscription with account setup and renewal support.',
    longDescription:
      'Managed Netflix Standard access with account setup, billing support, and continuity handled through Card Crafters. Built for customers who want reliable streaming access without managing the payment process themselves.',
    whatYouProvide: ['Valid email address', 'Preferred password setup', 'Contact information for support'],
    deliveryTime: '24-48 hours',
    price: 'TTD 135.00',
    numericPrice: 135,
    image: '/products/netflix-standard.png',
    features: ['Managed account setup', 'HD streaming access', 'Renewal support', 'Customer support'],
    relatedServices: ['netflix-premium-controlled', 'netflix-basic-controlled', 'disney-plus-controlled'],
  },
  {
    id: 'netflix-premium-controlled',
    name: 'Netflix Premium - Controlled',
    slug: 'netflix-premium-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Netflix Premium subscription with 4K plan support.',
    longDescription:
      'Managed Netflix Premium access for customers who want higher quality streaming and multi-device access with Card Crafters assisting with setup and renewal continuity.',
    whatYouProvide: ['Valid email address', 'Preferred password setup', 'Contact information'],
    deliveryTime: '24-48 hours',
    price: 'TTD 175.00',
    numericPrice: 175,
    image: '/products/netflix-premium.png',
    features: ['Premium plan support', '4K capable plan', 'Multi-device access', 'Renewal assistance'],
    relatedServices: ['netflix-standard-controlled', 'netflix-basic-controlled', 'disney-plus-controlled'],
  },
  {
    id: 'netflix-basic-controlled',
    name: 'Netflix Basic - Controlled',
    slug: 'netflix-basic-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Netflix Basic subscription for simple streaming access.',
    longDescription:
      'Managed Netflix Basic access with setup and support from Card Crafters. A straightforward option for customers who need one reliable streaming plan.',
    whatYouProvide: ['Email address', 'Password preference', 'Contact information'],
    deliveryTime: '24-48 hours',
    price: 'TTD 85.00',
    numericPrice: 85,
    image: '/products/netflix-basic.png',
    features: ['Basic plan support', 'Account setup', 'Renewal assistance', 'Support if access issues occur'],
    relatedServices: ['netflix-standard-controlled', 'netflix-premium-controlled', 'prime-video-controlled'],
  },
  {
    id: 'disney-plus-controlled',
    name: 'Disney+ - Controlled',
    slug: 'disney-plus-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Disney+ subscription with setup and renewal support.',
    longDescription:
      'Managed Disney+ access for Disney, Marvel, Star Wars, Pixar, and National Geographic content, with Card Crafters assisting with setup and service continuity.',
    whatYouProvide: ['Valid email address', 'Password preference', 'Contact details'],
    deliveryTime: '24-48 hours',
    price: 'TTD 145.00',
    numericPrice: 145,
    image: '/products/disney-plus.png',
    features: ['Account setup', 'Streaming access support', 'Renewal assistance', 'Responsive support'],
    relatedServices: ['netflix-premium-controlled', 'prime-video-controlled', 'hbo-premium-controlled'],
  },
  {
    id: 'prime-video-controlled',
    name: 'Prime Video - Controlled',
    slug: 'prime-video-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed Prime Video access for movies, series, and originals.',
    longDescription:
      'Managed Prime Video access with Card Crafters assisting with setup and local payment handling so customers can start watching with less friction.',
    whatYouProvide: ['Valid email address', 'Password preference', 'Contact details'],
    deliveryTime: '24-48 hours',
    price: 'TTD 70.00',
    numericPrice: 70,
    image: '/products/prime-video.png',
    features: ['Account setup', 'Streaming access support', 'Local payment assistance', 'Support after activation'],
    relatedServices: ['netflix-standard-controlled', 'disney-plus-controlled', 'hbo-premium-controlled'],
  },
  {
    id: 'hbo-premium-controlled',
    name: 'HBO Premium - Controlled',
    slug: 'hbo-premium-controlled',
    category: 'streaming',
    categoryLabel: 'Streaming Services',
    description: 'Managed HBO streaming access with premium plan support.',
    longDescription:
      'Managed HBO streaming access for customers who want premium entertainment with Card Crafters assisting with setup, payment handling, and access support.',
    whatYouProvide: ['Email address', 'Password preference', 'Contact information'],
    deliveryTime: '24-48 hours',
    price: 'TTD 115.00',
    numericPrice: 115,
    image: '/products/hbo-shared.png',
    features: ['Premium streaming support', 'Account setup', 'Renewal assistance', 'Access troubleshooting'],
    relatedServices: ['netflix-premium-controlled', 'disney-plus-controlled', 'prime-video-controlled'],
  },
  {
    id: 'amazon-gift-card',
    name: 'Amazon Gift Card',
    slug: 'amazon-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Amazon gift card codes with multiple denomination options.',
    longDescription:
      'Digital Amazon gift cards delivered electronically after order confirmation. Choose the denomination and region during checkout or through the gift-card builder.',
    whatYouProvide: ['Email address for delivery', 'Preferred denomination', 'Preferred region'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/amazon.png',
    features: ['Digital delivery', 'Multiple denominations', 'Region selection', 'Secure code handoff'],
    relatedServices: ['google-play-gift-card', 'steam-gift-card', 'visa-gift-card'],
  },
  {
    id: 'google-play-gift-card',
    name: 'Google Play Gift Card',
    slug: 'google-play-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Google Play gift card codes for apps, games, and media.',
    longDescription:
      'Google Play gift card codes for apps, games, books, and entertainment. Choose a supported denomination and region before placing your order.',
    whatYouProvide: ['Email address for delivery', 'Preferred denomination', 'Preferred region'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/google-play.png',
    features: ['Digital delivery', 'Multiple denominations', 'Region selection', 'Secure delivery'],
    relatedServices: ['amazon-gift-card', 'steam-gift-card', 'itunes-gift-card'],
  },
  {
    id: 'steam-gift-card',
    name: 'Steam Gift Card',
    slug: 'steam-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Digital Steam wallet codes for games and PC entertainment.',
    longDescription:
      'Steam gift card codes delivered digitally for supported regions. Use them for games, software, and downloadable content on Steam.',
    whatYouProvide: ['Email address for delivery', 'Preferred denomination', 'Preferred region'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/steam.png',
    features: ['Digital delivery', 'Gaming wallet credit', 'Multiple denominations', 'Secure code handoff'],
    relatedServices: ['playstation-gift-card', 'xbox-gift-card', 'google-play-gift-card'],
  },
  {
    id: 'playstation-gift-card',
    name: 'PlayStation Gift Card',
    slug: 'playstation-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'PlayStation Network credit for games, subscriptions, and add-ons.',
    longDescription:
      'PlayStation gift cards for supported regions. Add credit to a PlayStation account for games, subscriptions, and downloadable content.',
    whatYouProvide: ['Email address for delivery', 'Preferred denomination', 'Preferred region'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/playstation.png',
    features: ['Digital code delivery', 'Gaming credit', 'Region selection', 'Secure handoff'],
    relatedServices: ['xbox-gift-card', 'steam-gift-card', 'google-play-gift-card'],
  },
  {
    id: 'xbox-gift-card',
    name: 'Xbox Gift Card',
    slug: 'xbox-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Xbox credit for games, subscriptions, and Microsoft digital content.',
    longDescription:
      'Xbox gift cards for supported regions. Use them for games, add-ons, subscriptions, and other supported Microsoft digital content.',
    whatYouProvide: ['Email address for delivery', 'Preferred denomination', 'Preferred region'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/xbox.png',
    features: ['Digital code delivery', 'Gaming credit', 'Region selection', 'Secure handoff'],
    relatedServices: ['playstation-gift-card', 'steam-gift-card', 'google-play-gift-card'],
  },
  {
    id: 'visa-gift-card',
    name: 'Visa Gift Card',
    slug: 'visa-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Visa gift card options for supported online purchases.',
    longDescription:
      'Visa gift card options for customers who need flexible digital payment credit. Availability and supported use cases may vary by provider and region.',
    whatYouProvide: ['Email address for delivery', 'Preferred amount', 'Intended use case'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/visa.png',
    features: ['Flexible digital payment option', 'Multiple amounts', 'Use-case guidance', 'Secure delivery'],
    relatedServices: ['amazon-gift-card', 'google-play-gift-card', 'itunes-gift-card'],
  },
  {
    id: 'itunes-gift-card',
    name: 'Apple / iTunes Gift Card',
    slug: 'itunes-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Apple and iTunes credit for supported regions.',
    longDescription:
      'Apple and iTunes gift card credit for supported accounts and regions. Useful for apps, subscriptions, music, movies, and other supported Apple services.',
    whatYouProvide: ['Email address for delivery', 'Preferred denomination', 'Preferred region'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/itunes.png',
    features: ['Digital code delivery', 'Apple ecosystem credit', 'Region selection', 'Secure handoff'],
    relatedServices: ['google-play-gift-card', 'amazon-gift-card', 'spotify-gift-card'],
  },
  {
    id: 'spotify-gift-card',
    name: 'Spotify Gift Card',
    slug: 'spotify-gift-card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards',
    description: 'Spotify gift card credit for supported accounts.',
    longDescription:
      'Spotify gift card options for supported regions and accounts. A simple option for entertainment credit without direct card setup.',
    whatYouProvide: ['Email address for delivery', 'Preferred denomination', 'Preferred region'],
    deliveryTime: '15-30 minutes after confirmation',
    price: 'From TTD 90.00',
    numericPrice: 90,
    image: '/products/spotify.png',
    features: ['Digital delivery', 'Entertainment credit', 'Region selection', 'Secure handoff'],
    relatedServices: ['itunes-gift-card', 'google-play-gift-card', 'amazon-gift-card'],
  },
  {
    id: 'utility-bill-payment',
    name: 'Utility Bill Payment',
    slug: 'utility-bill-payment',
    category: 'bill-payments',
    categoryLabel: 'Bill Payments',
    description: 'Bill-payment assistance for local utility providers.',
    longDescription:
      'Submit bill details and payment amount for local utility-payment assistance. Card Crafters helps process the payment and provide confirmation after completion.',
    whatYouProvide: ['Provider name', 'Account number', 'Customer name', 'Bill amount', 'Contact information'],
    deliveryTime: '24-48 hours',
    price: 'Bill amount + TTD 5.00 service fee',
    image: '/products/tntec.jpg',
    features: ['WASA support', 'T&TEC support', 'Payment confirmation', 'Simple service-fee structure'],
    relatedServices: ['internet-cable-payment', 'subscription-payment'],
  },
  {
    id: 'internet-cable-payment',
    name: 'Internet & Cable Payment',
    slug: 'internet-cable-payment',
    category: 'bill-payments',
    categoryLabel: 'Bill Payments',
    description: 'Payment assistance for internet, cable, and telecom providers.',
    longDescription:
      'Payment assistance for providers such as Flow, Digicel, and Bmobile. Submit account details, amount, and contact information so the payment can be processed.',
    whatYouProvide: ['Provider name', 'Account number', 'Payment amount', 'Contact information'],
    deliveryTime: '24-48 hours',
    price: 'Bill amount + TTD 5.00 service fee',
    image: '/products/tntec.jpg',
    features: ['Flow support', 'Digicel support', 'Bmobile support', 'Payment confirmation'],
    relatedServices: ['utility-bill-payment', 'subscription-payment'],
  },
  {
    id: 'subscription-payment',
    name: 'Subscription Service Payment',
    slug: 'subscription-payment',
    category: 'bill-payments',
    categoryLabel: 'Bill Payments',
    description: 'Payment assistance for online subscriptions and memberships.',
    longDescription:
      'Payment support for online subscriptions, memberships, and recurring services where customers need help completing payment with local support.',
    whatYouProvide: ['Service name', 'Account details', 'Payment amount', 'Contact information'],
    deliveryTime: '24-48 hours',
    price: 'Varies by payment amount',
    image: '/products/visa.png',
    features: ['Subscription payment help', 'Receipt guidance', 'Secure details handling', 'Support after payment'],
    relatedServices: ['utility-bill-payment', 'internet-cable-payment'],
  },
  {
    id: 'online-shopping-sourcing',
    name: 'Online Shopping & Sourcing',
    slug: 'online-shopping-sourcing',
    category: 'shopping',
    categoryLabel: 'Shopping & Sourcing',
    description: 'Shopping and sourcing help for Amazon, Shein, Temu, eBay, and other stores.',
    longDescription:
      'Submit product links, notes, estimated cost, delivery preference, and customs category to receive a guided shopping estimate before placing the request.',
    whatYouProvide: ['Product links', 'Product notes', 'Estimated USD or TTD cost', 'Delivery preference', 'Customs category'],
    deliveryTime: '5-14 business days',
    price: 'Estimate based on item cost, delivery, and customs',
    image: '/products/amazon.png',
    features: ['Amazon sourcing', 'Shein sourcing', 'Temu sourcing', 'eBay sourcing', 'Estimate calculator'],
    relatedServices: ['custom-package-handling'],
  },
  {
    id: 'custom-package-handling',
    name: 'Custom Package & Freight',
    slug: 'custom-package-handling',
    category: 'shopping',
    categoryLabel: 'Shopping & Sourcing',
    description: 'Package, freight, and customs assistance for international orders.',
    longDescription:
      'Support for customers who need help estimating or coordinating package handling, freight, customs, and delivery for international purchases.',
    whatYouProvide: ['Package details', 'Contents list', 'Declared value', 'Recipient information', 'Special instructions'],
    deliveryTime: '7-21 days',
    price: 'Quoted after review',
    image: '/products/visa.png',
    features: ['Customs guidance', 'Freight support', 'Documentation guidance', 'Delivery coordination'],
    relatedServices: ['online-shopping-sourcing'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategoryId): Service[] {
  return SERVICES.filter((service) => service.category === category);
}

export function getCategories() {
  return [
    { id: 'streaming' as const, label: 'Streaming Services', count: getServicesByCategory('streaming').length },
    { id: 'gift-cards' as const, label: 'Gift Cards', count: getServicesByCategory('gift-cards').length },
    { id: 'bill-payments' as const, label: 'Bill Payments', count: getServicesByCategory('bill-payments').length },
    { id: 'shopping' as const, label: 'Shopping & Sourcing', count: getServicesByCategory('shopping').length },
  ];
}
