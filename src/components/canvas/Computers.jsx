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





















// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   // const computer = useGLTF("/desktop_pc/scene.gltf");
// const computer = useGLTF("/sj_portfolio/desktop_pc/scene.gltf");



//   // Optional: enable wireframe mode for debugging
//   useEffect(() => {
//     computer.scene.traverse((child) => {
//       if (child.isMesh) {
//         // Debugging for NaN positions
//         const posAttr = child.geometry.attributes.position;
//         const array = posAttr.array;

//         for (let i = 0; i < array.length; i++) {
//           if (isNaN(array[i])) {
//             console.warn(`NaN detected in position array at index ${i}`);
//           }
//         }

//         // Toggle this to see outlines of the 3D model
//         // child.material.wireframe = true;
//       }
//     });
//   }, [computer]);

//   return (
//     <mesh>
      
//       <ambientLight intensity={1.1} />
//       <directionalLight position={[5, 12, 8]} intensity={1.2} castShadow />
//       <spotLight position={[0, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      


//       <primitive
//   object={computer.scene}
//   scale={isMobile ? 0.45 : 0.5}             
//   // position={isMobile ? [-2, -2.4, -1.8] : [-2.5, -2.6, -1.5]}  // lower and push slightly back
//    position={isMobile ? [-2, -2.4, -1.8] : [-2.5, -2.6, -1.5]}
//   rotation={[-0.01, -0.5, -0.1]}            
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
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;


// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import * as THREE from "three"; // Importing THREE for potential debugging or direct use

// import CanvasLoader from "../Loader"; // Assuming this path is correct

// const Computers = ({ isMobile }) => {
//   // Load the GLTF model. Make sure the path is correct relative to your public folder.
//   // If your project is served from '/sj_portfolio/', then '/sj_portfolio/desktop_pc/scene.gltf' is correct.
//   const computer = useGLTF("/sj_portfolio/desktop_pc/scene.gltf");


//   // Optional: enable wireframe mode for debugging and check for NaN values
//   useEffect(() => {
//     // Ensure the scene and its children exist before attempting to traverse
//     if (computer && computer.scene) {
//       // computer.scene.traverse((child) => {
//       //   if (child.isMesh && child.geometry && child.geometry.attributes.position) {
//       //     const posAttr = child.geometry.attributes.position;
//       //     const array = posAttr.array;

//       //     // Check for NaN values in the position attribute
//       //     for (let i = 0; i < array.length; i++) {
//       //       if (isNaN(array[i])) {
//       //         console.warn(`NaN detected in position array at index ${i} for mesh:`, child.name, child);
//       //         // You might want to break or handle this more aggressively if it's a critical error
//       //       }
//       //     }

//           computer.scene.traverse((child) => {
//   if (child.isMesh && child.geometry && child.geometry.attributes.position) {
//     const posAttr = child.geometry.attributes.position;
//     const array = posAttr.array;

//     for (let i = 0; i < array.length; i++) {
//       if (isNaN(array[i])) {
//         array[i] = 0; // or some default fallback
//       }
//     }
//     posAttr.needsUpdate = true;


//         }
//       });
//     }
//   }, [computer]); // Re-run effect if the computer object changes

//   // If the model hasn't loaded yet, return null or a placeholder
//   if (!computer || !computer.scene) {
//     return null; // Or render a simple box, or let Suspense handle it
//   }


//   return (
//     <mesh>
//       {/* Lights for the scene */}
//       <ambientLight intensity={1.1} /> {/* General ambient light */}
//       <directionalLight position={[5, 12, 8]} intensity={1.2} castShadow /> {/* Strong directional light with shadow */}
//       <spotLight position={[0, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow /> {/* Spot light with soft edges */}

//       {/* Render the 3D model */}
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.45 : 0.5} // Scale based on mobile status
//         position={isMobile ? [-2, -2.4, -1.8] : [-2.5, -2.6, -1.5]} // Position based on mobile status
//         rotation={[-0.01, -0.5, -0.1]} // Fixed rotation for the model
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Effect to determine if the user is on a mobile device
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
//       frameloop="always" // This prop controls when the canvas renders frames
//       shadows // Enable shadow rendering
//       dpr={[1, 2]} // Device pixel ratio range
//       camera={{ position: [20, 3, 5], fov: 25 }} // Camera position and field of view
//       gl={{ preserveDrawingBuffer: true }} 
      
//     >
//       {/* Suspense boundary for loading 3D assets */}
//       <Suspense fallback={<CanvasLoader />}>
//         {/* OrbitControls allows user to rotate/zoom the camera */}
//         <OrbitControls 
//           enableZoom={false} // Disable zooming
//           maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
//           minPolarAngle={Math.PI / 2} 
//         />
//         {/* Render the Computers component */}
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       {/* Preload all assets for smoother experience */}
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;










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

