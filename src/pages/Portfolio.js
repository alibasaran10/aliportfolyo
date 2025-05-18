// src/pages/Portfolio.js
import React from 'react';
import './Portfolio.css';

const projects = [
    {
        title: 'Project One',
        description: 'A cool project about React.',
        link: '#'
    },
    {
        title: 'Project Two',
        description: 'Another awesome project.',
        link: '#'
    },
    {
        title: 'Project Three',
        description: 'Something creative and useful.',
        link: '#'
    }
];

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h1>My Portfolio</h1>
            <div className="projects-grid">
                {projects.map(({title, description, link}) => (
                    <div key={title} className="project-card">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
