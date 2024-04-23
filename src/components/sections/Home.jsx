import selfImg from 'assets/images/self-01.jpg'

function Home({ color }) {

    return (
        <>
            <div className='home' id="home">
                <div className="d-flex min-vh-100 text-white align-items-center">
                    <div className="container-fluid">

                        <div className="row" data-aos="zoom-in" data-aos-duration="3000">
                            <div className="hover13">
                                <figure className='d-flex mx-auto'>
                                    <img src={selfImg} style={{ width: "250px" }} className="mx-auto rounded-circle p-1 my-2" />
                                </figure>
                            </div>
                        </div>

                        <h1 className='text-center' data-aos="flip-up" data-aos-duration="1500">Hi there! This is <span style={{color: color}} >Suraj.</span></h1>
                        <div className="row text-center">
                            <div className="col-12 my-2">
                                <p className='fs-5 fw-bolder text-white' data-aos="zoom-in" data-aos-duration="1500">
                                    <em>I write Code! | I build Web Applications, Fix Bugs & Solve Problems</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home