import Image from "next/image";
import Link from "next/link";

import { BRAND, BRAND_LOGO_SRC } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";

export function FooterLogo() {
  return (
    <Link
      href={ROUTES.home}
      className="inline-flex rounded-xl bg-white p-2.5 shadow-md shadow-black/15 ring-1 ring-white/60 transition hover:bg-brand-50 hover:ring-brand-200/80"
    >
      <Image
        src={BRAND_LOGO_SRC}
        alt={`${BRAND.name} — ${BRAND.tagline}`}
        width={200}
        height={52}
        unoptimized
        sizes="200px"
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
