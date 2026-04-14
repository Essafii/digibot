import type { ServiceCatalogEntry } from "./types";

/** Grille de la page /services — liens vers /services/[slug]. */
export const servicesCatalog: ServiceCatalogEntry[] = [
  {
    slug: "securite-videosurveillance",
    icon: "security",
    title: "Sécurité & vidéosurveillance",
    shortDescription:
      "Caméras IP, NVR, accès mobile sécurisé — marques pro, pose soignée, rétention paramétrée pour votre commerce ou site industriel.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "reseaux-cablage-informatique",
    icon: "network",
    title: "Réseaux, câblage & informatique",
    shortDescription:
      "Baie structurée, Wi‑Fi managé, VLAN invité, switch PoE pour caméras — moins de coupures, une base prête pour vos outils métier.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "web-logiciels-sur-mesure",
    icon: "web",
    title: "Sites web & logiciels sur mesure",
    shortDescription:
      "Sites Next.js rapides, formulaires intelligents et petits outils métiers — SEO de base, hébergement sécurisé, évolutions maîtrisées.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "publicite-reseaux-sociaux",
    icon: "marketing",
    title: "Publicité & réseaux sociaux",
    shortDescription:
      "Meta Ads, contenus feed/stories et reporting clair — pour générer messages et demandes locales sans dilapidier le budget.",
    ctaLabel: "Découvrir ce service",
  },
];
