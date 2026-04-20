import Link from "next/link";
import type { CategoryMeta } from "@/lib/products/types";
import { Section } from "@/components/ui/Section";

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

export function CategoriesBand({ categories }: { categories: CategoryMeta[] }) {
  return (
    <Section
      eyebrow="Four focused lanes"
      title="Everything in one place — nothing fluffy."
      lead="Card Crafters is four distinct services, each kept tight. Pick a lane and get on with your day."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/services/${c.slug}`}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-glow"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft/20 to-accent/10 text-accent-soft">
                {icons[c.slug]}
              </span>
              <div>
                <h3 className="display text-lg font-semibold text-ink-50">{c.name}</h3>
                <p className="mt-1 text-xs text-ink-300">{c.tagline}</p>
              </div>
              <p className="mt-auto text-xs text-accent-soft group-hover:text-accent">
                Open {c.name} →
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
