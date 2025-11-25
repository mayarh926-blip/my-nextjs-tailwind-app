"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleLanguage: () => {},
});

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = language === "ar" ? "ar" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () =>
        setLanguage((prev) => (prev === "en" ? "ar" : "en")),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}



