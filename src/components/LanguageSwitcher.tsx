import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Button } from "antd";

const translations = {
  es: { lang: "🇪🇸 Español" },
  en: { lang: "🇬🇧 English" },
};

const LanguageSwitcher: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;

  return <Button onClick={changeLanguage}>{translations[language].lang}</Button>;
};

export default LanguageSwitcher;
