import self from 'assets/images/self-03.jpg'

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
                    <p>Hey Everyone !! </p>
                    <p>
                      I'm Suraj, I'm a computer science graduate and a full-time software engineer. I learn, I write code, and I build software solutions such as web applications, APIs, Python scripts, static websites, and authentication systems. I'm constantly exploring cloud technologies.
                    </p>
                </div>
                <div data-aos="fade-up"> <button className='btn btn-lg btn-outline-info rounded-4 mt-5 mx-auto d-flex' onClick={() => { window.location.href = "https://www.linkedin.com/in/suraj-anand-/" }}>Know More</button> </div>
              </div>

              <div className="col-6 text-center d-none d-lg-block" data-aos="flip-down" data-aos-duration="1000">
                <img src={self} alt="" srcset="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About