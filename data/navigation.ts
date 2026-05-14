import { ROUTES, type RouteHref } from "@/constants/routes";
import { translations, type Language } from "@/constants/translations";

export type NavItem = {
  label: string;
  href: RouteHref;
};

export function getMainNav(language: Language): NavItem[] {
  const t = translations[language];

  return [
    { label: t.home, href: ROUTES.home },
    { label: t.about, href: ROUTES.about },
    { label: t.services, href: ROUTES.services },
    { label: t.projects, href: ROUTES.projects },
    { label: t.quote, href: ROUTES.quote },
    { label: t.contact, href: ROUTES.contact },
  ];
}

export function getMainNavInline(language: Language): NavItem[] {
  return getMainNav(language).filter((item) => item.href !== ROUTES.quote);
}

export const mainNav: NavItem[] = getMainNav("fr");

export const mainNavInline: NavItem[] = mainNav.filter(
  (item) => item.href !== ROUTES.quote,
);