import React from 'react';
import '../assets/scss/_AIDialogBox.scss';

type AIDialogBoxProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const AIDialogBox: React.FC<AIDialogBoxProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog-content">
      <button className="close-button" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};