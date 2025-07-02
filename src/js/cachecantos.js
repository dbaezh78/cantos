// cachecantos.js - Versión 3.1 (Optimizada)
const CACHE_NAME = 'cache-cantos-v3.1';
const COMMON_ASSETS = [
  // Core
  '/cantos/index.html',
  '/cantos/src/manifest.json',
  
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
  '/cantos/src/icons/icon-192x192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Cacheando recursos esenciales');
      try {
        // Cachear recursos principales
        await cache.addAll(COMMON_ASSETS);
        
        // Cacheado dinámico (mejorado)
        const pageName = getCurrentPageName();
        const pageSpecificAssets = [
          `/cantos/src/css/cssc/${pageName}.css`,
          `/cantos/resucito/cjs/${pageName}.js`,
          `/cantos/${pageName}.html`
        ].filter(Boolean);

        await Promise.all(
          pageSpecificAssets.map(asset => 
            cache.add(asset).catch(e => 
              console.warn(`[SW] No se pudo cachear ${asset}:`, e.message)
            )
          )
        );
      } catch (error) {
        console.error('[SW] Error durante instalación:', error);
      }
      return self.skipWaiting();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Evitar cachear solicitudes no GET o de origen diferente
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) {
    return fetch(request);
  }

  // Estrategia: Cache First con actualización en background
  event.respondWith(
    caches.match(request).then(async (cachedResponse) => {
      // Devuelve recurso cacheado si existe
      if (cachedResponse) return cachedResponse;
      
      try {
        // Intenta cargar de la red
        const networkResponse = await fetch(request);
        
        // Actualiza caché en background (excepto para páginas HTML)
        if (!request.url.endsWith('.html')) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
      } catch (error) {
        // Fallbacks personalizados
        if (request.headers.get('accept').includes('text/html')) {
          return caches.match('/cantos/index.html');
        }
        if (request.url.endsWith('.png')) {
          return caches.match('/cantos/img/logo_cantos.png');
        }
      }
    })
  );
});

// Helpers (actualizados)
function getCurrentPageName() {
  const path = self.location.pathname;
  return path.split('/')
    .pop()
    .replace(/\.(html|php)$/, '')
    .replace(/[^a-z0-9_-]/gi, '') // Sanitización
    || 'index';
}