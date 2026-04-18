'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { PageHeader, VisualPanel } from '@/components/Visual';
import { formatCurrency } from '@/lib/catalog';
import { useCart } from '@/components/cart/CartProvider';

export default function Checkout() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactPreference: 'WhatsApp',
    notes: '',
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) return;
    setSubmitted(true);
    clearCart();
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Section className="pt-16 pb-12 md:pt-24 md:pb-16" tone="quiet">
          <PageHeader
            eyebrow="Checkout"
            title="Review your order request."
            description="Confirm selected services and contact details before the request is prepared for follow-up."
            accent="premium"
          />
        </Section>

        <Section tone="band">
          {submitted ? (
            <VisualPanel variant="premium" className="mx-auto max-w-2xl p-8 text-center">
              <Image
                src="/brand/monogram-glow.png"
                alt="Card Crafters"
                width={96}
                height={96}
                className="mx-auto mb-5 h-20 w-20 object-contain"
              />
              <h2 className="text-3xl font-bold text-gray-100">Order request confirmed</h2>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Your order request was created successfully in this browser. The cart has been cleared.
              </p>
              <div className="mt-8">
                <Link href="/services">
                  <Button variant="primary" size="lg">Build Another Order</Button>
                </Link>
              </div>
            </VisualPanel>
          ) : (
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_0.75fr]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <VisualPanel variant="muted" className="p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-gold">Step 1</p>
                      <h2 className="mt-2 text-2xl font-bold text-gray-100">Contact Details</h2>
                    </div>
                    <span className="hidden rounded-lg border border-accent-gold/20 bg-accent-gold/10 px-3 py-1 text-xs font-semibold text-accent-gold sm:inline-flex">
                      Required
                    </span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-300">Name *</label>
                      <input
                        id="name"
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                        required
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-300">Phone *</label>
                      <input
                        id="phone"
                        value={formData.phone}
                        onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                        required
                        className="w-full"
                        placeholder="Phone or WhatsApp number"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-300">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        required
                        className="w-full"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPreference" className="mb-2 block text-sm font-semibold text-gray-300">Preferred Contact</label>
                      <select
                        id="contactPreference"
                        value={formData.contactPreference}
                        onChange={(event) => setFormData({ ...formData, contactPreference: event.target.value })}
                        className="w-full"
                      >
                        <option>WhatsApp</option>
                        <option>Email</option>
                        <option>Phone Call</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-gray-300">Order Notes</label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(event) => setFormData({ ...formData, notes: event.target.value })}
                      rows={5}
                      className="w-full"
                      placeholder="Add account details, delivery notes, timing, or questions."
                    />
                  </div>
                </VisualPanel>

                <VisualPanel variant="plain" className="p-4 text-sm leading-6 text-gray-400">
                  Payment details are not collected here. Card Crafters can confirm next steps after reviewing the request.
                </VisualPanel>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={items.length === 0}>
                  Confirm Order Request
                </Button>
              </form>

              <aside className="visual-panel visual-panel-premium p-6 lg:sticky lg:top-24 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-gold">Step 2</p>
                <h2 className="mb-6 mt-2 text-2xl font-bold text-gray-100">Order Summary</h2>
                {items.length === 0 ? (
                  <div className="text-center">
                    <Image
                      src="/brand/monogram-glow.png"
                      alt="Card Crafters"
                      width={80}
                      height={80}
                      className="mx-auto mb-4 h-16 w-16 object-contain"
                    />
                    <p className="text-sm text-gray-400">Your cart is empty.</p>
                    <Link href="/services" className="btn btn-primary mt-6">
                      Browse Services
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="rounded-lg border border-white/10 bg-dark-950/70 p-4">
                          <div className="flex gap-3">
                            {item.image && (
                              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-dark-900">
                                <Image src={item.image} alt="" fill sizes="48px" className="object-contain p-1.5" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <h3 className="text-sm font-bold text-gray-100">{item.title}</h3>
                              <p className="mt-1 text-xs leading-5 text-gray-400">{item.subtitle}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="inline-flex items-center rounded-lg border border-white/10">
                              <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1.5 text-gray-300">-</button>
                              <span className="min-w-8 text-center text-sm text-gray-100">{item.quantity}</span>
                              <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1.5 text-gray-300">+</button>
                            </div>
                            <button type="button" onClick={() => removeItem(item.id)} className="text-xs text-gray-500 hover:text-gray-200">
                              Remove
                            </button>
                          </div>
                          <p className="mt-3 text-right text-sm font-bold text-accent-gold">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-lg border border-accent-gold/20 bg-accent-gold/10 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-100">Estimated Total</span>
                        <span className="text-2xl font-bold text-accent-gold">{formatCurrency(total)}</span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-gray-400">Final details can be reviewed before any real fulfillment step.</p>
                    </div>
                  </>
                )}
              </aside>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
