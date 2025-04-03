import { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { NavLink } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined, MenuOutlined } from "@ant-design/icons";
import translations from "./headerTranslations.json";

type NavMenuProps = {
  isDarkMode: boolean;
  language: "es" | "en";
};

const NavMenu: React.FC<NavMenuProps> = ({ isDarkMode, language }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "home", icon: <HomeOutlined />, path: "/", label: translations[language].home },
    { key: "projects", icon: <ProjectOutlined />, path: "/projects", label: translations[language].projects },
    { key: "about", icon: <InfoCircleOutlined />, path: "/about", label: translations[language].about },
  ];

  return (
    <>
      {isMobile ? (
        <>
          <Button 
            type="primary" 
            icon={<MenuOutlined />} 
            onClick={() => setDrawerVisible(true)} 
            className="mobile-menu-button"
          />
          <Drawer
            title="Menú"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu 
              mode="vertical" 
              theme={isDarkMode ? "dark" : "light"}
              onClick={() => setDrawerVisible(false)}
            >
              {menuItems.map(({ key, icon, path, label }) => (
                <Menu.Item key={key} icon={icon}>
                  <NavLink to={path}>{label}</NavLink>
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
        </>
      ) : (
        <Menu 
          mode="horizontal" 
          theme={isDarkMode ? "dark" : "light"} 
          className="nav-menu"
        >
          {menuItems.map(({ key, icon, path, label }) => (
            <Menu.Item key={key} icon={icon}>
              <NavLink to={path}>{label}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </>
  );
};

export default NavMenu;
