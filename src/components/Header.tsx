import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { Input, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined, SearchOutlined } from "@ant-design/icons";
import "./styles/Header.css";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);

  if (!themeContext || !languageContext) {
    throw new Error("ThemeContext and LanguageContext must be used within their respective providers");
  }

  const { isDarkMode } = themeContext;
  const { language } = languageContext;


  const translations = {
    es: { home: "Inicio", about: "Acerca de", projects: "Proyectos", search: "Buscar..." },
    en: { home: "Home", about: "About", projects: "Projects", search: "Search..." },
  };

  const menuItems = [
    { key: "home", icon: <HomeOutlined />, path: "/", label: translations[language].home },
    { key: "projects", icon: <ProjectOutlined />, path: "/projects", label: translations[language].projects },
    { key: "about", icon: <InfoCircleOutlined />, path: "/about", label: translations[language].about },
  ];

  return (
    <header className={`header ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className="logo">MyPortfolio</div>
      <Menu mode="horizontal" theme={isDarkMode ? "dark" : "light"} className="nav-menu">
        {menuItems.map(({ key, icon, path, label }) => (
          <Menu.Item key={key} icon={icon}>
            <NavLink to={path}>{label}</NavLink>
          </Menu.Item>
        ))}
      </Menu>

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
