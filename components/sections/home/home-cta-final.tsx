"use client";

import { translations } from "@/constants/translations";
import { useLanguage } from "@/components/language-provider";
import { PageCta } from "@/components/sections/page-cta";

export function HomeCtaFinal() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <PageCta
      title={t.homeCtaTitle}
      description={t.homeCtaDescription}
      primaryLabel={t.quote}
      primaryHint={t.homeCtaPrimaryHint}
      secondaryHint={t.homeCtaSecondaryHint}
    />
  );
}