import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const focusAreas = [
        "Software Engineering",
        "Product Systems Thinking",
        "Human-Computer Interaction"
    ];

    return (
        <section id="education" className="education-section">
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Education</h2>
                </motion.div>

                <div className="education-grid">
                    <motion.div
                        className="education-card"
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        whileHover="hover"
                    >
                        {/* Animated Background Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="edu-particle"
                                animate={{
                                    x: [0, Math.random() * 40 - 20, 0],
                                    y: [0, Math.random() * 40 - 20, 0],
                                    opacity: [0.1, 0.3, 0.1]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}

                        <div className="edu-accent"></div>
                        <div className="edu-content">
                            <motion.div
                                className="edu-main-info"
                                variants={{
                                    hover: { x: 10 }
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <motion.div
                                    className="edu-icon-wrapper"
                                    variants={{
                                        hover: {
                                            rotate: [0, -10, 370, 360],
                                            scale: 1.2,
                                            boxShadow: "0 0 30px rgba(166, 106, 59, 0.3)",
                                            transition: { duration: 0.8, ease: "backOut" }
                                        }
                                    }}
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                    <motion.div
                                        className="icon-glow"
                                        variants={{
                                            hover: { opacity: 0.6, scale: 1.5 }
                                        }}
                                        initial={{ opacity: 0 }}
                                    />
                                </motion.div>
                                <div className="edu-text-group">
                                    <motion.h3
                                        className="degree-title"
                                        variants={{
                                            hover: { scale: 1.02, color: "var(--poster-brown)" }
                                        }}
                                    >
                                        B.Tech – Information Technology
                                    </motion.h3>
                                    <motion.p
                                        className="institution-name"
                                        variants={{ hover: { opacity: 1 } }}
                                        initial={{ opacity: 0.8 }}
                                    >
                                        Bannari Amman Institute of Technology
                                    </motion.p>
                                    <motion.span
                                        className="edu-duration"
                                        whileHover={{
                                            scale: 1.15,
                                            backgroundColor: "var(--poster-brown)",
                                            color: "#fff",
                                            boxShadow: "0 5px 15px rgba(166, 106, 59, 0.2)"
                                        }}
                                    >
                                        2024 – 2028
                                    </motion.span>
                                </div>
                            </motion.div>

                            <div className="focus-areas-section">
                                <motion.h4
                                    className="focus-title"
                                    variants={{ hover: { letterSpacing: "4px", opacity: 1 } }}
                                >
                                    Relevant Focus Areas
                                </motion.h4>
                                <motion.div
                                    className="focus-tags"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: {
                                            transition: { staggerChildren: 0.15, delayChildren: 0.4 }
                                        }
                                    }}
                                >
                                    {focusAreas.map((area, index) => (
                                        <motion.span
                                            key={index}
                                            className="focus-tag"
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.5, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    y: 0,
                                                    transition: { type: "spring", stiffness: 200 }
                                                }
                                            }}
                                            whileHover={{
                                                scale: 1.2,
                                                y: -8,
                                                backgroundColor: "var(--poster-brown)",
                                                color: "#fff",
                                                boxShadow: "0 10px 25px rgba(166, 106, 59, 0.25)",
                                                transition: { type: "spring", stiffness: 500, damping: 15 }
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <motion.span
                                                animate={{ x: [0, 2, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                style={{ display: 'inline-block', marginRight: '8px' }}
                                            >
                                                ✨
                                            </motion.span>
                                            {area}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
