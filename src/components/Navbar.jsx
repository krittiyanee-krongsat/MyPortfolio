import { useEffect, useState } from 'react';
import {navLinks} from '../constants';

const Navbar = () => {
    // state ไว้เช็คว่า scroll ลงมาหรือยัง
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        // ฟังก์ชันตรวจสอบตำแหน่ง scroll
        const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        // ถ้าเลื่อนลงเกิน 10px → ถือว่า scroll แล้ว
        setScrolled(isScrolled);
    };

    // เพิ่ม event ตอน scroll
    window.addEventListener("scroll", handleScroll);

    // ลบ event ตอน component ถูกถอด
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // เปลี่ยน class ตามสถานะ scroll
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                {/* โลโก้ + ลิงก์กลับไป hero */}
                <a href="#hero" className="flex items-center gap-1 logo">
                    <img src="images/logos/HouseNav.png" className="md:size-5 size-5" />
                    <span>Home</span>
                </a>

                {/* เมนูสำหรับ desktop */}
                <nav className="desktop">
                <ul>
                    {navLinks.map(({ link, name }) => (
                    <li key={name} className="group">
                        <a href={link}>
                        <span>{name}</span>
                        <span className="underline" />
                        </a>
                    </li>
                    ))}
                </ul>
                </nav>
                
                {/* ปุ่ม Contact */}
                <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact me</span>
                </div>
                </a>
            </div>
        </header>
    )
}
export default Navbar;