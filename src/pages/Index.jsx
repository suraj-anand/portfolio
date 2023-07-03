import React from 'react'

// Components
import {About, Certification, Contact, Footer, Home, NavBar, Portfolio, Skills} from '../components'

// Stlyes
import "../styles/Home.css"
import "../styles/App.css"
import Favicon from 'react-favicon'

function INDEX() {
  return (
    <>
    <Favicon url={require(`../images/js.png`)} />
    <div className="main-bg" style={{background:`url(${require("../images/dark-pc.jpg")})` , backgroundRepeat: "no-repeat" , backgroundSize:"cover" , backgroundPosition:"center"}}>
        <NavBar />
        <Home />
    </div>

    <div className="main-bg" style={{background:`url(${require("../images/code-bg.jpg")})` , backgroundRepeat:"no-repeat" , backgroundPosition : "center" , backgroundSize:"cover"}}>
      <About />
    </div> 

    <div className="main-bg" style={{background:`url(${require("../images/skills-bg.jpg")})` , backgroundRepeat:"no-repeat" , backgroundPosition : "center" , backgroundSize:"cover"}}>
      <Skills />
    </div>
      
    <Certification />

      <Portfolio />

      <Contact />

      <Footer /> 
      
    </>
  )
}

export default INDEX