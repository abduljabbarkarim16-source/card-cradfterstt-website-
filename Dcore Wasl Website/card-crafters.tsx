import React, { useEffect, useMemo, useState } from "react";

type CategoryId = "streaming" | "gift-cards" | "bill-payments" | "shopping";
type View =
  | { screen: "categories" }
  | { screen: "items"; category: CategoryId }
  | { screen: "detail"; category: CategoryId; itemId: string };

type CartItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
};

type Category = {
  id: CategoryId;
  title: string;
  description: string;
  cta: string;
};

type StreamingOption = {
  id: string;
  label: string;
  price: number;
  kind: "controlled" | "gift-card-account";
};

type StreamingItem = {
  id: string;
  title: string;
  description: string;
  options: StreamingOption[];
};

type BillItem = {
  id: string;
  title: string;
  description: string;
};

type ShoppingStore = {
  id: string;
  title: string;
  description: string;
};

type GiftCardCategory = {
  id: string;
  label: string;
  brands: string[];
};

type CustomsCategory = {
  key: string;
  label: string;
  duty: number;
  vat: number;
};

const BILL_FEE = 5;
const MARKET_RATE = 7;
const CUSTOMER_RATE = 8.5;
const DEFAULT_DELIVERY_FEE = 35;

const categories: Category[] = [
  {
    id: "streaming",
    title: "Streaming",
    description: "Open a streaming platform, then choose the exact account option.",
    cta: "Get Started",
  },
  {
    id: "gift-cards",
    title: "Gift Cards",
    description: "Use a guided builder with category, brand, denomination, and region.",
    cta: "Browse Cards",
  },
  {
    id: "bill-payments",
    title: "Bill Payments",
    description: "Pick the provider and fill in a short payment form.",
    cta: "Pay Bills",
  },
  {
    id: "shopping",
    title: "Shopping & Sourcing",
    description: "Choose a store, submit the request, and preview the estimate.",
    cta: "Request Quote",
  },
];

const streamingItems: StreamingItem[] = [
  {
    id: "netflix",
    title: "Netflix",
    description: "Netflix combines controlled accounts and gift card account options in one selector.",
    options: [
      { id: "basic-controlled", label: "Basic — Controlled", price: 85, kind: "controlled" },
      { id: "standard-controlled", label: "Standard — Controlled", price: 135, kind: "controlled" },
      { id: "premium-controlled", label: "Premium — Controlled", price: 175, kind: "controlled" },
      { id: "basic-gift-card", label: "Basic — Gift Card Account", price: 90, kind: "gift-card-account" },
      { id: "standard-gift-card", label: "Standard — Gift Card Account", price: 145, kind: "gift-card-account" },
      { id: "premium-gift-card", label: "Premium — Gift Card Account", price: 200, kind: "gift-card-account" },
    ],
  },
  {
    id: "disney-plus",
    title: "Disney+",
    description: "Disney+ is offered as a controlled account option.",
    options: [{ id: "controlled", label: "Controlled Account", price: 145, kind: "controlled" }],
  },
  {
    id: "prime-video",
    title: "Prime Video",
    description: "Prime Video is offered as a controlled account option.",
    options: [{ id: "controlled", label: "Controlled Account", price: 70, kind: "controlled" }],
  },
  {
    id: "hbo-max",
    title: "HBO Max",
    description: "Choose the controlled HBO option that fits the customer.",
    options: [
      { id: "basic-controlled", label: "Basic with Ads — Controlled", price: 70, kind: "controlled" },
      { id: "standard-controlled", label: "Standard — Controlled", price: 90, kind: "controlled" },
      { id: "premium-controlled", label: "Premium — Controlled", price: 115, kind: "controlled" },
    ],
  },
];

const billItems: BillItem[] = [
  { id: "wasa", title: "WASA", description: "Water bill payment with account number and amount entry." },
  { id: "ttec", title: "T&TEC", description: "Electricity bill payment with TT$5 fee handling." },
  { id: "flow", title: "Flow", description: "Internet and cable payment flow." },
  { id: "digicel", title: "Digicel", description: "Telecom payment flow." },
  { id: "bmobile", title: "Bmobile", description: "Local provider payment flow." },
];

