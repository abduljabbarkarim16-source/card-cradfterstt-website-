import { Section } from "@/components/ui/Section";

const steps = [
  {
    n: "01",
    title: "Choose a service",
    body: "Open Services, pick a lane (streaming, gift cards, bills, shopping) and add what you need.",
  },
  {
    n: "02",
    title: "Review your cart",
    body: "See each item, its fee, and the subtotal in TTD. Mix services freely — one cart handles everything.",
  },
  {
    n: "03",
    title: "Confirm & pay",
    body: "Submit your order with a bank transfer, EndCash, or Quick Pay. We confirm, fulfil, and keep you in the loop.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="Three steps. No hidden ones."
    >
      <ol className="grid gap-5 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <span className="display text-xs font-semibold text-accent">{s.n}</span>
            <h3 className="display mt-3 text-lg font-semibold text-ink-50">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-200">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
