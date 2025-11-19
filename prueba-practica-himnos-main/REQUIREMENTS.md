# Prueba Técnica - Sistema de Reproducción de Himnos

## Tiempo Límite: 3-4 horas

## Contexto

Has sido asignado para completar una aplicación web de gestión de himnos que un desarrollador anterior dejó incompleta. La aplicación permite a los usuarios crear listas de reproducción de himnos en diferentes idiomas.

## Problemas Conocidos que DEBES Corregir

### 🔴 Críticos (Obligatorios)

1. **API de Himnos**: El endpoint para obtener himnos por idioma no está implementado
2. **Validación**: No hay validación en los números de himno ingresados
3. **Persistencia**: Los datos no se guardan en el servidor
4. **Responsividad**: La tabla no es responsive en dispositivos móviles
5. **Estado de React**: Hay problemas con el manejo del estado y re-renders

### 🟡 Importantes (Altamente Recomendados)

6. **Manejo de Errores**: Falta manejo de errores en peticiones HTTP
7. **UX**: Los controles de audio no cargan las URLs correctas
8. **Performance**: No hay optimización en las consultas a la API
9. **Detalles de progrmación**: La documentación de las diferntes API's no están claramente documentadas

### 🟢 Opcionales (Plus)

10. **Sincronización**: La función de auto-sync no funciona
11. **Testing**: Agregar tests básicos
12. **Accesibilidad**: Mejorar la accesibilidad del formulario

## Funcionalidades Esperadas

### 1. Gestión de Himnos

- [x] Selección de idioma (Español, Inglés, Portugués)
- [ ] Carga dinámica y eficiente de lista de himnos por idioma
- [ ] Validación de números de himno contra la lista real
- [ ] Sincronización entre número y nombre

### 2. Lista de Reproducción

- [x] Agregar/eliminar filas
- [ ] Persistencia en servidor
- [ ] Controles de reproducción funcionales
- [ ] Opción de reproducir con/sin voz

### 3. Sincronización (Opcional)

- [ ] Auto-sync entre sesiones
- [ ] WebSockets o Server-Sent Events
- [ ] Indicador de estado de conexión

## Recursos Disponibles

### Documentación del proyecto

- Archivo README.md que incluye las especificaciones de la aplicación

````

## Criterios de Evaluación

### Técnico (60%)
- **React/Next.js**: Uso correcto de hooks, estado, efectos
- **API**: Implementación correcta de endpoints REST
- **JavaScript**: Calidad del código, manejo de errores
- **CSS**: Responsividad, organización, mejores prácticas

### Funcional (30%)
- **Cumplimiento**: ¿Funciona según especificaciones?
- **UX**: ¿Es intuitivo y fácil de usar?
- **Performance**: ¿Carga rápido y sin errores?

### Código (10%)
- **Legibilidad**: Código limpio y bien comentado
- **Organización**: Estructura de archivos lógica
- **Git**: Commits descriptivos y frecuentes

## Instrucciones de Entrega

1. Sube este proyecto a un repositorio privado de github
2. Realiza commits frecuentes con mensajes descriptivos
3. Documenta las decisiones técnicas importantes en comentarios
4. Incluye instrucciones de instalación/ejecución actualizadas
5. **No usar IA** para resolver los problemas (será evaluado)

## Detección de Uso de IA

Se evaluará:
- Patrones de código inconsistentes con el estilo del proyecto
- Comentarios excesivamente detallados o genéricos
- Soluciones "perfectas" sin iteración o errores
- Commits poco frecuentes con grandes cambios
- Uso de librerías/patrones no mencionados en la documentación
- Una entrevista posterior ayudará a confirmar los conocimientos utilizados para resolver los problemas

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build
npm start
````

## Preguntas Frecuentes

**P: ¿Puedo usar librerías adicionales?**
R: Sí, pero justifica su uso en comentarios.

**P: ¿Qué hacer si la API externa no funciona?**
R: Documenta la falla y usa archivos JSON en una carpeta de pruebas como fallback.

**P: ¿Es necesario completar todo?**
R: Prioriza los problemas críticos. Es mejor tener menos funcionalidades bien implementadas que muchas a medias.

---

**¡Buena suerte! Demuestra tus habilidades como desarrollador Full Stack.**
