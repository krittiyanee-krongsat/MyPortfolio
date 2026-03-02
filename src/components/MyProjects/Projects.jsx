import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';

const ProjectCard = ({ 
    index, 
    name, 
    description, 
    tags, 
    image, 
    source_code_link,
}) => {
    return (
        // ทำ animation ตอนแสดงการ์ด โดยใช้ fadeIn จาก utils/motion
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            {/* ทำเอฟเฟกต์เอียงตามเมาส์ */}
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='project-card'
            >
                {/* ส่วนรูปโปรเจกต์ */}
                <div className='img-card'>
                    <img 
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    {/* ปุ่ม GitHub มุมขวาบน */}
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='bg-white-60 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={'/images/GithubProjects.png'}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>
                
                {/* ชื่อ + คำอธิบาย */}
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                {/* แสดงแท็กของโปรเจกต์ */}
                <div className='tag-card'>
                    {tags.map((tag) => (
                        <p 
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

// Component รวมโปรเจกต์ทั้งหมด
const Projects = () => {
  return (
    <div className='layout-projects'>
        {projects.map((project, index) => (
        // วนลูปสร้าง ProjectCard ตามข้อมูลใน array projects
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
    </div>
  )
}

export default Projects;