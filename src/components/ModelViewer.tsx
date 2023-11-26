import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/src/assets/images/sci-fi_uniform_girl_and_animation.glb');
  // Define a scale value, for example: [1, 1, 1] or whatever works 
  const scale = [1, 1, 1]; // Adjust this scale as needed for the model
  return <primitive object={gltf.scene} scale={scale} />;
}

export default function ModelViewer() {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={<div>Loading...</div>}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
