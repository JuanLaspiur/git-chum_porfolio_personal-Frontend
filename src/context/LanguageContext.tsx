import { createContext, useState, ReactNode, useContext } from "react";

interface LanguageContextType {
  language: "es" | "en";
  changeLanguage: () => void; 
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"es" | "en">("es"); 

  const changeLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};
