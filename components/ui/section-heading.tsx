import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center"
            ? "items-center"
            : "sm:flex-row sm:items-end sm:justify-between",
        )}
      >
        <div className={cn(align === "center" && "w-full")}>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-4 text-base leading-relaxed text-brand-900/75",
                align === "center" && "mx-auto max-w-2xl",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
        {action ? (
          <div className={cn("shrink-0", align === "center" && "mt-2")}>
            {action}
          </div>
        ) : null}
      </div>
    </div>
  );
}
