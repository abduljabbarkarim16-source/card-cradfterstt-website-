import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description: "Card Crafters is a Trinidad & Tobago digital-service company offering streaming, gift cards, bill payments and personal shopping.",
};

const pillars = [
  {
    title: "Local, by design",
    body: "We're based in Trinidad & Tobago, built for Trinidad & Tobago. That means TTD pricing, local payment methods, and support hours that match yours.",
  },
  {
    title: "Transparent pricing",
    body: "Every line item — FX rate, duty, VAT, handling — is shown before you confirm. No padded invoices.",
  },
  {
    title: "One unified cart",
    body: "Streaming, gift cards and bills live in the same cart. Pay once; we handle the rest across providers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A calm corner of the internet for digital essentials in T&T."
        lead="Card Crafters Limited exists because buying a Netflix subscription, paying an internet bill, and ordering an Amazon gift card shouldn’t require three apps, three receipts, and three headaches."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h2 className="display text-lg font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-200">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What we do"
        title="Four focused service lanes."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Streaming", "Managed subscriptions (Netflix, Disney+, HBO, Apple TV+, Prime, Spotify and more), plus customer-owned Gift Card Accounts."],
            ["Gift Cards", "Digital codes for Amazon, Steam, Google Play, iTunes, Xbox, PlayStation and more. Delivered electronically once payment clears."],
            ["Bill Payments", "We settle your internet, cable and utility bills with the provider on your behalf. Receipts supplied."],
            ["Personal Shopping", "You send the link or description — we buy, receive, and land the item. Clear landed cost quoted upfront."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="display text-base font-semibold text-ink-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 to-transparent p-10 text-center">
          <h2 className="display text-2xl font-semibold sm:text-3xl">Questions about how we operate?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-200">
            Have a read through our FAQ, or drop us a line directly — WhatsApp, email, or phone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/faq" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-ink-50 hover:bg-white/10">Read the FAQ</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow">Contact us</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
