import React from 'react'
import "../styles/About.css"
function About() {
  return (
      <>
        <section id="about">

        <div className="about d-flex min-vh-100 text-white align-items-center justify-content-center flex-column">
          <div className="mb-4">
            <p data-aos="fade-right" className='text-center fs-4 mb-0'>About Me</p>
            <div data-aos="fade-left"  data-aos-duration="1000" className='my-0 text-primary h-line mt-0'></div>
          </div>

          <div className="container mt-4">
            <div className="row text-white text-center"></div>
              <div className="row">
                  <div className="col-lg-6 my-auto">
                      <div data-aos="fade-down"> <p className='fs-5 p-3'>Hi There! Myself Suraj. Computer Science Graduate, Full Time Software Engineer. I learn, I write code, I build software solutions like Web Apps with simple UI and complex backend, Static Websites and Authentication Systems.</p> </div>
                      <div data-aos="fade-up"> <button className='btn btn-outline-info rounded-4 mt-5  mx-auto d-flex' onClick={() => {window.location.href = "https://www.linkedin.com/in/suraj-anand-/"}}>Know More</button> </div>
                  </div>

                  <div className="col-6 text-center d-none d-lg-block" data-aos="flip-down"  data-aos-duration="1000">
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