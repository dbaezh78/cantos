// cachecantos.js - Versión 4.4 (Completamente optimizado)
const CACHE_NAME = 'cache-cantos-v4.5';
const OFFLINE_URL = '/cantos/resucito/offline.html';
const AUDIO_CACHE = 'audio-cache-v1';

// Assets esenciales para el funcionamiento offline
const CORE_ASSETS = [
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
  '/cantos/src/font/LibreFranklin-Bold.ttf',
  '/cantos/src/font/font.woff2',
  '/cantos/src/font/Fave-ScriptBoldPro.woff2',
  '/cantos/src/font/Fave-ScriptBoldPro.woff',
  '/cantos/src/font/Fave-ScriptBoldPro.ttf',
  '/cantos/src/font/FranklinGothicMedium.ttf',
  
  // Imágenes e íconos
  '/cantos/img/logo_cantos.png',
  '/cantos/src/ico.ico',
  '/cantos/src/icons/icon-192x192.png',
  '/cantos/src/icons/icon-512x512.png',

    // JSON de búsqueda
  '/cantos/resucito/find/index.json'

];

// Audio que debe cachearse durante la instalación
const AUDIO_ASSETS = [
  // Agrega aquí las rutas de tus archivos de audio importantes
  '/audio/ejemplo.mp3'
];

// Instalación: Cachear recursos esenciales y audio
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('[SW] Cacheando recursos esenciales');
          return cache.addAll(CORE_ASSETS);
        }),
      caches.open(AUDIO_CACHE)
        .then(cache => {
          console.log('[SW] Cacheando archivos de audio');
          return cache.addAll(AUDIO_ASSETS);
        })
    ])
    .then(() => {
      console.log('[SW] Todos los recursos fueron cacheados');
      return self.skipWaiting();
    })
    .catch(error => {
      console.error('[SW] Error durante la instalación:', error);
    })
  );
});

// Estrategia de Fetch mejorada
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar solicitudes que no sean GET o de otro origen
  if (request.method !== 'GET' || !url.origin.startsWith(self.location.origin)) {
    return;
  }

  // Manejo especial para archivos de audio
  if (url.pathname.endsWith('.mp3')) {
    event.respondWith(
      serveAudio(request)
    );
    return;
  }

  // API: Network First con fallback a cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      networkFirstWithCache(request)
    );
    return;
  }

  // Recursos estáticos: Cache First con actualización en background
  event.respondWith(
    cachedFirstWithUpdate(request)
  );
});

// Activación: Limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, AUDIO_CACHE];
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (!cacheWhitelist.includes(cache)) {
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

/***********************
 * FUNCIONES AUXILIARES
 ***********************/

// Estrategia para archivos de audio
function serveAudio(request) {
  return caches.match(request)
    .then(cachedResponse => {
      // Intentar actualizar el cache en segundo plano
      if (cachedResponse) {
        updateAudioCache(request);
        return cachedResponse;
      }
      
      // Si no está en cache, buscar en la red
      return fetch(request)
        .then(response => {
          if (response.ok) {
            // Cachear la respuesta
            const responseToCache = response.clone();
            caches.open(AUDIO_CACHE)
              .then(cache => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(() => {
          // Respuesta de audio vacía para offline
          return new Response('', {
            status: 404,
            headers: { 'Content-Type': 'audio/mpeg' }
          });
        });
    });
}

// Actualizar cache de audio en segundo plano
function updateAudioCache(request) {
  fetch(request)
    .then(response => {
      if (response.ok) {
        const responseToCache = response.clone();
        caches.open(AUDIO_CACHE)
          .then(cache => cache.put(request, responseToCache));
      }
    })
    .catch(() => {}); // Silenciar errores
}

// Estrategia Network First para APIs
function networkFirstWithCache(request) {
  return fetch(request)
    .then(response => {
      // Cachear solo respuestas válidas
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(request, clone));
      }
      return response;
    })
    .catch(() => caches.match(request));
}

// Estrategia Cache First con actualización
function cachedFirstWithUpdate(request) {
  return caches.match(request)
    .then(cachedResponse => {
      // Devolver cacheado si existe
      if (cachedResponse) {
        updateCacheInBackground(request);
        return cachedResponse;
      }
      
      // Si no está en cache, cargar de la red
      return fetch(request)
        .then(response => {
          if (response.ok) {
            // Cachear la respuesta
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(() => handleOfflineFallback(request));
    });
}

// Manejo de offline mejorado
function handleOfflineFallback(request) {
  const url = new URL(request.url);

  // Páginas HTML: mostrar offline.html
  if (request.headers.get('accept').includes('text/html')) {
    return caches.match(OFFLINE_URL);
  }
  
  // CSS: mostrar CSS principal
  if (url.pathname.endsWith('.css')) {
    return caches.match('/cantos/src/css/dbCSS.css');
  }
  
  // Imágenes: mostrar logo por defecto
  if (request.url.match(/\.(jpg|jpeg|png|gif|ico)$/i)) {
    return caches.match('/cantos/img/logo_cantos.png');
  }
  
  // Respuesta genérica para otros recursos
  return new Response('Contenido no disponible offline', {
    status: 503,
    statusText: 'Offline',
    headers: new Headers({ 'Content-Type': 'text/plain' })
  });
}

// Actualización de cache en segundo plano
function updateCacheInBackground(request) {
  fetch(request)
    .then(response => {
      if (response.ok) {
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(request, responseToCache));
      }
    })
    .catch(() => {}); // Silenciar errores
}