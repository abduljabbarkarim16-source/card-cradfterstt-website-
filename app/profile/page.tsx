import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProfileClient } from "./ProfileClient";

export const metadata: Metadata = {
  title: "My Account",
  description: "Your Card Crafters profile, preferences, and order history.",
};

export default function ProfilePage() {
  return (
    <Container className="py-14">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">My Account</p>
        <h1 className="display text-3xl font-semibold sm:text-4xl">Your Card Crafters profile.</h1>
        <p className="mt-2 text-ink-200">
          Your preferences are stored locally on this device for now — we'll roll out full accounts shortly.
        </p>
      </header>
      <ProfileClient />
    </Container>
  );
}
