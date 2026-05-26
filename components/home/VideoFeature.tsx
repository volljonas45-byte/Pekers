"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/asset-path";

export default function VideoFeature() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-olive text-xs uppercase tracking-[0.3em] font-medium">Erleben Sie uns</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mt-2 mb-5 leading-tight">
              Peker's — das Erlebnis
            </h2>
            <p className="text-dark-light leading-relaxed mb-6">
              Frische Zutaten, mediterrane Aromen und echte Gastfreundschaft — schauen Sie hinter die Kulissen unserer Küche und erleben Sie, was Peker's so besonders macht.
            </p>
            <div className="flex gap-4 text-sm">
              <div className="border-l-2 border-olive pl-3">
                <p className="font-semibold text-dark">Täglich frisch</p>
                <p className="text-dark-light text-xs">Zubereitet mit regionalen Zutaten</p>
              </div>
              <div className="border-l-2 border-terra pl-3">
                <p className="font-semibold text-dark">Mediterrane Tradition</p>
                <p className="text-dark-light text-xs">Rezepte aus dem Süden Europas</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl bg-dark-mid"
              style={{ maxWidth: 340, width: "100%" }}
            >
              {!playing && (
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-dark/20 hover:bg-dark/10 transition-colors group"
                  aria-label="Video abspielen"
                >
                  <div className="bg-white/95 rounded-full p-5 shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-terra ml-1" fill="currentColor" />
                  </div>
                </button>
              )}
              <video
                src={assetPath("/images/kampagnenvideo.mp4")}
                controls={playing}
                autoPlay={playing}
                playsInline
                className="w-full"
                style={{ aspectRatio: "9/16", objectFit: "cover" }}
                poster={assetPath("/images/hero1.png")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
