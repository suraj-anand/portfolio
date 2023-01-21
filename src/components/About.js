import React from 'react'
import "../styles/About.css"
function About() {
  return (
      <>
        <section id="about">
        <div className="container">
          <div className="row text-white text-center">
            <h4 data-aos="fade-right" className='mt-5'>About Me</h4>
            <div data-aos="fade-left"  data-aos-duration="1000" className='my-0 lh-1 text-primary h-line'></div>
          </div>
        </div>
            <div className="d-flex min-vh-100 text-white p-5 align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-3 my-auto">
                       <div data-aos="fade-down"> <p className='fs-5'>Hi There! Myself Suraj. A Computer Science Graduate Student who works in an Indian MNC for full-time as a Software Engineer. On my free time I learn & I write code in addition I build software solutions like Web Apps with simple UI and complex backend, Static WebSites and Authentication System.</p> </div>
                       <div data-aos="fade-up"> <button className='btn btn-outline-info rounded-4 mt-5 mx-lg-0 mx-auto d-flex' onClick={() => {window.location.href = "https://www.linkedin.com/in/suraj-anand-/"}}>Know More</button> </div>
                    </div>

                    <div className="col-6 text-center d-none d-lg-block">
                        <img src={require(`../images/Self-01.jpg`)} alt="" srcset="" className='img-fluid' />
                    </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default About