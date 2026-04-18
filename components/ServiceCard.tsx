'use client';

import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import Button from './Button';
import { Service } from '@/lib/services';
import AddToCartButton from './cart/AddToCartButton';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const cartPrice = service.numericPrice || 0;

  return (
    <Card hoverable={true} variant={featured ? 'premium' : 'default'} className={`h-full group/card ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="flex h-full flex-col">
        <Link href={`/services/${service.slug}`} className="group block hover:no-underline">
          <div className="product-frame relative mb-5 aspect-[16/10] overflow-hidden rounded-lg border border-white/10">
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-contain p-4 transition duration-300 group-hover:scale-105"
            />
            <div className="absolute left-3 top-3 rounded-lg border border-white/10 bg-dark-950/75 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent-gold">
              {service.categoryLabel}
            </div>
            {featured ? (
              <div className="absolute bottom-3 right-3 rounded-lg bg-accent-gold px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-dark-950">
                Featured
              </div>
            ) : null}
          </div>

          <h3 className="mb-3 text-xl font-bold text-gray-100 transition-colors group-hover:text-accent-gold md:text-2xl">
            {service.name}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-400">
            {service.description}
          </p>
        </Link>

        <div className="mb-6 mt-auto grid grid-cols-2 gap-3 rounded-lg border border-white/10 bg-dark-950/55 p-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gray-500">Starts At</p>
            <p className="mt-1 text-sm font-bold text-accent-gold">{service.price || 'Quoted'}</p>
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gray-500">Delivery</p>
            <p className="mt-1 text-sm font-bold text-gray-200">{service.deliveryTime}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link href={`/services/${service.slug}`}>
            <Button variant="secondary" size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          {cartPrice > 0 ? (
            <AddToCartButton
              className="w-full px-4 py-2 text-xs"
              item={{
                title: service.name,
                subtitle: service.categoryLabel,
                price: cartPrice,
                type: 'service',
                image: service.image,
                details: { slug: service.slug },
              }}
            />
          ) : (
            <Link href={`/services/${service.slug}`}>
              <Button variant="primary" size="sm" className="w-full">
                Build Order
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
