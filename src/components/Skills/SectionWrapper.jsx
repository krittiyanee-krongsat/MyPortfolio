import { motion } from "framer-motion";
import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";

// สร้าง Higher Order Component (HOC)
// เอา Component ที่ส่งเข้ามา ไปครอบด้วย section + animation
const SectionWrapper = (Component, idName) => 
    function HOC() {
    return (
      // ใช้ motion.section เพื่อใส่ animation ตอน scroll
      <motion.section
        variants={staggerContainer()} // animation แบบ stagger (ทีละชิ้น)
        initial='hidden' // สถานะเริ่มต้น
        whileInView='show' // เล่นเมื่อเลื่อนมาเห็น
        viewport={{ once: true, amount: 0.25 }} // เล่นครั้งเดียว และต้องเห็นอย่างน้อย 25%
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
         {/* เอาไว้ทำ anchor link (#about, #projects ฯลฯ) */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* แสดง Component ที่ถูกครอบ */}
        <Component />
      </motion.section>
    );
};

export default SectionWrapper;