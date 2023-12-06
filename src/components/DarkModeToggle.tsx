// src/components/DarkModeToggle.tsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import Sun and Moon icons from react-icons
import '../assets/scss/_DarkModeToggle.scss';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      {darkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeToggle;
