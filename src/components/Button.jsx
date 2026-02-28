const Button = ({ text, className, id, href = '#', onClick }) => {
    // href allows the button to act as a link; onClick can be used for custom handlers
    return(
    <a
        href={href}
        onClick={onClick}
        className={`${className ?? ''} cta-wrapper`}
        id={id}
    > 
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow"/>
            </div>
        </div>
    </a>
    )
}
export default Button;