import type { ServicePageContent } from "../types";

export const contratMaintenancePage: ServicePageContent = {
  slug: "contrat-maintenance",
  icon: "maintenance",
  metaTitle: "Contrats de maintenance & suivi — Réseau, sécurité & informatique",
  metaDescription:
    "Contrats de maintenance DIGIBOT pour entreprises, bureaux et résidences : suivi réseau, caméras, alarme, contrôle d'accès, matériel informatique — visites préventives, interventions rapides et rapport écrit.",
  hero: {
    title: "Contrats de maintenance & suivi",
    subtitle:
      "Un seul contrat pour tous vos systèmes — réseau, caméras, alarme, contrôle d'accès, sonorisation et matériel informatique. Visites préventives planifiées, interventions rapides garanties et rapport écrit après chaque passage.",
  },
  presentation: {
    whatItIs:
      "Un contrat de maintenance DIGIBOT est un accord de suivi périodique qui comprend des visites préventives planifiées, une hotline technique dédiée, des interventions curatives prioritaires et un rapport d'état après chaque visite. Il couvre tous les domaines que nous installons : réseau, vidéosurveillance, contrôle d'accès, alarme, sonorisation, vidéophone, câblage, télédistribution et matériel informatique — selon le périmètre défini avec vous.",
    whatFor:
      "Éviter les pannes non anticipées, prolonger la durée de vie de vos équipements, disposer d'un interlocuteur unique joignable rapidement et budgétiser votre maintenance technique sur l'année — sans dépenses imprévues.",
    useCases: [
      "Société & open space : maintenance réseau, postes, imprimantes et caméras — un seul contrat.",
      "Commerce : vérification trimestrielle caméras, alarme et Wi-Fi — rapport PDF à chaque visite.",
      "Résidence / immeuble : suivi portail automatique, vidéophone, interphonie et télédistribution.",
      "Site multi-bâtiments : couverture de tous les systèmes de sécurité et d'infrastructure réseau.",
    ],
  },
  solutions: [
    {
      title: "Maintenance préventive planifiée",
      description:
        "Visites programmées selon la formule choisie (semestrielle, trimestrielle ou mensuelle) : nettoyage, mise à jour firmware, vérification des enregistrements, tests de détection et rapport écrit remis sous 48 h.",
    },
    {
      title: "Interventions curatives prioritaires",
      description:
        "En cas de panne, intervention garantie sous 48 h ouvrées (formule Essentiel), 24 h (Standard) ou 4 h (Premium) — diagnostic, réparation sur place ou remplacement matériel selon le contrat.",
    },
    {
      title: "Hotline & support à distance",
      description:
        "Ligne dédiée aux clients sous contrat, prise en main à distance pour les incidents résolvables sans déplacement — disponible en heures ouvrées, étendue pour les formules Premium.",
    },
    {
      title: "Rapports & historique documenté",
      description:
        "Compte-rendu détaillé après chaque visite ou intervention : état des équipements, actions réalisées, pièces remplacées, recommandations et calendrier des prochaines échéances.",
    },
  ],
  offerings: [
    {
      category: "Formules disponibles",
      items: [
        "Essentiel : 1 visite / semestre + hotline + intervention sous 48 h ouvrées",
        "Standard : 1 visite / trimestre + rapport détaillé + intervention sous 24 h ouvrées",
        "Premium : 1 visite / mois + rapport complet + intervention sous 4 h + pièces courantes incluses",
        "Sur mesure : multi-sites, formules mixtes ou périmètre de domaines spécifiques",
      ],
    },
    {
      category: "Domaines couverts",
      items: [
        "Réseau & Wi-Fi : switches, routeurs, bornes d'accès, câblage structuré",
        "Vidéosurveillance : caméras IP, NVR, enregistrements, accès mobile",
        "Contrôle d'accès : lecteurs RFID, centrale, badges, logiciel de gestion",
        "Système d'alarme : détecteurs, sirènes, centrale, transmission GSM/IP",
        "Sonorisation & vidéophone : amplificateurs, HP, portiers IP, moniteurs",
        "Portes & portails automatiques : opérateurs, cellules, motorisations",
        "Matériel informatique : PC, imprimantes, écrans, serveurs, NAS",
      ],
    },
  ],
  benefits: [
    {
      title: "Zéro panne surprise",
      description: "La maintenance préventive détecte les dérives avant qu'elles deviennent des pannes coûteuses.",
    },
    {
      title: "Délai garanti",
      description: "Délai d'intervention contractualisé — vous savez exactement quand nous serons là.",
    },
    {
      title: "Budget prévisible",
      description: "Mensualité ou annuité fixe sans coûts cachés — les interventions courantes sont incluses.",
    },
    {
      title: "Traçabilité complète",
      description: "Rapport écrit après chaque visite — historique des interventions disponible à tout moment.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Audit du parc",
      description:
        "Inventaire des équipements à couvrir, état actuel, volumes et priorités métier — visite ou liste fournie par le client.",
    },
    {
      step: "02",
      title: "Proposition de contrat",
      description:
        "Formule adaptée (Essentiel, Standard ou Premium), périmètre exact des domaines et tarif mensuel ou annuel.",
    },
    {
      step: "03",
      title: "Signature & planification",
      description:
        "Validation du contrat, calendrier des visites préventives et activation de la hotline dédiée.",
    },
    {
      step: "04",
      title: "Visites & suivi",
      description:
        "Chaque visite génère un rapport écrit remis sous 48 h — avec les prochaines échéances et les actions recommandées.",
    },
    {
      step: "05",
      title: "Révision annuelle",
      description:
        "Bilan annuel, adaptation du contrat si le parc évolue, renouvellement avec garantie de maintien du tarif.",
    },
  ],
};
