export type Producer = {
  id: string;
  name: string;
  region: string;
  role: string;
  description: string;
};

export const producers: Producer[] = [
  {
    id: "maraicher",
    name: "Ferme du Pré Salé",
    region: "Polders de Damme",
    role: "Maraîchage de saison",
    description:
      "Légumes et herbes cultivés en plein champ sur les polders, cueillis à l'aube et livrés le matin même.",
  },
  {
    id: "pecheur",
    name: "Criée de la Côte",
    region: "Zeebruges",
    role: "Petite pêche côtière",
    description:
      "Poissons et coquillages de la pêche du jour, choisis au débarquement selon l'arrivage — jamais l'inverse.",
  },
  {
    id: "fromager",
    name: "Affinage des Polders",
    region: "Arrière-pays brugeois",
    role: "Fromagerie fermière",
    description:
      "Fromages au lait cru affinés en cave, sélectionnés pour leur caractère plutôt que pour leur notoriété.",
  },
];

export const producersNote =
  "Producteurs fictifs, imaginés pour ce concept de démonstration à l'image du terroir belge.";
