import { translations } from "@/constants/translations";
import { PageCta } from "@/components/sections/page-cta";

const t = translations.fr;

export function HomeCtaFinal() {
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
