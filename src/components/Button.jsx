// Component ปุ่มที่สามารถใช้เป็นลิงก์ หรือมี onClick ก็ได้
const Button = ({ text, className, id, href = '#', onClick }) => {
    // href ทำให้ปุ่มทำงานเหมือนลิงก์
    // onClick ใช้สำหรับกำหนดฟังก์ชันเพิ่มเติม
    return(
    <a
        href={href} // ถ้า href ไม่ถูกส่งมา จะใช้ '#' เป็นค่าเริ่มต้น
        onClick={onClick} // ถ้า onClick ไม่ถูกส่งมา จะไม่มีฟังก์ชันอะไรเกิดขึ้น
        className={`${className ?? ''} cta-wrapper`} // ถ้า className ไม่ถูกส่งมา จะใช้ '' เป็นค่าเริ่มต้น
        id={id} // ถ้า id ไม่ถูกส่งมา จะเป็น undefined ซึ่งไม่ส่งผลอะไร
    > 
        <div className="cta-button group">
            {/* วงกลมพื้นหลังสำหรับเอฟเฟกต์ */}
            <div className="bg-circle"/>
            {/* ข้อความบนปุ่ม */}
            <p className="text">{text}</p>
            {/* ไอคอนลูกศร */}
            <div className="arrow-wrapper">
                <img src="./images/arrow-down.svg" alt="arrow"/>
            </div>
        </div>
    </a>
    )
}
export default Button;