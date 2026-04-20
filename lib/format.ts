const ttdFormatter = new Intl.NumberFormat("en-TT", {
  style: "currency",
  currency: "TTD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatTtd(amount: number): string {
  return ttdFormatter.format(amount);
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}
