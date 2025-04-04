import { useEffect, useState } from "react"; 
import translationsData from "../HomeMain/HomeMainTranslations.json"; 
import Achievements from "./Achievements";
import '../styles/AvatarSection.css'
import { useTheme } from "../../context/ThemeContext";

interface AvatarSectionProps {
    language: "es" | "en";
}

const AvatarSection = ({ language }: AvatarSectionProps) => {
  const [translations, setTranslations] = useState(translationsData[language] || translationsData["en"]);
  const {isDarkMode} =useTheme();

  useEffect(() => {
    setTranslations(translationsData[language] || translationsData["en"]);
  }, [language]);

  return (
    <div className="avatar_section">
      <div className="avatar_container">
  <img src="./Yo.webp" alt="Avatar" className="avatar_section-image" />
  <div className={`emoji-badge`} style={{backgroundColor:isDarkMode ? "black" : "white"} }>😊</div>
</div>
      <h1>{translations.name}</h1>
      <h2>{translations.username}</h2>
      <p>{translations.job}</p>
      <button className="follow-button">
        <img src="/wsapp.webp" alt="Follow" className="follow-icon" style={{height:'22px', width:'22px'}} /> 
        {translations.wsapp || "WhatsApp"}
      </button>
      <Achievements/>
    </div>
  );
};

export default AvatarSection;

