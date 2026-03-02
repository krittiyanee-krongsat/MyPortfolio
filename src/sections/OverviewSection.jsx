import TitleHeader from '../components/TitleHeader';

const OverviewSection = () => {
  return (
    // ส่วนนี้เป็น section สำหรับแนะนำตัวเองแบบสั้นๆ (Professional Summary)
    <section id="overview" className="w-full md:mt-5 mt-5 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
          {/* ใช้ component TitleHeader เพื่อแสดงหัวข้อและ sub title ของ section นี้ */}
            <TitleHeader 
                title="Professional Summary" 
                sub="📋Introduction"/>
        </div>
    </section>
  )
}

export default OverviewSection;