import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
    return (
        <section className="quote-grid-section">
            <div className="dot-background"></div>
            <div className="section-container">
                <div className="quote-image-layout">
                    <motion.div
                        className="quote-main-box"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="quote-content-text">
                            “Consistently demonstrated exceptional technical prowess and an innate ability to find ingenious solutions to complex problems”
                        </p>
                    </motion.div>

                    <motion.div
                        className="quote-author-signature"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="signature-content">
                            <span className="name-segment">- Michael Williams</span>
                            <div className="role-segment">
                                <span>Head of Product</span>
                                <svg className="in-stroke" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Quote;
