import { homeProjectsPreview } from "@/data/home/projects-preview";
import type { HomeProjectPreview } from "@/data/home/projects-preview";

export type RealisationCase = HomeProjectPreview & {
  outcome: string;
};

const extraCases: RealisationCase[] = [
  {
    id: "wifi",
    category: "Réseau",
    title: "Wi‑Fi professionnel — bureaux multi-étages",
    description:
      "Couverture homogène, réseau invité séparé et priorisation du trafic pour visioconférence et outils métiers.",
    accent: "indigo",
    outcome: "Moins de coupures, débit stable sur l’ensemble des espaces.",
  },
  {
    id: "maintenance",
    category: "Informatique",
    title: "Contrat de maintenance & support",
    description:
      "Interventions planifiées, sauvegardes vérifiées et hotline pour réagir vite en cas de blocage.",
    accent: "blue",
    outcome: "Temps d’arrêt réduit et meilleure visibilité sur le parc.",
  },
  {
    id: "ecommerce",
    category: "Web",
    title: "Boutique en ligne — catalogue & paiement",
    description:
      "Parcours d’achat fluide, moyens de paiement sécurisés et back-office simple pour gérer commandes et stocks.",
    accent: "sky",
    outcome: "Lancement sans friction et autonomie au quotidien sur le catalogue.",
  },
  {
    id: "social",
    category: "Marketing",
    title: "Stratégie réseaux sociaux — PME locale",
    description:
      "Calendrier éditorial, formats courts et relais publicitaires pour développer la notoriété dans la zone.",
    accent: "indigo",
    outcome: "Audience engagée et prise de rendez-vous en hausse.",
  },
  {
    id: "access",
    category: "Sécurité",
    title: "Contrôle d’accès & interphonie",
    description:
      "Badges, lecteurs et interphone connecté pour sécuriser les entrées sans compliquer l’accueil visiteurs.",
    accent: "blue",
    outcome: "Traçabilité des passages et accueil plus fluide.",
  },
  {
    id: "landing",
    category: "Web",
    title: "Landing page — campagne publicitaire",
    description:
      "Page dédiée à une offre, formulaires trackés et messages alignés avec les annonces pour maximiser les leads.",
    accent: "sky",
    outcome: "Taux de conversion amélioré par rapport à la page générique.",
  },
];

export const realisationCases: RealisationCase[] = [
  ...homeProjectsPreview.map((p) => ({
    ...p,
    outcome:
      p.id === "cameras"
        ? "Surveillance 24h/24 avec alertes et accès distant sécurisé."
        : p.id === "website"
          ? "Image de marque renforcée et premières demandes qualifiées."
          : "Coût par lead maîtrisé et visibilité locale accrue.",
  })),
  ...extraCases,
];
