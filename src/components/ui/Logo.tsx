import { usePage } from "../../context/PageContext";

interface LogoProps {
  isDarkMode: boolean;
  text?: string;
  className?: string;
  logoSrc?: string;
}

export const Logo: React.FC<LogoProps> = ({
  isDarkMode,
  text = 'Git-Chum',
  className = 'logo',
  logoSrc,
}) => {
  const defaultLogo = `./${!isDarkMode ? 'logo' : 'logo_white'}.webp`;
  const {handleChangePage}= usePage();
  return (
    <div className={`${className}`} onClick={()=>{handleChangePage('home')}} style={{cursor:'pointer'}}>
      <img src={logoSrc || defaultLogo} alt="logo" className="logo-icon" /> {text}
    </div>
  );
};
