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
    console.log(userData)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserData({
      "name": "",
      "email": "",
      "number": "",
      "message": ""
    })
    alert("Hey! Apologies, reach out on my phone please, this feature is under development")
  }

  const iframe_map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.143614342114!2d80.25446801523186!3d13.090083315808135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e73ca52363%3A0xa1a2b001199452e3!2sPerumalpet%2C%20Purasaiwakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1665051449489!5m2!1sen!2sin"
  const mapUrl = "https://maps.app.goo.gl/7JL35dnza8Pna2ZR6"

  return (
    <div className="contact-wrapper">
    <div className="container contact" id="contact">
      <div className="row">
        <div className="my-5">
          <h4 data-aos="fade-right" className="fw-bold fs-3 text-white text-center">Contact Me</h4>
          <div className='my-0 h-line-2 text-center'></div>
        </div>

        <div className="col-lg-6">
          <div className="d-flex mx-auto text-center flex-column">

            <div data-aos="zoom-in-up">
              <iframe src={iframe_map} width="90%" height="90%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mx-auto'></iframe>
            </div>

            <div className="row d-flex mt-5">

              <div data-aos="zoom-in-down" className="col-lg-4 p-lg-5 w-100">
                <div className="info">
                  <div className="text-start text-lg-center address p-2" onClick={() => {window.location.href = mapUrl}}>
                    <i className="fa fa-location"></i>
                    <h4>Location:</h4>
                    <p>#3, Vallam Bangaru Street, Purasaiwalkam, Chennai.</p>
                  </div>

                  <div className="text-start text-lg-center email p-2" onClick={() => {window.location.href = "mailto:suraj02anand@gmail.com"}}>
                    <i className="fa fa-envelope"></i>
                    <h4>Email:</h4>
                    <p>suraj02anand@gmail.com</p>
                  </div>

                  <div className="text-start text-lg-center phone p-2" onClick={() => {window.location.href = "tel:9080819249"}}>
                    <i className="fa fa-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 90808 19249</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="col-lg-6 p-5">
          <p className="fs-3 text-center text-white my-lg-0 my-4 mx-4" data-aos="fade-in" data-aos-duration="1000">
            Get in touch</p>

          <form onSubmit={handleSubmit} className='p-lg-5'>

            <div className="form-floating mb-3 ">
              <input onChange={handleChange} value={userData.name} type="text" name="name" id="floatingInput" placeholder='Name' className='form-control my-4 rounded-5 border-0 shadow-md' required autoComplete='off' />
              <label for="floatingInput" className='text-muted'>Name <span className='text-danger p-0 m-0'>*</span></label>
            </div>


            <div className="form-floating mb-3" data-aos="fade-up" data-aos-duration="2000">
              <input onChange={handleChange} value={userData.email} type="email" name="email" id="" placeholder='Email' className='form-control my-4 rounded-5 border-0 shadow-md' required autoComplete='off' />
              <label for="floatingInput" className='text-muted'>Email <span className='text-danger p-0 m-0'>*</span></label>
            </div>

            <div className="form-floating mb-3" data-aos="fade-up" data-aos-duration="2000">
              <input onChange={handleChange} value={userData.number} type="text" name="number" id="" placeholder='Phone' className='form-control my-4 rounded-5 border-0 shadow-md' autoComplete='off' />
              <label for="floatingInput" className='text-muted'>Phone</label>
            </div>

            <div className="form-floating mb-3" data-aos="fade-up" data-aos-duration="2000">
              <textarea onChange={handleChange} value={userData.message} name="message" id="" placeholder='Message' className='form-control rounded-2' autoComplete='off'></textarea>
              <label for="floatingInput" className='text-muted'>Message</label>
            </div>

            <button type="submit" className="btn btn-lg btn-primary my-5 d-flex mx-auto" data-aos="fade-up" data-aos-duration="2000">Send <i className="icon fa fa-paper-plane-o ml-1"></i></button>

          </form>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Contact