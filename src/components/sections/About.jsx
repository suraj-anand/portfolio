import self from 'assets/images/self-02.jpg'

function About() {
  return (
    <>
      <section id="about">
        <div className="about d-flex min-vh-100 text-white align-items-center justify-content-center flex-column">
          <div className="mb-4">
            <p data-aos="fade-right" className='text-center fs-4 mb-0'>About Me</p>
            <div className='my-0 text-primary h-line mt-0'></div>
          </div>

          <div className="container mt-5">
            <div className="row text-white text-center"></div>
            <div className="row">
              <div className="col-lg-6 my-auto">
                <div data-aos="fade-down" className="fs-5"> 
                    <p>Hey everyone! 👋</p>
                    <p>
                      I'm Suraj, a Computer Science graduate and a Software Engineer with over ~3+ years of industry experience. I design and build scalable web applications, APIs, automation scripts, and cloud-based tools using technologies like Python, Django, React, AWS & GCP.
                    </p>

                    <p>
                      My work focuses on solving real-world problems through clean, efficient, and maintainable code. I'm passionate about automation, cloud ecosystems, and continuously exploring new technologies to build smarter, more reliable systems.
                    </p>
                </div>
                <div data-aos="fade-up"> <button className='btn btn-lg btn-outline-info rounded-4 mt-5 mx-auto d-flex' onClick={() => { window.location.href = "https://www.linkedin.com/in/suraj-anand-/" }}>Know More</button> </div>
              </div>

              <div className="col-6 text-center d-none d-lg-block" data-aos="flip-down" data-aos-duration="1000">
                <img src={self} alt="" srcset="" className='img-fluid' style={{width: "50%"}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About