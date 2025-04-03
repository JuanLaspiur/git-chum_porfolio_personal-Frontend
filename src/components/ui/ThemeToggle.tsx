import { Switch } from "antd";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: React.FC = () => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Switch checked={isDarkMode} onChange={toggleTheme} checkedChildren="🌙" unCheckedChildren="☀️" />
  );
};

export default ThemeToggle;
