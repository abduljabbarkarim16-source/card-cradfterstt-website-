import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products/types";
import { formatTtd } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const href = `/services/${product.category}/${product.slug}`;
  const priceLabel =
    product.category === "bills"
      ? `Fee ${formatTtd((product as Extract<Product, { category: "bills" }>).feeTtd)}`
      : product.category === "shopping"
        ? `From ${formatTtd((product as Extract<Product, { category: "shopping" }>).standardFeeTtd)} fee`
        : `From ${formatTtd(product.priceTtd)}`;

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-800/60">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="display text-base font-semibold text-ink-50">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-ink-300">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold tabular-nums text-accent-soft">{priceLabel}</span>
          <span className="text-xs text-ink-300 group-hover:text-ink-50">View →</span>
        </div>
      </div>
    </Link>
  );
}
