import { Hero } from "@/components/home/Hero";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { CategoriesBand } from "@/components/home/CategoriesBand";
import { WhyCardCrafters } from "@/components/home/WhyCardCrafters";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTABand } from "@/components/home/CTABand";
import { getCategories, getFeaturedProducts } from "@/lib/products/repository";
import { Section } from "@/components/ui/Section";
import { ProductGrid } from "@/components/products/ProductGrid";

export default async function HomePage() {
  const [categories, featured] = await Promise.all([getCategories(), getFeaturedProducts()]);

  return (
    <>
      <Hero />
      <TrustRibbon />
      <CategoriesBand categories={categories} />
      <Section
        eyebrow="Popular this month"
        title="A short list of the most-ordered items."
      >
        <ProductGrid products={featured} />
      </Section>
      <WhyCardCrafters />
      <HowItWorks />
      <CTABand />
    </>
  );
}
