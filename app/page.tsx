import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/biergarten-abend.jpg"
          alt="Peker's Biergarten"
          fill
          className="object-cover"
          priority
        />
        {/* Dark + green gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(42,74,23,0.55) 0%, rgba(20,40,10,0.65) 100%)",
          }}
        />

        <Navbar />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-white/40" />
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">
              Seit über 20 Jahren
            </span>
            <div className="h-px w-16 bg-white/40" />
          </div>

          <h1
            className="text-5xl md:text-7xl text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Peker&apos;s
          </h1>
          <p
            className="text-lg md:text-xl text-white/80 mb-2 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 300 }}
          >
            Mediterrane Küche · Schwaigern
          </p>
          <p
            className="text-base text-white/70 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Türkisch-mediterrane Genüsse, frisch zubereitet mit Liebe –
            im Herzen von Schwaigern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/speisekarte"
              className="px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide transition-all hover:scale-105"
              style={{
                background: "#C5372B",
                fontFamily: "var(--font-lato)",
              }}
            >
              Speisekarte ansehen
            </Link>
            <Link
              href="/#kontakt"
              className="px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide border border-white/40 hover:bg-white/10 transition-all"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Kontakt & Öffnungszeiten
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-10 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── ÜBER UNS ── */}
      <section style={{ background: "#FAF6EE" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: "#F0E8D5" }}
            />
            <Image
              src="/biergarten-tag.jpg"
              alt="Peker's Biergarten"
              width={600}
              height={420}
              className="relative rounded-2xl object-cover w-full"
              style={{ height: "420px" }}
            />
            {/* Decorative accent */}
            <div
              className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "#C5372B" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
          </div>

          <div>
            <p
              className="text-sm tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C5372B", fontFamily: "var(--font-lato)" }}
            >
              Unsere Geschichte
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "#2A4A17",
              }}
            >
              Herzlich<br />Willkommen
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#5C5C5C", fontFamily: "var(--font-lato)" }}
            >
              Vor über 20 Jahren hat das Ehepaar Resat und Türkan Peker die
              Entscheidung getroffen, die TSV-Gaststätte in Schwaigern zu
              übernehmen – eine gute Entscheidung!
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5C5C5C", fontFamily: "var(--font-lato)" }}
            >
              Bei Peker&apos;s schätzen die Gäste die mediterrane Küche, den
              schmucken Biergarten und die Handschrift des Chefs: den Duft
              türkischer Gewürze, nebelige Rosinen und Oliven, immer wieder neu
              entdeckt.
            </p>
            <div className="flex gap-8">
              {[
                { value: "20+", label: "Jahre Erfahrung" },
                { value: "50+", label: "Gerichte" },
                { value: "5", label: "Pers. Catering ab" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "#3D6B22",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-wide opacity-60"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEISEKARTEN-TEASER ── */}
      <section style={{ background: "#F0E8D5" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C5372B", fontFamily: "var(--font-lato)" }}
            >
              Unsere Küche
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)", color: "#2A4A17" }}
            >
              Ein Auszug aus der Karte
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
                cat: "Pizza",
                title: "Pizza Margherita",
                desc: "Tomatensauce, Mozzarella & frisches Basilikum",
                price: "ab 8,42 €",
              },
              {
                img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80",
                cat: "Pasta",
                title: "Tortellini Bolognese",
                desc: "Gefüllte Tortellini mit feiner Rinderhackfleischsauce",
                price: "auf Karte",
              },
              {
                img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80",
                cat: "Salate",
                title: "Chianti Salat",
                desc: "Gemischter Salat mit Kräuter-Vinaigrette",
                price: "auf Karte",
              },
              {
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
                cat: "Fleischgerichte",
                title: "Mediterrane Spezialitäten",
                desc: "Hausgemachte Fleischgerichte nach türkischer Art",
                price: "auf Karte",
              },
              {
                img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
                cat: "Vorspeisen",
                title: "Tagliolinis mit Frischkäse",
                desc: "Fein gefüllt, leicht angebraten mit frischen Kräutern",
                price: "6,50 €",
              },
              {
                img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
                cat: "Catering",
                title: "Mediterranes Buffet",
                desc: "Für 5 Personen ab 97,50 € – wir liefern frei Haus",
                price: "ab 97,50 €",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
                style={{ background: "#FAF6EE" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      background: "#C5372B",
                      color: "#fff",
                      fontFamily: "var(--font-lato)",
                    }}
                  >
                    {item.cat}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg mb-1"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "#2A4A17",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm mb-3 opacity-70"
                    style={{ fontFamily: "var(--font-lato)", color: "#5C5C5C" }}
                  >
                    {item.desc}
                  </p>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#C5372B", fontFamily: "var(--font-lato)" }}
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/speisekarte"
              className="inline-block px-10 py-4 rounded-full text-white font-semibold text-sm tracking-wide transition-all hover:scale-105"
              style={{ background: "#3D6B22", fontFamily: "var(--font-lato)" }}
            >
              Gesamte Speisekarte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATERING BANNER ── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <Image
          src="/innenraum.jpg"
          alt="Peker's Innenraum"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(42,74,23,0.80)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-sm tracking-[0.25em] uppercase mb-3 text-white/60"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Außer-Haus-Service
          </p>
          <h2
            className="text-4xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Mediterrane Küche<br />für Ihr Fest
          </h2>
          <p
            className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Wir liefern frei Haus nach Schwaigern mit allen Tellern,
            Massenbechern und Löffeln. Ab 10 Personen auch weiter.
            Mediterranes Buffet ab 5 Personen – <strong className="text-white">ab 97,50 €</strong>.
          </p>
          <a
            href="tel:071388673"
            className="inline-block px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-105"
            style={{
              background: "#C5372B",
              color: "#fff",
              fontFamily: "var(--font-lato)",
            }}
          >
            Jetzt anfragen: 07138 / 8673
          </a>
        </div>
      </section>

      {/* ── ÖFFNUNGSZEITEN & KONTAKT ── */}
      <section id="kontakt" style={{ background: "#FAF6EE" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C5372B", fontFamily: "var(--font-lato)" }}
            >
              Besuchen Sie uns
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)", color: "#2A4A17" }}
            >
              Öffnungszeiten & Kontakt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            {/* Öffnungszeiten */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "#F0E8D5" }}
            >
              <h3
                className="text-xl mb-5 font-semibold"
                style={{ fontFamily: "var(--font-playfair)", color: "#2A4A17" }}
              >
                Öffnungszeiten
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Montag", time: "Ruhetag", closed: true },
                  { day: "Di – Sa", time: "17:00 – 21:00 Uhr", closed: false },
                  { day: "So & Feiertage", time: "11:30 – 14:00 Uhr\n17:00 – 21:00 Uhr", closed: false },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between items-start py-2.5 border-b"
                    style={{ borderColor: "#E8DEC8" }}
                  >
                    <span
                      className="font-semibold text-sm"
                      style={{ fontFamily: "var(--font-lato)", color: "#2A4A17" }}
                    >
                      {row.day}
                    </span>
                    <span
                      className="text-sm text-right whitespace-pre-line"
                      style={{
                        fontFamily: "var(--font-lato)",
                        color: row.closed ? "#C5372B" : "#5C5C5C",
                      }}
                    >
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3 opacity-50" style={{ fontFamily: "var(--font-lato)" }}>
                Warme Küche bis 20:30 Uhr
              </p>
            </div>

            {/* Kontakt */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "#F0E8D5" }}
            >
              <h3
                className="text-xl mb-5 font-semibold"
                style={{ fontFamily: "var(--font-playfair)", color: "#2A4A17" }}
              >
                Kontakt
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    Icon: MapPin,
                    label: "Adresse",
                    value: "Falltonstraße 10\n74193 Schwaigern",
                    href: "https://maps.google.com/?q=Falltonstraße+10,+74193+Schwaigern",
                  },
                  {
                    Icon: Phone,
                    label: "Telefon",
                    value: "07138 / 8673",
                    href: "tel:071388673",
                  },
                  {
                    Icon: Mail,
                    label: "E-Mail",
                    value: "info@pekers-schwaigern.de",
                    href: "mailto:info@pekers-schwaigern.de",
                  },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "#3D6B22" }}
                    >
                      <c.Icon size={15} color="#fff" strokeWidth={2} />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-wide opacity-50 mb-0.5"
                        style={{ fontFamily: "var(--font-lato)" }}
                      >
                        {c.label}
                      </p>
                      <a
                        href={c.href}
                        className="text-sm whitespace-pre-line leading-relaxed hover:underline"
                        style={{ fontFamily: "var(--font-lato)", color: "#2A4A17" }}
                      >
                        {c.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Anfahrt Info */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "#2A4A17" }}
            >
              <h3
                className="text-xl mb-5 font-semibold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Anfahrt
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                Wir befinden uns direkt am TSV-Sportheim in Schwaigern.
                Ausreichend Parkplätze sind vorhanden.
              </p>
              <a
                href="https://maps.google.com/?q=Falltonstraße+10,+74193+Schwaigern"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ background: "#C5372B", color: "#fff", fontFamily: "var(--font-lato)" }}
              >
                <MapPin size={14} />
                In Google Maps öffnen
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: "420px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1308.9!2d9.0482205!3d49.1446762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479787b246267343%3A0xa998b538bfb470!2sTSV+Sportheim!5e0!3m2!1sde!2sde!4v1716000000000!5m2!1sde!2sde"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peker's Restaurant Standort"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
