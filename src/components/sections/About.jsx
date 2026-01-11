import self from 'assets/images/self-02.jpg'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p>👋 Hey there</p>
            <p className="intro-text">
              I'm <span className="highlight">Suraj</span>, a Computer Science graduate and Software Engineer with <span className="highlight">3+ years</span> of industry experience.
            </p>

            <p>
              I design and build scalable web applications, APIs, automation scripts, and cloud-based solutions using modern technologies like Python, Django, React, AWS & GCP.
            </p>

            <p>
              My work focuses on solving real-world problems through clean, efficient, and maintainable code. I'm passionate about automation, cloud ecosystems, and continuously exploring new technologies to build smarter, more reliable systems.
            </p>

            <a href="https://www.linkedin.com/in/suraj-anand-/" className="know-more-btn" data-aos="fade-up">
              <span>Know More</span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About