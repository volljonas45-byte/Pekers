import type { Metadata } from "next";
import ContactCard from "@/components/kontakt/ContactCard";

export const metadata: Metadata = {
  title: "Kontakt & Öffnungszeiten | Peker's Mediterrane Küche",
  description:
    "Besuchen Sie uns in der Falltorstrase 10, Schwaigern. Öffnungszeiten, Telefon und Anfahrt.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-olive text-xs uppercase tracking-[0.3em] font-medium">Wir freuen uns auf Sie</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-dark italic mt-2 mb-3">
            Kontakt &amp; Anfahrt
          </h1>
          <p className="text-dark-light max-w-xl mx-auto">
            Besuchen Sie uns in Schwaigern — wir sind für Sie da.
          </p>
        </div>
        <ContactCard />
      </div>
    </div>
  );
}
