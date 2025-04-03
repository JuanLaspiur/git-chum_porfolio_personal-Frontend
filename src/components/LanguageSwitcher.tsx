import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Button } from "antd";

const translations = {
  es: { lang: "🇪🇸 Español", short: "Es" },
  en: { lang: "🇬🇧 English", short: "En" },
};

interface LanguageSwitcherProps {
  isMobile: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile }) => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, changeLanguage } = languageContext;

  return (
    <Button onClick={changeLanguage}>
      {isMobile ? translations[language].short : translations[language].lang}
    </Button>
  );
};

export default LanguageSwitcher;
