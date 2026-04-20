import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CheckoutClient } from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Review your Card Crafters order and submit payment details.",
};

export default function CheckoutPage() {
  return (
    <Container className="py-14">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">Checkout</p>
        <h1 className="display text-3xl font-semibold sm:text-4xl">Review &amp; submit.</h1>
        <p className="mt-2 text-ink-200">
          Confirm your items, pay via your preferred method, then send us proof of payment. We fulfil as
          soon as the transfer clears.
        </p>
      </header>
      <CheckoutClient />
    </Container>
  );
}
