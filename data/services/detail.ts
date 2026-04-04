import type { HomeServiceIcon } from "@/data/home/services-highlight";

export type ServiceDetail = {
  id: string;
  icon: HomeServiceIcon;
  title: string;
  summary: string;
  bullets: string[];
};

export const servicesDetail: ServiceDetail[] = [
  {
    id: "security",
    icon: "security",
    title: "Sécurité & vidéosurveillance",
    summary:
      "Des systèmes adaptés à votre bâtiment : caméras IP, enregistreurs, accès à distance et bonnes pratiques de mise en service.",
    bullets: [
      "Étude des zones à couvrir et choix du matériel",
      "Pose soignée, câblage et réglages image",
      "Accès sécurisé depuis mobile ou poste fixe",
      "Formation rapide à l’utilisation quotidienne",
    ],
  },
  {
    id: "network",
    icon: "network",
    title: "Réseaux, câblage & informatique",
    summary:
      "Réseau stable pour vos équipements : baie, switch, Wi‑Fi, maintenance et dépannage pour limiter les interruptions.",
    bullets: [
      "Audit et mise en conformité du câblage",
      "Déploiement ou optimisation du Wi‑Fi",
      "Maintenance préventive et interventions sur site",
      "Conseil pour faire évoluer votre infrastructure",
    ],
  },
  {
    id: "web",
    icon: "web",
    title: "Sites web & logiciels sur mesure",
    summary:
      "Présence en ligne professionnelle et outils métiers : vitrines modernes, formulaires, intégrations et évolutions.",
    bullets: [
      "Design clair, responsive et orienté conversion",
      "Performance, accessibilité et base SEO saine",
      "Développement d’outils adaptés à vos processus",
      "Accompagnement après mise en ligne",
    ],
  },
  {
    id: "marketing",
    icon: "marketing",
    title: "Publicité & réseaux sociaux",
    summary:
      "Visibilité ciblée : campagnes Ads, création de contenus et suivi des indicateurs pour ajuster la stratégie.",
    bullets: [
      "Définition des objectifs et du ciblage",
      "Rédaction et visuels alignés avec votre marque",
      "Pilotage des campagnes et budgets",
      "Reporting simple et actions correctives",
    ],
  },
];
