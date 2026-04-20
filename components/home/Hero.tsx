import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const tiles = [
  { src: "/products/netflix-premium.png", label: "Netflix" },
  { src: "/products/disney-plus.png", label: "Disney+" },
  { src: "/products/prime-video.png", label: "Prime" },
  { src: "/products/spotify.png", label: "Spotify" },
  { src: "/products/hbo-non-shared.png", label: "HBO" },
  { src: "/products/crunchyroll-shared.png", label: "Crunchyroll" },
  { src: "/products/amazon.png", label: "Amazon" },
  { src: "/products/steam.png", label: "Steam" },
  { src: "/products/playstation.png", label: "PlayStation" },
  { src: "/products/xbox.png", label: "Xbox" },
  { src: "/products/google-play.png", label: "Google Play" },
  { src: "/products/itunes.png", label: "Apple" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="max-w-xl animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
            Trinidad &amp; Tobago · Digital services
          </span>
          <h1 className="display mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Streaming, gift cards &amp;{" "}
            <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
              bills — sorted.
            </span>
          </h1>
          <p className="mt-5 text-lg text-ink-200 leading-relaxed">
            One calm, fast place to grab a Netflix subscription, a Steam gift card, pay your T&amp;TEC bill,
            or get us to buy something from abroad and land it at your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-6 py-3 text-sm font-semibold text-ink-900 transition hover:brightness-110 hover:shadow-glow"
            >
              Browse services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink-50 hover:bg-white/10"
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:120ms]">
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 blur-2xl" />
          <ul className="relative grid grid-cols-3 gap-3 sm:grid-cols-4">
            {tiles.map((t, i) => (
              <li
                key={t.label}
                style={{ animationDelay: `${i * 60}ms` }}
                className="group relative aspect-square animate-fadeUp overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.06]"
              >
                <Image
                  src={t.src}
                  alt={t.label}
                  fill
                  sizes="120px"
                  className="object-contain p-3 transition duration-500 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-x-0 bottom-0 pointer-events-none bg-gradient-to-t from-ink-900/80 to-transparent p-2 text-[10px] font-medium text-ink-200 opacity-0 transition-opacity group-hover:opacity-100">
                  {t.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
