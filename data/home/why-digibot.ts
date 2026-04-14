export type HomeWhyIcon =
  | "custom"
  | "expertise"
  | "support"
  | "reactive"
  | "image"
  | "tech";

export type HomeWhyBlock = {
  id: string;
  icon: HomeWhyIcon;
  title: string;
  description: string;
};

export const homeWhyDigibot: HomeWhyBlock[] = [
  {
    id: "custom",
    icon: "custom",
    title: "Sur mesure, pas sur catalogue",
    description:
      "Nous dimensionnons le matériel et le périmètre à votre commerce, bureau ou domicile — pas de surenchère inutile.",
  },
  {
    id: "expertise",
    icon: "expertise",
    title: "Sécurité, réseau, web & pub",
    description:
      "Une seule équipe pour la caméra, la baie réseau, le site et la campagne : moins de coordination, plus de cohérence.",
  },
  {
    id: "support",
    icon: "support",
    title: "Du cadrage à la passation",
    description:
      "Devis détaillé, installation propre, réglages testés puis explications pour que vous restiez autonome au quotidien.",
  },
  {
    id: "reactive",
    icon: "reactive",
    title: "Réactivité utile",
    description:
      "Échanges rapides par téléphone, WhatsApp ou e-mail — interventions planifiées pour limiter l’impact sur votre activité.",
  },
  {
    id: "image",
    icon: "image",
    title: "Rendu pro sur le terrain",
    description:
      "Câblage, finitions et interfaces soignées : ce que vos clients et vos équipes voient au quotidien compte pour nous.",
  },
  {
    id: "tech",
    icon: "tech",
    title: "Technologies actuelles",
    description:
      "Équipements courants du marché (vidéo IP, Wi‑Fi entreprise, web moderne) choisis pour la fiabilité et la durabilité.",
  },
];
