import { ROUTES } from "@/constants/routes";
import { homeServicesHighlight } from "@/data/home/services-highlight";

/** Liens services pied de page — titres alignés sur la page d’accueil. */
export const footerServiceLinks = homeServicesHighlight.map((s) => ({
  label: s.title,
  href: ROUTES.services,
}));
