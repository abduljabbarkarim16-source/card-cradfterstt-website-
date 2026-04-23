"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CartButton } from "@/components/cart/CartButton";
import { cn } from "@/lib/format";
import { NavLinks } from "./NavLinks";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const prevScrollPosRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const previousScrollPos = prevScrollPosRef.current;
      setScrollY(currentScrollPos);

      if (currentScrollPos < 50) {
        setIsVisible(true);
      } else if (currentScrollPos > previousScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      prevScrollPosRef.current = currentScrollPos;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 180, 1);
  const isScrolled = scrollY > 24;

  return (
    <header
      className="sticky top-0 z-40 transition-transform duration-300"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        borderBottom: isScrolled
          ? `1px solid rgba(255, 255, 255, ${0.03 + scrollProgress * 0.09})`
          : "1px solid transparent",
        background: isScrolled
          ? `linear-gradient(180deg,
              rgba(7, 7, 7, ${0.82 + scrollProgress * 0.08}) 0%,
              rgba(7, 7, 7, ${0.48 + scrollProgress * 0.12}) 58%,
              rgba(7, 7, 7, ${0.12 + scrollProgress * 0.08}) 100%)`
          : "transparent",
        backdropFilter: isScrolled ? `blur(${10 + scrollProgress * 8}px)` : "none",
        boxShadow: isScrolled ? `0 18px 40px rgba(0, 0, 0, ${0.18 + scrollProgress * 0.14})` : "none",
      }}
    >
      <Container className="relative flex h-[6.25rem] items-center !max-w-[1280px] !px-3 sm:!px-4 lg:!px-6">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3 px-4 py-2.5"
          aria-label="Card Crafters home"
        >
          <Image
            src="/brand/Logo long 1.png"
            alt="Card Crafters Limited Logo"
            width={160}
            height={60}
            priority
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>

        <div className="pointer-events-none absolute inset-x-0 hidden justify-center md:flex">
          <div className="pointer-events-auto">
            <NavLinks isScrolled={isScrolled} />
          </div>
        </div>

        <div className="relative z-10 ml-auto flex items-center gap-1 sm:gap-2">
          <Link
            href="/profile"
            className={cn(
              "hidden h-11 w-11 items-center justify-center rounded-full text-ink-200 transition-all duration-200 hover:text-ink-50 sm:inline-flex",
              isScrolled ? "bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08]" : "bg-transparent",
            )}
            aria-label="Profile"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </Link>
          <CartButton
            className={cn(
              "h-11 w-11 p-0 shadow-[0_14px_28px_rgba(234,179,8,0.24)]",
              isScrolled ? "backdrop-blur-md" : "",
            )}
          />
        </div>
      </Container>
    </header>
  );
}
