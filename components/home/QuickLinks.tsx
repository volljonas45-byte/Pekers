"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, Truck, MapPin } from "lucide-react";

const cards = [
  {
    icon: UtensilsCrossed,
    title: "Speisekarte",
    description: "Entdecken Sie unsere Pizzen, Pasta, Fleischgerichte und mehr — alles frisch und mediterran.",
    href: "/speisekarte",
    cta: "Zur Karte",
  },
  {
    icon: Truck,
    title: "Catering & Lieferung",
    description: "Mediterrane Buffets frei Haus — ab 5 Personen liefern wir zu Ihnen nach Schwaigern und Umgebung.",
    href: "/catering",
    cta: "Mehr erfahren",
  },
  {
    icon: MapPin,
    title: "Kontakt & Route",
    description: "Finden Sie uns in der Falltorstrase 10, Schwaigern. Öffnungszeiten und Anfahrt auf einen Blick.",
    href: "/kontakt",
    cta: "Route berechnen",
  },
];

export default function QuickLinks() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={card.href}
                className="group block bg-white border border-warm-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <card.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{card.description}</p>
                <span className="text-accent font-medium text-sm group-hover:underline">
                  {card.cta} →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
