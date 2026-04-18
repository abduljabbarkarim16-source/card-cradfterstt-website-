import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import AddToCartButton from '@/components/cart/AddToCartButton';
import { BillPaymentBuilder, GiftCardBuilder, ShoppingBuilder, StreamingBuilder } from '@/components/ServiceBuilders';
import { ProductImageFrame, StepCard, VisualPanel } from '@/components/Visual';
import { SERVICES, getServiceBySlug } from '@/lib/services';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | Card Crafters`,
      description: service.description,
      images: [service.image],
    },
  };
}

function CategoryBuilder({ category }: { category: string }) {
  if (category === 'streaming') return <StreamingBuilder />;
  if (category === 'gift-cards') return <GiftCardBuilder />;
  if (category === 'bill-payments') return <BillPaymentBuilder />;
  if (category === 'shopping') return <ShoppingBuilder />;
  return null;
}

export default async function ServiceDetail({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter(
    (item) => service.relatedServices?.includes(item.id) && item.id !== service.id
  ).slice(0, 3);
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Card Crafters',
    },
    areaServed: 'Trinidad and Tobago',
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <Section className="pt-16 pb-16 md:pt-24 md:pb-20" tone="quiet">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Link
                href="/services"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-gold hover:text-accent-gold_light"
              >
                Back to Services
              </Link>

              <span className="premium-badge mb-5">
                {service.categoryLabel}
              </span>
              <h1 className="text-5xl font-display font-bold leading-tight text-gray-100 md:text-6xl">
                {service.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">{service.longDescription}</p>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 rounded-lg border border-accent-gold/15 bg-dark-900/65 p-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Starts At</p>
                  <p className="mt-1 font-bold text-accent-gold">{service.price || 'Quoted'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Delivery</p>
                  <p className="mt-1 font-bold text-gray-200">{service.deliveryTime}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {service.numericPrice ? (
                  <AddToCartButton
                    className="px-8 py-4 text-base"
                    item={{
                      title: service.name,
                      subtitle: service.categoryLabel,
                      price: service.numericPrice,
                      type: 'service',
                      image: service.image,
                      details: { slug: service.slug },
                    }}
                  />
                ) : (
                  <Link href={`/services?category=${service.category}`}>
                    <Button variant="primary" size="lg">Build Order</Button>
                  </Link>
                )}
                <Link href="/contact">
                  <Button variant="secondary" size="lg">Ask Questions</Button>
                </Link>
              </div>
            </div>

            <VisualPanel variant="premium" className="p-4">
              <ProductImageFrame src={service.image} className="mx-auto aspect-[16/11] w-full max-w-xl" priority />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-dark-950/60 p-3">
                  <p className="text-gray-500">Category</p>
                  <p className="mt-1 font-semibold text-gray-100">{service.categoryLabel}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-dark-950/60 p-3">
                  <p className="text-gray-500">Review</p>
                  <p className="mt-1 font-semibold text-gray-100">Before checkout</p>
                </div>
              </div>
            </VisualPanel>
          </div>
        </Section>

        <Section tone="band">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <VisualPanel variant="muted" className="p-6">
              <h2 className="mb-6 text-3xl font-bold text-gray-100">What You Provide</h2>
              <div className="space-y-4">
                {service.whatYouProvide.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent-gold" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-accent-gold/20 bg-accent-gold/5 p-4">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">Delivery:</span> {service.deliveryTime}
                </p>
              </div>
            </VisualPanel>

            <VisualPanel variant="muted" className="p-6">
              <h2 className="mb-6 text-3xl font-bold text-gray-100">Service Features</h2>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </VisualPanel>
          </div>
        </Section>

        <Section title="Build This Type Of Order" subtitle="Use the guided flow to add a precise item to your cart.">
          <CategoryBuilder category={service.category} />
        </Section>

        <Section tone="band" title="How The Process Works" subtitle="Simple steps from selection to confirmation.">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              ['Review', 'Check the service details, price note, and requirements.'],
              ['Build', 'Use the builder or direct cart action to prepare the order.'],
              ['Checkout', 'Enter contact details and review your cart summary.'],
              ['Confirm', `Card Crafters follows up based on the ${service.deliveryTime} window.`],
            ].map(([title, description], index) => (
              <StepCard key={title} step={String(index + 1)} title={title} description={description} />
            ))}
          </div>
        </Section>

        {relatedServices.length > 0 && (
          <Section title="Related Services" subtitle="Other options in the Card Crafters catalog.">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </Section>
        )}
      </main>
      <Footer />
    </>
  );
}
