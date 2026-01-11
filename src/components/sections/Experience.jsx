import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">Experience</h2>
                    <div className="title-underline"></div>
                </div>

                <VerticalTimeline lineColor="rgba(102, 126, 234, 0.3)">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '15px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                            color: '#fff'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
                        date="2024 - Present"
                        dateClassName="timeline-date"
                        iconStyle={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        icon={<i className="fa fa-amazon" />}
                    >
                        <div className="timeline-content">
                            <h3 className="company-name">Amazon</h3>
                            <h4 className="job-title">Application Engineer II</h4>

                            <ul className="achievements-list">
                                <li>
                                    Collaborated with cross-functional teams to provide technical support and resolve <span className="highlight">100+ catalog issues/month</span>, achieving <span className="highlight">~80% reduction</span> in recurring high-priority incidents
                                </li>
                                <li>
                                    <span className="highlight">Integrated AI/ML services</span> of <span className="highlight">AWS</span> into internal tools and workflows, to improve operational efficiency and reducing manual resolution time by <span className="highlight">~60%</span>
                                </li>
                                <li>
                                    Performed deep-dive log analysis using <span className="highlight">AWS CloudWatch, Host Logs and metrics</span>, identifying and mitigating root causes of recurring issues
                                </li>
                                <li className="awards">
                                    <strong><i className="fa fa-trophy"></i> Achievements:</strong>
                                    <div className="awards-badges">
                                        <span className="award-badge"><i className="fa fa-star"></i> Extra Miler</span>
                                        <span className="award-badge"><i className="fa fa-star"></i> Rising Star</span>
                                        <span className="award-badge"><i className="fa fa-trophy"></i> CSO-2025 Hack-a-thon Winner</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '15px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                            color: '#fff'
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
                        date="2022 - 2024"
                        dateClassName="timeline-date"
                        iconStyle={{
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            boxShadow: '0 0 20px rgba(240, 147, 251, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        icon={<i className="fa fa-laptop-code" />}
                    >
                        <div className="timeline-content">
                            <h3 className="company-name">LTIMindtree</h3>
                            <h4 className="job-title">Software Engineer</h4>

                            <ul className="achievements-list">
                                <li>
                                    <span className="highlight">Designed and developed web applications</span> using <span className="highlight">React and Django</span>, improving client engagement and overall customer satisfaction
                                </li>
                                <li>
                                    <span className="highlight">Built Slack bots</span> for high-priority incident notifications, improving issue visibility by <span className="highlight">~85%</span>
                                </li>
                                <li>
                                    Collaborated cross-functionally to identify <span className="highlight">performance bottlenecks</span> and implement long-term fixes
                                </li>
                                <li className="awards">
                                    <strong><i className="fa fa-trophy"></i> Achievements:</strong>
                                    <div className="awards-badges">
                                        <span className="award-badge"><i className="fa fa-star"></i> Rising Star</span>
                                        <span className="award-badge"><i className="fa fa-award"></i> Hi-Fi Award</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;