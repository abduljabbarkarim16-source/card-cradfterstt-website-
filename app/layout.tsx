import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cardcrafters.com'),
  title: {
    default: 'Card Crafters | Premium Digital Services & Sourcing',
    template: '%s | Card Crafters',
  },
  description:
    'Premium digital services including streaming subscriptions, gift cards, bill payments, and shopping assistance. Fast, secure, and reliable.',
  keywords: [
    'streaming subscriptions',
    'gift cards',
    'bill payments',
    'shopping assistance',
    'digital services',
    'card crafters',
  ],
  authors: [{ name: 'Card Crafters' }],
  creator: 'Card Crafters',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cardcrafters.com',
    title: 'Card Crafters | Premium Digital Services & Sourcing',
    description:
      'Premium digital services including streaming subscriptions, gift cards, bill payments, and shopping assistance.',
    siteName: 'Card Crafters',
    images: [
      {
        url: '/images/card-crafters-monogram-glow.png',
        width: 1200,
        height: 630,
        alt: 'Card Crafters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Card Crafters | Premium Digital Services & Sourcing',
    description:
      'Premium digital services including streaming subscriptions, gift cards, bill payments, and shopping assistance.',
    images: ['/images/card-crafters-monogram-glow.png'],
  },
  icons: {
    icon: '/images/card-crafters-monogram-glow.png',
    shortcut: '/images/card-crafters-monogram.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'verification_token_here', // Add your Google verification token
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="relative bg-dark-950 overflow-x-hidden">
        <div className="fixed inset-0 -z-10 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
