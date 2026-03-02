// ฟังก์ชันสร้าง animation แบบ fade + slide
export const fadeIn = (direction, type, delay, duration) => {
  return {
    // สถานะเริ่มต้น (ตอนยังไม่แสดง)
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // เลื่อนจากซ้ายหรือขวาตามทิศทาง
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // เลื่อนจากบนหรือล่างตามทิศทาง
      opacity: 0, // เริ่มต้นด้วยความโปร่งใส
    },

    // สถานะเมื่อแสดง (ตอนที่แสดง)
    show: {
      x: 0, // กลับสู่ตำแหน่งปกติ
      y: 0, // กลับสู่ตำแหน่งปกติ
      opacity: 1,
      transition: {
        type: type, // ประเภทของการเคลื่อนไหว (เช่น "tween", "spring")
        delay: delay, // เวลาที่จะรอก่อนเริ่มแสดง
        duration: duration, // ระยะเวลาที่ใช้ในการแสดง
        ease: "easeOut", // การเคลื่อนไหวแบบนุ่มนวล
      },
    },
  };
};

// ฟังก์ชันสร้าง animation แบบ stagger (แสดงทีละรายการ)
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {}, // สถานะเริ่มต้น (ไม่มีการเปลี่ยนแปลง)
    show: {
      transition: {
        staggerChildren: staggerChildren, // เวลาที่จะรอระหว่างการแสดงของแต่ละรายการ
        delayChildren: delayChildren || 0, // เวลาที่จะรอก่อนเริ่มแสดงรายการแรก (ถ้าไม่กำหนดจะเป็น 0)
      },
    },
  };
};


