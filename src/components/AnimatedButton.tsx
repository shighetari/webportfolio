// src/components/AnimatedButton.tsx
import React from 'react';
import '../assets/scss/_animatedButton.scss';

interface AnimatedButtonProps {
  label: string;
  onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ label, onClick }) => {
  return (
    <button className="animated-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default AnimatedButton;
