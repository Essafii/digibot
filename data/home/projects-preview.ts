import type { Language } from "@/constants/translations";

export type HomeProjectPreview = {
  id: string;
  category: string;
  title: string;
  description: string;
  accent: "blue" | "indigo" | "sky";
};

export const homeProjectsPreview: Record<Language, HomeProjectPreview[]> = {
  fr: [
    {
      id: "cameras",
      category: "Sécurité",
      title: "Vidéo IP — commerce de proximité",
      description:
        "Huit caméras intérieur / extérieur, NVR 30 jours, accès smartphone pour le gérant — câblage discret.",
      accent: "blue",
    },
    {
      id: "website",
      category: "Web",
      title: "Site vitrine PME — leads qualifiés",
      description:
        "Site Next.js rapide, pages services, formulaire de demande et base SEO locale.",
      accent: "indigo",
    },
    {
      id: "ads",
      category: "Marketing",
      title: "Meta Ads — offre locale Casa",
      description:
        "Campagne leads locale, créatives carrousel et messages WhatsApp Business.",
      accent: "sky",
    },
  ],

  en: [
    {
      id: "cameras",
      category: "Security",
      title: "IP video — local shop",
      description:
        "Eight indoor/outdoor cameras, 30-day NVR, smartphone access for the manager and discreet cabling.",
      accent: "blue",
    },
    {
      id: "website",
      category: "Web",
      title: "SME showcase website — qualified leads",
      description:
        "Fast Next.js website, service pages, request form and local SEO foundation.",
      accent: "indigo",
    },
    {
      id: "ads",
      category: "Marketing",
      title: "Meta Ads — local offer in Casablanca",
      description:
        "Local lead campaign, carousel creatives and WhatsApp Business messages.",
      accent: "sky",
    },
  ],

  ar: [
    {
      id: "cameras",
      category: "الأمن",
      title: "كاميرات IP — متجر محلي",
      description:
        "ثماني كاميرات داخلية وخارجية، تسجيل 30 يوماً، وصول عبر الهاتف وتوصيل منظم.",
      accent: "blue",
    },
    {
      id: "website",
      category: "الويب",
      title: "موقع تعريفي لشركة — عملاء مؤهلون",
      description:
        "موقع سريع بـ Next.js، صفحات خدمات، نموذج طلب وأساس SEO محلي.",
      accent: "indigo",
    },
    {
      id: "ads",
      category: "التسويق",
      title: "إعلانات Meta — عرض محلي في الدار البيضاء",
      description:
        "حملة عملاء محلية، تصاميم كاروسيل ورسائل WhatsApp Business.",
      accent: "sky",
    },
  ],
};