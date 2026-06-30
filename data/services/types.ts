/** Icône associée à un service (grille accueil, fiches, cartes). */
export type HomeServiceIcon =
  | "security"
  | "network"
  | "web"
  | "marketing"
  | "tv"
  | "lock"
  | "cable"
  | "alarm"
  | "speaker"
  | "videophone"
  | "door"
  | "computer"
  | "maintenance"
  | "solar";

/** Slug URL — ajouter une entrée ici + fichier dans pages/ pour un nouveau service. */
export type ServiceSlug =
  | "securite-videosurveillance"
  | "reseaux-cablage-informatique"
  | "web-logiciels-sur-mesure"
  | "publicite-reseaux-sociaux"
  | "teledistribution"
  | "videosurveillance"
  | "controle-acces"
  | "cablage"
  | "systeme-alarme"
  | "sonorisation"
  | "videophone"
  | "porte-automatique"
  | "materiel-informatique"
  | "contrat-maintenance";

export type ServiceCatalogEntry = {
  slug: ServiceSlug;
  icon: HomeServiceIcon;
  title: string;
  shortDescription: string;
  ctaLabel: string;
};

export type ServiceSolution = {
  title: string;
  description: string;
};

export type ServiceOffering = {
  category: string;
  items: string[];
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServicePageContent = {
  slug: ServiceSlug;
  icon: HomeServiceIcon;
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    subtitle: string;
  };
  presentation: {
    whatItIs: string;
    whatFor: string;
    useCases: string[];
  };
  solutions: ServiceSolution[];
  offerings: ServiceOffering[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
};
