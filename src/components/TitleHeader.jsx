// Component สำหรับหัวข้อ section (มี sub + title)
const TitleHeader = ({ title, sub}) => {
  return (
    // จัดเรียงแนวตั้ง และจัดกึ่งกลาง
    <div className='flex flex-col items-center gap-5'>
      {/* ป้ายเล็กด้านบน (sub title) */}
        <div className='hero-badge'>
            <p>{sub}</p>
        </div>
        {/* หัวข้อหลัก */}
        <div className="font-semibold md:text-5xl text-3xl text-center">
            {title}
        </div>
    </div>
  )
}

export default TitleHeader;