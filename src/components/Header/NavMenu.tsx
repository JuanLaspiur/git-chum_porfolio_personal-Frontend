import {  useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import withResponsive from "../withResponsiveHOC";
import { Logo } from "../ui/Logo";
import { MenuItem } from "../../types/MenuItem";

type NavMenuProps = {
  isDarkMode: boolean;
  language: "es" | "en";
  menuData: MenuItem[];
  isMobile?: boolean;

};


const NavMenu: React.FC<NavMenuProps> = ({ isDarkMode, isMobile, menuData }) => {
  return (
    <>
      {isMobile ? (
        <MobileMenuDrawer isDarkMode={isDarkMode} menuData={menuData} />
      ) : (
        <>
          <Logo isDarkMode={isDarkMode} />
          <Menu mode="horizontal" theme={isDarkMode ? "dark" : "light"} className="nav-menu" items={menuData} />
        </>
      )}
    </>
  );
};

const MobileMenuDrawer: React.FC<{ isDarkMode: boolean; menuData: MenuItem[] }> = ({ isDarkMode, menuData }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
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
        open={drawerVisible}
        styles={{ body: { padding: 0 } }}
      >
        <Menu mode="vertical" theme={isDarkMode ? "dark" : "light"} onClick={() => setDrawerVisible(false)} items={menuData} />
      </Drawer>
      <Logo isDarkMode={isDarkMode} />
    </>
  );
};




export default withResponsive(NavMenu);
