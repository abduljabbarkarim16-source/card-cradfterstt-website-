"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { formatTtd } from "@/lib/format";
import type { GiftCardProduct } from "@/lib/products/types";

export function GiftCardVariants({ product }: { product: GiftCardProduct }) {
  const [selected, setSelected] = useState(0);
  const denom = product.denominations[selected];

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Denomination</p>
      <div className="flex flex-wrap gap-2">
        {product.denominations.map((d, i) => (
          <button
            key={d.label}
            type="button"
            onClick={() => setSelected(i)}
            className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
              i === selected
                ? "border-accent bg-accent-soft/10 text-accent-soft"
                : "border-white/10 bg-white/5 text-ink-200 hover:bg-white/10 hover:text-ink-50"
            }`}
          >
            <span className="block font-semibold">{d.label}</span>
            <span className="text-xs text-ink-300">{formatTtd(d.priceTtd)}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-300">Selected</p>
          <p className="display text-lg font-semibold">{denom.label}</p>
        </div>
        <p className="display text-2xl font-semibold tabular-nums text-accent-soft">{formatTtd(denom.priceTtd)}</p>
      </div>

      <AddToCartButton
        className="mt-5 w-full sm:w-auto"
        item={{
          id: product.id,
          slug: product.slug,
          category: product.category,
          name: `${product.name} ${denom.label}`,
          variant: denom.label,
          priceTtd: denom.priceTtd,
          image: product.image,
        }}
      />
    </div>
  );
}
