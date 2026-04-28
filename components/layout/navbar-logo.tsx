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
        width={360}
        height={93}
        fetchPriority="high"
        decoding="async"
        className="h-[52px] w-auto sm:h-[58px] md:h-[62px] lg:h-[68px]"
      />
    </Link>
  );
}
