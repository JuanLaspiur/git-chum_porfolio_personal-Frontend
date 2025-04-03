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
  return (
    <div className={`${className}`}>
      <img src={logoSrc || defaultLogo} alt="logo" className="logo-icon" /> {text}
    </div>
  );
};
