import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { Points,PointMaterial,Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm'
import { Group } from 'three';


const Stars = (props) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array (5000), {radius:1.2})

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001; // Slow rotation
    }
  });

  return (
    <group rotation={[0,0,Math.PI/4]}> 
      <Points ref={ref} positions={sphere} stride={3}
      frustumCulled{...props}>
        <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}/>
      </Points>
    </group>
  )
}
const StartCanvas =() =>{
  return(
    <div className="w-full h-auto absolute inset-0
    z-[-1]">
    <Canvas camera={{position:[0,0,1]}}>
      <Suspense fallback={null}>
          <Stars />
      </Suspense>
    </Canvas>

    </div>
  )
}

export default StartCanvas