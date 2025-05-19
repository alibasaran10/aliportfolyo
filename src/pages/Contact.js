import React, { useState } from "react";
import SocialLinks from "../components/SocialLinks"; // doğru yola göre ayarla
import "./Contact.css";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Gönderildi:\nAd Soyad: ${form.name}\nMail: ${form.email}\nİçerik: ${form.message}`
        );
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <h1>İletişim formu</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ad Soyad"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Mail"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="İçerik"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Gönder</button>
            </form>

            {/* Sosyal medya linkleri buraya eklendi */}
            <SocialLinks />
        </div>
    );
};

export default Contact;
