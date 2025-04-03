import translations from "./headerTranslations.json";
import { NavLink } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined } from "@ant-design/icons";
import { MenuItem } from "../../types/MenuItem";

export const getMenuItems = (language: "es" | "en"): MenuItem[] => {
  const langData = translations[language] || { home: "Home", projects: "Projects", about: "About" };

  return [
    { key: "home", icon: <HomeOutlined />, label: <NavLink to="/">{langData.home}</NavLink> },
    { key: "projects", icon: <ProjectOutlined />, label: <NavLink to="/projects">{langData.projects}</NavLink> },
    { key: "about", icon: <InfoCircleOutlined />, label: <NavLink to="/about">{langData.about}</NavLink> },
  ];
};
