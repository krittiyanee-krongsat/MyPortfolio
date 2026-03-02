import { useEffect } from 'react'
import Lottie from 'lottie-react'
import loadingAnimation from './Loading.json';

const Loading = ({ isVisible, onComplete }) => {
  // ถ้า isVisible เป็น true ให้รอ 2.5 วินาที แล้วเรียก onComplete
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onComplete, 2500)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete])

  // ถ้าไม่ต้องแสดง ให้ไม่ render อะไรเลย
  if (!isVisible) return null

  return (
    <div style={{
      width: '100%', // กว้างเต็มหน้าจอ
      height: '100vh', // สูงเต็มหน้าจอ
      display: 'flex', // ใช้ Flexbox เพื่อจัดตำแหน่ง
      flexDirection: 'column', // จัดเรียงลูกในแนวตั้ง
      alignItems: 'center', // จัดกึ่งกลางแนวนอน
      justifyContent: 'center', // จัดกึ่งกลางแนวตั้ง
      background: '#0a0a0a', // สีพื้นหลังเข้ม
      position: 'fixed', // ตำแหน่งแบบ fixed เพื่อให้ครอบคลุมทั้งหน้าจอ
      top: 0, // ติดกับขอบบน
      left: 0, // ติดกับขอบซ้าย
      zIndex: 9999 // ให้อยู่บนสุด
    }}>
      
      {/* แอนิเมชัน Lottie */}
      <div style={{ width: 150 }}>
        <Lottie 
          animationData={loadingAnimation} // แอนิเมชันที่ใช้
          loop={true} // ให้เล่นซ้ำตลอดเวลา
        />
      </div>

      {/* ข้อความ "Loading..." */}
      <p style={{
        color: '#ffffff',
        fontSize: '14px',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        marginTop: '10px',
        opacity: 0.6,
        fontFamily: 'Mona Sans, sans-serif',
        fontWeight: 'bold',
      }}>
        Loading...
      </p>

    </div>
  )
}

export default Loading