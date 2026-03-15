const ButtonProjects = ({ text, className, id }) => {
  return (
    // กดแล้วเปิดรูป Certificate_1.jpg ในแท็บใหม่
    <a 
      href="/images/Certificate_1.jpg" 
      className={`${className ?? ''} cta-wrapper`} 
      id={id}
      target="_blank"
      rel="noopener noreferrer"
    > 
      <div className="cta-button-card group">
          {/* ข้อความบนปุ่ม */}
          <p className="text">{text}</p>
      </div>
    </a>
  )
}

export default ButtonProjects