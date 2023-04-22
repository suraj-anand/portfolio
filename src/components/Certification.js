import React from 'react'

function Certification() {
  return (
    <>

        <div className="p-3">
            <div className="d-flex p-3 m-2 text-center " data-aos="flip-up" data-aos-duration="1000">
                <h5 className='mx-auto text-white fs-3'>Acquired Certifications</h5>
            </div>


            <div className="d-flex flex-column flex-md-row   align-items-center justify-content-center w-100"  data-aos="flip-down" data-aos-duration="1000"> 
                <img className='p-3 img-fluid flex-item mx-auto mx-md-0' height={200} width={200} src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/68891920?key=d9684999a16658f6637a1a4acb1b5f86891e3a77a442d6d53b36d4a07f4b5591" alt="" />
                <img className='p-3 img-fluid flex-item mx-auto mx-md-0' height={200} width={500} src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/68891920?key=d9684999a16658f6637a1a4acb1b5f86891e3a77a442d6d53b36d4a07f4b5591" alt="" />
            </div>


            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center" style={{marginTop: '5rem'}}  data-aos="flip-up" data-aos-duration="1000">
                <img className='p-3 img-fluid flex-item mx-auto mx-md-0' height={200} width={200} src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/65266171?key=990216d14c84deac2fbfce22ebc5fb82da9bdb80af29e2a1755c303df2e5f0fe" alt="" />
                <img className='p-3 img-fluid flex-item mx-auto mx-md-0' height={200} width={500} src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65266171?key=990216d14c84deac2fbfce22ebc5fb82da9bdb80af29e2a1755c303df2e5f0fe" alt="" />
            </div>

        </div>

    </>
    )
}

export default Certification