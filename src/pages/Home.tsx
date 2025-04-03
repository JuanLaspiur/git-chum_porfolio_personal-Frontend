import Header from "../components/Header"
import Welcome from "../components/homePage/Welcome"
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
      <Welcome/>
      </div>
      </div>
  )
}

export default Home