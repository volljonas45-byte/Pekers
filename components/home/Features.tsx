"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, Truck, TreePine } from "lucide-react";

const cards = [
  {
    icon: UtensilsCrossed,
    label: "Täglich frisch",
    title: "Unsere Speisekarte",
    description:
      "Pizza aus dem Steinofen, Pasta, Fleischgerichte und mediterrane Salate — alles frisch zubereitet.",
    href: "/speisekarte",
    cta: "Karte ansehen",
  },
  {
    icon: Truck,
    label: "Ab 5 Personen",
    title: "Catering & Lieferung",
    description:
      "Mediterranes Buffet frei Haus für Ihr Fest — wir liefern nach Schwaigern und Umgebung.",
    href: "/catering",
    cta: "Mehr erfahren",
  },
  {
    icon: TreePine,
    label: "Im Sommer",
    title: "Biergarten & Terrasse",
    description:
      "Genießen Sie Ihre Mahlzeit im Freien — unser Biergarten lädt zum Verweilen ein.",
    href: "/kontakt",
    cta: "Anfahrt & Zeiten",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-cream-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream-200">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={card.href}
                className="group block px-8 py-10 hover:bg-cream transition-colors duration-200"
              >
                <div className="flex items-center gap-2 text-olive mb-5">
                  <card.icon size={18} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium">{card.label}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-dark mb-2 group-hover:text-terra transition-colors">
                  {card.title}
                </h3>
                <p className="text-dark-light text-sm leading-relaxed mb-5">
                  {card.description}
                </p>
                <span className="text-[11px] uppercase tracking-widest text-terra font-medium group-hover:underline">
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
