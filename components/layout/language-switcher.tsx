"use client";

export function LanguageSwitcher() {
  return (
    <select className="rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm font-medium text-brand-900 shadow-sm">
      <option value="fr">FR</option>
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  );
}