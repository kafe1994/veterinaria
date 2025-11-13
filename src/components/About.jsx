import React, { useEffect } from 'react';
import { useAnimatedCounter, useInView } from '../hooks/useCustomHooks';

const About = () => {
  const elementsInView = useInView();
  const isAboutVisible = elementsInView.includes('about');

  // Contadores animados
  const experienciaCount = useAnimatedCounter(15, 2000, isAboutVisible);
  const mascotasAtendidasCount = useAnimatedCounter(5000, 2500, isAboutVisible);
  const satisfaccionCount = useAnimatedCounter(98, 1800, isAboutVisible);
  const doctoresCount = useAnimatedCounter(12, 1500, isAboutVisible);

  const benefits = [
    'Atención personalizada y cálida',
    'Tecnología veterinaria avanzada',
    'Equipo médico especializado',
    'Horarios flexibles de atención',
    'Seguimiento post-consulta',
    'Emergencias 24/7'
  ];

  return (
    <section id="nosotros" className="about section" data-animate="about">
      <div className="container">
        <div className="about__container">
          {/* Contenido principal */}
          <div className="about__content">
            <h2>¿Por Qué Elegir Veterinaria CanOn?</h2>
            <p className="mb-lg">
              Con más de 15 años de experiencia, nos hemos convertido en la clínica veterinaria de 
              confianza para miles de familias. Nuestro equipo de profesionales apasionados combina 
              conocimiento médico de vanguardia con el amor genuino hacia los animales.
            </p>
            
            <p className="mb-lg">
              Cada mascota que llega a nuestras instalaciones recibe atención personalizada, 
              diagnósticos precisos y tratamientos adaptados a sus necesidades específicas. 
              Creemos que cada animal merece el mejor cuidado posible.
            </p>

            {/* Lista de beneficios */}
            <div className="about__benefits mb-lg">
              <h3 className="mb-md">Lo que nos hace especiales:</h3>
              <div className="grid grid--2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="about__benefit">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{color: 'var(--color-success)'}}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <span style={{marginLeft: '8px'}}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas */}
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">{experienciaCount}+</span>
                <span className="about__stat-label">Años de Experiencia</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">{mascotasAtendidasCount.toLocaleString()}+</span>
                <span className="about__stat-label">Mascotas Atendidas</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">{satisfaccionCount}%</span>
                <span className="about__stat-label">Satisfacción</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">{doctoresCount}</span>
                <span className="about__stat-label">Veterinarios</span>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="about__image">
            <img 
              src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23DBEAFE'/><circle cx='300' cy='200' r='80' fill='%231E40AF' opacity='0.7'/><rect x='250' y='300' width='100' height='60' fill='%231E3A8A' opacity='0.8'/><text x='300' y='210' text-anchor='middle' fill='white' font-size='24' font-weight='bold'>VETERINARIOS</text><text x='300' y='240' text-anchor='middle' fill='white' font-size='16'>PROFESIONALES</text></svg>" 
              alt="Veterinarios profesionales de CanOn" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;