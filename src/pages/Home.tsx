import Header from "../components/Header"
import HomeMain from "../components/HomeMain"
import AvatarSection from "../components/AvatarSection"
import { useLanguage } from "../context/LanguageContext";
import '../components/styles/HomePage.css'
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Home() {
    const { language } = useLanguage();
    const {isDarkMode} =useTheme();
    const [query, setQuery] = useState(""); 
  return (
    <div>
      <Header setQuery={setQuery}/> 
      <div className={`home-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <AvatarSection language={language}/>
      <HomeMain query={query} /> 
      </div>
      <ScrollToTopButton/>
      </div>
  )
}

export default Home