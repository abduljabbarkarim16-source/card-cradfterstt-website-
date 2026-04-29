import Link from "next/link";
import type { CSSProperties } from "react";
import type { CategoryMeta } from "@/lib/products/types";
import { Container } from "@/components/ui/Container";

type LaneStyle = CSSProperties & {
  "--lane"?: string;
  "--lane-soft"?: string;
};

type CategoryCard = {
  slug: CategoryMeta["slug"];
  title: string;
  body: string;
  tags: [string, string, string, string];
  cta: string;
  accent: string;
  soft: string;
};

const categoryCards: CategoryCard[] = [
  {
    slug: "streaming",
    title: "Streaming Services",
    body: "Get access to the streaming platforms you use most without the usual hassle.",
    tags: ["Netflix", "Disney+", "Prime", "Max"],
    cta: "Go to Services",
    accent: "rgba(248, 113, 113, 0.52)",
    soft: "rgba(248, 113, 113, 0.12)",
  },
  {
    slug: "gift-cards",
    title: "Gift Cards",
    body: "Buy top-up and gift cards for gaming, entertainment, and shopping in minutes.",
    tags: ["PlayStation", "Xbox", "Amazon", "Steam"],
    cta: "Browse Cards",
    accent: "rgba(234, 179, 8, 0.48)",
    soft: "rgba(234, 179, 8, 0.12)",
  },
  {
    slug: "bills",
    title: "Bill Payments",
    body: "Pay selected bills quickly with a simple request and local payment options.",
    tags: ["Fast", "Local", "Simple", "Receipts"],
    cta: "View Payments",
    accent: "rgba(59, 130, 246, 0.6)",
    soft: "rgba(59, 130, 246, 0.15)",
  },
  {
    slug: "shopping",
    title: "Shopping & Sourcing",
    body: "Send your shopping request and get help with pricing, ordering, and delivery details.",
    tags: ["Shein", "Temu", "Razer", "Amazon"],
    cta: "Start Request",
    accent: "rgba(16, 185, 129, 0.5)",
    soft: "rgba(16, 185, 129, 0.13)",
  },
];

