import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Card Crafters streaming, gift cards, bill payments and personal shopping.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "How quickly are orders fulfilled?",
    a: "Gift-card codes and streaming access are typically delivered the same business day your payment clears. Personal-shopping orders and bill payments follow the provider/shipper's own timing; we confirm expected turnaround once the order is placed.",
  },
  {
    q: "What does 'Controlled' mean for streaming subscriptions?",
    a: "A Controlled subscription is one where Card Crafters owns billing and renewal on our side. You get access; we handle continuity. It requires a mandatory CAPS (continuity) balance equal to one billing cycle, collected upfront.",
  },
  {
    q: "What's the difference between Controlled and Gift Card Account?",
    a: "Controlled = we manage the account end-to-end. Gift Card Account = you own the account, we fund it with a USD gift card. Gift Card Accounts give you full control; Controlled gives you zero admin overhead.",
  },
  {
    q: "Why is your USD→TTD rate higher than the bank's?",
    a: "Our customer rate includes the bank spread, processing fees, and the risk of accepting local currency for foreign purchases. The rate is published before you confirm and doesn't change mid-order.",
  },
  {
    q: "Can I mix services in one order?",
    a: "Yes — streaming, gift cards and bill payments all sit in the same cart. Check out once and we fulfil each line item.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Bank transfer (First Citizens), EndCash, Quick Pay, VISA and MasterCard. Bank transfer has the fastest confirmation.",
  },
  {
    q: "What about refunds?",
    a: "Digital products (gift-card codes, streaming access) are non-refundable once delivered. Bill payments are non-refundable once settled with the provider. Shopping orders are refundable before the supplier ships; after that, standard return windows apply.",
  },
  {
    q: "How is my data handled?",
    a: "Only what's needed to fulfil your order. See our privacy page for specifics.",
  },
];

export default function FAQPage() {
  return (
    <Section eyebrow="FAQ" title="The usual questions, answered once.">
      <ul className="grid gap-3">
        {faqs.map((f, i) => (
          <li key={i}>
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 open:border-accent/30 open:bg-white/[0.04]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="display text-base font-semibold text-ink-50">{f.q}</span>
                <span
                  aria-hidden
                  className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-soft transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-200">{f.a}</p>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
