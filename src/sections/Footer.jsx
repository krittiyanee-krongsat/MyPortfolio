const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left">
          <a href="/terms">Terms & Conditions</a>
        </div>

        <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Krittiyanee Krongsat. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer