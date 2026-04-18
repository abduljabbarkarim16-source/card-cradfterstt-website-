import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import { ProductImageFrame, StepCard, VisualPanel } from '@/components/Visual';
import { SERVICES, getCategories } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Card Crafters provides streaming subscriptions, gift cards, bill-payment assistance, and online shopping support through a fast, clear ordering experience.',
  openGraph: {
    title: 'Card Crafters | Digital Services, Gift Cards & Sourcing',
    description:
      'Browse streaming services, gift cards, bill payments, and shopping support from Card Crafters.',
    url: 'https://cardcrafters.com',
    type: 'website',
    images: ['/brand/monogram-glow.png'],
  },
};

const trustItems = [
  {
    title: 'Clear order details',
    description: 'Each service explains what is needed before checkout.',
    icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Guided request flow',
    description: 'Choose plans, providers, cards, or sourcing details step by step.',
    icon: 'M4.5 12h15m-15 0l6-6m-6 6l6 6',
  },
  {
    title: 'Review before confirmation',
    description: 'Your cart keeps every request organized before submission.',
    icon: 'M9 12h6m-6 4h6M7.5 4.5h9A1.5 1.5 0 0118 6v12a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 18V6a1.5 1.5 0 011.5-1.5z',
  },
  {
    title: 'Responsive support',
    description: 'Questions and order notes stay easy to include.',
    icon: 'M8.625 9.75a.375.375 0 100-.75.375.375 0 000 .75zm3.75 0a.375.375 0 100-.75.375.375 0 000 .75zm3.75 0a.375.375 0 100-.75.375.375 0 000 .75zM21 11.25c0 4.142-4.03 7.5-9 7.5a10.4 10.4 0 01-3.45-.584L3 19.5l1.75-4.084A6.843 6.843 0 013 11.25c0-4.142 4.03-7.5 9-7.5s9 3.358 9 7.5z',
  },
];

const howItWorks = [
  {
    title: 'Choose a service',
    description: 'Browse by category or use a guided builder for more specific orders.',
  },
  {
    title: 'Add details',
    description: 'Select the plan, card region, bill provider, or shopping estimate details.',
  },
  {
    title: 'Review checkout',
    description: 'Confirm your cart and contact details before submitting the order request.',
  },
];

const categoryVisuals = {
  streaming: {
    image: '/products/netflix-plans.png',
    description: 'Streaming plans and account options prepared through a guided flow.',
  },
  'gift-cards': {
    image: '/products/amazon.png',
    description: 'Choose card brands, regions, and denominations before checkout.',
  },
  'bill-payments': {
    image: '/products/tntec.jpg',
    description: 'Prepare provider, account, and bill amount details in one place.',
  },
  shopping: {
    image: '/products/visa.png',
    description: 'Estimate sourcing requests with store, delivery, and customs context.',
  },
} as const;

const faqPreview = [
  {
    question: 'How quickly are services handled?',
    answer:
      'Gift-card orders can usually be prepared quickly after confirmation, while streaming, bill-payment, and sourcing requests depend on the details submitted.',
  },
  {
    question: 'Can I build a custom order?',
    answer:
      'Yes. The services page includes guided builders for streaming options, gift cards, bill payments, and shopping estimates.',
  },
  {
    question: 'Is checkout taking payment now?',
    answer:
      'Checkout builds and confirms the order request, but it does not process real card payments in this version.',
  },
];

export default function Home() {
  const categories = getCategories();
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-18 text-center md:pt-24 md:pb-28" tone="quiet">
          <div className="mx-auto max-w-6xl">
            <div className="premium-badge mb-6">Card Crafters Limited</div>
            <h1 className="mx-auto max-w-6xl text-4xl font-display font-bold leading-tight text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
                Digital services arranged with clarity and premium care.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Browse streaming access, gift cards, bill payments, and shopping support through guided flows that keep every request easy to review.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/services">
                <Button variant="primary" size="lg">Browse Services</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </Section>

        <Section tone="band">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {trustItems.map((item) => (
              <VisualPanel key={item.title} variant="plain" className="p-5 text-center transition hover:border-accent-gold/25 md:text-left">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-accent-gold/25 bg-accent-gold/10 text-accent-gold md:mx-0">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-100">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.description}</p>
              </VisualPanel>
            ))}
          </div>
        </Section>

        <Section title="Service Categories" subtitle="Choose the service flow that matches what you need.">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/services?category=${category.id}`} className="group hover:no-underline">
                <div className="visual-panel visual-panel-muted h-full p-5 transition group-hover:border-accent-gold/40">
                  <ProductImageFrame
                    src={categoryVisuals[category.id].image}
                    className="mb-5 aspect-[16/10]"
                  />
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-accent-gold">{category.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{categoryVisuals[category.id].description}</p>
                  <div className="mt-5 flex items-center justify-end border-t border-white/10 pt-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-gold">
                      Explore
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section tone="band" title="How It Works" subtitle="A cleaner ordering flow from selection to checkout.">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {howItWorks.map((item, index) => (
              <StepCard key={item.title} step={String(index + 1)} title={item.title} description={item.description} />
            ))}
          </div>
        </Section>

        <Section title="Featured Services" subtitle="Popular starting points from the Card Crafters catalog.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} featured={index === 0} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="secondary" size="lg">Explore All Services</Button>
            </Link>
          </div>
        </Section>

        <Section tone="band" title="Quick Answers" subtitle="A few things to know before ordering.">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {faqPreview.map((item) => (
              <VisualPanel key={item.question} variant="muted" className="p-6">
                <h3 className="text-lg font-bold text-gray-100">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{item.answer}</p>
              </VisualPanel>
            ))}
          </div>
        </Section>

        <Section className="text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-100 md:text-5xl">Start With The Catalog</h2>
            <p className="mt-4 text-lg text-gray-400">
              Use the service builders to prepare an order request quickly.
            </p>
            <div className="mt-8">
              <Link href="/services">
                <Button variant="primary" size="lg">Browse Services</Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
