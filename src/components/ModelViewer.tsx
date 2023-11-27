import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { LoopRepeat } from 'three';
import SceneText from './SceneText';
import InteractiveButton from './InteractiveButton';
import Environment from './Environment';
import FoxModel from './FoxModel';
import DialogBox from './DialogBox';
import '../assets/scss/_components.scss';
import UmbreonNapping from './UmbreonNapping';

function Model() {
  const { scene, animations } = useGLTF('src/assets/images/sci-fi_uniform_girl_and_animation.glb');
  const { ref, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    if (mixer && animations.length > 0) {
      const action = mixer.clipAction(animations[0]);
      action.setLoop(LoopRepeat, Infinity);
      action.play();
    }
  }, [mixer, animations]);

  return <primitive object={scene} ref={ref} scale={[0.06, 0.06, 0.06]} />;
}

export default function ModelViewer() {
  const orbitRef = useRef(null);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onToggle = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [4, 3, 5], fov: 80 }}>
        <Environment />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model />
          <OrbitControls ref={orbitRef} />
          <SceneText content="Welcome to My Portfolio" position={[0.5, 3, 1.3]} />
          <InteractiveButton position={[2, 1, 0]} onToggle={onToggle} isDialogVisible={isDialogVisible} />
          <FoxModel position={[2, 1, 1]} scale={[1.5, 1.5, 1.5]} />
          <UmbreonNapping position={[-4, 0, 2]} scale={[.03, .03, .03]}/>
        </Suspense>
        {isDialogVisible && <DialogBox onClose={onToggle} />}
      </Canvas>
    </div>
  );
}
