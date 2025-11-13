# 🐕 Veterinaria CanOn - Landing Page 

Una landing page completamente responsive y profesional para la **Veterinaria CanOn**, desarrollada con **HTML puro, CSS avanzado y JavaScript funcional**. ✨

## ✨ Características Principales

### 🎨 **Diseño Visual Mejorado**
- **🐶 Imágenes Reales de Mascotas**: Fotos bonitas de perros, gatos y mascotas en cada sección
- **🌈 Diseño Más Alegre**: Colores vibrantes, gradientes llamativos y elementos visuales atractivos
- **🎭 Animaciones Fluidas**: Efectos de hover, transiciones suaves, floating y pulse animations
- **⭐ Iconos Característicos**: Iconos SVG coloridos y temáticos de mascotas y veterinaria

### 📱 **Funcionalidad Completa**
- **Responsive Design**: Mobile First approach que se adapta a todos los dispositivos
- **Navegación Smooth**: Scroll suave entre secciones con offsets inteligentes
- **Formulario Validado**: Validación completa en tiempo real del formulario de contacto
- **Carrusel Interactivo**: Testimonios con navegación automática y manual (cada 6 segundos)
- **Contadores Animados**: Estadísticas que se animan al entrar en viewport
- **Menú Móvil**: Navegación hamburguesa con animaciones fluidas

### 🎯 **Experiencia de Usuario**
- **Carga Rápida**: HTML puro sin dependencias externas (excepto Google Fonts)
- **Accesibilidad**: Skip links, aria labels y navegación por teclado
- **SEO Optimizado**: Meta tags completos y estructura semántica HTML5
- **Cross-browser**: Compatible con todos los navegadores modernos

## 🎨 **Diseño y Branding**

