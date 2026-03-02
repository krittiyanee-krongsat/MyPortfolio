import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Ball = (props) => {
    // โหลดรูปจาก props มาใช้เป็น texture
    const[decal] = useTexture([props.imgUrl]);
    
    return (
        // ทำให้วัตถุลอย ๆ ขยับเบา ๆ
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            {/* ไฟสว่างทั่ว ๆ ไป */}
            <ambientLight intensity={0.25}/>
            {/* ไฟทิศทาง */}
            <directionalLight position={[0, 0, 0.05]}/>
            {/* ตัววัตถุหลัก */}
            <mesh castShadow receiveShadow scale={2.75}>
                {/* สร้างทรง icosahedron (ทรงกลมเหลี่ยม ๆ) */}
                <icosahedronGeometry args={[1, 1]}/>
                {/* วัสดุของลูกบอล */}
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                {/* แปะรูป (decal) ลงบนผิววัตถุ */}
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({icon}) => {
    return (
        <Canvas
            frameloop="demand" // ให้เรนเดอร์เฉพาะเมื่อจำเป็น (เช่น เมื่อมีการเปลี่ยนแปลง)
            dpr={[1, 2]} // รองรับความละเอียดหน้าจอที่แตกต่างกัน (1 สำหรับหน้าจอทั่วไป, 2 สำหรับหน้าจอ Retina)
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* ปิดการซูม */}
                <OrbitControls enableZoom={false} />
                {/* ส่งรูป icon ไปให้ Ball */}
                <Ball imgUrl={icon} />
            </Suspense>
            
            {/* โหลด resource ล่วงหน้า */}
            <Preload all/>
        </Canvas>
    );
};

export default BallCanvas;