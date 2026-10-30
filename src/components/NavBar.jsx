import { useState, useEffect, useRef } from 'react'
import { RESUME_PDF_HYPERLINK } from 'data/portfolioData'
import { NAV_ITEMS } from 'data/navigationData'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function NavBar({ color }) {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const navRef = useRef(null)

    // Passive scroll listener to update elevated styling
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 30
            setScrolled(isScrolled)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Track active section via IntersectionObserver (off main-thread, 60fps scrollspy)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-20% 0px -55% 0px',
                threshold: 0
            }
        )

        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    // Close mobile menu on Escape key press
    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    // Close mobile menu on click/tap outside
    useEffect(() => {
        if (!isOpen) return
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside, { passive: true })
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [isOpen])

    // Lock body scroll when mobile menu is open to prevent awkward background shift
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const handleNavClick = () => {
        setIsOpen(false)
    }

    return (
        <header
            ref={navRef}
            className={`modern-nav-wrapper ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
            id="navbar"
        >
            <div className="modern-nav-capsule">
                {/* Brand */}
                <a
                    className="brand-logo mono"
                    href="#"
                    style={{ color: color }}
                    onClick={handleNavClick}
                    aria-label="Suraj Portfolio Home"
                >
                    &lt;Suraj /&gt;
                </a>

                {/* Desktop Nav Items */}
                <nav className="desktop-nav" aria-label="Main navigation">
                    <ul className="desktop-nav-list">
                        {NAV_ITEMS.map(({ label, href, id }) => {
                            const isActive = activeSection === id
                            return (
                                <li key={id} className="desktop-nav-item">
                                    <a
                                        href={href}
                                        className={`desktop-nav-link ${isActive ? 'is-active' : ''}`}
                                    >
                                        {label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Right Actions: Resume Button & Animated Toggle */}
                <div className="nav-actions">
                    <a
                        className="resume-action-btn"
                        href={RESUME_PDF_HYPERLINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        aria-label="Download Resume"
                    >
                        <span>Resume</span>
                        <i className="fa fa-arrow-down resume-btn-icon" aria-hidden="true"></i>
                    </a>

                    {/* Animated Hamburger Toggle */}
                    <button
                        type="button"
                        className={`mobile-toggle-btn ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(prev => !prev)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        <span className="toggle-bar bar-1"></span>
                        <span className="toggle-bar bar-2"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown Card */}
            <div
                id="mobile-nav-menu"
                className={`mobile-menu-card ${isOpen ? 'is-open' : ''}`}
                aria-hidden={!isOpen}
            >
                <div className="mobile-menu-inner">
                    <div className="mobile-menu-header">
                        <span className="mobile-menu-title mono">// Sections</span>
                    </div>

                    <ul className="mobile-nav-list">
                        {NAV_ITEMS.map(({ label, href, id, index }) => {
                            const isActive = activeSection === id
                            return (
                                <li key={id} className="mobile-nav-item">
                                    <a
                                        href={href}
                                        className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                                        onClick={handleNavClick}
                                    >
                                        <div className="mobile-nav-link-left">
                                            <span className="mobile-link-index mono">{index}</span>
                                            <span className="mobile-link-label">{label}</span>
                                        </div>
                                        <i className="fa fa-chevron-right mobile-link-arrow" aria-hidden="true"></i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="mobile-menu-footer">
                        <a
                            className="mobile-resume-btn"
                            href={RESUME_PDF_HYPERLINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            onClick={handleNavClick}
                        >
                            <i className="fa fa-cloud-download" aria-hidden="true"></i>
                            <span>Download Resume</span>
                        </a>

                        <div className="mobile-social-row">
                            <a
                                href="https://github.com/suraj-anand/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mobile-social-link"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/suraj-anand-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mobile-social-link"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Backdrop Overlay */}
            {isOpen ? (
                <div
                    className="mobile-backdrop"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            ) : null}
        </header>
    )
}

export default NavBar