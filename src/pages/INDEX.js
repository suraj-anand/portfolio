import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'
import Temp from '../components/Temp'
import "../styles/Home.css"
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
      
      <Contact />

      {/* <Temp /> */}
      <Footer />
    </>
  )
}

export default INDEX