import React from 'react'
import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaTrophy,
} from 'react-icons/fa'
import { EXPERIENCE_DATA } from 'data/experienceData'


function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container">
                {/* Modern Section Header */}
                <div className="section-header" data-aos="fade-up">
                    <span className="section-eyebrow mono">// CAREER PATH</span>
                    <h2 className="section-title">Industry Experience</h2>
                    <div className="title-underline"></div>
                </div>

                {/* Modern Timeline Container */}
                <div className="experience-timeline">
                    {EXPERIENCE_DATA.map((item, index) => {
                        const IconComponent = item.logoIcon
                        return (
                            <div
                                key={item.id}
                                className="timeline-block"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Spine Connector & Node Indicator */}
                                <div className="timeline-rail">
                                    {index !== 0 && (
                                        <div className="timeline-rail-line-top"></div>
                                    )}
                                    <div
                                        className="timeline-node"
                                        style={{ '--node-accent': item.accentColor }}
                                    >
                                        <span className="timeline-node-core"></span>
                                    </div>
                                    {index !== EXPERIENCE_DATA.length - 1 && (
                                        <div className="timeline-rail-line-bottom"></div>
                                    )}
                                </div>

                                {/* Experience Glass Capsule Card */}
                                <div className="timeline-card-wrapper">
                                    <div className="experience-glass-card">
                                        {/* Card Header */}
                                        <div className="exp-card-header">
                                            <div className="exp-brand-cluster">
                                                <div className="exp-logo-box">
                                                    {item.logoType === 'image' ? (
                                                        <img
                                                            src={item.logoSrc}
                                                            alt={`${item.company} logo`}
                                                            className={`exp-company-img ${item.id}-logo`}
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <IconComponent className="exp-company-icon" />
                                                    )}
                                                </div>

                                                <div className="exp-title-details">
                                                    <div className="exp-company-row">
                                                        <h3 className="exp-company-name">{item.company}</h3>
                                                    </div>
                                                    <h4 className="exp-role-title">{item.role}</h4>
                                                </div>
                                            </div>

                                            {/* Tenure & Location Capsule */}
                                            <div className="exp-meta-cluster">
                                                <div className="exp-date-pill mono">
                                                    <FaCalendarAlt className="meta-icon" />
                                                    <span>{item.period}</span>
                                                </div>
                                                <div className="exp-location-pill mono">
                                                    <FaMapMarkerAlt className="meta-icon" />
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Achievement Bullets */}
                                        <ul className="exp-bullets-list">
                                            {item.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} className="exp-bullet-item">
                                                    <span className="bullet-indicator">▹</span>
                                                    <span className="bullet-text">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Awards Row (if present) */}
                                        {item.awards.length > 0 && (
                                            <div className="exp-awards-strip">
                                                <div className="exp-awards-label mono">
                                                    <FaTrophy className="awards-lead-icon" />
                                                    <span>HONORS:</span>
                                                </div>
                                                <div className="exp-awards-tags">
                                                    {item.awards.map((award, aIdx) => {
                                                        const AwardIcon = award.icon
                                                        return (
                                                            <div key={aIdx} className="exp-award-pill">
                                                                <AwardIcon className="award-icon" />
                                                                <span>{award.title}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* Tech Stack Tags */}
                                        <div className="exp-tech-footer">
                                            <div className="exp-tags-wrapper">
                                                {item.technologies.map((tech, tIdx) => (
                                                    <span key={tIdx} className="exp-tech-tag mono">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience