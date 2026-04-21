import Image from "next/image";

type MockItem = { name: string; meta: string; price: string; image: string };

const items: MockItem[] = [
  { name: "Netflix Premium", meta: "1 month · 4K", price: "TT$ 105", image: "/products/netflix-premium.png" },
  { name: "Amazon Gift Card", meta: "$50 USD", price: "TT$ 360", image: "/products/amazon.png" },
  { name: "T&TEC bill", meta: "Acct ending · 4421", price: "TT$ 280", image: "/products/tntec.jpg" },
];

export function CartMockup({ tilt = true }: { tilt?: boolean }) {
  return (
    <div
      aria-hidden
      className={`relative w-full max-w-[360px] ${tilt ? "rotate-[-2.5deg]" : ""} transition-transform duration-700 hover:rotate-0`}
    >
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-accent-cool/10 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-panel backdrop-blur-md">
        <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="display text-xs font-semibold tracking-wide text-ink-50">Your Cart</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-accent-cool">3 items</span>
        </header>
        <ul className="divide-y divide-white/5">
          {items.map((it) => (
            <li key={it.name} className="flex items-center gap-3 px-4 py-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-ink-800">
                <Image src={it.image} alt="" fill sizes="40px" className="object-contain p-1.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-ink-50">{it.name}</p>
                <p className="text-[10px] text-ink-300">{it.meta}</p>
              </div>
              <p className="text-xs font-semibold tabular-nums text-accent-soft">{it.price}</p>
            </li>
          ))}
        </ul>
        <div className="space-y-3 border-t border-white/10 bg-white/[0.02] px-4 py-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] uppercase tracking-wider text-ink-300">Subtotal</span>
            <span className="display text-base font-semibold tabular-nums text-ink-50">TT$ 745</span>
          </div>
          <div className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-accent-soft to-accent px-4 py-2 text-xs font-semibold text-ink-900">
            Proceed to checkout →
          </div>
        </div>
      </div>
    </div>
  );
}
