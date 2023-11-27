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
import '../assets/scss/_base.scss';
import WorldOne from './WorldOne';
import Bmw1000rr from './Bmw1000rr';
import SciFiLaptop from './SciFiLaptop';
import Butterfly from './Butterfly';
import * as THREE from 'three';
import Phoenix from './Phoenix';
import Zen from './Zen';



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

  //reminder to turn this origin verision into a component to follow the established pattern
  return <primitive 
  object={scene} 
  ref={ref} 
  scale={[0.06, 0.06, 0.06]}
  position={[1, 0.3, 1]}
  />;
}

export default function ModelViewer() {
  const orbitRef = useRef(null);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onToggle = () => {
    setDialogVisible(!isDialogVisible);
  };

  const animateCameraPosition = (targetPosition:  any, duration = 5000) => {
    const controls = orbitRef.current as any;
    if (controls) {
      const startPosition = new THREE.Vector3().copy(controls.object.position);
      const endPosition = new THREE.Vector3(...targetPosition);
      const startTime = Date.now();

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = (currentTime - startTime) / duration;
        
        if (elapsed < 1) {
          const nextPosition = new THREE.Vector3().lerpVectors(startPosition, endPosition, elapsed);
          controls.object.position.copy(nextPosition);
          controls.update();
          requestAnimationFrame(animate);
        } else {
          controls.object.position.copy(endPosition);
          controls.update();
        }
      };
      
      animate();
    }
  };
  
  const resetCamera = () => {
    const controls: any = orbitRef.current;
    if (controls) {
      const newCameraPosition = new THREE.Vector3(4, 3, 5); // Replace with desired position
      const newTarget = new THREE.Vector3(0, 0, 0); // Replace with desired target
  
      // Set the target first
      controls.target.copy(newTarget);
      
      // Then animate the camera to the new position
      animateCameraPosition(newCameraPosition.toArray());
      
      // Ensure the controls are updated after the target change
      controls.update();
    }
  };

  return (
    <div className='model-viewer'> 

    <div className="canvas-container">
      <Canvas camera={{ position: [4, 3, 5], fov: 100 }}>
        <Environment />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model />
          <OrbitControls ref={orbitRef} />
          <SceneText content="Welcome to My Portfolio" position={[0.5, 3.5, 1.3]} />
          <InteractiveButton                
                position={[2, .5, 1]} 
                onToggle={onToggle} 
                isDialogVisible={isDialogVisible}
           />
          <FoxModel position={[2, 1, 1]} scale={[1.5, 1.5, 1.5]} />
          <Bmw1000rr position={[2, 1, 1]} scale={[.08, .08, .08]} />
          <WorldOne position={[-4, 0, 2]} scale={[10, 10, 10]}/>
          <SciFiLaptop position={[1, 1.5, 2]} scale={[1, 1, 1]}/>
          <Butterfly position={[1, 1, 2]} scale={[.5, .5, .5]}/>
          <Phoenix position={[12, 17, 2]} scale={[.005, .005, .005]}/>
          <Zen position={[1.6, 0.4, 0]} scale={[.5, .5, .5]}/>


        </Suspense>
        {isDialogVisible && <DialogBox onClose={onToggle} />}
      </Canvas>      
    </div>
    <div className='overlay-ui'>
        <button onClick={resetCamera}>Reset Camera</button>
        <button>button one</button>
        <button>button one</button>

    </div>

    </div>
  );
}
