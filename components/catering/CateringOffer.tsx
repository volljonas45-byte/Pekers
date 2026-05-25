"use client";

import { motion } from "framer-motion";
import { Users, Phone, CheckCircle2 } from "lucide-react";

const paket1Items = [
  "Teigrollen mit Hackfleisch- und Käsefüllung",
  "Caprese (Mozzarella und Tomaten)",
  "Gebratenes Gemüse (Auberginen, Zucchini, Karotten, Blumenkohl, Paprika)",
  "Frikadellen (Rinderhackfleisch, Reis, Kräuter, Zwiebeln)",
  "Zaziki, Baguette, kleine Schnitzel (Schwein oder Pute)",
];

export default function CateringOffer() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-cream-200 rounded-2xl overflow-hidden shadow-sm"
      >
        <div className="bg-olive px-8 py-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Users size={16} />
            <span className="text-xs uppercase tracking-widest font-medium opacity-80">Ab 5 Personen</span>
          </div>
          <h2 className="font-display text-2xl font-bold">Mediterranes Buffet</h2>
          <p className="font-display text-4xl font-bold mt-2">
            97,50 <span className="text-xl font-normal opacity-70">€</span>
          </p>
          <p className="text-sm opacity-70 mt-0.5">Gesamtpreis für 5 Personen</p>
        </div>
        <div className="px-8 py-6">
          <p className="text-dark-light text-sm font-medium mb-4">So könnte es aussehen:</p>
          <ul className="space-y-3">
            {paket1Items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-dark">
                <CheckCircle2 size={15} className="text-olive shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="bg-white border border-cream-200 rounded-2xl overflow-hidden shadow-sm"
      >
        <div className="bg-terra px-8 py-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Users size={16} />
            <span className="text-xs uppercase tracking-widest font-medium opacity-80">Für 10 Personen</span>
          </div>
          <h2 className="font-display text-2xl font-bold">Großes Mediterran-Buffet</h2>
          <p className="font-display text-4xl font-bold mt-2">
            195,– <span className="text-xl font-normal opacity-70">€</span>
          </p>
          <p className="text-sm opacity-70 mt-0.5">Gesamtpreis für 10 Personen</p>
        </div>
        <div className="px-8 py-6">
          <p className="text-dark-light text-sm leading-relaxed">
            Wir liefern frei Haus nach Schwaigern mit allen Tellern, Massenbachhausen und Leingarten. Ab 10 Personen auch weiter — fragen Sie uns!
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="bg-cream-100 border border-cream-200 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="flex-1">
          <h3 className="font-display font-bold text-dark text-lg mb-1">Individuelle Anfrage?</h3>
          <p className="text-dark-light text-sm">
            Wir stellen Ihr persönliches Buffet zusammen — rufen Sie uns an.
          </p>
        </div>
        <a
          href="tel:071388673"
          className="flex items-center gap-2 bg-terra text-white px-6 py-3 rounded-full font-medium hover:bg-terra-light transition-colors text-sm whitespace-nowrap"
        >
          <Phone size={14} />
          07138 / 8673
        </a>
      </motion.div>
    </div>
  );
}
