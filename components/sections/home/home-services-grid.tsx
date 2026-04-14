import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowUpRight, Camera, Code2, Megaphone, Network } from "lucide-react";

import { homeServicesHighlight } from "@/data/home/services-highlight";
import type { HomeServiceIcon } from "@/data/services/types";
import { servicePath } from "@/constants/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils/cn";

const serviceIcons: Record<
  HomeServiceIcon,
  ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  security: Camera,
  network: Network,
  web: Code2,
  marketing: Megaphone,
};

export function HomeServicesGrid() {
  return (
    <SectionShell tone="white" className="!py-20 sm:!py-24 lg:!py-28">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Expertises"
          title="Ce que DIGIBOT déploie pour vous"
          description="Quatre domaines, une même exigence : des installations propres, des devis lisibles et un suivi jusqu’à la mise en service."
          align="center"
          className="mx-auto max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {homeServicesHighlight.map((item) => {
            const Icon = serviceIcons[item.icon];
            const detailHref = servicePath(item.detailSlug);
            return (
              <li key={item.id}>
                <article
                  className={cn(
                    "group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-7",
                    "transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10",
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/25 transition group-hover:bg-brand-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-900/72">
                    {item.description}
                  </p>
                  <Link
                    href={detailHref}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
                  >
                    Découvrir ce service
                    <ArrowUpRight
                      className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </SectionShell>
  );
}
