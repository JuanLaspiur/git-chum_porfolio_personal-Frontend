import { useEffect, useState } from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";
import translationsData from "../HomeMain/HomeMainTranslations.json";
import Achievements from "./Achievements";
import "../styles/AvatarSection.css";
import { useTheme } from "../../context/ThemeContext";

interface AvatarSectionProps {
  language: "es" | "en";
}

const AvatarSection = ({ language }: AvatarSectionProps) => {
  const [translations, setTranslations] = useState(
    translationsData[language] || translationsData["en"]
  );
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setTranslations(translationsData[language] || translationsData["en"]);
  }, [language]);

  return (
    <div className="avatar_section">
      {/*  */}
      <div className="avatar_container">
        <img src="./Yo.webp" alt="Avatar" className="avatar_section-image" />
        <div className="emoji-badge" style={{background:isDarkMode? 'black':'white'}}>
          😊
        </div>
      </div>
      <h1>{translations.name}</h1>
      <h2>{translations.username}</h2>
      <p>{translations.job}</p>
      <button className="follow-button">
        <UsergroupAddOutlined style={{ fontSize: "22px", color: "#25D366" }} />
        {translations.wsapp || "WhatsApp"}
      </button>
      <div className={`followers-section ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <UsergroupAddOutlined className="followers-icon" />
        <span className="followers-count">7</span>
        <p className="foll-hover">{translations.followers}</p> ·
        <span className="following-count">26</span>
        <p className="foll-hover">{translations.following}</p>
      </div>  
      <Achievements />
    </div>
  );
};

export default AvatarSection;


