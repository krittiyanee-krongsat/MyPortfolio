import { useRef } from 'react';
import ButtonProjects from './ButtonProjects';

// การ์ดที่มีเอฟเฟกต์แสงเรืองตามเมาส์
const GlowCard = ({ card, children, index }) => {
    // เก็บ ref ของการ์ดแต่ละใบ
    const cardRefs = useRef([]);

    // ฟังก์ชันทำงานตอนเลื่อนเมาส์
    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if(!card) return;

        // ตำแหน่งเมาส์เทียบกับการ์ด
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // คำนวณมุมจากจุดกึ่งกลางการ์ด
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360;

        // ส่งค่าไปให้ CSS (ตัวแปร --start)
        card.style.setProperty('--start', angle + 60)
    }

  return (
    <div 
        ref={(el) => (cardRefs.current[index] = el)} 
        onMouseMove={handleMouseMove(index)} 
        className='card card-border timeline-card rounded-xl p-10'
    >
        {/* layer แสงเรือง */}
        <div className='glow'/>
            {/* ดาว 5 ดวง */}
            <div className='flex items-center gap-1 mb-5'>
                {Array.from({ length: 5}, (_, i) => (
                    <img src='/images/star.png' key={i} alt='star' className='size-5'/>
                ))}
            </div>
            {/* ข้อความรีวิว */}
            <div className='mb-5'>
                <p className='text-white-50 text-lg'>{card.review}</p>
            </div>
            {/* ส่วนล่างของการ์ด */}
            <div className='flex justify-between items-end'>
                {/* children ที่ส่งมาจากข้างนอก */}
                {children}
                {/* ถ้าเป็นการ์ดใบที่ 2 (index === 1) แสดงปุ่ม Certificate */}
                {index === 1 && (
                    <ButtonProjects 
                    text="View Certificate" 
                    className="md:w-40 md:h-12 w-40 h-10"
                    id={card}
                    />
                )}
            </div>
    </div>
  )
}

export default GlowCard