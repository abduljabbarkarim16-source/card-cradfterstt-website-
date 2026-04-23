"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/format";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function NavLinks({ isScrolled = false }: { isScrolled?: boolean }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "hidden items-center rounded-full p-1.5 transition-all duration-300 md:flex",
        isScrolled
          ? "border border-white/10 bg-black/45 shadow-[0_20px_55px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
          : "border border-transparent bg-transparent shadow-none backdrop-blur-0",
      )}
    >
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={cn(
            "rounded-full px-4 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200",
            isActive(l.href)
              ? "bg-gradient-to-b from-[#f8de86] to-accent text-ink-900 shadow-[0_0_32px_rgba(234,179,8,0.24),inset_0_1px_0_rgba(255,255,255,0.38)]"
              : isScrolled
                ? "text-ink-200 hover:bg-white/[0.05] hover:text-ink-50 hover:shadow-[inset_0_0_0_1px_rgba(234,179,8,0.12)]"
                : "text-ink-200 hover:text-ink-50",
          )}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
