import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({clientHeight}) => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap
            .timeline({
                defaults: { ease: "none", duration: 0.1 },
            })
            // about-1 สว่าง
            .fromTo(
                contentRef.current.querySelector(".overview-content-1"),
                { opacity: 0.2 },
                { opacity: 1 }
            )
            // about-1 จาง + about-2 สว่าง พร้อมกัน
            .to(contentRef.current.querySelector(".overview-content-1"), {
                opacity: 0.2,
                delay: 0.5,
            })
            .fromTo(
                contentRef.current.querySelector(".overview-content-2"),
                { opacity: 0.2 },
                { opacity: 1 },
                "<" // เริ่มพร้อมกับ step ก่อน
            )
            // about-2 จาง + about-3 สว่าง พร้อมกัน
            .to(contentRef.current.querySelector(".overview-content-2"), {
                opacity: 0.2,
                delay: 0.5,
            })
            .fromTo(
                contentRef.current.querySelector(".overview-content-3"),
                { opacity: 0.2 },
                { opacity: 1 },
                "<" // เริ่มพร้อมกับ step ก่อน
            )
            // about-3 จาง (จบ)
            .to(contentRef.current.querySelector(".overview-content-3"), {
                opacity: 0.2,
                delay: 0.5,
            })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "center 80%",
            end: "center top",
            scrub: 0,
            animation: tl,
        })
    })

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="flex flex-col items-center">
            <div
                className={`${
                clientHeight > 650 ? "pt-10 pb-5" : "pt-10 pb-5"
                } section-container`}
            >
                <h1
                ref={contentRef}
                className="font-semibold md:text-5xl text-3xl text-center"
                >
                <span className="overview-content-1 leading-tight">
                    I am interested in Frontend Development{" "}
                    <br/>
                </span>
                <span className="overview-content-2 leading-tight">
                    and committed to building secure{" "}
                    <br/>
                </span>
                <span className="overview-content-3 leading-tight">
                    user friendly and accessible websites.{" "}
                    <br/>
                </span>
                </h1>
            </div>
        </section>
    )
}

export default About;
