import React from 'react';
import { useSmoothScroll } from '../hooks/useCustomHooks';

const Hero = () => {
  const scrollToElement = useSmoothScroll();

  const handleCTAClick = (sectionId) => {
    scrollToElement(sectionId);
  };

  return (
    <section id="inicio" className="hero" data-animate="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Cuidado Experto para tu Mejor Amigo
        </h1>
        <p className="hero__subtitle">
          Medicina veterinaria de calidad con corazón. Más de 15 años cuidando la salud y felicidad de tus mascotas.
        </p>
        <div className="hero__cta">
          <button 
            className="btn btn--primary btn--large"
            onClick={() => handleCTAClick('contacto')}
          >
            Agendar Cita
          </button>
          <a 
            href="tel:+1234567890"
            className="btn btn--accent btn--large"
          >
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;