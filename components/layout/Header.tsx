import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CartButton } from "@/components/cart/CartButton";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-900/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Card Crafters home">
          <Image
            src="/brand/monogram-glow.png"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="display text-lg font-semibold tracking-tight">
            <span className="text-ink-50">Card</span>{" "}
            <span className="text-accent-soft">Crafters</span>
          </span>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-2">
          <Link
            href="/profile"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-ink-200 hover:bg-white/10 hover:text-ink-50 sm:inline-flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
            Profile
          </Link>
          <CartButton />
        </div>
      </Container>
    </header>
  );
}
