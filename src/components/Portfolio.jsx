import React from 'react'
import { useState ,useEffect } from 'react'
import "../styles/Portfolio.css"
import {PORTFOLIO_DATA} from '../global/constants'
function Portfolio() {

  

  const [dispData , setDispData] = useState([{}])

  useEffect(() => {
    setDispData(() => {return PORTFOLIO_DATA;})
  }, [])
  

  function filterData(event){

    console.log(event.target)

    setDispData(() => {return []})
    const type = event.target.value;
    console.log(type)
    if(type==="All"){
      setDispData(() => {return PORTFOLIO_DATA});
    }
    else{
      setDispData(() => {
          return PORTFOLIO_DATA.filter((singleData) => {
              return singleData.type === type;
          })
      })
    }
  }


  function Card(props){

    function handleClick(event){
      if(props.data.type === "Printable"){
        window.location.href = (props.data.img);
      }
      else{
        window.location.href = (props.data.url);
      }
    }
  
    return (                  
      <div className="col-md-4 col-12">
        <div className="card card-hover-1 my-3 text-center mx-auto" data-aos="fade-up" style={{width:"270px"}} onClick={handleClick}>
            <div className="card-img-top d-flex p-1">
                <img className="text-center mx-auto my-auto img-fluid rounded-1" src={props.data.img}  />
            </div>
            <div className="card-body">
                <p className='card-text text-center fs- fw-bold'>{props.data.text}</p>
            </div>
        </div>
      </div>
    )
  }

  return (<>
    <section id="portfolio">
        <div className="d-flex min-vh-100 align-items-center portfolio">
            <div className="container-lg">
                <div className="row">
                  <p className="fs-3 text-center mt-5 text-white">Things That <span className='text-danger'>I've Made</span></p>
                </div>

                  {/* display section */}
                  <div className="row mt-4">
                    <div className='d-flex align-items-center justify-content-center'>
                            <button onClick={filterData} className="btn btn-outline-primary mx-4" value="All">All</button>
                            <button onClick={filterData} className="btn btn-outline-dark mx-4" value="WebApp">Web Apps</button>
                            <button onClick={filterData} className="btn btn-outline-light mx-4" value="Printable">Docs</button>
                    </div>
                </div>

                <div className="row my-5 align-items-center justify-content-center">
                {dispData.map((singleData , index) => {
                  return (
                    <Card data={singleData} />
                  )
                })}
                </div>
                
                <p className='fs-4 text-center text-white my-5'> Stay tuned! A lot more to come here ! </p>

            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio