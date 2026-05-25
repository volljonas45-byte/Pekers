"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const hours = [
  { day: "Montag", time: "Ruhetag", closed: true },
  { day: "Di – Fr", time: "17:00 – 21:00 Uhr" },
  { day: "Samstag", time: "11:30 – 14:00 & 17:00 – 21:00 Uhr" },
  { day: "Sonntag", time: "11:30 – 14:00 & 17:00 – 21:00 Uhr" },
];

export default function Location() {
  return (
    <section className="py-24 px-4 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-olive text-xs uppercase tracking-[0.3em] font-medium">So finden Sie uns</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mt-2">
            Besuchen Sie uns
          </h2>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden shadow-sm mb-0"
          style={{ height: 380 }}
        >
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-cream-100 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-cream-100 to-transparent z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.3!2d9.1277!3d49.1340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c5e9b5e9b5e9%3A0x9e9b5e9b5e9b5e9b!2sFalltorstrase%2010%2C%2074193%20Schwaigern!5e0!3m2!1sde!2sde!4v1234567890"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peker's Standort"
          />
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream-200 bg-white rounded-2xl shadow-sm mt-6">
          <motion.div
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 text-olive mb-4">
              <MapPin size={16} />
              <span className="text-xs uppercase tracking-widest font-medium">Adresse</span>
            </div>
            <p className="text-dark font-semibold leading-snug mb-1">Peker's TSV-Gaststätte</p>
            <p className="text-dark-light text-sm">Falltorstrase 10<br />74193 Schwaigern</p>
            <a
              href="https://maps.google.com/?q=Falltorstrase+10,+74193+Schwaigern"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-terra text-sm hover:underline"
            >
              <ExternalLink size={12} />
              Route berechnen
            </a>
          </motion.div>

          <motion.div
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-2 text-olive mb-4">
              <Clock size={16} />
              <span className="text-xs uppercase tracking-widest font-medium">Öffnungszeiten</span>
            </div>
            <ul className="space-y-2">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm gap-2">
                  <span className={`font-medium ${h.closed ? "text-dark-light" : "text-dark"}`}>{h.day}</span>
                  <span className={h.closed ? "text-terra" : "text-dark-light text-right"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div>
              <div className="flex items-center gap-2 text-olive mb-4">
                <Phone size={16} />
                <span className="text-xs uppercase tracking-widest font-medium">Kontakt</span>
              </div>
              <p className="text-dark font-semibold text-lg mb-1">07138 / 8673</p>
              <p className="text-dark-light text-sm">info@pekers-schwaigern.de</p>
              <p className="text-dark-light text-xs mt-3 leading-relaxed">
                Gerne beraten wir Sie auch außerhalb unserer Öffnungszeiten.
              </p>
            </div>
            <a
              href="tel:071388673"
              className="mt-6 flex items-center justify-center gap-2 bg-terra text-white py-3 rounded-full text-sm font-medium hover:bg-terra-light transition-colors"
            >
              <Phone size={14} />
              Jetzt anrufen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
