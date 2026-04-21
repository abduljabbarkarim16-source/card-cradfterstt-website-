import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/format";

export function Section({
  children,
  id,
  className,
  eyebrow,
  title,
  lead,
  contained = true,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  contained?: boolean;
}) {
  const header =
    eyebrow || title || lead ? (
      <header className="mb-10 max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="display text-2xl sm:text-3xl font-semibold text-ink-50">{title}</h2>
        )}
        {lead && <p className="mt-3 text-ink-200 text-base leading-relaxed">{lead}</p>}
      </header>
    ) : null;

  const body = (
    <>
      {header}
      {children}
    </>
  );

  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      {contained ? <Container>{body}</Container> : body}
    </section>
  );
}
