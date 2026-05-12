import Link from "next/link";

import { BRAND, BRAND_LOGO_SRC } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";

export function NavbarLogo() {
  return (
    <Link
      href={ROUTES.home}
      className="relative flex shrink-0 items-center outline-none ring-brand-400/40 transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <img
        src={BRAND_LOGO_SRC}
        alt={`${BRAND.name} — ${BRAND.tagline}`}
        fetchPriority="high"
        decoding="async"
        className="block h-[140px] w-auto max-h-none object-contain sm:h-[160px] md:h-[180px] lg:h-[210px]"
      />
    </Link>
  );
}