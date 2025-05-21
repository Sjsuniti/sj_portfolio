// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import {
//   Decal, Float, OrbitControls, Preload, useTexture
// } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Ball = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           flatShading
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Update time
      timeRef.current += delta;

      // Shake gently — don't rotate fully
      meshRef.current.rotation.y = 0.05 * Math.sin(timeRef.current * 1.5);
      meshRef.current.rotation.x = 0.03 * Math.sin(timeRef.current * 2);
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
