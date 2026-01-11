import { useEffect } from 'react'
import Typed from "typed.js"
import selfImg from 'assets/images/self-01.jpg'

function Home({ color }) {

    useEffect(() => {
        const words = ["write Clean Code", "build Web Applications", "solve Complex Problems", "automate Workflows"];
        new Typed('.typed', {
            strings: words,
            loop: true,
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500
        });
    }, [])

    return (
        <div className="hero-section">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            
            <div className="container text-white">
                <div className="hero-content">
                    <div className="hero-image" data-aos="fade-right">
                        <div className="image-glow"></div>
                        <img src={selfImg} alt="Suraj Anand" />
                    </div>
                    
                    <div className="hero-text" data-aos="fade-left">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/suraj-anand-/" aria-label="LinkedIn" data-aos="zoom-in">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/suraj-anand/" aria-label="GitHub" data-aos="zoom-in" data-aos-delay="100">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                        
                        <h1 className="hero-greeting" data-aos="fade-up">
                            Hi There!, I'm <span className="name-highlight" style={{ color: color }}>Suraj</span>
                        </h1>
                        
                        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                            Software Engineer | Backend Development, Automation, AI and Cloud
                        </p>
                        
                        <div className="typed-container" data-aos="fade-up" data-aos-delay="400">
                            <span className="typed-prefix"><b>I</b> </span>
                            <span className='typed'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home