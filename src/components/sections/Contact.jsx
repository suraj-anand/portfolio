import React, { useState } from 'react'
import {
    FaPaperPlane,
    FaCopy,
    FaCheck,
    FaExternalLinkAlt,
} from 'react-icons/fa'
import { CONTACT_CHANNELS, SOCIAL_LINKS } from 'data/contactData'


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [copiedEmail, setCopiedEmail] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCopyEmail = (e) => {
        e.preventDefault()
        e.stopPropagation()
        navigator.clipboard.writeText('suraj02anand@gmail.com')
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2200)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate smooth async submission without blocking window.alert
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
            setTimeout(() => setSubmitted(false), 6000)
        }, 800)
    }

    const iframeMapUrl =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.143614342114!2d80.25446801523186!3d13.090083315808135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e73ca52363%3A0xa1a2b001199452e3!2sPerumalpet%2C%20Purasaiwakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1665051449489!5m2!1sen!2sin'

    return (
        <section id="contact" className="contact-section">
            <div className="contact-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container">
                {/* Modern Section Header */}
                <div className="section-header">
                    <span className="section-eyebrow mono">// GET IN TOUCH</span>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-modern-grid">
                    {/* Left Column: Direct Communication Channels & Status */}
                    <div className="contact-left-col">
                        {/* Direct Channel Cards */}
                        <div className="contact-channels-list">
                            {CONTACT_CHANNELS.map((channel) => {
                                const ChannelIcon = channel.icon
                                const isEmail = channel.id === 'email'
                                return (
                                    <div
                                        key={channel.id}
                                        className="contact-channel-card"
                                        onClick={() => {
                                            if (channel.link.startsWith('http')) {
                                                window.open(channel.link, '_blank', 'noopener,noreferrer')
                                            } else {
                                                window.location.href = channel.link
                                            }
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                window.location.href = channel.link
                                            }
                                        }}
                                    >
                                        <div
                                            className="channel-icon-box"
                                            style={{ '--channel-color': channel.color }}
                                        >
                                            <ChannelIcon />
                                        </div>

                                        <div className="channel-info">
                                            <span className="channel-label mono">{channel.label}</span>
                                            <span className="channel-value">{channel.value}</span>
                                        </div>

                                        {isEmail ? (
                                            <button
                                                type="button"
                                                onClick={handleCopyEmail}
                                                className={`channel-copy-btn ${copiedEmail ? 'copied' : ''}`}
                                                title="Copy Email Address"
                                                aria-label="Copy Email Address"
                                            >
                                                {copiedEmail ? <FaCheck /> : <FaCopy />}
                                                <span className="copy-tooltip mono">
                                                    {copiedEmail ? 'Copied!' : 'Copy'}
                                                </span>
                                            </button>
                                        ) : (
                                            <div className="channel-arrow">
                                                <FaExternalLinkAlt />
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Social & Professional Links Strip */}
                        <div className="contact-socials-card">
                            <span className="socials-label mono">// PROFESSIONAL PROFILES</span>
                            <div className="socials-buttons-row">
                                {SOCIAL_LINKS.map((soc, idx) => {
                                    const SocIcon = soc.icon
                                    return (
                                        <a
                                            key={idx}
                                            href={soc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-social-btn"
                                        >
                                            <SocIcon className="soc-icon" style={{ color: soc.color }} />
                                            <span>{soc.label}</span>
                                            <FaExternalLinkAlt className="soc-arrow" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Dark Futuristic Map Widget */}
                        <div className="contact-map-card">
                            <div className="map-card-header">
                                <span className="mono map-label">LOCATION COORDINATES</span>
                                <a
                                    href="https://maps.app.goo.gl/7JL35dnza8Pna2ZR6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-open-link mono"
                                >
                                    Google Maps ↗
                                </a>
                            </div>
                            <div className="map-viewport">
                                <iframe
                                    src={iframeMapUrl}
                                    title="Suraj Location Map"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="map-iframe"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Transmission Form */}
                    <div className="contact-right-col">
                        <div className="contact-form-card">
                            <div className="form-card-header">
                                <div className="terminal-dots">
                                    <span className="dot dot-red"></span>
                                    <span className="dot dot-yellow"></span>
                                    <span className="dot dot-green"></span>
                                </div>
                            </div>

                            <div className="form-intro">
                                <h3 className="form-heading">Send a Direct Message</h3>
                                <p className="form-sub">
                                    Have an opportunity, or project to collobate ? Drop a note below.
                                </p>
                            </div>

                            {submitted && (
                                <div className="submission-success-banner" role="status">
                                    <FaCheck className="success-icon" />
                                    <div>
                                        <strong>Message dispatched successfully!</strong>
                                        <p>Thank you for reaching out. I'll review and reply shortly.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-modern-form">
                                <div className="form-row-2col">
                                    <div className="form-field">
                                        <label htmlFor="contact-name" className="field-label mono">
                                            NAME <span className="req-star">*</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            autoComplete="name"
                                            className="field-input"
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="contact-email" className="field-label mono">
                                            EMAIL <span className="req-star">*</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required
                                            autoComplete="email"
                                            className="field-input"
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="contact-subject" className="field-label mono">
                                        SUBJECT / TOPIC
                                    </label>
                                    <input
                                        id="contact-subject"
                                        name="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Engineering Role / Project Architecture / Collaboration"
                                        autoComplete="off"
                                        className="field-input"
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="contact-message" className="field-label mono">
                                        MESSAGE <span className="req-star">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Details of your inquiry, role requirements, or collaboration scope..."
                                        rows={6}
                                        required
                                        className="field-textarea"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="contact-submit-btn"
                                >
                                    <FaPaperPlane className={`submit-icon ${isSubmitting ? 'flying' : ''}`} />
                                    <span>{isSubmitting ? 'Dispatching Message...' : 'Transmit Message'}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact