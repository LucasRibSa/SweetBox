import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const heroImg = heroElement.querySelector('img');

    const handleScroll = () => {
      if (heroElement && heroImg) {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const translateY = scrollY / 2; 

        heroImg.style.transform = `translate(-50%, -50%) translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <img src="/assets/hero.JPG" alt="Imagem do Herói" />
      <div className="hero-text">
        <h1 className='hero-title'>Bem-vindo ao Nosso Site</h1>
        <p>Descubra nossas incríveis ofertas e produtos de alta qualidade.</p>
      </div>
    </header>
  );
}

export default Hero;
