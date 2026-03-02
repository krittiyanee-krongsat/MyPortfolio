import TitleHeader from "../components/TitleHeader";

const SkillsSection = () => {
  return (
    // ส่วนนี้เป็น section สำหรับแสดงทักษะและจุดแข็งของตัวเอง (Strengths & Key Skills)
    <section id="skills" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
            {/* ใช้ component TitleHeader เพื่อแสดงหัวข้อและ sub title ของ section นี้ */}
            <TitleHeader 
                title="Strengths & Key Skills" 
                sub="⭐What I Bring to the Table"/>
        </div>
    </section>
  )
}

export default SkillsSection;