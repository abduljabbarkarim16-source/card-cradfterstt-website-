import Link from "next/link";
import type { Metadata } from "next";
import { getAllProducts, getCategories } from "@/lib/products/repository";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description: "Browse streaming subscriptions, gift cards, bill payments and personal shopping from Card Crafters.",
};

export default async function ServicesPage() {
  const [products, categories] = await Promise.all([getAllProducts(), getCategories()]);

  return (
    <>
      <Section
        eyebrow="Full catalog"
        title="Every service, one shelf."
        lead="Use the chips to jump into a category, or scroll the full list."
      >
        <div className="mb-10 flex flex-wrap gap-2">
          <Link
            href="#all"
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-ink-50"
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/services/${c.slug}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-ink-200 transition hover:bg-white/10 hover:text-ink-50"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </Section>

      {categories.map((c) => {
        const items = products.filter((p) => p.category === c.slug);
        if (items.length === 0) return null;
        return (
          <section key={c.slug} className="pb-16">
            <Container>
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <h2 className="display text-2xl font-semibold">{c.name}</h2>
                  <p className="text-sm text-ink-300">{c.tagline}</p>
                </div>
                <Link
                  href={`/services/${c.slug}`}
                  className="text-sm font-medium text-accent-soft hover:text-accent"
                >
                  View all {c.name.toLowerCase()} →
                </Link>
              </div>
              <ProductGrid products={items.slice(0, 8)} />
            </Container>
          </section>
        );
      })}
    </>
  );
}
