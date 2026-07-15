export type CareerStep = {
  period: string;
  place: string;
  detail: string;
};

export type Chef = {
  /** Personnage de démonstration — aucune biographie réelle. */
  name: string;
  role: string;
  demoNotice: string;
  intro: string;
  career: CareerStep[];
  vision: string[];
  quote: string;
};

export const chef: Chef = {
  name: "Julien Moreau",
  role: "Chef de cuisine",
  demoNotice: "Personnage de démonstration — cette biographie est fictive.",
  intro:
    "Julien Moreau cuisine comme on tient un carnet de saison : au présent, au plus près de ce que la terre et la mer offrent le matin même. Maison Aurore est né de l'envie de revenir à Bruges et d'y poser une table calme, sans esbroufe.",
  career: [
    {
      period: "Les débuts",
      place: "Côte belge",
      detail:
        "Apprentissage auprès de cuisiniers attachés au produit brut et aux cuissons justes.",
    },
    {
      period: "Les années de métier",
      place: "France & Flandre",
      detail:
        "Plusieurs maisons exigeantes, où il apprend la rigueur du geste et le sens du service.",
    },
    {
      period: "Aujourd'hui",
      place: "Bruges",
      detail:
        "Retour sur les quais du vieux Bruges pour ouvrir Maison Aurore et cuisiner son territoire.",
    },
  ],
  vision: [
    "Sa cuisine part du produit, jamais d'une idée figée. Ce sont les maraîchers, les pêcheurs et les affineurs de la région qui donnent le tempo ; la carte se contente de suivre.",
    "L'assiette cherche la clarté plutôt que la démonstration : peu d'éléments, des cuissons précises, une saveur qui reste en mémoire. L'hospitalité, elle, se joue en salle — attentive, jamais appuyée.",
  ],
  quote:
    "Un menu ne se fige jamais. Il suit les saisons, et les mains qui les font pousser.",
};
