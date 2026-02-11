import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Product & Strategy",
            skills: ["Market Research", "Product Roadmap", "MVP Scoping", "Product Analytics", "Agile Methodologies", "SDLC"],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
            )
        },
        {
            title: "Design & Research",
            skills: ["UI/UX Design", "Wireframing", "User Research", "Usability Testing", "Figma", "Design Thinking"],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                </svg>
            )
        },
        {
            title: "Technical Development",
            skills: ["HTML/CSS", "JavaScript", "Python", "React", "Next.js", "C", "SQL"],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            title: "Tools & Leadership",
            skills: ["Notion", "Git", "Excel", "Team Management", "Leadership", "PRD Writing"],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My Skills</h2>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-category-card"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                boxShadow: "0 25px 50px rgba(166, 106, 59, 0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="category-header">
                                <motion.div
                                    className="cat-icon"
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [0, 8, -8, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {category.icon}
                                </motion.div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-pills">
                                {category.skills.map((skill, si) => (
                                    <motion.span
                                        key={si}
                                        className="skill-bubble"
                                        whileHover={{
                                            scale: 1.2,
                                            y: -5,
                                            backgroundColor: "var(--poster-brown)",
                                            color: "#fff",
                                            boxShadow: "0 8px 15px rgba(166, 106, 59, 0.3)",
                                            transition: { type: "spring", stiffness: 400, damping: 10 }
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
