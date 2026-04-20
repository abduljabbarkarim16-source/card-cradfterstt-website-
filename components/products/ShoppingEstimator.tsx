"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatTtd, formatUsd } from "@/lib/format";
import type { ShoppingProduct } from "@/lib/products/types";

const DUTY_RATE = 0.2;
const VAT_RATE = 0.125;

export function ShoppingEstimator({ product }: { product: ShoppingProduct }) {
  const { addItem } = useCart();
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [usdPrice, setUsdPrice] = useState("");
  const [applyDutyVat, setApplyDutyVat] = useState(false);

  const price = parseFloat(usdPrice) || 0;
  const converted = price * product.customerRateUsdToTtd;
  const duty = applyDutyVat ? converted * DUTY_RATE : 0;
  const vat = applyDutyVat ? (converted + duty) * VAT_RATE : 0;
  const total = converted + duty + vat + product.standardFeeTtd;

  const savings = price > 0 ? (product.customerRateUsdToTtd - product.marketRateUsdToTtd) * price * -1 : 0;

  const canAdd = description.trim().length > 3 && price > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdd) return;
    addItem({
      id: `shopping::${Date.now()}`,
      slug: product.slug,
      category: product.category,
      name: `Personal shopping — ${description.slice(0, 40)}`,
      variant: link ? `Link: ${link.slice(0, 30)}…` : undefined,
      priceTtd: total,
      image: product.image,
      quantity: 1,
    });
    setDescription("");
    setLink("");
    setUsdPrice("");
  };

  return (
    <form onSubmit={submit} className="grid gap-4">
      <Field label="What are we buying?">
        <input
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. Nintendo Switch Lite — turquoise"
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
        />
      </Field>
      <Field label="Link (optional)">
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://..."
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
        />
      </Field>
      <Field label="USD price">
        <input
          required
          inputMode="decimal"
          value={usdPrice}
          onChange={(e) => setUsdPrice(e.target.value.replace(/[^0-9.]/g, ""))}
          placeholder="199.99"
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
        />
      </Field>
      <label className="flex items-center gap-3 text-sm text-ink-200">
        <input
          type="checkbox"
          checked={applyDutyVat}
          onChange={(e) => setApplyDutyVat(e.target.checked)}
          className="h-4 w-4 accent-accent"
        />
        Apply duty ({DUTY_RATE * 100}%) and VAT ({VAT_RATE * 100}%)
      </label>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
        <Row label={`USD price (${formatUsd(price)})`} value={formatTtd(converted)} sub={`Customer rate ${product.customerRateUsdToTtd} TTD/USD`} />
        {applyDutyVat && <Row label="Duty (20%)" value={formatTtd(duty)} />}
        {applyDutyVat && <Row label="VAT (12.5%)" value={formatTtd(vat)} />}
        <Row label="Handling fee" value={formatTtd(product.standardFeeTtd)} />
        <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2">
          <span className="text-ink-300">Estimated landed</span>
          <span className="display text-lg font-semibold tabular-nums text-accent-soft">{formatTtd(total)}</span>
        </div>
        {price > 0 && (
          <p className="mt-2 text-xs text-ink-400">
            At market rate {product.marketRateUsdToTtd} TTD/USD, the same item converts to {formatTtd(price * product.marketRateUsdToTtd)}. Our published rate includes bank spread, processing and risk.
          </p>
        )}
        {/* avoid unused-var warning while keeping the computed value documented */}
        <span hidden aria-hidden>{savings}</span>
      </div>

      <button
        type="submit"
        disabled={!canAdd}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 transition hover:brightness-110 hover:shadow-glow disabled:opacity-50"
      >
        Add shopping request to cart
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-ink-300">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start justify-between py-1">
      <span className="text-ink-300">
        {label}
        {sub && <span className="block text-[11px] text-ink-400">{sub}</span>}
      </span>
      <span className="tabular-nums text-ink-50">{value}</span>
    </div>
  );
}
