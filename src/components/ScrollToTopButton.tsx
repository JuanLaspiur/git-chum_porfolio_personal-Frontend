import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.12);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '20px',
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          backgroundColor: isDarkMode ? '#FFFFFF' : '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
          border: 'none',
          cursor: 'pointer',
          overflow:'hidden'
        }}
      >
        <img src={`/${isDarkMode?'arriba':'arriba-white'}.webp`} alt="Scroll to top" style={{ width: '40px', height: '40px' }} />
      </button>
    )
  );
};

export default ScrollToTopButton;
