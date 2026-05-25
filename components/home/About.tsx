"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Jahre dabei" },
  { value: "TSV", label: "Schwaigern" },
  { value: "Familie", label: "Peker" },
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                alt="Mediterrane Küche bei Peker's"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-2 border border-cream-200">
              <span className="font-display text-3xl font-bold text-terra">20+</span>
              <span className="text-dark-light text-xs leading-tight">Jahre<br />in Schwaigern</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-olive text-[10px] uppercase tracking-[0.3em] font-medium">Unsere Geschichte</span>
            <h2
              className="font-display font-bold text-dark mt-3 mb-5 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Echt. Mediterran.
            </h2>
            <p className="text-dark-light leading-relaxed mb-4 text-sm">
              Vor über 20 Jahren haben Resat und Türkan Peker die TSV-Gaststätte in Schwaigern übernommen — und seitdem zu einem Ort gemacht, an dem man sich einfach wohlfühlt. Ob nach dem Spiel mit der Mannschaft, zum Sonntagsmittagessen mit der Familie oder einfach auf ein Glas in unserem Biergarten.
            </p>
            <p className="text-dark-light leading-relaxed text-sm mb-8">
              Mediterrane Küche, frische Zutaten und echte Gastfreundschaft — das ist Peker's. Keine große Bühne, aber immer ein herzliches Willkommen.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cream-200">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-terra">{stat.value}</p>
                  <p className="text-dark-light text-[10px] uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
