// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
 
  
//   const computer = useGLTF("./desktop_pc/scene.gltf");

// // Debug geometry positions
// useEffect(() => {
//   computer.scene.traverse((child) => {
//     if (child.isMesh) {
//       const posAttr = child.geometry.attributes.position;
//       const array = posAttr.array;

//       for (let i = 0; i < array.length; i++) {
//         if (isNaN(array[i])) {
//           console.warn(`NaN detected in position array at index ${i}`);
//         }
//       }
//     }
//   });
// }, [computer]);


//   return (
//     <mesh>
//       {/* <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} /> */}
//       {/* <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//       position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//       rotation={[-0.01, -0.2, -0.1]}
//       /> */}
//     <ambientLight intensity={0.6} />

// <directionalLight
//   position={[5, 10, 5]}
//   intensity={1.2}
//   castShadow
//   shadow-mapSize-width={1024}
//   shadow-mapSize-height={1024}
// />

// <spotLight
//   position={[0, 15, 10]}
//   angle={0.3}
//   penumbra={1}
//   intensity={1.5}
//   castShadow
// />


//       <primitive
//   object={computer.scene}
//   scale={isMobile ? 0.75 : 0.9}
//   position={isMobile ? [0, -1.8, -1.5] : [0, -2, -1.2]}
//   rotation={[-0.01, -0.2, -0.1]}
// />


//     </mesh>
    

//   );
// };


// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
    
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//        camera={{ position: [20, 3, 5], fov: 25 }}
      

//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;





















import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Optional: enable wireframe mode for debugging
  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        // Debugging for NaN positions
        const posAttr = child.geometry.attributes.position;
        const array = posAttr.array;

        for (let i = 0; i < array.length; i++) {
          if (isNaN(array[i])) {
            console.warn(`NaN detected in position array at index ${i}`);
          }
        }

        // Toggle this to see outlines of the 3D model
        // child.material.wireframe = true;
      }
    });
  }, [computer]);

  return (
    <mesh>
      
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 12, 8]} intensity={1.2} castShadow />
      <spotLight position={[0, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      


      <primitive
  object={computer.scene}
  scale={isMobile ? 0.45 : 0.5}             
  // position={isMobile ? [-2, -2.4, -1.8] : [-2.5, -2.6, -1.5]}  // lower and push slightly back
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
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;


