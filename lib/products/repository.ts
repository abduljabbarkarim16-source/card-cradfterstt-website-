import { products, productBySlug, productsByCategory, featuredProducts } from "@/data/products";
import { categories } from "@/data/categories";
import type { Category, CategoryMeta, Product } from "@/lib/products/types";

// Repository interface — swap in a DB or CMS backed implementation later without
// touching any page components.

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return featuredProducts();
}

export async function getByCategory(category: Category): Promise<Product[]> {
  return productsByCategory(category);
}

export async function getBySlug(category: Category, slug: string): Promise<Product | undefined> {
  return productBySlug(category, slug);
}

export async function getCategories(): Promise<CategoryMeta[]> {
  return categories;
}

export async function getCategory(slug: Category): Promise<CategoryMeta | undefined> {
  return categories.find((c) => c.slug === slug);
}
