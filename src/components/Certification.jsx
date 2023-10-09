import React from 'react'

function Certification() {
    return (
        <>
        <div className="d-flex min-vh-100 align-items-center justify-content-center flex-column p-5 certification">

            <div className="d-flex text-center flex-column mt-5 mb-2" data-aos="fade-down">
                <p className='text-white fs-4 mb-0' >Acquired Certifications</p>
                <div className="h-line-2 mt-0"></div>
            </div>

            <div className="p-4">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center" style={{marginTop: '3rem'}} data-aos="fade-up">
                    <img className='img-fluid p-3' src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/68891920?key=d9684999a16658f6637a1a4acb1b5f86891e3a77a442d6d53b36d4a07f4b5591" alt="" />
                    <img className='img-fluid p-3'  src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/68891920?key=d9684999a16658f6637a1a4acb1b5f86891e3a77a442d6d53b36d4a07f4b5591" alt="" />
                </div>

                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center" style={{marginTop: '5rem'}} data-aos="fade-up" >
                    <img className='img-fluid p-3'  src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/65266171?key=990216d14c84deac2fbfce22ebc5fb82da9bdb80af29e2a1755c303df2e5f0fe" alt="" />
                    <img className='img-fluid p-3'   src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65266171?key=990216d14c84deac2fbfce22ebc5fb82da9bdb80af29e2a1755c303df2e5f0fe" alt="" />
                </div> 
            </div>
        </div>
        </>
    )
}

export default Certification