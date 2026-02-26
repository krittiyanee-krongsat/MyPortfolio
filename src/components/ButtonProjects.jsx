const ButtonProjects = ({ text, className, id }) => {
  return (
    <a href="/images/WallpaperCom.jpg" className={`${className ?? ''} cta-wrapper`} id={id}> 
        <div className="cta-button-card group">
            <p className="text">{text}</p>
        </div>
    </a>
  )
}

export default ButtonProjects