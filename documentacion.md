# Documentación del Proyecto — Parador Aventura

Registro de decisiones, configuraciones y pasos tomados durante el desarrollo del sitio web.

---

## Stack tecnológico

- **Frontend:** HTML + CSS + JavaScript vanilla
- **Estilos:** Tailwind CSS
- **Backend:** No aplica por ahora (sitio estático/informativo)
- **Hosting:** GitHub Pages o Netlify
- **Control de versiones:** Git + GitHub

---

## Flujo de trabajo Git (GitHub Flow)

- `main` → rama principal, siempre estable y deployable
- Cada feature o sección se trabaja en una rama separada (ej: `feature/seccion-kayak`)
- Se hace Pull Request para mergear a `main`, el compañero revisa antes de aprobar

---

## Estructura del proyecto

```
parador-aventura/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
├── sections/
├── Requisitos/
├── documentacion.md
└── README.md
```

---

## Secciones de la página

1. **Hero** — Imagen de fondo impactante + nombre del parador + tagline
2. **Actividades** — Cards por actividad (9 en total)
3. **El Parador** — Instalaciones, horarios, info general
4. **Sobre Nosotros** — Historia de los fundadores
5. **Contacto / Reservas** — Cómo reservar

---

## Contenido del sitio (Requisitos del cliente)

### Actividades

| Actividad | Lugar | Duración | Reserva | Incluye | Llevar |
|-----------|-------|----------|---------|---------|--------|
| **Rafting** | Potrerillos y Cacheuta | ~1.5 hs | Previa siempre | Equipo protección, guías, lockers | Traje de baño, toallón, lentes con sostén |
| **MTB** | Potrerillos | 1, 2 o 5 hs | Previa con DNI | Bicicleta de montaña, casco | — |
| **Kayak** | Bahía Bonita, Potrerillos | 1 hs / travesía 1.30 hs con guía | Sin reserva en verano / Con reserva en invierno | Kayak, remo, chaleco, instrucciones. Invierno: + neoprene | Traje de baño, zapatillas para mojar |
| **SUP** | Bahía Bonita, Potrerillos | 1 hs / travesía 1.30 hs | Sin reserva en verano / Con reserva en invierno | Tabla, chaleco, instrucciones | Traje de baño, zapatillas para mojar |
| **Bici Acuática** | Bahía Bonita, Potrerillos | 1 hs | Sin reserva en verano / Con reserva en invierno | Bici, chaleco | Traje de baño, zapatillas para mojar |
| **Canopy** | Potrerillos | 1 hs | 1 día de anticipación | Tirolesas hasta 700mts, equipo | Ropa cómoda |
| **Trekking** | Potrerillos | 3 a 5 hs | Previa todo el año, mínimo 2 personas | Guía, snack, bebida | Ropa cómoda + abrigo, 1L agua, zapatillas deportivas/trekk, gorra, lentes de sol |
| **Escalada** | Potrerillos | 4 hs | Previa todo el año, mínimo 2 personas | 2 guías, equipo completo (casco, arnés) | Ropa deportiva, abrigo, gorra, lentes de sol, snacks, 1L agua |
| **Rapel** | Cacheuta | 4 hs | Previa todo el año, mínimo 2 personas | 2 guías, equipo completo (casco, arnés) | Ropa deportiva, abrigo, gorra, lentes de sol, snacks, 1L agua |

**Kayaks:** simples (1p), dobles (2p) y triples (3p)
**Bici acuática:** para 1 o 2 personas
**Promociones:** grupos de más de 8 personas (Kayak, SUP y otras)

---

### Temporadas y horarios

| Temporada | Meses | Horario |
|-----------|-------|---------|
| Verano | Noviembre a Marzo | 9:00 a 19:00 hs |
| Invierno | Abril a Octubre | 10:00 a 17:00 hs |

**Sin reserva previa (solo verano):** Kayak, SUP, Bici acuática
**Con reserva previa en verano:** Rafting, Canopy, Escalada, Rapel, Trekking
**Con reserva previa en invierno:** Todas las actividades

---

### El Parador — Instalaciones (Bahía Bonita, Potrerillos)

- WiFi
- Baños
- Estacionamiento gratuito
- Cervecería artesanal
- Regional de Mendoza
- Panchería
- Minimarket con comidas rápidas
- Señal (algunas compañías)
- Alquiler de sombrillas, gazebos, sillas y mesas playeras
- Agua
- **Pet-friendly:** Sí
- **Capacidad:** +100 personas

---

### Sobre Nosotros

El cliente proporcionó 2 versiones que se pueden combinar:

