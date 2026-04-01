import { HomeCtaFinal } from "@/components/sections/home/home-cta-final";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeProcess } from "@/components/sections/home/home-process";
import { HomeProjectsPreview } from "@/components/sections/home/home-projects-preview";
import { HomeServicesGrid } from "@/components/sections/home/home-services-grid";
import { HomeWhy } from "@/components/sections/home/home-why";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServicesGrid />
      <HomeWhy />
      <HomeProjectsPreview />
      <HomeProcess />
      <HomeCtaFinal />
    </>
  );
}
