import Image from "next/image";
import Link from "next/link";

import { BRAND, BRAND_LOGO_SRC } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";

export function NavbarLogo() {
  return (
    <Link
      href={ROUTES.home}
      className="relative flex shrink-0 items-center outline-none ring-brand-400/40 transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <Image
        src={BRAND_LOGO_SRC}
        alt={`${BRAND.name} — ${BRAND.tagline}`}
        width={280}
        height={72}
        priority
        sizes="(max-width: 768px) 200px, 280px"
        className="h-[44px] w-auto md:h-[48px] lg:h-[52px]"
      />
    </Link>
  );
}
