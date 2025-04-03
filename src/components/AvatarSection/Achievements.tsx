import { useTheme } from "../../context/ThemeContext";

const achievements = [
  { img: "/1.png", alt: "YOLO Badge" },
  { img: "/2.png", alt: "Shark Badge", count: 2 },
  { img: "/3.png", alt: "Cowboy Badge" },
];

const Achievements: React.FC = () => { 
  const { isDarkMode } = useTheme();

  return (
    <div className={`achievements ${isDarkMode ? "dark" : "light"}`}>
      <h3>Achievements</h3>
      <div className="achievement-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <img src={achievement.img} alt={achievement.alt} />
            {achievement.count && (
              <span className="badge-count">x{achievement.count}</span> 
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

