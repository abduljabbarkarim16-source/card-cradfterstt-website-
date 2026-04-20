import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "Transparent by default",
    body: "Landed cost, FX rate and fees are shown before you confirm. No padded invoices, no surprise line items.",
  },
  {
    title: "Local-first support",
    body: "WhatsApp and phone support from Trinidad — real humans who understand your bank and your cable provider.",
  },
  {
    title: "Faster digital delivery",
    body: "Gift-card codes are sent once payment clears. Streaming access typically within the same business day.",
  },
  {
    title: "One cart, mixed services",
    body: "Buy a Netflix subscription, an Amazon gift card and pay your internet bill in the same order.",
  },
];

const factCards = [
  { k: "4", v: "Core service lanes" },
  { k: "1", v: "Unified cart & checkout" },
  { k: "TTD", v: "Pricing in your currency" },
  { k: "T&T", v: "Trinidad-based operations" },
];

export function WhyCardCrafters() {
  return (
    <Section
      id="why"
      eyebrow="Why Card Crafters"
      title="Built for repeat customers, not first-time tourists."
      lead="This isn't a reseller dashboard bolted onto Trinidad. The whole site is shaped around how people actually use it — streaming plus bills plus shopping, in one calm flow."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="display text-base font-semibold text-ink-50">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{f.body}</p>
            </li>
          ))}
        </ul>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 to-transparent p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">At a glance</p>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            {factCards.map((c) => (
              <li key={c.v} className="rounded-2xl border border-white/10 bg-ink-900/50 p-4">
                <p className="display text-2xl font-semibold text-ink-50">{c.k}</p>
                <p className="mt-1 text-xs text-ink-300">{c.v}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-300">
            Factual descriptors — we don’t publish customer testimonials or invented statistics.
          </p>
        </div>
      </div>
    </Section>
  );
}
