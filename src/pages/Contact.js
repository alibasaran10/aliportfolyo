import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact">
            <h2>İletişim</h2>
            <form>
                <input type="text" placeholder="Ad Soyad" required />
                <input type="email" placeholder="Mail" required />
                <textarea placeholder="Mesajınız..." required></textarea>
                <button type="submit">Gönder</button>
            </form>
            <div className="social">
                <a href="#">X</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#">Facebook</a>
            </div>
        </section>
    );
}

export default Contact;
