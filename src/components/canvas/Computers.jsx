

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // For potential debugging

import CanvasLoader from "../Loader"; // Adjust the path if necessary

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    if (computer && computer.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh && child.geometry && child.geometry.attributes.position) {
          const posAttr = child.geometry.attributes.position;
          const array = posAttr.array;

          for (let i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
              array[i] = 0;
            }
          }
          posAttr.needsUpdate = true;
        }
      });
    }
  }, [computer]);

  if (!computer || !computer.scene) {
    return null;
  }

  return (
    <mesh>
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 12, 8]} intensity={1.2} castShadow />
      <spotLight position={[0, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.5}
        position={isMobile ? [-2, -2.4, -1.8] : [-2.5, -2.6, -1.5]}
        rotation={[-0.01, -0.5, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
    style={{ width: "100%", height: "100%", display: "block" }}
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >




      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Render model only if not on mobile */}
        {!isMobile && <Computers isMobile={isMobile} />}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;


