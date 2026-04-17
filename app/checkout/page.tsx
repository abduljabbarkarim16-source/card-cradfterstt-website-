'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceId: '',
    quantity: 1,
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      console.log('Order submitted:', formData);
      alert('Order placed successfully!');
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section className="pt-20 md:pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gray-100 mb-4">
            Checkout
          </h1>
          <p className="text-center text-gray-400">
            Secure payment processing for your order
          </p>
        </Section>

        {/* Progress Indicator */}
        <Section>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 ${
                      step >= s
                        ? 'bg-accent-gold text-dark-950'
                        : 'bg-dark-800 text-gray-500'
                    }`}
                  >
                    {s}
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 text-center">
                    {s === 1 ? 'Order Details' : s === 2 ? 'Delivery Info' : 'Payment'}
                  </p>
                  {s < 3 && (
                    <div
                      className={`hidden md:block absolute w-24 h-1 mt-5 ${
                        step > s ? 'bg-accent-gold' : 'bg-dark-700'
                      }`}
                      style={{ marginLeft: '3rem' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Form */}
        <Section dark={true}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Order Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-100 mb-6">
                      Select Your Service
                    </h2>

                    <div>
                      <label htmlFor="serviceId" className="block text-sm font-semibold text-gray-300 mb-2">
                        Service *
                      </label>
                      <select
                        id="serviceId"
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        required
                        className="w-full"
                      >
                        <option value="">Choose a service...</option>
                        <option value="netflix-premium">
                          Netflix Premium - TTD 175.00
                        </option>
                        <option value="disney-plus">Disney+ - TTD 145.00</option>
                        <option value="amazon-gift-25">Amazon $25 Gift Card - TTD 250.00</option>
                        <option value="steam-gift-50">Steam $50 Gift Card - TTD 400.00</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-sm font-semibold text-gray-300 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="10"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <p className="text-sm text-gray-500 bg-dark-900 p-4 rounded-lg">
                      ℹ️ Review service details on our Services page before placing your order.
                    </p>
                  </div>
                )}

                {/* Step 2: Delivery Info */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-100 mb-6">
                      Delivery Information
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
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
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-100 mb-6">
                      Payment Information
                    </h2>

                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-300 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        maxLength="19"
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-semibold text-gray-300 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          name="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleChange}
                          required
                          maxLength="5"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-semibold text-gray-300 mb-2">
                          CVC *
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          name="cvc"
                          placeholder="123"
                          value={formData.cvc}
                          onChange={handleChange}
                          required
                          maxLength="4"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 bg-dark-900 p-4 rounded-lg flex items-start gap-2">
                      <span>🔒</span>
                      <span>Your payment is secure and encrypted. We never store full card details.</span>
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-6">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      onClick={() => setStep(step - 1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1"
                  >
                    {step === 3 ? 'Place Order' : 'Continue'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card-premium rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-100 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-700 border-opacity-30">
                  {formData.serviceId && (
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-300 text-sm">
                          {formData.serviceId === 'netflix-premium'
                            ? 'Netflix Premium'
                            : formData.serviceId === 'disney-plus'
                            ? 'Disney+'
                            : formData.serviceId === 'amazon-gift-25'
                            ? 'Amazon $25'
                            : 'Steam $50'}
                        </p>
                        <p className="text-xs text-gray-500">x {formData.quantity}</p>
                      </div>
                      <p className="text-accent-gold font-semibold">
                        TTD{' '}
                        {formData.serviceId === 'netflix-premium'
                          ? 175 * formData.quantity
                          : formData.serviceId === 'disney-plus'
                          ? 145 * formData.quantity
                          : formData.serviceId === 'amazon-gift-25'
                          ? 250 * formData.quantity
                          : 400 * formData.quantity}
                        .00
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-gray-100">Total</span>
                  <span className="text-2xl font-bold text-accent-gold">
                    TTD{' '}
                    {formData.serviceId
                      ? (formData.serviceId === 'netflix-premium'
                          ? 175 * formData.quantity
                          : formData.serviceId === 'disney-plus'
                          ? 145 * formData.quantity
                          : formData.serviceId === 'amazon-gift-25'
                          ? 250 * formData.quantity
                          : 400 * formData.quantity) + '.00'
                      : '0.00'}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-500">
                  <p>✓ Secure payment processing</p>
                  <p>✓ 24-48 hour activation</p>
                  <p>✓ Money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
