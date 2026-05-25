import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Peker's – Mediterrane Küche Schwaigern",
  description:
    "Willkommen bei Peker's – Ihrer mediterranen Gaststätte in Schwaigern. Genießen Sie türkisch-mediterrane Küche, Pizza, Pasta und mehr.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
