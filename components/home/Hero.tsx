import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type HeroBrand = {
  name: string;
  category: string;
  image: string;
  accent: string;
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

const heroTiles = Array.from({ length: 24 }, (_, index) => heroBrands[index % heroBrands.length]);

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
          <div className="heroGrid">
            {heroTiles.map((brand, index) => (
              <article
                key={`${brand.name}-${index}`}
                className="heroTile"
                style={
                  {
                    "--accent": brand.accent,
                    animationDelay: `${index * 35}ms`,
                  } as CSSProperties
                }
              >
                <div className="heroTileHead">
                  <span>{brand.category}</span>
                  <span className="heroTileDot" />
                </div>

                <div className="heroTileMedia">
                  <Image
                    src={brand.image}
                    alt=""
                    aria-hidden="true"
                    width={320}
                    height={180}
                    sizes="(max-width: 767px) 32vw, (max-width: 1100px) 18vw, 12vw"
                    className="heroTileImage"
                  />
                </div>

                <div className="heroTileName font-display">{brand.name}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="heroCopy">
          <span className="heroEyebrow font-mono">
            <span className="heroEyebrowPip" />
            Trinidad &amp; Tobago - Digital services
          </span>

          <h1 className="heroTitle font-display">
            <span>Streaming, cards &amp; bills,</span>
            <span className="heroAccent">handled cleanly.</span>
          </h1>

          <p className="heroSubtitle">
            One cart for Netflix, Steam, Flow, T&amp;TEC and everything in between. Settled in TTD, delivered same
            business day by a local team.
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

          <div className="heroTrust">
            <div className="heroTrustItem">
              <b>TTD</b>
              <span>prices, no surprise FX</span>
            </div>
            <div className="heroTrustDivider" />
            <div className="heroTrustItem">
              <b>23+</b>
              <span>services &amp; brands</span>
            </div>
            <div className="heroTrustDivider" />
            <div className="heroTrustItem">
              <b>Local</b>
              <span>Trinidad-based team</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .heroSection {
          padding: 1.5rem 1rem 3.5rem;
        }

        .heroShell {
          position: relative;
          max-width: 1280px;
          min-height: 48rem;
          margin: 0 auto;
          padding: 5rem 2rem 5.5rem;
          overflow: hidden;
          border: 1px solid rgba(201, 163, 74, 0.18);
          border-radius: 2rem;
          background:
            radial-gradient(1200px 520px at 50% -12%, rgba(201, 163, 74, 0.08), transparent 60%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 26%),
            #070707;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 36px 90px rgba(0, 0, 0, 0.42);
        }

        .heroShell::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          opacity: 0.35;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 0;
        }

        .heroBackground {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .heroBackground::before {
          content: "";
          position: absolute;
          inset: auto -8rem -10rem auto;
          width: 28rem;
          height: 28rem;
          border-radius: 999px;
          background: rgba(240, 199, 94, 0.08);
          filter: blur(78px);
          animation: heroGlow 8s ease-in-out infinite;
        }

        .heroBackground::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 42% 50% at 50% 50%, rgba(7, 7, 7, 0.06), rgba(7, 7, 7, 0.66) 52%, rgba(7, 7, 7, 0.94) 80%),
            linear-gradient(180deg, rgba(7, 7, 7, 0.36), rgba(7, 7, 7, 0.12) 46%, rgba(7, 7, 7, 0.88));
          pointer-events: none;
        }

        .heroGrid {
          position: absolute;
          inset: -2.5rem;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          grid-auto-rows: 8.75rem;
          gap: 0.875rem;
          padding: 1.5rem;
          transform: rotate(-1.2deg) scale(1.02);
        }

        .heroTile {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0.9rem;
          overflow: hidden;
          border: 1px solid rgba(240, 199, 94, 0.18);
          border-radius: 1.125rem;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.6);
          opacity: 0;
          animation: tileIn 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .heroTile::after {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 50%;
          background: radial-gradient(
            ellipse at bottom,
            color-mix(in oklab, var(--accent, #f0c75e) 28%, transparent),
            transparent 70%
          );
          pointer-events: none;
        }

        .heroTileHead {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(248, 230, 160, 0.88);
        }

        .heroTileDot {
          width: 0.42rem;
          height: 0.42rem;
          flex: 0 0 auto;
          border-radius: 999px;
          background: var(--accent);
          box-shadow:
            0 0 0 4px color-mix(in srgb, var(--accent) 18%, transparent),
            0 0 14px color-mix(in srgb, var(--accent) 72%, transparent);
        }

        .heroTileMedia {
          position: relative;
          z-index: 1;
          display: flex;
          min-height: 4.25rem;
          align-items: center;
          justify-content: center;
          padding: 0.35rem 0;
        }

        .heroTileImage {
          width: auto;
          max-width: 82%;
          max-height: 3.5rem;
          object-fit: contain;
        }

        .heroTileName {
          position: relative;
          z-index: 1;
          font-size: 0.83rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #f6f1e3;
        }

        .heroCopy {
          position: relative;
          z-index: 2;
          display: flex;
          max-width: 54rem;
          margin: 0 auto;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
          animation: copyIn 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .heroEyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.65rem 1rem;
          border: 1px solid rgba(201, 163, 74, 0.2);
          border-radius: 999px;
          background: rgba(10, 10, 10, 0.62);
          color: #c9a34a;
          font-size: 0.66rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
        }

        .heroEyebrowPip {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 999px;
          background: #f0c75e;
          box-shadow:
            0 0 0 3px rgba(240, 199, 94, 0.12),
            0 0 12px rgba(240, 199, 94, 0.58);
        }

        .heroTitle {
          display: flex;
          flex-direction: column;
          gap: 0.08em;
          margin: 0;
          font-size: clamp(3rem, 7.5vw, 6.25rem);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .heroAccent {
          display: block;
          background: linear-gradient(180deg, #f8e6a0 0%, #f0c75e 45%, #c9a34a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .heroSubtitle {
          max-width: 56ch;
          margin: 0;
          color: rgba(216, 209, 191, 0.94);
          font-size: clamp(1rem, 1.6vw, 1.1rem);
          line-height: 1.6;
          text-wrap: pretty;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }

        .heroPrimary,
        .heroGhost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          padding: 0.95rem 1.45rem;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 600;
          transition:
            transform 0.15s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .heroPrimary {
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: linear-gradient(180deg, #f8e6a0, #c9a34a);
          color: #070707;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 10px 30px -10px rgba(240, 199, 94, 0.55);
        }

        .heroPrimary:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 40px -10px rgba(240, 199, 94, 0.7);
        }

        .heroGhost {
          border: 1px solid rgba(246, 241, 227, 0.12);
          background: rgba(255, 255, 255, 0.02);
          color: #f6f1e3;
        }

        .heroGhost:hover {
          transform: translateY(-1px);
          border-color: rgba(240, 199, 94, 0.45);
          background: rgba(240, 199, 94, 0.06);
        }

        .heroTrust {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.75rem;
          padding-top: 1.25rem;
          margin-top: 0.25rem;
          border-top: 1px solid rgba(246, 241, 227, 0.08);
        }

        .heroTrustItem {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.15rem;
          text-align: left;
        }

        .heroTrustItem b {
          color: #f0c75e;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .heroTrustItem span {
          color: rgba(150, 144, 127, 0.96);
          font-size: 0.82rem;
        }

        .heroTrustDivider {
          width: 1px;
          height: 1.7rem;
          background: rgba(246, 241, 227, 0.12);
        }

        @keyframes tileIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes copyIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.22;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.3;
          }
        }

        @media (max-width: 1100px) {
          .heroShell {
            min-height: 44rem;
            padding: 4.5rem 1.5rem 4.75rem;
          }

          .heroGrid {
            inset: -1.6rem;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            grid-auto-rows: 8rem;
          }
        }

        @media (max-width: 767px) {
          .heroSection {
            padding: 1rem 0.75rem 2.75rem;
          }

          .heroShell {
            min-height: 40rem;
            padding: 4rem 1rem 2.75rem;
            border-radius: 1.5rem;
          }

          .heroBackground::after {
            background:
              linear-gradient(180deg, rgba(7, 7, 7, 0.52), rgba(7, 7, 7, 0.74) 34%, rgba(7, 7, 7, 0.94) 100%),
              radial-gradient(circle at 50% 20%, rgba(201, 163, 74, 0.1), transparent 44%);
          }

          .heroGrid {
            inset: -0.35rem;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-auto-rows: 6.5rem;
            gap: 0.6rem;
            padding: 0.85rem;
            transform: rotate(-0.8deg) scale(1.04);
          }

          .heroTile {
            padding: 0.75rem;
            border-radius: 0.95rem;
          }

          .heroTileHead {
            font-size: 0.52rem;
            letter-spacing: 0.16em;
          }

          .heroTileMedia {
            min-height: 3.15rem;
          }

          .heroTileImage {
            max-height: 2.45rem;
            max-width: 88%;
          }

          .heroTileName {
            font-size: 0.72rem;
          }

          .heroCopy {
            gap: 1.1rem;
          }

          .heroEyebrow {
            font-size: 0.56rem;
            letter-spacing: 0.18em;
            padding: 0.55rem 0.85rem;
          }

          .heroTitle {
            font-size: clamp(2.65rem, 14vw, 4.35rem);
          }

          .heroSubtitle {
            font-size: 0.97rem;
          }

          .heroActions {
            width: 100%;
          }

          .heroPrimary,
          .heroGhost {
            width: 100%;
          }

          .heroTrust {
            gap: 1rem;
            justify-content: flex-start;
          }

          .heroTrustItem {
            min-width: calc(50% - 0.5rem);
          }

          .heroTrustDivider {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .heroBackground::before,
          .heroCopy,
          .heroTile {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
