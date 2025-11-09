import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import '../assets/styles/Timeline.scss'

function Experience() {
    return (
        <div>
            <div id="experience" className="container text-white">
                <div className="items-container my-5">
                    <div className="my-4">
                        <p data-aos="fade-right" className='fw-bold fs-3 text-center mb-0'>Experience</p>
                        <div className='my-0 h-line-1'></div>
                    </div>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            dateClassName="text-white fw-bold"
                            className="vertical-timeline-element--work"
                            contentStyle={{ color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid white' }}
                            date="2024 - present"
                            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)', display: "flex", alignItems: "center", justifyContent: "center" }}
                            icon={<i className="fa fa-amazon fa-lg text-white fs-3" />}
                        >
                            <h3 className="vertical-timeline-element-subtitle">Amazon</h3>
                            <h5 className="vertical-timeline-element-title">Application Engineer II</h5>
                            
                            <ul className="my-3">
                                <li>
                                    Collaborated with cross-functional teams to provide technical support and resolve <b>100+ catalog-related issues per month</b>, achieving <b>~80% reduction</b> in recurring high-priority production incidents
                                </li>

                                <li>
                                    <b>Integrated AI/ML-based services</b> and <b>AWS services</b>
                                    into internal tools and workflows to improve operational efficiency and reducing manual resolution time
                                    by <b>~60%</b>
                                </li>
                                <li>
                                    <b>Performed deep-dive log analysis</b>
                                    using <b>AWS CloudWatch, Host Logs and metrics</b>,
                                    identifying and mitigating root causes of recurring issues.
                                </li>
                                <li>
                                    <b>Achievements</b>:
                                    <em>Rising Star Award, CSO-2025 Hackathon Winner</em>
                                </li>
                            </ul>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            dateClassName="fw-bold text-white"
                            className="vertical-timeline-element--work"
                            contentStyle={{ color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid white' }}
                            date="2022 - 2024"
                            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)', display: "flex", alignItems: "center", justifyContent: "center" }}
                            icon={<i className="fa fa-computer fa-lg text-white fs-3" />}
                        >
                            <h3 className="vertical-timeline-element-subtitle">LTIMindtree</h3>
                            <h5 className="vertical-timeline-element-title">Software Engineer</h5>
                            <ul className="my-3">
                                <li>
                                    <b>Designed and developed user-friendly web applications</b>
                                    using <b>React and Django</b>, improving
                                    client engagement and overall customer satisfaction
                                </li>

                                <li>
                                    <b>Built Slack bots</b> to automatically
                                    notify teams of <b>high-priority data-related incidents</b>, enabling
                                    faster response times and improving issue visibility by ~85%
                                </li>
                                <li>
                                    <b>Collaborated cross-functionally</b> to identify <b>performance bottlenecks</b> and implement long-term
                                    fixes, improving the system
                                </li>
                                <li>
                                    <b>Achievements</b>: <em>Rising Star Award, Hi-Fi Award.</em>
                                </li>
                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
}

export default Experience;