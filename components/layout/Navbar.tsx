"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/catering", label: "Catering" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isHome = pathname === "/";
  const transparentMode = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparentMode
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-sm shadow-sm border-b border-cream-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: 72 }}>
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className={`font-logo text-2xl font-bold tracking-wide transition-colors ${
              transparentMode ? "text-white" : "text-olive"
            }`}
          >
            Peker&apos;s
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.25em] -mt-0.5 transition-colors ${
              transparentMode ? "text-white/70" : "text-dark-light"
            }`}
          >
            Mediterrane Küche
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                transparentMode
                  ? "text-white/85 hover:text-white"
                  : pathname === l.href
                  ? "text-terra"
                  : "text-dark hover:text-terra"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-terra transition-all duration-300 ${
                  pathname === l.href && !transparentMode ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <a
            href="tel:071388673"
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
              transparentMode
                ? "border border-white/50 text-white hover:bg-white hover:text-dark"
                : "bg-terra text-white hover:bg-terra-light"
            }`}
          >
            <Phone size={13} />
            Jetzt anrufen
          </a>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${transparentMode ? "text-white" : "text-dark"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-cream-200 px-6 py-6 flex flex-col gap-5">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-xl font-semibold transition-colors hover:text-terra ${
                pathname === l.href ? "text-terra" : "text-dark"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:071388673"
            className="flex items-center gap-2 bg-terra text-white px-5 py-3 rounded-full text-sm font-medium w-fit hover:bg-terra-light transition-colors"
          >
            <Phone size={14} />
            07138 / 8673
          </a>
        </div>
      )}
    </header>
  );
}
