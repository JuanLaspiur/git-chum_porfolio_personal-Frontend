import Header from "../components/Header";
import AboutMeMain from "../components/AboutMeMain";
import AvatarSection from "../components/AvatarSection";
import { useLanguage } from "../context/LanguageContext";
import "../components/styles/HomePage.css";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ProyectMain from "../components/ProyectMain";
import HomeMain from "../components/HomeMain";

function Home() {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [page, setPage] = useState<string>("home");
  const [query, setQuery] = useState("");

  return (
    <div>
      <Header setQuery={setQuery} setPage={setPage} />
      <div className={`home-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <AvatarSection language={language} />    
        {page === "home" && <HomeMain query={query} />}
        {page === "aboutMe" && <AboutMeMain />}
        {page === "proyects" && <ProyectMain />}
      </div>   
  
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
