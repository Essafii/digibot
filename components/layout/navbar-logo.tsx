import Link from "next/link";

import { BRAND_LOGO_SRC } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";

export function NavbarLogo() {
  return (
    <Link
      href={ROUTES.home}
      className="relative flex shrink-0 items-center -ml-6 lg:-ml-10"
    >
      <img
        src={BRAND_LOGO_SRC}
        alt="Digibot"
        className="block h-24 w-auto object-contain"
      />
    </Link>
  );
}