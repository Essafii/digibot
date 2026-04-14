import type { HomeServiceIcon, ServiceSlug } from "@/data/services/types";

export type HomeServiceCard = {
  id: string;
  icon: HomeServiceIcon;
  /** Lien vers la fiche détaillée sur /services/[slug] */
  detailSlug: ServiceSlug;
  title: string;
  description: string;
};

export const homeServicesHighlight: HomeServiceCard[] = [
  {
    id: "security",
    icon: "security",
    detailSlug: "securite-videosurveillance",
    title: "Sécurité & vidéosurveillance",
    description:
      "Caméras IP, enregistreurs, visionnage mobile : nous posons et paramétrons des systèmes fiables pour commerces, bureaux et résidences.",
  },
  {
    id: "network",
    icon: "network",
    detailSlug: "reseaux-cablage-informatique",
    title: "Réseaux & informatique",
    description:
      "Baie structurée, Wi‑Fi professionnel, switch PoE et dépannage : un réseau stable pour la caisse, la visio et vos outils métiers.",
  },
  {
    id: "web",
    icon: "web",
    detailSlug: "web-logiciels-sur-mesure",
    title: "Web & logiciels",
    description:
      "Sites vitrines Next.js, formulaires de demande et petits outils sur mesure — performance, image pro et évolutions maîtrisées.",
  },
  {
    id: "marketing",
    icon: "marketing",
    detailSlug: "publicite-reseaux-sociaux",
    title: "Publicité & réseaux sociaux",
    description:
      "Contenus adaptés au marché marocain et campagnes Meta pilotées pour générer messages et demandes locales sans gaspiller le budget.",
  },
];
