function Footer() {
    return (
        <footer className="footer-section" id="footer">
            <div className="footer-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container">
                <div className="footer-content">
                    <div className="footer-about" data-aos="fade-up">
                        <h3 className="footer-brand">&lt;Suraj /&gt;</h3>
                        <p>Software Engineer specializing in Backend, AI, and Cloud technologies. Building scalable solutions with clean, efficient code.</p>
                    </div>

                    <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#certification">Certifications</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-connect" data-aos="fade-up" data-aos-delay="200">
                        <h4>Connect With Me</h4>
                        <p>Let's build something amazing together</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/suraj-anand-/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/suraj-anand/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://leetcode.com/suraj-anand/" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-code"></i>
                            </a>
                            <a href="https://www.instagram.com/suraj_purushothaman/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom" data-aos="fade-up">
                    <p>© {new Date().getFullYear()} Suraj Anand. All rights reserved.</p>
                    <p className="made-with">Made with <i className="fa fa-heart"></i> using React</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer