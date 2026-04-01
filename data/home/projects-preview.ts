export type HomeProjectPreview = {
  id: string;
  category: string;
  title: string;
  description: string;
  accent: "blue" | "indigo" | "sky";
};

export const homeProjectsPreview: HomeProjectPreview[] = [
  {
    id: "cameras",
    category: "Sécurité",
    title: "Installation caméras pour commerce",
    description:
      "Système de surveillance discret et fiable pour sécuriser les accès et les zones sensibles.",
    accent: "blue",
  },
  {
    id: "website",
    category: "Web",
    title: "Création site web vitrine",
    description:
      "Présentation claire de l’activité, design moderne et base solide pour le référencement.",
    accent: "indigo",
  },
  {
    id: "ads",
    category: "Marketing",
    title: "Campagne Ads — visibilité locale",
    description:
      "Ciblage géographique et messages adaptés pour attirer de nouveaux clients près de vous.",
    accent: "sky",
  },
];
