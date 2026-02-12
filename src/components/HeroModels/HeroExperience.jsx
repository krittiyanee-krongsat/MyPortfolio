import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";
import { IsometricRoom } from "./IsometricRoom.jsx";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{position: [0, 0, 15], fov: 18}}>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxDistance={20}
                minDistance={7}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLights/>
            <Particles count={100}/>
            <group
                scale={isMobile? 0.7  : 1}
                position={[-0.7, 0, 0]}
                rotation={[0, -Math.PI / -4, 0]}
            >
            <IsometricRoom/>
            </group>

        </Canvas>
    )
}
export default HeroExperience;