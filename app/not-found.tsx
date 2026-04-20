import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="display mt-3 text-4xl font-semibold">Page not found.</h1>
      <p className="mx-auto mt-3 max-w-md text-ink-200">
        The link you followed may have been updated. Try the homepage or the full services catalog.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-ink-50 hover:bg-white/10">Home</Link>
        <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow">Browse services</Link>
      </div>
    </Container>
  );
}
