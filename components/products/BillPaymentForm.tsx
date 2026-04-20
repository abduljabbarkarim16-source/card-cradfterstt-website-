"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatTtd } from "@/lib/format";
import type { BillProduct } from "@/lib/products/types";

export function BillPaymentForm({ product }: { product: BillProduct }) {
  const { addItem } = useCart();
  const [provider, setProvider] = useState(product.examples[0]);
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  const total = (parseFloat(amount) || 0) + product.feeTtd;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!account.trim() || !amount) return;
    addItem({
      id: `${product.id}::${provider}::${account}`,
      slug: product.slug,
      category: product.category,
      name: `${product.name} — ${provider}`,
      variant: `Account ${account}`,
      priceTtd: total,
      image: product.image,
      quantity: 1,
    });
    setAccount("");
    setAmount("");
  };

  return (
    <form onSubmit={submit} className="grid gap-4">
      <Field label="Provider">
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
        >
          {product.examples.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </Field>
      <Field label="Account / reference number">
        <input
          required
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
          placeholder="e.g. 12345678"
        />
      </Field>
      <Field label="Amount due (TTD)">
        <input
          required
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
          placeholder="350.00"
        />
      </Field>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
        <Row label="Bill amount" value={formatTtd(parseFloat(amount) || 0)} />
        <Row label="Handling fee" value={formatTtd(product.feeTtd)} />
        <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2">
          <span className="text-ink-300">Total to pay</span>
          <span className="display text-lg font-semibold tabular-nums text-accent-soft">{formatTtd(total)}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={!account || !amount}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 transition hover:brightness-110 hover:shadow-glow disabled:opacity-50"
      >
        Add bill payment to cart
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-ink-300">{label}</span>
      <span className="tabular-nums text-ink-50">{value}</span>
    </div>
  );
}
