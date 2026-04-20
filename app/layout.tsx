import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Card Crafters — Trinidad & Tobago digital services",
    template: "%s | Card Crafters",
  },
  description:
    "Streaming subscriptions, gift cards, bill payments and personal shopping — delivered cleanly, from Card Crafters Limited in Trinidad & Tobago.",
  icons: [{ rel: "icon", url: "/brand/monogram-glow.png" }],
  openGraph: {
    title: "Card Crafters",
    description:
      "Streaming, gift cards, bill payments, personal shopping — delivered cleanly from Card Crafters T&T.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
