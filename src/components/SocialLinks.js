import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            icon: <FaGithub />,
            url: "https://github.com/alibasaran10",  // Buraya istediğin linki ekledim
        },
        {
            id: 2,
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/ali-basaran-a73b02366/",
        },
        {
            id: 3,
            icon: <FaInstagram />,
            url: "https://instagram.com/basaran_tarim_",
        },
    ];

    return (
        <div className="social-links">
            {links.map(({ id, icon, url }) => (
                <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link to ${url}`}
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
