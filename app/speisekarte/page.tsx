import Image from "next/image";
import Link from "next/link";
import {
  Salad,
  Pizza,
  Leaf,
  Soup,
  LayoutGrid,
  Flame,
  Beef,
  Cookie,
  Coffee,
  Beer,
  Wine,
  GlassWater,
  Martini,
  UtensilsCrossed,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type MenuItem = { name: string; desc?: string; price?: string; price2?: string };
type Category = {
  title: string;
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  items: MenuItem[];
};

const menu: Category[] = [
  {
    title: "Vorspeisen",
    Icon: UtensilsCrossed,
    items: [
      { name: "Tagliolinis gefüllt mit Frischkäse", price: "6,50 €" },
      { name: "Tagliolinis mit Thunfisch und Zwiebeln", price: "7,90 €" },
      { name: "Mozzarella-Tomaten", desc: "Büffelmozzarella mit frischen Tomaten", price: "7,20 €" },
      { name: "Grüner Salat", desc: "Mit verschiedenen Salatzutaten", price: "7,90 €" },
      { name: "Beilagensalat", desc: "Kleiner gemischter Salat", price: "3,50 €" },
      { name: "Tomatensalat mit Thunfisch", desc: "Mit Frühlingszwiebeln", price: "9,20 €" },
      { name: "Ahir Salat", desc: "Tomaten, Gurken, Paprika, Hähnchenfleisch, Basmati, Olivenöl", price: "12,90 €" },
    ],
  },
  {
    title: "Pizza",
    Icon: Pizza,
    items: [
      { name: "Pizza Margherita", desc: "Tomatensauce, Mozzarella", price: "8,42 €", price2: "12,00 €" },
      { name: "Pizza Hawaiiana", desc: "Schinken, Ananas", price: "10,50 €", price2: "15,50 €" },
      { name: "Pizza Calzone", desc: "Gefüllt, gebacken", price: "10,50 €", price2: "15,50 €" },
      { name: "Pizza Feuerwehr", desc: "Mit Pepperoni", price: "10,50 €", price2: "15,00 €" },
      { name: "Pizza Schinken", price: "10,50 €", price2: "15,00 €" },
      { name: "Pizza Champignons", price: "10,50 €", price2: "15,50 €" },
      { name: "Pizza Bella Italia", desc: "Hausgemachte Spezialitäten", price: "10,90 €", price2: "15,90 €" },
      { name: "Pizza Funghi con Speck", desc: "Pilze, Speck, Mozzarella", price: "11,90 €", price2: "15,90 €" },
      { name: "Pizza Caprese", desc: "Tomaten, Mozzarella, Basilikum", price: "10,90 €", price2: "15,90 €" },
      { name: "Pizza Verde", desc: "Grünes Gemüse, Kräuter", price: "10,90 €", price2: "15,90 €" },
      { name: "Pizza Vegetariana", desc: "Frisches Gemüse der Saison", price: "10,90 €", price2: "15,90 €" },
      { name: "Pizzaroni", desc: "Mit Käse", price: "6,90 €" },
      { name: "Fraschini Special", desc: "Mit Eiern & Schinken", price: "9,49 €" },
    ],
  },
  {
    title: "Salate",
    Icon: Salad,
    items: [
      { name: "Beilagensalat", price: "3,50 €", price2: "5,50 €" },
      { name: "Tomatensalat", price: "6,50 €" },
      { name: "Grüner Salat", price: "6,50 €", price2: "8,50 €" },
      { name: "Tomatensalat mit Thunfisch", desc: "Mit Frühlingszwiebeln", price: "9,20 €" },
      { name: "Ahir Salat", desc: "Tomaten, Gurken, Paprika, Hähnchen, Basmati, Olivenöl", price: "12,90 €" },
      { name: "Chianti Salat", desc: "Gemischter Salat mit Kräuter-Vinaigrette", price: "auf Anfrage" },
      { name: "Hühnchenbrustsalat", desc: "Grüner Salat, Karotten, geröstetem Paprika, Kräutern", price: "13,50 €" },
    ],
  },
  {
    title: "Tortellini",
    Icon: Soup,
    items: [
      { name: "Tortellini Bolognese", desc: "Mit Rinderhackfleischsauce" },
      { name: "Tortellini Napolitana", desc: "Mit Tomatensauce und frischen Kräutern" },
      { name: "Tortellini Gorgonzola", desc: "In Gorgonzolasoße" },
      { name: "Tortellini mit Lachs und Spinat", desc: "In Sahnesauce" },
      { name: "Tortellini Agil Scampi", desc: "Mit Scampi, Öl und Knoblauch" },
    ],
  },
  {
    title: "Brett-Pizza",
    Icon: LayoutGrid,
    items: [
      { name: "Familienspezial", desc: "Mit Tomatensauce und Eier-Käse-Belag", price: "23,00 €" },
      { name: "Portofino", desc: "Frische Zutaten auf knusprigem Boden" },
    ],
  },
  {
    title: "Specialità al Forno",
    Icon: Flame,
    items: [
      { name: "Penne al Forno", desc: "Mit Schinken, Champignons, Rahmsauce, überbacken" },
      { name: "Spaghetti Bolognese", desc: "Mit Rinderhackfleischsauce" },
      { name: "Spaghetti Napoli", desc: "Mit frischer Tomatensauce" },
      { name: "Spaghetti Pecatora", desc: "Mit Meeresfrüchten" },
      { name: "Spaghetti Agil Scampi", desc: "Mit Scampi, Knoblauch und Öl" },
      { name: "Penne Arabiata", desc: "Mit scharfer Tomatensauce" },
      { name: "Penne Primavera", desc: "Mit frischem Gemüse" },
      { name: "Penne Principessa", desc: "Mit Champignons, Frischen Kräutern, Champagner-Rahmsauce" },
      { name: "Penne Vegetariana", desc: "Mit Mozzarella, Gorgonzola, Edam" },
    ],
  },
  {
    title: "Fleischgerichte",
    Icon: Beef,
    items: [
      { name: "Parmesanschnitzel", desc: "Mit Parmesan und Spaghetti" },
      { name: "Zigeunerschnitzel", desc: "Mit Paprikasauce" },
      { name: "Schnitzel Wiener Art", desc: "Klassisch paniert" },
      { name: "Nürnberger Würstchen", desc: "Mit Champignon-Rahmsauce" },
    ],
  },
  {
    title: "Für die kleinen Hunger",
    Icon: Cookie,
    items: [
      { name: "Pizza-Snack mit Ketschup", price: "5,80 €" },
      { name: "Pommes-Schnitzel", price: "7,90 €" },
      { name: "Pommes frites", price: "3,50 €" },
    ],
  },
  {
    title: "Alkoholfreie Getränke",
    Icon: GlassWater,
    items: [
      { name: "Flasche Mineralwasser 0,7l", price: "3,60 €" },
      { name: "Taittinger Gourmet Medium", price: "3,70 €" },
      { name: "Saurer Sprudel", price: "2,50 €" },
      { name: "Coca Cola", price: "2,50 €" },
      { name: "Cola Light", price: "2,50 €" },
      { name: "Apfelschorle", price: "2,50 €" },
      { name: "Apfelsaft", price: "3,50 €" },
      { name: "Orangensaft", price: "3,50 €" },
    ],
  },
  {
    title: "Warme Getränke",
    Icon: Coffee,
    items: [
      { name: "Tasse Espresso", price: "2,50 €" },
      { name: "Espresso Doppio", price: "3,80 €" },
      { name: "Tasse Cappuccino", price: "3,00 €" },
      { name: "Milchkaffee", price: "3,50 €" },
      { name: "Tasse Milchkaffee", price: "3,50 €" },
      { name: "Verschiedene Teesorten in Glas", price: "2,50 €" },
    ],
  },
  {
    title: "Biere vom Fass & Flasche",
    Icon: Beer,
    items: [
      { name: "Schwäbisches Pils (Flasche)", price: "3,20 €" },
      { name: "Alkoholfreies Weizen", price: "3,20 €" },
      { name: "Hefe Dunkel", price: "3,80 €" },
      { name: "Hefe Radler", price: "3,50 €" },
      { name: "Erdinger Weissbier", price: "3,80 €" },
    ],
  },
  {
    title: "Weine",
    Icon: Wine,
    items: [
      { name: "Schwäbischer Trollinger mit Lemberger", desc: "Trocken / Halbtrocken", price: "3,50 €" },
      { name: "Barbera del Monferrato trocken", desc: "DOC – Premium", price: "3,90 €" },
      { name: "Lambrusco dell Emilia", desc: "Rot / Rosé", price: "3,40 €" },
    ],
  },
  {
    title: "Sekt, Aperitif & Cocktails",
    Icon: Martini,
    items: [
      { name: "Hugo Premium", desc: "Prosecco, Holunderblüte, Minze, Limette", price: "6,90 €" },
      { name: "Aperol Spritz", price: "6,90 €" },
      { name: "Liliet Wild Berry", desc: "Mit Bitter Lemon und Wild Berry", price: "6,90 €" },
      { name: "Lillet Blanc", desc: "Mit Tonic Water, Holunderblüten, Gurke, Minze", price: "6,90 €" },
      { name: "Non Dry", price: "20,50 €" },
      { name: "Glas Rosé", price: "5,00 €" },
    ],
  },
];

export default function Speisekarte() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
          alt="Speisekarte"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(42,74,23,0.4) 0%, rgba(20,40,10,0.75) 100%)",
          }}
        />
        <Navbar />
        <div className="relative z-10 text-center pb-12 px-6">
          <p
            className="text-xs tracking-[0.3em] uppercase text-white/60 mb-2"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Peker&apos;s Mediterrane Küche
          </p>
          <h1
            className="text-4xl md:text-6xl text-white"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Unsere Speisekarte
          </h1>
        </div>
      </section>

      {/* Kategorie-Navigation */}
      <nav
        className="sticky top-0 z-40 border-b overflow-x-auto"
        style={{ background: "#FAF6EE", borderColor: "#E8DEC8" }}
      >
        <div className="flex gap-1 px-4 py-2 max-w-6xl mx-auto w-max md:w-auto">
          {menu.map((cat) => {
            const id = cat.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/ä/g, "ae")
              .replace(/ö/g, "oe")
              .replace(/ü/g, "ue");
            return (
              <a
                key={cat.title}
                href={`#${id}`}
                className="menu-nav-link flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                <cat.Icon size={12} strokeWidth={2} />
                {cat.title}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Speisekarte Inhalt */}
      <main style={{ background: "#FAF6EE" }} className="py-14 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {menu.map((cat) => {
            const id = cat.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/ä/g, "ae")
              .replace(/ö/g, "oe")
              .replace(/ü/g, "ue");
            return (
              <section key={cat.title} id={id}>
                {/* Kategorie-Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#3D6B22" }}
                  >
                    <cat.Icon size={16} strokeWidth={2} color="#fff" />
                  </div>
                  <h2
                    className="text-3xl"
                    style={{ fontFamily: "var(--font-playfair)", color: "#2A4A17" }}
                  >
                    {cat.title}
                  </h2>
                  <div className="flex-1 h-px" style={{ background: "#E8DEC8" }} />
                  {cat.items[0]?.price2 && (
                    <div
                      className="text-xs opacity-50 whitespace-nowrap"
                      style={{ fontFamily: "var(--font-lato)" }}
                    >
                      Klein / Groß
                    </div>
                  )}
                </div>

                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ background: "#fff", border: "1px solid #EDE4D0" }}
                >
                  {cat.items.map((item, i) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start gap-4 py-4 px-5 transition-colors hover:bg-amber-50/40"
                      style={{
                        borderBottom: i < cat.items.length - 1 ? "1px solid #F0E8D5" : "none",
                      }}
                    >
                      <div className="flex-1">
                        <p
                          className="font-semibold text-sm"
                          style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                        >
                          {item.name}
                        </p>
                        {item.desc && (
                          <p
                            className="text-xs mt-0.5 opacity-55"
                            style={{ fontFamily: "var(--font-lato)", color: "#5C5C5C" }}
                          >
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        {item.price && (
                          <span
                            className="text-sm font-bold"
                            style={{ color: "#C5372B", fontFamily: "var(--font-lato)" }}
                          >
                            {item.price}
                          </span>
                        )}
                        {item.price2 && (
                          <span
                            className="text-xs block mt-0.5"
                            style={{ fontFamily: "var(--font-lato)", color: "#999" }}
                          >
                            / {item.price2}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Catering Hinweis */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "#2A4A17" }}
          >
            <p
              className="text-2xl text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mediterranes Buffet – Außer-Haus-Service
            </p>
            <p
              className="text-white/70 text-sm mb-6 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Wir liefern frei Haus ab 5 Personen – mediterranes Buffet mit
              Teigrölchen, Caprese, gebratenem Gemüse, Frikadellen, Zaziki,
              Baguette und mehr. Ab 5 Pers.:{" "}
              <strong className="text-white">97,50 €</strong>, für 10 Pers.:{" "}
              <strong className="text-white">195,– €</strong>. Ab 10 Personen
              auch außerhalb Schwaigerns.
            </p>
            <a
              href="tel:071388673"
              className="inline-block px-8 py-3 rounded-full font-semibold text-sm"
              style={{ background: "#C5372B", color: "#fff", fontFamily: "var(--font-lato)" }}
            >
              Anfragen: 07138 / 8673
            </a>
          </div>
        </div>
      </main>

      {/* Zurück zur Startseite */}
      <div
        className="text-center py-8 border-t"
        style={{ background: "#F0E8D5", borderColor: "#E8DEC8" }}
      >
        <Link
          href="/"
          className="text-sm hover:underline"
          style={{ color: "#3D6B22", fontFamily: "var(--font-lato)" }}
        >
          ← Zurück zur Startseite
        </Link>
      </div>

      <Footer />
    </>
  );
}
