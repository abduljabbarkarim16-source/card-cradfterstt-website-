import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getByCategory, getCategories, getCategory } from "@/lib/products/repository";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Section } from "@/components/ui/Section";
import { CATEGORIES, type Category } from "@/lib/products/types";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  const cats = await getCategories();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = await getCategory(category as Category);
  if (!meta) return { title: "Not found" };
  return {
    title: meta.name,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) notFound();
  const cat = category as Category;
  const [meta, products] = await Promise.all([getCategory(cat), getByCategory(cat)]);
  if (!meta) notFound();

  return (
    <Section eyebrow={meta.tagline} title={meta.name} lead={meta.description}>
      <ProductGrid products={products} />
    </Section>
  );
}
