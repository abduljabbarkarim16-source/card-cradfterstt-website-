import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { PageHeader, StepCard, VisualPanel } from '@/components/Visual';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Card Crafters and the service approach behind digital cards, streaming access, bill payments, and shopping support.',
};

const values = [
  {
    title: 'Clarity',
    description: 'Customers should understand what they are ordering, what details are needed, and what happens next.',
  },
  {
    title: 'Security',
    description: 'Order details are collected intentionally and handled with care.',
  },
  {
    title: 'Speed',
    description: 'The site keeps common ordering paths short and easy to complete.',
  },
  {
    title: 'Support',
    description: 'Every service flow leaves room for notes, questions, and follow-up.',
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-16 md:pt-24 md:pb-24" tone="quiet">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
            <PageHeader
              align="left"
              eyebrow="About Card Crafters"
              title="Built for cleaner digital ordering."
              description="Card Crafters helps customers request streaming access, digital gift cards, bill-payment assistance, and shopping support through simple guided flows."
              accent="premium"
            />
            <div className="product-frame relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg border border-accent-gold/15">
              <Image src="/brand/monogram-glow.png" alt="Card Crafters monogram" fill sizes="360px" className="object-contain" />
            </div>
          </div>
        </Section>

        <Section tone="band" title="How We Work" subtitle="The ordering experience is designed around practical service details.">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['Service-first catalog', 'Each page explains what the customer provides, delivery expectations, and related options.'],
              ['Guided builders', 'Streaming, gift cards, bill payments, and sourcing requests each have a focused builder.'],
              ['Cart review', 'Customers can collect items and review the request before checkout.'],
            ].map(([title, description], index) => (
                <StepCard key={title} step={String(index + 1)} title={title} description={description} />
            ))}
          </div>
        </Section>

        <Section title="Values" subtitle="The standards guiding this rebuild.">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <VisualPanel key={value.title} variant="muted" className="p-6">
                <h2 className="text-xl font-bold text-gray-100">{value.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-400">{value.description}</p>
              </VisualPanel>
            ))}
          </div>
        </Section>

        <Section tone="band" className="text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-100 md:text-5xl">Browse the service catalog</h2>
            <p className="mt-4 text-lg text-gray-400">
              Start with the category that matches your request.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/services">
                <Button variant="primary" size="lg">Browse Services</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
