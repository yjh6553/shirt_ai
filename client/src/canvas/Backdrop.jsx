import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
//3D Model helper functions
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'


const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
    //setting shadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.25}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      {/* set up the position of the light */}
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.25}
        position={[-5, -5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop