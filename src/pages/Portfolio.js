import React from 'react';
import './Portfolio.css';

const projects = [
    {
        title: 'Çiftlik Takip Sistemi',
        description: 'Python ve SQLite veri tabanı kullanarak tasarladığım çiftlik takip sistemi uygulaması.',
        image: 'foto1.jpg', // buraya kendi görsel uzantını ekleyebilirsin
    },
    {
        title: 'Word Tasarım Uygulaması',
        description: 'Python ve QtDesigner kullanarak Word benzeri uygulama tasarladım.',
        image: 'foto2.jpg',
    },
    {
        title: 'Arduino ile Tarım Robotu',
        description: 'Arduino ve Motor sürücüler kullanarak grup halinde tasarladığımız Tarım Robotu.',
        image: 'foto3.jpg',
    },
];

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h2 className="portfolio-title">Projelerim</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="image-placeholder">
                            {/* Buraya <img src={project.image} alt={project.title} /> eklersen çalışır */}
                            <span>Görsel: {project.image}</span>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
