import { use } from "react";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { words, heroLinks } from "../constants/index.js";   
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
    });
    
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="hero-layout">
                {/* Left Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                        <h1>
                            <p className="text-white text-2xl md:text-2xl font-light relative z-10 pointer-events-none">
                                Hi, my name is
                            </p>
                                KRITTIYANEE KRONGSAT
                                    <p>
                                        <span className="slide">
                                        <span className="wrapper">
                                            {words.map((word, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <span>{word.text}</span>
                                            </span>
                                            ))}
                                        </span>
                                        </span>
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