**Versión 1 (emotiva, primera persona):**
> Parador Aventura se origina en febrero del 2010, dos amigos, hermanos del alma, nos conocimos en el club de montaña de Maipú y luego trabajamos juntos en Aconcagua. Cuando terminando de trabajar en la temporada decidimos invertir lo que habíamos ganado en equipos de nieve para alquilar en los grupos escolares que ya manejábamos con otro nombre: Rocaltope. Ese invierno nos subalquilaban nuestros equipos un rental de Potrerillos muy pequeño. Ya al año siguiente nosotros manejábamos ese rental y al próximo era nuestro. En el 2014 incorporamos los kayaks solo con 6, y de ahí en adelante no paramos de incorporar equipos de navegación, y crecer cada año un poco más.

**Versión 2 (formal, tercera persona):**
> Parador Aventura es un proyecto creado por dos amigos, hermanos del alma, en el verano de 2014. Ellos son profesores de educación física y guías de montaña que se conocieron en la temporada de Aconcagua en una expedición del año 2000. Luego de trabajar varias temporadas en Aconcagua juntos y algunas separados, comenzaron otros emprendimientos juntos de campamentos educativos con turismo aventura, y luego crearon su empresa del Parador Aventura, con 6 kayaks principalmente los fines de semana, y después de cada temporada pudieron crecer cada vez un poco más.

---

## Fotos necesarias

- 1 foto **hero** (paisaje de Potrerillos o actividad impactante)
- 1 foto por actividad (9 fotos): Rafting, MTB, Kayak, SUP, Bici Acuática, Canopy, Trekking, Escalada, Rapel
- Fotos de las instalaciones del parador
- Opcional: foto de los fundadores (para Sobre Nosotros)

---

## Historial de pasos

### Sesión 1 — Configuración inicial (2026-05-11)

**Paso 1 — Crear el repositorio en GitHub**
- Repo creado en: https://github.com/IgnacioMorichetti/parador-aventura
- Visibilidad: Public
- Inicializado con README, .gitignore (Node) y licencia MIT

**Paso 2 — Conectar el repo localmente**
- Carpeta local: `C:\Users\Ignacio\OneDrive\Desktop\Parador Aventura`
- Se inicializó git en la carpeta existente (`git init`)
- Se conectó el remoto y se hizo `checkout` a `main`

**Paso 3 — Rama de documentación**
- Se creó la rama `documentacion`
- Se creó este archivo `documentacion.md` para registrar el progreso del proyecto

**Paso 4 — Estructura base del proyecto**
- Se crearon las carpetas `css/`, `js/`, `img/`, `sections/`
- Se crearon los archivos `index.html`, `css/styles.css`, `js/main.js`
- Commit y push a `main`

**Paso 5 — Lectura de requisitos**
- Se leyeron los PDFs de preguntas y respuestas de la primera toma de requisitos
- Se documentaron todas las actividades, horarios, instalaciones e historia del parador
- Se subió el PDF de respuestas al repo junto con el de preguntas

---

---

## Sesión 2 — Desarrollo completo del sitio (2026-06-01)

### Diseño y sistema visual

- **Estilo:** natural / "hippie formal" — tonos tierra, crema, verde bosque
- **Paleta personalizada** definida en `tailwind.config`:
  - `forest` (verde bosque, primario): `#1d4d17` base
  - `earth` (tierra/ámbar, secundario): `#b86018` base
  - `cream` (fondo cálido): `#F7F1E6`
  - `bark` (texto oscuro / footer): `#2C1F14`
- **Tipografía:** Playfair Display (títulos, serif elegante) + Lato (cuerpo, sans-serif)
- **Textura:** grano CSS sutil sobre secciones crema via SVG `feTurbulence`

---

### Estructura del sitio (`index.html`)

Single page con las siguientes secciones:

| Sección | ID | Descripción |
|---|---|---|
| Navbar | — | Fijo, logo + links + toggle modo + Reservar |
| Hero | `#inicio` | Full-screen con imagen de fondo y overlay gradiente |
| Actividades | `#actividades` | Grid 3 columnas, 9 cards con modal de detalle |
| El Parador | `#el-parador` | Instalaciones, mapa embed, carrusel, horarios |
| Sobre Nosotros | `#nosotros` | Historia de los fundadores, fondo verde oscuro |
| Contacto | `#contacto` | CTA WhatsApp + datos de contacto |
| Footer | — | Links, copyright, dirección (enlace Google Maps) |

---

### Funcionalidades JavaScript (`js/main.js`)

- **Navbar scroll:** transparente sobre el hero, sólido con blur al scrollear
- **Menú mobile:** hamburger toggle, se cierra al hacer click en cualquier link
- **Modo claro/oscuro:**
  - Botón luna/sol en el navbar (siempre visible)
  - Clase `dark` en `<html>`, paleta verde bosque profundo
  - Persistencia con `localStorage`
  - Respeta `prefers-color-scheme` del sistema operativo
  - Las waves SVG entre secciones también cambian de color
- **Modales de actividades:** cada card abre un modal con info completa (duración, qué incluye, qué llevar, reserva) y botón directo a WhatsApp
- **Carrusel del parador:** 5 fotos, navegación con flechas + dots + auto-avance cada 4.5 s + swipe en móvil

---

### Integraciones externas