### Paleta de Colores Vibrante
- **Primario**: Azul veterinario (#1E40AF)
- **Secundario**: Verde esperanza (#10B981) 
- **Acento**: Naranja cálido (#F59E0B)
- **Acento Suave**: Amarillo dorado (#FBBF24)
- **Rosa**: Rosa mascotas (#F472B6)
- **Púrpura**: Púrpura diversión (#A855F7)
- **Rojo**: Rojo alerta (#F43F5E)

### Tipografía Amigable
- **Fuente Principal**: Poppins (Google Fonts)
- **Pesos**: 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Jerarquía Clara**: Títulos grandes, subtítulos y texto legible

### 🎭 **Animaciones y Efectos**
- **Float Animation**: Elementos que flotan suavemente
- **Wiggle Animation**: Iconos que se mueven juguetonamente  
- **Pulse Animation**: Elementos que pulsan para llamar atención
- **Fade In Up**: Entrada suave de elementos al viewport
- **Hover Effects**: Transformaciones, sombras y colores al pasar mouse
- **Gradient Borders**: Bordes animados en cards y botones

## 📁 **Estructura del Proyecto**

```
veterinaria-canon/
├── index.html                    # Página principal (2355 líneas)
├── veterinary-icon.svg           # Ícono SVG de huella de mascota
├── imgs/                         # Imágenes de mascotas bonitas
│   ├── hero_dog_2.jpg           # Perro feliz para hero
│   ├── hero_dog_4.jpg           # Perro para servicios
│   ├── cat_care_9.jpg           # Gato siendo atendido
│   ├── vet_care_4.jpg           # Veterinario con mascota
│   ├── vet_care_8.jpg           # Procedimiento veterinario
│   ├── pets_group_*.jpg         # Grupo de mascotas felices
│   ├── small_pets_*.jpg         # Mascotas pequeñas
│   └── clinic_interior_*.jpg    # Interior de clínica
├── wrangler.jsonc               # Configuración Cloudflare Pages
├── public/_redirects            # Configuración SPA routing
├── public/_headers              # Headers de cache
├── package.json                 # Configuración del proyecto
├── deploy.sh                    # Script de despliegue
└── README.md                    # Este archivo
```

## 🚀 **Características Técnicas**

### 🎯 **Secciones Incluidas**

1. **🏠 Hero Section**
   - Imagen de fondo con perro feliz
   - Título impactante con animaciones
   - Botones CTA con hover effects
   - Badges con estadísticas principales
   - Gradiente overlay colorido

2. **⚡ Servicios Veterinarios**
   - 6 servicios con imágenes reales de mascotas
   - Iconos SVG temáticos y coloridos
   - Cards con efectos hover espectaculares
   - Badges informativos (24/7, Popular, etc.)
   - Grid responsive que se adapta a móvil

3. **🏥 Nosotros / About**
   - Imagen principal de clínica veterinaria
   - Imagen flotante de mascotas jugando
   - Lista de beneficios con iconos check
   - Estadísticas animadas con contadores
   - Efectos de parallax sutiles

4. **💬 Testimonios**
   - Carrusel automático cada 6 segundos
   - 5 testimonios con fotos de mascotas mencionadas
   - Sistema de calificación con 5 estrellas
   - Controles manuales para navegación
   - Animaciones suaves de transición

5. **📞 Contacto**
   - Información de contacto con iconos
   - Mapa con imagen de fondo de clínica
   - Formulario completo con validación en tiempo real
   - Campos para datos de mascota
   - Mensajes de éxito y error animados

6. **🦶 Footer**
   - Logo con iconos de mascotas
   - Enlaces organizados por categorías
   - Iconos sociales con hover effects
   - Información de contacto completa
   - Créditos de diseño (Alejandro Liendo)

### 🎮 **Funcionalidades JavaScript**

- **Navegación Suave**: ScrollToSection con offset para header fijo
- **Menú Móvil**: Toggle animado con hamburger menu
- **Header Scroll Effect**: Cambia appearance al hacer scroll
- **Contadores Animados**: IntersectionObserver para activar al viewport
- **Testimonios Auto-advance**: Cambia automáticamente cada 6 segundos
- **Formulario Validación**: Validación en tiempo real con regex
- **Scroll Animations**: IntersectionObserver para fade-in effects
- **Event Listeners**: Manejo completo de eventos de usuario

## 🌐 **Despliegue**

### ⚡ **Despliegue Rápido con Cloudflare Pages**

1. **Opción 1 - Script Automático**:
   ```bash
   cd veterinaria-canon
   npm install
   npm run deploy
   ```

2. **Opción 2 - Manual**:
   - Conecta el repositorio a Cloudflare Pages
   - Build command: `npm run build`
   - Output directory: `dist/`
   - Node version: `18` o superior

3. **URLs de Prueba**:
   - Producción: `https://veterinaria-9nr.pages.dev`
   - Configuración: `wrangler.jsonc` incluido

## 📋 **Validación de Funcionalidades**

### ✅ **Listado Completo de Features**

- [x] ✅ Diseño responsive Mobile First
- [x] ✅ Imágenes reales de mascotas bonitas
- [x] ✅ Navegación suave entre secciones
- [x] ✅ Header fijo con efecto scroll
- [x] ✅ Menú móvil hamburguesa animado
- [x] ✅ Hero section con imagen de fondo
- [x] ✅ 6 servicios con imágenes de mascotas
- [x] ✅ Cards con hover effects espectaculares
- [x] ✅ Badges informativos con gradientes
- [x] ✅ Sección About con imagen flotante
- [x] ✅ Lista de beneficios con iconos
- [x] ✅ Contadores animados (15+ años, 5000+ mascotas, 98%, 12+ veterinarios)
- [x] ✅ Testimonios con carrusel automático
- [x] ✅ Sistema de calificación con estrellas
- [x] ✅ Formulario con validación en tiempo real
- [x] ✅ Footer completo con enlaces sociales
- [x] ✅ Animaciones CSS3 (float, pulse, wiggle)
- [x] ✅ Efectos de hover en todos los elementos
- [x] ✅ Gradientes y colores vibrantes
- [x] ✅ Iconos SVG temáticos y coloridos
- [x] ✅ Credits de diseño (Alejandro Liendo)
- [x] ✅ SEO optimizado con meta tags
- [x] ✅ Accesibilidad con skip links y aria labels

## 🎨 **Personalización**

### 🛠️ **Cambiar Colores**
Las variables CSS están en `:root` al inicio del CSS:
```css
:root {
  --color-primary-500: #1E40AF;     /* Azul principal */
  --color-secondary-500: #10B981;   /* Verde secundario */
  --color-accent-500: #F59E0B;      /* Naranja acento */
  /* Personaliza aquí los colores */
}
```

### 📸 **Cambiar Imágenes**
Reemplaza las imágenes en la carpeta `imgs/`:
- `hero_dog_*.jpg` - Imágenes para hero y servicios
- `cat_care_*.jpg` - Imágenes de gatos
- `pets_group_*.jpg` - Grupos de mascotas
- `small_pets_*.jpg` - Mascotas pequeñas
- `clinic_interior_*.jpg` - Interior de clínica

### 🎭 **Modificar Animaciones**
Las animaciones están definidas en el CSS:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
/* Personaliza las animaciones aquí */
```

## 👨‍💻 **Desarrollado por Alejandro Liendo**

Esta landing page fue diseñada y desarrollada por **Alejandro Liendo** con amor y dedicación para crear la mejor experiencia web para la Veterinaria CanOn. 🐕💙

---

**¡La página ahora es mucho más alegre, colorida y atractiva con imágenes reales de mascotas! 🎉🐶🐱**
