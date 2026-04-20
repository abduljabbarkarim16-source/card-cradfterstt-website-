import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Card Crafters support — WhatsApp, email, or phone. Based in Trinidad & Tobago.",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Talk to a real person in Trinidad."
      lead="Fastest reply is WhatsApp. We aim to respond within a few hours during business hours."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <Card title="WhatsApp / Phone" value="+1 (868) 465-1282" href="tel:+18684651282" />
          <Card title="Email" value="support@cardcrafterstt.com" href="mailto:support@cardcrafterstt.com" />
          <Card title="Hours" value="Mon–Sat · 9:00–19:00 AST" />
          <Card title="Location" value="Trinidad & Tobago" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="display text-lg font-semibold">Prefer a form?</h2>
          <p className="mt-1 text-sm text-ink-200">We'll route it to the right person.</p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function Card({ title, value, href }: { title: string; value: string; href?: string }) {
  const body = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</p>
      <p className="mt-1 text-lg text-ink-50">{value}</p>
    </>
  );
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
      {href ? <a href={href} className="block transition hover:text-accent-soft">{body}</a> : body}
    </div>
  );
}
