import { servicesCatalog } from "@/data/services/catalog";
import { servicePath } from "@/constants/services";

/** Liens services pied de page — une entrée par fiche service dédiée. */
export const footerServiceLinks = servicesCatalog.map((s) => ({
  label: s.title,
  href: servicePath(s.slug),
}));
