import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Card Crafters Limited collects, uses and protects your data.",
};

export default function PrivacyPage() {
  return (
    <Section eyebrow="Legal" title="Privacy Policy">
      <div className="prose prose-invert max-w-3xl text-ink-200">
        <p className="text-sm text-ink-300">
          Effective date: {new Date().getFullYear()}. Operated by Card Crafters Limited, Trinidad &amp; Tobago.
        </p>

        <h2 className="display mt-10 text-xl font-semibold text-ink-50">What we collect</h2>
        <p className="mt-3 text-sm leading-relaxed">
          We collect only the information required to fulfil your orders and provide support: name, email,
          phone number, delivery address where applicable, and order-specific details such as account numbers
          for bill payments or shipping links for personal-shopping requests. Payment proof (bank transfer
          screenshots, transaction IDs) is kept for reconciliation only.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">How we use your data</h2>
        <ul className="mt-3 list-disc pl-6 text-sm leading-relaxed marker:text-accent-soft">
          <li>To process and fulfil your orders.</li>
          <li>To contact you about order status, issues, or changes you've requested.</li>
          <li>To keep financial records required by Trinidadian law and our banking partners.</li>
          <li>To improve the service (aggregate, non-identifying usage patterns only).</li>
        </ul>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">Sharing</h2>
        <p className="mt-3 text-sm leading-relaxed">
          We do not sell your data. We share it only with the specific third parties needed to complete an
          order — e.g. the utility provider when paying your bill, or the shipper handling a personal-shopping
          item. Card Crafters never passes your contact details to marketing partners.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">Retention</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Order records are retained for the period required by Trinidadian tax and financial regulations.
          Beyond that window, records are archived or deleted.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">Your rights</h2>
        <p className="mt-3 text-sm leading-relaxed">
          You can request a copy of the personal data we hold about you, ask us to correct it, or request
          deletion where we're not required to retain it. Email{" "}
          <a href="mailto:support@cardcrafterstt.com" className="text-accent-soft underline-offset-4 hover:underline">
            support@cardcrafterstt.com
          </a>.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">Contact</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Questions about this policy go to{" "}
          <a href="mailto:support@cardcrafterstt.com" className="text-accent-soft underline-offset-4 hover:underline">
            support@cardcrafterstt.com
          </a>
          {" "}or +1 (868) 465-1282.
        </p>
      </div>
    </Section>
  );
}
