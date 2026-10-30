import React from 'react'
import selfImg from 'assets/images/self-02.jpg'
import { RESUME_PDF_HYPERLINK } from 'data/portfolioData'
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaBriefcase,
} from 'react-icons/fa'
import {
  IMPACT_METRICS,
  CORE_PILLARS,
  CREDENTIALS,
} from 'data/aboutData'


function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        {/* Modern Section Header */}
        <div className="section-header">
          <span className="section-eyebrow mono">// ABOUT ME</span>
          <div className="title-underline"></div>
        </div>

        {/* Main 2-Column Bento Grid */}
        <div className="about-modern-grid">
          {/* Left Column: Personal Card & Narrative Bio */}
          <div className="about-left-col">
            {/* Profile Header Card */}
            <div className="profile-badge-card">
              <div className="profile-image-container">
                <img
                  src={selfImg}
                  alt="Suraj Anand"
                  className="profile-photo"
                  loading="lazy"
                />
              </div>

              <div className="profile-badge-info">
                <h3 className="profile-name">Suraj Anand</h3>
                <p className="profile-role mono">Software Engineer</p>

                <div className="profile-meta-list">
                  <div className="profile-meta-item">
                    <FaBriefcase className="meta-icon" />
                    <span>AI & Data Systems Engineer </span>
                  </div>
                  <div className="profile-meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Narrative */}
            <div className="about-narrative-card">
              <p className="narrative-body">
                I am a Software Engineer with <span className="highlight-text">4+ years of industry experience</span> designing and deploying cloud-native architectures, distributed backend APIs, and automated operational pipelines.
              </p>

              <p className="narrative-body">
                I develop Python backend services that interface with industrial hardware to stream telemetry across <span >MQTT</span>, <span >Serial</span>, and <span >Modbus</span>, synchronizing machine states with <span >SAP MES</span> to build a comprehensive Digital Twin platform with <span >LLM-driven</span> machine intelligence.
              </p>

              <p className="narrative-body">
                Previously at <strong>Amazon</strong>, I developed internal automation services and diagnostic workflows for catalog platforms handling <strong>~10M monthly active users</strong>. Through CloudWatch deep-dives and root-cause fixes, I reduced recurring high-priority incidents by <strong>~80%</strong> and automated <strong>~60%</strong> of manual resolution overhead (recognized with <em>Rising Star</em>, <em>Extra Miler</em>, and <em>CSO Hackathon Winner</em> awards).
              </p>

              {/* Action CTA Buttons */}
              <div className="about-actions-row">
                <a
                  href={RESUME_PDF_HYPERLINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="about-btn-primary"
                >
                  <FaDownload className="btn-icon" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/suraj-anand-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-btn-ghost"
                >
                  <FaLinkedin className="btn-icon linkedin" />
                  <span>LinkedIn</span>
                  <FaExternalLinkAlt className="external-arrow" />
                </a>

                <a
                  href="https://github.com/suraj-anand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-btn-ghost"
                >
                  <FaGithub className="btn-icon" />
                  <span>GitHub</span>
                  <FaExternalLinkAlt className="external-arrow" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Impact Stats & Core Pillars */}
          <div className="about-right-col">
            {/* 4 Impact Stat Cards */}
            <div className="metrics-grid">
              {IMPACT_METRICS.map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <div className="metric-value mono">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-sub">{metric.sub}</div>
                </div>
              ))}
            </div>

            {/* Core Pillars Grid */}
            <div className="pillars-container">
              <h4 className="pillars-heading mono">// CORE CAPABILITIES & FOCUS</h4>
              <div className="pillars-grid">
                {CORE_PILLARS.map((pillar, idx) => {
                  const IconComponent = pillar.icon
                  return (
                    <div key={idx} className="pillar-card">
                      <div className="pillar-header">
                        <div className="pillar-icon-wrapper">
                          <IconComponent className="pillar-icon" />
                        </div>
                        <h5 className="pillar-title">{pillar.title}</h5>
                      </div>
                      <p className="pillar-desc">{pillar.desc}</p>
                      <div className="pillar-tags">
                        {pillar.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="pillar-tag mono">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Education & Certifications Strip */}
            <div className="credentials-card">
              <h4 className="credentials-heading mono">// EDUCATION & CERTIFICATIONS</h4>
              <div className="credentials-list">
                {CREDENTIALS.map((item, idx) => {
                  const CredIcon = item.icon
                  return (
                    <div key={idx} className="credential-item">
                      <div className="credential-icon-box">
                        <CredIcon />
                      </div>
                      <div className="credential-details">
                        <div className="credential-title">{item.title}</div>
                        <div className="credential-sub mono">{item.institution}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About