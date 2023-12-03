import React, { useState } from "react";
import "../assets/scss/_AIDialogBox.scss";

type AIDialogBoxProps = {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onSuggestionSelect?: (suggestion: string) => void; // Make it optional
};
export const AIDialogBox: React.FC<AIDialogBoxProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  if (!isVisible) return null;
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

  const toggleHelpMenu = () => {
    setIsHelpMenuOpen(!isHelpMenuOpen);
  };

  return (
    <div className="dialog-backdrop">
      <div className="dialog-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
