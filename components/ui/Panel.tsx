import type { ReactNode } from "react";
import { cn } from "@/lib/format";

export function Panel({
  children,
  className,
  strong = false,
}: {
  children: ReactNode;
  className?: string;
  strong?: boolean;
}) {
  return (
    <div className={cn(strong ? "panel-strong" : "panel", className)}>{children}</div>
  );
}

export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
