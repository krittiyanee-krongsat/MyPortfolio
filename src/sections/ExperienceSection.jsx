import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { experiences } from "../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

// เปิดใช้งาน ScrollTrigger ของ GSAP
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    // เลือก element ทุกตัวที่มี class = timeline-card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // ทำ animation ตอน scroll เจอการ์ด
      gsap.from(card, {
        xPercent: -100, // เริ่มจากด้านซ้าย (100% ของความกว้างตัวเอง)
        opacity: 0, // เริ่มจากโปร่งใส
        transformOrigin: 'left left',
        duration: 1, // ความเร็วของ animation
        ease: 'power2.inOut', // easing แบบนุ่มนวล
        scrollTrigger: {
          trigger: card, // กำหนด element ที่จะเป็น trigger
          start: 'top 80%', // เริ่มเมื่อ top ของการ์ดถึง 80% ของ viewport
        }
      })
    })
    // ทำ animation ให้เส้น timeline หดลงตาม scroll
    gsap.to('.timeline',{
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        // ทำงานทุกครั้งที่ scroll เปลี่ยน
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
            // ทำให้ timeline หดลงตาม progress ของ scroll
          })
        }
      }
    })

    // animation ข้อความใน experience
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0, // เริ่มจากโปร่งใส
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%', // เริ่มเมื่อ top ของข้อความถึง 60% ของ viewport
        }
      })
    })
  }, []);
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader 
                title="Professional Experience & Certifications"
                sub="💼Experience" />
                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                      {experiences.map((card, index) => (
                        <div key={card.title} className="exp-card-wrapper">
                          <div className="xl:w-2/6">
                            <GlowCard card={card} index={index}>
                              <div className="w-13">
                                <img src={card.imgPath} alt={card.title}/>
                              </div>
                            </GlowCard>
                          </div>
                          <div className="xl:w-4/6 w-full">
                            <div className="flex items-start">
                              <div className="timeline-wrapper">
                                <div className="timeline" />
                                <div className="gradient-line w-1 h-full" />
                              </div>
                              <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                <div className="timeline-logo">
                                  <img src={card.logoPath} alt="logo" className="w-13" />
                                </div>
                                <div>
                                  <h1 className="font-semibold text-3xl">{card.title}</h1>
                                  <p className="my-5 text-white-50">
                                    📆 {card.date}
                                  </p>
                                  <p className="text-slate-400">
                                    Reponsibilities
                                  </p>
                                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                    {card.reponsibilities.map((resp, i) => (
                                      <li key={i} className="text-lg">
                                        {resp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
        </div>
    </section>
  )
}

export default ExperienceSection