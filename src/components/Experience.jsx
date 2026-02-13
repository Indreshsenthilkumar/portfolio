import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../data/ContentContext';

const Experience = () => {
    const { content } = useContent();
    const { experience } = content;

    const experienceIcons = {
        1: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        2: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
        default: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        )
    };

    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Experience</h2>
                </motion.div>

                <div className="timeline-container">
                    <motion.div
                        className="timeline-progress-line"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="experience-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <motion.div
                                className="timeline-node"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.5 + index * 0.2 }}
                                viewport={{ once: true }}
                            />

                            <motion.div
                                className="experience-card"
                                whileHover={{
                                    x: 10,
                                    scale: 1.02,
                                    boxShadow: "0 30px 70px rgba(166, 106, 59, 0.15)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="exp-top-accent"></div>
                                <div className="exp-inner">
                                    <div className="exp-header">
                                        <div className="exp-company-group">
                                            <motion.div
                                                className="exp-icon-box"
                                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {experienceIcons[exp.id] || experienceIcons.default}
                                            </motion.div>
                                            <div>
                                                <h3 className="exp-company">{exp.company}</h3>
                                                <p className="exp-role">{exp.role}</p>
                                            </div>
                                        </div>
                                        <motion.span
                                            className="exp-period"
                                            whileHover={{ backgroundColor: "var(--poster-brown)", color: "#fff" }}
                                        >
                                            {exp.period}
                                        </motion.span>
                                    </div>

                                    <motion.ul
                                        className="exp-points"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={{
                                            visible: {
                                                transition: { staggerChildren: 0.15, delayChildren: 0.4 }
                                            }
                                        }}
                                    >
                                        {exp.points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                variants={{
                                                    hidden: { opacity: 0, x: -20 },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                            >
                                                {point}
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    <motion.div
                                        className="exp-impact"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(166, 106, 59, 0.06)" }}
                                    >
                                        <strong>Impact:</strong> {exp.impact}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
