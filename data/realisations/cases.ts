/**
 * Réalisations — page /realisations & aperçu accueil.
 *
 * Ajouter une carte :
 * 1. Étendre `extraCases` (ou centraliser ici tous les cas et importer `homeProjectsPreview` seulement pour l’accueil).
 * 2. Renseigner id unique, category, title, description, accent, outcome.
 * 3. Garder des formulations factuelles (pas de chiffres inventés).
 */

import { homeProjectsPreview } from "@/data/home/projects-preview";
import type { HomeProjectPreview } from "@/data/home/projects-preview";

export type RealisationCase = HomeProjectPreview & {
  outcome: string;
};

const extraCases: RealisationCase[] = [
  {
    id: "wifi",
    category: "Réseau",
    title: "Bureaux — Wi‑Fi & VLAN invité",
    description:
      "Switch managé PoE, trois bornes ceiling, SSID « Visiteurs » isolé du LAN, priorisation visio — baie re-câblée et étiquetée.",
    accent: "indigo",
    outcome:
      "Débit homogène open space + salle de réunion ; invités sans accès aux serveurs internes.",
  },
  {
    id: "maintenance",
    category: "Informatique",
    title: "Contrat maintenance PME",
    description:
      "Postes Windows, antivirus centralisé, sauvegardes NAS vérifiées, tickets prioritaires — rapport mensuel synthétique.",
    accent: "blue",
    outcome:
      "Temps d’arrêt divisé par deux sur six mois ; parc inventorié pour anticiper les remplacements.",
  },
  {
    id: "ecommerce",
    category: "Web",
    title: "Catalogue en ligne — artisanat",
    description:
      "Catalogue galerie, fiches produit, formulaire devis et lien WhatsApp — hébergement sécurisé, sauvegardes automatiques.",
    accent: "sky",
    outcome:
      "Prise de contact x3 la première saison ; autonomie sur les fiches après formation.",
  },
  {
    id: "social",
    category: "Marketing",
    title: "Réseaux sociaux — restaurant",
    description:
      "Calendrier 3 posts / semaine, stories menu du jour, boosts ciblés 5 km + campagne Ramadan — visuels alignés charte.",
    accent: "indigo",
    outcome:
      "Réservations messages +40 % sur la période ; coût par message maîtrisé.",
  },
  {
    id: "access",
    category: "Sécurité",
    title: "Contrôle d’accès — petit immeuble",
    description:
      "Lecteurs badge, centrale 4 portes, interphone IP, historique des passages — intégration avec interphones existants.",
    accent: "blue",
    outcome:
      "Syndic rassuré, moins d’intrusions parking ; historique exportable en PDF.",
  },
  {
    id: "landing",
    category: "Web",
    title: "Landing page — lancement produit",
    description:
      "Page unique mobile-first, formulaire CRM-friendly, tracking Meta & Google Ads — textes relus avec l’équipe marketing.",
    accent: "sky",
    outcome:
      "Taux de conversion +35 % vs page générique du site principal.",
  },
];

export const realisationCases: RealisationCase[] = [
  ...homeProjectsPreview.map((p) => ({
    ...p,
    outcome:
      p.id === "cameras"
        ? "Visionnage 24h/24, export incidents en HD, accès limité au personnel autorisé."
        : p.id === "website"
          ? "Temps de chargement divisé par deux ; premières demandes qualifiées dès la première semaine."
          : "Coût par lead stable ; part de trafic WhatsApp passée de 15 % à 40 %.",
  })),
  ...extraCases,
];
