"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import type { CartItem } from "@/lib/cart";
import { cn } from "@/lib/format";

export function AddToCartButton({
  item,
  className,
  label = "Add to cart",
}: {
  item: Omit<CartItem, "quantity">;
  className?: string;
  label?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const onClick = () => {
    addItem({ ...item, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:brightness-110 hover:shadow-glow active:translate-y-px",
        className,
      )}
    >
      {added ? "Added ✓" : label}
    </button>
  );
}
