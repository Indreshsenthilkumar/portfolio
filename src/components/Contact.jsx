import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const opportunities = [
        "Product Manager Intern Roles",
        "APM Programs",
        "SaaS & Startup Collaborations",
        "Product Strategy Projects"
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <motion.div
                    className="contact-grid"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Left Column: Contact Info & Opportunities */}
                    <div className="contact-info">
                        <motion.h2
                            className="contact-title"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Let's Build Something <br /><span>Extraordinary</span>
                        </motion.h2>

                        <div className="contact-links">
                            <motion.a
                                href="mailto:indreshsenthilkumar@gmail.com"
                                className="contact-link-item"
                                whileHover={{ x: 10, color: "var(--poster-brown)" }}
                            >
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="link-label">Email</p>
                                    <p className="link-value">indreshsenthilkumar@gmail.com</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/indreshsenthilkumar"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link-item"
                                whileHover={{ x: 10, color: "var(--poster-brown)" }}
                            >
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="link-label">LinkedIn</p>
                                    <p className="link-value">linkedin.com/in/indreshsenthilkumar</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="#"
                                className="contact-link-item"
                                whileHover={{ x: 10, color: "var(--poster-brown)" }}
                            >
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="link-label">Portfolio</p>
                                    <p className="link-value">yourdomain.com</p>
                                </div>
                            </motion.a>
                        </div>

                        <div className="opportunities-box">
                            <h3 className="opp-title">Open to:</h3>
                            <div className="opp-list">
                                {opportunities.map((opp, index) => (
                                    <motion.div
                                        key={index}
                                        className="opp-item"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, x: 5 }}
                                    >
                                        <span className="opp-dot"></span>
                                        {opp}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        className="contact-form-card"
                        whileHover={{ y: -5 }}
                    >
                        <div className="form-inner">
                            <h3 className="form-subtitle">Send a Message</h3>
                            <form className="main-contact-form">
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Name</label>
                                        <input type="text" placeholder="John Doe" />
                                    </div>
                                    <div className="input-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Message</label>
                                    <textarea placeholder="How can I help you?"></textarea>
                                </div>
                                <motion.button
                                    className="submit-btn"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Dual-Block Footer from Reference */}
                <div className="footer-blocks">
                    {/* Left Block: Resume Download */}
                    <motion.div
                        className="footer-card resume-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="footer-card-content">
                            <h2 className="footer-card-title">Unlock Potential: <br />Download Resume</h2>
                            <p className="footer-card-text">
                                Get a detailed view of my professional journey, academic background, and technical expertise in a single PDF.
                            </p>
                            <motion.a
                                href="#"
                                className="download-footer-btn"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Block: Main Footer Navigation */}
                    <motion.div
                        className="footer-card info-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-card-grid">
                            <div className="info-main">
                                <div className="footer-logo">INDRESH S.</div>
                                <div className="info-contact-group">
                                    <p className="info-link">1 (844) 740-2144 | toll-free</p>
                                    <p className="info-link">indreshsenthilkumar@gmail.com</p>
                                </div>
                                <div className="info-socials">
                                    <div className="social-circle">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                    </div>
                                    <div className="social-circle">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                    </div>
                                    <div className="social-circle">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                    </div>
                                    <div className="social-circle">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.49-6.05 6.33-12.67 8.21m9.7 7.71c-2.43-3.05-3.32-4.14-11.23-5.02" /></svg>
                                    </div>
                                    <div className="social-circle">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="info-links-grid">
                                <div className="link-col">
                                    <a href="#about">About us</a>
                                    <a href="#projects">Projects</a>
                                    <a href="#contact">Contacts</a>
                                </div>
                                <div className="link-col">
                                    <a href="#experience">Careers</a>
                                    <a href="#education">Blog</a>
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                        </div>

                        <div className="info-disclaimer">
                            <div className="disclaimer-icon">!</div>
                            <p>
                                If you are looking for urgent product collaboration or time-sensitive inquiries, please reach out via LinkedIn for a faster response. I am typically active between 9am - 9pm IST.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
