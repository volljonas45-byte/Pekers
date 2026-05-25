"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Printer, Mail, Clock, ExternalLink } from "lucide-react";

const hours = [
  { day: "Montag", time: "Ruhetag", closed: true },
  { day: "Dienstag – Freitag", time: "17:00 – 21:00 Uhr" },
  { day: "Samstag", time: "11:30 – 14:00 & 17:00 – 21:00 Uhr", note: "Küche bis 20:00 Uhr" },
  { day: "Sonntag", time: "11:30 – 14:00 & 17:00 – 21:00 Uhr", note: "Küche bis 20:00 Uhr" },
];

export default function ContactCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="bg-white border border-cream-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-display font-bold text-xl text-dark mb-5 flex items-center gap-2">
            <MapPin size={18} className="text-olive" />
            Adresse &amp; Kontakt
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-dark-light shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-dark">Peker's TSV-Gaststätte</p>
                <p className="text-dark-light">Falltorstrase 10<br />74193 Schwaigern</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-dark-light shrink-0" />
              <a href="tel:071388673" className="text-terra hover:underline font-medium">07138 / 8673</a>
            </li>
            <li className="flex items-center gap-3">
              <Printer size={15} className="text-dark-light shrink-0" />
              <span className="text-dark-light">07138 / 8127900</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-dark-light shrink-0" />
              <a href="mailto:info@pekers-schwaigern.de" className="text-terra hover:underline text-xs">
                info@pekers-schwaigern.de
              </a>
            </li>
          </ul>
          <a
            href="https://maps.google.com/?q=Falltorstrase+10,+74193+Schwaigern"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-2 bg-olive text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-olive-dark transition-colors w-fit"
          >
            <ExternalLink size={13} />
            Route berechnen
          </a>
        </div>

        <div className="bg-white border border-cream-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-display font-bold text-xl text-dark mb-5 flex items-center gap-2">
            <Clock size={18} className="text-olive" />
            Öffnungszeiten
          </h2>
          <ul className="space-y-3">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between items-start text-sm border-b border-cream-100 last:border-0 pb-3 last:pb-0 gap-2">
                <span className={`font-medium ${h.closed ? "text-dark-light" : "text-dark"}`}>
                  {h.day}
                </span>
                <div className="text-right">
                  <span className={h.closed ? "text-terra font-medium" : "text-dark-light"}>
                    {h.time}
                  </span>
                  {h.note && <p className="text-xs text-dark-light mt-0.5">{h.note}</p>}
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xs text-dark-light mt-4">
            Gerne beraten wir Sie auch außerhalb unserer Öffnungszeiten — sprechen Sie uns an.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="rounded-2xl overflow-hidden shadow-sm border border-cream-200 min-h-[400px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.3!2d9.1277!3d49.1340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c5e9b5e9b5e9%3A0x9e9b5e9b5e9b5e9b!2sFalltorstrase%2010%2C%2074193%20Schwaigern!5e0!3m2!1sde!2sde!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 400 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peker's Standort auf Google Maps"
        />
      </motion.div>
    </div>
  );
}
