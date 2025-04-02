import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Switch } from "antd";

const ThemeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <Switch checked={isDarkMode} onChange={toggleTheme} checkedChildren="🌙" unCheckedChildren="☀️" />
  );
};

export default ThemeToggle;
