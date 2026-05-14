import type { Language } from "@/constants/translations";
import type { HomeServiceIcon, ServiceSlug } from "@/data/services/types";

export type HomeServiceCard = {
  id: string;
  icon: HomeServiceIcon;
  detailSlug: ServiceSlug;
  title: string;
  description: string;
};

export const homeServicesHighlight: Record<Language, HomeServiceCard[]> = {
  fr: [
    {
      id: "security",
      icon: "security",
      detailSlug: "securite-videosurveillance",
      title: "Sécurité & vidéosurveillance",
      description:
        "Caméras IP, enregistreurs et visionnage mobile pour commerces, bureaux et résidences.",
    },
    {
      id: "network",
      icon: "network",
      detailSlug: "reseaux-cablage-informatique",
      title: "Réseaux & informatique",
      description:
        "Baie structurée, Wi-Fi professionnel, switch PoE et dépannage réseau.",
    },
    {
      id: "web",
      icon: "web",
      detailSlug: "web-logiciels-sur-mesure",
      title: "Web & logiciels",
      description:
        "Sites vitrines, formulaires et outils sur mesure avec une image professionnelle.",
    },
    {
      id: "marketing",
      icon: "marketing",
      detailSlug: "publicite-reseaux-sociaux",
      title: "Publicité & réseaux sociaux",
      description:
        "Contenus et campagnes Meta pour générer des demandes locales.",
    },
  ],

  en: [
    {
      id: "security",
      icon: "security",
      detailSlug: "securite-videosurveillance",
      title: "Security & video surveillance",
      description:
        "IP cameras, recorders and mobile viewing for shops, offices and residences.",
    },
    {
      id: "network",
      icon: "network",
      detailSlug: "reseaux-cablage-informatique",
      title: "Networks & IT",
      description:
        "Structured cabinet, professional Wi-Fi, PoE switches and network troubleshooting.",
    },
    {
      id: "web",
      icon: "web",
      detailSlug: "web-logiciels-sur-mesure",
      title: "Web & software",
      description:
        "Showcase websites, forms and custom tools with a professional image.",
    },
    {
      id: "marketing",
      icon: "marketing",
      detailSlug: "publicite-reseaux-sociaux",
      title: "Advertising & social media",
      description:
        "Content and Meta campaigns to generate local requests.",
    },
  ],

  ar: [
    {
      id: "security",
      icon: "security",
      detailSlug: "securite-videosurveillance",
      title: "الأمن والمراقبة بالفيديو",
      description:
        "كاميرات IP، أجهزة تسجيل ومشاهدة عبر الهاتف للمتاجر والمكاتب والمنازل.",
    },
    {
      id: "network",
      icon: "network",
      detailSlug: "reseaux-cablage-informatique",
      title: "الشبكات والمعلوميات",
      description:
        "خزانة شبكة، واي فاي احترافي، سويتشات PoE وإصلاح مشاكل الشبكة.",
    },
    {
      id: "web",
      icon: "web",
      detailSlug: "web-logiciels-sur-mesure",
      title: "الويب والبرمجيات",
      description:
        "مواقع تعريفية، نماذج وأدوات مخصصة بصورة احترافية.",
    },
    {
      id: "marketing",
      icon: "marketing",
      detailSlug: "publicite-reseaux-sociaux",
      title: "الإعلانات وشبكات التواصل",
      description:
        "محتوى وحملات Meta لجلب طلبات محلية.",
    },
  ],
};