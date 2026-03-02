const Footer = () => {
  return (
    <footer className="footer">
      {/* กล่องครอบเนื้อหา footer */}
      {/* จอเล็กเรียงแนวตั้ง / จอใหญ่เรียงแนวนอน */}
      <div className="footer-container flex flex-col md:flex-row justify-between items-center">
        {/* ลิงก์ไปหน้าเงื่อนไขการใช้งาน */}
        <div className="text-center md:text-left">
          <a href="/terms">Terms & Conditions</a>
        </div>
        {/* ข้อความลิขสิทธิ์ */}
        <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Krittiyanee Krongsat. All rights reserved.
            {/* แสดงปีปัจจุบันอัตโนมัติ */}
        </div>
      </div>
    </footer>
  )
}

export default Footer