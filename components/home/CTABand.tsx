import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTABand() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent/15 via-ink-900 to-ink-900 p-10 sm:p-14">
          <div aria-hidden className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h2 className="display text-3xl font-semibold sm:text-4xl">
                Ready when you are.
              </h2>
              <p className="mt-3 max-w-xl text-ink-200 leading-relaxed">
                Start with a streaming subscription, a gift card, or drop us a link to something you need shipped in. Whatever it is — we take care of it.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 hover:brightness-110 hover:shadow-glow"
              >
                Start an order
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-ink-50 hover:bg-white/10"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
