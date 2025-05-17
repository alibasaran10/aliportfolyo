import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Navbar />
            {/* React Router kaldırıldığı için sadece Home bileşenini gösteriyorum */}
            <Home />
            <Footer />
        </>
    );
}

export default App;
