import type { Metadata } from "next";
import { company } from "@/src/data/company";
import "./globals.css";

const siteUrl = company.seo.siteUrl.replace(/\/$/, "");
const ogImageUrl = `${siteUrl}/images/og-hashimoto-kogyo.png`;
const faviconUrl = `${siteUrl}/favicon.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    default: company.seo.title,
    template: `%s | ${company.name}`,
  },
  description: company.seo.description,
  keywords: company.seo.keywords,
  alternates: {
    canonical: company.seo.siteUrl,
  },
  openGraph: {
    title: company.seo.title,
    description: company.seo.description,
    url: company.seo.siteUrl,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${company.name}のコーポレートサイト`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.title,
    description: company.seo.description,
    images: [ogImageUrl],
  },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
