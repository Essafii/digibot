import type { Language } from "@/constants/translations";

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

export const homeWhyDigibot: Record<Language, HomeWhyBlock[]> = {
  fr: [
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
  ],

  en: [
    {
      id: "custom",
      icon: "custom",
      title: "Tailored, not generic",
      description:
        "We adapt the equipment and scope to your shop, office or home.",
    },
    {
      id: "expertise",
      icon: "expertise",
      title: "Security, network, web & ads",
      description:
        "One team for cameras, network, website and campaigns.",
    },
    {
      id: "support",
      icon: "support",
      title: "From planning to handover",
      description:
        "Detailed quote, clean installation, tested settings and clear explanations.",
    },
    {
      id: "reactive",
      icon: "reactive",
      title: "Useful responsiveness",
      description:
        "Fast communication by phone, WhatsApp or email.",
    },
    {
      id: "image",
      icon: "image",
      title: "Professional field result",
      description:
        "Clean cabling, finishes and interfaces for a polished result.",
    },
    {
      id: "tech",
      icon: "tech",
      title: "Modern technologies",
      description:
        "Reliable and durable solutions adapted to today’s market.",
    },
  ],

  ar: [
    {
      id: "custom",
      icon: "custom",
      title: "حلول مخصصة وليست جاهزة",
      description:
        "نلائم المعدات ونطاق العمل حسب متجركم أو مكتبكم أو منزلكم.",
    },
    {
      id: "expertise",
      icon: "expertise",
      title: "أمن، شبكات، ويب وإعلانات",
      description:
        "فريق واحد للكاميرات، الشبكات، الموقع والحملات الإعلانية.",
    },
    {
      id: "support",
      icon: "support",
      title: "من التخطيط إلى التسليم",
      description:
        "عرض واضح، تركيب نظيف، إعدادات مجربة وشرح مبسط.",
    },
    {
      id: "reactive",
      icon: "reactive",
      title: "استجابة سريعة ومفيدة",
      description:
        "تواصل سريع عبر الهاتف أو واتساب أو البريد الإلكتروني.",
    },
    {
      id: "image",
      icon: "image",
      title: "نتيجة احترافية في الميدان",
      description:
        "توصيلات منظمة، تشطيبات نظيفة وواجهات مرتبة.",
    },
    {
      id: "tech",
      icon: "tech",
      title: "تقنيات حديثة",
      description:
        "حلول موثوقة ودائمة مناسبة للسوق الحالي.",
    },
  ],
};