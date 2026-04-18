'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import { VisualPanel } from '@/components/Visual';
import { BillPaymentBuilder, GiftCardBuilder, ShoppingBuilder, StreamingBuilder } from '@/components/ServiceBuilders';
import { CATEGORY_INTROS } from '@/lib/catalog';
import type { Service, ServiceCategoryId } from '@/lib/services';
import { useSearchParams } from 'next/navigation';

interface ServicesCatalogProps {
  services: Service[];
  categories: Array<{ id: ServiceCategoryId; label: string; count: number }>;
}

const CATEGORY_TITLES: Record<ServiceCategoryId, string> = {
  streaming: 'Streaming Services',
  'gift-cards': 'Gift Cards',
  'bill-payments': 'Bill Payments',
  shopping: 'Shopping & Sourcing',
};

function isCategory(value: string | null): value is ServiceCategoryId {
  return value === 'streaming' || value === 'gift-cards' || value === 'bill-payments' || value === 'shopping';
}

export default function ServicesCatalog({ services, categories }: ServicesCatalogProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const activeCategory = isCategory(categoryParam) ? categoryParam : undefined;
  const visibleServices = activeCategory ? services.filter((service) => service.category === activeCategory) : services;

  return (
    <>
      <div className="mb-10 rounded-lg border border-white/10 bg-dark-900/60 p-3">
        <div className="flex flex-wrap justify-center gap-3">
        <Link href="/services">
          <Button variant={!activeCategory ? 'primary' : 'secondary'} size="md">All Services</Button>
        </Link>
        {categories.map((category) => (
          <Link key={category.id} href={`/services?category=${category.id}`}>
            <Button variant={activeCategory === category.id ? 'primary' : 'secondary'} size="md">
              {category.label} ({category.count})
            </Button>
          </Link>
        ))}
        </div>
      </div>

      {activeCategory ? (
        <VisualPanel variant="premium" className="mx-auto mb-10 max-w-3xl p-5 text-center">
          <h2 className="text-2xl font-bold text-gray-100">{CATEGORY_TITLES[activeCategory]}</h2>
          <p className="mt-2 text-sm leading-6 text-gray-400">{CATEGORY_INTROS[activeCategory]}</p>
        </VisualPanel>
      ) : null}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-20">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">Guided Builders</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-100 md:text-5xl">Configure the exact request</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400">
            Use the guided modules when your request needs plan, provider, card, or sourcing details before checkout.
          </p>
        </div>
        <div className="space-y-6">
          {(!activeCategory || activeCategory === 'streaming') && <StreamingBuilder />}
          {(!activeCategory || activeCategory === 'gift-cards') && <GiftCardBuilder />}
          {(!activeCategory || activeCategory === 'bill-payments') && <BillPaymentBuilder />}
          {(!activeCategory || activeCategory === 'shopping') && <ShoppingBuilder />}
        </div>
      </div>
    </>
  );
}
