"use client";

import { useCart } from "./CartProvider";
import { cn } from "@/lib/format";

export function CartButton({ className }: { className?: string }) {
  const { count, openDrawer, hydrated } = useCart();
  const showCount = hydrated && count > 0;

  return (
    <button
      type="button"
      onClick={openDrawer}
      aria-label={showCount ? `Open cart, ${count} item${count === 1 ? "" : "s"}` : "Open cart"}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent-soft to-accent p-2 text-ink-900 transition hover:brightness-110 hover:shadow-glow",
        className,
      )}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 8h14l-1.5 10a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 8zm4-3a3 3 0 1 1 6 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showCount && (
        <span
          aria-hidden
          className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-900 text-[11px] font-bold text-accent-soft animate-badgePulse"
        >
          {count}
        </span>
      )}
    </button>
  );
}
