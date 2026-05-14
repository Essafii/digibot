import type { Language } from "@/constants/translations";

export type HomeProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const homeProcessSteps: Record<Language, HomeProcessStep[]> = {
  fr: [
    {
      step: 1,
      title: "Échange & visite si besoin",
      description:
        "Nous clarifions l’objectif, les contraintes et préparons une visite ou un diagnostic à distance.",
    },
    {
      step: 2,
      title: "Devis détaillé",
      description:
        "Matériel, main d’œuvre, délais et exclusions sont listés clairement.",
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
        "Maintenance, extensions et ajustements selon l’évolution de votre activité.",
    },
  ],

  en: [
    {
      step: 1,
      title: "Discussion & visit if needed",
      description:
        "We clarify the objective, constraints and prepare a visit or remote diagnosis.",
    },
    {
      step: 2,
      title: "Detailed quote",
      description:
        "Equipment, labor, deadlines and exclusions are listed clearly.",
    },
    {
      step: 3,
      title: "Installation & setup",
      description:
        "Installation, cabling, configuration and testing to deliver a working system.",
    },
    {
      step: 4,
      title: "Validation with you",
      description:
        "Checks, access handover and short training for daily use.",
    },
    {
      step: 5,
      title: "Support & upgrades",
      description:
        "Maintenance, extensions and adjustments as your activity grows.",
    },
  ],

  ar: [
    {
      step: 1,
      title: "تواصل وزيارة عند الحاجة",
      description:
        "نوضح الهدف والقيود ونحضّر زيارة أو تشخيصاً عن بعد.",
    },
    {
      step: 2,
      title: "عرض مفصل",
      description:
        "نوضح المعدات، اليد العاملة، المدة وما يشمله العرض بشكل شفاف.",
    },
    {
      step: 3,
      title: "التركيب والإعداد",
      description:
        "تركيب، توصيل، إعداد واختبار لتسليم نظام جاهز للعمل.",
    },
    {
      step: 4,
      title: "التحقق معكم",
      description:
        "مراجعة نهائية، تسليم الصلاحيات وشرح مختصر للاستخدام اليومي.",
    },
    {
      step: 5,
      title: "متابعة وتطوير",
      description:
        "صيانة، توسعات وتعديلات حسب تطور نشاطكم.",
    },
  ],
};