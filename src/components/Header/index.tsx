import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import translations from "./headerTranslations.json";
import "../styles/Header.css";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  if (!themeContext || !languageContext) {
    throw new Error("ThemeContext and LanguageContext must be used within their respective providers");
  }

  const { isDarkMode } = themeContext;
  const { language } = languageContext;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`header ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      {isMobile ? (
        <>
            <NavMenu isDarkMode={isDarkMode} language={language} />
            <div className="logo">  <img src={`./${!isDarkMode ?'logo':'logo_white'}.png`} alt="logo" className="logo-icon" />MyPortfolio </div>
        </>
      ) : (
        <>
          <div className="logo">  <img src={`./${!isDarkMode ?'logo':'logo_white'}.png`} alt="logo" className="logo-icon" /> MyPortfolio</div>
          <NavMenu isDarkMode={isDarkMode} language={language} />
        </>
      )}

      <div className="header-right">
        <Input
          className="search-bar"
          placeholder={translations[language].search}
          prefix={<SearchOutlined />}
        />
        <ThemeToggle />
        <LanguageSwitcher  isMobile={isMobile}/>
      </div>
    </header>
  );
};

export default Header;
