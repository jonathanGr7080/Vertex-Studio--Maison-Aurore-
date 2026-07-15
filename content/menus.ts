export type Menu = {
  id: string;
  name: string;
  courses: string;
  price: string;
  description: string;
  /** Menu mis en avant — signalé par une note discrète, jamais par un badge promotionnel. */
  featured?: boolean;
};

export const menus: Menu[] = [
  {
    id: "decouverte",
    name: "Découverte",
    courses: "Cinq services",
    price: "85 €",
    description:
      "Une première rencontre avec la cuisine de la maison : produits belges, gestes précis, saison affirmée.",
  },
  {
    id: "aurore",
    name: "Aurore",
    courses: "Sept services",
    price: "115 €",
    description:
      "Le grand parcours de la maison, construit chaque matin autour des récoltes et des arrivages du jour.",
    featured: true,
  },
  {
    id: "vegetal",
    name: "Végétal",
    courses: "Six services",
    price: "95 €",
    description:
      "Le potager au premier plan, sourcé chez nos maraîchers, avec la même exigence que le reste de la carte.",
  },
];

export const pairings = [
  {
    id: "vins",
    name: "Accord mets & vins",
    price: "55 €",
    description: "Une sélection au verre, pensée service par service.",
  },
  {
    id: "sans-alcool",
    name: "Accord sans alcool",
    price: "38 €",
    description: "Infusions froides, jus fermentés et créations de la maison.",
  },
];

export const menuNote =
  "Prix de démonstration, susceptibles d'être ajustés avant publication.";