const shoppingStores: ShoppingStore[] = [
  { id: "amazon", title: "Amazon", description: "Sourcing request for Amazon items." },
  { id: "shein", title: "Shein", description: "Sourcing request for Shein items." },
  { id: "temu", title: "Temu", description: "Sourcing request for Temu items." },
  { id: "ebay", title: "eBay", description: "Sourcing request for eBay items." },
  { id: "other", title: "Other", description: "Use this when the website is not listed." },
];

const giftCardCategories: GiftCardCategory[] = [
  {
    id: "gaming",
    label: "Gaming & Entertainment",
    brands: ["PlayStation Network", "Xbox", "Nintendo eShop", "Steam"],
  },
  {
    id: "streaming",
    label: "Streaming & Entertainment Credits",
    brands: ["Netflix", "Spotify", "Apple / iTunes", "Google Play"],
  },
  {
    id: "shopping",
    label: "Retail & Shopping",
    brands: ["Amazon"],
  },
  {
    id: "topup",
    label: "Credits & Top-Ups",
    brands: ["Visa Rewardable", "Swipe Visa Gift Card", "Google Play"],
  },
];

const giftCardDenominations = [
  { id: "5", label: "$5", price: 45 },
  { id: "10", label: "$10", price: 90 },
  { id: "15", label: "$15", price: 145 },
  { id: "20", label: "$20", price: 200 },
  { id: "25", label: "$25", price: 250 },
  { id: "50", label: "$50", price: 400 },
  { id: "100", label: "$100", price: 800 },
];

const giftCardRegions = ["United States", "United Kingdom", "Canada", "Europe", "Global"];

const customsCategories: CustomsCategory[] = [
  { key: "clothing", label: "Clothing", duty: 0.2, vat: 0.125 },
  { key: "shoes", label: "Shoes", duty: 0.2, vat: 0.125 },
  { key: "cell-phone", label: "Cell Phone", duty: 0, vat: 0 },
  { key: "laptop", label: "Laptop", duty: 0, vat: 0 },
  { key: "computer", label: "Computer", duty: 0, vat: 0 },
  { key: "smart-watch", label: "Smart Watch", duty: 0, vat: 0.125 },
  { key: "speakers", label: "Speakers", duty: 0.2, vat: 0.125 },
  { key: "cosmetics", label: "Cosmetics", duty: 0.2, vat: 0.125 },
  { key: "toys", label: "Toys", duty: 0.2, vat: 0.125 },
];

