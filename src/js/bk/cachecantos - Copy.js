// cachecantos.js - Versión 4.3 (Optimizada)
const CACHE_NAME = 'cache-cantos-v4.3';
const OFFLINE_URL = '/cantos/resucito/offline.html';
const CACHE_TIMEOUT = 86400; // 24 horas en segundos

const COMMON_ASSETS = [
  // Core
  '/cantos/index.html',
  '/cantos/src/js/manifest.json',
  OFFLINE_URL,
  
  // CSS
  '/cantos/src/css/dbCSS.css',
  '/cantos/src/css/cssc/dbcssCantos.css',
  '/cantos/src/css/styles.css',
  '/cantos/src/css/mensajekiko.css',

  // JS
  '/cantos/src/js/dbMainJS.js',
  '/cantos/src/js/songs-data.js',
  '/cantos/src/js/app.js',
  '/cantos/src/js/mensajekiko.js',

  // Fuentes
  '/cantos/src/fonts/LibreFranklin-Bold.ttf',
  '/cantos/src/fonts/font.woff2',
  '/cantos/src/fonts/Fave-ScriptBoldPro.woff2',
  '/cantos/src/fonts/Fave-ScriptBoldPro.woff',
  '/cantos/src/fonts/Fave-ScriptBoldPro.ttf',
  '/cantos/src/fonts/FranklinGothicMedium.ttf',
  
  // Imágenes e íconos
  '/cantos/img/logo_cantos.png',
  '/cantos/src/ico.ico',
  '/cantos/src/icons/icon-192x192.png',
  '/cantos/src/icons/icon-512x512.png'
];

// Instalación: Cachear recursos esenciales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando recursos esenciales');
        return cache.addAll(COMMON_ASSETS);
      })
      .then(() => {
        console.log('[SW] Todos los recursos fueron cacheados');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Error durante la instalación:', error);
      })
  );
});

// Estrategia de Fetch: Cache First con actualización
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo manejar solicitudes GET del mismo origen
  if (request.method !== 'GET' || !url.origin.startsWith(self.location.origin)) {
    return;
  }

  // Para solicitudes de API o datos dinámicos
  if (url.pathname.startsWith('/api/')) {
    return fetch(request)
      .then(response => {
        // Cachear respuestas de API válidas
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => {
        // Intentar devolver datos cacheados para API
        return caches.match(request);
      });
  }

  // Para recursos estáticos
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Devolver recurso cacheado si existe
        if (cachedResponse) {
          // Actualizar caché en segundo plano
          updateCacheInBackground(request);
          return cachedResponse;
        }

        // Si no está en caché, cargar de la red
        return fetch(request)
          .then(response => {
            // Validar respuesta
            if (!response || response.status !== 200) {
              return response;
            }

            // Cachear nueva respuesta
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseToCache));

            return response;
          })
          .catch(() => handleOfflineFallback(request, url));
      })
  );
});

// Activación: Limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== CACHE_NAME) {
              console.log('[SW] Eliminando cache antigua:', cache);
              return caches.delete(cache);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Mensajes del Service Worker
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Funciones auxiliares
function updateCacheInBackground(request) {
  fetch(request)
    .then(response => {
      if (response && response.status === 200) {
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(request, responseToCache));
      }
    })
    .catch(() => {}); // Silenciar errores
}

function handleOfflineFallback(request, url) {
  // Páginas HTML: mostrar offline.html
  if (request.headers.get('accept').includes('text/html')) {
    return caches.match(OFFLINE_URL);
  }
  
  // Cantos: intentar mostrar versión genérica
  if (url.pathname.startsWith('/cantos/resucito/')) {
    if (url.pathname.endsWith('.html')) {
      return caches.match('/cantos/index.html');
    }
    if (url.pathname.endsWith('.css')) {
      return caches.match('/cantos/src/css/dbCSS.css');
    }
  }
  
  // Imágenes: mostrar logo por defecto
  if (request.url.match(/\.(jpg|jpeg|png|gif|ico)$/i)) {
    return caches.match('/cantos/img/logo_cantos.png');
  }
  
  // Otros recursos: mensaje de error
  return new Response('Contenido no disponible offline', {
    status: 503,
    statusText: 'Offline',
    headers: new Headers({ 'Content-Type': 'text/plain' })
  });
}

function isCantoRequest(path) {
  return path.startsWith('/cantos/resucito/') && 
         (path.endsWith('.html') || path.endsWith('.js') || 
          path.endsWith('.css') || path.endsWith('.mp3'));
}

function getCurrentPageName() {
  const path = self.location.pathname;
  return path.split('/')
    .pop()
    .replace(/\.(html|php)$/, '')
    .replace(/[^a-z0-9_-]/gi, '') // Sanitización
    || 'index';
}