"use client";

import { useEffect, useState } from "react";
import { formatTtd } from "@/lib/format";
import {
  emptyProfile,
  ORDERS_STORAGE_KEY,
  PROFILE_STORAGE_KEY,
  type Order,
  type Profile,
} from "@/lib/cart";

export function ProfileClient() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [orders, setOrders] = useState<Order[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const p = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (p) setProfile({ ...emptyProfile, ...JSON.parse(p) });
      const o = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (o) setOrders(JSON.parse(o));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // ignore
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 1600);
  };

  if (!hydrated) return <p className="text-sm text-ink-300">Loading your profile…</p>;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
      <form onSubmit={save} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="display text-lg font-semibold">Your details</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="First name" value={profile.firstName} onChange={(v) => setProfile({ ...profile, firstName: v })} />
          <Field label="Last name" value={profile.lastName} onChange={(v) => setProfile({ ...profile, lastName: v })} />
          <Field label="Email" type="email" value={profile.email} onChange={(v) => setProfile({ ...profile, email: v })} />
          <Field label="Phone" value={profile.phone} onChange={(v) => setProfile({ ...profile, phone: v })} />
        </div>

        <label className="mt-5 block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-ink-300">Preferred contact</span>
          <select
            value={profile.preferredContact}
            onChange={(e) => setProfile({ ...profile, preferredContact: e.target.value as Profile["preferredContact"] })}
            className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
            <option value="phone">Phone call</option>
          </select>
        </label>

        <label className="mt-4 flex items-center gap-3 text-sm text-ink-200">
          <input
            type="checkbox"
            className="h-4 w-4 accent-accent"
            checked={profile.marketingOptIn}
            onChange={(e) => setProfile({ ...profile, marketingOptIn: e.target.checked })}
          />
          Send me occasional product updates (no spam).
        </label>

        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow"
        >
          {saved ? "Saved ✓" : "Save changes"}
        </button>
      </form>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="display text-lg font-semibold">Order history</h2>
        {orders.length === 0 ? (
          <p className="mt-4 text-sm text-ink-300">No orders yet. Anything you place will appear here.</p>
        ) : (
          <ul className="mt-5 space-y-3">
            {orders.map((o) => (
              <li key={o.orderNumber} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-ink-300">#{o.orderNumber}</p>
                    <p className="mt-0.5 text-sm font-semibold text-ink-50">
                      {o.items.length} item{o.items.length === 1 ? "" : "s"} · {o.paymentMethod}
                    </p>
                    <p className="text-xs text-ink-400">
                      {new Date(o.placedAt).toLocaleString("en-TT", { dateStyle: "medium", timeStyle: "short" })}
                    </p>
                  </div>
                  <p className="display text-lg font-semibold tabular-nums text-accent-soft">{formatTtd(o.total)}</p>
                </div>
                <ul className="mt-3 space-y-1 text-xs text-ink-200">
                  {o.items.map((i) => (
                    <li key={`${i.id}::${i.variant ?? ""}`} className="flex justify-between gap-4">
                      <span className="truncate">{i.name}{i.variant ? ` · ${i.variant}` : ""} × {i.quantity}</span>
                      <span className="tabular-nums text-ink-300">{formatTtd(i.priceTtd * i.quantity)}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Field({
  label, type = "text", value, onChange,
}: { label: string; type?: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-ink-300">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
      />
    </label>
  );
}
