import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://studiodentisticosparano.it"),
  title: {
    default: "Studio Dentistico Sparano | Specialisti del sorriso",
    template: "%s | Studio Dentistico Sparano",
  },
  description:
    "Studio dentistico con oltre 20 anni di esperienza. Odontoiatria estetica, implantologia, ortodonzia e cure preventive in un ambiente moderno e accogliente.",
  keywords: [
    "dentista Milano",
    "studio dentistico",
    "odontoiatria estetica",
    "implantologia",
    "ortodonzia",
  ],
  authors: [{ name: "Studio Dentistico Sparano" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Studio Dentistico Sparano",
    title: "Studio Dentistico Sparano | Specialisti del sorriso",
    description:
      "Studio dentistico con oltre 20 anni di esperienza. Odontoiatria estetica, implantologia, ortodonzia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
