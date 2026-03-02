import { Suspense } from "react"
import { Environment } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import ComputerPack from "./ComputerPack"

const ComputerExperience = () => {
    return (
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.5} color="#94A3B8"/>
          <directionalLight position={[5, 5, 5]} intensity={2.5} color="#fff4e6" />
          
          <directionalLight
            position={[5,9,1]}
            castShadow
            intensity={2.5}
            color="#94A3B8"
          />

          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />

          <group scale={[1, 1, 1]}>
            <mesh
              receiveShadow
              position={[0, -1.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#94A3B8" />
            </mesh>
          </group>

          <group scale={1} position={[0, -1.50, -2]} castShadow>
            <ComputerPack/>
          </group>
      </Canvas>
    )
}

export default ComputerExperience;