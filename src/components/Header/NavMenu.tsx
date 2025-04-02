import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined } from "@ant-design/icons";
import translations from "./headerTranslations.json";

type NavMenuProps = {
  isDarkMode: boolean;
  language: string;
};

const NavMenu: React.FC<NavMenuProps> = ({ isDarkMode, language }) => {
  const menuItems = [
    { key: "home", icon: <HomeOutlined />, path: "/", label: translations[language].home },
    { key: "projects", icon: <ProjectOutlined />, path: "/projects", label: translations[language].projects },
    { key: "about", icon: <InfoCircleOutlined />, path: "/about", label: translations[language].about },
  ];

  return (
    <Menu 
      mode="horizontal" 
      theme={isDarkMode ? "dark" : "light"} 
      className="nav-menu" 
      style={{ display: 'flex', gap: '20px' }}
    >
      {menuItems.map(({ key, icon, path, label }) => (
        <Menu.Item key={key} icon={icon}>
          <NavLink to={path}>{label}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavMenu;
