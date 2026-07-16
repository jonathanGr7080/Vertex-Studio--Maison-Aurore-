export type Dish = {
  title: string;
  detail: string;
};

export type Menu = {
  id: string;
  name: string;
  /** Courte promesse éditoriale. */
  promise: string;
  courses: string;
  price: string;
  dishes: Dish[];
  /** Menu signature — mis en avant discrètement, jamais par un badge promotionnel. */
  featured?: boolean;
};

export const menus: Menu[] = [
  {
    id: "decouverte",
    name: "Menu Découverte",
    promise: "Une première rencontre avec la maison, en cinq temps.",
    courses: "Cinq services",
    price: "85 €",
    dishes: [
      { title: "Betterave des polders", detail: "fromage frais, aneth, vinaigre de cidre" },
      { title: "Cabillaud de la côte", detail: "poireau brûlé, beurre blanc, câpres" },
      { title: "Cochon fermier", detail: "chou de saison, jus corsé au genièvre" },
      { title: "Affinages des Polders", detail: "trois fromages au lait cru, chutney du moment" },
      { title: "Poire & sarrasin", detail: "miel de la région, crème légère" },
    ],
  },
  {
    id: "signature",
    name: "Menu Signature",
    promise: "Le grand parcours de la maison, écrit chaque matin avec la récolte.",
    courses: "Sept services",
    price: "125 €",
    featured: true,
    dishes: [
      { title: "Huître de Zélande", detail: "pomme verte, sureau, échalote" },
      { title: "Saint-Jacques snackée", detail: "topinambour, noisette, beurre noisette" },
      { title: "Anguille fumée", detail: "céleri, pomme, bouillon clair" },
      { title: "Turbot de la côte", detail: "coquillages, safran des polders, poireau" },
      { title: "Pigeon rôti", detail: "betterave, genièvre, jus serré" },
      { title: "Affinages des Polders", detail: "sélection du moment, pain au levain" },
      { title: "Chocolat & café", detail: "lait ribot, sarrasin torréfié" },
    ],
  },
  {
    id: "vegetal",
    name: "Menu Végétal",
    promise: "Le potager au premier plan, avec la même exigence que le reste de la carte.",
    courses: "Six services",
    price: "95 €",
    dishes: [
      { title: "Jardin de crudités", detail: "herbes des polders, huile de colza, noisette" },
      { title: "Courge rôtie", detail: "sauge, graines, bouillon fumé" },
      { title: "Céleri braisé", detail: "levure, pomme, jus végétal corsé" },
      { title: "Champignons & orge", detail: "oignon doux, bouillon de saison" },
      { title: "Affinages des Polders", detail: "fromages au lait cru, chutney du moment" },
      { title: "Poire & sarrasin", detail: "miel de la région, crème légère" },
    ],
  },
];

export type Pairing = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export const pairings: Pairing[] = [
  {
    id: "vins",
    name: "Accord mets & vins",
    price: "55 €",
    description: "Une sélection au verre, choisie service par service par notre équipe de salle.",
  },
  {
    id: "sans-alcool",
    name: "Accord sans alcool",
    price: "38 €",
    description: "Infusions froides, jus fermentés et créations de la maison, pensés au même rythme.",
  },
];

export const allergyInfo =
  "Allergies et intolérances : signalez-les à la réservation ou à votre arrivée. La brigade adapte les services concernés sans rompre le fil du menu. Une alternative végétale complète est proposée en permanence.";

export const menuNote =
  "Menus et prix sont des contenus de démonstration, susceptibles d'être ajustés avant toute publication.";
