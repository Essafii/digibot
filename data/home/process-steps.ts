export type HomeProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const homeProcessSteps: HomeProcessStep[] = [
  {
    step: 1,
    title: "Échange & visite si besoin",
    description:
      "Nous clarifions l’objectif, les contraintes (accès, horaires, budget) et, pour les chantiers, nous préparons une visite ou un diagnostic à distance.",
  },
  {
    step: 2,
    title: "Devis détaillé",
    description:
      "Matériel, main d’œuvre, délais et exclusions sont listés — vous savez exactement ce que DIGIBOT livre pour ce prix.",
  },
  {
    step: 3,
    title: "Installation & configuration",
    description:
      "Pose, câblage, paramétrage et tests : nous livrons un système opérationnel, pas un « gros colis » à assembler.",
  },
  {
    step: 4,
    title: "Recette avec vous",
    description:
      "Contrôles image / réseau / site ensemble, comptes et accès remis — formation courte pour les usages courants.",
  },
  {
    step: 5,
    title: "Suivi & évolutions",
    description:
      "Maintenance ponctuelle ou contrat selon accord — extensions (caméras, bornes Wi‑Fi, pages web) quand votre activité grandit.",
  },
];
