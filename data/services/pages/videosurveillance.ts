import type { ServicePageContent } from "../types";

export const videosurveillancePage: ServicePageContent = {
  slug: "videosurveillance",
  icon: "security",
  metaTitle: "Vidéosurveillance IP — Caméras & enregistrement",
  metaDescription:
    "Systèmes de vidéosurveillance IP au Maroc : caméras dôme et bullet HD, NVR, accès mobile sécurisé — pour commerces, bureaux et résidences. Devis transparent, pose soignée.",
  hero: {
    title: "Vidéosurveillance IP",
    subtitle:
      "Image haute définition jour et nuit, enregistrement fiable et consultation en temps réel sur smartphone — installation soignée, zéro angle mort.",
  },
  presentation: {
    whatItIs:
      "Un système de vidéosurveillance IP associe caméras (dôme, bullet, fisheye), switch PoE, enregistreur NVR et stockage disque. Les flux sont accessibles en direct ou en différé via PC ou application mobile, avec gestion des droits utilisateurs et alertes sur détection de mouvement.",
    whatFor:
      "Dissuader les intrusions, protéger vos équipes et marchandises, et disposer d'images exploitables (export MP4) en cas d'incident — sans dénaturer votre espace de travail ou de vente.",
    useCases: [
      "Commerce / pharmacie : caisse, entrée, réserve, parking.",
      "Bureau / coworking : couloirs, accès, salle serveur.",
      "Villa / résidence : portail, allée, garage, parties communes.",
      "Entrepôt / usine : zones de chargement, stock haute valeur, périmètre.",
    ],
  },
  solutions: [
    {
      title: "Étude des angles & luminosité",
      description:
        "Positionnement des caméras selon contre-jour, hauteur idéale et zones à couvrir — choix 2 MP / 4 MP / 4K selon la distance de lecture requise (visage, immatriculation).",
    },
    {
      title: "Câblage & alimentation PoE",
      description:
        "Tirages RJ45 ou fibre longue distance, alimentation PoE propre, goulotte discrète ou faux plafond — finitions professionnelles.",
    },
    {
      title: "Configuration NVR & accès distant",
      description:
        "Rétention paramétrable (15 à 60 jours), comptes par niveau d'accès, alertes mouvement par notification push, firmware à jour.",
    },
    {
      title: "Formation & procédures",
      description:
        "Démonstration consultation mobile, export d'incident, checklist de maintenance trimestrielle — vous êtes autonome dès la livraison.",
    },
  ],
  offerings: [
    {
      category: "Matériel courant",
      items: [
        "Caméras IP dôme / bullet 4 MP ou 4K (Hikvision, Dahua ou équivalent certifié)",
        "NVR 4 à 64 canaux avec sortie HDMI locale",
        "Disques durs surveillance-rated WD Purple ou Seagate SkyHawk",
        "Switch PoE administrable (TP-Link Omada, Ubiquiti UniFi)",
        "Housings extérieurs IK10 / IP67 pour caméras exposées",
      ],
    },
    {
      category: "Options & extensions",
      items: [
        "Caméras panoramiques fisheye pour halls et open spaces",
        "Détection intelligente : ligne virtuelle, zone, comptage de personnes",
        "Intégration sur système de contrôle d'accès existant",
        "Onduleur pour maintien en cas de coupure secteur",
      ],
    },
  ],
  benefits: [
    {
      title: "Dissuasion visible",
      description: "Présence de caméras + signalétique réduisent les actes malveillants.",
    },
    {
      title: "Consultation simple",
      description: "Application mobile disponible 24h/24 pour le responsable.",
    },
    {
      title: "Preuves exploitables",
      description: "Export MP4 horodaté en cas de sinistre ou de litige.",
    },
    {
      title: "Système évolutif",
      description: "Ajout de canaux ou migration cloud possible à tout moment.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Visite ou plans",
      description:
        "Relevé des accès, contraintes esthétiques et besoins légaux.",
    },
    {
      step: "02",
      title: "Devis & schéma",
      description:
        "Emplacements caméras, liste matériel, délai d'intervention et garantie constructeur.",
    },
    {
      step: "03",
      title: "Installation",
      description:
        "Pose, adressage IP, tests nuit et jour, réglage de la détection si prévue.",
    },
    {
      step: "04",
      title: "Recette",
      description:
        "Vérification enregistrement, comptes mobiles, exports test en votre présence.",
    },
    {
      step: "05",
      title: "Suivi",
      description:
        "Maintenance annuelle ou ticket à la demande — extension matériel facilitée.",
    },
  ],
};
