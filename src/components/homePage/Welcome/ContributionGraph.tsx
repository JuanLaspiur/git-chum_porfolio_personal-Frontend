import GitHubCalendar from "react-github-calendar";
import { useTheme } from "../../../context/ThemeContext";

const ContributionGraph = () => {
  const { isDarkMode } = useTheme();

  const containerStyle = {
    backgroundColor: isDarkMode ? "#0D1117" : "#F6F8FA",
    color: isDarkMode ? "white" : "black",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", paddingBottom:"20px" }}>GitChum Contributions</h2>
      <GitHubCalendar
        username="JuanLaspiur"
        blockSize={12}
        blockMargin={5}
        colorScheme={isDarkMode ? "dark" : "light"} 
      />
    </div>
  );
};

export default ContributionGraph;
