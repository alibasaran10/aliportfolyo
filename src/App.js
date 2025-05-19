import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];

function App() {
    const [currentSection, setCurrentSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            let newSection = currentSection;
            sections.forEach(section => {
                const elem = document.getElementById(section);
                if (elem) {
                    if (scrollPos >= elem.offsetTop && scrollPos < elem.offsetTop + elem.offsetHeight) {
                        newSection = section;
                    }
                }
            });
            setCurrentSection(newSection);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [currentSection]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div style={{ backgroundColor: '#121212', color: '#eee', fontFamily: "'Poppins', sans-serif", minHeight: '100vh' }}>
            <Navbar active={currentSection} />
            <main>
                {sections.map(section => {
                    const Component = {
                        home: Home,
                        about: About,
                        skills: Skills,
                        portfolio: Portfolio,
                        contact: Contact
                    }[section];

                    return (
                        <motion.section
                            key={section}
                            id={section}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={variants}
                            style={{ minHeight: '100vh', padding: '3rem 2rem', maxWidth: 900, margin: '0 auto 6rem auto' }}
                        >
                            <Component />
                        </motion.section>
                    );
                })}
            </main>

            {/* Hoş küçük detaylar: alt sağda yumuşak parlama */}
            <div
                style={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,188,212,0.3) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
        </div>
    );
}

export default App;
