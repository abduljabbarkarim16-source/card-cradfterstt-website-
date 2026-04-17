import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES, getCategories, Service } from '@/lib/services';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore all Card Crafters services: streaming subscriptions, gift cards, bill payments, and shopping assistance.',
};

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

export default function Services() {
  const categories = getCategories();

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              All Our <span className="text-accent-gold">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Choose from our comprehensive range of premium digital services. Everything you
              need in one trusted platform.
            </p>
          </div>
        </Section>

        {/* Category Navigation */}
        <Section>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/services">
              <Button variant="primary" size="md">
                All Services
              </Button>
            </Link>
            {categories.map((category) => (
              <Link key={category.id} href={`/services?category=${category.id}`}>
                <Button variant="secondary" size="md">
                  {category.label} ({category.count})
                </Button>
              </Link>
            ))}
          </div>
        </Section>

        {/* Streaming Services */}
        <Section dark={true} title="Streaming Services" subtitle="Managed subscriptions with full billing control">
          <ServiceGrid
            services={SERVICES.filter((s) => s.category === 'streaming')}
          />
        </Section>

        {/* Gift Cards */}
        <Section title="Gift Cards" subtitle="Digital codes delivered instantly">
          <ServiceGrid
            services={SERVICES.filter((s) => s.category === 'gift-cards')}
          />
        </Section>

        {/* Bill Payments */}
        <Section dark={true} title="Bill Payments" subtitle="Pay your bills securely online">
          <ServiceGrid
            services={SERVICES.filter((s) => s.category === 'bill-payments')}
          />
        </Section>

        {/* Shopping & Sourcing */}
        <Section title="Shopping & Sourcing" subtitle="Professional shopping and sourcing assistance">
          <ServiceGrid
            services={SERVICES.filter((s) => s.category === 'shopping')}
          />
        </Section>

        {/* Info Section */}
        <Section dark={true} title="How Our Services Work">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Streaming Subscriptions</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                We handle the complete account setup and ongoing management. You get reliable
                access with automatic renewal and continuity. No hassles, just entertainment.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Full account management</li>
                <li>✓ Automatic renewal</li>
                <li>✓ 24/7 access support</li>
                <li>✓ Service continuity guaranteed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Digital Products</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Gift cards and other digital products are delivered instantly after payment.
                You can start using them right away. Fast, secure, and convenient.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Instant delivery</li>
                <li>✓ Secure codes</li>
                <li>✓ No expiration</li>
                <li>✓ Easy redemption</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Find What You Need
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Browse our complete catalog and place your order today. Quick, secure, and reliable.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us for Help
              </Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
