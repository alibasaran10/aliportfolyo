// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Thanks for your message, ${formData.name}!`);
        setFormData({name: '', email: '', message: ''});
    };

    return (
        <div className="contact-container">
            <h1>İletişim</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Ad-Soyad
                    <input
                        type="text"
                        name="Ad Soyad"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ad Soyad" />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@gmail.com" />
                </label>
                <label>
                    Message
                    <textarea
                        name="Mesaj"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Mesajınızı buraya yazınız..." />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
