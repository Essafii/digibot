import type { ServicePageContent } from "../types";

export const cablagePage: ServicePageContent = {
  slug: "cablage",
  icon: "cable",
  metaTitle: "Câblage structuré — Réseau RJ45 & fibre optique",
  metaDescription:
    "Câblage réseau structuré au Maroc : tirages RJ45 Cat 6, fibre optique, goulottes et baie de brassage — infrastructure propre, évolutive et certifiée.",
  hero: {
    title: "Câblage structuré",
    subtitle:
      "Infrastructure réseau RJ45 et fibre optique posée proprement — prises murales, baie de brassage étiquetée et rapport de certification à la livraison.",
  },
  presentation: {
    whatItIs:
      "Le câblage structuré est l'ensemble des supports physiques (câbles RJ45 Cat 6/6A, fibre optique multimode ou monomode, baie de brassage, prises murales) qui forment l'infrastructure réseau d'un bâtiment. Il suit des normes précises pour garantir des performances stables jusqu'à 10 Gb/s.",
    whatFor:
      "Disposer d'une base réseau fiable pour votre informatique, téléphonie IP, caméras PoE et Wi-Fi professionnel — sans ralentissements ni coupures dues à un câblage de mauvaise qualité ou non documenté.",
    useCases: [
      "Bureau / open space : prises RJ45 à chaque poste et en salle de réunion.",
      "Commerce : câblage caisse, caméras PoE et borne Wi-Fi sur un seul réseau.",
      "Entrepôt : fibre optique entre bâtiments, prises durcies en zone poussiéreuse.",
      "Immeuble : câblage vertical fibre en colonne + câblage horizontal par étage.",
    ],
  },
  solutions: [
    {
      title: "Étude & plan de câblage",
      description:
        "Relevé du site, comptage des postes et équipements, choix de la catégorie (Cat 6 ou 6A), tracé des goulottes et emplacement de la baie de brassage.",
    },
    {
      title: "Tirage & pose",
      description:
        "Câbles passés en goulotte PVC, chemin de câbles ou faux plafond — pose soignée, rayons de courbure respectés, aucun câble non étiqueté.",
    },
    {
      title: "Baie de brassage",
      description:
        "Panneau de brassage 19\", câbles brassés, switch PoE installé et étiqueté — la baie est documentée et facilement évolutive.",
    },
    {
      title: "Tests & certification",
      description:
        "Mesure de chaque lien avec testeur certifié (longueur, atténuation, NEXT) — rapport de certification remis à la livraison.",
    },
  ],
  offerings: [
    {
      category: "Matériel courant",
      items: [
        "Câble F/UTP ou S/FTP Cat 6 / Cat 6A (LSOH selon local)",
        "Prises RJ45 encastrées ou en saillie, Cat 6 keystones",
        "Panneau de brassage 24 ou 48 ports",
        "Goulottes PVC ou chemin de câbles acier galvanisé",
        "Baie 9U à 42U avec ventilation et prise multiprise filtrée",
      ],
    },
    {
      category: "Prestations associées",
      items: [
        "Fibre optique inter-bâtiments ou colonne verticale",
        "Reprise et réorganisation d'un câblage existant non documenté",
        "Intégration switch PoE pour caméras et bornes Wi-Fi",
        "Étiquetage et documentation complète du plan réseau",
      ],
    },
  ],
  benefits: [
    {
      title: "Performances garanties",
      description: "Débit jusqu'à 10 Gb/s sur Cat 6A — certifié avec rapport de test.",
    },
    {
      title: "Installation nette",
      description: "Goulottes, étiquettes et baie bien rangée — maintenance facilitée.",
    },
    {
      title: "Évolutif",
      description: "Ajout de postes ou de services sans recâbler de zéro.",
    },
    {
      title: "Compatible tous usages",
      description: "Informatique, téléphonie IP, caméras PoE et Wi-Fi sur la même base.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Relevé du site",
      description:
        "Comptage des postes, état du câblage existant, contraintes architecturales et calendrier travaux.",
    },
    {
      step: "02",
      title: "Étude & devis",
      description:
        "Plan de câblage, liste matériel, catégorie de câble et délai d'intervention.",
    },
    {
      step: "03",
      title: "Tirage",
      description:
        "Pose des goulottes, tirage des câbles, sertissage et installation de la baie.",
    },
    {
      step: "04",
      title: "Certification",
      description:
        "Test de chaque lien avec analyseur certifié — rapport remis à la livraison.",
    },
    {
      step: "05",
      title: "Documentation",
      description:
        "Plan réseau à jour, étiquetage complet et support pour futurs ajouts.",
    },
  ],
};
