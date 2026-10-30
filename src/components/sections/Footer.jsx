import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function Footer() {
    return (
        <footer className="footer-section" id="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Terminal Brand Header */}
                    <div className="footer-brand">
                        <div className="terminal-pill mono">
                            <div className="terminal-cmd-line">
                                <span className="terminal-prefix">suraj@:~$</span>
                                <span className="terminal-cmd">whoami</span>
                                <span className="terminal-cursor">_</span>
                            </div>
                            <div className="terminal-output-line">
                                <span className="terminal-output-arrow">↳</span>
                                <span className="terminal-output-text">Struggle. Solve. Succeed.</span>
                            </div>
                        </div>
                    </div>

                    {/* Social & Channel Connect Links */}
                    <div className="footer-actions">
                        <div className="footer-social-cluster">
                            <a
                                href="https://github.com/suraj-anand/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-pill-btn mono"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub className="pill-icon github" />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/suraj-anand-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-pill-btn mono"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin className="pill-icon linkedin" />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://leetcode.com/suraj-anand/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-pill-btn mono"
                                aria-label="LeetCode Profile"
                            >
                                <SiLeetcode className="pill-icon leetcode" />
                                <span>LeetCode</span>
                            </a>

                            <a
                                href="https://www.instagram.com/suraj_purushothaman/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-pill-btn mono"
                                aria-label="Instagram Profile"
                            >
                                <FaInstagram className="pill-icon instagram" />
                                <span>Instagram</span>
                            </a>
                        </div>

                        {/* Dedicated Email Capsule */}
                        <a
                            href="mailto:suraj02anand@gmail.com"
                            className="footer-email-capsule mono"
                            aria-label="Send direct email"
                        >
                            <FaEnvelope className="email-icon" />
                            <span>suraj02anand@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom Strip */}
                <div className="footer-bottom">
                    <p className="mx-auto copyright mono">© {new Date().getFullYear()} Suraj Anand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer