"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Peker's Mediterrane Küche"
            width={130}
            height={60}
            className="object-contain drop-shadow-md"
            style={{  }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Startseite", href: "/" },
            { label: "Speisekarte", href: "/speisekarte" },
            { label: "Kontakt", href: "/#kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-white text-sm tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:071388673"
            className="px-5 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105"
            style={{
              background: "#C5372B",
              color: "#fff",
              fontFamily: "var(--font-lato)",
            }}
          >
            07138 / 8673
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(42,74,23,0.97)" }}>
          {[
            { label: "Startseite", href: "/" },
            { label: "Speisekarte", href: "/speisekarte" },
            { label: "Kontakt", href: "/#kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white text-base py-1 transition-colors border-b border-white/10"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
