import type { ServicePageContent } from "../types";

export const teledistributionPage: ServicePageContent = {
  slug: "teledistribution",
  icon: "tv",
  metaTitle: "Télédistribution — Distribution TV & satellite",
  metaDescription:
    "Distribution TV satellite et TNT dans vos bâtiments : DIGIBOT installe les têtes de réseau, câblages coaxiaux et prises TV pour hôtels, résidences et entreprises au Maroc.",
  hero: {
    title: "Télédistribution",
    subtitle:
      "Signal TV satellite et TNT distribué dans chaque local — de la tête de réseau jusqu'à la prise murale, avec un niveau de signal calibré sur chaque point.",
  },
  presentation: {
    whatItIs:
      "La télédistribution centralise la réception des signaux TV (satellite, TNT, IPTV) dans une tête de réseau, puis les distribue via un réseau coaxial structuré vers toutes les prises du bâtiment. Chaque point reçoit un niveau de signal conforme — sans image dégradée ni pixellisation.",
    whatFor:
      "Offrir à chaque occupant une réception TV de qualité sans antenne individuelle, simplifier la maintenance et pouvoir ajouter des chaînes ou des sources sans recâbler l'ensemble du bâtiment.",
    useCases: [
      "Hôtel : distribution chambre par chambre avec grille de chaînes personnalisée.",
      "Résidence : antenne collective remplacée par une tête satellite centralisée.",
      "Clinique / hôpital : TV patient avec contrôle du volume par chambre.",
      "Restaurant / salle de sport : affichage multi-écrans depuis une source unique.",
    ],
  },
  solutions: [
    {
      title: "Étude de niveau & plan de distribution",
      description:
        "Calcul des niveaux de signal (dBµV) selon longueur de câble, nombre de dérivations et qualité de la source — pour éviter les zones mortes et les surcharges.",
    },
    {
      title: "Installation de la tête de réseau",
      description:
        "Amplificateur de tête, convertisseur satellite (LNB), modulateur HDMI-RF si nécessaire — le tout en armoire technique sécurisée.",
    },
    {
      title: "Câblage coaxial & dérivateurs",
      description:
        "Pose de câble coaxial 75 Ω, dérivateurs et répartiteurs de qualité, prises TV murales — tirage propre en goulotte ou encastré.",
    },
    {
      title: "Mesure & réglage final",
      description:
        "Vérification du niveau signal sur chaque prise au misurateur, correction des écarts par atténuateurs — livraison avec rapport de mesure.",
    },
  ],
  offerings: [
    {
      category: "Équipements fréquents",
      items: [
        "Tête satellite LNB universel ou quadruple sortie selon nombre d'utilisateurs",
        "Amplificateur de tête large bande 47-2150 MHz",
        "Dérivateurs et répartiteurs jusqu'à 32 sorties",
        "Câble coaxial blindé double gaine qualité broadcast",
        "Prises TV murales double (TV + satellite)",
        "Modulateur HDMI-RF pour sources locales (décodeur, lecteur)",
      ],
    },
    {
      category: "Prestations associées",
      items: [
        "Remplacement d'ancienne antenne collective défectueuse",
        "Extension du réseau lors d'une rénovation ou d'un agrandissement",
        "Intégration d'un écran d'affichage dynamique (digital signage)",
        "Raccordement IPTV sur réseau informatique existant",
      ],
    },
  ],
  benefits: [
    {
      title: "Réception uniforme",
      description: "Signal calibré sur chaque prise — plus d'image pixellisée.",
    },
    {
      title: "Entretien simplifié",
      description: "Une seule tête de réseau à entretenir, en armoire technique.",
    },
    {
      title: "Évolutif",
      description: "Ajout de chaînes ou de sources sans recâbler tout le bâtiment.",
    },
    {
      title: "Installation discrète",
      description: "Câbles encastrés ou en goulottes — finitions soignées.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Audit du site & besoins",
      description:
        "Relevé des plans, comptage des prises, type de source (satellite, TNT, IPTV) et qualité souhaitée.",
    },
    {
      step: "02",
      title: "Étude & devis",
      description:
        "Plan de distribution, liste matériel, niveaux calculés, délai d'intervention et garanties.",
    },
    {
      step: "03",
      title: "Installation",
      description:
        "Pose de la tête de réseau, câblage coaxial, pose des prises et connexion des dérivateurs.",
    },
    {
      step: "04",
      title: "Mesures & réglages",
      description:
        "Vérification du niveau signal sur chaque point avec analyseur — correction si nécessaire.",
    },
    {
      step: "05",
      title: "Réception & suivi",
      description:
        "Remise du rapport de mesure, notice de la tête de réseau et intervention rapide si besoin.",
    },
  ],
};
