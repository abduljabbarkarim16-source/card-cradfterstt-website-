"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { formatTtd } from "@/lib/format";
import type { StreamingProduct } from "@/lib/products/types";

export function StreamingVariants({ product }: { product: StreamingProduct }) {
  const [selected, setSelected] = useState(0);
  const variant = product.variants[selected];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {product.variants.map((v, i) => (
          <button
            key={v.label}
            type="button"
            onClick={() => setSelected(i)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              i === selected
                ? "border-accent bg-accent-soft/10 text-accent-soft"
                : "border-white/10 bg-white/5 text-ink-200 hover:bg-white/10 hover:text-ink-50"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink-200 leading-relaxed">{variant.note}</p>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-300">Selected</p>
          <p className="display text-lg font-semibold">{variant.label}</p>
        </div>
        <p className="display text-2xl font-semibold tabular-nums text-accent-soft">{formatTtd(variant.priceTtd)}</p>
      </div>

      <AddToCartButton
        className="mt-5 w-full sm:w-auto"
        item={{
          id: product.id,
          slug: product.slug,
          category: product.category,
          name: product.name,
          variant: variant.label,
          priceTtd: variant.priceTtd,
          image: product.image,
        }}
      />
    </div>
  );
}
