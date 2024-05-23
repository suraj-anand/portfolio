function Footer() {
    return (
        <>
        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <footer className="bg-dark p-5"  id="footer">
            <div className="container text-white" >
                <div className="row">
                    <div className="col-sm-12">
                        <h4  data-aos="flip-up" data-aos-duration="1000">About</h4>
                        <p data-aos="flip-down" data-aos-duration="1000">I'm a GCP 2x Certified Software Engineer / Web developer with hands on experience in back end technologies like Django, NodeJS, Express, MongoDB, RDBMS.</p>
                    </div>
                </div>
                
                <div className="row mt-3">
                    <div className="col-6">
                        <ul className='p-0'>
                            <h4 data-aos="flip-left">Links</h4>
                            <li data-aos="flip-right" id="list-item"className='list-group-item my-2'><a href="#home">Home</a></li>
                            <li data-aos="flip-right" id="list-item"className='list-group-item  my-2'><a href="#about">About</a></li>
                            <li data-aos="flip-right" id="list-item"className='list-group-item  my-2'><a href="#skills">Skills</a></li>
                            <li data-aos="flip-right" id="list-item"className='list-group-item  my-2'><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h4 data-aos="flip-down">Get in touch</h4>
                        <p data-aos="flip-down">Feel Free to reach me out through social media links provided below.</p>
                    </div>
                </div>
            
            <p className='text-center my-4 fs-5' data-aos="zoom-in" style={{fontFamily : "ubuntu"}}>Follow Me ----- 
            <div className='d-flex align-items-center justify-content-center my-auto '>
                    <img src='https://assets.leetcode.com/static_assets/public/icons/favicon-32x32.png' className="mx-3 mb-1 img-fluid footer-icons my-auto"     onClick={() => { window.location.href = "https://leetcode.com/suraj-anand/"; }}></img>
                    <i data-aos="zoom-in" className="mx-3 footer-icons fa-brands fa-linkedin fa-lg"    onClick={() => { window.location.href = "https://www.linkedin.com/in/suraj-anand-/"; }}></i>
                    <i data-aos="zoom-in" className="mx-3 footer-icons fa-brands fa-instagram fa-lg "  onClick={() => { window.location.href = "https://www.instagram.com/suraj_purushothaman/"; }}></i>
                    <i data-aos="zoom-in" className="mx-3 footer-icons fa-brands fa-github fa-lg "     onClick={() => { window.location.href = "https://github.com/suraj-anand/"; }}></i>
            </div>
            </p>

            <div className="container" >
                <div className="row text-center">
                    <p> Copyright © {new Date().getFullYear()} | All rights reserved | Made by ~Suraj</p>
                </div>
            </div>
            
            </div>
            
        </footer>
        </div>
        </>
    )
}

export default Footer