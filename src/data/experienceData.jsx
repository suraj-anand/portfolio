import React from 'react'
import tvsnextLogo from 'assets/images/logo/tvsnext-logo.png'
import ltimindtreeLogo from 'assets/images/logo/ltimindtree-logo.svg'
import {
    FaAmazon,
    FaTrophy,
    FaStar,
    FaAward,
} from 'react-icons/fa'

export const EXPERIENCE_DATA = [
    {
        id: 'tvsnext',
        company: 'TVSNext',
        role: 'AI & Data Systems Engineer',
        period: 'Jun 2026 - Present',
        location: 'Chennai, India',
        status: 'Active',
        logoType: 'image',
        logoSrc: tvsnextLogo,
        accentColor: '#38bdf8',
        bullets: [
            <>
                Architect and deploy high-throughput <strong className="highlight-text">Python microservices</strong> interfacing directly with industrial hardware to capture continuous telemetry across <strong className="highlight-text">MQTT, Serial, and Modbus</strong> protocols.
            </>,
            <>
                Synchronize machine state events with <strong className="highlight-text">SAP MES</strong> to feed the real-time <strong className="highlight-text">Digital Twin</strong> enterprise platform.
            </>,
            <>
                Engineer <strong className="highlight-text">React analytical interfaces</strong> synthesizing live streaming telemetry with historical datasets, employing <strong className="highlight-text">LLMs</strong> for <strong className="highlight-text">predictive machine health insights</strong> and anomaly diagnostics.
            </>,
            <>
                Containerize distributed services with <strong className="highlight-text">Docker</strong>, deploying to managed <strong className="highlight-text">Kubernetes</strong> clusters via <strong className="highlight-text">Rancher</strong> and <strong className="highlight-text">Jenkins CI/CD</strong> pipelines.
            </>,
        ],
        technologies: [
            'Python',
            'FastAPI',
            'MQTT',
            'Modbus',
            'SAP MES',
            'Digital Twin',
            'LLMs',
            'React',
            'Docker',
            'Kubernetes',
            'Rancher',
            'Jenkins',
        ],
        awards: [],
    },
    {
        id: 'amazon',
        company: 'Amazon',
        role: 'Application Engineer II',
        period: 'Apr 2024 - May 2026',
        location: 'Chennai, India',
        status: 'Completed',
        logoType: 'icon',
        logoIcon: FaAmazon,
        accentColor: '#f59e0b',
        bullets: [
            <>
                Collaborated across cross-functional engineering teams to manage high-velocity catalog operations handling <strong className="highlight-text">10M+ monthly active users</strong>, resolving <strong className="highlight-text">100+ complex catalog incidents</strong> monthly.
            </>,
            <>
                Conducted deep-dive root cause investigations across <strong className="highlight-text">AWS CloudWatch</strong> telemetry, host logs, and system metrics—achieving an <strong className="highlight-text">~80% permanent drop</strong> in recurring high-severity incidents.
            </>,
            <>
                Integrated <strong className="highlight-text">AWS AI/ML services</strong> into internal diagnosis workflows and automated runbooks, eliminating <strong className="highlight-text">~60% of manual resolution overhead</strong>.
            </>,
            <>
                Engineered <strong className="highlight-text">automated validation tools</strong> that prevented bad catalog data ingestion before impacting customer-facing storefronts.
            </>,
        ],
        technologies: [
            'AWS',
            'CloudWatch',
            'Python',
            'Service Migrations',
            'Lambda',
            'Distributed Systems',
            'Incident Automation',
            'RCA',
        ],
        awards: [
            { title: 'CSO-2025 Hackathon Winner', icon: FaTrophy },
            { title: 'Extra Miler Award', icon: FaStar },
            { title: 'Rising Star Award', icon: FaStar },
        ],
    },
    {
        id: 'ltimindtree',
        company: 'LTIMindtree',
        role: 'Software Engineer',
        period: 'Jul 2022 - Apr 2024',
        location: 'Chennai, India',
        status: 'Completed',
        logoType: 'image',
        logoSrc: ltimindtreeLogo,
        accentColor: '#ef4444',
        bullets: [
            <>
                Designed and developed full-stack web applications and micro-frontends utilizing <strong className="highlight-text">React and Django REST framework</strong> for <strong className="highlight-text"> enterprise clients</strong>.
            </>,
            <>
                Engineered custom <strong className="highlight-text">Slack event bots</strong> integrated with monitoring queues for real-time priority alerts, speeding up engineering incident acknowledgment by <strong className="highlight-text">~85%</strong>.
            </>,
            <>
                Identified database and API bottlenecks, profiling SQL queries and caching query results to optimize <strong className="highlight-text">endpoint response times</strong>.
            </>,
        ],
        technologies: [
            'React',
            'Django',
            'Python',
            'Jira',
            'PostgreSQL',
            'REST APIs',
            'Webhooks',
            'Git',
            'GCP',
            'QGIS',
        ],
        awards: [
            { title: 'Rising Star Award', icon: FaStar },
            { title: 'Hi-Fi Award', icon: FaAward },
        ],
    },
]
