import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailBody } from "@/components/sections/services/service-detail-body";
import { ServiceDetailHero } from "@/components/sections/services/service-detail-hero";
import { ServiceDetailTrustStrip } from "@/components/sections/services/service-detail-trust-strip";
import {
  ALL_SERVICE_SLUGS,
  getServicePage,
  isServiceSlug,
} from "@/data/services/pages/index";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ALL_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    return { title: "Service" };
  }
  const data = getServicePage(slug)!;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    notFound();
  }
  const data = getServicePage(slug)!;

  return (
    <>
      <ServiceDetailHero data={data} />
      <ServiceDetailTrustStrip />
      <ServiceDetailBody data={data} />
    </>
  );
}
