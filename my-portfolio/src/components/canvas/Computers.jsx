import {useEffect, useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ComputerModel = ({isMobile}) => {
  // Load the 3D model from the public folder
  const { scene } = useGLTF("/desktop_pc1/scene.gltf"); // Ensure the file is in public/computers.glb

  return <primitive object={scene} scale={isMobile ? 1 :1.5} 
    position = {[0.5,-1.5 ,-1.5]}
    rotation ={[-0.06,-0.1,-0.1]}
  />;
  
};

const Computers = () => {
  const [isMobile, setisMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500)');
      setisMobile(mediaQuery.matches);
  
   const handleMediaQueryChange = (event) =>{
    setisMobile(event.matches);
   }
   mediaQuery.addEventListener('change', handleMediaQueryChange);

   return () =>{
    mediaQuery.removeEventListener('change', handleMediaQueryChange)
   }
  }, [])
  
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <directionalLight position={[2, 2, 2]} />
      <ComputerModel isMobile={isMobile} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 3} // -90 degrees
        maxAzimuthAngle={Math.PI / 3} 
      />
    </Canvas>
  );
};

export default Computers;
