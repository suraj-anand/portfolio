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
    <Carousel>
      {
        data.map((e, index) => {
          const { name, img, url, org } = e;
          return (
            <Carousel.Item interval={1250} itemID={index} id={index} >
              <Carousel.Caption >{name}</Carousel.Caption>
              <img src={img} alt={name} className='img-fluid' />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

function Certification() {
    return (
        <>
            <div className="d-flex min-vh-100 align-items-center justify-content-center flex-column p-5 certification">
                <div className="d-flex text-center flex-column mt-5 mb-5" data-aos="fade-down">
                    <p className='text-white fs-4 mb-0'>
                      Acquired Certifications
                    </p>
                    <div className="h-line-2 mt-0"></div>
                </div>

                <div className="my-4 cert-div">
                  <CertificationCarousel />
                </div>
            </div>
        </>
    )
}

export default Certification