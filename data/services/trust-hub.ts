/**
 * Section crédibilité / preuves — page /services.
 * Témoignages : voir `data/testimonials/service-testimonials.ts`.
 */

export type TrustProofExample = {
  id: string;
  category: string;
  title: string;
  outcome: string;
};

export const trustSectionIntro = {
  eyebrow: "Terrain & résultats",
  title: "Des missions concrètes, comme les vôtres",
  description:
    "Exemples représentatifs de chantiers DIGIBOT au Maroc — du commerce de proximité aux bureaux multi-sites. Chaque projet est dimensionné sur mesure.",
} as const;

export const trustProofExamples: TrustProofExample[] = [
  {
    id: "cam",
    category: "Sécurité",
    title: "Commerce de proximité — caisse & réserve",
    outcome:
      "Caméras 4 MP, visionnage smartphone pour le gérant, enregistrement 30 jours sur NVR — pose discrète derrière faux plafond.",
  },
  {
    id: "wifi",
    category: "Réseau",
    title: "Bureaux — Wi‑Fi & VLAN invité",
    outcome:
      "Débit stable open space + SSID « Visiteurs » isolé du réseau interne ; switch PoE prêt pour futurs téléphones IP.",
  },
  {
    id: "web",
    category: "Web",
    title: "PME — site vitrine & demandes qualifiées",
    outcome:
      "Site Next.js rapide, formulaire structuré (type de besoin, urgence) pour trier les demandes avant rappel.",
  },
];

export const trustReassurancePhrases = [
  "Installation soignée & finitions propres",
  "Devis détaillé — périmètre et matériel listés",
  "Accompagnement jusqu’à la mise en service",
  "Solutions dimensionnées à votre budget",
] as const;

export const serviceDetailTrustChips = [
  "Intervention planifiée rapidement",
  "Devis clair — pas de surprise sur le périmètre",
  "Accompagnement complet",
  "Matériel adapté à votre budget",
] as const;
