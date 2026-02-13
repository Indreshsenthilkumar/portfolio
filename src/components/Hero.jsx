import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../data/ContentContext';
import heroImg from '../assets/hero.png';


const Hero = () => {
  const { content } = useContent();
  const { hero } = content;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % hero.words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hero.words.length]);

  return (
    <div className="hero-section-wrapper">
      <div className="poster-canvas">
        {/* 1. Background Big Text (Dynamic Cycle) */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={hero.words[index]}
            className="poster-background-title"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: 20 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            {hero.words[index]}
          </motion.h1>
        </AnimatePresence>

        {/* 2. Centered Subject */}
        <div className="poster-subject-wrapper">
          <img
            src={heroImg}
            alt="Indresh Senthilkumar"
            className="poster-subject-img"
          />
        </div>

        {/* Gradient Overlay for bottom blend */}
        <div className="poster-gradient-overlay"></div>

        {/* 3. Enhanced Metadata Layers */}

        {/* Top Left: Date & Status */}
        <div className="corner-label label-top-left">
          <div className="header-date">
            {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
          </div>
          <div className="header-meta">
            <div className="status-indicator">
              <span className="status-dot"></span>
              AVAILABILITY: {hero.availability}
            </div>
            <p>{hero.location}</p>
          </div>
        </div>

        {/* Top Right: Brand Context */}
        <div className="corner-label label-top-right">
          <div className="religious-label">PRODUCT PORTFOLIO v2.0</div>
          <div className="header-meta">
            <p>© {new Date().getFullYear()} INTERNAL ARCHIVE</p>
            <p>AUTHORIZED ACCESS ONLY</p>
          </div>
        </div>

        {/* Bottom Left: Expertise Context */}
        <div className="corner-label label-bottom-left">
          <div className="edu-title">{hero.role}</div>
          <div className="edu-subtitle">{hero.subtitle}</div>
        </div>

        {/* Bottom Right: Branding & Coordinates */}
        <div className="corner-label label-bottom-right">
          <div className="name-primary">INDRESH</div>
          <div className="name-secondary">SENTHILKUMAR</div>
          <div className="geo-coords">{hero.coordinates}</div>
        </div>

        {/* 4. Floating 'Active' Meta Tags (Scattered) */}
        <motion.div
          className="floating-meta-tag tag-1"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="tag-label">CORE.METRIC</span>
          <span className="tag-value">99% DELIVERY RATE</span>
        </motion.div>

        <motion.div
          className="floating-meta-tag tag-2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <span className="tag-label">XP.LEVEL</span>
          <span className="tag-value">SNR PRODUCT MANAGER</span>
        </motion.div>

        {/* Center Bottom: Mission Statement Marquee */}
        <div className="hero-mission-statement">
          <p>{hero.mission}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
