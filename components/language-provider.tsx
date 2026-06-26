"use client";

import { createContext, useContext } from "react";

export type Language = "fr";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({
  language: "fr",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageContext.Provider value={{ language: "fr", setLanguage: () => {} }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
