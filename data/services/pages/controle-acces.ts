import type { ServicePageContent } from "../types";

export const controleAccesPage: ServicePageContent = {
  slug: "controle-acces",
  icon: "lock",
  metaTitle: "Contrôle d'accès — Badges, biométrie & lecteurs",
  metaDescription:
    "Systèmes de contrôle d'accès au Maroc : badges RFID, lecteurs biométriques, gestion des droits et historique des passages — pour bureaux, sites industriels et résidences.",
  hero: {
    title: "Contrôle d'accès",
    subtitle:
      "Qui entre, où et quand — badge RFID, code PIN ou empreinte digitale, avec journal des passages et gestion des droits depuis un logiciel centralisé.",
  },
  presentation: {
    whatItIs:
      "Le contrôle d'accès est un système électronique qui restreint l'entrée dans certaines zones à des personnes autorisées. Il associe des lecteurs (badge RFID, code PIN, empreinte digitale), une centrale de contrôle et un logiciel de gestion des droits avec historique des passages en temps réel.",
    whatFor:
      "Sécuriser les zones sensibles (serveur, caisse, stock), gérer les horaires d'accès, suivre les présences et supprimer les risques liés aux clés perdues ou copiées.",
    useCases: [
      "Bureau / open space : accès par badge nominatif, zones restreintes par département.",
      "Clinique / laboratoire : salle de soins, pharmacie interne, archives.",
      "Entrepôt / usine : quai de chargement, salle serveur, zone haute valeur.",
      "Résidence : hall d'entrée, ascenseur, parking sous-sol, local technique.",
    ],
  },
  solutions: [
    {
      title: "Lecteurs & terminaux",
      description:
        "Lecteurs RFID Mifare 13,56 MHz, claviers à code, lecteurs biométriques empreinte ou reconnaissance faciale — selon le niveau de sécurité requis.",
    },
    {
      title: "Centrale & câblage",
      description:
        "Contrôleur multi-portes avec sortie relais (gâche, électroaimant, serrure électrique), câblage bifilaire ou TCP/IP selon configuration du site.",
    },
    {
      title: "Logiciel de gestion",
      description:
        "Attribution des droits par personne et par zone horaire, journal des passages temps réel, export des présences, alertes sur tentatives non autorisées.",
    },
    {
      title: "Intégration & extension",
      description:
        "Connexion à la vidéosurveillance (photo à chaque passage), intégration au système d'alarme, extension possible sans recâbler.",
    },
  ],
  offerings: [
    {
      category: "Équipements courants",
      items: [
        "Lecteurs RFID 125 kHz ou Mifare 13,56 MHz (ZKTeco, HID ou équivalent)",
        "Terminaux biométriques empreinte + RFID combinés",
        "Centrale multi-portes 2 à 32 portes",
        "Gâches électriques, électroaimants et serrures encastrées",
        "Badges de proximité vierges personnalisables",
      ],
    },
    {
      category: "Prestations associées",
      items: [
        "Remplacement de serrures mécaniques par un contrôle électronique",
        "Intégration avec le système de vidéosurveillance existant",
        "Gestion des visiteurs avec badges temporaires",
        "Formation du responsable à l'administration du logiciel",
      ],
    },
  ],
  benefits: [
    {
      title: "Traçabilité complète",
      description: "Historique des passages accessible à tout moment par le responsable.",
    },
    {
      title: "Fin des clés perdues",
      description: "Badge désactivé en 30 secondes — plus de remplacement de serrure.",
    },
    {
      title: "Zones protégées",
      description: "Accès segmenté par rôle, département et plage horaire.",
    },
    {
      title: "Intégration aisée",
      description: "Compatible vidéosurveillance et alarme sur le même projet.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Analyse des flux & zones",
      description:
        "Cartographie des portes à contrôler, des profils utilisateurs et des horaires d'accès.",
    },
    {
      step: "02",
      title: "Devis & plan technique",
      description:
        "Choix des lecteurs, câblage, centrale, licences logiciel et délai d'intervention.",
    },
    {
      step: "03",
      title: "Installation",
      description:
        "Pose des lecteurs, câblage sécurisé, paramétrage de la centrale et du logiciel.",
    },
    {
      step: "04",
      title: "Programmation & tests",
      description:
        "Création des profils utilisateurs, attribution des droits et tests de chaque porte.",
    },
    {
      step: "05",
      title: "Formation & suivi",
      description:
        "Prise en main du logiciel, remise des badges et support si évolution des droits.",
    },
  ],
};
