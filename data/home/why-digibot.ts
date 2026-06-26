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
      "Nous adaptons le matériel et le périmètre à votre commerce, bureau ou domicile.",
  },
  {
    id: "expertise",
    icon: "expertise",
    title: "Sécurité, réseau, web & pub",
    description:
      "Une seule équipe pour la caméra, le réseau, le site et la campagne.",
  },
  {
    id: "support",
    icon: "support",
    title: "Du cadrage à la passation",
    description:
      "Devis détaillé, installation propre, réglages testés et explications claires.",
  },
  {
    id: "reactive",
    icon: "reactive",
    title: "Réactivité utile",
    description:
      "Échanges rapides par téléphone, WhatsApp ou e-mail.",
  },
  {
    id: "image",
    icon: "image",
    title: "Rendu pro sur le terrain",
    description:
      "Câblage, finitions et interfaces soignées pour un résultat propre.",
  },
  {
    id: "tech",
    icon: "tech",
    title: "Technologies actuelles",
    description:
      "Solutions modernes choisies pour leur fiabilité et leur durabilité.",
  },
];
