#!/bin/bash

# Deploy script para Veterinaria CanOn
# Desarrollado por Alejandro Liendo

echo "🐕 Deploying Veterinaria CanOn..."
echo "=================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto."
    exit 1
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Construir el proyecto
echo "🔨 Construyendo proyecto..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completado exitosamente"
    
    # Deploy usando el método directo
    echo "🚀 Iniciando deploy..."
    npx wrangler deploy --assets=./dist
    
    if [ $? -eq 0 ]; then
        echo "🎉 ¡Deploy completado exitosamente!"
        echo "Tu sitio está disponible en la URL proporcionada por Cloudflare"
    else
        echo "❌ Error en el deploy"
        echo "💡 Tip: Verifica que tu proyecto esté conectado en Cloudflare Pages"
        exit 1
    fi
else
    echo "❌ Error en la construcción del proyecto"
    exit 1
fi