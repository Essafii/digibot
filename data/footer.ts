import { ROUTES } from "@/constants/routes";
import { servicesCatalog } from "@/data/services/catalog";
import { servicePath } from "@/constants/services";

/** Liens services pied de page — une entrée par fiche service dédiée + énergie solaire. */
export const footerServiceLinks = [
  ...servicesCatalog.map((s) => ({
    label: s.title,
    href: servicePath(s.slug),
  })),
  { label: "Énergie solaire", href: ROUTES.solar },
];
