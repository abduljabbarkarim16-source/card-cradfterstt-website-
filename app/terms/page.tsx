import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Card Crafters Limited — Trinidad & Tobago.",
};

export default function TermsPage() {
  return (
    <Section eyebrow="Legal" title="Terms of Service">
      <div className="prose prose-invert max-w-3xl text-ink-200">
        <p className="text-sm text-ink-300">
          Effective date: {new Date().getFullYear()}. These terms govern your use of cardcrafterstt.com and
          any services provided by Card Crafters Limited ("Card Crafters", "we", "us"), registered in
          Trinidad &amp; Tobago.
        </p>

        <h2 className="display mt-10 text-xl font-semibold text-ink-50">1. Services</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Card Crafters offers streaming subscriptions (Controlled and Gift Card Account variants),
          digital gift cards, bill-payment facilitation, and personal-shopping services. Specific terms for
          Controlled subscriptions — including the mandatory CAPS continuity balance — are presented at the
          point of purchase and form part of these terms once you place the order.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">2. Orders and payment</h2>
        <p className="mt-3 text-sm leading-relaxed">
          All prices are quoted in Trinidad &amp; Tobago Dollars (TTD). Payment is due before fulfilment.
          We accept bank transfer, EndCash, Quick Pay, VISA and MasterCard. Orders are not considered
          confirmed until payment has cleared and we send written confirmation.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">3. Refunds</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Digital products (gift-card codes, streaming access) are non-refundable once delivered. Bill
          payments are non-refundable once settled with the provider. Personal-shopping orders are refundable
          before the supplier ships; once shipped, the supplier's return policy applies.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">4. Customer responsibilities</h2>
        <p className="mt-3 text-sm leading-relaxed">
          You are responsible for the accuracy of account numbers, shipping addresses, and other order
          details you provide. Card Crafters is not liable for fulfilment errors caused by incorrect
          information.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">5. Service usage rules</h2>
        <p className="mt-3 text-sm leading-relaxed">
          For Controlled subscriptions, access is provided under defined usage rules — including device and
          location limits set by the underlying platform. Violating those rules may result in loss of access
          without refund.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">6. Limitation of liability</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Card Crafters' total liability for any claim arising from our services is limited to the amount
          paid for the specific order giving rise to the claim. We are not liable for indirect or
          consequential losses.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">7. Governing law</h2>
        <p className="mt-3 text-sm leading-relaxed">
          These terms are governed by the laws of the Republic of Trinidad &amp; Tobago. Any dispute falls
          under the exclusive jurisdiction of the courts of Trinidad &amp; Tobago.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">8. Changes</h2>
        <p className="mt-3 text-sm leading-relaxed">
          We may update these terms from time to time. The current version is always published on this page.
          Material changes will be communicated to active customers by email.
        </p>

        <h2 className="display mt-8 text-xl font-semibold text-ink-50">Contact</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Card Crafters Limited · Trinidad &amp; Tobago ·{" "}
          <a href="mailto:support@cardcrafterstt.com" className="text-accent-soft underline-offset-4 hover:underline">
            support@cardcrafterstt.com
          </a>
          {" "}· +1 (868) 465-1282.
        </p>
      </div>
    </Section>
  );
}
