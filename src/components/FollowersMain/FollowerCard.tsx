import React from 'react';

interface Follower {
  name: string;
  username: string;
  bio: string;
  location: string;
  image: string;
  company?: string;
}

interface Props {
  follower: Follower;
  isDarkMode: boolean;
}

const FollowerCard: React.FC<Props> = ({ follower, isDarkMode }) => {
  const textSecondary = isDarkMode ? '#8b949e' : '#555';
  const textPrimary = isDarkMode ? '#c9d1d9' : '#333';
  const borderColor = isDarkMode ? '#2e2e2e' : '#ddd';

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '30px',
        borderBottom: `1px solid ${borderColor}`,
        paddingBottom: '20px',
      }}
    >
      <img
        src={follower.image}
        alt={follower.name}
        style={{ width: 60, height: 60, borderRadius: '50%', marginRight: 20 }}
      />
      <div>
        <div style={{ fontWeight: 'bold', fontSize: 16 }}>
          {follower.name}{' '}
          <span style={{ color: textSecondary }}>{follower.username}</span>
        </div>
        <div style={{ margin: '6px 0', color: textPrimary }}>{follower.bio}</div>
        {follower.company ? (
          <div style={{ display: 'flex', gap: 10, fontSize: 14, color: textSecondary }}>
            <div>🏢 {follower.company}</div>
            {follower.location && <div>📍 {follower.location}</div>}
          </div>
        ) : (
          follower.location && (
            <div style={{ fontSize: 14, color: textSecondary }}>📍 {follower.location}</div>
          )
        )}
      </div>
    </div>
  );
};

export default FollowerCard;
