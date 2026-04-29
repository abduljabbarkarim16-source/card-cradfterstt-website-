import { Container } from "@/components/ui/Container";

const steps = [
  {
    n: "01",
    title: "Choose A Service",
    body: "Choose the service you want, whether it is streaming, gift cards, bills, or shopping help.",
  },
  {
    n: "02",
    title: "Review The Options",
    body: "Pick the option that fits you and review the details before moving ahead.",
  },
  {
    n: "03",
    title: "Checkout Or Contact",
    body: "Checkout when you are ready, or message us if you want help before you place your order.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="deferred-section py-16 sm:py-20">
      <Container>
        <div
          className="relative overflow-hidden rounded-[2rem] border border-accent/25 bg-ink-900 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 82% 18%, rgba(234, 179, 8, 0.08), transparent 28%), linear-gradient(110deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01) 42%, rgba(0, 0, 0, 0.16)), linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 64px 64px, 64px 64px",
          }}
        >
          <div aria-hidden className="absolute -right-28 -top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              How it works
            </p>
            <h2 className="display text-3xl font-semibold text-ink-50 sm:text-4xl">
              How it works.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200">
              Ordering should feel easy from the very first click.
            </p>

            <ol className="mt-9 grid gap-5 lg:grid-cols-3">
              {steps.map((step) => (
                <li
                  key={step.n}
                  className="rounded-[1.65rem] border border-white/10 bg-black/45 p-6 shadow-panel sm:p-7"
                >
                  <span className="display inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/10 text-sm font-semibold text-accent">
                    {step.n}
                  </span>
                  <h3 className="display mt-6 text-xl font-semibold text-ink-50">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-200">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
