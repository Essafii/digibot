import Link from "next/link";
import { ClipboardList, MessageCircle, Timer } from "lucide-react";

import { ROUTES } from "@/constants/routes";
import { QuoteForm } from "@/components/forms/quote-form";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils/cn";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Vous décrivez le besoin",
    text: "Contexte, lieu, délais souhaités et contraintes : plus c’est précis, plus notre réponse est utile.",
  },
  {
    icon: ClipboardList,
    title: "2. Nous affinons ensemble",
    text: "Échanges par e-mail ou appel pour valider le périmètre, les options techniques et le planning.",
  },
  {
    icon: Timer,
    title: "3. Devis clair et délai de réponse",
    text: "Vous recevez une proposition détaillée. Après accord, nous planifions l’intervention ou le développement.",
  },
] as const;

export function QuotePageBody() {
  return (
    <>
      <SectionShell tone="soft">
        <Container className="max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-950 sm:text-2xl">
                Comment ça marche ?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-900/75 sm:text-base">
                Ce formulaire ne transmet pas les données à nos serveurs : il
                prépare un e-mail dans votre messagerie. Vous gardez le contrôle
                avant l’envoi. Une question avant de partir ?{" "}
                <Link
                  href={ROUTES.contact}
                  className="font-semibold text-brand-700 underline-offset-2 hover:underline"
                >
                  Nous contacter
                </Link>
                .
              </p>
              <ul className="mt-10 space-y-5">
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li
                      key={s.title}
                      className={cn(
                        "flex gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm",
                      )}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-brand-950">
                          {s.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-brand-900/75">
                          {s.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </SectionShell>
    </>
  );
}
