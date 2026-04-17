'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FAQItem from '@/components/FAQItem';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'How long does it take to activate my service?',
      answer:
        'Delivery times vary by service. Streaming subscriptions typically activate within 24-48 hours. Gift card codes are delivered digitally within 15-30 minutes. Bill payments and shopping services usually complete within 24-48 hours. You\'ll receive confirmation once activation is complete.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and digital payment methods. All transactions are processed securely with encryption and fraud protection.',
    },
    {
      question: 'Is my information secure?',
      answer:
        'Absolutely. We use industry-leading SSL encryption, secure payment gateways, and follow strict data protection protocols. Your personal and payment information is never shared with unauthorized parties and is stored securely.',
    },
    {
      question: 'Can I get a refund?',
      answer:
        'Refund policies vary by service type. Streaming subscriptions may be refunded within 7 days if the service hasn\'t been activated. Digital products like gift cards cannot be refunded once delivered. Contact us for specific details on your purchase.',
    },
    {
      question: 'How do I reset my streaming password?',
      answer:
        'For managed streaming subscriptions, contact our support team immediately. They\'ll help you reset your password securely. For gift card accounts, use the account provider\'s password recovery tool.',
    },
    {
      question: 'What if I have issues with my service?',
      answer:
        'Contact our support team immediately via email, phone, or chat. We typically respond within 2-4 hours. Describe your issue clearly, and we\'ll work to resolve it quickly.',
    },
    {
      question: 'Can I cancel or pause my subscription?',
      answer:
        'Yes, you can cancel or pause your service at any time. Contact our support team with your request. Cancellation takes effect at the end of your current billing period.',
    },
    {
      question: 'Do you offer family or group discounts?',
      answer:
        'We don\'t currently offer group discounts, but we\'re always open to discussing bulk orders. Contact us directly to see if we can work something out for your needs.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'You\'ll receive a confirmation email immediately after purchase with your order number. For digital products, you\'ll receive your codes in the email. For other services, you can track activation status by contacting support.',
    },
    {
      question: 'Is there a loyalty program?',
      answer:
        'We offer special discounts to repeat customers. Contact our support team to ask about loyalty benefits and exclusive offers available to you.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-accent-gold">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Find answers to common questions about our services, pricing, and policies.
            </p>
          </div>
        </Section>

        {/* FAQ List */}
        <Section dark={true}>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </Section>

        {/* Still Have Questions */}
        <Section title="Still Have Questions?" subtitle="We're here to help">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '📧',
                title: 'Email Us',
                desc: 'support@cardcrafters.com',
                time: '2-4 hour response',
              },
              {
                icon: '💬',
                title: 'Live Chat',
                desc: 'Chat in real-time',
                time: '~5 minute response',
              },
              {
                icon: '📱',
                title: 'Call Us',
                desc: '+1 (555) 123-4567',
                time: '24/7 Available',
              },
            ].map((item, i) => (
              <div key={i} className="card-premium rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                <p className="text-xs text-accent-gold font-semibold">{item.time}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
