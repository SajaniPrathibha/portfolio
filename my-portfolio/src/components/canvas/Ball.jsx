import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import { Decal,Float, OrbitControls, Preload, useTexture } from "@react-three/drei";


const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial/>
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
      </mesh>
    </Float>
  );
};
const BallCanvas = ({icon}) => {
  return(
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
       
        <Ball imgUrl={icon} />
        <OrbitControls enableZoom={false} />
      
    </Canvas>


  )

}

export default BallCanvas