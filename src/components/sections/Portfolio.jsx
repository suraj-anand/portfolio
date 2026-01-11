import { PORTFOLIO_DATA } from 'global/constants'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Things I've <span className="highlight">Built</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIO_DATA.map((data, index) => (
            <Card data={data} key={index} index={index} />
          ))}
        </div>

        <p className="coming-soon" data-aos="fade-up">
          <span className="pulse-dot"></span>
          Stay tuned! More projects coming soon
        </p>
      </div>
    </section>
  )
}

function Card({ data: { text, img, url }, index }) {
  return (
    <div 
      className="portfolio-card" 
      onClick={() => window.open(url, '_blank')}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="card-image">
        <img src={img} alt={text} />
        <div className="card-overlay">
          <i className="fa fa-external-link"></i>
        </div>
      </div>
      <div className="card-content">
        <h3>{text}</h3>
      </div>
    </div>
  )
}

export default Portfolio