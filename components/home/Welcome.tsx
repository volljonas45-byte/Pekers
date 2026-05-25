"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Welcome() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <Leaf size={18} className="text-primary" />
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 italic">
            Herzlich willkommen
          </h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Vor über 20 Jahren hat das Ehepaar Resat und Türkan Peker die Entscheidung getroffen, die TSV-Sporthalle in Schwaigern zu übernehmen — und damit den Grundstein für ein besonderes Gastronomieerlebnis gelegt.
          </p>
          <p className="text-text-muted leading-relaxed max-w-2xl mx-auto">
            Der Biergarten trägt die Handschrift des Südens: Der Sohn eines türkischen Beamten, der nebenbei Rosinen und Oliven angebaut hat, ließ es sich, im Garten zu arbeiten. Gerne beraten wir Sie auch außerhalb unserer Öffnungszeiten — sprechen Sie uns an!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
