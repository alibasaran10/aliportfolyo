import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [showSecondLine, setShowSecondLine] = useState(false);

    useEffect(() => {
        // 1. satırı göster, sonra 1.5 sn sonra 2. satırı aç
        const timer = setTimeout(() => setShowSecondLine(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-container">
            <h1 className="main-text">Merhaba, ben Ali Başaran</h1>
            {showSecondLine && (
                <h3 className="sub-text">Portfolyoma Hoş Geldin</h3>
            )}
        </div>
    );
};

export default Home;
