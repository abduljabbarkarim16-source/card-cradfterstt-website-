import { cn } from "@/lib/format";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1360px] px-3 sm:px-5 lg:px-6", className)}>
      {children}
    </Tag>
  );
}
