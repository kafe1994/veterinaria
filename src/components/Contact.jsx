import React, { useState } from 'react';
import { useLoading } from '../hooks/useCustomHooks';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mascota: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { isLoading, startLoading, stopLoading } = useLoading();

  // Validación del formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    // Validar teléfono
    const phoneRegex = /^[+]?[\d\s\-()]+$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono no es válido';
    }

    // Validar mascota
    if (!formData.mascota.trim()) {
      newErrors.mascota = 'El nombre de la mascota es obligatorio';
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    startLoading('Enviando mensaje...');

    try {
      // Simular envío del formulario (aquí se integraría con el backend real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mascota: '',
        mensaje: ''
      });
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      stopLoading();
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="contact__info-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Dirección',
      content: 'Av. Principal 123, Ciudad, Estado 12345'
    },
    {
      icon: (
        <svg className="contact__info-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: 'Teléfono',
      content: '+1 (234) 567-8900'
    },
    {
      icon: (
        <svg className="contact__info-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Horarios',
      content: 'Lun - Vie: 8:00 AM - 8:00 PM\nSáb - Dom: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section id="contacto" className="contact section" data-animate="contact">
      <div className="container">
        <div className="contact__container">
          {/* Información de contacto */}
          <div className="contact__info">
            <h2>Contáctanos</h2>
            <p className="mb-lg">
              Estamos aquí para ayudarte. Contáctanos para agendar una cita o resolver cualquier duda sobre el cuidado de tu mascota.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__info-item">
                  {info.icon}
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                      {info.title}
                    </h4>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa placeholder */}
            <div style={{ marginTop: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ 
                width: '100%', 
                height: '300px', 
                backgroundColor: 'var(--color-primary-100)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--color-primary-500)',
                fontSize: '1.125rem',
                fontWeight: '600'
              }}>
                🗺️ Mapa Interactivo
                <br />
                <small style={{ fontSize: '0.875rem', fontWeight: 'normal' }}>
                  Ubicación de la veterinaria
                </small>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contact__form-wrapper">
            <div className="form">
              <h3 className="mb-md">Envíanos un Mensaje</h3>
              
              {submitted && (
                <div className="form__success active">
                  ¡Gracias por tu mensaje! Te contactaremos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form__group">
                  <label htmlFor="nombre" className="form__label">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`form__input ${errors.nombre ? 'error' : ''}`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <span className={`form__error ${errors.nombre ? 'active' : ''}`}>
                      {errors.nombre}
                    </span>
                  )}
                </div>

                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form__input ${errors.email ? 'error' : ''}`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <span className={`form__error ${errors.email ? 'active' : ''}`}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form__group">
                  <label htmlFor="telefono" className="form__label">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`form__input ${errors.telefono ? 'error' : ''}`}
                    placeholder="+1 (234) 567-8900"
                  />
                  {errors.telefono && (
                    <span className={`form__error ${errors.telefono ? 'active' : ''}`}>
                      {errors.telefono}
                    </span>
                  )}
                </div>

                <div className="form__group">
                  <label htmlFor="mascota" className="form__label">
                    Nombre de tu Mascota *
                  </label>
                  <input
                    type="text"
                    id="mascota"
                    name="mascota"
                    value={formData.mascota}
                    onChange={handleInputChange}
                    className={`form__input ${errors.mascota ? 'error' : ''}`}
                    placeholder="Nombre de tu mascota"
                  />
                  {errors.mascota && (
                    <span className={`form__error ${errors.mascota ? 'active' : ''}`}>
                      {errors.mascota}
                    </span>
                  )}
                </div>

                <div className="form__group">
                  <label htmlFor="mensaje" className="form__label">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className={`form__textarea ${errors.mensaje ? 'error' : ''}`}
                    placeholder="Cuéntanos sobre tu consulta o situación..."
                  />
                  {errors.mensaje && (
                    <span className={`form__error ${errors.mensaje ? 'active' : ''}`}>
                      {errors.mensaje}
                    </span>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn btn--secondary"
                  disabled={isLoading}
                  style={{ width: '100%' }}
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;