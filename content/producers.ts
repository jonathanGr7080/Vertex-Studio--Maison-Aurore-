export type Producer = {
  id: string;
  name: string;
  region: string;
  role: string;
  description: string;
  /** Ce que ce partenaire apporte concrètement à la cuisine. */
  contribution: string;
  /** Pourquoi cette collaboration correspond à la philosophie de la maison. */
  philosophy: string;
};

export const producersIntro =
  "La carte ne précède jamais la récolte. Chaque matin, ce sont quelques artisans — un maraîcher, une criée, une cave d'affinage — qui décident de ce que la maison servira le soir. Le menu se contente d'écouter.";

export const producers: Producer[] = [
  {
    id: "maraicher",
    name: "Ferme du Pré Salé",
    region: "Polders de Damme",
    role: "Maraîchage de saison",
    description:
      "Légumes et herbes cultivés en plein champ sur les polders, cueillis à l'aube et livrés le matin même.",
    contribution:
      "Détermine le socle végétal du Menu Signature et l'intégralité du Menu Végétal.",
    philosophy:
      "Une agriculture qui suit le calendrier plutôt que la demande : elle impose la saison à la carte, exactement comme la maison le souhaite.",
  },
  {
    id: "pecheur",
    name: "Criée de la Côte",
    region: "Zeebruges",
    role: "Petite pêche côtière",
    description:
      "Poissons et coquillages de la pêche du jour, choisis au débarquement selon l'arrivage — jamais l'inverse.",
    contribution: "Fixe le poisson du service : ce qui n'est pas débarqué n'est pas à la carte.",
    philosophy:
      "La pêche du jour interdit toute promesse hors-saison ; elle garde la cuisine honnête et ancrée sur la côte.",
  },
  {
    id: "fromager",
    name: "Affinage des Polders",
    region: "Arrière-pays brugeois",
    role: "Fromagerie fermière",
    description:
      "Fromages au lait cru affinés en cave, sélectionnés pour leur caractère plutôt que pour leur notoriété.",
    contribution: "Compose le service de fromages, renouvelé au rythme des affinages.",
    philosophy:
      "Choisir le caractère plutôt que le nom : la même exigence discrète que la maison applique à chaque assiette.",
  },
];

export const producersNote =
  "Producteurs fictifs, imaginés pour ce concept de démonstration à l'image du terroir belge.";
