export type Expectation = {
  title: string;
  text: string;
};

export const expectationsIntro =
  "Plutôt que des avis, voici l'intention : ce qu'une soirée à Maison Aurore cherche à transmettre.";

export const expectations: Expectation[] = [
  {
    title: "Le temps ralentit",
    text: "Un repas long, mais jamais pesant : chaque service laisse le temps de la conversation et du silence.",
  },
  {
    title: "La saison au centre",
    text: "On repart avec le goût d'un moment précis de l'année, impossible à retrouver à l'identique la saison suivante.",
  },
  {
    title: "Une hospitalité discrète",
    text: "Un service attentif qui devance sans s'imposer, et qui laisse la table à ses convives.",
  },
  {
    title: "La juste mesure",
    text: "Ni démonstration ni excès : des assiettes claires, une salle calme, une lumière chaude.",
  },
];

export const expectationsNote =
  "Section éditoriale : aucune note ni témoignage réel. Il s'agit de l'expérience visée par ce concept de démonstration.";
