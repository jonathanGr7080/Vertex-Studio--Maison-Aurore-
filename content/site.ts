export const siteConfig = {
  name: "Maison Aurore",
  signature: "La gastronomie au rythme des saisons, au cœur de Bruges.",
  locationLabel: "Restaurant gastronomique · Bruges",
  demoNotice:
    "Concept de démonstration conçu par Vertex Studio. Maison Aurore n'est pas un établissement réel.",
} as const;

export const navLinks = [
  { label: "Expérience", href: "#experience" },
  { label: "Menus", href: "#menus" },
  { label: "Le chef", href: "#chef" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
] as const;

export const practicalInfo = {
  addressLines: ["Quai des Meuniers 12", "8000 Bruges, Belgique"],
  addressNote: "Adresse fictive — concept de démonstration.",
  phoneDisplay: "+32 50 00 00 00",
  phoneNote: "Numéro d'exemple, non attribué.",
  hours: [
    { days: "Mardi — Samedi", time: "12h00 – 13h30 · 19h00 – 21h30" },
    { days: "Dimanche & Lundi", time: "Fermé" },
  ],
  access:
    "À dix minutes à pied de la Markt, sur les quais calmes du vieux Bruges. Stationnement public au Parking Centrum, à cinq minutes.",
} as const;
