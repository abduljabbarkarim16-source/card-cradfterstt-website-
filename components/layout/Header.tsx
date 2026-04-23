"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CartButton } from "@/components/cart/CartButton";
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
              rgba(7, 7, 7, ${0.92 + scrollProgress * 0.04}) 0%,
              rgba(7, 7, 7, ${0.72 + scrollProgress * 0.08}) 58%,
              rgba(7, 7, 7, ${0.26 + scrollProgress * 0.1}) 100%)`
          : "linear-gradient(180deg, rgba(7, 7, 7, 0.18) 0%, rgba(7, 7, 7, 0.08) 45%, rgba(7, 7, 7, 0) 100%)",
        backdropFilter: isScrolled ? `blur(${10 + scrollProgress * 8}px)` : "blur(2px)",
        boxShadow: isScrolled ? `0 18px 40px rgba(0, 0, 0, ${0.18 + scrollProgress * 0.14})` : "none",
      }}
    >
      <Container className="flex h-[6.75rem] items-center justify-between gap-4 !px-3 sm:!px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Card Crafters home">
          <Image
            src="/brand/Logo long 1.png"
            alt="Card Crafters Limited Logo"
            width={160}
            height={60}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <NavLinks />

        <div className="flex items-center gap-4">
          <Link
            href="/profile"
            className="hidden items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-ink-200 hover:bg-white/10 hover:text-ink-50 sm:inline-flex"
            aria-label="Profile"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </Link>
          <CartButton className="p-2.5" />
        </div>
      </Container>
    </header>
  );
}
