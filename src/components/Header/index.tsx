import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { Input } from "antd";
import {  SearchOutlined } from "@ant-design/icons";
import translations from "./headerTranslations.json";
import "../styles/Header.css";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);

  if (!themeContext || !languageContext) {
    throw new Error("ThemeContext and LanguageContext must be used within their respective providers");
  }

  const { isDarkMode } = themeContext;
  const { language } = languageContext;



  return (
    <header className={`header ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className="logo">MyPortfolio</div>
      <NavMenu isDarkMode={isDarkMode} language={language} />

      <div className="header-right">
        <Input
          className="search-bar"
          placeholder={translations[language].search}
          prefix={<SearchOutlined />}
        />
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
