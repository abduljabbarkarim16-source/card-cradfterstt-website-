import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import Feature from '@/components/Feature';
import FAQItem from '@/components/FAQItem';
import { SERVICES, getCategories } from '@/lib/services';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Card Crafters - Premium digital services including streaming subscriptions, gift cards, bill payments, and shopping assistance. Fast, secure, and reliable solutions for all your digital needs.',
  openGraph: {
    title: 'Card Crafters | Premium Digital Services & Sourcing',
    description:
      'Get access to streaming subscriptions, gift cards, bill payments, and professional shopping assistance.',
    url: 'https://cardcrafters.com',
    type: 'website',
  },
};

export default function Home() {
  const categories = getCategories();
  const featuredServices = SERVICES.slice(0, 6);

  const faqItems = [
    {
      question: 'How quickly will I receive my service?',
      answer:
        'Most streaming subscriptions are activated within 24-48 hours. Gift card codes are delivered digitally within 15-30 minutes. Bill payments and shopping sourcing depend on the specific service but are typically completed within 24-48 hours.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit and debit cards, digital wallets, and bank transfers. All payments are processed securely with encryption and fraud protection.',
    },
    {
      question: 'Is my information secure?',
      answer:
        'Yes, we use industry-leading encryption and security protocols to protect all your personal and payment information. Your data is never shared with third parties.',
    },
    {
      question: 'What if I have an issue with my service?',
      answer:
        'Our support team is available 24/7 to assist you. Contact us via email, phone, or our contact form, and we typically respond within 2-4 hours.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Premium Digital Services
              <span className="text-accent-gold"> Made Simple</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Get streaming subscriptions, gift cards, bill payments, and professional
              shopping assistance in one trusted platform. Fast, secure, and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button variant="primary" size="lg">
                  Browse Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-12 border-t border-gray-700 border-opacity-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent-gold mb-2">10K+</p>
                  <p className="text-sm text-gray-400">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent-gold mb-2">24/7</p>
                  <p className="text-sm text-gray-400">Support Available</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent-gold mb-2">100%</p>
                  <p className="text-sm text-gray-400">Secure & Encrypted</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent-gold mb-2">4.9★</p>
                  <p className="text-sm text-gray-400">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Trust Strip */}
        <Section dark={true}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Feature
              icon="⚡"
              title="Fast Service"
              description="Most orders processed within 24-48 hours. Gift cards delivered in minutes."
            />
            <Feature
              icon="🔒"
              title="Secure Process"
              description="Military-grade encryption protects all your data and transactions."
            />
            <Feature
              icon="📞"
              title="Responsive Support"
              description="Get help 24/7 from our dedicated support team via multiple channels."
            />
            <Feature
              icon="💳"
              title="Flexible Payments"
              description="Multiple payment methods accepted for your convenience."
            />
          </div>
        </Section>

        {/* Service Categories */}
        <Section
          title="Service Categories"
          subtitle="Choose the service you need"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <Link key={category.id} href={`/services?category=${category.id}`}>
                <div className="card-premium rounded-2xl p-6 text-center hover:border-accent-gold hover:border-opacity-30 cursor-pointer transition-all">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {category.label}
                  </h3>
                  <p className="text-3xl font-bold text-accent-gold">
                    {category.count}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">services available</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="secondary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </Section>

        {/* How It Works */}
        <Section dark={true} title="How It Works" subtitle="Simple 3-step process">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Browse & Select',
                description:
                  'Explore our services and choose what you need. Check prices and delivery times.',
              },
              {
                step: 2,
                title: 'Place Order',
                description:
                  'Fill in your details and complete secure payment. We process immediately.',
              },
              {
                step: 3,
                title: 'Enjoy Service',
                description:
                  'Receive your service activation or delivery. Support is available if needed.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent-gold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Services */}
        <Section title="Featured Services" subtitle="Popular choices by our customers">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Explore All Services
              </Button>
            </Link>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section dark={true} title="Why Choose Card Crafters" subtitle="We're committed to your satisfaction">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Support',
                description:
                  'Our team has years of experience in digital services. We\'re here to help with any questions.',
              },
              {
                title: 'Best Prices',
                description:
                  'Competitive pricing on all services. We constantly monitor the market to ensure great value.',
              },
              {
                title: 'Security First',
                description:
                  'Your data and payments are protected with industry-leading encryption and security measures.',
              },
              {
                title: 'Fast Delivery',
                description:
                  'Most services activated within 24-48 hours. Gift cards delivered in just minutes.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-gold bg-opacity-10 rounded-lg flex items-center justify-center">
                  <span className="text-accent-gold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ Preview */}
        <Section title="Frequently Asked Questions" subtitle="Quick answers to common questions">
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq">
              <Button variant="secondary" size="lg">
                View All FAQs
              </Button>
            </Link>
          </div>
        </Section>

        {/* CTA Section */}
        <Section dark={true} className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Join thousands of satisfied customers who trust Card Crafters for their digital needs.
            </p>
            <Link href="/services">
              <Button variant="primary" size="lg">
                Browse Our Services
              </Button>
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
