"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatTtd } from "@/lib/format";

export function CartDrawer() {
  const { drawerOpen, closeDrawer, items, subtotal, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeDrawer(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen, closeDrawer]);

  return (
    <div
      aria-hidden={!drawerOpen}
      className={`fixed inset-0 z-50 ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        onClick={closeDrawer}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-ink-900/95 shadow-panel transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h2 className="display text-lg font-semibold">Your Cart</h2>
          <button
            onClick={closeDrawer}
            className="rounded-full p-2 text-ink-200 hover:bg-white/10 hover:text-ink-50"
            aria-label="Close cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-ink-200">
              <p className="text-sm">Your cart is empty.</p>
              <Link
                href="/services"
                onClick={closeDrawer}
                className="mt-4 text-sm font-medium text-accent-soft underline-offset-4 hover:underline"
              >
                Browse services
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={`${item.id}::${item.variant ?? ""}`} className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                  <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg bg-ink-800">
                    <Image src={item.image} alt="" fill sizes="64px" className="object-contain p-2" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{item.name}</p>
                        {item.variant && <p className="text-xs text-ink-300">{item.variant}</p>}
                      </div>
                      <button
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-ink-300 hover:text-red-400"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                          className="px-2 py-1 text-ink-200 hover:text-ink-50"
                        >−</button>
                        <span className="px-2 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                          className="px-2 py-1 text-ink-200 hover:text-ink-50"
                        >+</button>
                      </div>
                      <span className="text-sm font-semibold tabular-nums text-accent-soft">
                        {formatTtd(item.priceTtd * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-white/10 px-6 py-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-ink-200">Subtotal</span>
              <span className="display text-xl font-semibold text-ink-50 tabular-nums">{formatTtd(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-300">Final cost confirmed at checkout. Delivery & fees calculated there.</p>
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow"
            >
              Proceed to checkout
            </Link>
          </footer>
        )}
      </aside>
    </div>
  );
}
