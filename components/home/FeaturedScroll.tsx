import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products/types";
import { formatTtd } from "@/lib/format";

function priceLabel(product: Product) {
  if (product.category === "bills") {
    return `Fee ${formatTtd((product as Extract<Product, { category: "bills" }>).feeTtd)}`;
  }
  if (product.category === "shopping") {
    return `From ${formatTtd((product as Extract<Product, { category: "shopping" }>).standardFeeTtd)} fee`;
  }
  return `From ${formatTtd(product.priceTtd)}`;
}

export function FeaturedScroll({ products }: { products: Product[] }) {
  return (
    <div className="relative -mr-6 sm:-mr-10 lg:-mr-16">
      <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-6 sm:gap-5 sm:pr-10 lg:pr-16">
        {products.map((product) => (
          <li
            key={product.id}
            className="snap-start"
            style={{ flex: "0 0 auto" }}
          >
            <Link
              href={`/services/${product.category}/${product.slug}`}
              className="group flex h-full w-[230px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-glow sm:w-[260px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-ink-800/60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="260px"
                  className="object-contain p-6 transition duration-500 group-hover:scale-[1.05]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="display text-base font-semibold text-ink-50">{product.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-ink-300">{product.tagline}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold tabular-nums text-accent-soft">{priceLabel(product)}</span>
                  <span className="text-xs text-ink-300 group-hover:text-ink-50">View →</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-ink-900 via-ink-900/60 to-transparent" />
    </div>
  );
}
