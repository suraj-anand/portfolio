import React from 'react'
import { useState ,useEffect } from 'react'
import "../styles/Portfolio.css"

function Portfolio() {

  const data = [{
    id:1,
    type:"WebApp",
    text:"Online Book Store",
    img: require('../images/Portfolio.jpg'),
    url:"https://sj-portfolio.netlify.app/"
    },
    {
    id:2,
    type: "WebApp",
    text:"Portfolio",
    img: require('../images/Portfolio.jpg'),
    url:"https://sj-portfolio.netlify.app/"
    },
    {
      id:3,
      type: "WebApp",
      text:"Student Portal",
      img: require("../images/Student_Portal.jpg"),
      url:"https://quiet-beyond-48389.herokuapp.com/"
    },
    {
      id:4,
      type:"Printable",
      text:"Buisness Card",
      img: require(`../images/Buisness_Card_01.jpg`),
    },
    {
      id:4,
      type:"Printable",
      text:"Brochure",
      img: require(`../images/Brouchure.jpg`),
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
      id:5,
      type:"Printable",
      text:"Formal Invitation",
      img: require(`../images/Invitation.jpg`),
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
  ]

  const [dispData , setDispData] = useState([{}])

  useEffect(() => {
    setDispData(() => {return data;})
  }, [])
  

  function filterData(event){

    console.log(event.target)

    setDispData(() => {return []})
    const type = event.target.value;
    console.log(type)
    if(type==="All"){
      setDispData(() => {return data});
    }
    else{
      setDispData(() => {
          return data.filter((singleData) => {
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
        <div className="card card-hover-1 my-3 text-center mx-auto bg-dark text-white" data-aos="fade-up" style={{width:"270px"}} onClick={handleClick}>
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
        <div className="d-flex min-vh-100 p-3 portfolio">
            <div className="container-lg">
                <div className="row">
                  <p className="fs-3 text-center mt-5 text-white">Things That <span className='text-danger'>I've Made</span></p>
                </div>

                  {/* display section */}
                  <div className="row mt-4">
                    <div className='d-flex align-items-center justify-content-center'>
                            <button onClick={filterData} className="btn btn-outline-primary mx-4" value="All">All</button>
                            <button onClick={filterData} className="btn btn-outline-dark mx-4" value="WebApp">Web Apps</button>
                            <button onClick={filterData} className="btn btn-outline-light mx-4" value="Printable">Printable</button>
                    </div>
                </div>

                <div className="row mt-5 align-items-center justify-content-center">
                {dispData.map((singleData , index) => {
                  console.log(singleData)
                  return (
                    <Card data={singleData} />
                  )
                })}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio