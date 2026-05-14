"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as "fr" | "en" | "ar")}
      className="rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm font-medium text-brand-900 shadow-sm"
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  );
}