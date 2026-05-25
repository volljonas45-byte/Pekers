import type { Metadata } from "next";
import CateringOffer from "@/components/catering/CateringOffer";

export const metadata: Metadata = {
  title: "Catering & Lieferservice | Peker's Mediterrane Küche",
  description:
    "Mediterrane Buffets frei Haus — ab 5 Personen liefern wir zu Ihnen nach Schwaigern, Massenbachhausen und Leingarten.",
};

export default function CateringPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-olive text-xs uppercase tracking-[0.3em] font-medium">Lieferung &amp; Catering</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-dark italic mt-2 mb-3">
            Mediterrane Köstlichkeiten frei Haus
          </h1>
          <p className="text-dark-light max-w-xl mx-auto">
            Wir liefern ab 5 Personen Ihr mediterranes Buffet direkt zu Ihnen — mit allem drum und dran.
          </p>
        </div>
        <CateringOffer />
      </div>
    </div>
  );
}
