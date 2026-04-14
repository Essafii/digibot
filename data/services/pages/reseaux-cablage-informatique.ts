import type { ServicePageContent } from "../types";

export const reseauxCablageInformatiquePage: ServicePageContent = {
  slug: "reseaux-cablage-informatique",
  icon: "network",
  metaTitle: "Réseaux, câblage & informatique",
  metaDescription:
    "Baie structurée, Wi‑Fi entreprise, switches PoE et maintenance : DIGIBOT stabilise les réseaux au Maroc pour PME, commerces et bureaux.",
  hero: {
    title: "Réseaux, câblage & informatique",
    subtitle:
      "Moins de « ça coupe encore » : baie propre, Wi‑Fi dimensionné et VLAN invité — base solide pour la visio, l’ERP et la vidéo IP.",
  },
  presentation: {
    whatItIs:
      "Le réseau d’entreprise combine câblage structuré (cuivre Cat6/Cat6A), équipements actifs (switch, routeur, firewall), Wi‑Fi managé et parfois lien fibre ou 4G backup. La maintenance couvre dépannage, sauvegardes postes et remise à niveau de la baie.",
    whatFor:
      "Assurer débit et latence stables, isoler visiteurs / IoT / caméras, et simplifier les évolutions (nouvelle borne, nouveau VLAN) sans tout recâbler.",
    useCases: [
      "Nouveau local : tirage RJ45, baie 19″, étiquetage, tests Fluke.",
      "Open space saturé : audit Wi‑Fi, canaux, puissance bornes, roaming.",
      "Commerce + caméras : switch PoE 24 ports, VLAN cam / caisse / invité.",
      "Télétravail hybride : VPN ou accès RDS sécurisé selon votre politique IT.",
    ],
  },
  solutions: [
    {
      title: "Câblage & baie",
      description:
        "Patch panels catégorisés, cordons colorés, guide-câbles — schéma remis avec numéros de ports pour gagner du temps à chaque intervention.",
    },
    {
      title: "Wi‑Fi & densité",
      description:
        "Bornes plafond / murales, contrôleur intégré ou cloud, bandes 2,4 / 5 GHz optimisées pour environnements béton ou open space.",
    },
    {
      title: "Sécurité réseau de base",
      description:
        "Firewall routeur, règles port forwarding maîtrisées, invité isolé, liste d’équipements autorisés sur le VLAN critique.",
    },
    {
      title: "Astreinte & maintenance",
      description:
        "Tickets prioritaires, inventaire matériel, remplacement disque / alim, sauvegarde NAS — rapport synthétique après passage.",
    },
  ],
  offerings: [
    {
      category: "Équipements courants",
      items: [
        "Switchs Gigabit / multi-Gig managés (TP-Link Omada, Ubiquiti UniFi, MikroTik selon besoin)",
        "Routeurs professionnels, firewalls, modules SFP fibre",
        "Points d’accès Wi‑Fi 6 intérieur / extérieur, antennes directionnelles",
        "Baies, onduleurs, brassage, testeurs et outillage pro",
      ],
    },
    {
      category: "Livrables",
      items: [
        "Plan d’adressage IP / VLAN (interne, invité, caméras, téléphonie)",
        "Export configuration switch (backup) remis sur clé USB sécurisée",
        "Checklist post-installation pour votre informaticien ou prestataire tiers",
        "Contrat maintenance trimestriel ou annuel (à la carte)",
      ],
    },
  ],
  benefits: [
    {
      title: "Productivité",
      description: "Visio et transferts stables sur toute la surface.",
    },
    {
      title: "Sécurité",
      description: "Segmentation pour limiter la propagation d’un incident.",
    },
    {
      title: "Moins de dette technique",
      description: "Baie lisible = diagnostics plus rapides et moins chers.",
    },
    {
      title: "Prêt pour la suite",
      description: "PoE et ports disponibles pour caméras ou téléphones IP.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Audit & mesures",
      description:
        "Inventaire switch, débit réel, zones mortes Wi‑Fi, besoins VLAN.",
    },
    {
      step: "02",
      title: "Architecture cible",
      description:
        "Schéma logique + physique, liste matériel, planning coupure éventuelle.",
    },
    {
      step: "03",
      title: "Déploiement",
      description:
        "Raccordements, firmware à jour, configuration sauvegardée.",
    },
    {
      step: "04",
      title: "Tests & bascule",
      description:
        "Roaming, débit invité, accès ERP / caméras validés avec vos équipes.",
    },
    {
      step: "05",
      title: "Documentation",
      description:
        "Remise des accès admin, exports config, contacts support DIGIBOT.",
    },
  ],
};
