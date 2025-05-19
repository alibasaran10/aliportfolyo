import React from "react";
import "./About.css";
import benimFoto from '../Assets/Portfolyo-1.jpg';

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">Ben Kimim ?</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Merhaba, ben Ali Başaran 6 Aralık 2004 tarihinde Balıkesir'de doğdum.
                        Balıkesir Üniversitesi Bilgisayar Mühendisliği 2.Sınıf öğrencisiyim.
                        Bilgisayarlara, sürekli gelişen teknolojiye ve bunların yanında tarıma
                        ilgiliyim. Okuduğum ve yaşadığım şehir olan Balıkesir'de aynı zamanda
                        aile işletmemizi yönetiyorum. Çiftlikte çalışmamın yanı sıra sosyal
                        medya platformum içinde içerikler üretiyorum ve derslerimle ilgileniyorum.
                        Amacım; öğrendiklerimle yeni şeyler üretebilmek, var olanı geliştirmek ve
                        ilgi duyduğum tarıma da teknolojiyi en faydalı şekilde entegre etmek.
                    </p>
                </div>
                <div className="about-image">
                    <img src={benimFoto} alt="Ali Başaran" />
                </div>
            </div>
        </div>
    );
};

export default About;
