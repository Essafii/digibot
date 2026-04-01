import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionTone = "white" | "soft" | "gradient";

type SectionShellProps = {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  id?: string;
};

const tones: Record<SectionTone, string> = {
  white: "bg-white",
  soft: "bg-brand-25",
  gradient:
    "bg-gradient-to-b from-brand-50 via-white to-brand-25/80",
};

export function SectionShell({
  children,
  tone = "white",
  className,
  id,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        "py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}
