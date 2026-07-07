# Parador Aventura 🏔️

Sitio web oficial de **Parador Aventura**, operador turístico de aventura ubicado en **Bahía Bonita, Potrerillos, Mendoza**. Ofrece nueve actividades acuáticas y de montaña en el embalse y los Andes mendocinos.

✨ **Estado:** Proyecto 100% completo y funcional  
🌐 **Demo:** [ignaciomorichetti.github.io/parador-aventura](https://ignaciomorichetti.github.io/parador-aventura)  
📱 **Responsivo:** Optimizado para móvil, tablet y desktop

---

## Descripción

Sitio web estático e informativo de una sola página (SPA sin framework). Presenta todas las actividades del parador con detalle, las instalaciones del lugar, la historia de los fundadores y los canales de contacto y reserva.

---

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura del sitio |
| CSS3 + Tailwind CSS (CDN) | Estilos y diseño responsivo |
| JavaScript vanilla | Interactividad (navbar, modales, modo oscuro) |
| Google Fonts | Playfair Display (títulos) + Lato (cuerpo) |
| Google Maps embed | Ubicación sin API key |
| WhatsApp API (`wa.me`) | Botones de reserva directa |

---

## Funcionalidades

- **Diseño responsivo** — adaptado para móvil, tablet y desktop
- **Modo claro / oscuro** — toggle en el navbar, paleta azul lago en oscuro, persiste con `localStorage` y respeta `prefers-color-scheme`
- **Navbar dinámico** — transparente sobre el hero, se vuelve sólido con blur al scrollear
- **Modales de actividades** — cada tarjeta abre un panel con duración, qué incluye, qué llevar y botón directo a WhatsApp para reservar
- **Google Maps embed** — mapa interactivo con la ubicación exacta del parador
- **Waves SVG** — transiciones suaves entre secciones que se adaptan al modo claro/oscuro

---

## Secciones

| Sección | Descripción |
|---|---|
| **Hero** | Imagen full-screen del lago con overlay, títulos y CTAs |
| **Actividades** | Grid de 9 tarjetas con foto, descripción y modal expandible con detalles (duración, qué incluye, qué llevar, cómo reservar) |
| **El Parador** | Instalaciones (WiFi, baños, cervecería, minimarket, estacionamiento), mapa interactivo embed y horarios por temporada |
| **Sobre Nosotros** | Historia de los fundadores + foto del equipo, destacando su experiencia en montaña y aventura |
| **Contacto** | Botones directos a WhatsApp para reservas, links a Instagram, datos de ubicación y horarios |
| **Footer** | Links internos, dirección con enlace a Google Maps, copyright |

---

## Actividades

| Actividad | Lugar | Duración |
|---|---|---|
| Rafting | Potrerillos y Cacheuta | ~1.5 hs |
| Mountain Bike | Potrerillos | 1, 2 o 5 hs |
| Kayak | Bahía Bonita, Potrerillos | 1 – 1.5 hs |
| Stand Up Paddle | Bahía Bonita, Potrerillos | 1 – 1.5 hs |
| Bici Acuática | Bahía Bonita, Potrerillos | 1 hs |
| Canopy | Potrerillos | ~1 hs |
| Trekking | Potrerillos | 3 a 5 hs |
| Escalada | Potrerillos | ~4 hs |
| Rapel | Cacheuta | ~4 hs |

---

## Instalaciones del Parador

**Ubicación:** Bahía Bonita, Potrerillos, Luján de Cuyo, Mendoza

| Servicio | Detalle |
|---|---|
| 📶 WiFi | Cobertura en toda el área |
| 🚗 Estacionamiento | Gratuito |
| 🍺 Cervecería artesanal | Bebidas propias |
| 🌮 Panchería y Minimarket | Comidas rápidas y snacks |
| 🚻 Baños | Completos y limpios |
| ☂️ Alquiler | Sombrillas, gazebos, sillas y mesas playeras |
| 📱 Señal | Cobertura de principales compañías celulares |
| 🐕 Pet-friendly | Sí, se aceptan mascotas |
| 👥 Capacidad | Más de 100 personas |

**Horarios:**
- **Verano (Nov-Mar):** 9:00 a 19:00 hs
- **Invierno (Abr-Oct):** 10:00 a 17:00 hs

---

## Estructura del proyecto

```
parador-aventura/
├── index.html          # Página principal (single page)
├── css/
│   └── styles.css      # Estilos custom + modo oscuro
├── js/
│   └── main.js         # Navbar, dark mode, modales
├── img/
│   ├── hero.jpg
│   ├── logo.jpg
│   ├── Equipo.jpeg
│   ├── rafting/        (9 fotos)
│   ├── kayak/          (14 fotos)
│   ├── bici-acuatica/  (8 fotos)
│   ├── canopy/         (6 fotos)
│   ├── trekking/       (12 fotos)
│   ├── mtb/            (10 fotos)
│   ├── sup/            (5 fotos)
│   ├── escalada/       (8 fotos)
│   └── rapel/          (4 fotos)
├── documentacion.md    # Registro interno del desarrollo
└── README.md
```

---

## Cómo correr localmente

**Opción 1 — IntelliJ IDEA**
Click derecho en `index.html` → abrir con el navegador.

**Opción 2 — Python**
```bash
python -m http.server 8000
# Abrir http://localhost:8000
```

**Opción 3 — Node.js**
```bash
npx serve .
```

> No requiere instalación de dependencias ni proceso de build. Es un sitio 100% estático.

---

## Despliegue

### GitHub Pages
1. Ir a **Settings** del repo → **Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / `/ (root)`
4. El sitio queda disponible en `https://ignaciomorichetti.github.io/parador-aventura/`

### Netlify
1. [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. Conectar el repositorio de GitHub
3. Build command: vacío
4. Publish directory: `/`
5. Deploy

---

## Flujo de trabajo Git

- `main` → rama principal, siempre estable
- Las features se trabajan en ramas separadas
- Se abre un Pull Request para mergear a `main`, el compañero revisa antes de aprobar

---

## Cómo Reservar

Todas las actividades pueden reservarse mediante WhatsApp directo con el equipo:

1. **Haz click en "Reservar"** en cualquier actividad del sitio
2. **Abre WhatsApp** automáticamente con el número del parador
3. **Contáctales con tus datos** (cantidad de personas, fecha preferida, etc.)
4. **Confirma tu reserva** — algunos servicios requieren seña o DNI

**Actividades sin reserva previa (solo en verano):** Kayak, SUP, Bici Acuática  
**Actividades con reserva previa:** Rafting, MTB, Canopy, Trekking, Escalada, Rapel

---

## Contacto del parador

- 📍 Bahía Bonita, Potrerillos — Luján de Cuyo, Mendoza, Argentina
- 💬 WhatsApp: [261 5370306](https://wa.me/5492615370306) · [261 5099425](https://wa.me/5492615099425)
- 📸 Instagram: [@paradoraventura](https://www.instagram.com/paradoraventura/)

---

## Autores y Créditos

**Desarrollado por:**
- **Ignacio Morichetti Ramal** — Desarrollo web, diseño y gestión del proyecto

**Basado en requisitos de:**
- Equipo de Parador Aventura (información, imágenes y branding)

© 2026 Parador Aventura. Todos los derechos reservados.

---

## Licencia

MIT — Ver archivo [LICENSE](./LICENSE)
