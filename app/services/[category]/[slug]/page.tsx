import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getBySlug } from "@/lib/products/repository";
import { Container } from "@/components/ui/Container";
import { Panel, Pill } from "@/components/ui/Panel";
import { StreamingVariants } from "@/components/products/StreamingDetail";
import { GiftCardVariants } from "@/components/products/GiftCardDetail";
import { BillPaymentForm } from "@/components/products/BillPaymentForm";
import { ShoppingEstimator } from "@/components/products/ShoppingEstimator";
import { CATEGORIES, type Category } from "@/lib/products/types";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  const all = await getAllProducts();
  return all.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  if (!CATEGORIES.includes(category as Category)) return { title: "Not found" };
  const product = await getBySlug(category as Category, slug);
  if (!product) return { title: "Not found" };
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;
  if (!CATEGORIES.includes(category as Category)) notFound();
  const product = await getBySlug(category as Category, slug);
  if (!product) notFound();

  return (
    <Container className="py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink-300">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/services" className="hover:text-ink-50">Services</Link></li>
          <li aria-hidden>/</li>
          <li><Link href={`/services/${product.category}`} className="hover:text-ink-50 capitalize">{product.category.replace("-", " ")}</Link></li>
          <li aria-hidden>/</li>
          <li className="text-ink-50">{product.name}</li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr]">
        <div>
          <Panel strong className="relative aspect-square overflow-hidden p-10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 440px, 90vw"
              priority
              className="object-contain p-8"
            />
          </Panel>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            <Pill>
              <span className="capitalize">{product.category.replace("-", " ")}</span>
            </Pill>
            {product.featured && <Pill className="border-accent/40 text-accent-soft">Popular</Pill>}
          </div>
          <h1 className="display mt-4 text-3xl font-semibold sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-ink-200">{product.tagline}</p>
          <p className="mt-5 text-sm leading-relaxed text-ink-200">{product.description}</p>

          <div className="mt-8">
            {product.category === "streaming" && <StreamingVariants product={product} />}
            {product.category === "gift-cards" && <GiftCardVariants product={product} />}
            {product.category === "bills" && <BillPaymentForm product={product} />}
            {product.category === "shopping" && <ShoppingEstimator product={product} />}
          </div>

          {product.category === "streaming" && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              <Spec label="Quality" value={product.quality} />
              <Spec label="Simultaneous screens" value={String(product.simultaneousScreens)} />
              {product.downloadDevices && <Spec label="Download slots" value={String(product.downloadDevices)} />}
              {product.tier && <Spec label="Tier" value={product.tier} />}
            </ul>
          )}

          {product.category === "bills" && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {product.examples.map((e) => (
                <Pill key={e}>{e}</Pill>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <li className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-300">{label}</p>
      <p className="mt-1 text-sm text-ink-50 capitalize">{value}</p>
    </li>
  );
}
