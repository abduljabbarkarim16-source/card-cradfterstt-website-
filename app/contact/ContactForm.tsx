"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `From: ${form.name} <${form.email}>\nSubject: ${form.subject}\n\n${form.message}`;
    window.location.href = `mailto:support@cardcrafterstt.com?subject=${encodeURIComponent(form.subject || "Card Crafters enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-5 text-sm text-ink-200">
        Your mail client should open with the message drafted. If it doesn't, email us at{" "}
        <a href="mailto:support@cardcrafterstt.com" className="text-accent-soft underline-offset-4 hover:underline">
          support@cardcrafterstt.com
        </a>.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-4 grid gap-4">
      <Field label="Your name" value={form.name} onChange={(name) => setForm({ ...form, name })} required />
      <Field label="Email" type="email" value={form.email} onChange={(email) => setForm({ ...form, email })} required />
      <Field label="Subject" value={form.subject} onChange={(subject) => setForm({ ...form, subject })} />
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-ink-300">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow"
      >
        Send
      </button>
    </form>
  );
}

function Field({
  label, type = "text", value, onChange, required,
}: { label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-ink-300">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 text-sm text-ink-50 focus:border-accent focus:outline-none"
      />
    </label>
  );
}
