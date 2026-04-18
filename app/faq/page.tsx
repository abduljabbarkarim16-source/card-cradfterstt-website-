'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FAQItem from '@/components/FAQItem';
import { PageHeader } from '@/components/Visual';

const faqItems = [
  {
    question: 'How does the cart work?',
    answer:
      'The cart stores your selected services in this browser so you can review everything together before checkout. Payment is not processed on this version.',
  },
  {
    question: 'Can I choose exact streaming plans?',
    answer:
      'Yes. The services page includes a streaming builder with controlled account and gift-card account options where available.',
  },
  {
    question: 'Can I choose gift-card brand, amount, and region?',
    answer:
      'Yes. The gift-card builder lets you choose category, brand, denomination, and region before adding the item to your cart.',
  },
  {
    question: 'Which bill providers are supported in the builder?',
    answer:
      'The bill-payment builder includes WASA, T&TEC, Flow, Digicel, and Bmobile as starting provider options.',
  },
  {
    question: 'How does the shopping estimate work?',
    answer:
      'The estimate uses item cost in USD, a customer conversion rate, delivery fee, selected destination, and customs duty/VAT assumptions. Final pricing should still be reviewed before real fulfillment.',
  },
  {
    question: 'Does this checkout take real payment?',
    answer:
      'No. Payment fields were removed for this phase. A payment gateway can be added later once provider and compliance requirements are ready.',
  },
  {
    question: 'Why are some prices listed as estimates?',
    answer:
      'Shopping, sourcing, freight, and some payment services depend on customer details, provider requirements, or final review.',
  },
  {
    question: 'What information should I avoid sending?',
    answer:
      'Do not submit full card numbers, CVC codes, or sensitive payment credentials through site forms.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <Section className="pt-16 pb-16 md:pt-24 md:pb-24" tone="quiet">
          <PageHeader
            eyebrow="FAQ"
            title="Frequently asked questions."
            description="Quick answers about service builders, cart review, and what details to provide."
            accent="premium"
          />
        </Section>

        <Section tone="band">
          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
