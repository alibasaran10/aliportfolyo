import React from 'react';
import './Portfolio.css';
import Project1 from '../Assets/Portfolyo-2.png';
import Project2 from '../Assets/Portfolyo-3.png';
import Project3 from '../Assets/Portfolyo-4.jpg';

const projects = [
    {
        title: 'Çiftlik Takip Sistemi',
        description: 'Python ve SQLite veri tabanı kullanarak tasarladığım çiftlik takip sistemi uygulaması.',
        image: Project1,
    },
    {
        title: 'Word Tasarım Uygulaması',
        description: 'Python ve QtDesigner kullanarak Word benzeri uygulama tasarladım.',
        image: Project2,
    },
    {
        title: 'Arduino ile Tarım Robotu',
        description: 'Arduino ve Motor sürücüler kullanarak grup halinde tasarladığımız Tarım Robotu.',
        image: Project3,
    },
];

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h2 className="portfolio-title">Projelerim</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-img" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
