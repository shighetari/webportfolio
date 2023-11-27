import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface InteractiveButtonProps {
  position: [number, number, number];
  onToggle: (isDialogVisible: boolean) => void; // This prop will be used to handle the toggle
  isDialogVisible: boolean; // Add this prop
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ position, onToggle, isDialogVisible }) => {
  const meshRef = useRef<Mesh>(null);
  const [isPressed, setPressed] = useState(isDialogVisible);

  useEffect(() => {
    setPressed(isDialogVisible); // Update the internal state when the prop changes
  }, [isDialogVisible]);

  const handleOnClick = () => {
    onToggle(!isPressed); // Toggle based on the current state
    setPressed(!isPressed); // Update the internal state
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleOnClick}
    >
      <boxGeometry args={[1.2, 0.6, 0.2]} />
      <meshStandardMaterial color={isPressed ? '#00FF00' : '#FF6347'} />
    </mesh>
  );
};

export default InteractiveButton;
