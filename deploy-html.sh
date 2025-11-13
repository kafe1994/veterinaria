#!/bin/bash

# Deploy script para Veterinaria CanOn - Versión HTML Pura
# Desarrollado por Alejandro Liendo

echo "🐕 Deploying Veterinaria CanOn (HTML Version)..."
echo "================================================"

# Verificar que estamos en el directorio correcto
if [ ! -f "index.html" ]; then
    echo "❌ Error: No se encontró index.html. Asegúrate de estar en el directorio del proyecto."
    exit 1
fi

# Verificar que existe el icono
if [ ! -f "public/veterinary-icon.svg" ]; then
    echo "⚠️  Advertencia: No se encontró veterinary-icon.svg"
fi

# Deploy usando el método directo (sin build)
echo "🚀 Iniciando deploy directo..."
npx wrangler deploy --assets=./

if [ $? -eq 0 ]; then
    echo "🎉 ¡Deploy completado exitosamente!"
    echo "Tu sitio está disponible en la URL proporcionada por Cloudflare"
    echo ""
    echo "📁 Archivos incluidos en el deploy:"
    echo "  ✅ index.html (página principal)"
    if [ -f "public/veterinary-icon.svg" ]; then
        echo "  ✅ public/veterinary-icon.svg (ícono de huella)"
    fi
    if [ -f "public/_redirects" ]; then
        echo "  ✅ public/_redirects (configuración SPA)"
    fi
    if [ -f "public/_headers" ]; then
        echo "  ✅ public/_headers (headers de cache)"
    fi
    echo ""
    echo "✨ Características de la página:"
    echo "  📱 Responsive (Mobile First)"
    echo "  🎨 CSS personalizado sin frameworks"
    echo "  ⚡ JavaScript funcional puro"
    echo "  🏥 Branding profesional veterinaria"
    echo "  📞 Formulario de contacto funcional"
    echo "  ⭐ Carrusel de testimonios automático"
    echo "  📊 Estadísticas animadas"
    echo "  🗺️ Diseño completo para Veterinaria CanOn"
else
    echo "❌ Error en el deploy"
    echo "💡 Tip: Verifica que tu proyecto esté conectado en Cloudflare Pages"
    exit 1
fi