# Jeepao AI Systems — Sitio Web

Sitio web corporativo de **Jeepao AI Systems**, construido en **Angular 18** (componentes standalone), responsive y con la identidad visual definida: azul profundo, cian eléctrico y violeta tecnológico.

## Requisitos previos

- Node.js 18.19+ o 20+
- npm 9+

## Instalación

Abre una terminal en esta carpeta (`jeepao-ai-systems`) y ejecuta:

```powershell
npm install
```

## Levantar en desarrollo

```powershell
npm start
```

Esto inicia el servidor de desarrollo en `http://localhost:4200`.

## Build de producción

```powershell
npm run build
```

Los archivos generados quedan en `dist/jeepao-ai-systems`, listos para publicar en cualquier hosting estático (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, etc.).

## Estructura del proyecto

```
src/app/
├── app.component.ts          → Shell principal, ensambla todas las secciones
├── components/
│   ├── header/                → Navegación fija con menú responsive
│   ├── hero/                  → Sección de portada (HERO)
│   ├── about/                 → Quiénes somos + Misión/Visión/Valores
│   ├── services/               → 7 servicios (IA, arquitectura, QA, automatización)
│   ├── products/                → Fichas de producto / soluciones destacadas
│   ├── team/                    → Equipo (Viviana, Erik, César)
│   ├── methodology/              → Proceso de trabajo (5 pasos)
│   ├── why-us/                   → Banner "¿Por qué elegirnos?"
│   ├── industries/                → "¿A quién ayudamos?"
│   ├── faq/                        → Preguntas frecuentes (acordeón)
│   ├── contact/                     → Formulario de contacto (Reactive Forms)
│   ├── footer/                       → Pie de página
│   ├── logo/                          → Logo SVG (isotipo "nodo inteligente")
│   └── icon/                           → Set de íconos de línea reutilizables
```

## Pendientes antes de publicar

1. **Contacto real**: reemplazar el correo, teléfono y ubicación de ejemplo en [contact.component.html](src/app/components/contact/contact.component.html) y [footer.component.html](src/app/components/footer/footer.component.html).
2. **Redes sociales**: añadir las URLs reales de LinkedIn/Instagram en el footer.
3. **Envío del formulario**: el formulario de contacto actualmente solo simula el envío (ver el `TODO` en [contact.component.ts](src/app/components/contact/contact.component.ts)). Conéctalo a un servicio de correo (p. ej. Formspree, EmailJS) o a un backend propio.
4. **Fotos del equipo**: hoy se muestran iniciales; puedes reemplazar el avatar por imágenes reales del equipo en [team.component.html](src/app/components/team/team.component.html).
5. **Dominio**: configurar `jeepaoaisystems.com` (o el dominio final) en el hosting elegido.
