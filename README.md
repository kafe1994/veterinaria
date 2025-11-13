# 🐕 Veterinaria CanOn - Landing Page

Una landing page completamente responsive y profesional para la Veterinaria CanOn, desarrollada con React, CSS puro y JavaScript funcional.

## ✨ Características

- **Responsive Design**: Mobile First approach que se adapta a todos los dispositivos
- **React + Vite**: Desarrollo moderno y rápido con Vite
- **CSS Puro**: Sin frameworks CSS, metodología BEM para organización
- **JavaScript Funcional**: Interacciones suaves y animaciones
- **Navegación Smooth**: Scroll suave entre secciones
- **Formulario Validado**: Validación completa de formulario de contacto
- **Carrusel Interactivo**: Testimonios con navegación automática y manual
- **Animaciones**: Efectos hover, transiciones y contadores animados
- **SEO Optimizado**: Meta tags y estructura semántica

## 🎨 Diseño y Branding

### Paleta de Colores
- **Primario**: Azul veterinario (#1E40AF)
- **Secundario**: Verde esperanza (#10B981) 
- **Acento**: Naranja cálido (#F59E0B)
- **Neutros**: Blancos, grises claros

### Tipografía
- **Fuente Principal**: Poppins (Google Fonts)
- **Pesos**: 400 (Regular), 600 (SemiBold), 700 (Bold)

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0**: Framework de JavaScript
- **Vite**: Build tool y servidor de desarrollo
- **CSS3**: Estilos con variables CSS y metodología BEM
- **JavaScript ES6+**: Funcionalidad interactiva
- **HTML5**: Estructura semántica

## 📁 Estructura del Proyecto

```
veterinaria-canon/
├── public/
│   └── veterinary-icon.svg          # Ícono de huella de veterinario
├── src/
│   ├── components/                  # Componentes React
│   │   ├── Header.jsx              # Navegación principal
│   │   ├── Hero.jsx                # Sección hero
│   │   ├── Services.jsx            # Servicios veterinarios
│   │   ├── About.jsx               # Sección nosotros
│   │   ├── Testimonials.jsx        # Testimonios con carrusel
│   │   ├── Contact.jsx             # Formulario de contacto
│   │   └── Footer.jsx              # Pie de página
│   ├── hooks/                      # Custom hooks
│   │   └── useCustomHooks.js       # Hooks personalizados
│   ├── styles/
│   │   └── main.css                # Estilos principales
│   ├── App.jsx                     # Componente principal
│   └── main.jsx                    # Punto de entrada
├── package.json                    # Dependencias del proyecto
├── vite.config.js                  # Configuración de Vite
└── index.html                      # HTML principal
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd veterinaria-canon
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   - El servidor se iniciará en `http://localhost:3000`
   - Se abrirá automáticamente en el navegador

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Vista previa de la build de producción

## 📱 Secciones de la Landing Page

### 1. Header/Navegación
- Logo con ícono de huella + "Veterinaria CanOn"
- Menú responsivo (hamburguesa en móvil, horizontal en desktop)
- Navegación sticky con smooth scroll
- Efectos hover y transiciones

### 2. Hero Section
- Título principal: "Cuidado Experto para tu Mejor Amigo"
- Subtítulo descriptivo
- CTAs: "Agendar Cita" y "Llamar Ahora"
- Diseño con gradientes y efectos visuales

### 3. Servicios
- Grid responsive de 4 servicios principales
- Íconos SVG personalizados
- Efectos hover con transformaciones
- Badges especiales (24/7, Importante)

### 4. Nosotros
- Descripción de la veterinaria
- Estadísticas animadas (contadores)
- Lista de beneficios con checkmarks
- Imagen de veterinarios profesionales

### 5. Testimonios
- Carrusel automático (5 segundos)
- Controles manuales de navegación
- Rating con estrellas
- Cards con información de clientes

### 6. Contacto
- Formulario completo con validación
- Información de contacto
- Mapa placeholder
- Estados de carga y éxito

### 7. Footer
- Enlaces organizados
- Información de contacto
- Redes sociales
- Copyright y crédito de diseño

## 🎯 Funcionalidades JavaScript

### Custom Hooks
- `useViewport`: Detección de tamaño de pantalla
- `useScroll`: Manejo de scroll y dirección
- `useSmoothScroll`: Navegación suave
- `useInView`: Animaciones al entrar en viewport
- `useAnimatedCounter`: Contadores animados
- `useLoading`: Estados de carga

### Características Interactivas
- Menú hamburguesa responsive
- Smooth scroll entre secciones
- Carrusel automático de testimonios
- Validación de formulario en tiempo real
- Animaciones CSS con JavaScript
- Contadores animados en estadísticas
- Estados hover y focus

## 📐 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile First
- Diseño base optimizado para móviles
- Se expande progresivamente para tablets y desktop
- Touch targets de 48px mínimo
- Fonts escalables con clamp()
- Grid adaptativo (1 columna → 2 columnas → 4 columnas)

## 🎨 Estructura CSS

### Metodología BEM
```css
.block__element--modifier
```

### Variables CSS
- Sistema de colores definido
- Espaciado basado en múltiplos de 8px
- Transiciones y animaciones centralizadas
- Breakpoints responsive

### Componentes Reutilizables
- Botones (btn, btn--primary, btn--secondary)
- Cards (card, card--service)
- Formularios (form, form__input)
- Badges (badge, badge--success)

## 🔧 Personalización

### Colores
Editar las variables CSS en `src/styles/main.css`:
```css
:root {
  --color-primary-500: #1E40AF;
  --color-secondary-500: #10B981;
  --color-accent-500: #F59E0B;
}
```

### Contenido
- Editar textos directamente en los componentes React
- Cambiar información de contacto en Footer.jsx
- Modificar testimonios en Testimonials.jsx
- Actualizar servicios en Services.jsx

### Estilos
- Modificar variables CSS para cambios globales
- Ajustar breakpoints en media queries
- Personalizar animaciones y transiciones

## 📈 Optimizaciones

- Imágenes optimizadas con SVGs
- CSS minificado y organizado
- JavaScript modular con hooks personalizados
- Estructura semántica HTML5
- Meta tags para SEO
- Fuentes optimizadas con Google Fonts

## 🐛 Resolución de Problemas

### Error de dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto ocupado
Editar `vite.config.js`:
```js
server: {
  port: 3001 // Cambiar puerto
}
```

### Cache del navegador
- Usar Ctrl+F5 para refresco completo
- Limpiar cache del navegador

## 📞 Soporte

Para cualquier pregunta o problema, por favor contacta al desarrollador.

## 📄 Licencia

Este proyecto es propiedad de Veterinaria CanOn. Todos los derechos reservados.

---

**Desarrollado por Alejandro Liendo** | 2025