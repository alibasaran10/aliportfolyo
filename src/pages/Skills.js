// src/pages/Skills.js
import React from 'react';
import './Skills.css';

const Yeteneklerim = [
    'Onun Neşe Kaynağı Olmak', 'Her Daim Onunla Konuşabilmek ', 'Ondan Başkasını Görmemek', 'Sürekli Onunla Olduğuma Sevinmek', 'Onunla Her Markete girebilmek', 'Müstakbel Sevgilisi Olmak(10 Yıla da Kocası)', 'Her Yeteneğim de Her Şeyim de Ona Çıkıyor İşte Anlayın.'
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
