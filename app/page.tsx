import { Hero } from "@/components/home/Hero";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { CategoriesBand } from "@/components/home/CategoriesBand";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTABand } from "@/components/home/CTABand";
import { getCategories } from "@/lib/products/repository";

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <>
      <Hero />
      <TrustRibbon />
      <CategoriesBand categories={categories} />
      <HowItWorks />
      <CTABand />
    </>
  );
}
