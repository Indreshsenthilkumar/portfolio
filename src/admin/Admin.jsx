import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../data/ContentContext';
import { Layout, User, Briefcase, FileText, Save, ArrowLeft, LogOut, Clock, GraduationCap, Settings, Globe, Plus, Trash2 } from 'lucide-react';
import './Admin.css';

const Admin = () => {
    const { content, updateContent } = useContent();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('hero');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid Password');
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="login-overlay">
                <form className="login-card" onSubmit={handleLogin}>
                    <h2>PORTFOLIO ADMIN</h2>
                    <input
                        type="password"
                        placeholder="Master Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                    />
                    <button type="submit" className="btn-save" style={{ width: '100%' }}>UNLOCK ACCESS</button>
                </form>
            </div>
        );
    }

    const renderHeroEditor = () => {
        return (
            <div className="editor-form">
                <div className="form-group">
                    <label>Hero Dynamic Words (comma separated)</label>
                    <input
                        value={content.hero.words.join(', ')}
                        onChange={(e) => updateContent('hero.words', e.target.value.split(',').map(w => w.trim().toUpperCase()))}
                    />
                </div>
                <div className="form-group">
                    <label>Main Role Title</label>
                    <input
                        value={content.hero.role}
                        onChange={(e) => updateContent('hero.role', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Secondary Subtitle</label>
                    <input
                        value={content.hero.subtitle}
                        onChange={(e) => updateContent('hero.subtitle', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Mission Statement</label>
                    <textarea
                        rows="3"
                        value={content.hero.mission}
                        onChange={(e) => updateContent('hero.mission', e.target.value)}
                    />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Availability Status</label>
                        <input
                            value={content.hero.availability}
                            onChange={(e) => updateContent('hero.availability', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input
                            value={content.hero.location}
                            onChange={(e) => updateContent('hero.location', e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label>Geography Coordinates</label>
                    <input
                        value={content.hero.coordinates}
                        onChange={(e) => updateContent('hero.coordinates', e.target.value)}
                    />
                </div>
            </div>
        );
    };

    const renderAboutEditor = () => (
        <div className="editor-form">
            <div className="form-group">
                <label>Display Name</label>
                <input
                    value={content.about.name}
                    onChange={(e) => updateContent('about.name', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Professional Role</label>
                <input
                    value={content.about.role}
                    onChange={(e) => updateContent('about.role', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>About Text (HTML allowed)</label>
                <textarea
                    rows="5"
                    value={content.about.text}
                    onChange={(e) => updateContent('about.text', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Conclusion Text</label>
                <textarea
                    rows="3"
                    value={content.about.conclusion}
                    onChange={(e) => updateContent('about.conclusion', e.target.value)}
                />
            </div>
        </div>
    );

    const renderProjectsEditor = () => {
        const handleAddProject = () => {
            const newProject = {
                id: Date.now(),
                category: "NEW CATEGORY",
                title: "New Project Title",
                role: "Product Lead",
                problem: "Project description goes here.",
                solution: "How you solved it.",
                skills: ["React", "Design"],
                impact: "What was the result?",
                link: "",
                github: ""
            };
            updateContent('projects', [...content.projects, newProject]);
            alert('New project template added! Scroll down to edit it.');
        };

        const handleRemoveProject = (id) => {
            if (window.confirm('Are you sure you want to remove this project?')) {
                updateContent('projects', content.projects.filter(p => p.id !== id));
            }
        };

        return (
            <div className="editor-form">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
                    <button className="btn-save" onClick={handleAddProject}><Plus size={18} /> ADD NEW PROJECT</button>
                </div>
                {content.projects.map((project, idx) => (
                    <div key={project.id} style={{
                        marginBottom: '2.5rem',
                        background: '#161616',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '1px solid #222'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#a66a3b', margin: 0 }}>Project {idx + 1}: {project.title}</h4>
                            <button
                                className="btn-back"
                                style={{ borderColor: '#ff4444', color: '#ff4444', padding: '0.25rem 0.5rem' }}
                                onClick={() => handleRemoveProject(project.id)}
                            >
                                <Trash2 size={14} /> REMOVE
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label>Short Title / Category</label>
                                <input
                                    value={project.category}
                                    onChange={(e) => {
                                        const newProjects = [...content.projects];
                                        newProjects[idx].category = e.target.value;
                                        updateContent('projects', newProjects);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Long Title</label>
                                <input
                                    value={project.title || ''}
                                    onChange={(e) => {
                                        const newProjects = [...content.projects];
                                        newProjects[idx].title = e.target.value;
                                        updateContent('projects', newProjects);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Description / Problem</label>
                            <textarea
                                rows="3"
                                value={project.problem || ''}
                                onChange={(e) => {
                                    const newProjects = [...content.projects];
                                    newProjects[idx].problem = e.target.value;
                                    updateContent('projects', newProjects);
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Skills Used (comma separated)</label>
                            <input
                                value={project.skills ? project.skills.join(', ') : ''}
                                onChange={(e) => {
                                    const newProjects = [...content.projects];
                                    newProjects[idx].skills = e.target.value.split(',').map(s => s.trim());
                                    updateContent('projects', newProjects);
                                }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                            <div className="form-group">
                                <label>Project Link (Website/PDF)</label>
                                <input
                                    placeholder="https://..."
                                    value={project.link || ''}
                                    onChange={(e) => {
                                        const newProjects = [...content.projects];
                                        newProjects[idx].link = e.target.value;
                                        updateContent('projects', newProjects);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>GitHub Link (Optional)</label>
                                <input
                                    placeholder="https://github.com/..."
                                    value={project.github || ''}
                                    onChange={(e) => {
                                        const newProjects = [...content.projects];
                                        newProjects[idx].github = e.target.value;
                                        updateContent('projects', newProjects);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderExperienceEditor = () => {
        const handleAddExperience = () => {
            const newExp = {
                id: Date.now(),
                company: "New Company",
                role: "New Role",
                period: "2024 - Present",
                points: ["Accomplishment 1", "Accomplishment 2"],
                impact: "Positive outcome description."
            };
            updateContent('experience', [...content.experience, newExp]);
        };

        const handleRemoveExperience = (id) => {
            if (window.confirm('Are you sure you want to remove this experience?')) {
                updateContent('experience', content.experience.filter(e => e.id !== id));
            }
        };

        return (
            <div className="editor-form">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
                    <button className="btn-save" onClick={handleAddExperience}><Plus size={18} /> ADD NEW EXPERIENCE</button>
                </div>
                {content.experience.map((exp, idx) => (
                    <div key={exp.id} style={{
                        marginBottom: '2.5rem',
                        background: '#161616',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '1px solid #222'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#a66a3b', margin: 0 }}>Experience {idx + 1}: {exp.company}</h4>
                            <button
                                className="btn-back"
                                style={{ borderColor: '#ff4444', color: '#ff4444', padding: '0.25rem 0.5rem' }}
                                onClick={() => handleRemoveExperience(exp.id)}
                            >
                                <Trash2 size={14} /> REMOVE
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input
                                    value={exp.company}
                                    onChange={(e) => {
                                        const newExp = [...content.experience];
                                        newExp[idx].company = e.target.value;
                                        updateContent('experience', newExp);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Time Period</label>
                                <input
                                    value={exp.period}
                                    onChange={(e) => {
                                        const newExp = [...content.experience];
                                        newExp[idx].period = e.target.value;
                                        updateContent('experience', newExp);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Role / Position</label>
                            <input
                                value={exp.role}
                                onChange={(e) => {
                                    const newExp = [...content.experience];
                                    newExp[idx].role = e.target.value;
                                    updateContent('experience', newExp);
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Points (one per line)</label>
                            <textarea
                                rows="4"
                                value={exp.points.join('\n')}
                                onChange={(e) => {
                                    const newExp = [...content.experience];
                                    newExp[idx].points = e.target.value.split('\n');
                                    updateContent('experience', newExp);
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Impact Statement</label>
                            <input
                                value={exp.impact}
                                onChange={(e) => {
                                    const newExp = [...content.experience];
                                    newExp[idx].impact = e.target.value;
                                    updateContent('experience', newExp);
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderEducationEditor = () => {
        const handleAddEducation = () => {
            const newEdu = {
                id: Date.now(),
                degree: "New Degree",
                institution: "Institution Name",
                duration: "2024 - 2028",
                focusAreas: ["Area 1", "Area 2"]
            };
            updateContent('education', [...content.education, newEdu]);
        };

        const handleRemoveEducation = (id) => {
            if (window.confirm('Are you sure you want to remove this education?')) {
                updateContent('education', content.education.filter(e => e.id !== id));
            }
        };

        return (
            <div className="editor-form">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
                    <button className="btn-save" onClick={handleAddEducation}><Plus size={18} /> ADD NEW EDUCATION</button>
                </div>
                {content.education.map((edu, idx) => (
                    <div key={edu.id} style={{
                        marginBottom: '2.5rem',
                        background: '#161616',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '1px solid #222'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h4 style={{ color: '#a66a3b', margin: 0 }}>Education {idx + 1}: {edu.degree}</h4>
                            <button
                                className="btn-back"
                                style={{ borderColor: '#ff4444', color: '#ff4444', padding: '0.25rem 0.5rem' }}
                                onClick={() => handleRemoveEducation(edu.id)}
                            >
                                <Trash2 size={14} /> REMOVE
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
                            <div className="form-group">
                                <label>Degree Title</label>
                                <input
                                    value={edu.degree}
                                    onChange={(e) => {
                                        const newEdu = [...content.education];
                                        newEdu[idx].degree = e.target.value;
                                        updateContent('education', newEdu);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Duration (Years)</label>
                                <input
                                    value={edu.duration}
                                    onChange={(e) => {
                                        const newEdu = [...content.education];
                                        newEdu[idx].duration = e.target.value;
                                        updateContent('education', newEdu);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Institution Name</label>
                            <input
                                value={edu.institution}
                                onChange={(e) => {
                                    const newEdu = [...content.education];
                                    newEdu[idx].institution = e.target.value;
                                    updateContent('education', newEdu);
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Focus Areas (comma separated)</label>
                            <input
                                value={edu.focusAreas.join(', ')}
                                onChange={(e) => {
                                    const newEdu = [...content.education];
                                    newEdu[idx].focusAreas = e.target.value.split(',').map(s => s.trim());
                                    updateContent('education', newEdu);
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderSettingsEditor = () => {
        const handleAddSocial = () => {
            const newSocial = { platform: "New Platform", url: "https://" };
            updateContent('socialLinks', [...content.socialLinks, newSocial]);
        };

        const handleRemoveSocial = (idx) => {
            if (window.confirm('Remove this social link?')) {
                updateContent('socialLinks', content.socialLinks.filter((_, i) => i !== idx));
            }
        };

        return (
            <div className="editor-form">
                <div style={{
                    marginBottom: '2.5rem',
                    background: '#161616',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #222'
                }}>
                    <h3 style={{ color: '#a66a3b', marginTop: 0 }}>Resume & Profile</h3>
                    <div className="form-group">
                        <label>Resume Download URL (Drive/Dropbox/PDF link)</label>
                        <input
                            value={content.resumeUrl}
                            onChange={(e) => updateContent('resumeUrl', e.target.value)}
                            placeholder="https://drive.google.com/..."
                        />
                    </div>
                </div>

                <div style={{
                    marginBottom: '2.5rem',
                    background: '#161616',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #222'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ color: '#a66a3b', margin: 0 }}>Social Media Links</h3>
                        <button className="btn-save" onClick={handleAddSocial}><Plus size={18} /> ADD LINK</button>
                    </div>

                    {content.socialLinks.map((social, idx) => (
                        <div key={idx} style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr auto',
                            gap: '1rem',
                            alignItems: 'flex-end',
                            marginBottom: '1rem',
                            padding: '1rem',
                            background: '#222',
                            borderRadius: '4px'
                        }}>
                            <div className="form-group">
                                <label>Platform</label>
                                <input
                                    value={social.platform}
                                    onChange={(e) => {
                                        const newSocials = [...content.socialLinks];
                                        newSocials[idx].platform = e.target.value;
                                        updateContent('socialLinks', newSocials);
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>URL</label>
                                <input
                                    value={social.url}
                                    onChange={(e) => {
                                        const newSocials = [...content.socialLinks];
                                        newSocials[idx].url = e.target.value;
                                        updateContent('socialLinks', newSocials);
                                    }}
                                />
                            </div>
                            <button
                                className="btn-back"
                                style={{ borderColor: '#ff4444', color: '#ff4444', height: '42px' }}
                                onClick={() => handleRemoveSocial(idx)}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="admin-container">
            <header className="admin-header">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button className="btn-back" onClick={() => navigate('/')}>
                        <ArrowLeft size={18} />
                    </button>
                    <h1>ADMIN_PANEL</h1>
                </div>
                <button className="sidebar-item" onClick={() => setIsLoggedIn(false)} style={{ background: 'transparent' }}>
                    <LogOut size={18} /> Exit
                </button>
            </header>

            <div className="admin-grid">
                <aside className="admin-sidebar">
                    <button
                        className={`sidebar-item ${activeTab === 'hero' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hero')}
                    >
                        <Layout size={18} /> Hero Section
                    </button>
                    <button
                        className={`sidebar-item ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        <User size={18} /> About Me
                    </button>
                    <button
                        className={`sidebar-item ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <Clock size={18} /> Experience
                    </button>
                    <button
                        className={`sidebar-item ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        <GraduationCap size={18} /> Education
                    </button>
                    <button
                        className={`sidebar-item ${activeTab === 'projects' ? 'active' : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        <Briefcase size={18} /> Projects
                    </button>
                    <button
                        className={`sidebar-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <Settings size={18} /> Socials & Resume
                    </button>
                </aside>

                <main className="admin-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>{activeTab} Settings</h2>
                        <button className="btn-save" onClick={() => alert('Changes saved to browser memory!')}>
                            <Save size={18} /> PERSIST CHANGES
                        </button>
                    </div>

                    {activeTab === 'hero' && renderHeroEditor()}
                    {activeTab === 'about' && renderAboutEditor()}
                    {activeTab === 'experience' && renderExperienceEditor()}
                    {activeTab === 'education' && renderEducationEditor()}
                    {activeTab === 'projects' && renderProjectsEditor()}
                    {activeTab === 'settings' && renderSettingsEditor()}
                </main>
            </div>
        </div>
    );
};

export default Admin;
