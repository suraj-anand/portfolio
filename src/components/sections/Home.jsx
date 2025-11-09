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
            <div className='home' id="home">
                <div className="d-flex min-vh-100 text-white align-items-center">
                    <div className="container-fluid">

                        <div className="row" data-aos="zoom-in" data-aos-duration="3000">
                            <div className="hover13">
                                <figure className='d-flex mx-auto'>
                                    <img src={selfImg} style={{ width: "250px" }} className="mx-auto rounded-circle p-1 my-2" />
                                </figure>
                            </div>
                        </div>

                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h1 className='text-center' data-aos="flip-up" data-aos-duration="1500">
                                Hi there! I'm <span style={{ color: color }} >Suraj</span>
                            </h1>
                            <p>
                                Software Engineer specializing in Python, AWS, and Automation
                            </p>
                        </div>

                        <div className="row text-center">
                            <div className="col-12 my-2">
                                <p className='fs-5 fw-bolder text-white fst-italic ' data-aos="zoom-in" data-aos-duration="1500">
                                    <span>I </span><span className='typed'></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home