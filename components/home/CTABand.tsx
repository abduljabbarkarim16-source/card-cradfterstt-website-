import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTABand() {
  return (
    <section className="deferred-section py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.35rem] border border-accent/20 bg-[linear-gradient(102deg,#080808_0%,#0a0a0a_55%,#171306_100%)] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_24px_72px_-52px_rgba(0,0,0,0.95)] sm:px-8 sm:py-9 lg:px-8 lg:py-8">
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(34rem_14rem_at_92%_42%,rgba(234,179,8,0.12),transparent_68%)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="text-center lg:text-left">
              <p className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
                Ready to start
              </p>
              <h2 className="display mt-5 text-3xl font-semibold tracking-[-0.04em] text-ink-50 sm:text-4xl">
                Ready to order or send a custom request?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-200 lg:mx-0">
                Browse available services now, or contact us if you want help with something specific.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-soft to-accent px-5 py-3 text-sm font-semibold text-ink-900 shadow-[0_18px_38px_-22px_rgba(250,204,21,0.8)] transition hover:brightness-110"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-ink-50 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-ink-50 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
