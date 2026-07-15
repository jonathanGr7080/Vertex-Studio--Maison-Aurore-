import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { allowIndexing, metadataBaseUrl, siteMeta, siteUrl } from "@/lib/site-config";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl,
  title: siteMeta.title,
  description: siteMeta.description,
  applicationName: siteMeta.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maison Aurore — Concept de démonstration",
    description: siteMeta.ogDescription,
    url: "/",
    siteName: siteMeta.siteName,
    locale: siteMeta.locale,
    type: "website",
    images: [
      {
        url: "/images/og-maison-aurore.png",
        width: 1200,
        height: 630,
        alt: "Maison Aurore — concept de démonstration conçu par Vertex Studio.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Aurore — Concept de démonstration",
    description: siteMeta.ogDescription,
    images: ["/images/og-maison-aurore.png"],
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
  },
};

// Données structurées honnêtes : le site est un cas d'étude (CreativeWork),
// jamais un établissement réel. On ne publie aucun schéma « Restaurant ».
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Maison Aurore — concept de démonstration",
  headline: "Site vitrine fictif pour un restaurant gastronomique",
  url: siteUrl,
  inLanguage: "fr",
  genre: "Concept de démonstration / portfolio",
  abstract:
    "Maison Aurore est un concept fictif imaginé par Vertex Studio pour son portfolio. Ce n'est pas un établissement réel.",
  creator: {
    "@type": "Organization",
    name: "Vertex Studio",
  },
  about: {
    "@type": "Thing",
    name: "Restaurant gastronomique (fictif), Bruges",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-ivoire text-nuit antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
