export type HomeServiceIcon = "security" | "network" | "web" | "marketing";

export type HomeServiceCard = {
  id: string;
  icon: HomeServiceIcon;
  title: string;
  description: string;
};

export const homeServicesHighlight: HomeServiceCard[] = [
  {
    id: "security",
    icon: "security",
    title: "Sécurité & Caméras",
    description:
      "Installation de systèmes de vidéosurveillance et solutions de sécurité adaptées aux commerces, bureaux et particuliers.",
  },
  {
    id: "network",
    icon: "network",
    title: "Réseaux & Informatique",
    description:
      "Câblage, réseaux, maintenance et dépannage informatique pour un environnement fiable et performant.",
  },
  {
    id: "web",
    icon: "web",
    title: "Web & Logiciels",
    description:
      "Sites vitrines, applications sur mesure et outils logiciels pour digitaliser votre activité.",
  },
  {
    id: "marketing",
    icon: "marketing",
    title: "Marketing Digital & Ads",
    description:
      "Campagnes publicitaires et gestion des Ads sur les réseaux sociaux pour développer votre visibilité.",
  },
];
