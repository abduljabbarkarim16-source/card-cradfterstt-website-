import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { SERVICES, getServiceBySlug, Service } from '@/lib/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.name,
    description: service.longDescription,
    openGraph: {
      title: service.name,
      description: service.longDescription,
    },
  };
}

export default function ServiceDetail({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Get related services
  const relatedServices = SERVICES.filter(
    (s) => service.relatedServices?.includes(s.id) && s.id !== service.id
  ).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold_light mb-6 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Services
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-accent-gold bg-opacity-10 text-accent-gold text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                {service.categoryLabel}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {service.name}
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {service.longDescription}
            </p>

            {service.price && (
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">Starting Price</p>
                <p className="text-4xl font-bold text-accent-gold">{service.price}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Order Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>
        </Section>

        {/* Service Details */}
        <Section dark={true}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What You Provide */}
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">What You Provide</h2>
              <div className="space-y-4">
                {service.whatYouProvide.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-accent-gold text-xl font-bold mt-1">•</span>
                    <span className="text-gray-300 text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-accent-gold bg-opacity-5 rounded-lg border border-accent-gold border-opacity-20">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-300">Delivery Time:</span> {service.deliveryTime}
                </p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Service Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <Section title="How The Process Works" subtitle="Simple steps to get your service activated">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Browse & Select',
                description: 'Choose your service and review all details carefully.',
              },
              {
                step: 2,
                title: 'Provide Information',
                description: 'Fill in your details and any specific requirements.',
              },
              {
                step: 3,
                title: 'Complete Payment',
                description: 'Secure payment processing with multiple options available.',
              },
              {
                step: 4,
                title: 'Enjoy Service',
                description: `Service activated and ready to use within ${service.deliveryTime}.`,
              },
            ].map((item) => (
              <div key={item.step} className="card-premium rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-gold">{item.step}</span>
                </div>
                <h3 className="font-bold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ for this service */}
        <Section dark={true} title="Common Questions">
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How long does activation take?',
                a: `Most ${service.name} orders are activated within ${service.deliveryTime}. You'll receive a confirmation email with all the details.`,
              },
              {
                q: 'Is there ongoing support?',
                a: 'Yes! Our support team is available 24/7 to assist you with any issues or questions about your service.',
              },
              {
                q: 'Can I upgrade or downgrade?',
                a: 'Depending on the service type, upgrades and modifications may be available. Contact us for specific details.',
              },
              {
                q: 'What if I have problems?',
                a: 'Contact our support team immediately. We aim to resolve issues within 2-4 hours.',
              },
            ].map((item, index) => (
              <div key={index} className="card-premium rounded-2xl p-6">
                <h3 className="font-bold text-gray-100 text-lg mb-2">{item.q}</h3>
                <p className="text-gray-400 text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <Section title="Related Services" subtitle="You might also be interested in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <ServiceCard
                  key={relatedService.id}
                  service={relatedService}
                />
              ))}
            </div>
          </Section>
        )}

        {/* CTA Section */}
        <Section dark={true} className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Place your order now and enjoy {service.name} within {service.deliveryTime}.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Order Now
              </Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
