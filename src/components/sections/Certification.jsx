import { useState, useRef, useCallback, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CERTIFICATIONS } from 'data/certificationsData'


function Certification() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)

  const scrollToIndex = useCallback((index) => {
    if (!trackRef.current) return
    const targetIndex = (index + CERTIFICATIONS.length) % CERTIFICATIONS.length
    const cardWidth = trackRef.current.clientWidth
    trackRef.current.scrollTo({
      left: targetIndex * cardWidth,
      behavior: 'smooth',
    })
    setActiveIndex(targetIndex)
  }, [])

  const handlePrev = useCallback(() => {
    scrollToIndex(activeIndex - 1)
  }, [activeIndex, scrollToIndex])

  const handleNext = useCallback(() => {
    scrollToIndex(activeIndex + 1)
  }, [activeIndex, scrollToIndex])

  const handleScroll = useCallback(() => {
    if (!trackRef.current) return
    const scrollLeft = trackRef.current.scrollLeft
    const cardWidth = trackRef.current.clientWidth
    if (cardWidth > 0) {
      const newIndex = Math.round(scrollLeft / cardWidth)
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < CERTIFICATIONS.length) {
        setActiveIndex(newIndex)
      }
    }
  }, [activeIndex])

  // Recalculate on window resize to ensure active slide stays aligned
  useEffect(() => {
    const handleResize = () => {
      if (!trackRef.current) return
      const cardWidth = trackRef.current.clientWidth
      trackRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'auto',
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeIndex])

  return (
    <section id="certification" className="certification-section">
      <div className="certification-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        {/* Modern Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow mono">// CREDENTIALS & LICENSES</span>
          <h2 className="section-title">Verified Certifications</h2>
          <div className="title-underline"></div>
        </div>

        {/* Modern Scrollable Carousel */}
        <div className="cert-carousel-wrapper" data-aos="fade-up" data-aos-delay="100">
          {/* Previous Slide Button */}
          <button
            type="button"
            className="cert-nav-btn cert-nav-prev"
            onClick={handlePrev}
            aria-label="Previous Certificate"
          >
            <FaChevronLeft />
          </button>

          {/* Scrollable Carousel Track */}
          <div
            className="cert-carousel-track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {CERTIFICATIONS.map((cert, index) => {
              const IconComp = cert.icon
              return (
                <div key={cert.id} className="cert-slide-item">
                  <div className="cert-slide-card">
                    {/* 1. Cert Provider */}
                    <div className="cert-provider-header">
                      <div className="cert-provider-pill">
                        <IconComp
                          className="provider-icon"
                          style={{ color: cert.accentColor }}
                        />
                        <span className="provider-name mono">{cert.provider}</span>
                      </div>
                      <span className="cert-counter mono">
                        0{index + 1} / 0{CERTIFICATIONS.length}
                      </span>
                    </div>

                    {/* 2. Cert Itself */}
                    <div className="cert-display-stage">
                      {cert.verifyUrl ? (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-verify-link"
                          title={`Verify ${cert.alt} on Microsoft Learn`}
                        >
                          <img
                            src={cert.certImg}
                            alt={cert.alt}
                            className="cert-document-img"
                            loading={index === 0 ? 'eager' : 'lazy'}
                          />
                        </a>
                      ) : (
                        <img
                          src={cert.certImg}
                          alt={cert.alt}
                          className="cert-document-img"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Next Slide Button */}
          <button
            type="button"
            className="cert-nav-btn cert-nav-next"
            onClick={handleNext}
            aria-label="Next Certificate"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="cert-carousel-dots" data-aos="fade-up" data-aos-delay="150">
          {CERTIFICATIONS.map((cert, index) => (
            <button
              key={cert.id}
              type="button"
              className={`cert-dot-btn ${activeIndex === index ? 'is-active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to certificate ${index + 1}: ${cert.provider}`}
            >
              <span className="cert-dot-inner"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification