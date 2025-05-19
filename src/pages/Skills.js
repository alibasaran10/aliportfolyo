import React from 'react';
import './Skills.css';

const Yeteneklerim = [
    { id: 1, name: 'C# ile Kodlama', color: '#239120' },          // yeşil
    { id: 2, name: 'Fusion ile Orta Dereceli / Çizim & Tasarım', color: '#e67e22' }, // turuncu
    { id: 3, name: 'JavaScript & CSS ile Modern Web Siteleri', color: '#f1c40f' },  // sarı
    { id: 4, name: 'Temel Seviyede Python', color: '#3572A5' },   // python mavisi
    { id: 5, name: 'Qt Designer ile Çizimler & Python Entegrasyonu', color: '#00bcd4' } // tema mavi
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Yeteneklerim</h1>
            <ul className="skills-list">
                {Yeteneklerim.map(({id, name, color}) => (
                    <li key={id} className="skill-item" style={{borderColor: color}}>
                        <span style={{color: color}}>{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
