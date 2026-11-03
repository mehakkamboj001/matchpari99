import type { Metadata } from "next";
import { SiteFooter, SiteHeader, WhatsAppFloat } from "./site-ui";
import { canonicalUrl, secondaryKeywords, SITE_NAME, SITE_URL } from "./seo";
import { SiteJsonLd } from "./seo-json-ld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Matchpari99 Official Sports ID in India",
    template: "%s | Matchpari99",
  },
  description:
    "Visit the Matchpari99 official website for sports and app information, contact details, and account-access support.",
  applicationName: SITE_NAME,
  keywords: [
    "Matchpari99",
    ...secondaryKeywords,
    "cricket sports information",
    "Matchpari99 India",
  ],
  alternates: {
    canonical: canonicalUrl("/"),
    languages: {
      "en-IN": canonicalUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    url: canonicalUrl("/"),
    siteName: SITE_NAME,
    title: "Matchpari99 Official Sports ID in India",
    description:
      "Visit the Matchpari99 official website for sports and app information, contact details, and account-access support.",
    locale: "en_IN",
    images: [
      {
        url: "/og-matchpari99.png",
        width: 1200,
        height: 630,
        alt: "Matchpari99 official website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matchpari99 Official Sports ID in India",
    description:
      "Sports and app information, contact details, and account-access support from Matchpari99.",
    images: ["/og-matchpari99.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteJsonLd />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
