import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";

type HeroBrand = {
  name: string;
  category: string;
  image: string;
  accent: string;
};

type HeroRow = {
  id: string;
  brands: HeroBrand[];
  duration: string;
  direction: "left" | "right";
  tone: "near" | "mid" | "far";
};

const heroBrands: HeroBrand[] = [
  { name: "Netflix", category: "Streaming", image: "/products/netflix-premium.png", accent: "#e50914" },
  { name: "Disney+", category: "Streaming", image: "/products/disney-plus.png", accent: "#3b82f6" },
  { name: "Prime Video", category: "Streaming", image: "/products/prime-video.png", accent: "#00a8e1" },
  { name: "Max", category: "Streaming", image: "/products/hbo-shared.png", accent: "#8b5cf6" },
  { name: "Spotify", category: "Music", image: "/products/spotify.png", accent: "#1db954" },
  { name: "Crunchyroll", category: "Anime", image: "/products/crunchyroll-shared.png", accent: "#f47521" },
  { name: "Amazon", category: "Gift Card", image: "/products/amazon.png", accent: "#ff9900" },
  { name: "Steam", category: "Gift Card", image: "/products/steam.png", accent: "#66c0f4" },
  { name: "Google Play", category: "Gift Card", image: "/products/google-play.png", accent: "#34a853" },
  { name: "Apple / iTunes", category: "Gift Card", image: "/products/itunes.png", accent: "#f472b6" },
  { name: "Xbox", category: "Gaming", image: "/products/xbox.png", accent: "#16a34a" },
  { name: "PlayStation", category: "Gaming", image: "/products/playstation.png", accent: "#0070d1" },
  { name: "Roblox", category: "Gaming", image: "/products/roblox.png", accent: "#e11d48" },
  { name: "Razer Gold", category: "Gaming", image: "/products/razer.png", accent: "#84cc16" },
  { name: "Battle.net", category: "Gaming", image: "/products/blizzard.png", accent: "#60a5fa" },
];

function rotateBrands(offset: number): HeroBrand[] {
  return heroBrands.map((_, index) => heroBrands[(index + offset) % heroBrands.length]);
}

const heroRows: HeroRow[] = [
  { id: "near", brands: rotateBrands(0), duration: "200s", direction: "left", tone: "near" },
  { id: "mid", brands: rotateBrands(5), duration: "180s", direction: "right", tone: "mid" },
  { id: "far", brands: rotateBrands(10), duration: "220s", direction: "left", tone: "far" },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="heroSection">
      <div className="heroShell">
        <div className="heroBackground" aria-hidden="true">
          <div className="heroRows">
            {heroRows.map((row) => (
              <div
                key={row.id}
                className={`heroRow heroRow-${row.tone}${row.direction === "right" ? " isReverse" : ""}`}
              >
                <div
                  className="heroRowTrack"
                  style={
                    {
                      "--row-duration": row.duration,
                    } as CSSProperties
                  }
                >
                  {[0, 1].map((copyIndex) => (
                    <div key={`${row.id}-${copyIndex}`} className="heroRowGroup" aria-hidden={copyIndex === 1}>
                      {row.brands.map((brand) => (
                        <article
                          key={`${row.id}-${copyIndex}-${brand.name}`}
                          className="heroCard"
                          style={
                            {
                              "--accent": brand.accent,
                            } as CSSProperties
                          }
                        >
                          <div className="heroCardMeta">
                            <span>{brand.category}</span>
                            <span className="heroCardSignal" />
                          </div>

                          <div className="heroCardMedia">
                            <Image
                              src={brand.image}
                              alt=""
                              aria-hidden="true"
                              width={320}
                              height={180}
                              sizes="(max-width: 767px) 34vw, (max-width: 1100px) 20vw, 13rem"
                              quality={65}
                              className="heroCardImage"
                            />
                          </div>

                          <div className="heroCardFooter">
                            <span className="heroCardName font-display">{brand.name}</span>
                            <span className="heroCardTag">Digital</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Container className="heroContentFrame !max-w-[1360px] !px-3 sm:!px-5 lg:!px-6">
          <div className="heroCopy">
            <span className="heroEyebrow">Trusted Digital Services</span>

            <h1 className="heroTitle font-display">
              <span className="heroTitleLine">Your favorite digital services,</span>
              <span className="heroAccentLine">
                <span className="heroAccentText">all in one place</span>
                <svg
                  className="heroAccentUnderline"
                  viewBox="0 0 460 30"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="hero-underline-fill" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#c99218" />
                      <stop offset="50%" stopColor="#f2c94c" />
                      <stop offset="100%" stopColor="#c99218" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 25 C96 11 364 11 452 25 C362 20 98 20 8 25 Z"
                    fill="url(#hero-underline-fill)"
                    opacity="0.95"
                  />
                </svg>
              </span>
            </h1>

            <p className="heroSubtitle">
              Shop streaming access, gift cards, bill payments, and shopping help with fast support and easy ordering.
            </p>

            <div className="heroActions">
              <Link href="/services" className="heroPrimary">
                Explore services
                <ArrowIcon />
              </Link>

              <a href="https://wa.me/18684651282" target="_blank" rel="noreferrer" className="heroGhost">
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
