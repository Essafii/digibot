import { ROUTES, type RouteHref } from "@/constants/routes";

export type NavItem = {
  label: string;
  href: RouteHref;
};

export const mainNav: NavItem[] = [
  { label: "Accueil", href: ROUTES.home },
  { label: "À propos", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Réalisations", href: ROUTES.projects },
  { label: "Devis", href: ROUTES.quote },
  { label: "Contact", href: ROUTES.contact },
];

/** Liens affichés dans la barre (le devis est un CTA séparé). */
export const mainNavInline: NavItem[] = mainNav.filter(
  (item) => item.href !== ROUTES.quote,
);
