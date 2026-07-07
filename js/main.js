// ===== DARK MODE =====
const DARK_BG_MAIN  = '#0d1a0a';   // secciones cream en oscuro
const DARK_BG_WHITE = '#152010';   // secciones blancas en oscuro
const LIGHT_CREAM   = '#F7F1E6';
const LIGHT_WHITE   = '#FFFFFF';
const DARK_SECTION  = '#0f3009';   // nosotros (siempre oscuro)

function updateWaveColors(isDark) {
  // Wave 1: hero → actividades (rellena la sección que sigue, cream/dark)
  const w1 = document.getElementById('wave-1-path');
  if (w1) w1.setAttribute('fill', isDark ? DARK_BG_MAIN : LIGHT_CREAM);

  // Wave 2: actividades → parador (rellena la sección blanca/dark-white)
  const w2 = document.getElementById('wave-2-path');
  if (w2) w2.setAttribute('fill', isDark ? DARK_BG_WHITE : LIGHT_WHITE);

  // Wave 3: parador → nosotros
  const w3svg = document.getElementById('wave-3-svg');
  if (w3svg) w3svg.style.backgroundColor = isDark ? DARK_BG_WHITE : LIGHT_WHITE;

  // Wave 4: nosotros → contacto
  const w4 = document.getElementById('wave-4');
  const w4path = document.getElementById('wave-4-path');
  if (w4) w4.style.backgroundColor = isDark ? DARK_BG_MAIN : LIGHT_CREAM;
  if (w4path) w4path.setAttribute('fill', isDark ? DARK_BG_MAIN : LIGHT_CREAM);
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  document.getElementById('icon-moon').classList.toggle('hidden', isDark);
  document.getElementById('icon-sun').classList.toggle('hidden', !isDark);
  updateWaveColors(isDark);
}

// Cargar preferencia guardada (o preferencia del sistema)
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const startDark   = savedTheme === 'dark' || (!savedTheme && prefersDark);
applyTheme(startDark);

document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('nav-scrolled', window.scrollY > 60);
});


// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  hamburger.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    hamburger.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    hamburger.classList.remove('open');
  }
}, { passive: true });



// ===== ACTIVITY DATA =====
const activities = {
  rafting: {
    name: 'Rafting',
    icon: '🌊',
    location: 'Potrerillos y Cacheuta',
    duration: '~1.5 horas',
    image: 'img/rafting/rafting-1.jpg',
    reservation: 'Reserva previa siempre',
    description: 'Navegá los rápidos del río Mendoza con la adrenalina al máximo. Disponible en Potrerillos y Cacheuta, con guías expertos que garantizan una experiencia segura e increíble.',
    includes: ['Equipo de protección completo', 'Guías especializados', 'Lockers'],
    toBring:  ['Traje de baño', 'Toallón', 'Lentes de sol con sujetador'],
  },
  mtb: {
    name: 'Mountain Bike',
    icon: '🚵',
    location: 'Potrerillos',
    duration: '1, 2 o 5 horas',
    image: 'img/mtb/mtb-1.jpg',
    reservation: 'Reserva previa con DNI',
    description: 'Recorrés los senderos de montaña sobre dos ruedas con bicicleta y casco incluidos. Elegís el circuito según tu nivel y el tiempo disponible.',
    includes: ['Bicicleta de montaña', 'Casco'],
    toBring:  ['DNI (obligatorio)'],
  },
  kayak: {
    name: 'Kayak',
    icon: '🛶',
    location: 'Bahía Bonita, Potrerillos',
    duration: '1 hs libre / 1.5 hs travesía con guía',
    image: 'img/kayak/kayak-2.jpg',
    imagePosition: 'object-[center_90%]',
    reservation: 'Sin reserva en verano · Con reserva en invierno',
    description: 'Navegá el embalse de Potrerillos desde la hermosa Bahía Bonita. Disponible en kayak simple, doble o triple. Vuelta libre o travesía guiada.',
    includes: ['Kayak (simple, doble o triple)', 'Remo', 'Chaleco salvavidas', 'Instrucciones', 'Neoprene en invierno'],
    toBring:  ['Traje de baño', 'Zapatillas para mojar'],
    note: '🌟 Grupos de más de 8 personas: consultá nuestras promociones especiales.',
  },
  sup: {
    name: 'Stand Up Paddle (SUP)',
    icon: '🏄',
    location: 'Bahía Bonita, Potrerillos',
    duration: '1 hs libre / 1.5 hs travesía con guía',
    image: 'img/sup/sup-1.jpg',
    reservation: 'Sin reserva en verano · Con reserva en invierno',
    description: 'Pararte sobre el agua con los Andes como fondo es una experiencia que no vas a olvidar. Una de las actividades más populares de Bahía Bonita.',
    includes: ['Tabla de SUP', 'Chaleco salvavidas', 'Instrucciones'],
    toBring:  ['Traje de baño', 'Zapatillas para mojar'],
    note: '🌟 Grupos de más de 8 personas: consultá nuestras promociones especiales.',
  },
  bici: {
    name: 'Bici Acuática',
    icon: '🚲',
    location: 'Bahía Bonita, Potrerillos',
    duration: '1 hora',
    image: 'img/bici-acuatica/bici-1.jpg',
    reservation: 'Sin reserva en verano · Con reserva en invierno',
    description: 'Pedaleá sobre el agua en bicicletas anfibias para 1 o 2 personas. Ideal para toda la familia, muy divertido y fácil sin experiencia previa.',
    includes: ['Bicicleta acuática (1 o 2 personas)', 'Chaleco salvavidas'],
    toBring:  ['Traje de baño', 'Zapatillas para mojar'],
  },
  canopy: {
    name: 'Canopy',
    icon: '🌿',
    location: 'Potrerillos',
    duration: '~1 hora',
    image: 'img/canopy/canopy-1.jpg',
    reservation: 'Reserva con 1 día de anticipación',
    description: 'Volás en tirolesas de hasta 700 metros con vistas espectaculares a las montañas y el embalse. Una experiencia única para los amantes de la altura.',
    includes: ['Tirolesas de hasta 700 metros', 'Equipo de seguridad completo'],
    toBring:  ['Ropa cómoda'],
  },
  trekking: {
    name: 'Trekking',
    icon: '🥾',
    location: 'Potrerillos',
    duration: '3 a 5 horas',
    image: 'img/trekking/trekking-1.jpg',
    reservation: 'Reserva todo el año · Mínimo 2 personas',
    description: 'Recorrés los senderos de montaña de Potrerillos con guías que conocen cada rincón del terreno. Incluye snack y bebida para reponer energías.',
    includes: ['Guía especializado', 'Snack', 'Bebida'],
    toBring:  ['Ropa cómoda con abrigo', '1 litro de agua', 'Zapatillas deportivas o de trekking', 'Gorra', 'Lentes de sol'],
  },
  escalada: {
    name: 'Escalada',
    icon: '🧗',
    location: 'Potrerillos',
    duration: '~4 horas',
    image: 'img/escalada/escalada-4.jpg',
    reservation: 'Reserva todo el año · Mínimo 2 personas',
    description: 'Desafiá las paredes de roca de Potrerillos con equipo profesional y dos guías expertos. Apta para principiantes y avanzados.',
    includes: ['2 guías especializados', 'Casco', 'Arnés', 'Equipo completo'],
    toBring:  ['Ropa deportiva', 'Abrigo', 'Gorra', 'Lentes de sol', 'Snacks', '1 litro de agua'],
  },
  rapel: {
    name: 'Rapel',
    icon: '⛰️',
    location: 'Cacheuta',
    duration: '~4 horas',
    image: 'img/rapel/rapel-3.jpg',
    reservation: 'Reserva todo el año · Mínimo 2 personas',
    description: 'Descendés paredes verticales con cuerda en las quebradas de Cacheuta. Una experiencia de superación personal con total seguridad y dos guías.',
    includes: ['2 guías especializados', 'Casco', 'Arnés', 'Equipo completo'],
    toBring:  ['Ropa deportiva', 'Abrigo', 'Gorra', 'Lentes de sol', 'Snacks', '1 litro de agua'],
  },
};


