import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch(currentPage){
            case 'Home': return <Home />;
            case 'About': return <About />;
            case 'Skills': return <Skills />;
            case 'Portfolio': return <Portfolio />;
            case 'Contact': return <Contact />;
            default: return <Home />;
        }
    };

    return (
        <div style={{backgroundColor:'#121212', minHeight:'100vh', color:'#eee', fontFamily:'Poppins, sans-serif'}}>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main style={{padding:'2rem'}}>
                {renderPage()}
            </main>
        </div>
    );
};

export default App;
