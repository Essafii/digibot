import { ROUTES } from "@/constants/routes";
import type { HomeServiceIcon, ServiceSlug } from "@/data/services/types";

export type HomeServiceCard = {
  id: string;
  icon: HomeServiceIcon;
  /** Fiche service standard (/services/[slug]) — omettre si `href` est fourni. */
  detailSlug?: ServiceSlug;
  /** Lien direct, pour les pages hors catalogue services (ex. énergie solaire). */
  href?: string;
  title: string;
  description: string;
};

export const homeServicesHighlight: HomeServiceCard[] = [
  {
    id: "videosurveillance",
    icon: "security",
    detailSlug: "videosurveillance",
    title: "Vidéosurveillance IP",
    description:
      "Caméras HD, NVR et accès mobile — image nette jour et nuit, installation soignée pour commerces, bureaux et résidences.",
  },
  {
    id: "controle-acces",
    icon: "lock",
    detailSlug: "controle-acces",
    title: "Contrôle d'accès",
    description:
      "Badges RFID, biométrie et gestion des droits par zone — historique des passages en temps réel.",
  },
  {
    id: "systeme-alarme",
    icon: "alarm",
    detailSlug: "systeme-alarme",
    title: "Système d'alarme",
    description:
      "Détecteurs PIR, sirène 110 dB et alerte smartphone — protection intrusion 24h/24.",
  },
  {
    id: "cablage",
    icon: "cable",
    detailSlug: "cablage",
    title: "Câblage structuré",
    description:
      "Infrastructure RJ45 Cat 6 et fibre optique — baie de brassage étiquetée, certifiée et documentée.",
  },
  {
    id: "energie-solaire",
    icon: "solar",
    href: ROUTES.solar,
    title: "Énergie solaire",
    description:
      "Panneaux solaires et autoconsommation — réduisez votre facture d'électricité avec une installation clé en main.",
  },
];
