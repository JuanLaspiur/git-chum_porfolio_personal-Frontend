import Header from "../components/Header"
import HomeMain from "../components/HomeMain"
import AvatarSection from "../components/AvatarSection"
import { useLanguage } from "../context/LanguageContext";
import '../components/styles/HomePage.css'
import { useTheme } from "../context/ThemeContext";

function Home() {
    const { language } = useLanguage();
    const {isDarkMode} =useTheme()
  return (
    <div>
      <Header/>
      <div className={`home-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <AvatarSection language={language}/>
      <HomeMain/>
      </div>
      </div>
  )
}

export default Home