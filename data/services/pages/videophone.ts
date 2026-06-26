import type { ServicePageContent } from "../types";

export const videophonePage: ServicePageContent = {
  slug: "videophone",
  icon: "videophone",
  metaTitle: "Vidéophone & interphonie — Portiers IP & vidéo",
  metaDescription:
    "Installation de vidéophones et interphones au Maroc : portiers IP, moniteurs intérieurs et déverrouillage depuis smartphone — pour résidences, bureaux et commerces.",
  hero: {
    title: "Vidéophone & interphonie",
    subtitle:
      "Voir et parler avec vos visiteurs avant d'ouvrir — portier vidéo IP, écran intérieur ou application smartphone, déverrouillage à distance.",
  },
  presentation: {
    whatItIs:
      "Un système de vidéophonie comprend un portier extérieur (caméra grand angle + micro + haut-parleur + bouton d'appel), un écran intérieur ou une application smartphone, et une gâche ou motorisation pour l'ouverture à distance. Les systèmes IP modernes fonctionnent en réseau local ou internet pour la consultation depuis n'importe où.",
    whatFor:
      "Contrôler visuellement vos visiteurs avant de les laisser entrer, déverrouiller à distance depuis un bureau ou un appartement différent, et conserver un historique vidéo des appels — en résidence comme en entreprise.",
    useCases: [
      "Résidence / immeuble : portier commun avec accès par appartement depuis l'écran intérieur.",
      "Villa : portier au portail, visualisation sur écran intérieur ou smartphone.",
      "Bureau / cabinet : réception visiteurs contrôlée depuis le poste de travail.",
      "Commerce : accès livraisons sécurisé, déverrouillage à distance.",
    ],
  },
  solutions: [
    {
      title: "Portier extérieur",
      description:
        "Station de rue avec caméra grand angle (140°), vision nocturne IR, clavier code ou RFID — boîtier inox ou aluminium résistant aux intempéries et tentatives d'arrachage.",
    },
    {
      title: "Moniteur intérieur",
      description:
        "Écran tactile 7\" ou 10\" avec sonnerie, visiophone, décrochage automatique et déverrouillage par bouton — un moniteur par appartement ou bureau.",
    },
    {
      title: "Application smartphone",
      description:
        "Réception des appels vidéo sur iOS / Android, déverrouillage à distance, accès à l'historique des appels et capture des visiteurs — même hors du bâtiment.",
    },
    {
      title: "Intégration gâche & motorisation",
      description:
        "Commande de gâche électrique, d'électroaimant ou de motorisation portail depuis le portier ou l'application — avec temporisation et journal d'ouverture.",
    },
  ],
  offerings: [
    {
      category: "Équipements courants",
      items: [
        "Station de rue vidéo IP avec caméra ≥ 2 MP (Hikvision, Akuvox, 2N ou équivalent)",
        "Moniteur intérieur 7\" tactile avec Wi-Fi intégré",
        "Application mobile iOS / Android incluse",
        "Alimentation PoE ou adaptateur selon modèle",
        "Gâche électrique ou électroaimant pour porte ou portail",
      ],
    },
    {
      category: "Extensions & options",
      items: [
        "Système multi-appartements avec répartiteur central",
        "Accès par badge RFID ou code PIN sur le portier",
        "Intégration au système de contrôle d'accès existant",
        "Enregistrement automatique des appels sur NVR",
      ],
    },
  ],
  benefits: [
    {
      title: "Contrôle visuel",
      description: "Identifiez chaque visiteur avant d'ouvrir — caméra grand angle et vision nocturne.",
    },
    {
      title: "Accès à distance",
      description: "Ouvrez la porte depuis votre smartphone, partout dans le monde.",
    },
    {
      title: "Historique des visites",
      description: "Journal des appels avec captures vidéo — utile en cas de litige.",
    },
    {
      title: "Installation propre",
      description: "Boîtier encastré ou en saillie, câblage discret, design professionnel.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Analyse du site",
      description:
        "Type de portail ou porte, nombre d'utilisateurs, réseau existant et type de gâche.",
    },
    {
      step: "02",
      title: "Devis & plan",
      description:
        "Choix du portier, moniteurs, câblage et intégration smartphone — délai d'installation.",
    },
    {
      step: "03",
      title: "Installation",
      description:
        "Pose du portier, câblage réseau ou 2 fils, montage du moniteur et de la gâche.",
    },
    {
      step: "04",
      title: "Configuration",
      description:
        "Paramétrage IP, installation de l'application et tests de chaque fonction.",
    },
    {
      step: "05",
      title: "Formation & suivi",
      description:
        "Démonstration smartphone, remise des codes et support en cas de question.",
    },
  ],
};
