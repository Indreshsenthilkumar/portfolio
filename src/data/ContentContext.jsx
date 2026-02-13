import React, { createContext, useContext, useState, useEffect } from 'react';
import initialContent from './content.json';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(() => {
        const saved = localStorage.getItem('portfolio_content');
        if (!saved) return initialContent;

        try {
            const parsed = JSON.parse(saved);
            // Merge saved data with initial content to ensure new fields (like projects) exist
            return {
                ...initialContent,
                ...parsed,
                // Double check nested objects if necessary, e.g. hero, about
                hero: { ...initialContent.hero, ...parsed.hero },
                about: { ...initialContent.about, ...parsed.about },
                projects: parsed.projects || initialContent.projects,
                experience: parsed.experience || initialContent.experience,
                education: parsed.education || initialContent.education,
                resumeUrl: parsed.resumeUrl || initialContent.resumeUrl,
                socialLinks: parsed.socialLinks || initialContent.socialLinks
            };
        } catch (e) {
            return initialContent;
        }
    });

    useEffect(() => {
        localStorage.setItem('portfolio_content', JSON.stringify(content));
    }, [content]);

    const updateContent = (path, value) => {
        setContent(prev => {
            const newContent = { ...prev };
            const keys = path.split('.');
            let current = newContent;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
            return { ...newContent };
        });
    };

    return (
        <ContentContext.Provider value={{ content, updateContent }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
