export type MenuItem = {
  nr: string;
  name: string;
  desc?: string;
  price: string;
  tag?: "Beliebt" | "Klassiker" | "Empfehlung" | "Hausgemacht";
};

export type MenuSection = {
  id: string;
  label: string;
  desc?: string;
  note?: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    items: [
      { nr: "01", name: "Tagliolini", desc: "Gefüllt mit Frischkäse und Frühlingszwiebeln", price: "9,50" },
      { nr: "02", name: "Haussalat-Tomaten", desc: "Frischer Haussalat mit Tomaten und Zwiebeln", price: "6,50" },
      { nr: "03", name: "Caprese", desc: "Mozzarella, frische Tomaten, Basilikum", price: "11,50", tag: "Klassiker" },
    ],
  },
  {
    id: "salate",
    label: "Salate",
    items: [
      { nr: "10", name: "Beilagensalat", desc: "Kleiner gemischter Salat", price: "4,50" },
      { nr: "11", name: "Gemischter Salat", desc: "Großer gemischter Salat mit Hausdressing", price: "8,50", tag: "Beliebt" },
      { nr: "12", name: "Griechischer Salat", desc: "Feta, Oliven, Tomaten, Gurken, Zwiebeln", price: "10,50", tag: "Klassiker" },
      { nr: "13", name: "Ahrröstsalat", desc: "Gemischter Salat mit Röstzwiebeln und Speck", price: "10,50" },
      { nr: "14", name: "Tomatensalat", desc: "Mit Thunfisch, Zwiebeln und Frühlingszwiebeln", price: "9,50" },
      { nr: "15", name: "Tuna Salat", desc: "Thunfisch, Mais, Tomaten", price: "9,50" },
      { nr: "16", name: "Sweet Salat", desc: "Hähnchenbrust, Champignons, Sauerrahm und Ei", price: "12,50", tag: "Empfehlung" },
      { nr: "17", name: "Hühnchenbrustsalat", desc: "Kartoffel, Hähnchenbrust, Champignons und Tomaten", price: "12,50" },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    note: "Alle Pizzen auch als Brett-Pizza erhältlich",
    items: [
      { nr: "20", name: "Feuerwehr", desc: "Mit Pepperoni", price: "10,20" },
      { nr: "21", name: "Hawaiiana", desc: "Schinken und Ananas", price: "10,20", tag: "Beliebt" },
      { nr: "22", name: "Colombo", desc: "Hähnchenbrust, frische Champignons", price: "10,20" },
      { nr: "23", name: "Bella Italia", desc: "Salami, Peperoni und Schinken", price: "10,20", tag: "Klassiker" },
      { nr: "24", name: "Napoli", desc: "Hähnchen, Thunfisch und Zwiebeln", price: "10,20" },
      { nr: "25", name: "Musica", desc: "Hähnchenbrust, Rucola, Champignons, Zwiebeln, getrocknete Tomaten, Oliven", price: "12,20", tag: "Empfehlung" },
      { nr: "26", name: "Caprese", desc: "Mozzarella, Tomaten, Champignons, Paprika", price: "10,20" },
      { nr: "27", name: "Colosseo", desc: "Hähnchenbrust, Schinkenwürfel, Champignons, Zwiebeln, Peperoni", price: "12,50", tag: "Beliebt" },
      { nr: "28", name: "Gorgonzola", desc: "Schinken und Gorgonzola", price: "10,50" },
      { nr: "29", name: "Champignons", desc: "Mit frischen Champignons", price: "10,20" },
      { nr: "30", name: "Vegetariana", desc: "Mit verschiedenem Gemüse", price: "10,20" },
      { nr: "31", name: "Pizzabrot", desc: "Mit Käse (4 Stück)", price: "3,90" },
    ],
  },
  {
    id: "pasta-forno",
    label: "Pasta al Forno",
    desc: "Überbackene Pasta-Spezialitäten aus dem Ofen",
    items: [
      { nr: "40", name: "Parmigiana Napoli", desc: "Mit Schinken, Ricotta und Champignons", price: "14,50", tag: "Empfehlung" },
      { nr: "41", name: "Pasta Bolognese", desc: "Mit Rinderhackfleischsauce, überbacken", price: "13,50" },
      { nr: "42", name: "Penne al Forno", desc: "Mit Schinken, Ricotta und Champignons", price: "13,50" },
      { nr: "43", name: "Spaghetti alle Vongole", desc: "Mit Venusmuscheln", price: "16,20" },
    ],
  },
  {
    id: "tortellini",
    label: "Tortellini",
    items: [
      { nr: "50", name: "al Ragù", desc: "Mit Rinderhackfleischsauce", price: "14,50", tag: "Beliebt" },
      { nr: "51", name: "al Pesto", desc: "In Sahnesauce mit Pesto", price: "13,50" },
      { nr: "52", name: "Gorgonzola", desc: "In cremiger Gorgonzolasauce", price: "13,50", tag: "Empfehlung" },
      { nr: "53", name: "In Brühe", desc: "In klarer Brühe", price: "8,50" },
    ],
  },
  {
    id: "spaghetti",
    label: "Spaghetti",
    items: [
      { nr: "60", name: "Napoli", desc: "Mit frischer Tomatensauce", price: "9,50", tag: "Klassiker" },
      { nr: "61", name: "Bolognese", desc: "Mit Rinderhackfleischsauce", price: "12,50", tag: "Beliebt" },
      { nr: "62", name: "Carbonara", desc: "Mit Sahne, Schinken und Ei", price: "12,50", tag: "Beliebt" },
      { nr: "63", name: "Pescatore", desc: "Mit Meeresfrüchten", price: "15,50" },
      { nr: "64", name: "alle Vongole", desc: "Mit Venusmuscheln", price: "15,50" },
      { nr: "65", name: "Aglio Scampi", desc: "Mit Scampi und Knoblauch in Salversauce", price: "15,50", tag: "Empfehlung" },
    ],
  },
  {
    id: "penne",
    label: "Penne",
    items: [
      { nr: "70", name: "Bolognese", desc: "Mit Rinderhackfleischsauce", price: "12,50" },
      { nr: "71", name: "Arrabiata", desc: "Tomaten, Peperoni, Zwiebeln und Knoblauch", price: "11,50" },
      { nr: "72", name: "Primavera", desc: "Mit Mozzarella, Gnocchi und frischen Champignons", price: "14,50", tag: "Empfehlung" },
      { nr: "73", name: "Principessa", desc: "Mit Schinken, Tomaten und Sahne", price: "13,50" },
    ],
  },
  {
    id: "fleisch",
    label: "Fleischgerichte",
    items: [
      { nr: "80", name: "Parmesanschnitzel", desc: "Vom Kalb in Ketchup-Champignonsauce", price: "18,50", tag: "Empfehlung" },
      { nr: "81", name: "Zigeunerschnitzel", desc: "Mit Paprikasauce und Salatbeilage", price: "18,50" },
      { nr: "82", name: "Rumpsteak", desc: "Mit Salatbeilage und Beilagen nach Wahl", price: "18,50" },
      { nr: "83", name: "Käse-Schnitzel", desc: "Mit Ketchup und Salatbeilage", price: "11,50" },
      { nr: "84", name: "Scampi-Schnitzel", desc: "Mit Ketchup und Salatbeilage", price: "11,50" },
    ],
  },
  {
    id: "getraenke",
    label: "Getränke",
    note: "Alle Preise inkl. MwSt.",
    items: [
      { nr: "—", name: "Mineralwasser", desc: "0,7 l Flasche", price: "4,80" },
      { nr: "—", name: "Saurer Sprudel", desc: "0,4 l", price: "3,90" },
      { nr: "—", name: "Coca Cola / Fanta / Sprite", desc: "0,4 l", price: "3,80" },
      { nr: "—", name: "Apfelsaftschorle", desc: "0,4 l", price: "3,90" },
      { nr: "—", name: "Texas Espresso", desc: "Kleiner Espresso", price: "2,50" },
      { nr: "—", name: "Cappuccino", desc: "", price: "3,80" },
      { nr: "—", name: "Milchkaffee", desc: "", price: "3,80" },
      { nr: "—", name: "Tee", desc: "Verschiedene Sorten", price: "3,50" },
      { nr: "—", name: "Pils vom Fass", desc: "0,3 l / 0,5 l", price: "3,20 / 4,20" },
      { nr: "—", name: "Hefeweizen", desc: "0,5 l", price: "4,80" },
      { nr: "—", name: "Hauswein", desc: "Weiß / Rosé / Rot, 0,2 l", price: "4,20" },
      { nr: "—", name: "Schweigerer Riesling", desc: "Qualitätswein trocken, 0,2 l", price: "5,20" },
      { nr: "—", name: "Sekt Brut", desc: "0,2 l Piccolo", price: "9,20" },
      { nr: "—", name: "Hugo Prosecco", desc: "Holunderblüte, Limette, Minze", price: "6,00" },
      { nr: "—", name: "Aperol Spritz", desc: "Aperol, Prosecco und Wasser", price: "6,50" },
      { nr: "—", name: "Lillet Wild Berry", desc: "Lillet und Wild Berry Sekt", price: "7,50" },
    ],
  },
];
