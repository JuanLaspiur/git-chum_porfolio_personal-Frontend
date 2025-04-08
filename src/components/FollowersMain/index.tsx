import React from 'react';
import { followers } from './followersData';
import FollowerCard from './FollowerCard';
import { useTheme } from '../../context/ThemeContext';

const FollowersList: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      style={{
        background: isDarkMode ? '' : '#fff',
        color: isDarkMode ? 'white' : '#1a1a1a',
        padding: '20px',
        minHeight: '100vh',
        margin:'auto',
        paddingTop:'40px'
      }}
    >
      {followers.map((follower, index) => (
        <FollowerCard key={index} follower={follower} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
};

export default FollowersList;
