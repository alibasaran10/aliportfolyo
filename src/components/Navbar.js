// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ active }) => {
    const links = [
        { id: 'home', label: 'Ana sayfa' },
        { id: 'about', label: 'Ben kimim?' },
        { id: 'skills', label: 'Neler yapabilirim?' },
        { id: 'portfolio', label: 'Portfolyo' },
        { id: 'contact', label: 'İletişim' },
    ];

    return (
        <nav className="navbar">
            <ul>
                {links.map(link => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            className={active === link.id ? 'active' : ''}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
