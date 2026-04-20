"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";
import { formatTtd } from "@/lib/format";
import { ORDERS_STORAGE_KEY, generateOrderNumber, type Order } from "@/lib/cart";

const paymentMethods = [
  { id: "bank", label: "Bank Transfer", detail: "First Citizens · Account 3136319 · Card Crafters Limited" },
  { id: "endcash", label: "EndCash", detail: "Send to +1 (868) 465-1282" },
  { id: "quickpay", label: "Quick Pay", detail: "Scan & pay · reference your order number" },
];

export function CheckoutClient() {
  const { items, subtotal, clear, hydrated } = useCart();
  const [payment, setPayment] = useState(paymentMethods[0].id);
  const [form, setForm] = useState({
    firstName: "", email: "", phone: "", notes: "", transferDate: "", transactionId: "",
  });
  const [placed, setPlaced] = useState<Order | null>(null);

  if (!hydrated) {
    return <p className="text-sm text-ink-300">Loading your cart…</p>;
  }

  if (items.length === 0 && !placed) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center text-ink-300">
        <p className="text-sm">Your cart is empty.</p>
        <Link href="/services" className="mt-4 inline-block text-sm font-medium text-accent-soft underline-offset-4 hover:underline">
          Browse services
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="rounded-3xl border border-accent/30 bg-accent/5 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Order received</p>
        <h2 className="display mt-3 text-3xl font-semibold">#{placed.orderNumber}</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-200">
          Thanks, {placed.customer.name} — we'll confirm your payment and start fulfilment shortly. You'll also see this order under your profile.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/profile" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-ink-50 hover:bg-white/10">View orders</Link>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow">Keep shopping</Link>
        </div>
      </div>
    );
  }

  const selected = paymentMethods.find((p) => p.id === payment) ?? paymentMethods[0];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const order: Order = {
      orderNumber: generateOrderNumber(),
      placedAt: new Date().toISOString(),
      items: [...items],
      subtotal,
      total: subtotal,
      paymentMethod: selected.label,
      customer: {
        name: form.firstName,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
        transactionId: form.transactionId,
        transferDate: form.transferDate,
      },
    };
    try {
      const existing = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || "[]") as Order[];
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([order, ...existing]));
    } catch {
      // ignore storage failures
    }
    clear();
    setPlaced(order);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <form onSubmit={submit} className="space-y-6">
        <Panel title="Your details">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            <Field label="WhatsApp / Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            <Field label="Order notes" value={form.notes} onChange={(v) => setForm({ ...form, notes: v })} placeholder="Anything we should know" />
          </div>
        </Panel>

        <Panel title="Payment method">
          <div className="grid gap-3">
            {paymentMethods.map((p) => (
              <label
                key={p.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                  payment === p.id ? "border-accent/60 bg-accent/5" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <input type="radio" name="payment" className="mt-1 h-4 w-4 accent-accent" checked={payment === p.id} onChange={() => setPayment(p.id)} />
                <span>
                  <span className="display block text-sm font-semibold text-ink-50">{p.label}</span>
                  <span className="mt-0.5 block text-xs text-ink-300">{p.detail}</span>
                </span>
              </label>
            ))}
          </div>
        </Panel>

        <Panel title="Payment proof">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Transfer date" type="date" value={form.transferDate} onChange={(v) => setForm({ ...form, transferDate: v })} />
            <Field label="Transaction ID / reference" value={form.transactionId} onChange={(v) => setForm({ ...form, transactionId: v })} />
          </div>
          <p className="mt-3 text-xs text-ink-300">
            After placing the order, email any screenshots or receipts to{" "}
            <a className="text-accent-soft underline-offset-4 hover:underline" href="mailto:support@cardcrafterstt.com">
              support@cardcrafterstt.com
            </a>{" "}
            with your order number in the subject line.
          </p>
        </Panel>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-4 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow"
        >
          Place order · {formatTtd(subtotal)}
        </button>
      </form>

      <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="display text-lg font-semibold">Order summary</h2>
        <ul className="mt-4 divide-y divide-white/5">
          {items.map((i) => (
            <li key={`${i.id}::${i.variant ?? ""}`} className="flex gap-3 py-3">
              <div className="relative h-12 w-12 flex-none overflow-hidden rounded-lg bg-ink-800">
                <Image src={i.image} alt="" fill sizes="48px" className="object-contain p-1.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{i.name}</p>
                {i.variant && <p className="text-xs text-ink-300">{i.variant}</p>}
                <p className="text-xs text-ink-400">Qty {i.quantity}</p>
              </div>
              <p className="text-sm font-semibold tabular-nums text-accent-soft">{formatTtd(i.priceTtd * i.quantity)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
          <span className="text-sm text-ink-200">Total</span>
          <span className="display text-2xl font-semibold tabular-nums text-ink-50">{formatTtd(subtotal)}</span>
        </div>
      </aside>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="display text-lg font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Field({
  label, type = "text", value, onChange, required, placeholder,
}: { label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-ink-300">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
      />
    </label>
  );
}
