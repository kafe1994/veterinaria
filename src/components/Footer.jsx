import React from 'react';
import { useSmoothScroll } from '../hooks/useCustomHooks';

const Footer = () => {
  const scrollToElement = useSmoothScroll();

  const handleNavClick = (sectionId) => {
    scrollToElement(sectionId);
  };

  const quickLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const services = [
    'Consulta General',
    'Urgencias 24/7',
    'Vacunación',
    'Cirugía',
    'Dental',
    'Grooming'
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com/veterinariacanon'
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.824 3.708 13.673 3.708 12.376s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
        </svg>
      ),
      url: 'https://instagram.com/veterinariacanon'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
        </svg>
      ),
      url: 'https://wa.me/1234567890'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          {/* Información de la empresa */}
          <div className="footer__section">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
              <svg width="40" height="40" viewBox="0 0 32 32" fill="currentColor" style={{color: 'var(--color-primary-100)'}}>
                <ellipse cx="16" cy="20" rx="8" ry="5"/>
                <ellipse cx="12" cy="10" rx="3" ry="3.5"/>
                <ellipse cx="16" cy="8" rx="3" ry="3.5"/>
                <ellipse cx="20" cy="10" rx="3" ry="3.5"/>
                <ellipse cx="24" cy="13" rx="3" ry="3.5"/>
              </svg>
              <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>
                Veterinaria CanOn
              </h3>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-sm)' }}>
              Cuidado experto para tu mejor amigo. Más de 15 años brindando medicina veterinaria de calidad con amor y dedicación.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--color-primary-500)',
                    color: 'var(--color-bg-surface)',
                    borderRadius: '50%',
                    transition: 'var(--transition-base)',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'var(--color-primary-700)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'var(--color-primary-500)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={`Seguir en ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer__section">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer__section">
            <h3>Nuestros Servicios</h3>
            <ul className="footer__links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#servicios">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Información de contacto en el footer */}
        <div style={{ 
          borderTop: '1px solid #374151', 
          marginTop: 'var(--space-xl)', 
          paddingTop: 'var(--space-md)',
          textAlign: 'center',
          color: 'var(--color-text-secondary)'
        }}>
          <div style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-bg-surface)' }}>
              📍 Av. Principal 123, Ciudad, Estado 12345
            </strong>
          </div>
          <div style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-bg-surface)' }}>
              📞 +1 (234) 567-8900
            </strong>
          </div>
          <div style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-bg-surface)' }}>
              ⏰ Lun - Vie: 8:00 AM - 8:00 PM | Sáb - Dom: 9:00 AM - 6:00 PM
            </strong>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p style={{ margin: 0 }}>
            © 2025 Veterinaria CanOn. Todos los derechos reservados. | 
            <span style={{ marginLeft: '8px' }}>
              <strong>Diseñado por Alejandro Liendo</strong>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;