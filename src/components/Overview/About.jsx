import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// เปิดใช้งาน ScrollTrigger ของ GSAP
gsap.registerPlugin(ScrollTrigger);

const About = ({clientHeight}) => {
    // ref ไว้จับ section ทั้งก้อน
    const sectionRef = useRef(null)
    // ref ไว้จับตัวข้อความ
    const contentRef = useRef(null)

    useLayoutEffect(() => {
    // ใช้ context เพื่อให้ cleanup ง่ายตอน unmount
    const ctx = gsap.context(() => {
        // สร้าง timeline สำหรับควบคุม animation ทีละขั้น
        const tl = gsap
            .timeline({
                defaults: { ease: "none", duration: 0.1 },
            })
            // ข้อความบรรทัดที่ 1 ค่อย ๆ สว่างขึ้น
            .fromTo(
                contentRef.current.querySelector(".overview-content-1"),
                { opacity: 0.2 },
                { opacity: 1 }
            )
            // บรรทัด 1 จางลง
            .to(contentRef.current.querySelector(".overview-content-1"), {
                opacity: 0.2,
                delay: 0.5,
            })
            // พร้อมกันนั้น บรรทัด 2 สว่างขึ้น
            .fromTo(
                contentRef.current.querySelector(".overview-content-2"),
                { opacity: 0.2 },
                { opacity: 1 },
                "<" // เริ่มพร้อมกับ step ก่อน
            )
            // บรรทัด 2 จางลง
            .to(contentRef.current.querySelector(".overview-content-2"), {
                opacity: 0.2,
                delay: 0.5,
            })
            // บรรทัด 3 สว่างขึ้น
            .fromTo(
                contentRef.current.querySelector(".overview-content-3"),
                { opacity: 0.2 },
                { opacity: 1 },
                "<" // เริ่มพร้อมกับ step ก่อน
            )
            // บรรทัด 3 จางลง (จบ sequence)
            .to(contentRef.current.querySelector(".overview-content-3"), {
                opacity: 0.2,
                delay: 0.5,
            })
        
        // ผูก animation กับการ scroll โดยใช้ ScrollTrigger
        ScrollTrigger.create({
            trigger: sectionRef.current, // กำหนด element ที่จะเป็น trigger
            start: "center 80%", // เริ่มเมื่อ center ของ section ถึง 80% ของ viewport
            end: "center top", // จบเมื่อ center ของ section ถึง top ของ viewport
            scrub: 0, // ให้ animation ซิงค์กับ scroll โดยไม่มี delay
            animation: tl, // timeline ที่เราสร้างไว้ข้างบน
        })
    })
        // cleanup ตอน component ถูกถอด
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="flex flex-col items-center">
            <div
                className={`${
                clientHeight > 650 ? "pt-15 pb-5" : "pt-15 pb-5"
                } section-container`}
            >
                <h1
                ref={contentRef}
                className="font-semibold md:text-5xl text-3xl text-center"
                >
                {/* บรรทัดที่ 1 */}
                <span className="overview-content-1 leading-tight">
                    I am interested in Frontend Development{" "}
                    <br/>
                </span>
                {/* บรรทัดที่ 2 */}
                <span className="overview-content-2 leading-tight">
                    and committed to building secure{" "}
                    <br/>
                </span>
                {/* บรรทัดที่ 3 */}
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
