/**
 * Arguments différenciants — section « Pourquoi DIGIBOT » sur /services.
 */

export const whyDigibotSectionIntro = {
  eyebrow: "Pourquoi nous",
  title: "Ce qui nous distingue sur le terrain",
  description:
    "DIGIBOT n’est pas un simple installateur : nous sécurisons vos décisions techniques, clarifions les budgets et livrons un travail dont vous êtes fier — clients, équipes et visiteurs.",
} as const;

export type WhyDigibotCard = {
  id: string;
  title: string;
  text: string;
};

export const whyDigibotCards: WhyDigibotCard[] = [
  {
    id: "single",
    title: "Un seul partenaire, zéro ping-pong",
    text: "Sécurité, réseau, web et acquisition pilotés au même endroit : moins de perte d’information, plus de cohérence entre vos outils.",
  },
  {
    id: "clarity",
    title: "Transparence avant signature",
    text: "Périmètre, matériel, planning et budget écrits noir sur blanc. Pas de flou sur ce qui est inclus — ni sur ce qui ne l’est pas.",
  },
  {
    id: "craft",
    title: "Exécution pro & durable",
    text: "Câblage, finitions et paramétrages faits pour durer. Nous documentons pour que vous ou un tiers puissiez reprendre le fil sans casse-tête.",
  },
  {
    id: "fit",
    title: "Le bon niveau de solution",
    text: "Pas de sur-équipement inutile : nous dimensionnons à votre usage réel — PME, commerce ou particulier — pour protéger votre investissement.",
  },
];
