import Link from 'next/link';
import Card from './Card';
import Button from './Button';
import { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`}>
      <Card hoverable={true}>
        <div className="flex flex-col h-full">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-accent-gold bg-opacity-10 text-accent-gold text-xs font-semibold uppercase tracking-wider rounded-full">
              {service.categoryLabel}
            </span>
          </div>

          {/* Service Name */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-3 group-hover:text-accent-gold transition-colors">
            {service.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
            {service.description}
          </p>

          {/* Price if available */}
          {service.price && (
            <p className="text-accent-gold font-semibold text-sm mb-4">
              From {service.price}
            </p>
          )}

          {/* Delivery Time */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{service.deliveryTime}</span>
          </div>

          {/* CTA Button */}
          <Button variant="secondary" size="sm" className="w-full">
            Learn More
          </Button>
        </div>
      </Card>
    </Link>
  );
}
