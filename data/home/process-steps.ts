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
      "Nous clarifions l'objectif, les contraintes et préparons une visite ou un diagnostic à distance.",
  },
  {
    step: 2,
    title: "Devis détaillé",
    description:
      "Matériel, main d'œuvre, délais et exclusions sont listés clairement.",
  },
  {
    step: 3,
    title: "Installation & configuration",
    description:
      "Pose, câblage, paramétrage et tests pour livrer un système opérationnel.",
  },
  {
    step: 4,
    title: "Recette avec vous",
    description:
      "Contrôles, accès remis et courte formation pour les usages courants.",
  },
  {
    step: 5,
    title: "Suivi & évolutions",
    description:
      "Maintenance, extensions et ajustements selon l'évolution de votre activité.",
  },
];
