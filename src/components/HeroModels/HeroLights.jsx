import * as THREE from 'three';

const HeroLights = () => {
    return (
        <>
        {/* ไฟสปอตไลท์ดวงที่ 1 - ส่องแคบและแรงมาก */}
        <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
        />
        
        {/* ไฟสปอตไลท์ดวงที่ 2 - มุมกว้างขึ้น แสงนุ่มกว่า */}
        <spotLight
        position={[4, 5, 4]}
        angle={0.5}
        penumbra={0.5}
        intensity={40}
        color="#eeeeee"
        />

        {/* ไฟสปอตไลท์ดวงที่ 3 - โทนเทา แสงกระจายกว้าง */}
        <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={60}
        color="#bdbdbd"
        />

        {/* ไฟแบบแผ่นสี่เหลี่ยม (RectAreaLight) ให้แสงเหมือนจอ/หน้าต่าง */}
        <primitive
        object={new THREE.RectAreaLight("#5677fc", 8, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        intensity={15}
        />

        {/* ไฟแบบจุดกระจายรอบตัว (เหมือนหลอดไฟเล็ก ๆ) */}
        <pointLight
        position={[1, 2, -2]}
        intensity={10}
        color="#2a36b1"
        />

        </>
    )
}
export default HeroLights;