import { useEffect, useRef } from "react";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { words, heroLinks } from "../constants/index.js";   
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Typed from "typed.js";

const Hero = () => {
    const typedElementRef = useRef(null);

    useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
    });

    useEffect(() => {
        const options = {
            strings: words,
            typeSpeed: 50, //ความเร็วในการพิมพ์ (มิลลิวินาที)
            startDelay: 1500, //หน่วงเวลาก่อนเริ่มพิมพ์ 
            backSpeed: 30, //ความเร็วในการลบ
            backDelay: 2000, //หน่วงเวลาก่อนเริ่มลบ
            loop: true,
        };

        const typed = new Typed(typedElementRef.current, options);

        return() => typed.destroy();
    }, []);
    
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="hero-layout">
                {/* Left Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                        <h1>
                            <p className="text-white text-2xl md:text-2xl font-medium relative z-10 pointer-events-none">
                                Hi, my name is
                            </p>
                                KRITTIYANEE KRONGSAT
                                    <p className="md:gap-3 gap-1 pb-2 text-white text-2xl md:text-2xl font-medium leading-relaxed">
                                        <span ref={typedElementRef}/>
                                    </p>
                                        <div className="flex items-center gap-3">
                                            {heroLinks.map(({ link, img }) => (
                                                <a 
                                                key={img}
                                                href={link}
                                                >
                                                <img
                                                    src={img}
                                                    className="md:size-7 size-7"
                                                />
                                                </a>
                                            ))}
                                        </div>
                        </h1>
                        </div>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                        />
                    </div>
                </header>
                {/* Right 3D Model */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience/>
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero;