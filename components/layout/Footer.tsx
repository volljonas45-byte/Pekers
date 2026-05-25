import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const nav = [
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/catering", label: "Catering" },
  { href: "/kontakt", label: "Kontakt" },
];

const hours = [
  { day: "Mo", note: "Ruhetag" },
  { day: "Di – Fr", note: "17:00 – 21:00 Uhr" },
  { day: "Sa & So", note: "11:30 – 21:00 Uhr" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/70 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-logo text-2xl font-bold text-olive-light mb-1">Peker&apos;s</p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-cream/40 mb-4">Mediterrane Küche</p>
          <p className="text-sm leading-relaxed text-cream/50">
            TSV-Gaststätte Schwaigern — authentische mediterrane Küche und Catering-Service seit über 20 Jahren.
          </p>
          <div className="mt-6 flex gap-3">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-cream/40 hover:text-cream/80 transition-colors uppercase tracking-wide"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.25em] text-cream/40 mb-5">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={13} className="text-olive-light shrink-0 mt-0.5" />
              <span>Falltorstrase 10<br />74193 Schwaigern</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={13} className="text-olive-light shrink-0" />
              <a href="tel:071388673" className="hover:text-cream transition-colors">07138 / 8673</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={13} className="text-olive-light shrink-0" />
              <a href="mailto:info@pekers-schwaigern.de" className="hover:text-cream transition-colors text-xs">
                info@pekers-schwaigern.de
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.25em] text-cream/40 mb-5">Öffnungszeiten</h3>
          <ul className="space-y-2 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                <span className="font-medium text-cream/70">{h.day}</span>
                <span className="text-cream/45 text-xs">{h.note}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-start gap-2 text-xs text-cream/30">
            <Clock size={11} className="shrink-0 mt-0.5" />
            Küche Sa & So bis 20:00 Uhr
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-cream/25">
          <span>© {new Date().getFullYear()} Peker&apos;s Mediterrane Küche · Schwaigern</span>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-cream/60 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-cream/60 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
