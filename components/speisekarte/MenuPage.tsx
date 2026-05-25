"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { menuSections } from "@/lib/menu-data";

const tagColors: Record<string, string> = {
  Beliebt:     "bg-terra/10 text-terra-dark border border-terra/25",
  Klassiker:   "bg-gold/10 text-gold border border-gold/25",
  Empfehlung:  "bg-olive/10 text-olive-dark border border-olive/25",
  Hausgemacht: "bg-cream-200 text-dark-mid border border-cream-300",
};

export default function MenuPage() {
  const [active, setActive] = useState(menuSections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b border-cream-200">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-dark-light hover:text-dark transition-colors duration-200 text-[11px] tracking-[0.18em] uppercase font-medium"
          >
            <ArrowLeft size={13} />
            <span>Zurück</span>
          </Link>

          <div className="text-center">
            <span className="font-logo text-xl text-dark">Peker&apos;s</span>
            <span className="hidden sm:inline text-dark-light text-[10px] tracking-[0.3em] uppercase ml-3 font-medium">
              Speisekarte
            </span>
          </div>

          <a
            href="tel:071388673"
            className="flex items-center gap-2 px-4 py-2 border border-cream-300 text-dark-light text-[11px] tracking-[0.15em] uppercase font-medium hover:border-olive hover:text-olive transition-all duration-200"
          >
            <Phone size={12} />
            <span className="hidden sm:inline">07138 · 8673</span>
          </a>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex gap-0 md:gap-20 pb-40">
        {/* ── Sticky Sidebar ── */}
        <aside className="hidden md:block w-48 shrink-0 pt-16">
          <div className="sticky top-24">
            <p className="text-[9px] tracking-[0.4em] uppercase text-dark-light/50 mb-5 font-medium">
              Kategorien
            </p>
            <nav className="space-y-0.5">
              {menuSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left flex items-center gap-3 py-2.5 transition-all duration-200 group ${
                    active === s.id
                      ? "text-dark"
                      : "text-dark-light/45 hover:text-dark-light"
                  }`}
                >
                  <span
                    className={`h-px shrink-0 transition-all duration-300 ${
                      active === s.id
                        ? "w-5 bg-terra"
                        : "w-2 bg-cream-300 group-hover:w-3.5"
                    }`}
                  />
                  <span className={`text-[12.5px] tracking-wide ${active === s.id ? "font-semibold" : "font-normal"}`}>
                    {s.label}
                  </span>
                </button>
              ))}
            </nav>

            <div className="mt-10 pt-8 border-t border-cream-200">
              <p className="text-[9px] tracking-[0.3em] uppercase text-dark-light/40 mb-2 font-medium">
                Reservierung
              </p>
              <a
                href="tel:071388673"
                className="font-display text-xl font-600 text-dark hover:text-terra transition-colors block leading-tight"
                style={{ fontWeight: 600 }}
              >
                07138 · 8673
              </a>
            </div>
          </div>
        </aside>

        {/* ── Mobile Bottom Tab Bar ── */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/97 backdrop-blur-md border-t border-cream-200 overflow-x-auto">
          <div className="flex px-2 py-1.5 min-w-max">
            {menuSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-3.5 py-2 text-[10px] tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-200 font-medium ${
                  active === s.id
                    ? "text-dark border-b-2 border-terra"
                    : "text-dark-light/40 hover:text-dark-light"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Hauptinhalt ── */}
        <main className="flex-1 pt-14 md:pt-16 min-w-0">
          {/* Seitentitel */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 pb-10 border-b border-cream-200"
          >
            <p className="text-[10px] tracking-[0.45em] uppercase text-terra/70 font-medium mb-4">
              Peker&apos;s · Mediterrane Küche · Schwaigern
            </p>
            <h1
              className="font-display text-dark mb-4 leading-none"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              Speisekarte
            </h1>
            <p className="text-dark-light text-sm">
              Alle Preise inklusive MwSt. · Falltorstrase 10, 74193 Schwaigern
            </p>
          </motion.div>

          {/* Sektionen */}
          <div className="space-y-24">
            {menuSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="scroll-mt-28"
              >
                {/* Sektion Header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55 }}
                  className="mb-8"
                >
                  <div className="flex items-end justify-between gap-4 pb-5 border-b border-cream-200">
                    <div>
                      {section.desc && (
                        <p className="text-[9px] tracking-[0.45em] uppercase text-olive font-medium mb-1.5">
                          {section.desc}
                        </p>
                      )}
                      <h2
                        className="font-display text-dark leading-none"
                        style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
                      >
                        {section.label}
                      </h2>
                    </div>
                    {section.note && (
                      <p className="text-[11px] text-dark-light/60 text-right max-w-[180px] leading-relaxed hidden sm:block">
                        {section.note}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Gerichte */}
                <div>
                  {section.items.map((item, ii) => (
                    <motion.div
                      key={`${item.nr}-${item.name}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.35, delay: Math.min(ii * 0.025, 0.25) }}
                      className="flex items-start justify-between gap-6 py-4 border-b border-cream-100 group hover:bg-cream-100 -mx-3 px-3 transition-colors duration-150"
                    >
                      {/* Links: Nummer + Name + Beschreibung */}
                      <div className="flex gap-5 min-w-0 items-start">
                        <span className="text-[11px] text-cream-300 font-medium w-6 shrink-0 text-right mt-0.5 tabular-nums">
                          {item.nr}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[15px] font-semibold text-dark group-hover:text-dark transition-colors tracking-tight">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className={`text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 font-semibold rounded-sm ${tagColors[item.tag]}`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          {item.desc && (
                            <p className="text-[12.5px] text-dark-light font-light mt-0.5 leading-snug">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Rechts: Preis */}
                      <div className="flex items-center gap-2 shrink-0 mt-0.5">
                        <span
                          className="font-display text-dark tabular-nums"
                          style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "0.01em" }}
                        >
                          {item.price} €
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Fußnote */}
          <div className="mt-20 pt-10 border-t border-cream-200 space-y-2">
            <p className="text-[11px] text-dark-light/60 leading-relaxed">
              Alle Preise inklusive Mehrwertsteuer. Irrtümer und Preisänderungen vorbehalten.
            </p>
            <p className="text-[11px] text-dark-light/60">
              Reservierungen &amp; Anfragen: <a href="tel:071388673" className="underline hover:text-dark transition-colors">07138 · 8673</a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
