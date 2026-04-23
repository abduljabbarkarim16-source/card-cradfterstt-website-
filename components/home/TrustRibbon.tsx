import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

type TrustRibbonItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const trustRibbonItems: TrustRibbonItem[] = [
  {
    title: "Fast Service",
    description: "Most orders handled in minutes",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Secure Ordering",
    description: "Clear pricing, trusted checkout",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    title: "Wide Variety",
    description: "Streaming, cards, bills & more",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Local Support",
    description: "Real Trinidad & Tobago team",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
];

function TrustRibbonCard({ title, description, icon }: TrustRibbonItem) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent-soft">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-ink-300">{description}</p>
      </div>
    </div>
  );
}

export function TrustRibbon() {
  return (
    <section className="trust-ribbon section-band -mt-px">
      <Container className="grid max-w-7xl grid-cols-1 divide-y divide-white/5 px-0 py-3 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:py-4 md:grid-cols-4">
        {trustRibbonItems.map((item) => (
          <TrustRibbonCard key={item.title} {...item} />
        ))}
      </Container>
    </section>
  );
}
