import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { business } from "@/lib/data";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cactus Restaurant — Come Hungry | Victoria Island, Lagos",
  description:
    "Cactus Restaurant, Victoria Island: bakery at dawn, the grill by noon, gelato by the water at dusk. 4.4 stars across 6,700+ Google reviews — ranked #7 of 510 Lagos restaurants on TripAdvisor.",
  openGraph: {
    title: "Cactus Restaurant — Come hungry.",
    description:
      "One of Lagos's most-loved tables, on the water in Victoria Island. Breakfast, the grill, the bakery, the bar — from 7:30am daily.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    servesCuisine: ["International", "Bakery", "Grill"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "20/24 Ozumba Mbadiwe Ave, Victoria Island",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    telephone: "+2348073777666",
    sameAs: [business.instagramUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: 6700,
    },
    openingHours: "Mo-Su 07:30-22:00",
    priceRange: "₦₦",
  };
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
