import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [topicFilter, setTopicFilter] = useState('Product Management');
    const [levelFilter, setLevelFilter] = useState('Beginner');

    const blogPosts = [
        {
            id: 1,
            title: "The Future of Product Management in 2026",
            category: "Strategy",
            date: "Feb 12, 2026",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
            description: "Exploring how AI-driven analytics are reshaping the roadmap prioritization process for modern product leaders."
        },
        {
            id: 2,
            title: "Mastering Glassmorphism in Modern UI",
            category: "Design",
            date: "Feb 10, 2026",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
            description: "A deep dive into creating premium frosted glass effects using backdrop-filter and subtle gradients."
        },
        {
            id: 3,
            title: "State Management: Redux vs Context API",
            category: "Technical",
            date: "Feb 08, 2026",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
            description: "Which one should you choose for your next enterprise React application? Evaluating performance and scalability."
        },
        {
            id: 4,
            title: "Effective User Research in Remote Teams",
            category: "Research",
            date: "Feb 05, 2026",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
            description: "Practical strategies for conducting meaningful user interviews and usability tests without being in the same room."
        },
        {
            id: 5,
            title: "Optimizing Web Vitals for SEO Rankings",
            category: "SEO",
            date: "Feb 03, 2026",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            description: "How page speed and layout stability directly impact your search engine visibility and user retention rates."
        },
        {
            id: 6,
            title: "Building Scalable Design Systems",
            category: "Product",
            date: "Jan 30, 2026",
            readTime: "15 min read",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
            description: "Lessons learned from creating a multi-platform design system for a global fintech company."
        },
        {
            id: 7,
            title: "The Rise of No-Code Tools for PMs",
            category: "Tools",
            date: "Jan 28, 2026",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            description: "How to ship MVPs and test hypotheses faster using tools like Framer, Webflow, and Bubble."
        },
        {
            id: 8,
            title: "Psychology of Dark Mode UX",
            category: "Design",
            date: "Jan 25, 2026",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
            description: "Understanding why users prefer dark interfaces and how to design them for accessibility and legibility."
        },
        {
            id: 9,
            title: "Next.js 15: Server Actions Deep Dive",
            category: "Development",
            date: "Jan 22, 2026",
            readTime: "14 min read",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop",
            description: "Exploring the revamped data fetching and mutation patterns in the latest Next.js release."
        },
        {
            id: 10,
            title: "Product Analytics: Beyond the Dashboard",
            category: "Analytics",
            date: "Jan 20, 2026",
            readTime: "11 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            description: "Transforming raw numbers into actionable growth experiments through cohort and funnel analysis."
        },
        {
            id: 11,
            title: "Leading Cross-Functional Agile Teams",
            category: "Leadership",
            date: "Jan 18, 2026",
            readTime: "13 min read",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
            description: "Soft skills and communication frameworks for keeping designers, engineers, and stakeholders aligned."
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        if (activeTab === 'All') return true;
        if (activeTab === 'Engineering') return ['Technical', 'Development', 'SEO'].includes(post.category);
        if (activeTab === 'Product') return ['Product', 'Analytics', 'Research', 'Tools'].includes(post.category);
        return post.category === activeTab;
    });

    return (
        <div className="blog-page-wrapper">
            {/* Header / Navbar Overlay */}
            <nav className="blog-nav">
                <div className="blog-logo">MY.BLOG</div>
                <div className="blog-nav-links">
                    <Link to="/">Home</Link>
                    <a href="#featured">Featured</a>
                    <a href="#trending">Trending</a>
                    <a href="#latest">Latest</a>
                </div>
                <div className="blog-auth">
                    <button className="login-btn">Log In</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="blog-hero">
                <div className="hero-background-overlay"></div>
                <div className="hero-content">

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Choose Your<br />Best Happy Land
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Real Estate & Properties For Sale Or Rent<br />In 12+ Country
                    </motion.p>

                    {/* Search & Filter Bar */}
                    <motion.div
                        className="search-filter-container"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="filter-item">
                            <span className="filter-label">Topic type</span>
                            <select
                                className="filter-select"
                                value={topicFilter}
                                onChange={(e) => setTopicFilter(e.target.value)}
                            >
                                <option>Product Management</option>
                                <option>UX Research</option>
                                <option>Development</option>
                                <option>Strategy</option>
                            </select>
                        </div>
                        <div className="filter-divider"></div>
                        <div className="filter-item">
                            <span className="filter-label">Level</span>
                            <select
                                className="filter-select"
                                value={levelFilter}
                                onChange={(e) => setLevelFilter(e.target.value)}
                            >
                                <option>Beginner</option>
                                <option>Advanced</option>
                                <option>Expert</option>
                            </select>
                        </div>
                        <button
                            className="hero-search-btn"
                            onClick={() => {
                                const matchedTab = topicFilter === 'Product Management' ? 'Product' : (topicFilter === 'Development' ? 'Engineering' : (topicFilter === 'Strategy' ? 'Strategy' : 'All'));
                                setActiveTab(matchedTab);
                                document.getElementById('latest-articles')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Search
                        </button>
                    </motion.div>

                    <div className="hero-bottom-links">
                        <div className="hero-link-item">
                            <span>Read Featured</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div className="hero-link-item">
                            <span>Browse Latest</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>


            </section>


            {/* Middle Content Section - The Blog Grid */}
            <section className="blog-posts-grid-section" id="latest-articles">
                <div className="grid-container">
                    <div className="grid-header">
                        <h2>Latest Articles</h2>
                        <div className="tab-filters">
                            {['All', 'Design', 'Product', 'Engineering', 'Strategy'].map(tab => (
                                <button
                                    key={tab}
                                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="blog-posts-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    className="blog-post-card"
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="post-img-wrapper">
                                        <img src={post.image} alt={post.title} />
                                        <span className="post-category-tag">{post.category}</span>
                                    </div>
                                    <div className="post-text-content">
                                        <div className="post-meta">
                                            <span>{post.date}</span>
                                            <span className="dot">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3>{post.title}</h3>
                                        <p>{post.description}</p>
                                        <button className="read-more-link">
                                            View Article
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Bottom White Section */}
            <section className="blog-footer-section">
                <div className="footer-content-wrapper">
                    <div className="mini-preview-card">
                        <div className="preview-img"></div>
                        <div className="preview-details">
                            <div className="preview-meta">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Technology Hub
                            </div>
                            <h3>AI in 2026</h3>
                            <div className="preview-footer">
                                <span className="read-count">11k Reads</span>
                                <button className="read-now-btn">Read Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="partner-logos">
                        {/* More visual partner logos style */}
                        <div className="logo-item">Medium</div>
                        <div className="logo-item">Dev.to</div>
                        <div className="logo-item">Hashnode</div>
                        <div className="logo-item">HackerNoon</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
