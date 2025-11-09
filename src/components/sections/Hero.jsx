import { useEffect } from 'react'
import Typed from "typed.js"
import selfImg from 'assets/images/self-01.jpg'

function Home({ color }) {

    useEffect(() => {
        const words = "write Code, build Web Applications, Fix Bugs, Solve Problems".split(",");
        new Typed('.typed', {
            strings: words,
            loop: true,
            typeSpeed: 110,
            backSpeed: 50,
            backDelay: 2000
        });
    }, [])

    return (
        <>
            <div className="container text-white">
                <div className="about-section">
                    <div className="image-wrapper">
                        <img src={selfImg} alt="Avatar" />
                    </div>
                    <div className="content">
                        <div className="social_icons fs-5 my-2">
                            <a href="https://www.linkedin.com/in/suraj-anand-/" className='text-decoration-none'>
                                <i data-aos="zoom-in" className="fa-brands fa-linkedin fa-lg"></i>
                            </a>
                            <a href='https://github.com/suraj-anand/'>
                                <i data-aos="zoom-in" className="fa-brands fa-github fa-lg"></i>
                            </a>
                        </div>
                        
                        <h2 data-aos="flip-up" data-aos-duration="1500">
                            Hi there! I'm <span style={{ color: color }} >Suraj</span>
                        </h2>
                        <p>
                            Software Engineer specializing in Python, AWS, and Automation
                        </p>
                        <span>I </span><span className='typed'></span>

                        <div className="mobile_social_icons">
                            <a href="https://www.linkedin.com/in/suraj-anand-/">
                                <i data-aos="zoom-in" className="fa-brands fa-linkedin fa-lg"></i>
                            </a>
                            <a href='https://github.com/suraj-anand/'>
                                <i data-aos="zoom-in" className="fa-brands fa-github fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home