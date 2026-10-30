import portfolio from 'assets/images/portfolio/portfolio.jpg'
import student_portal from 'assets/images/portfolio/student_portal.jpg'
import blogpodium from 'assets/images/portfolio/blogpodium.png'
import expense_tracker from 'assets/images/portfolio/expense_tracker.png'

export const RESUME_PDF_HYPERLINK = "https://docs.google.com/document/d/1l2XmHpy8GHvv_S4y_agq5gUPmOivLu0rVwbesi55TzU/export?format=pdf";

export const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Blog Podium",
        text: "Blog Podium",
        type: "Full-Stack WebApp",
        description: "Full-featured blogging and podcast publishing platform with secure session authentication, markdown drafting, categorized feeds, and REST endpoints.",
        tags: ["Django", "React", "SQLite", "REST APIs"],
        img: blogpodium,
        githubUrl: "https://github.com/suraj-anand/BlogPodium/",
        liveUrl: null,
        url: "https://github.com/suraj-anand/BlogPodium/"
    },
    {
        id: 2,
        title: "Expense Tracker",
        text: "Expense Tracker",
        type: "FinTech & Analytics",
        description: "Personal finance and expenditure management application featuring dynamic budget tracking, visual categorization, and local state persistence.",
        tags: ["React", "Django", "SQLite", "REST APIs"],
        img: expense_tracker,
        githubUrl: "https://github.com/suraj-anand/expense-tracker/",
        liveUrl: null,
        url: "https://github.com/suraj-anand/expense-tracker/"
    },
    {
        id: 3,
        title: "Student Portal",
        text: "Student Portal",
        type: "Academic Platform",
        description: "Comprehensive institutional portal managing student academic profiles, dynamic course enrollments, grade tracking, and administrative workflows.",
        tags: ["ExpressJS", "NodeJS", "EJS", "HTML", "CSS", "MongoDB"],
        img: student_portal,
        githubUrl: "https://github.com/suraj-anand/student-portal/",
        liveUrl: null,
        url: "https://github.com/suraj-anand/student-portal/"
    },
    {
        id: 4,
        title: "Personal Portfolio",
        text: "Portfolio",
        type: "Systems Showcase",
        description: "High-performance engineering portfolio built with Vite, React, and modular glassmorphic design system featuring 60fps animations and responsive architecture.",
        tags: ["React", "Vite", "AOS", "Glassmorphism"],
        img: portfolio,
        githubUrl: "https://github.com/suraj-anand/portfolio",
        liveUrl: "https://suraj-anand.github.io/portfolio/",
        url: "https://suraj-anand.github.io/portfolio/"
    },
]
