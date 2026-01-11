import Carousel from 'react-bootstrap/Carousel';

import cs50 from 'assets/images/certifications/cs50.png'
import gcp_ace from 'assets/images/certifications/gcp-ace.png'
import gcp_cdl from 'assets/images/certifications/gcp-cdl.png'

const data = [
    {
        name: "Google Cloud - Associate Cloud Engineer",
        img: gcp_ace
    },
    {
      name: "Harvard's CS50",
      img: cs50
    },
    {
      name: "Google Cloud - Cloud Digital Leader",
      img: gcp_cdl
    },
]

function CertificationCarousel() {
  return (
    <Carousel className="certification-carousel" indicators={true} controls={true}>
      {
        data.map((e, index) => {
          const { name, img } = e;
          return (
            <Carousel.Item interval={3000} key={index}>
              <div className="cert-card">
                <div className="cert-image-wrapper">
                  <img src={img} alt={name} />
                </div>
                <div className="cert-badge">
                  <i className="fa fa-certificate"></i>
                </div>
              </div>
              <Carousel.Caption className="cert-caption">
                <h3>{name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

function Certification() {
    return (
        <section id="certification" className="certification-section">
            <div className="certification-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">
                        <i className="fa fa-award"></i> Certifications
                    </h2>
                    <div className="title-underline"></div>
                </div>

                <div className="carousel-container" data-aos="fade-up" data-aos-delay="200">
                    <CertificationCarousel />
                </div>
            </div>
        </section>
    )
}

export default Certification