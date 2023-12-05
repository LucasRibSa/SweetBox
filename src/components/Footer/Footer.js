import React from "react";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
    return (
      <footer className="footer">
        <div className="footer-content">
        <img src="/assets/logo.png" alt="Logo da Empresa" className="logo" onClick={scrollToTop} />
          <p>© 2023 SweetBox Confeitaria</p>
          <p>Email: contato@sweetbox.com</p>
          <div className="social-icones">
            <a href="https://www.facebook.com/profile.php?id=61550807323213" target="_blank" rel="noopener noreferrer">
              <FacebookLogo size={46} className="logo-facebook"/>
            </a>
            <a href="https://www.instagram.com/sweetbox.cd/" arget="_blank" rel="noopener noreferrer">
              <InstagramLogo size={46} className="logo-instagram" />
            </a>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;