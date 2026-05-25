import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#2A4A17", color: "#FAF6EE" }}>
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Image
            src="/logo.png"
            alt="Peker's Mediterrane Küche"
            width={120}
            height={55}
            className="object-contain mb-3"
            style={{  }}
          />
          <p className="text-xs tracking-widest uppercase opacity-60 mb-4">
            Mediterrane Küche
          </p>
          <p className="text-sm opacity-70 leading-relaxed">
            Seit über 20 Jahren Ihre mediterrane Gaststätte in Schwaigern.
            Türkisch-mediterrane Küche mit Herz und Leidenschaft.
          </p>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h3
            className="text-lg mb-4 font-semibold"
            style={{ fontFamily: "var(--font-playfair)", color: "#FAF6EE" }}
          >
            Öffnungszeiten
          </h3>
          <table className="text-sm opacity-80 w-full">
            <tbody className="space-y-1">
              {[
                { day: "Montag", time: "Ruhetag" },
                { day: "Di – Sa", time: "17:00 – 21:00 Uhr" },
                { day: "So & Feiertag", time: "11:30 – 14:00 & 17:00 – 21:00" },
              ].map((row) => (
                <tr key={row.day} className="border-b border-white/10">
                  <td className="py-1.5 pr-4 font-medium">{row.day}</td>
                  <td className="py-1.5 opacity-80">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs opacity-50 mt-3">Warme Küche bis 20:30 Uhr</p>
        </div>

        {/* Kontakt */}
        <div id="kontakt">
          <h3
            className="text-lg mb-4 font-semibold"
            style={{ fontFamily: "var(--font-playfair)", color: "#FAF6EE" }}
          >
            Kontakt
          </h3>
          <ul className="text-sm opacity-80 space-y-2">
            <li>Falltonstraße 10, 74193 Schwaigern</li>
            <li>
              <a href="tel:071388673" className="hover:opacity-100 transition-opacity">
                Tel: 07138 / 8673
              </a>
            </li>
            <li>
              <a href="tel:071388127900" className="hover:opacity-100 transition-opacity">
                Fax: 07138 / 8127900
              </a>
            </li>
            <li>
              <a
                href="mailto:info@pekers-schwaigern.de"
                className="hover:opacity-100 transition-opacity"
              >
                info@pekers-schwaigern.de
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-t text-center py-4 text-xs opacity-40"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        © {new Date().getFullYear()}{" "}Peker&apos;s · Mediterrane Küche · Schwaigern
      </div>
    </footer>
  );
}
