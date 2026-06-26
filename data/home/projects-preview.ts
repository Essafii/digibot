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
    title: "Vidéo IP — commerce de proximité",
    description:
      "Huit caméras intérieur / extérieur, NVR 30 jours, accès smartphone pour le gérant — câblage discret.",
    accent: "blue",
  },
  {
    id: "website",
    category: "Web",
    title: "Site vitrine PME — leads qualifiés",
    description:
      "Site Next.js rapide, pages services, formulaire de demande et base SEO locale.",
    accent: "indigo",
  },
  {
    id: "ads",
    category: "Marketing",
    title: "Meta Ads — offre locale Casa",
    description:
      "Campagne leads locale, créatives carrousel et messages WhatsApp Business.",
    accent: "sky",
  },
];
