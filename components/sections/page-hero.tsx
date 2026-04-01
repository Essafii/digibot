import { Container } from "@/components/ui/container";

type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/60 to-white py-12">
      <Container>
        <h1 className="text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
