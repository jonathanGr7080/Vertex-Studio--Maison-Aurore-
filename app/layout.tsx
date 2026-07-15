import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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

const siteUrl = "https://maison-aurore.vertex-studio-demo.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maison Aurore — Concept de démonstration · Vertex Studio",
  description:
    "Maison Aurore est un concept fictif de restaurant gastronomique à Bruges, imaginé par Vertex Studio pour son portfolio. La gastronomie au rythme des saisons.",
  openGraph: {
    title: "Maison Aurore — Concept de démonstration",
    description:
      "Projet de portfolio réalisé par Vertex Studio : identité et site pour un restaurant gastronomique fictif à Bruges.",
    url: siteUrl,
    siteName: "Maison Aurore (démonstration Vertex Studio)",
    locale: "fr_BE",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
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
      </body>
    </html>
  );
}
