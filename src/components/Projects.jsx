import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: 1,
            category: "PRODUCT MANAGEMENT",
            title: "Unified Campus Experience Platform",
            role: "Product Lead (Case Study)",
            problem: "Students waste 25–30 minutes daily navigating fragmented academic portals.",
            solution: "Designed a centralized dashboard integrating SSO, Unified Notifications, and a Central Task Timeline.",
            skills: ["Problem Framing", "MVP Prioritization", "KPI Definition", "UX Wireframing"],
            impact: "Goal: Reduce daily navigation time by 60–65%.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            id: 2,
            category: "SaaS OPTIMIZATION",
            title: "Experience Optimization (DesignSeries BIT)",
            role: "Product Strategist",
            problem: "Low user retention due to friction in end-to-end user journeys.",
            solution: "Refined end-to-end user journeys and platform usability through API-driven feature integration.",
            skills: ["Product Analytics", "UX Insights", "Journey Mapping", "Peformance Optimization"],
            impact: "Goal: Improve customer engagement and retention quality.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            )
        },
        {
            id: 3,
            category: "UI/UX RESEARCH",
            title: "Research & Prototyping (TechnoHacks)",
            role: "UX Researcher",
            problem: "User friction in existing interfaces leading to task inefficiency.",
            solution: "Conducted interviews & surveys to build high-fidelity wireframes based on UX heuristics.",
            skills: ["User Discovery", "Wireframing", "Usability Testing", "Accessibility"],
            impact: "Goal: Reduce friction and improve task efficiency.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            )
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{
                                y: -15,
                                scale: 1.05,
                                transition: { duration: 0.4, ease: "backOut" }
                            }}
                            whileTap={{ scale: 0.98 }}
                            onHoverStart={() => { }} /* Triggers variants in children */
                        >
                            <div className="card-top-accent"></div>
                            <div className="card-inner">
                                <div className="project-header">
                                    <span className="project-category">{project.category}</span>
                                    <motion.div
                                        className="project-floating-icon"
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 360 }}
                                        whileTap={{ scale: 0.8, rotate: -90 }}
                                        transition={{
                                            rotate: { duration: 1, ease: "easeInOut" },
                                            scale: { duration: 0.2 }
                                        }}
                                    >
                                        {project.icon}
                                    </motion.div>
                                </div>
                                <motion.h3
                                    className="project-title"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1, x: 5 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="project-description">{project.problem}</p>

                                <div className="skills-tag-container">
                                    {project.skills.map((skill, si) => (
                                        <motion.span
                                            key={si}
                                            className="skill-pill"
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(166, 106, 59, 0.2)" }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="card-actions">
                                    <motion.button
                                        className="project-btn main-btn"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Full Project
                                        <motion.svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            whileHover={{ x: 3, y: -3 }}
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </motion.svg>
                                    </motion.button>
                                    <motion.button
                                        className="project-btn github-btn"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        title="View Source on GitHub"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
