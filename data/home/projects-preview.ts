export type HomeProjectPreview = {
  id: string;
  category: string;
  title: string;
  description: string;
  accent: "blue" | "indigo" | "sky";
};

/**
 * Aperçu accueil — synchronisé avec la logique `realisationCases` (voir `data/realisations/cases.ts`).
 * Pour ajouter une réalisation page dédiée : complétez aussi `extraCases` ou la source unique prévue dans cases.ts.
 */
export const homeProjectsPreview: HomeProjectPreview[] = [
  {
    id: "cameras",
    category: "Sécurité",
    title: "Vidéo IP — commerce de proximité",
    description:
      "Huit caméras intérieur / extérieur, NVR 30 jours, accès smartphone pour le gérant — câblage discret en faux plafond.",
    accent: "blue",
  },
  {
    id: "website",
    category: "Web",
    title: "Site vitrine PME — leads qualifiés",
    description:
      "Site Next.js rapide, pages services, formulaire avec type de demande et zone — base SEO locale (Google Business relié).",
    accent: "indigo",
  },
  {
    id: "ads",
    category: "Marketing",
    title: "Meta Ads — offre locale Casa",
    description:
      "Campagne leads 15 km autour du point de vente, créatives carrousel + messages WhatsApp Business — budget suivi chaque semaine.",
    accent: "sky",
  },
];
