import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
    const links = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];

    return (
        <nav className="navbar" style={{backgroundColor:'#121212', padding:'1rem'}}>
            <div className="navbar-logo" style={{color:'#00bcd4', fontWeight:'bold', fontSize:'1.5rem', cursor:'pointer'}}>
                Ali Başaran
            </div>
            <ul className="navbar-links" style={{listStyle:'none', display:'flex', gap:'1.5rem', marginTop:0}}>
                {links.map(link => (
                    <li key={link}>
                        <button
                            onClick={() => setCurrentPage(link)}
                            style={{
                                background:'none',
                                border:'none',
                                color: currentPage === link ? '#00bcd4' : '#eee',
                                fontWeight: currentPage === link ? '700' : '400',
                                cursor: 'pointer',
                                fontSize: '1rem',
                            }}
                        >
                            {link}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
