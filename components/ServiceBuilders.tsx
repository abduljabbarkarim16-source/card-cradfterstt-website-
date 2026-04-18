'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import {
  BILL_FEE,
  BILL_PROVIDERS,
  calculateShoppingEstimate,
  CUSTOMS_CATEGORIES,
  DEFAULT_DELIVERY_FEE,
  formatCurrency,
  getBrandImage,
  GIFT_CARD_CATEGORIES,
  GIFT_CARD_DENOMINATIONS,
  GIFT_CARD_REGIONS,
  SHOPPING_STORES,
  STREAMING_ITEMS,
} from '@/lib/catalog';
import { useCart } from './cart/CartProvider';
import { BuilderShell } from './Visual';

function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="mb-2 block text-sm font-semibold text-gray-300">{children}</label>;
}

function BuilderCue({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
      <span className="rounded-lg bg-accent-gold px-2.5 py-1 text-dark-950">Step 1</span>
      <span>{children}</span>
    </div>
  );
}

export function StreamingBuilder() {
  const { addItem } = useCart();
  const [streamingId, setStreamingId] = useState(STREAMING_ITEMS[0].id);
  const selectedService = STREAMING_ITEMS.find((item) => item.id === streamingId) || STREAMING_ITEMS[0];
  const [optionId, setOptionId] = useState(selectedService.options[0].id);
  const selectedOption = selectedService.options.find((option) => option.id === optionId) || selectedService.options[0];

  function handleServiceChange(id: string) {
    const nextService = STREAMING_ITEMS.find((item) => item.id === id) || STREAMING_ITEMS[0];
    setStreamingId(id);
    setOptionId(nextService.options[0].id);
  }

  return (
    <BuilderShell
      eyebrow="Streaming Builder"
      title="Choose a streaming option"
      description={selectedService.description}
      image={selectedService.image}
      preview={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Selected option</p>
          <p className="mt-2 text-lg font-bold text-gray-100">{selectedService.title} {selectedOption.label}</p>
          <p className="mt-1 text-2xl font-bold text-accent-gold">{formatCurrency(selectedOption.price)}</p>
        </div>
      }
    >
      <BuilderCue>Select platform and plan</BuilderCue>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>Platform</FieldLabel>
          <select value={streamingId} onChange={(event) => handleServiceChange(event.target.value)} className="w-full">
            {STREAMING_ITEMS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Plan</FieldLabel>
          <select value={optionId} onChange={(event) => setOptionId(event.target.value)} className="w-full">
            {selectedService.options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} - {formatCurrency(option.price)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-accent-gold/15 bg-dark-950/60 p-4">
        <p className="text-sm leading-6 text-gray-400">
          Review the selected platform, plan, and account type before adding it to your order.
        </p>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() =>
            addItem({
              title: selectedService.title,
              subtitle: selectedOption.label,
              price: selectedOption.price,
              type: 'streaming',
              image: selectedService.image,
              details: {
                platform: selectedService.title,
                plan: selectedOption.label,
                accountType: selectedOption.kind,
              },
            })
          }
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </BuilderShell>
  );
}

export function GiftCardBuilder() {
  const { addItem } = useCart();
  const [categoryId, setCategoryId] = useState(GIFT_CARD_CATEGORIES[0].id);
  const selectedCategory = GIFT_CARD_CATEGORIES.find((category) => category.id === categoryId) || GIFT_CARD_CATEGORIES[0];
  const [brand, setBrand] = useState(selectedCategory.brands[0]);
  const [denominationId, setDenominationId] = useState(GIFT_CARD_DENOMINATIONS[1].id);
  const [region, setRegion] = useState(GIFT_CARD_REGIONS[0]);
  const selectedDenomination = GIFT_CARD_DENOMINATIONS.find((item) => item.id === denominationId) || GIFT_CARD_DENOMINATIONS[1];
  const image = getBrandImage(brand);

  function handleCategoryChange(id: string) {
    const nextCategory = GIFT_CARD_CATEGORIES.find((category) => category.id === id) || GIFT_CARD_CATEGORIES[0];
    setCategoryId(id);
    setBrand(nextCategory.brands[0]);
  }

  return (
    <BuilderShell
      eyebrow="Gift Card Builder"
      title="Build a gift-card order"
      description="Choose category, brand, denomination, and region before adding the code request to your cart."
      image={image}
      preview={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{selectedCategory.label}</p>
          <p className="mt-2 text-lg font-bold text-gray-100">{brand} {selectedDenomination.label}</p>
          <p className="mt-1 text-2xl font-bold text-accent-gold">{formatCurrency(selectedDenomination.price)}</p>
          <p className="mt-2 text-sm text-gray-400">{region}</p>
        </div>
      }
    >
      <BuilderCue>Choose card details</BuilderCue>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>Category</FieldLabel>
          <select value={categoryId} onChange={(event) => handleCategoryChange(event.target.value)} className="w-full">
            {GIFT_CARD_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Brand</FieldLabel>
          <select value={brand} onChange={(event) => setBrand(event.target.value)} className="w-full">
            {selectedCategory.brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Denomination</FieldLabel>
          <select value={denominationId} onChange={(event) => setDenominationId(event.target.value)} className="w-full">
            {GIFT_CARD_DENOMINATIONS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label} - {formatCurrency(item.price)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Region</FieldLabel>
          <select value={region} onChange={(event) => setRegion(event.target.value)} className="w-full">
            {GIFT_CARD_REGIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() =>
            addItem({
              title: `${brand} Gift Card`,
              subtitle: `${selectedDenomination.label} - ${region}`,
              price: selectedDenomination.price,
              type: 'gift-card',
              image,
              details: {
                category: selectedCategory.label,
                brand,
                denomination: selectedDenomination.label,
                region,
              },
            })
          }
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </BuilderShell>
  );
}

export function BillPaymentBuilder() {
  const { addItem } = useCart();
  const [providerId, setProviderId] = useState(BILL_PROVIDERS[0].id);
  const [customerName, setCustomerName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const selectedProvider = BILL_PROVIDERS.find((provider) => provider.id === providerId) || BILL_PROVIDERS[0];
  const billAmount = Number(amount || 0);
  const total = billAmount + BILL_FEE;

  return (
    <BuilderShell
      eyebrow="Bill Payment"
      title="Estimate a bill payment"
      description={`The demo cart adds a ${formatCurrency(BILL_FEE)} service fee to the bill amount.`}
      image="/products/tntec.jpg"
      preview={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{selectedProvider.title}</p>
          <p className="mt-2 text-lg font-bold text-gray-100">Bill payment request</p>
          <p className="mt-1 text-2xl font-bold text-accent-gold">{formatCurrency(total)}</p>
        </div>
      }
    >
      <BuilderCue>Add provider and bill details</BuilderCue>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>Provider</FieldLabel>
          <select value={providerId} onChange={(event) => setProviderId(event.target.value)} className="w-full">
            {BILL_PROVIDERS.map((provider) => (
              <option key={provider.id} value={provider.id}>
                {provider.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Bill amount</FieldLabel>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" min="0" className="w-full" placeholder="0.00" />
        </div>
        <div>
          <FieldLabel>Customer name</FieldLabel>
          <input value={customerName} onChange={(event) => setCustomerName(event.target.value)} className="w-full" placeholder="Name on bill" />
        </div>
        <div>
          <FieldLabel>Account number</FieldLabel>
          <input value={accountNumber} onChange={(event) => setAccountNumber(event.target.value)} className="w-full" placeholder="Bill account number" />
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-accent-gold/15 bg-dark-950/60 p-4 text-sm leading-6 text-gray-400">
        {selectedProvider.description}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          disabled={billAmount <= 0}
          onClick={() =>
            addItem({
              title: `${selectedProvider.title} Bill Payment`,
              subtitle: `Bill ${formatCurrency(billAmount)} + service fee`,
              price: total,
              type: 'bill-payment',
              image: '/products/tntec.jpg',
              details: {
                provider: selectedProvider.title,
                customerName,
                accountNumber,
                billAmount,
                serviceFee: BILL_FEE,
              },
            })
          }
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to Cart
        </button>
      </div>
    </BuilderShell>
  );
}

export function ShoppingBuilder() {
  const { addItem } = useCart();
  const [storeId, setStoreId] = useState(SHOPPING_STORES[0].id);
  const [customStore, setCustomStore] = useState('');
  const [productLinks, setProductLinks] = useState('');
  const [notes, setNotes] = useState('');
  const [usdCost, setUsdCost] = useState('');
  const [destination, setDestination] = useState<'company-delivery' | 'company-skybox' | 'customer-skybox'>('company-delivery');
  const [customsCategoryKey, setCustomsCategoryKey] = useState(CUSTOMS_CATEGORIES[0].key);
  const [deliveryFee, setDeliveryFee] = useState(String(DEFAULT_DELIVERY_FEE));

  const selectedStore = SHOPPING_STORES.find((store) => store.id === storeId) || SHOPPING_STORES[0];
  const storeTitle = selectedStore.id === 'other' ? customStore || 'Other Website' : selectedStore.title;
  const estimate = useMemo(
    () =>
      calculateShoppingEstimate({
        usdCost: Number(usdCost || 0),
        destination,
        customsCategoryKey,
        deliveryFee: Number(deliveryFee || 0),
      }),
    [customsCategoryKey, deliveryFee, destination, usdCost]
  );

  return (
    <BuilderShell
      eyebrow="Shopping Estimate"
      title="Preview a sourcing quote"
      description="Estimate uses customer rate, customs, and delivery. Final pricing is confirmed after review."
      image={selectedStore.image}
      preview={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{storeTitle}</p>
          <p className="mt-2 text-lg font-bold text-gray-100">Estimated total</p>
          <p className="mt-1 text-2xl font-bold text-accent-gold">{formatCurrency(estimate.finalTotal)}</p>
          <p className="mt-2 text-sm text-gray-400">Customs: {formatCurrency(estimate.customs)}</p>
        </div>
      }
    >
      <BuilderCue>Estimate the sourcing request</BuilderCue>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>Store</FieldLabel>
          <select value={storeId} onChange={(event) => setStoreId(event.target.value)} className="w-full">
            {SHOPPING_STORES.map((store) => (
              <option key={store.id} value={store.id}>
                {store.title}
              </option>
            ))}
          </select>
        </div>
        {storeId === 'other' && (
          <div>
            <FieldLabel>Website name</FieldLabel>
            <input value={customStore} onChange={(event) => setCustomStore(event.target.value)} className="w-full" placeholder="Store name" />
          </div>
        )}
        <div>
          <FieldLabel>Estimated item cost (USD)</FieldLabel>
          <input value={usdCost} onChange={(event) => setUsdCost(event.target.value)} type="number" min="0" className="w-full" placeholder="0.00" />
        </div>
        <div>
          <FieldLabel>Destination</FieldLabel>
          <select value={destination} onChange={(event) => setDestination(event.target.value as typeof destination)} className="w-full">
            <option value="company-delivery">Card Crafters Company Delivery</option>
            <option value="company-skybox">Card Crafters U.S. Skybox</option>
            <option value="customer-skybox">Customer Own U.S. Skybox</option>
          </select>
        </div>
        <div>
          <FieldLabel>Customs category</FieldLabel>
          <select value={customsCategoryKey} onChange={(event) => setCustomsCategoryKey(event.target.value)} className="w-full">
            {CUSTOMS_CATEGORIES.map((category) => (
              <option key={category.key} value={category.key}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Delivery fee</FieldLabel>
          <input value={deliveryFee} onChange={(event) => setDeliveryFee(event.target.value)} type="number" min="0" className="w-full" />
        </div>
      </div>

      <div className="mt-4">
        <FieldLabel>Product links</FieldLabel>
        <textarea value={productLinks} onChange={(event) => setProductLinks(event.target.value)} rows={3} className="w-full" placeholder="Paste links here" />
      </div>
      <div className="mt-4">
        <FieldLabel>Notes</FieldLabel>
        <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} className="w-full" placeholder="Sizes, colors, quantities, or special instructions" />
      </div>

      <div className="mt-6 grid gap-4 rounded-lg border border-accent-gold/15 bg-dark-950/60 p-4 md:grid-cols-2">
        <div className="space-y-2 text-sm text-gray-400">
          <p>Market-rate preview: <span className="text-gray-100">{formatCurrency(estimate.marketRateTotal)}</span></p>
          <p>Customer-rate item total: <span className="text-gray-100">{formatCurrency(estimate.customerRateTotal)}</span></p>
          <p>Estimated customs: <span className="text-gray-100">{formatCurrency(estimate.customs)}</span></p>
          <p>Delivery fee: <span className="text-gray-100">{formatCurrency(estimate.delivery)}</span></p>
        </div>
        <div className="flex flex-col justify-between gap-4 md:items-end">
          <div>
            <p className="text-sm text-gray-400">Estimated total</p>
            <p className="text-3xl font-bold text-accent-gold">{formatCurrency(estimate.finalTotal)}</p>
          </div>
          <button
            type="button"
            disabled={estimate.finalTotal <= 0}
            onClick={() =>
              addItem({
                title: `${storeTitle} Shopping Request`,
                subtitle: `Estimate for ${formatCurrency(estimate.finalTotal)}`,
                price: estimate.finalTotal,
                type: 'shopping',
                image: selectedStore.image,
                details: {
                  store: storeTitle,
                  productLinks,
                  notes,
                  usdCost: Number(usdCost || 0),
                  destination,
                  customsCategory: CUSTOMS_CATEGORIES.find((category) => category.key === customsCategoryKey)?.label || '',
                  deliveryFee: Number(deliveryFee || 0),
                },
              })
            }
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </BuilderShell>
  );
}
