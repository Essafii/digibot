import type { ServiceSlug } from "@/data/services/types";

/** URL canonique d’une page service dédiée. */
export function servicePath(slug: ServiceSlug): `/services/${ServiceSlug}` {
  return `/services/${slug}`;
}
