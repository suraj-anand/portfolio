import React, { useEffect, useState } from 'react'
import "../styles/Home.css"

function Home() {

    let [spanStyle , setSpanStyle] = useState({color : "#02F2E1"}) // Color Changer

    useEffect(() => {
        const interval = setInterval(() => {
            let color = Math.floor(Math.random()*16777215).toString(16)
            setSpanStyle((prev) => { return {"color" : `#${color}`}; });
        }, 3000);
        return () => clearInterval(interval);
    }, [spanStyle])

    return (
    <>
        <div className='home' id="home">     
            <div className="d-flex min-vh-100 text-white align-items-center">
                <div className="container-fluid">

                    <div className="row" data-aos="zoom-in" data-aos-duration="3000">
                            <div className="hover13">
                                <figure className='d-flex mx-auto'>
                                    <img src={require("../images/self-02.jpg")} style={{ width:"250px" }} className="mx-auto rounded-circle p-1 my-2"  />
                                </figure>
                            </div>
                    </div>

                    <h1 className='text-center' data-aos="flip-up" data-aos-duration="1500">Hi there! This is <span style={{...spanStyle}} >Suraj.</span></h1>
                    <div className="row text-center">
                        <div className="col-12 my-2">
                            <p className='fs-5 text-white' data-aos="zoom-in" data-aos-duration="1500">I write Code! | I build Web Apps , Simple UI & Backend for Sites</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home