function OverlapIcon({ card }: { card: CategoryCard }) {
  if (card.slug === "streaming") {
    return (
      <div className="relative h-16 w-32 shrink-0" aria-hidden>
        <span className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-red-300/25 bg-red-500/10 text-red-200 shadow-[0_10px_22px_rgba(0,0,0,0.32)]">
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M9 20h6M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
        <span className="absolute left-9 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white opacity-100 shadow-[0_10px_26px_rgba(239,68,68,0.44)]">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 7.2v9.6L16.6 12 9 7.2Z" />
          </svg>
        </span>
        <span className="absolute left-20 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-red-300/25 bg-red-500/10 text-red-100 shadow-[0_10px_22px_rgba(0,0,0,0.32)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 12a7 7 0 0 1 14 0v4.5A2.5 2.5 0 0 1 16.5 19H16v-6h3M8 19h-.5A2.5 2.5 0 0 1 5 16.5V13h3v6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    );
  }

  if (card.slug === "gift-cards") {
    return (
      <div className="relative h-16 w-32 shrink-0" aria-hidden>
        <span className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-300/25 bg-yellow-400/10 text-yellow-200 shadow-[0_10px_22px_rgba(0,0,0,0.32)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 8h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" />
            <path d="M4 12h16M8 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
        <span className="absolute left-9 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-ink-900 opacity-100 shadow-[0_10px_26px_rgba(234,179,8,0.42)]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="8" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M4 12h16M12 8v11M8 8c-1.2-1.4-.5-3 1.1-3 1.9 0 2.9 3 2.9 3s1-3 2.9-3c1.6 0 2.3 1.6 1.1 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="absolute left-20 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-300/25 bg-yellow-400/10 text-yellow-100 shadow-[0_10px_22px_rgba(0,0,0,0.32)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M8 10h8M7 14h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M5 7h14v10H5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    );
  }

  if (card.slug === "bills") {
    return (
      <div className="relative h-16 w-32 shrink-0" aria-hidden>
        <span className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/20 bg-sky-500/15 text-sky-200 shadow-[0_10px_22px_rgba(0,0,0,0.3)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M8 7h9M7 11h8M8 15h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5.5 5.5 4 7l1.5 1.5M18.5 15.5 20 17l-1.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="absolute left-9 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white opacity-100 shadow-[0_10px_26px_rgba(37,99,235,0.46)]">
          <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8 11h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
        <span className="absolute left-20 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/20 bg-sky-500/15 text-yellow-300 shadow-[0_10px_22px_rgba(0,0,0,0.3)]">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.4 2.8 5.8 13h5l-.9 8.2 7.7-10.6h-5.1l.9-7.8Z" />
          </svg>
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-16 w-32 shrink-0" aria-hidden>
      <span className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-500/10 text-emerald-200 shadow-[0_10px_22px_rgba(0,0,0,0.32)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 8h12l-1 10H7L6 8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <span className="absolute left-9 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white opacity-100 shadow-[0_10px_26px_rgba(16,185,129,0.42)]">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M5 8h2l1.3 7.5a2 2 0 0 0 2 1.7h5.9a2 2 0 0 0 1.9-1.4L20 10H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20h.01M17 20h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="absolute left-20 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-500/10 text-emerald-100 shadow-[0_10px_22px_rgba(0,0,0,0.32)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 14h11v5H4v-5ZM15 16h2.5l2-3H22v6h-7v-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M7 19h.01M18 19h.01M6 11h7M8 7h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}

function CardArt({ slug }: { slug: CategoryMeta["slug"] }) {
  if (slug === "streaming") {
    return (
      <svg className="pointer-events-none absolute -bottom-6 -right-8 h-32 w-44 text-[var(--lane)] opacity-50" viewBox="0 0 176 128" fill="none" aria-hidden>
        <rect x="20" y="34" width="132" height="76" rx="8" stroke="currentColor" strokeWidth="3" opacity="0.32" />
        <path d="m78 58 31 19-31 19V58Z" stroke="currentColor" strokeWidth="3" opacity="0.28" />
        <path d="M56 116h28M102 116h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.22" />
      </svg>
    );
  }

  if (slug === "gift-cards") {
    return (
      <svg className="pointer-events-none absolute -bottom-6 -right-8 h-32 w-44 text-[var(--lane)] opacity-50" viewBox="0 0 176 128" fill="none" aria-hidden>
        <rect x="36" y="54" width="118" height="58" rx="8" stroke="currentColor" strokeWidth="3" opacity="0.32" />
        <path d="M36 80h118M95 54v58" stroke="currentColor" strokeWidth="3" opacity="0.24" />
        <path d="M94 54c-14 0-24-6-24-14 0-6 5-10 11-10 9 0 13 11 13 24ZM96 54c14 0 24-6 24-14 0-6-5-10-11-10-9 0-13 11-13 24Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />
        <path d="M62 102h24M98 102h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
      </svg>
    );
  }

  if (slug === "bills") {
    return (
      <svg className="pointer-events-none absolute -bottom-8 -right-9 h-36 w-44 text-[var(--lane)] opacity-50" viewBox="0 0 176 144" fill="none" aria-hidden>
        <path d="M52 24h74l22 22v94H52V24Z" stroke="currentColor" strokeWidth="3" opacity="0.3" />
        <path d="M126 24v22h22" stroke="currentColor" strokeWidth="3" opacity="0.3" />
        <path d="M74 76h54M74 94h52M74 112h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.22" />
      </svg>
    );
  }

  return (
    <svg className="pointer-events-none absolute -bottom-8 -right-9 h-36 w-44 text-[var(--lane)] opacity-50" viewBox="0 0 176 144" fill="none" aria-hidden>
      <path d="M42 64h100l-12 68H54L42 64Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" opacity="0.3" />
      <path d="M72 64c0-21 32-21 32 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function CategoriesBand({ categories }: { categories: CategoryMeta[] }) {
  const availableSlugs = new Set(categories.map((category) => category.slug));
  const cards = categoryCards.filter((card) => availableSlugs.has(card.slug));

  return (
    <section className="section-band deferred-section border-y border-accent/10 bg-[radial-gradient(46rem_22rem_at_8%_12%,rgba(234,179,8,0.08),transparent_58%),radial-gradient(40rem_26rem_at_92%_48%,rgba(234,179,8,0.07),transparent_62%),linear-gradient(180deg,#050505_0%,#080808_52%,#050505_100%)] py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-soft">
            Service categories
          </p>
          <h2 className="display mx-auto max-w-2xl text-3xl font-semibold leading-tight text-ink-50 sm:text-4xl">
            Pick what you need and get started.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink-200 sm:text-base">
            From entertainment to everyday payments, everything starts here.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const style: LaneStyle = {
              "--lane": card.accent,
              "--lane-soft": card.soft,
            };

            return (
              <Link
                key={card.slug}
                href={`/services/${card.slug}`}
                className="group relative mx-auto flex h-full min-h-[21.75rem] w-full max-w-[24rem] flex-col items-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(18rem_14rem_at_102%_102%,var(--lane-soft),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.014))] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-glow md:max-w-none sm:p-6"
                style={style}
              >
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <CardArt slug={card.slug} />

                <div className="relative z-10 flex flex-1 flex-col items-center">
                  <OverlapIcon card={card} />
                  <h3 className="display mt-5 max-w-full whitespace-nowrap text-xl font-semibold leading-tight text-ink-50">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 max-w-[14.5rem] text-sm leading-5 text-ink-300">
                    {card.body}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex w-full flex-col items-center pt-6">
                  <ul className="grid w-full grid-cols-2 gap-2">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex min-h-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-center text-[10px] leading-tight text-ink-200"
                      >
                        <span className="break-words">{tag}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex h-9 items-center gap-2 rounded-full bg-accent-soft px-4 text-xs font-semibold text-ink-900 shadow-[0_16px_30px_-20px_rgba(250,204,21,0.75)] transition group-hover:bg-[#ffd84d]">
                    {card.cta}
                    <span aria-hidden>&rarr;</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
