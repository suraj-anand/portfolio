import React, { useEffect, useState } from 'react'
import "../styles/NavBar.css"

function NavBar() {

    let [spanStyle , setSpanStyle] = useState({color : "#02F2E1"}) // Color Tracker - Changer

    useEffect(() => {
        const interval = setInterval(() => {
            let color = Math.floor(Math.random()*16777215).toString(16)
            setSpanStyle((prev) => { return {"color" : `#${color}`}; });
        }, 3000);
        return () => clearInterval(interval);
    }, [spanStyle])

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-transparent p-4" id="navbar" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={spanStyle}>
                    &lt;Suraj /&gt;
                </a>
                <button className="navbar-toggler bg-transparent border-0 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#home" aria-current="page" onClick={() => {}}>Home <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#about" onClick={() => {}}>About</a>
                        </li>
                        <li className="nav-ite mx-2">
                            <a className="nav-link text-center" href="#skills" onClick={() => {}}>Skills</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#portfolio" onClick={() => {}}>Portfolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-center" href="#contact" onClick={() => {}}>Contact</a>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex d-md-block mt-3 mt-md-0">
                            <a className='get-resume-btn btn mx-auto' href={require(`../assets/Resume.pdf`)} download>GET RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar