"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        alt="Peker's Restaurant"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay — eher sanft, nicht zu dramatisch */}
      <div className="absolute inset-0 bg-dark/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-16">
        <motion.p
          className="text-white/60 text-xs uppercase tracking-[0.4em] mb-5 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          TSV-Gaststätte Schwaigern · Seit 2004
        </motion.p>

        <motion.h1
          className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Herzlich willkommen bei Peker&apos;s
        </motion.h1>

        <motion.p
          className="text-white/65 text-base md:text-lg max-w-lg mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Mediterrane Küche &amp; gute Gesellschaft — bei uns ist jeder willkommen.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/speisekarte"
            className="bg-terra text-white px-7 py-3 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-terra-light transition-colors"
          >
            Zur Speisekarte
          </Link>
          <a
            href="tel:071388673"
            className="flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-white/10 transition-colors"
          >
            <Phone size={14} />
            07138 / 8673
          </a>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 bg-dark/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] text-white/50 uppercase tracking-widest">
          <span>Mo: Ruhetag</span>
          <span className="hidden sm:block">·</span>
          <span>Di – Fr: 17:00 – 21:00 Uhr</span>
          <span className="hidden sm:block">·</span>
          <span>Sa &amp; So: 11:30 – 21:00 Uhr</span>
        </div>
      </div>
    </section>
  );
}
