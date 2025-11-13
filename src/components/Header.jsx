import React, { useState } from 'react';
import { useSmoothScroll, useViewport } from '../hooks/useCustomHooks';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useViewport();
  const scrollToElement = useSmoothScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToElement(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          {/* Logo */}
          <a href="#inicio" className="header__logo" onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}>
            <svg className="header__logo-icon" viewBox="0 0 32 32" fill="currentColor">
              <ellipse cx="16" cy="20" rx="8" ry="5" />
              <ellipse cx="12" cy="10" rx="3" ry="3.5" />
              <ellipse cx="16" cy="8" rx="3" ry="3.5" />
              <ellipse cx="20" cy="10" rx="3" ry="3.5" />
              <ellipse cx="24" cy="13" rx="3" ry="3.5" />
            </svg>
            <span className="header__logo-text">Veterinaria CanOn</span>
          </a>

          {/* Navegación Desktop */}
          <nav className="header__nav" aria-label="Navegación principal">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="header__nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón menú móvil */}
          <button
            className="header__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav aria-label="Navegación móvil">
            <ul className="header__mobile-nav">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;