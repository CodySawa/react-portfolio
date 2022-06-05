import React from "react";

const Footer = () => {
    return (
        <footer className="footer-content">
            <a href="https://github.com/CodySawa" target="_blank" rel="noreferrer">
                <img src={require('../../img/github-icon.png')} alt="github icon" className="footer-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/kota-sawada-8449b2226/" target="_blank" rel="noreferrer">
                <img src={require('../../img/linkedin-icon.png')} alt="linkedin icon" className="footer-icon"/>
            </a>
        </footer>
    );
}

export default Footer;