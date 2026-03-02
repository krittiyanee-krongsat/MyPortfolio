import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    // ดึงค่าเปอร์เซ็นต์ความคืบหน้าในการโหลดจาก useProgress
    const { progress } = useProgress();

    return (
        // แสดง HTML ทับอยู่กลางฉาก 3D
        <Html
            as='div' // ใช้ div เป็น container ของ loader
            center // จัดให้อยู่ตรงกลางทั้งแนวนอนและแนวตั้ง
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
            >
            {/* วงกลมโหลด (spinner) */}
            <span className='canvas-loader'></span>

            {/* แสดงเปอร์เซ็นต์การโหลด */}
            <p
                style={{
                fontSize: 14,
                color: "#F1F1F1",
                fontWeight: 800,
                marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
                {/* แสดงตัวเลขทศนิยม 2 ตำแหน่ง */}
            </p>
        </Html>
    )
}

export default CanvasLoader