import { useState } from 'react';

function Contact() {

  const [userData, setUserData] = useState({
    "name": "",
    "email": "",
    "number": "",
    "message": ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserData({
      "name": "",
      "email": "",
      "number": "",
      "message": ""
    })
    alert("Thanks for reaching out! This feature is under development. Please contact me via email or phone.")
  }

  const iframe_map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.143614342114!2d80.25446801523186!3d13.090083315808135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e73ca52363%3A0xa1a2b001199452e3!2sPerumalpet%2C%20Purasaiwakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1665051449489!5m2!1sen!2sin"
  const mapUrl = "https://maps.app.goo.gl/7JL35dnza8Pna2ZR6"

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <i className="fa fa-envelope"></i> Get In Touch
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="map-container">
              <iframe 
                src={iframe_map} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="info-cards">
              <div className="info-card" onClick={() => window.open(mapUrl, '_blank')}>
                <div className="info-icon">
                  <i className="fa fa-location-dot"></i>
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="info-card" onClick={() => window.location.href = "mailto:suraj02anand@gmail.com"}>
                <div className="info-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>suraj02anand@gmail.com</p>
                </div>
              </div>

              <div className="info-card" onClick={() => window.location.href = "tel:9080819249"}>
                <div className="info-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 90808 19249</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper" data-aos="fade-left">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Have a question or want to work together?</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name <span>*</span></label>
                <input 
                  onChange={handleChange} 
                  value={userData.name} 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  autoComplete="off" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span>*</span></label>
                <input 
                  onChange={handleChange} 
                  value={userData.email} 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  required 
                  autoComplete="off" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="number">Phone</label>
                <input 
                  onChange={handleChange} 
                  value={userData.number} 
                  type="text" 
                  name="number" 
                  id="number" 
                  placeholder="+91 XXXXX XXXXX" 
                  autoComplete="off" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  onChange={handleChange} 
                  value={userData.message} 
                  name="message" 
                  id="message" 
                  placeholder="Your message here..." 
                  rows="5"
                  autoComplete="off"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact