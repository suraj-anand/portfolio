import { useState, useEffect } from 'react'
import resume from 'assets/Resume.pdf'

function NavBar({ color }) {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`} id="navbar">
            <div className="container-fluid mt-2 mt-md-0">
                <a className="navbar-brand" href="#" style={{color: color}}>
                    &lt;Suraj /&gt;
                </a>
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <i className="fa fa-bars" style={{fontSize: '1.5rem'}}></i>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#about" onClick={() => setIsOpen(false)}>About</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav">
                        <li className="d-flex justify-content-center d-md-block mt-3 mt-md-0">
                            <a className='resume-btn' href={resume} download>
                                <span className="resume-btn-text">Download Resume</span>
                                <i className="fa fa-cloud-download" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar