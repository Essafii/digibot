export type HomeWhyIcon =
  | "custom"
  | "expertise"
  | "support"
  | "reactive"
  | "image"
  | "tech";

export type HomeWhyBlock = {
  id: string;
  icon: HomeWhyIcon;
  title: string;
  description: string;
};

export const homeWhyDigibot: HomeWhyBlock[] = [
  {
    id: "custom",
    icon: "custom",
    title: "Solutions sur mesure",
    description:
      "Chaque projet est étudié pour répondre précisément à vos contraintes et à vos objectifs.",
  },
  {
    id: "expertise",
    icon: "expertise",
    title: "Expertise multi-domaines",
    description:
      "Une même équipe pour la sécurité, le réseau, le web et le marketing — coordination simplifiée.",
  },
  {
    id: "support",
    icon: "support",
    title: "Accompagnement complet",
    description:
      "De l’audit initial au déploiement et au suivi, nous restons à vos côtés sur la durée.",
  },
  {
    id: "reactive",
    icon: "reactive",
    title: "Support réactif",
    description:
      "Interventions et réponses rapides pour limiter les interruptions et sécuriser vos équipements.",
  },
  {
    id: "image",
    icon: "image",
    title: "Image professionnelle",
    description:
      "Des réalisations soignées qui renforcent la confiance de vos clients et partenaires.",
  },
  {
    id: "tech",
    icon: "tech",
    title: "Technologies modernes",
    description:
      "Outils et pratiques à jour pour des installations durables et évolutives.",
  },
];
