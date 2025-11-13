import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Excelente atención. Los veterinarios son muy profesionales y amables. Mi perro Max se sintió muy cómodo durante toda la consulta. Definitivamente volveremos.",
      author: "María González",
      authorInfo: "Dueña de Max (Golden Retriever)",
      rating: 5
    },
    {
      id: 2,
      text: "Llevamos a nuestros gatos aquí hace 3 años. Siempre nos brindan el mejor cuidado y han sido fundamentales para mantener a Luna y Oliver saludables.",
      author: "Carlos Rodríguez",
      authorInfo: "Dueño de Luna y Oliver (Gatos)",
      rating: 5
    },
    {
      id: 3,
      text: "Cuando mi perra tuvo una emergencia a las 2 AM, ellos estuvieron disponibles inmediatamente. Su rapidez y profesionalismo salvaron la vida de Bella.",
      author: "Ana Martínez",
      authorInfo: "Dueña de Bella (Border Collie)",
      rating: 5
    },
    {
      id: 4,
      text: "El trato es excepcional, tanto para las mascotas como para los dueños. Se nota que aman lo que hacen y tienen mucha experiencia.",
      author: "Roberto Silva",
      authorInfo: "Dueño de Rocky (Pastor Alemán)",
      rating: 5
    }
  ];

  // Auto-avanzar testimonios cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className="star"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{
          fill: index < rating ? 'var(--color-accent-500)' : 'var(--color-text-secondary)',
          opacity: index < rating ? '1' : '0.3'
        }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  return (
    <section id="testimonios" className="section" data-animate="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <h2>Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-center">
            Miles de familias confían en nosotros para el cuidado de sus mascotas
          </p>
        </div>

        <div className="testimonials__container">
          {/* Carrusel de testimonios */}
          <div className="testimonial">
            <div className="testimonial__card">
              {/* Comillas */}
              <svg className="testimonial__quote" viewBox="0 0 48 48" fill="currentColor">
                <path d="M40 8H24v12h8v16h16V24H32V8zm-16 0H8v12h8v16h16V24H24V8z"/>
              </svg>

              {/* Calificación con estrellas */}
              <div className="testimonial__rating">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Texto del testimonio */}
              <blockquote className="testimonial__text">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Información del autor */}
              <div className="testimonial__author">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="testimonial__author-info">
                {testimonials[currentTestimonial].authorInfo}
              </div>
            </div>

            {/* Controles del carrusel */}
            <div className="testimonials__controls">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__control ${
                    index === currentTestimonial ? 'active' : ''
                  }`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;