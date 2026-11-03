import type { Metadata } from "next";

export const SITE_URL = "https://matchpari99.co.in";
export const SITE_NAME = "Matchpari99";
export const SOCIAL_IMAGE = "/og-matchpari99.png";

export const primaryKeywords = ["Matchpari99"];

export const secondaryKeywords = [
  "Matchpari99 official website",
  "Matchpari99 sports ID",
  "Matchpari99 app",
  "Matchpari99 contact",
  "Matchpari99 login help",
  "Matchpari99 sign up",
];

export function canonicalUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  noIndex?: boolean;
}): Metadata {
  const url = canonicalUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      locale: "en_IN",
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [SOCIAL_IMAGE],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
