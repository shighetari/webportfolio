// src/components/DialogBox.tsx
import { Html } from '@react-three/drei';
import React from 'react';
import '../assets/scss/_components.scss'

interface DialogBoxProps {
  onClose: () => any;
}

const DialogBox: React.FC<DialogBoxProps> = ({ onClose }) => {
  return (
    <Html center>
      <div className="dialog-box">
        <div className="dialog-content">
          {/* Your 2D content goes here */}
          <p>This is a 3D dialog box</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Html>
  );
};

export default DialogBox;
