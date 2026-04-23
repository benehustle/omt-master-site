import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://outmarketthem.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OutMarketThem  -  Custom websites for trades businesses. $997. 14 days.",
    template: "%s | OutMarketThem",
  },
  description:
    "Custom websites for trades businesses. $997 one-time. Built in 14 days. No contracts, no retainers. Rescue services for Google Ads, Meta Ads and SEO.",
  keywords: [
    "trades website",
    "web design for trades",
    "plumber website",
    "electrician website",
    "Google Ads rescue",
    "Meta Ads rescue",
    "SEO for trades",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "OutMarketThem",
    title: "OutMarketThem  -  Custom websites for trades businesses.",
    description:
      "$997. Built in 14 days. Refundable deposit. No contracts. Trades web design in the US and Australia.",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "OutMarketThem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OutMarketThem  -  Custom websites for trades businesses.",
    description: "$997. Built in 14 days. No contracts. Trades web design in the US and Australia.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OutMarketThem",
    url: siteUrl,
    logo: `${siteUrl}/og-default.svg`,
    founder: { "@type": "Person", name: "Ben Wake" },
    sameAs: [],
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "US",
        addressRegion: "DE",
      },
      {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
      },
    ],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-clay focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
