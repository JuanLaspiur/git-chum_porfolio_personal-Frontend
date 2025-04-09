import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import translations from "./headerTranslations.json";
import "../styles/Header.css";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import NavMenu from "./NavMenu";
import withResponsive from "../withResponsiveHOC";
import { getMenuItems } from "./getNavItems";

type HeaderProps = {
  isMobile?: boolean;
  setQuery: (query: string) => void; 
};

function Header({ isMobile = false, setQuery }: HeaderProps) {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <header className={`header ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <NavMenu  isDarkMode={isDarkMode} language={language} menuData={getMenuItems(language)} />
      <div className="header-right">
        <Input
          className="search-bar"
          placeholder={translations[language].search}
          prefix={<SearchOutlined />}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ThemeToggle />
        <LanguageToggle isMobile={isMobile} />
      </div>
    </header>
  );
}

export default withResponsive(Header);
