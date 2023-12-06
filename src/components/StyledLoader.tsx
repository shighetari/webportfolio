// src/components/StyledLoader.tsx
import React from 'react';
import '../assets/scss/_StyledLoader.scss'; // Path to your SCSS file

const StyledLoader: React.FC = () => {
  return (
    <div className="styled-loader">
      <div className="spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default StyledLoader;
