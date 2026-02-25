import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { experiences } from "../constants"

const ExperienceSection = () => {
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
                        </div>
                      ))}
                    </div>
                </div>

        </div>
    </section>
  )
}

export default ExperienceSection