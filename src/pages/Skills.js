// src/pages/Skills.js
import React from 'react';
import './Skills.css';

const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'Git', 'REST APIs', 'SQL', 'Python'
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <ul className="skills-list">
                {skills.map(skill => (
                    <li key={skill} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
