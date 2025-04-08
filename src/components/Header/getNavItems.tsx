import translations from "./headerTranslations.json";
import { NavLink } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined } from "@ant-design/icons";
import { MenuItem } from "../../types/MenuItem";

export const getMenuItems = (language: "es" | "en"): MenuItem[] => {
  const langData = translations[language] || { home: "Home", projects: "Projects", about: "About" };

  return [
    { key: "home", icon: <HomeOutlined />, label: <NavLink to="/">{langData.home}</NavLink> },
    { key: "proyects", icon: <ProjectOutlined />, label: <NavLink to="#">{langData.projects}</NavLink> },
    { key: "aboutMe", icon: <InfoCircleOutlined />, label: <NavLink to="/#">{langData.about}</NavLink> },
  ];
};
