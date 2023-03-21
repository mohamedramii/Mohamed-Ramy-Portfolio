import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls , Stage} from "@react-three/drei"
import WebD from "./WebD"
 const WebDesign = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.6} >
        <WebD/>
    </Stage>
        <OrbitControls enableZoom={false} autoRotate={true}/>
    </Canvas>
  )
}

export default WebDesign