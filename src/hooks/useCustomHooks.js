import { useState, useEffect } from 'react';

/**
 * Hook para detectar el tamaño de pantalla
 * @returns {Object} - Objeto con información sobre el viewport
 */
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

/**
 * Hook para manejo de scroll
 * @returns {Object} - Objeto con información del scroll y utilidades
 */
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
};

/**
 * Hook para smooth scroll a elementos
 * @returns {Function} - Función para hacer scroll suave
 */
export const useSmoothScroll = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return scrollToElement;
};

/**
 * Hook para animaciones en viewport (Intersection Observer)
 * @param {Object} options - Opciones del observer
 * @returns {Array} - Estados de visibilidad de elementos
 */
export const useInView = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const [elementsInView, setElementsInView] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleElements = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target.id);

      setElementsInView(visibleElements);
    }, options);

    // Observar todos los elementos con data-animate
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, [options]);

  return elementsInView;
};

/**
 * Hook para contador animado
 * @param {number} end - Valor final del contador
 * @param {number} duration - Duración en milisegundos
 * @param {boolean} start - Si debe empezar a contar
 * @returns {number} - Valor actual del contador
 */
export const useAnimatedCounter = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const startCount = 0;
    const difference = end - startCount;

    const updateCounter = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function para una animación más natural
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.round(startCount + difference * easeOutQuad);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end, duration, start]);

  return count;
};

/**
 * Hook para manejo de estado de carga
 * @returns {Object} - Estados y funciones de carga
 */
export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const startLoading = (text = 'Cargando...') => {
    setIsLoading(true);
    setLoadingText(text);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setLoadingText('');
  };

  return {
    isLoading,
    loadingText,
    startLoading,
    stopLoading
  };
};