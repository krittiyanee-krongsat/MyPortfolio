import * as THREE from 'three';

const HeroLights = () => {
    return (
        <>

        <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
        />
        
        <spotLight
        position={[4, 5, 4]}
        angle={0.5}
        penumbra={0.5}
        intensity={40}
        color="#eeeeee"
        />

        <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={60}
        color="#bdbdbd"
        />

        <primitive
        object={new THREE.RectAreaLight("#5677fc", 8, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        intensity={15}
        />

        <pointLight
        position={[1, 2, -2]}
        intensity={10}
        color="#2a36b1"
        />

        </>
    )
}
export default HeroLights;