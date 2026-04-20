/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/checkout.html", destination: "/checkout", permanent: true },
      { source: "/profile.html", destination: "/profile", permanent: true },
      { source: "/amazon-gift-card.html", destination: "/services/gift-cards/amazon", permanent: true },
      { source: "/google-play-gift-card.html", destination: "/services/gift-cards/google-play", permanent: true },
      { source: "/steam-gift-card.html", destination: "/services/gift-cards/steam", permanent: true },
      { source: "/disney-plus.html", destination: "/services/streaming/disney-plus", permanent: true },
      { source: "/netflix-basic.html", destination: "/services/streaming/netflix-basic", permanent: true },
      { source: "/internet-cable.html", destination: "/services/bills/internet-cable", permanent: true },
      { source: "/utility-bills.html", destination: "/services/bills/utility-bills", permanent: true },
    ];
  },
};

export default nextConfig;
