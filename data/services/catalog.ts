import type { ServiceCatalogEntry } from "./types";

/** Grille de la page /services — liens vers /services/[slug]. */
export const servicesCatalog: ServiceCatalogEntry[] = [
  {
    slug: "videosurveillance",
    icon: "security",
    title: "Vidéosurveillance IP",
    shortDescription:
      "Caméras HD, NVR et accès mobile sécurisé — image nette jour et nuit, zéro angle mort, installation soignée pour commerces, bureaux et résidences.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "controle-acces",
    icon: "lock",
    title: "Contrôle d'accès",
    shortDescription:
      "Badges RFID, biométrie et gestion des droits par zone — historique des passages en temps réel, fin des clés perdues.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "systeme-alarme",
    icon: "alarm",
    title: "Système d'alarme",
    shortDescription:
      "Détecteurs PIR, sirène 110 dB et alerte smartphone instantanée — protection intrusion 24h/24, couplable à une télésurveillance.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "cablage",
    icon: "cable",
    title: "Câblage structuré",
    shortDescription:
      "Infrastructure RJ45 Cat 6 et fibre optique posée proprement — baie de brassage étiquetée, certifiée et documentée.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "teledistribution",
    icon: "tv",
    title: "Télédistribution",
    shortDescription:
      "Signal TV satellite et TNT distribué dans chaque local — tête de réseau centralisée, niveau signal calibré sur chaque prise.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "sonorisation",
    icon: "speaker",
    title: "Sonorisation",
    shortDescription:
      "Haut-parleurs encastrés, amplificateurs 100V et contrôle par zone — son d'ambiance ou annonces dans tout votre établissement.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "videophone",
    icon: "videophone",
    title: "Vidéophone & interphonie",
    shortDescription:
      "Portier vidéo IP, moniteur intérieur et déverrouillage depuis smartphone — contrôle visuel de chaque visiteur avant d'ouvrir.",
    ctaLabel: "Découvrir ce service",
  },
  {
    slug: "porte-automatique",
    icon: "door",
    title: "Portes & portails automatiques",
    shortDescription:
      "Portes coulissantes, portails motorisés et barrières de parking — accès fluide, sécurités anti-écrasement et intégration badge.",
    ctaLabel: "Découvrir ce service",
  },
];
