// src/pages/Skills.js
import React from 'react';
import './Skills.css';

const Yeteneklerim = [
    '111', '2222', '3', '4', '5', '6',
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Yeteneklerim</h1>
            <ul className="skills-list">
                {Yeteneklerim.map(skill => (
                    <li key={skill} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
