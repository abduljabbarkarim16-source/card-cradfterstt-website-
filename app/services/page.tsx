import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ServicesCatalog from '@/components/ServicesCatalog';
import { ServiceGridSkeleton } from '@/components/Skeleton';
import { PageHeader } from '@/components/Visual';
import { SERVICES, getCategories } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Browse Card Crafters streaming services, gift cards, bill-payment assistance, and shopping sourcing support.',
  openGraph: {
    title: 'Services | Card Crafters',
    description: 'Build streaming, gift-card, bill-payment, and shopping requests with Card Crafters.',
    images: ['/brand/monogram-glow.png'],
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-12 md:pt-24 md:pb-16" tone="quiet">
          <PageHeader
            eyebrow="Service Catalog"
            title="Choose, build, and review your order."
            description="Browse service pages, then use guided builders to prepare plan, provider, card, or sourcing details before checkout."
            accent="premium"
          />
        </Section>

        <Section tone="band">
          <Suspense fallback={<ServiceGridSkeleton count={6} />}>
            <ServicesCatalog services={SERVICES} categories={getCategories()} />
          </Suspense>
        </Section>
      </main>
      <Footer />
    </>
  );
}
