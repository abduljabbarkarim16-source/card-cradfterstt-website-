import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const col1 = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

const col2 = [
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/profile", label: "My Account" },
];

const col3 = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const payments = ["Bank Transfer", "EndCash", "Quick Pay", "VISA", "MasterCard"];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-900/90 pt-10 pb-8 sm:pt-12 sm:pb-10">
      <Container>
        <div className="mx-auto grid w-full max-w-[1170px] gap-8 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Card Crafters home">
              <Image
                src="/brand/Logo long 1.png"
                alt="Card Crafters Limited Logo"
                width={192}
                height={72}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-200">
              Premium digital-service access for Trinidad &amp; Tobago - streaming, gift cards, bill
              payments and personal shopping, all in one place.
            </p>
          </div>

          <FooterCol title="Explore" links={col1} />
          <FooterCol title="Help" links={col2} />
          <FooterCol title="Legal" links={col3} />
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <p className="mt-2 text-sm text-ink-200">
              <a href="mailto:support@cardcrafterstt.com" className="hover:text-ink-50">
                support@cardcrafterstt.com
              </a>
            </p>
            <p className="text-sm text-ink-200">
              <a href="tel:+18684651282" className="hover:text-ink-50">
                1-868-465-1282
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">We accept</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {payments.map((p) => (
                <li key={p} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-200">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-white/5 py-4 text-xs text-ink-300 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Card Crafters Limited - Trinidad &amp; Tobago</span>
          <span>Crafted with care.</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-200 transition hover:text-ink-50">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
