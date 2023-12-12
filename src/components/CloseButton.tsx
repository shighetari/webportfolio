// src/components/CloseButton.tsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../assets/scss/_CloseButton.scss';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
  <button className="close-button" onClick={onClick}>
    <FaTimes /> 
  </button>
);

export default CloseButton;
