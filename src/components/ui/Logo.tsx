export const Logo: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
    <div className="logo">
      <img src={`./${!isDarkMode ? "logo" : "logo_white"}.webp`} alt="logo" className="logo-icon" /> Git-Chum
    </div>
  );