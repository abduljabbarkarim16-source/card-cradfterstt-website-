"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CartButton } from "@/components/cart/CartButton";
import { NavLinks } from "./NavLinks";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show header when at the top
      if (currentScrollPos < 50) {
        setIsVisible(true);
      } else if (currentScrollPos > prevScrollPos) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/5 bg-ink-900/70 backdrop-blur-md transition-transform duration-300"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Container className="flex h-28 items-center justify-between gap-4 !px-3 sm:!px-4">
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

        <div className="flex items-center gap-2">
          <Link
            href="/profile"
            className="hidden items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-ink-200 hover:bg-white/10 hover:text-ink-50 sm:inline-flex"
            aria-label="Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </Link>
          <CartButton />
        </div>
      </Container>
    </header>
  );
}
