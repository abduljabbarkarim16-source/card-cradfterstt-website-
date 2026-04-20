import type { CategoryMeta } from "@/lib/products/types";

export const categories: CategoryMeta[] = [
  {
    slug: "streaming",
    name: "Streaming",
    tagline: "Managed subscriptions & gift-card accounts",
    description:
      "Netflix, Disney+, Prime, HBO, Apple TV+ and more — handled either as a fully managed Controlled subscription or as a customer-owned Gift Card Account.",
  },
  {
    slug: "gift-cards",
    name: "Gift Cards",
    tagline: "Digital codes delivered electronically",
    description:
      "Amazon, Steam, Google Play, Xbox, PlayStation and more. Codes are delivered after payment confirmation — credit-only, customer redeems and manages usage.",
  },
  {
    slug: "bills",
    name: "Bill Payments",
    tagline: "Internet, cable and utilities",
    description:
      "Pay your internet, cable or utility bill through Card Crafters. We settle with the provider on your behalf — clear receipts, predictable fee.",
  },
  {
    slug: "shopping",
    name: "Personal Shopping",
    tagline: "Foreign purchases, landed in Trinidad",
    description:
      "We buy on your behalf, handle the freight, and deliver the item landed. Transparent FX rate and a flat per-item fee — full landed cost shown before you confirm.",
  },
];
