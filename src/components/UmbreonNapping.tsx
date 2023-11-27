// src/components/UmbreonNapping.tsx
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';

interface UmbreonNappingProps {
  position?: Vector3 | [number, number, number];
  scale?: Vector3 | [number, number, number];
}

const UmbreonNapping: React.FC<UmbreonNappingProps> = ({ position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const { scene } = useGLTF('src/assets/images/umbreon_napping.glb');

  return <primitive object={scene} position={position} scale={scale} />;
};

export default UmbreonNapping;