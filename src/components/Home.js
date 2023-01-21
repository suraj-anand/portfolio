import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../styles/Home.css"

function Home() {

    let [spanStyle , setSpanStyle] = useState({color : "#ff0000"})

    useEffect(() => {
      const interval = setInterval(() => {
        let color = Math.floor(Math.random()*16777215).toString(16)
        setSpanStyle((prev) => {
            return {"color" : `#${color}`};
        });
      }, 2500);
      return () => clearInterval(interval);
    }, []);

    

    return (
    <>

    
    <div >     
        <div className="d-flex vh-100 text-white align-items-center" >
            <div className="container-fluid p-5">

                <div className="row" data-aos="zoom-in" data-aos-duration="3000">
                        <div className="hover13">
                            <figure className='d-flex mx-auto'>
                                <img src={require("../images/self.jpg")} style={{ width:"150px" , height:"150px"  }} className="mx-auto rounded-circle p-1 my-2"  />
                            </figure>
                        </div>
                </div>

                <h1 className='text-center' data-aos="flip-up" data-aos-duration="1500">Hi there! This is <span style={{...spanStyle}} >Suraj.</span></h1>
                <div className="row text-center">
                    <div className="col-12 my-3">
                        <p className='h6 text-white' style={{lineHeight:"1.5em"}} data-aos="zoom-in" data-aos-duration="1500">I write Code! | I build Web Apps , Simple UI & Backend for Sites</p>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home