// ===== MODAL =====
function openModal(id) {
  const a = activities[id];
  if (!a) return;

  const imgHtml = a.image
    ? `<img src="${a.image}" alt="${a.name}" class="w-full h-56 object-cover ${a.imagePosition || ''}">`
    : `<div class="w-full h-56 flex items-center justify-center bg-gradient-to-br from-forest-200 to-forest-500">
         <span class="text-8xl">${a.icon}</span>
       </div>`;

  const includesHtml = a.includes.map(i =>
    `<li class="flex items-start gap-2 text-sm text-stone-600"><span class="text-green-600 mt-0.5 shrink-0">✓</span>${i}</li>`
  ).join('');

  const toBringHtml = a.toBring.map(i =>
    `<li class="flex items-start gap-2 text-sm text-stone-600"><span class="text-earth-600 mt-0.5 shrink-0">→</span>${i}</li>`
  ).join('');

  const noteHtml = a.note
    ? `<p class="text-xs bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-3 mt-4">${a.note}</p>`
    : '';

  const waUrl = `https://wa.me/5492615370306?text=Hola!%20Quiero%20reservar%20${encodeURIComponent(a.name)}%20en%20Parador%20Aventura%20%F0%9F%8F%94%EF%B8%8F`;

  document.getElementById('modal-body').innerHTML = `
    <div class="rounded-t-3xl overflow-hidden">${imgHtml}</div>
    <div class="p-6 pb-8">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-3xl">${a.icon}</span>
        <h3 class="font-serif text-2xl font-bold text-forest-900">${a.name}</h3>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <span class="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">📍 ${a.location}</span>
        <span class="text-xs bg-forest-100 text-forest-700 px-3 py-1 rounded-full">⏱ ${a.duration}</span>
        <span class="text-xs bg-earth-100 text-earth-700 px-3 py-1 rounded-full">📋 ${a.reservation}</span>
      </div>
      <p class="text-stone-600 text-sm leading-relaxed mb-5">${a.description}</p>
      <div class="grid grid-cols-2 gap-4 mb-2">
        <div>
          <h4 class="font-bold text-forest-900 text-sm mb-2">✅ Incluye</h4>
          <ul class="space-y-1">${includesHtml}</ul>
        </div>
        <div>
          <h4 class="font-bold text-forest-900 text-sm mb-2">🎒 Llevar</h4>
          <ul class="space-y-1">${toBringHtml}</ul>
        </div>
      </div>
      ${noteHtml}
      <a href="${waUrl}" target="_blank"
         class="mt-5 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3.5 px-6 rounded-full font-bold transition-colors w-full">
        <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Reservar ${a.name}
      </a>
    </div>
  `;

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
