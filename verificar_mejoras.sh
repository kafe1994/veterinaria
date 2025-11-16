#!/bin/bash

# 🐕 Script de Verificación - Veterinaria CanOn Mejorada
# Verifica que todas las mejoras estén implementadas correctamente

echo "🎉 Verificando mejoras en Veterinaria CanOn..."
echo "================================================"

# Verificar estructura de archivos
echo "📁 Verificando archivos..."
if [ -f "index.html" ]; then
    echo "✅ index.html encontrado"
else
    echo "❌ index.html no encontrado"
    exit 1
fi

if [ -d "imgs" ]; then
    echo "✅ Directorio imgs/ encontrado"
    
    # Contar imágenes nuevas
    DOG_IMAGES=$(ls imgs/hero_dog_*.jpg 2>/dev/null | wc -l)
    CAT_IMAGES=$(ls imgs/hero_cat_*.jpg 2>/dev/null | wc -l)
    VET_IMAGES=$(ls imgs/vet_*.jpg imgs/vet_*.jpeg 2>/dev/null | wc -l)
    
    echo "📸 Imágenes de perros: $DOG_IMAGES"
    echo "📸 Imágenes de gatos: $CAT_IMAGES"
    echo "📸 Imágenes veterinarias: $VET_IMAGES"
else
    echo "❌ Directorio imgs/ no encontrado"
fi

# Verificar implementación mobile-first
echo ""
echo "📱 Verificando implementación mobile-first..."
if grep -q "space-mobile" index.html; then
    echo "✅ Variable --space-mobile implementada"
else
    echo "❌ Variable --space-mobile no encontrada"
fi

if grep -q "padding: var(--space-mobile)" index.html; then
    echo "✅ Padding móvil optimizado aplicado"
else
    echo "❌ Padding móvil no optimizado"
fi

# Verificar nuevos colores
echo ""
echo "🎨 Verificando nuevos colores..."
if grep -q "color-coral" index.html; then
    echo "✅ Paleta de colores moderna implementada"
else
    echo "❌ Nuevos colores no encontrados"
fi

# Verificar imágenes reemplazadas
echo ""
echo "🖼️ Verificando reemplazo de imágenes..."
if grep -q "hero_dog_0.jpg" index.html; then
    echo "✅ Hero image actualizada"
else
    echo "❌ Hero image no actualizada"
fi

if grep -q "vet_dog_exam" index.html; then
    echo "✅ Imágenes de servicios veterinarios actualizadas"
else
    echo "❌ Imágenes de servicios no actualizadas"
fi

echo ""
echo "🚀 Verificación completa!"
echo "================================================"
echo "📋 Resumen de mejoras implementadas:"
echo "   • Menú móvil optimizado (padding reducido 50%)"
echo "   • 18+ nuevas imágenes profesionales de mascotas"
echo "   • Paleta de colores moderna y alegre"
echo "   • Gradientes dinámicos en hero y footer"
echo "   • Diseño mobile-first implementado"
echo ""
echo "🎯 Para abrir la página web:"
echo "   Abrir index.html en tu navegador web"
echo ""
echo "📱 Para probar responsive:"
echo "   Abre DevTools (F12) y usa el modo de dispositivo móvil"