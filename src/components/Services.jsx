import React from 'react';
import { useSmoothScroll } from '../hooks/useCustomHooks';

const Services = () => {
  const scrollToElement = useSmoothScroll();

  const services = [
    {
      id: 'consulta',
      icon: (
        <svg className="card__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Consulta General',
      description: 'Exámenes completos, diagnósticos precisos y planes de tratamiento personalizados para mantener a tu mascota saludable.',
      badge: null
    },
    {
      id: 'urgencias',
      icon: (
        <svg className="card__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Urgencias 24/7',
      description: 'Servicio de emergencias veterinarias disponible las 24 horas para atender cualquier situación crítica.',
      badge: '24/7'
    },
    {
      id: 'vacunacion',
      icon: (
        <svg className="card__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
        </svg>
      ),
      title: 'Vacunación',
      description: 'Programas completos de vacunación y desparasitación para prevenir enfermedades y mantener la salud óptima.',
      badge: 'Importante'
    },
    {
      id: 'cirugia',
      icon: (
        <svg className="card__icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 16H8V4h8v14zm-1-2V6h-2v2h-2v2h2v2h2v-2h2V8h-2z"/>
        </svg>
      ),
      title: 'Cirugía',
      description: 'Procedimientos quirúrgicos especializados con equipos modernos y protocolo de seguridad avanzado.',
      badge: null
    }
  ];

  return (
    <section id="servicios" className="section" data-animate="services">
      <div className="container">
        <div className="services__header">
          <h2>Nuestros Servicios Veterinarios</h2>
          <p className="text-center">
            Ofrecemos atención integral para todas las necesidades de salud de tu mascota
          </p>
        </div>
        
        <div className="grid grid--4">
          {services.map((service) => (
            <div key={service.id} className="card card--service">
              {service.badge && (
                <span className="badge badge--primary mb-sm">{service.badge}</span>
              )}
              {service.icon}
              <h3 className="card__title">{service.title}</h3>
              <p className="card__description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl">
          <button 
            className="btn btn--primary"
            onClick={() => scrollToElement('contacto')}
          >
            Consulta Personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;