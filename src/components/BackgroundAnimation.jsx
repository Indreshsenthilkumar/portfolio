import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const BackgroundAnimation = () => {
    const location = useLocation();
    if (location.pathname === '/blogs') return null;
    return (
        <div className="bg-animation-container">
            {/* Soft Floating Orbs */}
            <motion.div
                className="bg-orb orb-1"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="bg-orb orb-2"
                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 100, -60, 0],
                    scale: [1, 0.8, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="bg-orb orb-3"
                animate={{
                    x: [0, 150, -100, 0],
                    y: [0, 80, 150, 0],
                    scale: [1, 1.3, 0.8, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Grain/Noise Overlay */}
            <div className="bg-noise-overlay"></div>
        </div>
    );
};

export default BackgroundAnimation;
