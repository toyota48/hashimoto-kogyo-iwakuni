import type { Metadata } from "next";
import { company } from "@/src/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    default: company.seo.title,
    template: `%s | ${company.name}`,
  },
  description: company.seo.description,
  keywords: company.seo.keywords,
  alternates: {
    canonical: "/",
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
        url: "/images/og-hashimoto-kogyo.png",
        width: 1200,
        height: 630,
        alt: `${company.name}のコーポレートサイト サンプル`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.title,
    description: company.seo.description,
    images: ["/images/og-hashimoto-kogyo.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
