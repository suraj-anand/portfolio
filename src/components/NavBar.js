import React from 'react'
import "../styles/NavBar.css"
function NavBar() {

// Styling Functions

return (
    <nav class="navbar navbar-expand-md navbar-dark bg-transparent" id="navbar" >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Suraj</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="#home" aria-current="page" onClick={() => {}}>Home <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link " href="#about" onClick={() => {}}>About</a>
                    </li>
                    <li class="nav-ite mx-2">
                        <a class="nav-link " href="#skills" onClick={() => {}}>Skills</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link " href="#contact" onClick={() => {}}>Contact</a>
                    </li>
                </ul>
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a className='btn btn-outline-success rounded-5' href={require(`../images/G_Resume.pdf`)} download>GET RESUME</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar