export const ROUTES = {
  home: "/",
  about: "/a-propos",
  services: "/services",
  projects: "/realisations",
  solar: "/energie-solaire",
  quote: "/demande-de-devis",
  contact: "/contact",
} as const;

export type RouteHref = (typeof ROUTES)[keyof typeof ROUTES];
