'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/catalog';
import { useCart } from './CartProvider';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, clearCart } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-dark-950/72 backdrop-blur-sm transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col border-l border-accent-gold/15 bg-dark-950 shadow-premium-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="border-b border-white/10 bg-dark-900/80 p-5">
          <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-gold">Cart</p>
            <h2 className="text-xl font-bold text-gray-100">Your order</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-accent-gold hover:text-accent-gold"
          >
            Close
          </button>
          </div>
          <p className="mt-3 text-sm text-gray-400">Review selected services before checkout.</p>
        </div>

        <div className="cart-drawer flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <Image
                src="/brand/monogram-glow.png"
                alt="Card Crafters"
                width={96}
                height={96}
                className="mb-5 h-20 w-20 object-contain"
              />
              <h3 className="text-lg font-bold text-gray-100">Your cart is empty</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-400">
                Add a service, gift card, bill payment, or shopping quote to start an order.
              </p>
              <Link href="/services" onClick={closeCart} className="btn btn-primary mt-6">
                Browse Services
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="rounded-lg border border-white/10 bg-dark-900/70 p-4 shadow-premium">
                  <div className="flex gap-3">
                    {item.image && (
                      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-dark-900">
                        <Image src={item.image} alt="" fill sizes="56px" className="object-contain p-1.5" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-gray-100">{item.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-gray-400">{item.subtitle}</p>
                      <p className="mt-2 text-sm font-semibold text-accent-gold">{formatCurrency(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="h-8 rounded-lg px-2 text-xs text-gray-500 transition hover:bg-white/5 hover:text-gray-200"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-lg border border-white/10">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-gray-300 transition hover:text-accent-gold"
                        aria-label={`Decrease quantity for ${item.title}`}
                      >
                        -
                      </button>
                      <span className="min-w-8 text-center text-sm text-gray-100">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-gray-300 transition hover:text-accent-gold"
                        aria-label={`Increase quantity for ${item.title}`}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-bold text-gray-100">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-accent-gold/15 bg-dark-900/85 p-5">
            <div className="mb-4 rounded-lg border border-accent-gold/20 bg-accent-gold/10 p-4">
              <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-300">Estimated total</span>
              <span className="text-2xl font-bold text-accent-gold">{formatCurrency(total)}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-gray-400">Review your request before checkout.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={clearCart} className="btn btn-secondary">
                Clear
              </button>
              <Link href="/checkout" onClick={closeCart} className="btn btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