function formatCurrency(value: number) {
  return `TT$${Number(value || 0).toFixed(2)}`;
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getBadgeLabel(title: string) {
  const special: Record<string, string> = {
    Netflix: "N",
    "Disney+": "D+",
    "Prime Video": "PV",
    "HBO Max": "HM",
    WASA: "WA",
    "T&TEC": "TT",
    Flow: "FL",
    Digicel: "DG",
    Bmobile: "BM",
    Amazon: "AM",
    Shein: "SH",
    Temu: "TM",
    eBay: "EB",
    Other: "OT",
    "Gift Card Builder": "GC",
    "Card Crafters": "CC",
  };

  if (special[title]) return special[title];

  const cleaned = title.replace(/[^A-Za-z0-9+ ]/g, "");
  const parts = cleaned.split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "CC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return `${parts[0][0] || ""}${parts[1][0] || ""}`.toUpperCase();
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[0.03] ${className}`}>{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return <div className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-yellow-300">{children}</div>;
}

function LogoBadge({ title, size = "md" }: { title: string; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "sm" ? "h-10 w-10" : size === "lg" ? "h-16 w-16" : "h-12 w-12";
  const fontSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";

  const logoSrc = "images/card-crafters-monogram-glow.png";

  return (
    <div className={`relative flex items-center justify-center rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-[#17110b] to-[#090909] p-1 shadow-[0_14px_34px_rgba(0,0,0,0.36)] ${sizeClass}`}>
      <img
        src={logoSrc}
        alt="Card Crafters"
        className={`absolute inset-0 h-full w-full rounded-[1rem] object-cover ${size === "lg" ? "opacity-100" : "opacity-95"}`}
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const fallback = img.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className={`hidden h-full w-full items-center justify-center rounded-2xl bg-[#0b0b0b]/90 ${sizeClass}`}>
        <span className={`${fontSize} font-semibold text-yellow-300`}>{getBadgeLabel(title)}</span>
      </div>
    </div>
  );
}

function TitleWithBadge({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-4">
      <LogoBadge title={title} size="md" />
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {subtitle ? <p className="mt-2 text-sm leading-7 text-zinc-400">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black">
      {label}
      <span>→</span>
    </button>
  );
}

function CartDrawer({ open, cart, onClose, onRemove }: { open: boolean; cart: CartItem[]; onClose: () => void; onRemove: (id: string) => void }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {open ? <div className="fixed inset-0 z-40 bg-black/60" onClick={onClose} /> : null}
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0b0b0b] transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-yellow-300">Cart</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">Your Items</h2>
          </div>
          <button onClick={onClose} className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300">Close</button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <Panel className="p-4 text-sm leading-7 text-zinc-400">Nothing has been added yet.</Panel>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <Panel key={item.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-400">{item.subtitle}</p>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">Remove</button>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-yellow-200">{formatCurrency(item.price)}</div>
                </Panel>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-white/10 px-6 py-5">
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
            <div className="flex items-center justify-between text-sm text-zinc-200">
              <span>Total</span>
              <span className="text-lg font-semibold text-yellow-100">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function CardCraftersServicesPreview() {
  const [view, setView] = useState<View>({ screen: "categories" });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [selectedStreamingOption, setSelectedStreamingOption] = useState(streamingItems[0].options[0].id);
  const [giftCategoryId, setGiftCategoryId] = useState(giftCardCategories[0].id);
  const [giftBrand, setGiftBrand] = useState(giftCardCategories[0].brands[0]);
  const [giftDenominationId, setGiftDenominationId] = useState(giftCardDenominations[1].id);
  const [giftRegion, setGiftRegion] = useState(giftCardRegions[0]);

  const [billName, setBillName] = useState("");
  const [billContact, setBillContact] = useState("");
  const [billAmount, setBillAmount] = useState(0);
  const [billAccountNumber, setBillAccountNumber] = useState("");

  const [shoppingStoreName, setShoppingStoreName] = useState("");
  const [shoppingLinks, setShoppingLinks] = useState("");
  const [shoppingNotes, setShoppingNotes] = useState("");
  const [shoppingItemsCostUSD, setShoppingItemsCostUSD] = useState(0);
  const [shoppingItemsCostTTD, setShoppingItemsCostTTD] = useState(0);
  const [shoppingDestination, setShoppingDestination] = useState<"company-delivery" | "company-skybox" | "customer-skybox">("company-delivery");
  const [shoppingCustomsKey, setShoppingCustomsKey] = useState(customsCategories[0].key);
  const [deliveryFeeTTD, setDeliveryFeeTTD] = useState(DEFAULT_DELIVERY_FEE);

  const activeStreamingItem = view.screen === "detail" && view.category === "streaming" ? streamingItems.find((item) => item.id === view.itemId) : undefined;
  const activeBillItem = view.screen === "detail" && view.category === "bill-payments" ? billItems.find((item) => item.id === view.itemId) : undefined;
  const activeShoppingStore = view.screen === "detail" && view.category === "shopping" ? shoppingStores.find((item) => item.id === view.itemId) : undefined;

  const selectedStreamingOptionData = activeStreamingItem?.options.find((item) => item.id === selectedStreamingOption);
  const selectedGiftCategory = giftCardCategories.find((item) => item.id === giftCategoryId) || giftCardCategories[0];
  const selectedGiftDenomination = giftCardDenominations.find((item) => item.id === giftDenominationId) || giftCardDenominations[0];
  const selectedShoppingCustoms = useMemo(() => customsCategories.find((item) => item.key === shoppingCustomsKey) || customsCategories[0], [shoppingCustomsKey]);

  useEffect(() => {
    if (!selectedGiftCategory.brands.includes(giftBrand)) {
      setGiftBrand(selectedGiftCategory.brands[0]);
    }
  }, [selectedGiftCategory, giftBrand]);

  const billTotal = billAmount + BILL_FEE;
  const shoppingAtCustomerRateTTD = shoppingItemsCostUSD * CUSTOMER_RATE;
  const shoppingCustomsTTD = shoppingDestination === "customer-skybox"
    ? 0
    : ((shoppingItemsCostUSD * selectedShoppingCustoms.duty) + ((shoppingItemsCostUSD + shoppingItemsCostUSD * selectedShoppingCustoms.duty) * selectedShoppingCustoms.vat)) * MARKET_RATE;
  const shoppingEstimatedTotal = shoppingAtCustomerRateTTD + shoppingCustomsTTD + deliveryFeeTTD;

  function addCartItem(item: Omit<CartItem, "id">) {
    setCart((current) => [...current, { ...item, id: makeId() }]);
    setCartOpen(true);
  }

  function removeCartItem(id: string) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function resetBillForm() {
    setBillName("");
    setBillContact("");
    setBillAmount(0);
    setBillAccountNumber("");
  }

  function resetShoppingForm() {
    setShoppingStoreName("");
    setShoppingLinks("");
    setShoppingNotes("");
    setShoppingItemsCostUSD(0);
    setShoppingItemsCostTTD(0);
    setShoppingDestination("company-delivery");
    setShoppingCustomsKey(customsCategories[0].key);
    setDeliveryFeeTTD(DEFAULT_DELIVERY_FEE);
  }

  function updateShoppingUSD(value: string) {
    const usd = Number(value || 0);
    setShoppingItemsCostUSD(usd);
    setShoppingItemsCostTTD(usd * MARKET_RATE);
  }

  function updateShoppingTTD(value: string) {
    const ttd = Number(value || 0);
    setShoppingItemsCostTTD(ttd);
    setShoppingItemsCostUSD(ttd / MARKET_RATE);
  }

  function renderCategories() {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Panel key={category.id} className="p-8">
            <Pill>{category.title}</Pill>
            <h3 className="mt-6 text-2xl font-semibold text-white">{category.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{category.description}</p>
            <div className="mt-5">
              <PrimaryButton
                label={category.cta}
                onClick={() => {
                  if (category.id === "gift-cards") {
                    setView({ screen: "detail", category: "gift-cards", itemId: "builder" });
                    return;
                  }
                  setView({ screen: "items", category: category.id });
                }}
              />
            </div>
          </Panel>
        ))}
      </div>
    );
  }

  function renderCategoryItems() {
    if (view.screen !== "items") return null;

    const header = (
      <div className="mb-8">
        <button onClick={() => setView({ screen: "categories" })} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200">
          ← Back to Categories
        </button>
        <h2 className="mt-4 text-3xl font-semibold text-white">{categories.find((item) => item.id === view.category)?.title}</h2>
      </div>
    );

    if (view.category === "streaming") {
      return (
        <>
          {header}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {streamingItems.map((item) => (
              <Panel key={item.id} className="p-6">
                <TitleWithBadge title={item.title} subtitle={item.description} />
                <div className="mt-5">
                  <PrimaryButton label="Open" onClick={() => {
                    setSelectedStreamingOption(item.options[0].id);
                    setView({ screen: "detail", category: "streaming", itemId: item.id });
                  }} />
                </div>
              </Panel>
            ))}
          </div>
        </>
      );
    }

    if (view.category === "bill-payments") {
      return (
        <>
          {header}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {billItems.map((item) => (
              <Panel key={item.id} className="p-6">
                <TitleWithBadge title={item.title} subtitle={item.description} />
                <div className="mt-5">
                  <PrimaryButton label="Open" onClick={() => {
                    resetBillForm();
                    setView({ screen: "detail", category: "bill-payments", itemId: item.id });
                  }} />
                </div>
              </Panel>
            ))}
          </div>
        </>
      );
    }

    if (view.category === "shopping") {
      return (
        <>
          {header}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {shoppingStores.map((item) => (
              <Panel key={item.id} className="p-6">
                <TitleWithBadge title={item.title} subtitle={item.description} />
                <div className="mt-5">
                  <PrimaryButton label="Open" onClick={() => {
                    resetShoppingForm();
                    setView({ screen: "detail", category: "shopping", itemId: item.id });
                  }} />
                </div>
              </Panel>
            ))}
          </div>
        </>
      );
    }

    return null;
  }

  function renderStreamingDetail() {
    if (!activeStreamingItem || !selectedStreamingOptionData) return null;

    return (
      <Panel className="mt-6 p-8">
        <div className="flex items-start gap-4">
          <LogoBadge title={activeStreamingItem.title} size="lg" />
          <div>
            <h2 className="text-3xl font-semibold text-white">{activeStreamingItem.title}</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">{activeStreamingItem.description}</p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-yellow-300">Controlled account</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-200">
            <li>• Managed by Card Crafters for continuity and billing handling.</li>
            <li>• Customer uses the service normally without handling the billing side.</li>
            <li>• Best for customers who want a simpler, managed setup.</li>
          </ul>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <label className="block text-sm font-medium text-zinc-300">Select account option</label>
            <select value={selectedStreamingOption} onChange={(e) => setSelectedStreamingOption(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
              {activeStreamingItem.options.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-300">Selected price</p>
            <div className="mt-4 space-y-2 text-sm text-zinc-200">
              <p>Option: {selectedStreamingOptionData.label}</p>
              <p>Type: {selectedStreamingOptionData.kind === "controlled" ? "Controlled Account" : "Gift Card Account"}</p>
            </div>
            <div className="mt-5 text-3xl font-semibold text-yellow-100">{formatCurrency(selectedStreamingOptionData.price)}</div>
            <div className="mt-5">
              <PrimaryButton label="Add to Cart" onClick={() => addCartItem({ title: activeStreamingItem.title, subtitle: selectedStreamingOptionData.label, price: selectedStreamingOptionData.price })} />
            </div>
          </div>
        </div>
      </Panel>
    );
  }

  function renderGiftCardDetail() {
    return (
      <Panel className="mt-6 p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-4">
              <LogoBadge title="Gift Card Builder" size="lg" />
              <h2 className="text-3xl font-semibold text-white">Gift Card Builder</h2>
            </div>
            <p className="mt-3 max-w-2xl text-zinc-300">Choose the category first, then the card brand, then denomination and region.</p>
          </div>
          <Pill>Prices usually match what you see</Pill>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-300">Gift card category</label>
              <select value={giftCategoryId} onChange={(e) => setGiftCategoryId(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
                {giftCardCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Gift card brand</label>
              <select value={giftBrand} onChange={(e) => setGiftBrand(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
                {selectedGiftCategory.brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Denomination</label>
              <select value={giftDenominationId} onChange={(e) => setGiftDenominationId(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
                {giftCardDenominations.map((denomination) => (
                  <option key={denomination.id} value={denomination.id}>{denomination.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Region</label>
              <select value={giftRegion} onChange={(e) => setGiftRegion(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
                {giftCardRegions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-300">Card summary</p>
            <div className="mt-4 space-y-2 text-sm text-zinc-200">
              <p>Category: {selectedGiftCategory.label}</p>
              <p>Brand: {giftBrand}</p>
              <p>Denomination: {giftCardDenominations.find((item) => item.id === giftDenominationId)?.label}</p>
              <p>Region: {giftRegion}</p>
            </div>
            <div className="mt-5 text-3xl font-semibold text-yellow-100">{formatCurrency(giftCardDenominations.find((item) => item.id === giftDenominationId)?.price || 0)}</div>
            <div className="mt-5">
              <PrimaryButton label="Add to Cart" onClick={() => addCartItem({ title: giftBrand, subtitle: `${giftCardDenominations.find((item) => item.id === giftDenominationId)?.label} • ${giftRegion}`, price: giftCardDenominations.find((item) => item.id === giftDenominationId)?.price || 0 })} />
            </div>
          </div>
        </div>
      </Panel>
    );
  }

  function renderBillDetail() {
    if (!activeBillItem) return null;

    return (
      <Panel className="mt-6 p-8">
        <div className="flex items-start gap-4">
          <LogoBadge title={activeBillItem.title} size="lg" />
          <div>
            <h2 className="text-3xl font-semibold text-white">{activeBillItem.title}</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">{activeBillItem.description}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4">
            <input value={billName} onChange={(e) => setBillName(e.target.value)} placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
            <input value={billContact} onChange={(e) => setBillContact(e.target.value)} placeholder="Contact number" className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
            <input type="number" value={billAmount || ""} onChange={(e) => setBillAmount(Number(e.target.value || 0))} placeholder="Bill amount" className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
            <input value={billAccountNumber} onChange={(e) => setBillAccountNumber(e.target.value)} placeholder="Bill account number" className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
          </div>
          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-300">Payment summary</p>
            <div className="mt-4 space-y-2 text-sm text-zinc-200">
              <p>Provider: {activeBillItem.title}</p>
              <p>Bill amount: {formatCurrency(billAmount)}</p>
              <p>Service fee: {formatCurrency(BILL_FEE)}</p>
            </div>
            <div className="mt-5 text-3xl font-semibold text-yellow-100">{formatCurrency(billTotal)}</div>
            <div className="mt-5">
              <PrimaryButton label="Add to Cart" onClick={() => addCartItem({ title: `${activeBillItem.title} Bill Payment`, subtitle: `${billName || "Customer"} • ${billAccountNumber || "No account entered"}`, price: billTotal })} />
            </div>
          </div>
        </div>
      </Panel>
    );
  }

  function renderShoppingDetail() {
    if (!activeShoppingStore) return null;

    const shoppingTitle = activeShoppingStore.id === "other" ? shoppingStoreName || "Other Website" : activeShoppingStore.title;
    const destinationLabel = shoppingDestination === "company-delivery"
      ? "Card Crafters Company Delivery"
      : shoppingDestination === "company-skybox"
      ? "Card Crafters U.S. Skybox"
      : "Customer's Own U.S. Skybox";

    return (
      <Panel className="mt-6 p-8">
        <div className="flex items-start gap-4">
          <LogoBadge title={shoppingTitle} size="lg" />
          <div>
            <h2 className="text-3xl font-semibold text-white">{shoppingTitle}</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">Shopping estimate with the calculator restored.</p>
          </div>
        </div>

        {activeShoppingStore.id === "other" ? (
          <div className="mt-6">
            <label className="block text-sm font-medium text-zinc-300">Website or store name</label>
            <input value={shoppingStoreName} onChange={(e) => setShoppingStoreName(e.target.value)} placeholder="Enter the website or store name" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
          </div>
        ) : null}

        <div className="mt-6 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300">Product links</label>
            <textarea value={shoppingLinks} onChange={(e) => setShoppingLinks(e.target.value)} placeholder="Paste one or multiple product links here" className="mt-2 min-h-[120px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300">Description or notes</label>
            <textarea value={shoppingNotes} onChange={(e) => setShoppingNotes(e.target.value)} placeholder="Add notes about sizes, colors, quantities, or other details" className="mt-2 min-h-[120px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-zinc-300">Estimated cost of items (US)</label>
              <input type="number" value={shoppingItemsCostUSD || ""} onChange={(e) => updateShoppingUSD(e.target.value)} placeholder="Enter total item cost in US" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Estimated cost of items (TT)</label>
              <input type="number" value={shoppingItemsCostTTD || ""} onChange={(e) => updateShoppingTTD(e.target.value)} placeholder="Enter total item cost in TT" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-zinc-300">Send to</label>
              <select value={shoppingDestination} onChange={(e) => setShoppingDestination(e.target.value as "company-delivery" | "company-skybox" | "customer-skybox")} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
                <option value="company-delivery">Card Crafters Company Delivery</option>
                <option value="company-skybox">Card Crafters U.S. Skybox</option>
                <option value="customer-skybox">Customer's Own U.S. Skybox</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Customs category</label>
              <select value={shoppingCustomsKey} onChange={(e) => setShoppingCustomsKey(e.target.value)} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none">
                {customsCategories.map((item) => (
                  <option key={item.key} value={item.key}>{item.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <p className="text-sm leading-7 text-zinc-300">Restored estimate logic:</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>• Market conversion uses TT$7.00 to US$1.00.</li>
              <li>• Customer shopping rate uses TT$8.5 to US$1.00.</li>
              <li>• Delivery fee starts at TT$35.
              </li>
              <li>• Customs are removed when the customer chooses their own U.S. skybox.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-yellow-300">Estimate preview</p>
            <div className="mt-4 space-y-2 text-sm text-zinc-200">
              <p>Destination: {destinationLabel}</p>
              <p>Items total (US): {shoppingItemsCostUSD.toFixed(2)}</p>
              <p>Items total (TT @ 7): {formatCurrency(shoppingItemsCostTTD)}</p>
              <p>Customer rate total (TT @ 8.5): {formatCurrency(shoppingAtCustomerRateTTD)}</p>
              <p>Estimated customs: {shoppingDestination === "customer-skybox" ? "—" : formatCurrency(shoppingCustomsTTD)}</p>
              <p>Delivery fee: {formatCurrency(deliveryFeeTTD)}</p>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-zinc-300">Delivery fee (starts at TT$35)</label>
              <input type="number" value={deliveryFeeTTD || ""} onChange={(e) => setDeliveryFeeTTD(Number(e.target.value || 0))} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none" />
            </div>
            <div className="mt-5 text-3xl font-semibold text-yellow-100">{formatCurrency(shoppingEstimatedTotal)}</div>
            <p className="mt-4 text-xs leading-6 text-zinc-500">This is a general quote only. Final pricing can be adjusted later.</p>
            <div className="mt-5">
              <PrimaryButton label="Add to Cart" onClick={() => addCartItem({ title: `${shoppingTitle} Request`, subtitle: destinationLabel, price: shoppingEstimatedTotal })} />
            </div>
          </div>
        </div>
      </Panel>
    );
  }

  function renderDetail() {
    if (view.screen !== "detail") return null;

    return (
      <div>
        <button onClick={() => setView(view.category === "gift-cards" ? { screen: "categories" } : { screen: "items", category: view.category })} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200">
          ← Back
        </button>
        {view.category === "streaming" ? renderStreamingDetail() : null}
        {view.category === "gift-cards" ? renderGiftCardDetail() : null}
        {view.category === "bill-payments" ? renderBillDetail() : null}
        {view.category === "shopping" ? renderShoppingDetail() : null}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <CartDrawer open={cartOpen} cart={cart} onClose={() => setCartOpen(false)} onRemove={removeCartItem} />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <LogoBadge title="Card Crafters" size="sm" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-yellow-300">Card Crafters</p>
              <p className="text-xs text-zinc-400">Dedicated Services Page Preview</p>
            </div>
          </div>
          <button onClick={() => setCartOpen(true)} className="inline-flex items-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black">
            Cart {cart.length}
          </button>
        </div>
      </header>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Pill>Services</Pill>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">A service page that navigates through the service itself.</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">Start with the category. Open the items inside that category. Then configure the exact service on its own dedicated screen with the right controls for that service type.</p>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          {view.screen === "categories" ? renderCategories() : null}
          {view.screen === "items" ? renderCategoryItems() : null}
          {view.screen === "detail" ? renderDetail() : null}
        </section>
      </main>
    </div>
  );
}
