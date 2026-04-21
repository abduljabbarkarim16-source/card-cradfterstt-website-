import Image from "next/image";

type Logo = { src: string; alt: string };

export function LogoMarquee({
  logos,
  speed = "normal",
}: {
  logos: Logo[];
  speed?: "normal" | "slow";
}) {
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  const doubled = [...logos, ...logos];

  return (
    <div className="marquee-mask group/marquee relative overflow-hidden">
      <ul
        className={`flex w-max items-center gap-12 ${animClass} group-hover/marquee:[animation-play-state:paused] sm:gap-16`}
        aria-label="Brands we cover"
      >
        {doubled.map((logo, i) => (
          <li
            key={`${logo.alt}-${i}`}
            className="relative h-10 w-24 shrink-0 opacity-70 transition-opacity hover:opacity-100 sm:h-12 sm:w-28"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="120px"
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
