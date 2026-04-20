export const CATEGORIES = ["streaming", "gift-cards", "bills", "shopping"] as const;
export type Category = (typeof CATEGORIES)[number];

export type CategoryMeta = {
  slug: Category;
  name: string;
  tagline: string;
  description: string;
};

type Base = {
  id: string;
  slug: string;
  category: Category;
  name: string;
  tagline: string;
  description: string;
  priceTtd: number;
  image: string;
  featured?: boolean;
};

export type StreamingTier = "basic" | "standard" | "premium";

export type StreamingProduct = Base & {
  category: "streaming";
  tier?: StreamingTier;
  quality: string;
  simultaneousScreens: number;
  downloadDevices?: number;
  variants: {
    label: "Controlled" | "Gift Card Account";
    priceTtd: number;
    note: string;
  }[];
};

export type GiftCardProduct = Base & {
  category: "gift-cards";
  denominations: { label: string; priceTtd: number }[];
};

export type BillProduct = Base & {
  category: "bills";
  feeTtd: number;
  examples: string[];
};

export type ShoppingProduct = Base & {
  category: "shopping";
  marketRateUsdToTtd: number;
  customerRateUsdToTtd: number;
  standardFeeTtd: number;
};

export type Product =
  | StreamingProduct
  | GiftCardProduct
  | BillProduct
  | ShoppingProduct;
