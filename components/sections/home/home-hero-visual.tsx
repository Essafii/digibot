"use client";

import type { ReactNode } from "react";
import { Camera, Globe2, Megaphone, Shield, Wifi } from "lucide-react";

import { useLanguage } from "@/components/language-provider";

type FloatCardProps = {
  label: string;
  sub: string;
  icon: ReactNode;
  className: string;
};

function FloatCard({ label, sub, icon, className }: FloatCardProps) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-lg shadow-brand-900/10 backdrop-blur-sm ring-1 ring-brand-100/80 dark:border-slate-700/80 dark:bg-slate-900/95 dark:shadow-black/30 dark:ring-slate-700/80 ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-inner shadow-brand-800/20">
        {icon}
      </div>

      <div className="min-w-0 text-left">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          {sub}
        </p>

        <p className="truncate text-sm font-bold text-brand-950 dark:text-white">
          {label}
        </p>
      </div>
    </div>
  );
}

export function HomeHeroVisual() {
  const { language } = useLanguage();

  const domainText = {
    fr: {
      sub: "Domaine",
      security: "Sécurité",
      network: "Réseau",
      web: "Web & apps",
      ads: "Ads & social",
    },
    en: {
      sub: "Domain",
      security: "Security",
      network: "Network",
      web: "Web & apps",
      ads: "Ads & social",
    },
    ar: {
      sub: "المجال",
      security: "الأمن",
      network: "الشبكات",
      web: "ويب وتطبيقات",
      ads: "إعلانات وتسويق",
    },
  };

  const t = domainText[language];

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-brand-200/90 bg-gradient-to-br from-brand-100 via-white to-brand-50 shadow-2xl shadow-brand-900/15 ring-1 ring-brand-100 dark:border-slate-700 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-black/40 dark:ring-slate-700 lg:aspect-[16/11]"
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_15%,rgba(37,99,235,0.18),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_85%,rgba(59,130,246,0.12),transparent)]" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.4] dark:opacity-[0.18]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="rgb(191 219 254)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <div className="absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-brand-200/60 bg-white/40 shadow-inner backdrop-blur-[2px] dark:border-slate-700/70 dark:bg-slate-800/30" />

        <FloatCard
          sub={t.sub}
          label={t.security}
          icon={<Shield className="h-5 w-5" aria-hidden />}
          className="left-[4%] top-[10%] -rotate-2 sm:left-[6%]"
        />

        <FloatCard
          sub={t.sub}
          label={t.network}
          icon={<Wifi className="h-5 w-5" aria-hidden />}
          className="right-[2%] top-[18%] rotate-2 sm:right-[8%]"
        />

        <FloatCard
          sub={t.sub}
          label={t.web}
          icon={<Globe2 className="h-5 w-5" aria-hidden />}
          className="bottom-[14%] left-[6%] rotate-1 sm:left-[10%]"
        />

        <FloatCard
          sub={t.sub}
          label={t.ads}
          icon={<Megaphone className="h-5 w-5" aria-hidden />}
          className="bottom-[12%] right-[4%] -rotate-1 sm:right-[10%]"
        />

        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-xl shadow-brand-600/40 ring-4 ring-white dark:ring-slate-800">
          <Camera className="h-8 w-8" aria-hidden />
        </div>
      </div>
    </div>
  );
}