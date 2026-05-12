import Link from "next/link";

import { BRAND_LOGO_SRC } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";

export function NavbarLogo() {
  return (
    <Link
      href={ROUTES.home}
      className="relative flex shrink-0 items-center bg-red-500 p-4"
    >
      <img
        src={BRAND_LOGO_SRC}
        alt="TEST-LOGO-GRAND"
        className="block h-[300px] w-auto max-h-none object-contain"
      />
    </Link>
  );
}