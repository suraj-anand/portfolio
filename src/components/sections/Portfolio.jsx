import { PORTFOLIO_DATA } from 'data/portfolioData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        {/* Modern Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow mono">// PORTFOLIO </span>
          <h2 className="section-title">Things I've Built</h2>
          <div className="title-underline"></div>
        </div>

        {/* 2-Column Bento Project Grid */}
        <div className="portfolio-modern-grid">
          {PORTFOLIO_DATA.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-glass-card"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Media Preview Box */}
              <div className="project-preview-frame">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-cover-img"
                  loading="lazy"
                />
                <div className="project-preview-overlay"></div>
              </div>

              {/* Project Body */}
              <div className="project-content-block">
                <div className="project-header-row">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-action-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-icon"
                        aria-label={`${project.title} GitHub Repository`}
                        title="View GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-icon"
                        aria-label={`${project.title} Live Demo`}
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Tech Badges */}
                <div className="project-tech-pills">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tech-tag mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio