import Link from "next/link";

import { BRAND, BRAND_LOGO_SRC } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";

export function FooterLogo() {
  return (
    <Link
      href={ROUTES.home}
      className="inline-flex rounded-xl bg-white p-3 shadow-md shadow-black/15 ring-1 ring-white/60 transition hover:bg-brand-50 hover:ring-brand-200/80 sm:p-3.5"
    >
      <img
        src={BRAND_LOGO_SRC}
        alt={`${BRAND.name} — ${BRAND.tagline}`}
        width={280}
        height={72}
        decoding="async"
        className="h-12 w-auto sm:h-14 md:h-16"
      />
    </Link>
  );
}
