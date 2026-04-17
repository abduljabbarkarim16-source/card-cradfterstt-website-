'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';

// Note: For actual implementation, use 'use client' and handle form submission

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Get In <span className="text-accent-gold">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Have questions? Need help? Our dedicated support team is here to assist you.
              Reach out and we'll get back to you within 2-4 hours.
            </p>
          </div>
        </Section>

        {/* Contact Info & Form */}
        <Section dark={true}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl text-accent-gold">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-100 text-lg mb-1">Email</h3>
                    <p className="text-gray-400">support@cardcrafters.com</p>
                    <p className="text-sm text-gray-500 mt-2">Response within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-accent-gold">📱</div>
                  <div>
                    <h3 className="font-bold text-gray-100 text-lg mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-accent-gold">🌐</div>
                  <div>
                    <h3 className="font-bold text-gray-100 text-lg mb-1">Live Chat</h3>
                    <p className="text-gray-400">Chat with us in real-time</p>
                    <p className="text-sm text-gray-500 mt-2">Average response: 5 minutes</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-accent-gold">⏰</div>
                  <div>
                    <h3 className="font-bold text-gray-100 text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-400">Monday - Sunday</p>
                    <p className="text-sm text-gray-500 mt-2">24/7 Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg">
                  <p className="text-green-400 text-sm">
                    ✓ Thank you! We've received your message. We'll be in touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full"
                  >
                    <option value="">Select a service...</option>
                    <option value="streaming">Streaming Services</option>
                    <option value="gift-cards">Gift Cards</option>
                    <option value="bill-payments">Bill Payments</option>
                    <option value="shopping">Shopping & Sourcing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We typically respond within 2-4 hours during business hours.
              </p>
            </div>
          </div>
        </Section>

        {/* Why Contact Us */}
        <Section title="Why Choose Our Support Team">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Fast Response', desc: 'Get answers within 2-4 hours' },
              { icon: '🎯', title: 'Expert Help', desc: 'Knowledgeable support staff' },
              { icon: '🌍', title: 'Multi-Channel', desc: 'Reach us via chat, email, or phone' },
              { icon: '😊', title: 'Friendly Service', desc: 'We actually care about you' },
            ].map((item, i) => (
              <div key={i} className="card-premium rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
