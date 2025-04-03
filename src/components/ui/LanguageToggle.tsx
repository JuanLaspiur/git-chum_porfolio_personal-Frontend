import {  useLanguage } from "../../context/LanguageContext";
import { Button } from "antd";

const translations = {
  es: { lang: "🇪🇸 Español", short: "Es" },
  en: { lang: "🇬🇧 English", short: "En" },
};

interface LanguageToggleProps {
  isMobile: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isMobile }) => {
  const { language, changeLanguage } = useLanguage();

  return (
    <Button onClick={changeLanguage}>
      {isMobile ? translations[language].short : translations[language].lang}
    </Button>
  );
};

export default LanguageToggle;
