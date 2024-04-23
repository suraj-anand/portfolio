import { PORTFOLIO_DATA } from 'global/constants'
function Portfolio() {

  function Card({ data: {text, img} }) {

    return (
      <div className="col-md-4 col-12">
        <div className="card card-hover-1 my-3 text-center mx-auto"  style={{ width: "270px", height: "220px" }}>
          <div className="card-img-top d-flex p-1">
            <img className="text-center mx-auto my-auto img-fluid rounded-1" src={img} style={{ height:"150px", width: "270px", objectFit: "contain" }} />
          </div>
          <div className="card-body">
            <p className='card-text text-center fs- fw-bold'>{text}</p>
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

          <div className="row my-5 align-items-center justify-content-center">
            {PORTFOLIO_DATA.map((data, index) => {
              return (
                <Card data={data} key={index} />
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