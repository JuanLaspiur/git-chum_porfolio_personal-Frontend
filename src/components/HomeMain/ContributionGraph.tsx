import GitHubCalendar from "react-github-calendar";
import { useTheme } from "../../context/ThemeContext";
import { Logo } from "../ui/Logo";

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
      <h2 style={{ textAlign: "center", paddingBottom:"20px" }}><Logo className="" isDarkMode={isDarkMode} text=""/> GitChum Contributions</h2>
     <div style={{ width:'100%'}}>
      <GitHubCalendar
      style={{margin:'auto'}}
        username="JuanLaspiur"
        blockSize={12}
        blockMargin={5}
        colorScheme={isDarkMode ? "dark" : "light"} 
      />
      </div>
    </div>
  );
};

export default ContributionGraph;
