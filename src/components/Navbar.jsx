import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="admin-nav-link">Admin</Link>
                </div>
            </div>

            <div className="nav-actions">
                <button
                    className="theme-toggle"
                    onClick={() => setIsDark(!isDark)}
                    title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    <div className={`theme-icon-container ${isDark ? 'is-dark' : 'is-light'}`}>
                        <div className="theme-icon sun-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                        </div>
                        <div className="theme-icon moon-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                        </div>
                    </div>
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
