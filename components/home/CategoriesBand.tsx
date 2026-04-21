import Link from "next/link";
import Image from "next/image";
import type { CategoryMeta } from "@/lib/products/types";
import { Container } from "@/components/ui/Container";

const icons: Record<string, React.ReactNode> = {
  streaming: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  "gift-cards": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 11h18M12 7v13M8 7c0-1.5 1.2-3 3-3s3 1 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  bills: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 3h10l4 4v14l-3-2-2 2-2-2-2 2-2-2-3 2V3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  shopping: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 7h14l-1.5 10a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 7zm3 0a4 4 0 1 1 8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const streamingPreviewLogos = [
  { src: "/products/netflix-premium.png", alt: "Netflix" },
  { src: "/products/disney-plus.png", alt: "Disney+" },
  { src: "/products/spotify.png", alt: "Spotify" },
  { src: "/products/hbo-non-shared.png", alt: "HBO" },
];

export function CategoriesBand({ categories }: { categories: CategoryMeta[] }) {
  const lead = categories.find((c) => c.slug === "streaming");
  const rest = categories.filter((c) => c.slug !== "streaming");

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Four lanes, one cart</p>
            <h2 className="display text-2xl font-semibold leading-tight sm:text-3xl">
              Pick the lane you need. Add to one cart. Done.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-ink-200 underline-offset-4 transition hover:text-accent-cool hover:underline"
          >
            See all services →
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {lead && (
            <Link
              href={`/services/${lead.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 via-ink-800/40 to-transparent p-7 transition hover:border-accent/40 hover:shadow-glow lg:col-span-2 lg:row-span-2 lg:p-10"
            >
              <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft/30 to-accent/10 text-accent-soft">
                  {icons[lead.slug]}
                </span>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Most popular</p>
                <h3 className="display mt-2 text-3xl font-semibold leading-tight text-ink-50 sm:text-4xl">
                  {lead.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-200">{lead.description}</p>
              </div>

              <div className="relative mt-10 flex items-end justify-between gap-6">
                <ul className="flex items-center gap-3">
                  {streamingPreviewLogos.map((logo) => (
                    <li
                      key={logo.alt}
                      className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-ink-900/70"
                    >
                      <Image src={logo.src} alt={logo.alt} fill sizes="40px" className="object-contain p-1.5" />
                    </li>
                  ))}
                  <li className="flex h-10 items-center px-2 text-xs text-ink-300">+ more</li>
                </ul>
                <span className="text-sm font-medium text-accent-soft transition group-hover:text-accent">
                  Open Streaming →
                </span>
              </div>
            </Link>
          )}

          {rest.map((c) => (
            <Link
              key={c.slug}
              href={`/services/${c.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.025] p-6 transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05]"
            >
              <div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-accent-cool">
                  {icons[c.slug]}
                </span>
                <h3 className="display mt-5 text-lg font-semibold text-ink-50">{c.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-300">{c.tagline}</p>
              </div>
              <p className="mt-6 text-xs font-medium text-accent-cool/80 transition group-hover:text-accent-cool">
                Open {c.name} →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
