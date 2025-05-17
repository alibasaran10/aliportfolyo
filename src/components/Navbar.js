import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Ali Başaran</h2>
            <ul>
                <li><a href="/">Ana Sayfa</a></li>
                <li><a href="/about">Ben Kimim?</a></li>
                <li><a href="/skills">Neler Yapabilirim?</a></li>
                <li><a href="/portfolio">Portfolyo</a></li>
                <li><a href="/contact">İletişim</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
