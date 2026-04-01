export type HomeProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const homeProcessSteps: HomeProcessStep[] = [
  {
    step: 1,
    title: "Analyse du besoin",
    description:
      "Échange et audit pour comprendre votre contexte, vos contraintes et vos priorités.",
  },
  {
    step: 2,
    title: "Proposition de solution",
    description:
      "Devis détaillé, choix des équipements et planning prévisionnel, en toute transparence.",
  },
  {
    step: 3,
    title: "Mise en œuvre",
    description:
      "Installation, configuration et intégration réalisées avec rigueur et respect des délais.",
  },
  {
    step: 4,
    title: "Test et validation",
    description:
      "Vérifications, mise en service et formation aux usages pour une prise en main immédiate.",
  },
  {
    step: 5,
    title: "Suivi et maintenance",
    description:
      "Accompagnement dans la durée, mises à jour et interventions selon vos besoins.",
  },
];
