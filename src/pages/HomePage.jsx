import { useState, useEffect } from 'react'

// Components
import { 
  Hero, 
  NavBar, 
  About, 
  Skills,
  Certification, 
  LazyBackgroundImage,
  Portfolio, 
  Contact, 
  Footer,   
} from '../components'

// BG-Images
import darkpc from 'assets/images/dark-pc.jpg'
import codebg from 'assets/images/code-bg.jpg'
import skillsbg from 'assets/images/skills-bg.jpg'

function HomePage() {

  let [color , setColor] = useState("#02F2E1") // Color Tracker - Changer

  useEffect(() => {
    const interval = setInterval(() => {
        let color = Math.floor(Math.random()*16777215).toString(16)
        setColor(() => (`#${color}`));
    }, 3000);
    return () => clearInterval(interval);
}, [color])


  return (
    <>
      <LazyBackgroundImage imageUrl={darkpc} >
        <NavBar color={color} />
        <Hero color={color} />
      </LazyBackgroundImage>

      <LazyBackgroundImage imageUrl={codebg} >
        <About />
      </LazyBackgroundImage>

      <LazyBackgroundImage imageUrl={skillsbg}>
        <Skills />
      </LazyBackgroundImage>

      <Certification />

      <Portfolio />

      <Contact />

      <Footer />
    </>
  )
}

export default HomePage