import type { ServiceCategoryId } from './services';

export type CartItemType = 'service' | 'streaming' | 'gift-card' | 'bill-payment' | 'shopping';

export interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  type: CartItemType;
  image?: string;
  details?: Record<string, string | number | boolean>;
}

export interface StreamingOption {
  id: string;
  label: string;
  price: number;
  kind: 'controlled' | 'gift-card-account';
}

export interface StreamingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  options: StreamingOption[];
}

export interface GiftCardCategory {
  id: string;
  label: string;
  brands: string[];
}

export interface GiftCardDenomination {
  id: string;
  label: string;
  price: number;
}

export interface BillProvider {
  id: string;
  title: string;
  description: string;
}

export interface ShoppingStore {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CustomsCategory {
  key: string;
  label: string;
  duty: number;
  vat: number;
}

export const CATEGORY_INTROS: Record<ServiceCategoryId, string> = {
  streaming: 'Choose a streaming platform and exact account option.',
  'gift-cards': 'Build a gift-card order by category, brand, denomination, and region.',
  'bill-payments': 'Pick a bill provider and enter the amount to estimate the total.',
  shopping: 'Submit links and preview a shopping estimate before checkout.',
};

export const BILL_FEE = 5;
export const MARKET_RATE = 7;
export const CUSTOMER_RATE = 8.5;
export const DEFAULT_DELIVERY_FEE = 35;

export const STREAMING_ITEMS: StreamingItem[] = [
  {
    id: 'netflix',
    title: 'Netflix',
    description: 'Choose a controlled account or customer-owned gift-card account option.',
    image: '/products/netflix-plans.png',
    options: [
      { id: 'basic-controlled', label: 'Basic - Controlled', price: 85, kind: 'controlled' },
      { id: 'standard-controlled', label: 'Standard - Controlled', price: 135, kind: 'controlled' },
      { id: 'premium-controlled', label: 'Premium - Controlled', price: 175, kind: 'controlled' },
      { id: 'basic-gift-card', label: 'Basic - Gift Card Account', price: 90, kind: 'gift-card-account' },
      { id: 'standard-gift-card', label: 'Standard - Gift Card Account', price: 145, kind: 'gift-card-account' },
      { id: 'premium-gift-card', label: 'Premium - Gift Card Account', price: 200, kind: 'gift-card-account' },
    ],
  },
  {
    id: 'disney-plus',
    title: 'Disney+',
    description: 'Managed Disney+ access with setup and local payment support.',
    image: '/products/disney-plus.png',
    options: [{ id: 'controlled', label: 'Controlled Account', price: 145, kind: 'controlled' }],
  },
  {
    id: 'prime-video',
    title: 'Prime Video',
    description: 'Managed Prime Video access for movies, shows, and originals.',
    image: '/products/prime-video.png',
    options: [{ id: 'controlled', label: 'Controlled Account', price: 70, kind: 'controlled' }],
  },
  {
    id: 'hbo-max',
    title: 'HBO Max',
    description: 'Choose the HBO option that fits the customer.',
    image: '/products/hbo-shared.png',
    options: [
      { id: 'basic-controlled', label: 'Basic with Ads - Controlled', price: 70, kind: 'controlled' },
      { id: 'standard-controlled', label: 'Standard - Controlled', price: 90, kind: 'controlled' },
      { id: 'premium-controlled', label: 'Premium - Controlled', price: 115, kind: 'controlled' },
    ],
  },
];

export const GIFT_CARD_CATEGORIES: GiftCardCategory[] = [
  {
    id: 'gaming',
    label: 'Gaming & Entertainment',
    brands: ['PlayStation Network', 'Xbox', 'Nintendo eShop', 'Steam'],
  },
  {
    id: 'streaming',
    label: 'Streaming & Entertainment Credits',
    brands: ['Netflix', 'Spotify', 'Apple / iTunes', 'Google Play'],
  },
  {
    id: 'shopping',
    label: 'Retail & Shopping',
    brands: ['Amazon'],
  },
  {
    id: 'topup',
    label: 'Credits & Top-Ups',
    brands: ['Visa Rewardable', 'Swipe Visa Gift Card', 'Google Play'],
  },
];

export const GIFT_CARD_DENOMINATIONS: GiftCardDenomination[] = [
  { id: '5', label: 'USD 5', price: 45 },
  { id: '10', label: 'USD 10', price: 90 },
  { id: '15', label: 'USD 15', price: 145 },
  { id: '20', label: 'USD 20', price: 200 },
  { id: '25', label: 'USD 25', price: 250 },
  { id: '50', label: 'USD 50', price: 400 },
  { id: '75', label: 'USD 75', price: 660 },
  { id: '100', label: 'USD 100', price: 800 },
];

export const GIFT_CARD_REGIONS = ['United States', 'United Kingdom', 'Canada', 'Europe', 'Global'];

export const BILL_PROVIDERS: BillProvider[] = [
  { id: 'wasa', title: 'WASA', description: 'Water bill payment with account number and amount entry.' },
  { id: 'ttec', title: 'T&TEC', description: 'Electricity bill payment with service-fee handling.' },
  { id: 'flow', title: 'Flow', description: 'Internet and cable payment support.' },
  { id: 'digicel', title: 'Digicel', description: 'Mobile, internet, and telecom payment support.' },
  { id: 'bmobile', title: 'Bmobile', description: 'Mobile service payment support.' },
];

export const SHOPPING_STORES: ShoppingStore[] = [
  { id: 'amazon', title: 'Amazon', description: 'Sourcing requests for Amazon items.', image: '/products/amazon.png' },
  { id: 'shein', title: 'Shein', description: 'Sourcing requests for Shein items.', image: '/products/visa.png' },
  { id: 'temu', title: 'Temu', description: 'Sourcing requests for Temu items.', image: '/products/visa.png' },
  { id: 'ebay', title: 'eBay', description: 'Sourcing requests for eBay items.', image: '/products/visa.png' },
  { id: 'other', title: 'Other', description: 'Use this when the website is not listed.', image: '/products/visa.png' },
];

export const CUSTOMS_CATEGORIES: CustomsCategory[] = [
  { key: 'clothing', label: 'Clothing', duty: 0.2, vat: 0.125 },
  { key: 'shoes', label: 'Shoes', duty: 0.2, vat: 0.125 },
  { key: 'cell-phone', label: 'Cell Phone', duty: 0, vat: 0 },
  { key: 'laptop', label: 'Laptop', duty: 0, vat: 0 },
  { key: 'computer', label: 'Computer', duty: 0, vat: 0 },
  { key: 'smart-watch', label: 'Smart Watch', duty: 0, vat: 0.125 },
  { key: 'speakers', label: 'Speakers', duty: 0.2, vat: 0.125 },
  { key: 'cosmetics', label: 'Cosmetics', duty: 0.2, vat: 0.125 },
  { key: 'toys', label: 'Toys', duty: 0.2, vat: 0.125 },
];

export function formatCurrency(value: number) {
  return `TTD ${Number(value || 0).toFixed(2)}`;
}

export function makeCartItemId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function getBrandImage(brand: string) {
  const normalized = brand.toLowerCase();
  if (normalized.includes('amazon')) return '/products/amazon.png';
  if (normalized.includes('google')) return '/products/google-play.png';
  if (normalized.includes('steam')) return '/products/steam.png';
  if (normalized.includes('playstation')) return '/products/playstation.png';
  if (normalized.includes('xbox')) return '/products/xbox.png';
  if (normalized.includes('spotify')) return '/products/spotify.png';
  if (normalized.includes('itunes') || normalized.includes('apple')) return '/products/itunes.png';
  if (normalized.includes('visa')) return '/products/visa.png';
  if (normalized.includes('netflix')) return '/products/netflix-plans.png';
  return '/brand/monogram-glow.png';
}

export function calculateShoppingEstimate({
  usdCost,
  destination,
  customsCategoryKey,
  deliveryFee,
}: {
  usdCost: number;
  destination: 'company-delivery' | 'company-skybox' | 'customer-skybox';
  customsCategoryKey: string;
  deliveryFee: number;
}) {
  const selectedCustoms = CUSTOMS_CATEGORIES.find((category) => category.key === customsCategoryKey) || CUSTOMS_CATEGORIES[0];
  const customerRateTotal = usdCost * CUSTOMER_RATE;
  const marketRateTotal = usdCost * MARKET_RATE;
  const customs =
    destination === 'customer-skybox'
      ? 0
      : usdCost * selectedCustoms.duty * CUSTOMER_RATE + (usdCost + usdCost * selectedCustoms.duty) * selectedCustoms.vat * CUSTOMER_RATE;

  return {
    usdTotal: usdCost,
    marketRateTotal,
    customerRateTotal,
    customs,
    delivery: deliveryFee,
    finalTotal: customerRateTotal + customs + deliveryFee,
  };
}
