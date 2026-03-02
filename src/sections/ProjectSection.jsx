import TitleHeader from "../components/TitleHeader";

const ProjectSection = () => {
  return (
    // ส่วนนี้เป็น section สำหรับแสดงโปรเจกต์ที่เคยทำ (Featured Projects)
    <section id="projects" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
            {/* ใช้ component TitleHeader เพื่อแสดงหัวข้อและ sub title ของ section นี้ */}
            <TitleHeader 
                title="Featured Projects" 
                sub="🗃️Selected Projects"/>
        </div>
    </section>
  )
}

export default ProjectSection;