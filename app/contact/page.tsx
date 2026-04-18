'use client';

import { FormEvent, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { PageHeader, VisualPanel } from '@/components/Visual';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', service: '', message: '' });
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-16 md:pt-24 md:pb-24" tone="quiet">
          <PageHeader
            eyebrow="Contact"
            title="Send a service question."
            description="Use this form for order questions, service availability, or details that do not fit inside checkout notes."
            accent="premium"
          />
        </Section>

        <Section tone="band">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1fr]">
            <VisualPanel variant="premium" className="p-6">
              <h2 className="text-3xl font-bold text-gray-100">Before you submit</h2>
              <div className="mt-6 space-y-4 text-sm leading-6 text-gray-400">
                <p>For a specific order, the services page and checkout collect more structured details.</p>
                <p>For a custom request, include the service type, account or provider details needed for review, and any timing constraints.</p>
                <p>Do not send card numbers, CVC codes, or sensitive payment credentials through this form.</p>
              </div>
            </VisualPanel>

            <form onSubmit={handleSubmit} className="visual-panel visual-panel-muted p-6">
              {submitted && (
                <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
                  Message noted in this browser. Connect a form backend when live submissions are ready.
                </div>
              )}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-300">Name *</label>
                  <input id="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-300">Email *</label>
                  <input id="email" type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="w-full" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gray-300">Service Interest *</label>
                <select id="service" required value={formData.service} onChange={(event) => setFormData({ ...formData, service: event.target.value })} className="w-full">
                  <option value="">Select a service...</option>
                  <option value="streaming">Streaming Services</option>
                  <option value="gift-cards">Gift Cards</option>
                  <option value="bill-payments">Bill Payments</option>
                  <option value="shopping">Shopping & Sourcing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-300">Message *</label>
                <textarea id="message" required rows={6} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="w-full" />
              </div>
              <Button type="submit" variant="primary" size="lg" className="mt-6 w-full">
                Send Message
              </Button>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
