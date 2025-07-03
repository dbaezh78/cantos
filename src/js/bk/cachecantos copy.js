// cachecantos.js - Versión 4.2 (Corrección completa)
const CACHE_NAME = 'cache-cantos-v4.2';
const OFFLINE_URL = '/cantos/resucito/offline.html';
const COMMON_ASSETS = [
  // Core
  '/cantos/index.html',
  '/cantos/src/manifest.json',
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

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Cacheando recursos esenciales');
      try {
        // Cachear recursos principales
        await cache.addAll(COMMON_ASSETS);
        
        // Cachear dinámicamente recursos específicos de la página actual
        const pageName = getCurrentPageName();
        if (pageName && pageName !== 'index') {
          const pageSpecificAssets = [
            `/cantos/src/css/cssc/${pageName}.css`,
            `/cantos/resucito/cjs/${pageName}.js`,
            `/cantos/resucito/a/${pageName}.html`,
            `/cantos/resucito/a/${pageName}.mp3`
          ];
          
          await Promise.all(
            pageSpecificAssets.map(asset => {
              return cache.add(asset).catch(e => {
                console.warn(`[SW] No se pudo cachear ${asset}:`, e.message);
              });
            })
          );
        }
      } catch (error) {
        console.error('[SW] Error durante instalación:', error);
      }
      return self.skipWaiting();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Evitar cachear solicitudes no GET o de origen diferente
  if (request.method !== 'GET' || !url.origin.startsWith(self.location.origin)) {
    return fetch(request);
  }

  // Estrategia: Cache First con actualización en background
  event.respondWith(
    caches.match(request).then(async (cachedResponse) => {
      // Devuelve recurso cacheado si existe
      if (cachedResponse) {
        // Actualizar caché en background si es un canto
        if (isCantoRequest(url.pathname)) {
          updateCacheInBackground(request);
        }
        return cachedResponse;
      }
      
      try {
        // Intenta cargar de la red
        const networkResponse = await fetch(request);
        
        // Cachear respuesta si es exitosa
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });
        }
        
        return networkResponse;
      } catch (error) {
        // Manejo de errores mejorado
        return handleOfflineFallback(request, url);
      }
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Eliminando cache antigua:', cache);
            return caches.delete(cache);
          }
        })
      ).then(() => self.clients.claim())
    })
  );
});

// Helper functions
function getCurrentPageName() {
  const path = self.location.pathname;
  return path.split('/')
    .pop()
    .replace(/\.(html|php)$/, '')
    .replace(/[^a-z0-9_-]/gi, '') // Sanitización
    || 'index';
}

function isCantoRequest(path) {
  return path.startsWith('/cantos/resucito/') && 
         (path.endsWith('.html') || path.endsWith('.js') || 
          path.endsWith('.css') || path.endsWith('.mp3'));
}

function updateCacheInBackground(request) {
  fetch(request).then(networkResponse => {
    if (networkResponse && networkResponse.status === 200) {
      const responseToCache = networkResponse.clone();
      caches.open(CACHE_NAME).then(cache => {
        cache.put(request, responseToCache);
      });
    }
  }).catch(() => {}); // Silenciar errores de actualización
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