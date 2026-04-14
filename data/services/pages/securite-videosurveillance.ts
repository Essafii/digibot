import type { ServicePageContent } from "../types";

export const securiteVideosurveillancePage: ServicePageContent = {
  slug: "securite-videosurveillance",
  icon: "security",
  metaTitle: "Sécurité & vidéosurveillance",
  metaDescription:
    "Caméras IP, NVR, accès mobile : DIGIBOT installe la vidéosurveillance au Maroc pour commerces, bureaux et résidences — marques professionnelles, pose soignée.",
  hero: {
    title: "Sécurité & vidéosurveillance",
    subtitle:
      "Image nette la nuit, enregistrement fiable et consultation smartphone sécurisée — du petit commerce au site multi-portiques.",
  },
  presentation: {
    whatItIs:
      "La vidéosurveillance IP associe caméras, switch PoE, enregistreur (NVR) ou logiciel et stockage disque. Les flux peuvent être consultés sur PC ou application mobile, avec droits utilisateurs. On peut coupler interphonie IP ou contrôle d’accès sur le même projet.",
    whatFor:
      "Dissuader les intrusions, rassurer équipes et clients, et disposer d’images exploitables (export MP4) en cas d’incident — sans dénaturer votre point de vente ou vos bureaux.",
    useCases: [
      "Supérette / pharmacie : caisse, réserve, entrée livraison, parking.",
      "Coworking : halls, couloirs, salle serveur (sans filmer les postes).",
      "Villa ou résidence : portail, allée, garage, parties communes.",
      "Atelier / stock : quais, zones haute valeur, extérieur périmètre.",
    ],
  },
  solutions: [
    {
      title: "Étude lumière & angles",
      description:
        "Nous positionnons les caméras selon hauteur, contre-jour et zones à risque — choix 2 MP / 4 MP / 4K selon distance de lecture (immatriculation, visage).",
    },
    {
      title: "Installation & câblage",
      description:
        "Tirages RJ45 ou fibre si longue distance, alimentation PoE propre, goulotte ou faux plafond — finitions discrètes derrière enseigne ou rack.",
    },
    {
      title: "NVR & accès distant",
      description:
        "Rétention paramétrable (ex. 15 à 60 jours), comptes admin / exploitant, double authentification si disponible, mises à jour firmware planifiées.",
    },
    {
      title: "Passation & procédures",
      description:
        "Export incident, archivage police, checklist maintenance — vous savez qui appeler et quoi vérifier chaque trimestre.",
    },
  ],
  offerings: [
    {
      category: "Matériel fréquent (exemples)",
      items: [
        "Caméras dôme / bullet IP Hikvision, Dahua ou équivalent certifié",
        "NVR 8 à 64 canaux, disques WD Purple ou surveillance-rated",
        "Switch PoE administrable (TP-Link Omada, Ubiquiti UniFi selon budget)",
        "HDD de secours, onduleur, housings extérieurs IK10",
      ],
    },
    {
      category: "Prestations associées",
      items: [
        "Remplacement d’ancien coaxial par de l’IP sur infrastructure existante",
        "Raccordement interphone / contrôle d’accès sur même VLAN isolé",
        "Paramétrage détection ligne / masque (intrusion stock)",
        "Extension caméras ou stockage quand le site grandit",
      ],
    },
  ],
  benefits: [
    {
      title: "Dissuasion réelle",
      description: "Présence visible + image exploitable si besoin.",
    },
    {
      title: "Exploitation simple",
      description: "Application mobile et recherche par date / caméra.",
    },
    {
      title: "Investissement maîtrisé",
      description: "On dimensionne le nombre de caméras au risque réel.",
    },
    {
      title: "Évolutif",
      description: "Ajout de canaux ou migration cloud possible plus tard.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Visite ou plans",
      description:
        "Relevé des accès, contraintes esthétiques, horaires d’ouverture et besoin légal éventuel.",
    },
    {
      step: "02",
      title: "Devis & schéma",
      description:
        "Emplacements, liste matériel, jours d’intervention, garantie constructeur.",
    },
    {
      step: "03",
      title: "Installation",
      description:
        "Pose, adressage IP, tests nuit / jour, réglage détection si prévu.",
    },
    {
      step: "04",
      title: "Recette",
      description:
        "Vérification enregistrement, comptes mobiles, exports test.",
    },
    {
      step: "05",
      title: "Suivi",
      description:
        "Maintenance annuelle ou ticket à la demande — évolutions matériel.",
    },
  ],
};
