import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import ComputerPack from "./ComputerPack"

const ComputerExperience = () => {
    return (
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}> {/* เปิดการใช้งานเงาในฉาก กำหนดตำแหน่งกล้อง และมุมมอง (field of view)*/}
          <ambientLight intensity={0.8} color="#94A3B8"/> {/* แสงแบบกระจายทั่วฉาก (ไม่มีเงา) */}
          <directionalLight position={[5, 5, 5]} intensity={2.6} color="#dde8f5" /> {/* แสงทิศทางหลัก ส่องจากด้านขวาบน */}
          
          {/* แสงทิศทางอีกดวงที่เปิด castShadow เพื่อสร้างเงา */}
          <directionalLight 
            position={[5,9,1]}
            castShadow
            intensity={2.6}
            color="#94A3B8"
          />

          {/* ควบคุมการหมุนกล้องด้วยเมาส์ */}
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />

          {/* กล่องที่เอาไว้ใส่พื้น */}
          <group scale={[1, 1, 1]}>
            <mesh
              receiveShadow
              position={[0, -1.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              {/* สร้างพื้นขนาด 30x30 */}
              <planeGeometry args={[30, 30]} />
              {/* วัสดุของพื้น รองรับแสงและเงา */}
              <meshStandardMaterial color="#94A3B8" />
            </mesh>
          </group>

          {/* กลุ่มของโมเดล ComputerPack */}
          <group scale={1} position={[0, -1.50, -2]} castShadow>
            <ComputerPack/>
          </group>
      </Canvas>
    )
}

export default ComputerExperience;