import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "Transparent by default",
    body: "Landed cost, FX rate and fees shown before you confirm. No padded invoices, no surprise line items.",
  },
  {
    title: "Local-first support",
    body: "WhatsApp and phone support from Trinidad — real humans who know your bank and your cable provider.",
  },
  {
    title: "Faster digital delivery",
    body: "Gift-card codes sent once payment clears. Streaming access typically within the same business day.",
  },
  {
    title: "One cart, mixed services",
    body: "Buy a Netflix subscription, an Amazon gift card and pay your internet bill in the same order.",
  },
];

export function WhyCardCrafters() {
  return (
    <section id="why" className="deferred-section py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="lg:pr-6">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-accent">Why Card Crafters</p>
            <p className="display text-3xl font-semibold leading-[1.15] text-ink-50 sm:text-[34px]">
              <span className="text-ink-50">Built in Trinidad. Tested by people who actually need a Steam card on a Sunday.</span>
            </p>
            <div className="mt-8 space-y-3 text-sm text-ink-200">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cool" />
                Operating hours: Mon–Sat, 9am–9pm AST
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cool" />
                WhatsApp support: +1 (868) 465-1282
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cool" />
                Settled in TTD — no surprise FX line items
              </p>
            </div>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10">
            {features.map((f, i) => (
              <li
                key={f.title}
                className={`relative pl-5 sm:pl-6 ${i % 2 === 1 ? "sm:mt-10" : ""}`}
              >
                <span aria-hidden className="absolute left-0 top-1.5 h-6 w-px bg-accent-soft/60" />
                <h3 className="display text-base font-semibold text-ink-50">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-200">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
