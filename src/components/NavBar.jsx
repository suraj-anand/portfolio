import resume from 'assets/Resume.pdf'

function NavBar({ color }) {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-transparent p-4" id="navbar" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color: color}}>
                    &lt;Suraj /&gt;
                </a>
                <button className="navbar-toggler bg-transparent border-0 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#about">About</a>
                        </li>
                        <li className="nav-ite mx-2">
                            <a className="nav-link text-center" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex d-md-block mt-3 mt-md-0">
                            <a className='get-resume-btn btn mx-auto' href={resume} download>GET RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar