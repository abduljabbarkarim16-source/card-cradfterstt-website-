import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CartMockup } from "./CartMockup";
import { LogoMarquee } from "./LogoMarquee";

const marqueeLogos = [
  { src: "/products/netflix-premium.png", alt: "Netflix" },
  { src: "/products/disney-plus.png", alt: "Disney+" },
  { src: "/products/prime-video.png", alt: "Prime Video" },
  { src: "/products/spotify.png", alt: "Spotify" },
  { src: "/products/hbo-non-shared.png", alt: "HBO" },
  { src: "/products/crunchyroll-shared.png", alt: "Crunchyroll" },
  { src: "/products/amazon.png", alt: "Amazon" },
  { src: "/products/steam.png", alt: "Steam" },
  { src: "/products/playstation.png", alt: "PlayStation" },
  { src: "/products/xbox.png", alt: "Xbox" },
  { src: "/products/google-play.png", alt: "Google Play" },
  { src: "/products/itunes.png", alt: "Apple" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-10">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute right-[-20%] top-[10%] h-[700px] w-[900px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-30%] h-[500px] w-[700px] rounded-full bg-accent-cool/[0.04] blur-[120px]" />
      </div>
      <div aria-hidden className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

      <Container className="grid gap-16 pt-20 sm:pt-28 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10">
        <div className="max-w-xl animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
            Trinidad &amp; Tobago · Digital services
          </span>
          <h1 className="display mt-7 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]">
            Streaming, gift cards
            <br />
            &amp; bills{" "}
            <span className="relative inline-block">
              sorted.
              <span aria-hidden className="absolute inset-x-0 -bottom-1.5 h-2 -skew-x-6 bg-accent/40" />
            </span>
          </h1>
          <p className="mt-7 max-w-md text-base text-ink-200 leading-relaxed">
            One calm, fast place to grab a Netflix subscription, a Steam gift card, or pay your T&amp;TEC bill — all from Trinidad.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-6 py-3.5 text-sm font-semibold text-ink-900 transition hover:brightness-110 hover:shadow-glow"
            >
              Browse services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-ink-200 underline-offset-4 transition hover:text-accent-cool hover:underline"
            >
              Or text us on WhatsApp →
            </Link>
          </div>
        </div>

        <div className="relative flex animate-fadeUp justify-center [animation-delay:160ms] lg:justify-end">
          <CartMockup />
        </div>
      </Container>

      <div className="mt-20 sm:mt-28">
        <p className="mb-5 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-ink-300">
          Brands &amp; services we cover
        </p>
        <LogoMarquee logos={marqueeLogos} />
      </div>
    </section>
  );
}
