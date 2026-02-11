import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const approachItems = [
        {
            title: "Product Thinking",
            description: "Problem discovery, user research, prioritization frameworks",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            title: "Business Alignment",
            description: "KPI definition, impact metrics, growth thinking",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                </svg>
            )
        },
        {
            title: "Technical Execution",
            description: "React, Next.js, API integration",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            title: "UX Strategy",
            description: "Journey mapping, usability testing, accessibility",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.5 1.5" />
                    <path d="M7.6 7.6L2 2" />
                </svg>
            )
        },
        {
            title: "Data-Driven Decisions",
            description: "Engagement metrics, retention signals, experimentation mindset",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            )
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="about-name">Indresh Senthilkumar</h3>
                        <h4 className="about-role">Product-Minded Full-Stack Developer</h4>
                        <p className="about-text">
                            I am a B.Tech Information Technology student with hands-on exposure to <strong>Product Management</strong>, <strong>UI/UX Design</strong>, <strong>Customer Experience Strategy</strong>, and <strong>Full-Stack Development</strong>.
                        </p>

                        <div className="approach-list">
                            {approachItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="approach-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{
                                        x: 15,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="approach-icon-wrapper"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                    >
                                        <span className="approach-icon">{item.icon}</span>
                                    </motion.div>
                                    <div className="approach-details">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="approach-hover-indicator"></div>
                                </motion.div>
                            ))}
                        </div>

                        <p className="about-conclusion">
                            I focus on building user-first, scalable, performance-optimized digital solutions aligned with real-world business goals.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="profile-card">
                            <div className="card-avatar">
                                <span>I</span>
                            </div>
                            <h4 className="card-name">Indresh</h4>
                            <p className="card-role">B.Tech IT Student</p>
                            <div className="card-tags">
                                <span>Product</span>
                                <span>UX</span>
                                <span>React</span>
                            </div>
                            <div className="card-stats">
                                <div className="stat-item">
                                    <span className="stat-value">5+</span>
                                    <span className="stat-label">Focus Areas</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-divider"></span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">100%</span>
                                    <span className="stat-label">Impact</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
