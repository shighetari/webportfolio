// src/components/DarkModeToggle.tsx
import React from 'react';
import { useDarkMode } from '../hooks/DarkModeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../assets/scss/_DarkModeToggle.scss';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      {darkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeToggle;
