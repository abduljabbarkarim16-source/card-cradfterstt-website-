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

export function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm font-medium transition",
            isActive(l.href) ? "text-ink-50" : "text-ink-200 hover:text-ink-50",
          )}
        >
          {l.label}
          {isActive(l.href) && (
            <span
              aria-hidden
              className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
