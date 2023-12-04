// src/components/SceneText.tsx
import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";

interface SceneTextProps {
  content: string;
  position: Vector3 | [number, number, number];
}

const SceneText: React.FC<SceneTextProps> = ({ content, position }) => {
  const textRef = useRef<Mesh>(null);

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Text ref={textRef} position={position} fontSize={0.5} color="#dbafe0">
      {content}
    </Text>
  );
};

export default SceneText;
