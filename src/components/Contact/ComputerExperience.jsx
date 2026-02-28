import { Suspense } from "react"
import { Environment } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import ComputerPack from "./ComputerPack"

const ComputerExperience = () => {
    return (
        <Canvas>
        <ambientLight/>
        <OrbitControls />
        <Suspense fallback={null}>
          <ComputerPack/>
        </Suspense>
        <Environment preset={"sunset"}/>
      </Canvas>
    )
}

export default ComputerExperience;