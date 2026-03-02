import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights.jsx";
import { IsometricRoom } from "./IsometricRoom.jsx";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{position: [0, 0, 15], fov: 18}}> {/*  กำหนดตำแหน่งกล้อง และมุมมอง (fov ยิ่งน้อย ภาพยิ่งซูมเข้า) */}

            <OrbitControls
                enablePan={false} /* ปิดการเลื่อนกล้องด้วยการลาก */
                enableZoom={false} /* ปิดการซูมกล้องด้วยการเลื่อนล้อเมาส์ */
                maxDistance={20} /* จำกัดระยะห่างสูงสุดของกล้องจากจุดศูนย์กลาง */
                minDistance={7} /* จำกัดระยะห่างต่ำสุดของกล้องจากจุดศูนย์กลาง */
                minPolarAngle={Math.PI / 5} /* จำกัดมุมการหมุนกล้องในแนวตั้ง (ไม่ให้หมุนลงต่ำเกินไป) */
                maxPolarAngle={Math.PI / 2} /* จำกัดมุมการหมุนกล้องในแนวตั้ง (ไม่ให้หมุนขึ้นสูงเกินไป) */
            />

            {/* คอมโพเนนต์ไฟในฉาก (จัดแสงหลัก) */}
            <HeroLights/>

            <group
                scale={isMobile? 0.7  : 1} /* ปรับขนาดโมเดลให้เล็กลงสำหรับมือถือ */
                position={[-0.7, 0, 0]} /* เลื่อนโมเดลไปทางซ้ายเล็กน้อยเพื่อให้ดูสมดุล */
                rotation={[0, -Math.PI / -4, 0]} /* หมุนโมเดลให้หันไปทางขวาเล็กน้อยเพื่อเพิ่มมิติ */
            >
            <IsometricRoom/>
            </group>

        </Canvas>
    )
}
export default HeroExperience;