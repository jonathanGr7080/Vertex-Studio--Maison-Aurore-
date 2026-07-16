export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Les allergies et intolérances sont-elles prises en compte ?",
    answer:
      "Oui. Signalez-les lors de la réservation ou à votre arrivée : la brigade adapte les services concernés sans rompre le fil du menu.",
  },
  {
    question: "Proposez-vous une option végétale ?",
    answer:
      "Le Menu Végétal est proposé en permanence, et les menus Découverte et Signature peuvent être adaptés sur demande.",
  },
  {
    question: "Les enfants sont-ils les bienvenus ?",
    answer:
      "Bien sûr. Le format long des menus se prête toutefois davantage aux convives à partir d'une dizaine d'années.",
  },
  {
    question: "Quelle tenue est recommandée ?",
    answer:
      "Une tenue soignée est appréciée, sans exigence particulière — ni costume ni robe de soirée requis.",
  },
  {
    question: "Où se garer ?",
    answer:
      "Le Parking Centrum se trouve à cinq minutes à pied. Le quartier est en zone piétonne partielle : prévoyez quelques minutes de marche.",
  },
  {
    question: "Peut-on privatiser la salle ?",
    answer:
      "La salle se privatise pour les petits événements — dîners de famille, tables d'affaires — sur simple demande préalable.",
  },
  {
    question: "Quelle est la politique d'annulation ?",
    answer:
      "Toute réservation peut être annulée sans frais jusqu'à 48 heures à l'avance. Passé ce délai, la table reste engagée.",
  },
];
