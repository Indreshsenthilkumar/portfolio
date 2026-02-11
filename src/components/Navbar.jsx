import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="nav-logo">INDRESH.</div>

            <div className={`nav-links-wrapper ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-links">
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                    <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                    <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
                    <a href="#blogs" onClick={() => setIsMenuOpen(false)}>Blogs</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
            </div>

            <div className="nav-actions">
                <button
                    className="theme-toggle"
                    onClick={() => setIsDark(!isDark)}
                    title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDark ? '☀️' : '🌙'}
                </button>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