| Servicio | Detalle |
|---|---|
| Google Maps | Embed via `<iframe>` sin API key — coordenadas `-32.976364, -69.180824` |
| WhatsApp | Links `wa.me/` — **⚠️ número placeholder `5492616000000`, reemplazar con el real** |
| Tailwind CSS | CDN `cdn.tailwindcss.com` con config personalizada inline |
| Google Fonts | Playfair Display + Lato |

---

### Imágenes (`img/`)

| Carpeta | Fotos | Fuente |
|---|---|---|
| `hero.jpg` | 1 (atardecer rosa sobre el lago) | Seleccionadas nuevas |
| `logo.jpg` | Logo circular del parador | Cliente |
| `rafting/` | 9 fotos | WhatsApp originales |
| `kayak/` | 14 fotos | WhatsApp originales |
| `bici-acuatica/` | 8 fotos | WhatsApp originales |
| `canopy/` | 6 fotos | WhatsApp originales |
| `trekking/` | 12 fotos | WhatsApp originales |
| `mtb/` | 10 fotos | Seleccionadas nuevas |
| `sup/` | 5 fotos | Seleccionadas nuevas |
| `escalada/` | 8 fotos | Seleccionadas nuevas |
| `rapel/` | 4 fotos | Seleccionadas nuevas |
| `parador/` | 12 fotos del lugar | Seleccionadas nuevas |

Las fotos de las actividades sin imagen real (MTB, SUP, Escalada, Rapel) fueron reemplazadas con las seleccionadas nuevas en esta sesión.

---

### Paso 6 — Sesión 2: desarrollo e implementación (2026-06-01)

- [x] Crear `index.html` con todas las secciones
- [x] Crear `css/styles.css` con estilos custom y modo oscuro
- [x] Crear `js/main.js` con toda la interactividad
- [x] Extraer y organizar fotos de los zips originales
- [x] Evaluar y clasificar 40 fotos nuevas en sus carpetas
- [x] Implementar hero con foto real
- [x] Implementar carrusel del parador (5 fotos, auto-avance, swipe)
- [x] Implementar modo claro/oscuro completo
- [x] Integrar Google Maps embed (sin API key)
- [x] Integrar WhatsApp en navbar, modales y contacto
- [x] Agregar logo en el navbar
- [x] Agregar `.idea/` al `.gitignore`

---

## Estado actual — Proyecto COMPLETO (2026-06-08)

✅ **Proyecto 100% completo y listo para publicar:**

- [x] Sitio web completamente funcional (single page)
- [x] Números de WhatsApp reales configurados (261 5370306 y 261 5099425)
- [x] Foto de los fundadores agregada (`img/Equipo.jpeg`)
- [x] Todas las secciones implementadas (Hero, Actividades, El Parador, Sobre Nosotros, Contacto, Footer)
- [x] Modo claro/oscuro funcional y persistente
- [x] Google Maps embed integrado
- [x] Carrusel de fotos del parador (5 fotos, auto-avance, swipe)
- [x] Modales de actividades con info completa
- [x] Todas las imágenes organizadas (80+ fotos)
- [x] Responsive design (móvil, tablet, desktop)
- [x] Git configurado y último commit en main

### Siguientes pasos opcionales:
- [ ] Configurar GitHub Pages (Settings → Pages → Deploy from main)
- [ ] O: Desplegar en Netlify para obtener dominio personalizado
- [ ] Agregar comentarios de clientes (testimonios)
- [ ] Integrar formulario de contacto (formspree, etc.) en lugar de solo WhatsApp

---

## Mantenimiento — Limpieza de datos internos (2026-07-07)

- Se eliminaron del repositorio los PDFs de relevamiento (`Requisitos/`): material interno del cliente (respuestas crudas con borradores y notas privadas) que no debía estar en un repo público. Quedan en disco local pero fuera de git (agregados al `.gitignore`).
- Se reescribió el historial de git a un único commit limpio (borrado y recreado el repo público) para que esos PDFs no queden accesibles en commits viejos.
- Verificado: el código no contiene API keys ni datos personales; los WhatsApp del sitio son los contactos comerciales públicos.

---

## Cómo correr en localhost

**Opción 1 — IntelliJ IDEA:** click derecho en `index.html` → abrir con el navegador

**Opción 2 — Python:**
```bash
python -m http.server 8000
# Abrir http://localhost:8000
```

**Opción 3 — Node.js:**
```bash
npx serve .
```

---

## Cómo publicar (hosting)

### GitHub Pages
1. Ir a Settings del repo → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `/ (root)`
4. El sitio queda en `https://ignaciomorichetti.github.io/parador-aventura/`

### Netlify (recomendado — más rápido y con dominio propio)
1. Ir a [netlify.com](https://netlify.com) → Add new site → Import from Git
2. Conectar el repo de GitHub
3. Build command: vacío (sitio estático puro)
4. Publish directory: `/` (raíz)
5. Deploy → el sitio queda en una URL pública inmediatamente

---
